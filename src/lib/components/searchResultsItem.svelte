<!-- ResultsItem component -->
    
<!-- examples below containing dummy data/images -->
<!-- for range of weather icons see /images/amcharts_weather_icons_1.0.0/ -->
<!-- replace hard-coded data with dynamic elements  -->

<article class="results-item">
    <a class="location-page-link" title="Find out more" href="location-page.html">
    
        <section class="place-info">
            <h4 class="number">1</h4>
            <h2>Las Vegas <span class="country">USA</span></h2>
        </section>

        <section class="weather-data-and-img">

            <div class="weather-data">
                <div class="item temperature-average">
                    <img src="./images/amcharts_weather_icons_1.0.0/animated/day.svg" alt="weather icon"> 
                    <p>Average <strong>30&#8451;</strong></p>
                </div>

                <div class="item temperature-current">
                    <img src="./images/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg" alt="weather icon"> 
                    <p>Currently <strong>32&#8451;</strong></p>
                </div>
            </div>

            <img class="location-image" src="./images/locations/location-dummy-img-las-vegas-usa.png" alt="Destination"> 
        </section>

    </a>
</article>



<style>
    /* search results page - result items area */

    .results-item {
        border-bottom: 1px dashed var(--col-dividers-borders);
        padding: 0 0 1.5rem 0;
        margin: 0 1rem 1.5rem 1rem;
    }
    .results-item a {  /* wrap entire item content in a link */
        color: var(--col-brand-secondary);
    }
    .results-item a:hover {  
        text-decoration: none;
        background-color: #FF5F00;
    }
    .results-item .place-info {
        width: 100%;
        display: grid;
        grid-template-columns: auto auto;
        justify-content: start;
        margin-bottom: .75rem;
    }
    .results-item .place-info .number {
        margin-right: 1rem;
        color: var(--col-brand-tertiary);
    }
    .results-item .place-info h2:hover {
        text-decoration: underline;
    }
    .results-item .place-info h2 span.country {
        font-size: 1rem;
        letter-spacing: 0;
        font-weight: normal;
        font-size: 0.875rem;
        color: #5e5e5e;
        margin-left: 0.5rem;
    }

    .results-item .weather-data-and-img {
        display: grid;
        grid-template-columns: 57% 40%;
        gap: 3%;
        padding-left: 0;
    }
    .results-item .weather-data-and-img img {
        width: 100%;
        border-radius: 20px;
        align-self: end;
    }
    .results-item .weather-data-and-img .item {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: start;
        align-items: center;
        text-align: left;
    }
    .results-item .weather-data-and-img .item p {
        font-size: 12px;
    }
    .results-item .weather-data-and-img .item p strong {
        font-weight: normal;
        display: block;
        font-size: 1.625rem;
    }

    /* --------- MEDIA QUERIES FOR LARGER DEVICES---------  */

    /* medium devices, 768px + */
    @media only screen and (min-width: 768px) { 

        /* search results page */
        .results-item {
            max-width: 620px;
        }
        .results-item .weather-data-and-img {
            grid-template-columns: auto 60%; 
        }

        /* search results page - item hover effects */
        .results-item a {
            transition: transform .1s; /* animation for :hover zoom effect */
            display: block;
        }
        .results-item a:hover {
            transform: scale(0.98); /* zoom effect */
            background: var(--col-bg);
            opacity: 1;
        }
        .results-item a:hover h2 {
            color: var(--col-brand-primary);
        }
        .results-item a:hover p {
            color: var(--col-brand-tertiary);
        }
        .results-item a:hover img {
            opacity:0.7;
        }
    }
</style>