<script lang="ts">
    import SearchResultsItem from '$lib/components/searchResultsItem.svelte';
</script>


<svelte:head>
	<title>Search Results</title>
</svelte:head>


<main class="search-results">

    <!-- location intro -->
    <section class="intro">
        <div class="text-area">
            <h1>    
                Places like <strong>Cairo</strong>
            </h1>
            <p class="climate-zone">Hot Desert Climate</p>
        </div>
    </section>

    <!-- map feature - showing location of results -->
    <section class="results-map">
        <!-- map functionality to go here -->
        <!-- currently includes placeholder background image and markers.   
        to remove background img - see 'body.search-results .results-map' in main css file.
        also delete dummy marker images below -->
        <img src="./images/map-marker_orange.svg" alt="map marker" width="20px" style="margin-left:50px; top: 40px; position: relative;"> 
        <img src="./images/map-marker_orange.svg" alt="map marker" width="20px" style="margin-left:50px; top: 70px; position: relative;"> 
        <img src="./images/map-marker_orange.svg" alt="map marker" width="20px" style="margin-left:40px; top: 30px; position: relative;"> 
        <img src="./images/map-marker_orange.svg" alt="map marker" width="20px" style="margin-left:50px; top: 40px; position: relative;"> 
        <img src="./images/map-marker_orange.svg" alt="map marker" width="20px" style="margin-left:50px; top: 90px; position: relative;"> 
        
    </section>

    <!-- sort results or change search params -->
    <section class="change-search-and-sort">
        
        <p class="change-search">
            <a title="Change search terms" href="/">
                <i class="searchIcon material-icons">search </i>Change search
            </a>
        </p>

        <div class="sort">
            <!--currently sorted by population-->
            <label for="sort-by">Sort by</label>
            <select name="sort-by" id="sort-by">
                <!-- <option value="distance-close">Nearest</option>
                <option value="distance-far">Farthest</option> -->
                <option value="population">Population</option>
                <option value="temp-hottest">Hottest</option>
                <option value="temp-coldest">Coldest</option>

            </select>
        </div>
    </section>


    <!-- ResultsItems - copied a few times to test out the layout. replace with correct code to display ,ultiple items. -->
    
    <section class="results-items">
        <SearchResultsItem />    
        <SearchResultsItem /> 
        <SearchResultsItem />    
        <SearchResultsItem />    
    </section>


    <!-- floaty 'quick search' icon. to appear on all internal pages -->
    <a class="quick-search" title="New search" href="quick-search-shortcut">
        <i class="searchIcon material-icons">search </i>
    </a>

</main>



<style>
    /* styles used for this specific page */

    /* note: may have duplicated some 'global' styles here and there (could use a clean up later), but for demo purposes who cares */


    /* search results page */
    main.search-results section {  /* center all 'section' elements & set widths */
        width: 100%;
        max-width: 1240px;
        margin-right: auto;
        margin-left: auto;
    }

    main.search-results {
        margin-top: 60px;
        margin-bottom: 180px;
        width: 100%;
    }
    main.search-results section.intro {
        background: var(--col-grad);
        padding: 1rem;
        max-width: none; /* override default for 'sections' & fill width */
    }
    main.search-results .intro .text-area {
        display: grid;
        grid-template-columns: 70% auto;
        gap: 3%;
        max-width: 1240px;
        margin-right: auto;
        margin-left: auto;
    }
    main.search-results .intro h1 {
        color: var(--col-bg);
        font-size: 1.625rem; /* 26px default */
        margin-bottom: 0;
    }
    main.search-results .intro h1 strong {
        font-weight: bold;
        display: block;
        font-size: 2.25rem; /* 36px default */
    }
    main.search-results .intro p.climate-zone {
        font-size: 0.75rem; /* 12px default */
        color: var(--col-bg); 
        margin-bottom: 0;
        align-self: end;
        justify-self: end;
        text-align: right;
        /* text-transform: uppercase; */
        font-style: italic;
    }
    main.search-results .intro label {
        font-size: 0.875rem; /* 14px default */
    }

    main.search-results section.results-map {
        height: 150px;
        display: block;
        background-color: #dbeeff;
        background: url("../images/search-results-dummy-map.png") center; /* delete this image when real map is in place */
        overflow: hidden;
        margin-bottom: 1rem;
        max-width: none; /* override default for 'sections' & fill width */
    }

    /* search results page - change search & sorting features */
        main.search-results .change-search-and-sort {
        display: grid;
        grid-template-columns: auto auto;
        border-bottom: 1px dashed var(--col-dividers-borders);
        padding: 0 1rem 1rem 1rem;
        margin-top: 0; 
        margin-bottom: 1.5rem;
    }
    main.search-results .change-search-and-sort .change-search {
        font-size: 0.75rem; /* 12px default */
        text-decoration: underline;
        color: var(--col-brand-primary);
    }
    main.search-results .change-search-and-sort .change-search i {
        top:8px;
        position: relative;
        margin-right: 0.25em;
    }
    main.search-results .change-search-and-sort .sort {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        justify-content: end;
        gap: 10px
    }
    main.search-results .change-search-and-sort .sort label {
        font-weight: normal;
        font-size: 0.75rem; /* 12px default */
    }
    main.search-results .change-search-and-sort .sort select {
        margin-bottom: 0;
        font-size: 0.75rem; /* 12px default */
    }
    main.search-results .change-search-and-sort .sort select option {
        font-size: .875rem; /* 14px default */
    }
    /* search results page - result items area */
    main.search-results .results-items { /* holds all result items */
        display: grid;
    }

    /* medium devices, 768px + */
    @media only screen and (min-width: 768px) { 

        /* search results page */
        main.search-results .intro .text-area {
            padding-top: 2rem;
        }
        main.search-results .intro h1 {
            font-size: 3.375rem; /* 54px default */
            font-weight: 400;
        }
        main.search-results .intro h1 strong {
            font-size: 3.375rem; /* 54px default */
            display:inline;
        }

        main.search-results .results-items { /* reorganise the layout */
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3%
        }

        main.search-results section.results-map { /* taller map */
            height: 275px;
        }
    }

</style>

