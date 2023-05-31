<script>
  import Chart from "svelte-frappe-charts";
  import { onMount, afterUpdate } from "svelte";

  export let weatherData = [];


  const dateTimes = weatherData.map(data => data.dt);
  const timePlot = dateTimes.slice(0, 10).map(timestamp => formatTimestamp(timestamp));
  
  const tempReadings = weatherData.slice(0, 10).map(data => data.temp);
  const humidReadings = weatherData.slice(0, 10).map(data => data.humidity);
  const feelsLike = weatherData.slice(0, 10).map(data => data.feels_like);
  const clouds = weatherData.slice(0, 10).map(data => data.clouds);
  const pressure = weatherData.slice(0, 10).map(data => data.pressure/10);
  const windSpeed = weatherData.slice(0, 10).map(data => data.wind_speed/10);
  const windGust = weatherData.slice(0, 10).map(data => data.wind_gust/10); 
  
  function formatTimestamp(timestamp) {
    var date = new Date(timestamp * 1000);

    var day = "0" + date.getDate();
    var month = "0" + (date.getMonth() + 1);
    var year = date.getFullYear().toString().substr(-2);
    var hours = "0" + date.getHours();
    var minutes = "0" + date.getMinutes();

    return hours.substr(-2) + ':' + minutes.substr(-2) + ' ' + day.substr(-2) + '/' + month.substr(-2) + '/' + year;
  }
  
  let data = {
      labels: timePlot,
      datasets: [
          {
              name: "Temperature",  
              values: tempReadings
          },
          {
              name: "Feels like",  
              values: feelsLike
          },
          {
              name: "Humidity",
              values: humidReadings
          },
          {
              name: "Clouds",
              values: clouds
          },
          {
              name: "Pressure/10",
              values: pressure
          },
          {
              name: "Wind speed",
              values: windSpeed
          },
          {
              name: "Wind gust",
              values: windGust
          }
      ]
  };

</script>


<h3 class="title is-3">Forecast graph</h3>
<Chart {data} type="line" />

