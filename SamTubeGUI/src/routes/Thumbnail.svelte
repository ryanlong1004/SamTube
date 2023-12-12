<script>
	import { createEventDispatcher } from 'svelte';

	export let videoId;
	export let text;
	export let title;

	const dispatch = createEventDispatcher();

	function play() {
		dispatch('updated', {
			text: text,
			videoId: videoId,
			title: title
		});
	}
</script>

<div class="card">
	<a href="#" on:click={play}>
		<img src="https://i.ytimg.com/vi/{videoId}/maxresdefault.jpg" class="card-img-top" alt="..." />
		<div class="card-body">
			<h5 class="card-title">{title}</h5>
			<p class="card-text">{text}</p>
			<!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
		</div>
	</a>
</div>

<style>
	.card a {
		cursor: pointer;
		text-decoration: none;
		color: inherit;
	}
</style>
