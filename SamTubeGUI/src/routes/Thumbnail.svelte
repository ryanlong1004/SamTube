<script>
	let name = 'Thumbnail';

	export let videoId;
	export let text;
	export let title;
</script>

<div class="card" onclick="player.loadVideoById('{videoId}', 'large')">
	<img src="https://i.ytimg.com/vi/{videoId}/maxresdefault.jpg" class="card-img-top" alt="..." />
	<div class="card-body">
		<h5 class="card-title">{title}</h5>
		<p class="card-text">{text}</p>
		<!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
	</div>
</div>

<style>
	.card {
		cursor: pointer;
	}
</style>
