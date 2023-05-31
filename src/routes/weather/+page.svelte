<script>

  import MainNavigator from "$lib/MainNavigator.svelte";
  import TitleBar from '$lib/TitleBar.svelte';

  export let data;

  console.log(data);

  const icon = data.weather.current.weather[0].icon;

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


<div class="box">
  <div class="columns is-vcentered">
    <div class="column"> 
      <h3 class="title is-3">{data.weather.current.weather[0].description}</h3>
      <img alt="weather-icon" src={iconSrc} width="100"/>
    </div>
    <div class="column"> 
      <h5 class="title is-5">Temperature</h5>
      <h4 class="title is-4">{data.weather.current.temp} C</h4>
    </div>
    <div class="column"> 
      <h5 class="title is-5">Humidity</h5>
        <h4 class="title is-4">{data.weather.current.humidity}% </h4>
    </div>
    <div class="column"> 
      <h5 class="title is-5">Pressure</h5>
      <h4 class="title is-4">{data.weather.current.pressure} PA</h4>
    </div>
    <div class="column"> 
      <h5 class="title is-5">Wind speed</h5>
      <h4 class="title is-4">{data.weather.current.wind_speed} kmph</h4>
    </div>
    <div class="column"> 
      <h5 class="title is-5">Wind direction</h5>
      <h4 class="title is-4">{data.weather.current.wind_deg} °</h4>
    </div>
  </div>
</div>

