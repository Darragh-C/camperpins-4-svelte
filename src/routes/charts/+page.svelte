<script>
  import TitleBar from "$lib/TitleBar.svelte";
  import MainNavigator from "$lib/MainNavigator.svelte";
  import UserChart from "$lib/UserChart.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
      <TitleBar subTitle={"Pin analytics"} title={"Camperpins Inc."} />
  </div>
  <div class="column">
      <MainNavigator />
  </div>
</div>

<UserChart />


