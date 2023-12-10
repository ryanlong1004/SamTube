<script>
	import Thumbnail from './Thumbnail.svelte';
	let name = 'Page';

	let videos = [
		{ title: 'Storybots', text: 'Walk Like A Camel', id: 'uan8qs0gRjI' },
		{ title: 'Storybots', text: 'Dance With the Elephants', id: 'MLnfCNeDZEw' },
		{ title: 'Storybots', text: 'Wheels on the Bus', id: 'JZCqZa47uXk' },
		{ title: 'Storybots', text: "If You're Happy and You Know It", id: 'gF9FZlv3TKc' }
	];
</script>

<div>
	<div class="d-flex" id="wrapper">
		<!-- Sidebar-->
		<div class="border-end bg-black" id="sidebar-wrapper">
			<div class="sidebar-heading border-bottom bg-dark handwrite">SamTube</div>
			<div id="scroll-select" class="list-group list-group-flush">
				{#each videos as { title, text, id }, i}
					<Thumbnail {title} {text} videoId={id} />
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
						<div id="player">
							<!-- <div class="col-lg-6">
                                        <h1 class="mt-5">The Big Picture</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt voluptates rerum eveniet
                                            sapiente repellat esse, doloremque quod recusandae deleniti nostrum assumenda vel beatae sed
                                            aut
                                            modi nesciunt porro quisquam voluptatem.</p>
                                    </div> -->
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->

	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<!-- Bootstrap core JS-->
	<script>
		// 2. This code loads the IFrame Player API code asynchronously.
		var tag = document.createElement('script');

		tag.src = 'https://www.youtube.com/iframe_api';
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		// 3. This function creates an <iframe> (and YouTube player)
		//    after the API code downloads.
		var player;
		function onYouTubeIframeAPIReady() {
			player = new YT.Player('player', {
				height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) * 0.9,
				width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
				videoId: 'MLnfCNeDZEw',
				playerVars: {
					playsinline: 1
				},
				events: {
					onReady: onPlayerReady,
					onStateChange: onPlayerStateChange
				}
			});
		}

		// 4. The API will call this function when the video player is ready.
		function onPlayerReady(event) {
			event.target.playVideo();
		}

		// 5. The API calls this function when the player's state changes.
		//    The function indicates that when playing a video (state=1),
		//    the player should play for six seconds and then stop.
		var done = false;
		function onPlayerStateChange(event) {
			console.log('Player state change');
			//if (event.data == YT.PlayerState.PLAYING && !done) {
			//    setTimeout(stopVideo, 6000);
			//    done = true;
			//}
		}
		function stopVideo() {
			player.stopVideo();
		}
	</script>
</div>
