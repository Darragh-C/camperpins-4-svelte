// @ts-nocheck

import { currentPin } from "../stores";
import { camperpinsService } from "./camperpins-service";
import { get } from 'svelte/store';

export const weatherService = {

  getCurrentPin() {
    const pin = {
      lat: get(currentPin).lat,
      long: get(currentPin).long,
      pinName: get(currentPin).name,
    };
    return pin;
  },
};