<script>
  import { weatherUtils } from "../services/weather-utils";

  export let weatherData = [];

  const data = weatherUtils.objectStrip(weatherData);
  const reducedObj = weatherUtils.objectsReduce(data);
  const trendObject = weatherUtils.trendObject(reducedObj);
  console.log(trendObject);

</script>



<div class="columns box">
  {#each Object.entries(trendObject) as [key, value]}
    <div class="column">
      <h4 class="title is-4">{weatherUtils.titleCase(weatherUtils.removeUnderscore(key))}</h4>
      <i class={value[0]} style={value[1]} />
    </div>
  {/each}
</div>
