<script>
	import { onMount } from 'svelte';

	let weather_icon;
	let temp;

	const map_icons = {
		'clear sky': '<i class="fa-solid fa-rainbow" />'
	};

	onMount(async () => {
		await getData();
	});

	async function getData() {
		const res = await fetch(
			'https://api.openweathermap.org/data/2.5/weather?lat=41.31&lon=-75.32&appid=b70600f4495d4665c49354e8081d5424',
			{
				method: 'GET'
			}
		);

		const data = await res.json();
		temp = `${Math.round(data.main.temp * 0.13)} &degF`;
		weather_icon = map_icons[data.weather[0].description.toLowerCase()];
		return JSON.stringify(json);
	}
</script>

<li class="nav-item">
	<div class="nav-link" style="color: white; font-weight: bold;">
		{#if weather_icon}
			{@html weather_icon} {@html temp}
		{:else}
			loading...
		{/if}
	</div>
</li>
