import { c as create_ssr_component, d as createEventDispatcher, f as each, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { T as TitleBar } from "../../../chunks/TitleBar.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import { c as chartTypes, i as irishCounties } from "../../../chunks/stores.js";
import "bcryptjs";
const ChartFilter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options = [] } = $$props;
  let { filterName = "" } = $$props;
  createEventDispatcher();
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.filterName === void 0 && $$bindings.filterName && filterName !== void 0)
    $$bindings.filterName(filterName);
  return `<form><div class="field is-horizontal"><div class="field-body"><div class="field"><div class="control"><div class="select"><select name="filter">${each(options, (option) => {
    return `<option${add_attribute("value", option, 0)}>${escape(option)}</option>`;
  })}</select></div></div></div></div>  
      <div class="field is-horizontal"><button class="button is-link">Filter ${escape(filterName)}</button></div></div></form>`;
});
const CheckBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { checkBoxes = [] } = $$props;
  if ($$props.checkBoxes === void 0 && $$bindings.checkBoxes && checkBoxes !== void 0)
    $$bindings.checkBoxes(checkBoxes);
  return `${each(checkBoxes, (checkBox) => {
    return `<div><label class="checkbox"><input type="checkbox"${add_attribute("value", checkBox, 0)}>
      ${escape(checkBox)}</label>
  </div>`;
  })}`;
});
const UserChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let AllDistinctLabels = [];
  let title = "";
  let counties = [...irishCounties];
  return `${`<div class="field"><div class="columns"><div class="column"><input class="input is-rounded" type="text" placeholder="Enter a title"${add_attribute("value", title, 0)}></div>
      <div class="column"><button class="button is-link">Submit</button></div></div></div>`}

<div class="columns">${`<div class="column is-four-fifths"><div class="has-text-centered"><h1 class="title is-4">Your chart goes here</h1></div></div>`}
  <div class="column is-one-fifth">${validate_component(CheckBox, "CheckBox").$$render($$result, { checkBoxes: AllDistinctLabels }, {}, {})}</div></div>

<div class="columns"><div class="column is-third">${validate_component(ChartFilter, "ChartFilter").$$render(
    $$result,
    {
      options: chartTypes,
      filterName: "Chart Type"
    },
    {},
    {}
  )}</div>
  <div class="column is-third">${validate_component(ChartFilter, "ChartFilter").$$render(
    $$result,
    {
      options: counties,
      filterName: "Counties"
    },
    {},
    {}
  )}</div>
  <div class="column is-third"></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="columns is-vcentered"><div class="column is-two-thirds">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      subTitle: "Pin analytics",
      title: "Camperpins Inc."
    },
    {},
    {}
  )}</div>
  <div class="column">${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}</div></div>

${validate_component(UserChart, "UserChart").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
