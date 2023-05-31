import { c as camperpinsService } from "../../../../chunks/camperpins-service.js";
import { d as currentPin } from "../../../../chunks/stores.js";
async function load({ params, fetch }) {
  const pin = await camperpinsService.getPin(params.slug);
  console.log(pin);
  currentPin.set({
    lat: pin.lattitude,
    long: pin.longitude,
    name: pin.name
  });
  return {
    pin
  };
}
export {
  load
};
