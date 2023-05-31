import { c as create_ssr_component, a as subscribe, o as onDestroy, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import { T as TitleBar } from "../../../chunks/TitleBar.js";
/* empty css                       */import "bcryptjs";
import "leaflet";
import { i as irishCounties, a as costType, u as user, l as latestLatLong, b as lastPin } from "../../../chunks/stores.js";
import { c as camperpinsService } from "../../../chunks/camperpins-service.js";
import { g as goto } from "../../../chunks/navigation.js";
const dataMod = {
  getDistinct(array) {
    const distinctSet = new Set(array);
    return Array.from(distinctSet);
  },
  filterCounties(array) {
    return array.filter((item) => irishCounties.includes(item));
  },
  filterCountyObjs(array, county) {
    return array.filter((item) => item.category == county);
  },
  filterCost(array) {
    return array.filter((item) => costType.includes(item));
  },
  removeCounties(array) {
    return array.filter((item) => !irishCounties.includes(item));
  },
  removeCost(array) {
    return array.filter((item) => !costType.includes(item));
  },
  stripCategoryName(array) {
    return array.map((obj) => obj.category);
  },
  filterCategoriesForPin(id, array) {
    return array.filter((item) => item.pinId == id);
  }
};
const MapTemplate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { layerCategoryObjs = [] } = $$props;
  let { pinObjs = [] } = $$props;
  let { height = 75 } = $$props;
  let { location = { lat: 53.2734, lng: -7.7783203 } } = $$props;
  let { zoom = 8 } = $$props;
  let layerGroupNames = [];
  let currentLayerGroup = "pin";
  let map = null;
  const userEmail = $user.email;
  function addPinsToMap() {
    console.log(`layerCategoryObjs: ${layerCategoryObjs}`);
    console.log(`pinObjs: ${pinObjs}`);
    layerGroupNames = dataMod.getDistinct(dataMod.stripCategoryName(layerCategoryObjs));
    for (let i = 0; i < layerGroupNames.length; i++) {
      const layerGroupName = layerGroupNames[i];
      currentLayerGroup = layerGroupName;
      map.addLayerGroup(layerGroupName);
      const layerCategories = layerCategoryObjs.filter((item) => item.category == layerGroupName);
      const layerPins = pinObjs.filter((pinObj) => layerCategories.map((category) => category.pinId).includes(pinObj._id));
      console.log(layerGroupName);
      console.log(`layerPins ${i}: ${layerPins.map((pin) => pin.name)}`);
      layerPins.forEach((pin) => {
        addPinMarker(map, pin);
      });
    }
    map.showLayerControl();
  }
  function addPinMarker(map2, pin) {
    let markerString = "";
    if (pin.name) {
      markerString = `<a href="/pin/${pin._id}">${pin.name}</a>`;
    } else {
      markerString = `<a href="/pin/${pin._id}">Add pin information</a>`;
    }
    map2.addMarker({ lat: pin.lattitude, lng: pin.longitude }, markerString, currentLayerGroup);
  }
  async function addPin(markerPin) {
    console.log(`attempting to add pin`);
    const users = await camperpinsService.getUsers();
    const loggedInUser = users.find((loggedInUser2) => loggedInUser2.email === userEmail);
    const userId = loggedInUser._id;
    console.log(userId);
    const pin = {
      userid: userId,
      lattitude: markerPin.lat.toString(),
      longitude: markerPin.long.toString()
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
  const unsub = latestLatLong.subscribe((value) => {
    if (value.long && value.long !== lastPin.long && value.lat && value.lat !== lastPin.lat) {
      console.log(`New pin at long ${value.long} and lat ${value.lat}`);
      const newMarker = { lat: value.lat, long: value.long };
      addPin(newMarker);
    }
  });
  onDestroy(unsub);
  if ($$props.layerCategoryObjs === void 0 && $$bindings.layerCategoryObjs && layerCategoryObjs !== void 0)
    $$bindings.layerCategoryObjs(layerCategoryObjs);
  if ($$props.pinObjs === void 0 && $$bindings.pinObjs && pinObjs !== void 0)
    $$bindings.pinObjs(pinObjs);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  {
    {
      if (layerCategoryObjs && pinObjs && map) {
        addPinsToMap();
      }
    }
  }
  $$unsubscribe_user();
  return `<div class="box" id="pin-map" style="${"height:" + escape(height, true) + "vh"}"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let categories;
  let pins;
  return `<div class="columns is-vcentered"><div class="column is-two-thirds">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      subTitle: "Pin map",
      title: "Camperpins Inc."
    },
    {},
    {}
  )}</div>
  <div class="column">${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}</div></div> 

${validate_component(MapTemplate, "MapTemplate").$$render(
    $$result,
    {
      layerCategoryObjs: categories,
      pinObjs: pins,
      height: 80,
      location: { lat: 53.2734, lng: -7.7783203 },
      zoom: 7
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
