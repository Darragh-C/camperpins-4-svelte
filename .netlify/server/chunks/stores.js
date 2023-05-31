import { w as writable } from "./index.js";
const user = writable({
  email: "",
  token: ""
});
const latestLatLong = writable({
  lat: 0,
  long: 0
});
const lastPin = writable({
  lat: 0,
  long: 0
});
const currentPin = writable({
  name: "",
  lat: 0,
  long: 0
});
const costType = ["Free", "Paid"];
const chartTypes = ["bar", "pie", "donut"];
const irishCounties = [
  "Antrim",
  "Armagh",
  "Carlow",
  "Cavan",
  "Clare",
  "Cork",
  "Derry",
  "Donegal",
  "Down",
  "Dublin",
  "Fermanagh",
  "Galway",
  "Kerry",
  "Kildare",
  "Kilkenny",
  "Laois",
  "Leitrim",
  "Limerick",
  "Longford",
  "Louth",
  "Mayo",
  "Meath",
  "Monaghan",
  "Offaly",
  "Roscommon",
  "Sligo",
  "Tipperary",
  "Tyrone",
  "Waterford",
  "Westmeath",
  "Wexford",
  "Wicklow"
];
export {
  costType as a,
  lastPin as b,
  chartTypes as c,
  currentPin as d,
  irishCounties as i,
  latestLatLong as l,
  user as u
};
