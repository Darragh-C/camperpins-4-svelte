<script>
  import { weatherUtils } from "../services/weather-utils";

  export let weatherData = [];

  const data = weatherUtils.objectStrip(weatherData);
  const reducedObj = weatherUtils.objectsReduce(data);
  const trendObject = weatherUtils.trendObject(reducedObj);
  console.log(trendObject);

</script>


<h3 class="title is-3">Forecast</h3>
<div class="columns box">
  {#each Object.entries(trendObject) as [key, value]}
    <div class="column">
      <div class="has-text-centered"><i class={value[0]} style={value[1]} /></div>
      <br/>
      <div class="has-text-centered"><h5 class="title is-5">{weatherUtils.titleCase(weatherUtils.removeUnderscore(key))}</h5></div>
    </div>
  {/each}
</div>
