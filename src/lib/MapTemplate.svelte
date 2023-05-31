<script>
  //import "leaflet/dist/leaflet.css";
  import { LeafletMap } from "../services/leaflet-map";
  import { onMount } from "svelte";
  import { camperpinsService } from "../services/camperpins-service";
  import { dataMod } from "../services/data-mod";
  import { user, latestLatLong, lastPin } from "../stores.js";
  import { onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import * as L from "leaflet";
  
  export let layerCategoryObjs = [];
  export let pinObjs = [];
  export let height = 75;
  export let location = { lat: 53.2734, lng: -7.7783203 };
  export let zoom = 8;

  let layerGroupNames = [];
  let currentLayerGroup = 'pin';
  let map = null;


  const mapConfig = {
    location: location,
    zoom: zoom,
    minZoom: 1,
    layers: layerGroupNames,
  };

  const userEmail = $user.email;

  onMount(() => {
    map = new LeafletMap("pin-map", mapConfig);
    map.showZoomControl();
    console.log("mounting map template");
    const newMarker = map.onClickAddMarker();
  });

  function addPinsToMap() {
      /*
    if (layerCategoryObjs.length > 1) {
       */
      // populate layer groups
      console.log(`layerCategoryObjs: ${layerCategoryObjs}`);
      console.log(`pinObjs: ${pinObjs}`);

      layerGroupNames = dataMod.getDistinct(dataMod.stripCategoryName(layerCategoryObjs));

      for (let i = 0; i < layerGroupNames.length; i++) {
        
        const layerGroupName = layerGroupNames[i];
        currentLayerGroup = layerGroupName;
        const layerGroup = map.addLayerGroup(layerGroupName);
        const layerCategories = layerCategoryObjs.filter(item => item.category == layerGroupName);
        const layerPins = pinObjs.filter(pinObj => layerCategories.map(category => category.pinId).includes(pinObj._id));
        console.log(layerGroupName);
        console.log(`layerPins ${i}: ${layerPins.map(pin => pin.name)}`);
        layerPins.forEach((pin) => {
          addPinMarker(map, pin);
        });
      }

      
      /*
    } else {
      console.log(`pin name: ${pinObjs[0].name}`);
      addPinMarker(map, pinObjs[0]);
    }
    */
    map.showLayerControl();
    
  }

  function addPinMarker(map, pin) {
    let markerString = "";
    if (pin.name) {
      markerString = `<a href="/pin/${pin._id}">${pin.name}</a>`;
    } else {
      markerString = `<a href="/pin/${pin._id}">Add pin information</a>`;
    } 
    map.addMarker({ lat: pin.lattitude, lng: pin.longitude }, markerString, currentLayerGroup);
  }

  async function addPin(markerPin) {
    console.log(`attempting to add pin`);
    const users = await camperpinsService.getUsers();
    const loggedInUser = users.find(loggedInUser => loggedInUser.email === userEmail);
    const userId = loggedInUser._id;
    console.log(userId);
    const pin = {
      userid: userId,
      lattitude: markerPin.lat.toString(),
      longitude: markerPin.long.toString(),
    };
    const response = await camperpinsService.addPin(pin);

    if (response) {
      console.log("Pin added");
      lastPin.lat = markerPin.lat;
      lastPin.long = markerPin.long;
      console.log(`last pin: ${lastPin.lat} ${lastPin.long}`);
      goto(`/pin/${response._id}`);
      return response;
    } else {
      console.log("Pin add error");
    }
  }

  const unsub = latestLatLong.subscribe(value => {
    if (value.long && value.long !== lastPin.long && value.lat && value.lat !== lastPin.lat) {
      console.log(`New pin at long ${value.long} and lat ${value.lat}`);
      const newMarker = {
        lat: value.lat,
        long: value.long,
      }; 
      addPin(newMarker);
      
    } 
  });

  onDestroy(unsub);

  $: {
    if (layerCategoryObjs && pinObjs && map) {
      addPinsToMap();
    }
  }

</script>

<div class="box" id="pin-map" style="height:{height}vh" />
