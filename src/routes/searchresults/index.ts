import { getCitiesSimilarToLocation } from "$lib/models/cities";
import type { LoadInput } from "@sveltejs/kit";
import {getWeather} from '$lib/models/weather'
import axios from 'axios'




export async function get ({url}: LoadInput) {
 
   
	const lat = +url.searchParams.get('lat');
	const lng = +url.searchParams.get('lng');
   
    const cities = await getCitiesSimilarToLocation([lng, lat], {})

   
    const weatherData = await Promise.all(
    cities.map(async (city) => {
      
        const cityWeather = await getWeather(city.city_ascii)
      
        return cityWeather
       
    })
    )

    console.log(weatherData)




  

    

    return {
        status:200,
        body: {
            cities
        }
    }
}