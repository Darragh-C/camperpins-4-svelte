<script>
  import { onMount } from "svelte";

  /** @type {import('./$types').PageData} */
  export let data;
  const { weather } = data

  //export let lat;
  //export let long;
  //let latestWeather = {};
  //lat, long

  //onMount(getLatestWeather);

  //async function getLatestWeather() {
  //  latestWeather = await openWeather.getWeather();
  //  console.log(latestWeather);
  //}
  const icon = weather.current.weather[0].icon;

  const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`

</script>


<div class="columns">
  <div class="column"> 
    <p>{weather.current.weather[0].description}</p>
  </div>
  <div class="column"> 
    <p>{weather.current.temp}</p>
  </div>
  <div class="column"> 
    <p>{weather.current.humidity}</p>
  </div>
  <div class="column"> 
    <p>{weather.current.pressure}</p>
  </div>
  <div class="column"> 
    <p>{weather.current.wind_speed}</p>
  </div>
  <div class="column"> 
    <p>{weather.current.wind_deg}</p>
  </div>
  <div class="column"> 
    <img alt="weather-icon" src={iconSrc} width="100"/>
  </div>
</div>
