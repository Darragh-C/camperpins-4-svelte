<script>

  export let weather = {};

  console.log(weather.current.weather[0].description);

  const icon = weather.current.weather[0].icon;

  const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`

</script>


<div class="columns is-vcentered">
  <div class="column box"> 
    <h1>{weather.current.weather[0].description}</h1>
    <img alt="weather-icon" src={iconSrc} width="100"/>
  </div>
  <div class="column box"> 
    <h2>Temperature</h2>
    <h1>{weather.current.temp} C</h1>
  </div>
  <div class="column box"> 
    <h2>Humidity</h2>
    <h1>{weather.current.humidity}% </h1>
  </div>
  <div class="column box"> 
    <h2>Pressure</h2>
    <h1>{weather.current.pressure} PA</h1>
  </div>
  <div class="column box"> 
    <h2>Wind speed</h2>
    <h1>{weather.current.wind_speed} kmph</h1>
  </div>
  <div class="column box"> 
    <h2>Wind direction</h2>
    <h1>{weather.current.wind_deg} deg</h1>
  </div>

</div>
