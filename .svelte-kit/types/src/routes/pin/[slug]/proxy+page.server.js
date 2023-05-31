// @ts-nocheck
import { camperpinsService } from '../../../services/camperpins-service';
import { currentPin } from '../../../stores';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ params, fetch }) {
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