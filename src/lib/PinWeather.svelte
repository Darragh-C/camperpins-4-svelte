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

</script>


<div class="columns">
  <div class="column"> 
    <p>{weather.current.weather.description}</p>
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
    <p>{weather.hourly.wind_speed}</p>
  </div>
  <div class="column"> 
  </div>
</div>
