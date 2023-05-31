import { c as create_ssr_component, o as onDestroy, b as add_attribute, e as escape, f as each, v as validate_component } from "../../../chunks/index2.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import { T as TitleBar } from "../../../chunks/TitleBar.js";
import "frappe-charts";
const Base = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {
    labels: [],
    datasets: [{ values: [] }],
    yMarkers: {},
    yRegions: []
  } } = $$props;
  let { title = "" } = $$props;
  let { type = "line" } = $$props;
  let { height = 300 } = $$props;
  let { animate = true } = $$props;
  let { axisOptions = {} } = $$props;
  let { barOptions = {} } = $$props;
  let { lineOptions = {} } = $$props;
  let { tooltipOptions = {} } = $$props;
  let { colors = [] } = $$props;
  let { valuesOverPoints = 0 } = $$props;
  let { isNavigable = false } = $$props;
  let { maxSlices = 3 } = $$props;
  let chart = null;
  let chartRef;
  function ifChartThen(fn) {
    return function ifChart(...args) {
      if (chart) {
        return fn(...args);
      }
    };
  }
  const addDataPoint = ifChartThen((label, valueFromEachDataset, index) => chart.addDataPoint(label, valueFromEachDataset, index));
  const removeDataPoint = ifChartThen((index) => chart.removeDataPoint(index));
  const exportChart = ifChartThen(() => chart.export());
  const updateChart = ifChartThen((newData) => chart.update(newData));
  onDestroy(() => {
    chart = null;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.axisOptions === void 0 && $$bindings.axisOptions && axisOptions !== void 0)
    $$bindings.axisOptions(axisOptions);
  if ($$props.barOptions === void 0 && $$bindings.barOptions && barOptions !== void 0)
    $$bindings.barOptions(barOptions);
  if ($$props.lineOptions === void 0 && $$bindings.lineOptions && lineOptions !== void 0)
    $$bindings.lineOptions(lineOptions);
  if ($$props.tooltipOptions === void 0 && $$bindings.tooltipOptions && tooltipOptions !== void 0)
    $$bindings.tooltipOptions(tooltipOptions);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.valuesOverPoints === void 0 && $$bindings.valuesOverPoints && valuesOverPoints !== void 0)
    $$bindings.valuesOverPoints(valuesOverPoints);
  if ($$props.isNavigable === void 0 && $$bindings.isNavigable && isNavigable !== void 0)
    $$bindings.isNavigable(isNavigable);
  if ($$props.maxSlices === void 0 && $$bindings.maxSlices && maxSlices !== void 0)
    $$bindings.maxSlices(maxSlices);
  if ($$props.addDataPoint === void 0 && $$bindings.addDataPoint && addDataPoint !== void 0)
    $$bindings.addDataPoint(addDataPoint);
  if ($$props.removeDataPoint === void 0 && $$bindings.removeDataPoint && removeDataPoint !== void 0)
    $$bindings.removeDataPoint(removeDataPoint);
  if ($$props.exportChart === void 0 && $$bindings.exportChart && exportChart !== void 0)
    $$bindings.exportChart(exportChart);
  {
    updateChart(data);
  }
  return `<div${add_attribute("this", chartRef, 0)}></div>`;
});
const Base$1 = Base;
const weatherUtils = {
  objectStrip(array) {
    let cleanArray = [];
    for (let obj of array) {
      let cleanObj = {};
      let keys = [];
      for (let key in obj) {
        keys.push(key);
      }
      for (let i = 1; i < keys.length - 2; i++) {
        cleanObj[keys[i]] = obj[keys[i]];
      }
      cleanArray.push(cleanObj);
    }
    return cleanArray;
  },
  objectsReduce(objects) {
    let reducedObj = {};
    for (let i = 0; i < objects.length; i++) {
      for (let key in objects[i]) {
        if (!reducedObj[key]) {
          reducedObj[key] = [];
        }
        reducedObj[key].push(objects[i][key]);
      }
    }
    return reducedObj;
  },
  trendDirection(dataArray) {
    const first = dataArray[0];
    const second = dataArray[1];
    const third = dataArray[2];
    if (first < second && second < third) {
      return ["fas fa-arrow-up fa-2x", "color:turquoise"];
    } else if (first > second && second > third) {
      return ["fas fa-arrow-down fa-2x", "color:navy"];
    } else {
      return null;
    }
  },
  trendObject(object) {
    let trendObject = {};
    for (let key in object) {
      let trend = this.trendDirection(object[key]);
      if (trend) {
        trendObject[key] = trend;
      }
    }
    return trendObject;
  },
  removeUnderscore(string) {
    const removedUnderscore = string.replace(/_/g, " ");
    return removedUnderscore;
  },
  titleCase(string) {
    const titleCase = string.charAt(0).toUpperCase() + string.slice(1);
    return titleCase;
  }
};
const PinWeather = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { weatherData = {} } = $$props;
  console.log(weatherData.current.weather[0].description);
  const icon = weatherData.current.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  if ($$props.weatherData === void 0 && $$bindings.weatherData && weatherData !== void 0)
    $$bindings.weatherData(weatherData);
  return `<div class="box"><div class="columns is-vcentered"><div class="column is-one-fifth"><h3 class="title is-3">${escape(weatherUtils.titleCase(weatherData.current.weather[0].description))}</h3>
      <img alt="weather-icon"${add_attribute("src", iconSrc, 0)} width="100"></div>
    <div class="column"><h5 class="title is-5">Temperature</h5>
      <h4 class="title is-4">${escape(weatherData.current.temp)} C</h4></div>
    <div class="column"><h5 class="title is-5">Humidity</h5>
        <h4 class="title is-4">${escape(weatherData.current.humidity)}% </h4></div>
    <div class="column"><h5 class="title is-5">Pressure</h5>
      <h4 class="title is-4">${escape(weatherData.current.pressure)} PA</h4></div>
    <div class="column"><h5 class="title is-5">Wind speed</h5>
      <h4 class="title is-4">${escape(weatherData.current.wind_speed)} kmph</h4></div>
    <div class="column"><h5 class="title is-5">Wind direction</h5>
      <h4 class="title is-4">${escape(weatherData.current.wind_deg)} °</h4></div></div></div>`;
});
const DataTrend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { weatherData = [] } = $$props;
  const data = weatherUtils.objectStrip(weatherData);
  const reducedObj = weatherUtils.objectsReduce(data);
  const trendObject = weatherUtils.trendObject(reducedObj);
  console.log(trendObject);
  if ($$props.weatherData === void 0 && $$bindings.weatherData && weatherData !== void 0)
    $$bindings.weatherData(weatherData);
  return `<h3 class="title is-3">Forecast</h3>
<div class="columns box">${each(Object.entries(trendObject), ([key, value]) => {
    return `<div class="column"><div class="has-text-centered"><i${add_attribute("class", value[0], 0)}${add_attribute("style", value[1], 0)}></i></div>
      <br>
      <div class="has-text-centered"><h5 class="title is-5">${escape(weatherUtils.titleCase(weatherUtils.removeUnderscore(key)))}</h5></div>
    </div>`;
  })}</div>`;
});
function formatTimestamp(timestamp) {
  var date = new Date(timestamp * 1e3);
  var day = "0" + date.getDate();
  var month = "0" + (date.getMonth() + 1);
  var year = date.getFullYear().toString().substr(-2);
  var hours = "0" + date.getHours();
  var minutes = "0" + date.getMinutes();
  return hours.substr(-2) + ":" + minutes.substr(-2) + " " + day.substr(-2) + "/" + month.substr(-2) + "/" + year;
}
const WeatherTrend = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { weatherData = [] } = $$props;
  const dateTimes = weatherData.map((data2) => data2.dt);
  const timePlot = dateTimes.slice(0, 10).map((timestamp) => formatTimestamp(timestamp));
  const tempReadings = weatherData.slice(0, 10).map((data2) => data2.temp);
  const humidReadings = weatherData.slice(0, 10).map((data2) => data2.humidity);
  const feelsLike = weatherData.slice(0, 10).map((data2) => data2.feels_like);
  const clouds = weatherData.slice(0, 10).map((data2) => data2.clouds);
  const pressure = weatherData.slice(0, 10).map((data2) => data2.pressure / 10);
  const windSpeed = weatherData.slice(0, 10).map((data2) => data2.wind_speed / 10);
  const windGust = weatherData.slice(0, 10).map((data2) => data2.wind_gust / 10);
  let data = {
    labels: timePlot,
    datasets: [
      {
        name: "Temperature",
        values: tempReadings
      },
      { name: "Feels like", values: feelsLike },
      { name: "Humidity", values: humidReadings },
      { name: "Clouds", values: clouds },
      { name: "Pressure/10", values: pressure },
      { name: "Wind speed", values: windSpeed },
      { name: "Wind gust", values: windGust }
    ]
  };
  if ($$props.weatherData === void 0 && $$bindings.weatherData && weatherData !== void 0)
    $$bindings.weatherData(weatherData);
  return `<h3 class="title is-3">Forecast graph</h3>
${validate_component(Base$1, "Chart").$$render($$result, { data, type: "line" }, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  data.weather.current.weather[0].icon;
  const hourly = data.weather.hourly;
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

  <h2 class="title is-2">${escape(data.pin.name)} weather</h2>
  ${validate_component(PinWeather, "PinWeather").$$render($$result, { weatherData: data.weather }, {}, {})}
  ${validate_component(DataTrend, "DataTrend").$$render($$result, { weatherData: hourly.slice(0, 3) }, {}, {})}
  ${validate_component(WeatherTrend, "WeatherTrend").$$render($$result, { weatherData: hourly }, {}, {})}`;
});
export {
  Page as default
};
