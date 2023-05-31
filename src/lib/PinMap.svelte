<script>
  import "leaflet/dist/leaflet.css";
  //import { LeafletMap } from "../services/leaflet-map";
  import { onMount } from "svelte";
  import { camperpinsService } from "../services/camperpins-service";
  import { dataMod } from "../services/data-mod";
  import { user, latestLatLong, lastPin } from "../stores.js";
  import { onDestroy } from "svelte";
  import { goto } from "$app/navigation";
  import * as L from "leaflet";
  
  export let mapName = 'pin-map2';
  export let pin;
  export let height = 75;
  export let location = { lat: 53.2734, lng: -7.7783203 };
  export let zoom = 8;
  export let tile = "Terrain";

 
  const mapConfig = {
    location: location,
    zoom: zoom,
    minZoom: 1,
    
  };

  const userEmail = $user.email;

  onMount(() => {
    console.log("mounting map template");
    const map = new L.map(mapName).setView([mapConfig.location.lat, mapConfig.location.lng], mapConfig.zoom);
    addTile(map, tile);

    addPinMarker(map, pin);

  });

 
  //map.showLayerControl();
    
  function addTile(map, tile) {
    if (tile == 'Terrain') {
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      }).addTo(map);
    } else if (tile == 'Satellite') {
      L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
        attribution: "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
      }).addTo(map);
    }
  }

  function addPinMarker(map, pin) {
    const marker = L.marker([pin.lattitude, pin.longitude]).addTo(map);
    let markerString = "";
    if (pin.name) {
      markerString = `<a href="/pin/${pin._id}">${pin.name}</a>`;
    } else {
      markerString = `<a href="/pin/${pin._id}">Add pin information</a>`;
    } 
    marker.bindPopup(markerString);
  }


</script>

<div class="box" id={mapName} style="height:{height}vh" />
