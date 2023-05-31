// @ts-nocheck

import axios from "axios";
import { user } from "../stores.js";
import bcrypt from "bcryptjs";
import { get } from 'svelte/store';

export const openWeather = {
  baseUrl: "https://api.openweathermap.org/data/2.5/onecall?",
  latParam: "lat=",
  longParam: "&lon=",
  units: "&units=metric",
  apiKey: "&appid=05969512638dad101c18cf78b4bce256",

  async getWeather(lat, long) {
      try {
        const response = await axios.post(this.baseUrl + this.latParam + lat + this.longParam + long + this.units + this.apiKey);
          if (response) {
            console.log(`API response: ${response}`);
            return response;
          }
          return false;
      } catch (error) {
          console.log(error);
          return false;
      }
  },
};
