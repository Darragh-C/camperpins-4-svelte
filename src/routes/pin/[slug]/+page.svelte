<script>
  import PinCoordinates from '$lib/PinCoordinates.svelte';
  import PinTitle from '$lib/PinTitle.svelte';
  import AddPinTitle from '$lib/AddPinTitle.svelte';
  import AddPinDesc from '$lib/AddPinDesc.svelte';
  import PinDesc from '$lib/PinDesc.svelte';
  import MainNavigator from "$lib/MainNavigator.svelte";
  import TitleBar from '$lib/TitleBar.svelte';
  import AddCategory from '$lib/AddCategory.svelte';
  import DeleteImage from '$lib/DeleteImage.svelte';
  import ImageUpload from '$lib/ImageUpload.svelte';
  import DisplayImage from '$lib/DisplayImage.svelte';
  import PinMap from "$lib/PinMap.svelte";
  import MapTemplate from '$lib/MapTemplate.svelte';
  import { camperpinsService } from '../../../services/camperpins-service';
  import { dataMod } from '../../../services/data-mod';
  import DisplayCategories from '$lib/DisplayCategories.svelte';
  import { onMount } from "svelte";
  import { setContext } from 'svelte';
  import PinWeather from '$lib/PinWeather.svelte';
  import { currentPin } from '../../../stores';
  import { get } from 'svelte/store';


  /** @type {import('./$types').PageData} */
  export let data;
  const { pin } = data
  //const { weather } = data.weather

  let currentPinCategories = [];
  /*
  const currentPinCategories = dataMod.filterCategoriesForPin(pin._id, async () => {
    return await camperpinsService.getCategories();
  })
  */

  onMount(async () => {
    getPinCategories();
    
  });

  async function getPinCategories() {
    const allCategories = await camperpinsService.getCategories();
    currentPinCategories = dataMod.filterCategoriesForPin(pin._id, allCategories);
    console.log(currentPinCategories);
  }

  function updateArray(newArray) {
    currentPinCategories = newArray;
  }

</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Pin view"} title={"Camperpins Inc."}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div> 


<div class="columns">
	<div class="column">
		<PinMap mapName={"map1"} pin={pin} height={30} location={ {lat: pin.lattitude, lng: pin.longitude} } zoom={13} tile={"Satellite"} />
	</div>
	<div class="column">
		<PinMap mapName={"map2"} pin={pin} height={30} location={ {lat: pin.lattitude, lng: pin.longitude} } zoom={10} tile={"Terrain"} />
	</div>
</div>

<div >
    <div class="columns is-multiline is-mobile">
        <div class="column is-two-thirds">
          
          {#if pin.name}
            <PinTitle name={pin.name} />
          {:else}   
            <AddPinTitle pinId={pin._id} />
          {/if}
          {#if currentPinCategories}
            <DisplayCategories pinCategories={currentPinCategories} />
          {/if}
          {#if pin.description}
            <PinDesc description={pin.description} />
          {:else}   
            <AddPinDesc pinId={pin._id} />
          {/if}

        </div>
        <div class="column is-one-third">
          <PinCoordinates lat={pin.lattitude} long={pin.longitude} />
          <AddCategory pinId={pin._id} {currentPinCategories} {updateArray} /> 
        </div>
    </div>   
</div>
<div>
  <ImageUpload pin={pin} />
</div>
