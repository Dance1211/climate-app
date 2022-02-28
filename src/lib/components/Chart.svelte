<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';
	import axios from 'axios';
	export let place = 'liverpool';
	let ctx;
	let weather;

	onMount(async () => {
		const fetchWeather = async () => {
			try {
				const res = await axios.get(`api/historical/${place}`);
				return res.data.tempByMonth;
			} catch (err) {
				console.log(err);
			}
		};
		weather = await fetchWeather();

		const myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: weather.map((x) => x[0]),
				datasets: [
					{
						label: 'Avg Temp by Month',
						data: weather.map((x) => x[1]),
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(54, 162, 235, 0.2)',
							'rgba(255, 206, 86, 0.2)',
							'rgba(75, 192, 192, 0.2)',
							'rgba(153, 102, 255, 0.2)',
							'rgba(255, 159, 64, 0.2)'
						],
						borderColor: [
							'rgba(255, 99, 132, 1)',
							'rgba(54, 162, 235, 1)',
							'rgba(255, 206, 86, 1)',
							'rgba(75, 192, 192, 1)',
							'rgba(153, 102, 255, 1)',
							'rgba(255, 159, 64, 1)'
						],
						borderWidth: 1
					}
				]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	});
</script>

<canvas id="myChart" bind:this={ctx} />
