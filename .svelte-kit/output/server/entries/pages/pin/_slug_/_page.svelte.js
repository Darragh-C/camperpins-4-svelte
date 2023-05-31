import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, d as createEventDispatcher, v as validate_component, f as each } from "../../../../chunks/index2.js";
import "bcryptjs";
import sanitizeHtml from "sanitize-html";
import { M as MainNavigator } from "../../../../chunks/MainNavigator.js";
import { T as TitleBar } from "../../../../chunks/TitleBar.js";
import "leaflet";
import { u as user } from "../../../../chunks/stores.js";
const PinMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { mapName = "pin-map2" } = $$props;
  let { pin } = $$props;
  let { height = 75 } = $$props;
  let { location = { lat: 53.2734, lng: -7.7783203 } } = $$props;
  let { zoom = 8 } = $$props;
  let { tile = "Terrain" } = $$props;
  $user.email;
  if ($$props.mapName === void 0 && $$bindings.mapName && mapName !== void 0)
    $$bindings.mapName(mapName);
  if ($$props.pin === void 0 && $$bindings.pin && pin !== void 0)
    $$bindings.pin(pin);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.location === void 0 && $$bindings.location && location !== void 0)
    $$bindings.location(location);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.tile === void 0 && $$bindings.tile && tile !== void 0)
    $$bindings.tile(tile);
  $$unsubscribe_user();
  return `<div class="box"${add_attribute("id", mapName, 0)} style="${"height:" + escape(height, true) + "vh"}"></div>`;
});
const PinCoordinates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { long = "" } = $$props;
  let { lat = "" } = $$props;
  if ($$props.long === void 0 && $$bindings.long && long !== void 0)
    $$bindings.long(long);
  if ($$props.lat === void 0 && $$bindings.lat && lat !== void 0)
    $$bindings.lat(lat);
  return `<div class="box box-link-hover-shadow"><div class="columns is-multiline is-mobile"><div class="column is-one-half">Longitude: ${escape(long)}</div>
      <div class="column is-one-half">Latitude: ${escape(lat)}</div></div></div>`;
});
const PinTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div class="box box-link-hover-shadow"><h2 class="title">${escape(name)}</h2></div>`;
});
const AddPinTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { displayName = "" } = $$props;
  let { pinname = "" } = $$props;
  let { pinId = "" } = $$props;
  function sanitizeOutput(output) {
    return sanitizeHtml(output);
  }
  if ($$props.displayName === void 0 && $$bindings.displayName && displayName !== void 0)
    $$bindings.displayName(displayName);
  if ($$props.pinname === void 0 && $$bindings.pinname && pinname !== void 0)
    $$bindings.pinname(pinname);
  if ($$props.pinId === void 0 && $$bindings.pinId && pinId !== void 0)
    $$bindings.pinId(pinId);
  return `<div class="box box-link-hover-shadow"><h2 class="title"><!-- HTML_TAG_START -->${sanitizeOutput(displayName)}<!-- HTML_TAG_END --></h2></div>

<div class="box box-link-hover-shadow"><form><div class="field"><label class="label" for="pinname">Pin name</label>
        <input class="input" id="pinname" name="pinname" placeholder="Enter a new pin name" type="text"${add_attribute("value", pinname, 0)}></div>
    <div class="field is-grouped"><button class="button is-link">Add Name</button></div></form></div>`;
});
const AddPinDesc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { displayDescrip = "" } = $$props;
  let { pindescrip = "" } = $$props;
  let { pinId = "" } = $$props;
  function sanitizeOutput(output) {
    return sanitizeHtml(output);
  }
  if ($$props.displayDescrip === void 0 && $$bindings.displayDescrip && displayDescrip !== void 0)
    $$bindings.displayDescrip(displayDescrip);
  if ($$props.pindescrip === void 0 && $$bindings.pindescrip && pindescrip !== void 0)
    $$bindings.pindescrip(pindescrip);
  if ($$props.pinId === void 0 && $$bindings.pinId && pinId !== void 0)
    $$bindings.pinId(pinId);
  return `<div class="box box-link-hover-shadow"><p><!-- HTML_TAG_START -->${sanitizeOutput(displayDescrip)}<!-- HTML_TAG_END --></p></div>

<div class="box box-link-hover-shadow"><form><div class="field"><label class="label" for="pindescrip">Pin description</label>
        <input class="input" id="pindescrip" name="pindescrip" placeholder="Enter a new pin description" type="text"${add_attribute("value", pindescrip, 0)}></div>
    <div class="field is-grouped"><button class="button is-link">Add Description</button></div></form></div>`;
});
const PinDesc = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { description = "" } = $$props;
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="box box-link-hover-shadow"><p>${escape(description)}</p></div>`;
});
const AddCategory = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let newCategory = "";
  let { pinId = "" } = $$props;
  let { currentPinCategories } = $$props;
  let { updateArray } = $$props;
  if ($$props.pinId === void 0 && $$bindings.pinId && pinId !== void 0)
    $$bindings.pinId(pinId);
  if ($$props.currentPinCategories === void 0 && $$bindings.currentPinCategories && currentPinCategories !== void 0)
    $$bindings.currentPinCategories(currentPinCategories);
  if ($$props.updateArray === void 0 && $$bindings.updateArray && updateArray !== void 0)
    $$bindings.updateArray(updateArray);
  return `<div class="box box-link-hover-shadow"><form><div class="field"><label class="label" for="category">Add category</label>
        <input class="input" id="category" name="category" placeholder="Enter a new category" type="text"${add_attribute("value", newCategory, 0)}></div>
    <div class="field is-grouped"><button class="button is-link">Add Category</button></div></form></div>`;
});
const DeleteImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { pinId = "" } = $$props;
  let { url = "" } = $$props;
  if ($$props.pinId === void 0 && $$bindings.pinId && pinId !== void 0)
    $$bindings.pinId(pinId);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  return `<button class="button is-danger is-pulled-right is-small"><span class="icon is-small"><i class="fas fa-times"></i></span></button>`;
});
const DisplayImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageUrl = "" } = $$props;
  let { alt = "" } = $$props;
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0)
    $$bindings.imageUrl(imageUrl);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<div class="card-image"><figure class="image is-100x100"><img${add_attribute("alt", `Image of ${alt}`, 0)}${add_attribute("src", imageUrl, 0)}></figure></div>`;
});
const ImageGallery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imageUrls = [] } = $$props;
  let { alt = "" } = $$props;
  let { pinId = "" } = $$props;
  let imageNum = 0;
  if ($$props.imageUrls === void 0 && $$bindings.imageUrls && imageUrls !== void 0)
    $$bindings.imageUrls(imageUrls);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.pinId === void 0 && $$bindings.pinId && pinId !== void 0)
    $$bindings.pinId(pinId);
  return `<div class="box"><div class="has-text-centered"><h3 class="title is-3">${escape(alt)} images</h3></div>
  <br>
  <div class="columns"><div class="column has-text-centered"><button class="button is-link">Previous</button></div>
    <div class="column">${validate_component(DisplayImage, "DisplayImage").$$render($$result, { imageUrl: imageUrls[imageNum], alt }, {}, {})}</div>
    <div class="column has-text-centered"><button class="button is-link">Next</button></div></div>  
  ${validate_component(DeleteImage, "DeleteImage").$$render($$result, { pinId, url: imageUrls[imageNum] }, {}, {})}
  <br></div>`;
});
const ImageUpload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pin } = $$props;
  let fileName = "";
  let imageUrl = pin.img;
  if ($$props.pin === void 0 && $$bindings.pin && pin !== void 0)
    $$bindings.pin(pin);
  return `${pin.img.length > 0 ? `${validate_component(ImageGallery, "ImageGallery").$$render(
    $$result,
    {
      pinId: pin._id,
      imageUrls: imageUrl,
      alt: pin.name
    },
    {},
    {}
  )}` : ``}

<div class="card-content"><form><div id="file-select" class="file has-name is-fullwidth"><label class="file-label"><input class="file-input" name="imagefile" type="file" accept="image/png, image/jpeg">
      <span class="file-cta"><span class="file-icon"><i class="fas fa-upload"></i></span>
        <span class="file-label">Choose a file…
        </span></span>
      <span class="file-name">${escape(fileName)}</span></label>
    <button type="submit" class="button is-info">Upload Image</button></div></form></div>


`;
});
const DisplayCategories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pinCategories } = $$props;
  if ($$props.pinCategories === void 0 && $$bindings.pinCategories && pinCategories !== void 0)
    $$bindings.pinCategories(pinCategories);
  return `<div class="tags are-medium">${each(pinCategories, (category) => {
    return `<span class="tag">${escape(category.category)}</span>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { pin } = data;
  let currentPinCategories = [];
  function updateArray(newArray) {
    currentPinCategories = newArray;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="columns is-vcentered"><div class="column is-two-thirds">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      subTitle: "Pin view",
      title: "Camperpins Inc."
    },
    {},
    {}
  )}</div>
  <div class="column">${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}</div></div> 


<div class="columns"><div class="column">${validate_component(PinMap, "PinMap").$$render(
    $$result,
    {
      mapName: "map1",
      pin,
      height: 30,
      location: { lat: pin.lattitude, lng: pin.longitude },
      zoom: 13,
      tile: "Satellite"
    },
    {},
    {}
  )}</div>
	<div class="column">${validate_component(PinMap, "PinMap").$$render(
    $$result,
    {
      mapName: "map2",
      pin,
      height: 30,
      location: { lat: pin.lattitude, lng: pin.longitude },
      zoom: 10,
      tile: "Terrain"
    },
    {},
    {}
  )}</div></div>

<div><div class="columns is-multiline is-mobile"><div class="column is-two-thirds">${pin.name ? `${validate_component(PinTitle, "PinTitle").$$render($$result, { name: pin.name }, {}, {})}` : `${validate_component(AddPinTitle, "AddPinTitle").$$render($$result, { pinId: pin._id }, {}, {})}`}
          ${currentPinCategories ? `${validate_component(DisplayCategories, "DisplayCategories").$$render($$result, { pinCategories: currentPinCategories }, {}, {})}` : ``}
          ${pin.description ? `${validate_component(PinDesc, "PinDesc").$$render($$result, { description: pin.description }, {}, {})}` : `${validate_component(AddPinDesc, "AddPinDesc").$$render($$result, { pinId: pin._id }, {}, {})}`}</div>
        <div class="column is-one-third">${validate_component(PinCoordinates, "PinCoordinates").$$render($$result, { lat: pin.lattitude, long: pin.longitude }, {}, {})}
          ${validate_component(AddCategory, "AddCategory").$$render(
    $$result,
    {
      pinId: pin._id,
      currentPinCategories,
      updateArray
    },
    {},
    {}
  )}</div></div></div>
<div>${validate_component(ImageUpload, "ImageUpload").$$render($$result, { pin }, {}, {})}</div>`;
});
export {
  Page as default
};
