<script>
  import { onMount } from "svelte/types/runtime/internal/lifecycle";
  import { openWeather } from "../services/open-weather";

  export let lat;
  export let long;
  let latestWeather = {};

  onMount(getLatestWeather);

  async function getLatestWeather() {
    latestWeather = await openWeather.getWeather(lat, long);
  }

</script>

<div class="columns">
  <div class="column"> 
    <p>{latestWeather.current.weather.description}</p>
  </div>
  <div class="column"> 
    <p>{latestWeather.current.temp}</p>
  </div>
  <div class="column"> 
    <p>{latestWeather.current.humidity}</p>
  </div>
  <div class="column"> 
    <p>{latestWeather.current.pressure}</p>
  </div>
  <div class="column"> 
    <p>{latestWeather.hourly.wind_speed}</p>
  </div>
  <div class="column"> 
  </div>
</div>