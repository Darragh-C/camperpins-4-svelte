<script>
  import Chart from "svelte-frappe-charts";
  import { onMount, afterUpdate } from "svelte";

  export let chartTitle = "";
  export let chartType = "";
  let newChartType = chartType;
  export let chartLabels = [];
  let newChartLabels = chartLabels;
  export let chartDatapoints = [];
  let newchartDatapoints = chartDatapoints;
  export let submittedTitle = "";
  
  let data = {
      labels: [],
      datasets: [
          {
              values: []
          }
      ]
  };

  

  onMount(async () => {
    updateData();
  });

  afterUpdate(() => {
    if (chartType !== newChartType) {
      newChartType = chartType;
      updateData();
    } else if (chartLabels !== newChartLabels) {
      newChartLabels = chartLabels;
      updateData();
    } else if (chartDatapoints !== newchartDatapoints) {
      newchartDatapoints = chartDatapoints;
      updateData();
    }
  });


  function updateData() {
    data.labels = [...chartLabels];
    data.datasets[0].values = valuesArray(data.labels, chartDatapoints);
    console.log(`new chartDatapoints: ${chartDatapoints}`);
  }

  function valuesArray(labelArray, dataPointsArray) {
    let valueArray = [];
    for (let i = 0; i < labelArray.length; i++) {
      let count = 0;
      for (let j = 0; j < dataPointsArray.length; j++) {
        if (dataPointsArray[j] == labelArray[i]) {
          count++;
        }
      }
      valueArray.push(count);
    }
    return valueArray;
  }
</script>


{#if !submittedTitle}
    <h1 class="title is-4 has-text-centered">{chartTitle}</h1>
{/if}

{#if chartType !== newChartType}
  {#key chartType}
    <Chart {data} type={chartType} />
  {/key}
{:else}
  <Chart {data} type={chartType} />
{/if}

