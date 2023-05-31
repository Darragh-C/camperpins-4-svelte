import { currentPin } from '../../stores.js';
import { get } from 'svelte/store';

export async function load({ fetch }) {
    
    const pin = get(currentPin);
    console.log(`pin ${pin.name}`);

    const url = "http://api.openweathermap.org/data/2.5/onecall?lat=" + pin.lat + "&lon=" + pin.long + "&units=metric&appid=05969512638dad101c18cf78b4bce256";
    const response = await fetch(url);
    const weather = await response.json();

    return {
        weather: weather,
        pin: pin,
    }

}
