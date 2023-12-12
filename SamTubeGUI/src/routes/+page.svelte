<script>
	import Thumbnail from './Thumbnail.svelte';
	import { onMount } from 'svelte';

	const ytPlayerId = 'youtube-player';

	let player;

	let currentId = '3kiKmiimZMM';

	onMount(() => {
		function load() {
			player = new YT.Player(ytPlayerId, {
				height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) * 0.9,
				width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
				videoId: currentId,
				playerVars: {
					playsinline: 1,
					autoplay: 1
				}
			});
		}

		if (window.YT) {
			load();
		} else {
			window.onYouTubeIframeAPIReady = load;
		}
	});

	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let videos = [
		{ title: 'Storybots', text: 'Big Brown Boogieing Bear', id: '3kiKmiimZMM' },
		{ title: 'Storybots', text: 'Walk Like A Camel', id: 'uan8qs0gRjI' },
		{ title: 'Storybots', text: 'Dance With the Elephants', id: 'MLnfCNeDZEw' },
		{ title: 'Storybots', text: 'Wheels on the Bus', id: 'JZCqZa47uXk' },
		{ title: 'Storybots', text: "If You're Happy and You Know It", id: 'gF9FZlv3TKc' },
		{ title: 'Storybots', text: 'Tiger In The Jungle', id: 'TCgnHNNPCkA' },
		{ title: 'Storybots', text: 'Row Row Row Your Boat', id: 'JZCqZa47uXk' }
	];

	function getDate() {
		let today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = months[today.getMonth()];
		var yyyy = today.getFullYear();

		return `${days[today.getDay()]} ${mm} ${dd}, ${yyyy}`;
	}

	async function getWeather() {
		const res = await fetch('https://httpbin.org/post', {
			method: 'POST',
			body: JSON.stringify({
				foo,
				bar
			})
		});

		const json = await res.json();
		result = JSON.stringify(json);
	}

	function handleUpdate(event) {
		currentId = event.detail.videoId;
		player.loadVideoById(currentId);
	}
</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>
<div>
	<div class="d-flex" id="wrapper">
		<!-- Sidebar-->
		<div class="border-end bg-black" id="sidebar-wrapper">
			<div class="sidebar-heading border-bottom bg-dark handwrite">SamTube</div>
			<div id="scroll-select" class="list-group list-group-flush">
				{#each videos as { title, text, id }, i}
					<Thumbnail on:updated={handleUpdate} {title} {text} videoId={id} />
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
								<div class="nav-link" style="color:white; font-weight: bold">{getDate()}</div>
							</li>
							<li class="nav-item active"><a class="nav-link" href="#!">Home</a></li>
							<li class="nav-item"><a class="nav-link" href="#!">Link</a></li>
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
							</li>
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
