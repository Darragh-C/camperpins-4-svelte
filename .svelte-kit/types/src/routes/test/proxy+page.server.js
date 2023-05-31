// @ts-nocheck
/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ fetch }) {

    const response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=45.66&lon=09.45&units=metric&appid=05969512638dad101c18cf78b4bce256');
    const weather = await response.json();
    //console.log(weather);
    console.log(weather.current.weather[0].description);

    return {
      weather, 
    };
}