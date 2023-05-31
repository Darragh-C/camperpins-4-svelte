<script>
  import { weatherUtils } from "../services/weather-utils";

  export let weatherData = {};

  console.log(weatherData.current.weather[0].description);

  const icon = weatherData.current.weather[0].icon;

  const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`

</script>


<div class="box">
  <div class="columns is-vcentered">
    <div class="column"> 
      <h3 class="title is-3">{weatherUtils.titleCase(weatherData.current.weather[0].description)}</h3>
      <img alt="weather-icon" src={iconSrc} width="100"/>
    </div>
    <div class="column"> 
      <h5 class="title is-5">Temperature</h5>
      <h4 class="title is-4">{weatherData.current.temp} C</h4>
    </div>
    <div class="column"> 
      <h5 class="title is-5">Humidity</h5>
        <h4 class="title is-4">{weatherData.current.humidity}% </h4>
    </div>
    <div class="column"> 
      <h5 class="title is-5">Pressure</h5>
      <h4 class="title is-4">{weatherData.current.pressure} PA</h4>
    </div>
    <div class="column"> 
      <h5 class="title is-5">Wind speed</h5>
      <h4 class="title is-4">{weatherData.current.wind_speed} kmph</h4>
    </div>
    <div class="column"> 
      <h5 class="title is-5">Wind direction</h5>
      <h4 class="title is-4">{weatherData.current.wind_deg} °</h4>
    </div>
  </div>
</div>
