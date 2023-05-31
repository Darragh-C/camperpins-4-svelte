<script>

  import ChartTemplate from "$lib/ChartTemplate.svelte";
  import MainNavigator from "$lib/MainNavigator.svelte";
  import PinWeather from "$lib/PinWeather.svelte";
  import TitleBar from '$lib/TitleBar.svelte';
  import WeatherTrend from "$lib/WeatherTrend.svelte";

  export let data;

  console.log(data);

  const icon = data.weather.current.weather[0].icon;
  const hourly = data.weather.hourly;

  const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`

</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Pin view"} title={"Camperpins Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div> 

  <h2 class="title is-2">{data.pin.name} weather</h2>

  <PinWeather weatherData={data.weather} />

  <WeatherTrend weatherData={hourly} />
<!--

-->
  
