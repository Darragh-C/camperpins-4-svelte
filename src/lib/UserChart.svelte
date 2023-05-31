<script>
  import { camperpinsService } from "../services/camperpins-service";
  import { dataMod } from "../services/data-mod";
  import { onMount } from "svelte";
  import ChartTemplate from "./ChartTemplate.svelte";
  import { chartTypes } from "../stores";
  import ChartFilter from "./ChartFilter.svelte";
  import CheckBox from "./CheckBox.svelte";
  import { irishCounties } from "../stores";
 

  let AllDistinctLabels = [];
  let chartLabels;
  let campType = [];
  let title = '';
  let showTitle = false;
  let chartType = 'bar';
  let counties = [...irishCounties];

  onMount(async () => {
    const allCategories = dataMod.stripCategoryName(await camperpinsService.getCategories());
    campType = dataMod.removeCounties(allCategories);
    AllDistinctLabels = dataMod.getDistinct(campType);


  });

  function submitTitle() {
    showTitle = true;
  }

  function updateChartType(event) {
    console.log(`updating chart type with: ${event.detail.option}`)
    chartType = event.detail.option;
  }

  function updateChartLabels(event) {
    console.log(`updating chart labels with: ${event.detail.array}`)
    chartLabels = event.detail.array;
  }

  async function filterCounty(event) {
    const catObjs = await camperpinsService.getCategories();

    const countyCats = dataMod.filterCountyObjs(catObjs, event.detail.option);
    console.log(`Cork: ${countyCats}`);
    const countyCatPinIds = countyCats.map(obj => obj.pinId);
    console.log(`Pin ids: ${countyCatPinIds}`);

    const pinsCategories = [];
    for (let i = 0; i < countyCatPinIds.length; i++) {
      const pinCats = dataMod.filterCategoriesForPin(countyCatPinIds[i], catObjs);
      for (let j = 0; j < pinCats.length; j++) {
        pinsCategories.push(pinCats[j]);
      }
    }
    console.log(`pinsCategories: ${pinsCategories}`);

    const countyCatNames = dataMod.stripCategoryName(pinsCategories);
    console.log(`countyCatNames: ${countyCatNames}`);

    const countyPinCamptypes = dataMod.removeCounties(countyCatNames);
    console.log(`County: ${countyPinCamptypes}`);

    campType = countyPinCamptypes;
  }

</script>



{#if !showTitle}
  <div class="field">
    <div class="columns">
      <div class="column">
        <input class="input is-rounded" type="text" bind:value={title} placeholder="Enter a title" />
      </div>
      <div class="column">
        <button class="button is-link" on:click={submitTitle}>Submit</button>
      </div>
    </div>
  </div>
{:else}
  <h1 class="title is-4">{title}</h1>
{/if}

<div class="columns">
  {#if chartLabels}
    <div class="column is-four-fifths">
      <ChartTemplate submittedTitle={title} chartType={chartType} chartLabels={chartLabels} chartDatapoints={campType} />
    </div>
  {:else}
    <div class="column is-four-fifths">
      <div class="has-text-centered">
        <h1 class="title is-4">Your chart goes here</h1>
      </div>
    </div>
  {/if}
  <div class="column is-one-fifth">
    <CheckBox checkBoxes={AllDistinctLabels} on:updatedCheckboxes={updateChartLabels}/>
  </div>
</div>

<div class="columns">
  <div class="column is-third">
    <ChartFilter options={chartTypes} filterName={"Chart Type"} on:selectedOption={updateChartType} />
  </div>
  <div class="column is-third">
    <ChartFilter options={counties} filterName={"Counties"} on:selectedOption={filterCounty}/>
  </div>
  <div class="column is-third">

  </div>
</div>
