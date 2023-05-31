import { camperpinsService } from '../../../services/camperpins-service';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, fetch }) {
    const pin = await camperpinsService.getPin(params.slug);
    console.log(pin);
    
    return {
        pin 
    };
}