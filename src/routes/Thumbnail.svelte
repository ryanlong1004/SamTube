<script>
	import { onMount, createEventDispatcher } from 'svelte';

	export let videoId;
	let title = 'loading...';
	let text = 'loading...';

	const dispatch = createEventDispatcher();

	function play() {
		dispatch('updated', {
			text: text,
			videoId: videoId,
			title: title
		});
	}

	onMount(async () => {
		await getData();
	});

	async function getData() {
		const response = await fetch(
			`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=AIzaSyCVOiu_t3Mt5od2IYHQVuWPZIr_B8akA5s`,
			{
				method: 'GET'
			}
		);
		const data = await response.json();
		title = data['items'][0].snippet.title;
		text = data['items'][0].snippet.channelTitle;
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
