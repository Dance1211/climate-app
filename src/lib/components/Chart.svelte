<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';
	let ctx;

	const randomizeNumber = (num: number): number => {
		const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
		const random = Math.floor(Math.random() * 5) * plusOrMinus;
		return num + random;
	};

	const data = [
		{ month: 'Jan', avgTemp: 7 },
		{ month: 'Feb', avgTemp: 8 },
		{ month: 'Mar', avgTemp: 10 },
		{ month: 'Apr', avgTemp: 12 },
		{ month: 'May', avgTemp: 16 },
		{ month: 'Jun', avgTemp: 18 },
		{ month: 'Jul', avgTemp: 20 },
		{ month: 'Aug', avgTemp: 19 },
		{ month: 'Sept', avgTemp: 17 },
		{ month: 'Oct', avgTemp: 14 },
		{ month: 'Nov', avgTemp: 10 },
		{ month: 'Dec', avgTemp: 8 }
	];

	// create dummy data for chart.js visualisation

	onMount(async () => {
		const myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: data.map((x) => x.month),
				datasets: [
					{
						label: 'Avg Temp by Month',
						data: data.map((x) => randomizeNumber(x.avgTemp)),
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
