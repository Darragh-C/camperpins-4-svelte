import { d as currentPin } from "../../../chunks/stores.js";
import { h as get_store_value } from "../../../chunks/index2.js";
async function load({ fetch }) {
  const pin = get_store_value(currentPin);
  console.log(`pin ${pin.name}`);
  const url = "http://api.openweathermap.org/data/2.5/onecall?lat=" + pin.lat + "&lon=" + pin.long + "&units=metric&appid=05969512638dad101c18cf78b4bce256";
  const response = await fetch(url);
  const weather = await response.json();
  return {
    weather,
    pin
  };
}
export {
  load
};
