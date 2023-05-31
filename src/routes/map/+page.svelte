<script>
  import { beforeUpdate } from "svelte";
  import MainNavigator from "$lib/MainNavigator.svelte";
  import TitleBar from '$lib/TitleBar.svelte';
  import PinMap from "$lib/PinMap.svelte";
  import { camperpinsService } from "../../services/camperpins-service";
  import MapTemplate from "$lib/MapTemplate.svelte";
  import { onMount } from "svelte";

  let categories;
  let pins;

  async function loadMapInputs() {
    console.log('getting categories');
    categories = await camperpinsService.getCategories();
    console.log(`response: ${categories}`);
    console.log(`single: ${categories[0].category}`);
    console.log('getting pins');
    pins = await camperpinsService.getPins();
    console.log(`response: ${pins}`);
    console.log(`single: ${pins[0].name}`);
  }

  onMount(async () => {
    loadMapInputs();
  });

</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Pin map"} title={"Camperpins Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div> 

<MapTemplate layerCategoryObjs={categories} pinObjs={pins} height={80} location={ {lat: 53.2734, lng: -7.7783203} } zoom={7}/>