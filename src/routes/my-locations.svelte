<script lang="ts">
</script>

<svelte:head>
	<title>My Places | WhereTo.</title>
</svelte:head>

<main class="text-page my-locations">
	<section class="text-area">
		<h3>Mockup of Saved Places page.</h3>
		<h1>My Places  
			<!-- <span class="material-icons">
			place
			</span>  -->
		</h1>
			
		<!-- test these URLS -->
		<h3 class="search-item">

			<a href="/location?place=cairo&country=egypt">
				<span class="material-icons">place</span>
				Cairo <small>- Egypt</small>
			</a>

			<!--Dummy delete button-->
			<a class="delete" title="Delete" href="#" >
				<span class="material-icons">clear</span>
			</a>
		</h3>
		<h3 class="search-item">
			<a href="/location?place=lapland&country=finland">
				<span class="material-icons">place</span>
				Lapland <small>- Finland</small>
			</a>

			<!--Dummy delete button-->
			<a class="delete" title="Delete" href="#" >
				<span class="material-icons">clear</span>
			</a>
		</h3>
		<h3 class="search-item">
			<a href="/location?place=berlin&country=germany">
				<span class="material-icons">place</span>
				Berlin <small>- Germany</small>
			</a>

			<!--Dummy delete button-->
			<a class="delete" title="Delete" href="#" >
				<span class="material-icons">clear</span>
			</a>
		</h3>


	</section>

</main>

<style>
	h1 {
		border-bottom: 1px dashed var(--col-dividers-borders);
		padding-bottom: 1rem;
	}
	h1 .material-icons {
		margin-left: 1rem;
	}
	h3.search-item a {
		color: var(--col-brand-secondary);
		font-weight: bold;
		line-height: 1.5;
		display: block;
		padding-top: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px dashed var(--col-dividers-borders);
		transition: transform .1s; /* animation for :hover zoom */
	}
	h3.search-item a .material-icons {
		margin-right: 0.5rem;
		top: 4px;
		position: relative;
		display: inline;
		color: #adadad;
	}
	h3.search-item a:hover {
		color: var(--col-brand-tertiary);
		opacity: 1;
		text-decoration: none;
		border-bottom: 1px dashed #a5a5a5;
		transform: scale(1.02); /* zoom effect */
	}
	h3.search-item a small {
		font-weight: normal;
	}
	h3.search-item a.delete  {
		position: relative;
		right: 0;
		bottom: 60px;
		border: none;
		display: block;
		width: 24px;
		height: 24px;
		float: right;
		background: var(--col-bg);
	}
	h3.search-item a.delete span.material-icons {
		color:var(--col-brand-primary);
	}
	h3.search-item a.delete span.material-icons:hover {
		color:var(--col-brand-tertiary);
	}	
	/* --------- MEDIA QUERIES FOR LARGER DEVICES---------  */
	@media only screen and (min-width: 768px) { 

		h3.search-item a {
			padding-left: 1rem;
		}
	}	

</style>
