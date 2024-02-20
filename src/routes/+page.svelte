<script>
	import Thumbnail from './Thumbnail.svelte';
	import { onMount } from 'svelte';
	import Weather from './Weather.svelte';
	import { getDate, getWeather, getVideoDetails, getTime } from '../lib/gateway';
	import { VIDEOS } from '../lib/videos';

	const ytPlayerId = 'youtube-player';

	let player;

	let currentTime;

	let currentId = '3kiKmiimZMM';

	onMount(() => {
		function load() {
			player = new YT.Player(ytPlayerId, {
				height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) * 0.9,
				width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
				videoId: currentId,
				playerVars: {
					playsinline: 1,
					autoplay: 1,
					controls: 1,
					enablejsapi: 1,
					loop: 1,
					cc_load_policy: 1,
					cc_lang_pref: 'en',
					fs: 1
				}
			});
		}
		getWeather();
		getVideoDetails();
		updateTime();

		if (window.YT) {
			load();
		} else {
			window.onYouTubeIframeAPIReady = load;
		}
	});

	function handleUpdate(event) {
		currentId = event.detail.videoId;
		player.loadVideoById(currentId);
	}

	function updateTime() {
		setInterval(() => {
			currentTime = getTime();
		}, 1000);
	}
</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>
<div>
	<div class="d-flex" id="wrapper">
		<!-- Sidebar-->
		<div class="border-end bg-black" id="sidebar-wrapper">
			<div id="main-scroll-logo" class="sidebar-heading">
				<img id="main-logo" src="../img/1.png" alt="Sam Tube Logo" width="200px" />
			</div>
			<div id="scroll-select" class="list-group list-group-flush">
				{#each VIDEOS as { id }, i}
					<Thumbnail on:updated={handleUpdate} videoId={id} />
				{/each}
			</div>
		</div>
		<!-- Page content wrapper-->
		<div id="page-content-wrapper">
			<!-- Top navigation-->
			<nav class="navbar navbar-expand-lg navbar-light bg-dark border-bottom">
				<div class="container-fluid">
					<button class="btn btn-primary" id="sidebarToggle">Toggle Menu</button>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button
					>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto mt-2 mt-lg-0">
							<li class="nav-item">
								<div class="nav-link" style="color:white; font-weight: bold">{currentTime}</div>
							</li>
							<li class="nav-item">
								<div class="nav-link" style="color:white; font-weight: bold">{getDate()}</div>
							</li>
							<li>
								<Weather />
							</li>
							<!-- <li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
							<li class="nav-item">
								<a class="nav-link" href="#!"><i class="fa-regular fa-lightbulb"></i></a>
							</li>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									id="navbarDropdown"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">Dropdown</a
								>
								<div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
									<a class="dropdown-item" href="#!">Action</a>
									<a class="dropdown-item" href="#!">Another action</a>
									<div class="dropdown-divider"></div>
									<a class="dropdown-item" href="#!">Something else here</a>
								</div>
							</li> -->
						</ul>
					</div>
				</div>
			</nav>
			<!-- Page content-->

			<section>
				<div id="big-screen" class="container-fluid">
					<div class="row">
						<div id={ytPlayerId} />
					</div>
				</div>
			</section>
		</div>
	</div>
</div>
