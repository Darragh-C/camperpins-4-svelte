// @ts-nocheck

import axios from "axios";
import { user } from "../stores.js";
import bcrypt from "bcryptjs";
import { get } from 'svelte/store';


export const camperpinsService = {
    baseUrl: "https://camperpins-hapi-2.onrender.com",

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
            axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
            console.log(`RESPONSE.DATA.TOKEN: ${response.data.token}`);
            console.log(`RESPONSE.DATA.SUCCESS: ${response.data.success}`);
            console.log(`RESPONSE.DATA: ${response.data}`)
            if (response.data.success) {
                user.set({
                    email: email,
                    token: response.data.token
                });
                user.subscribe(value => {  // subscribe to get the store value
                    console.log(`USER TOKEN: ${value.token}`)
                });
                localStorage.camperpins = JSON.stringify({ email: email, token: response.data.token });
                console.log(`localStorage.camperpins: ${localStorage.camperpins}`);
                console.log(`localStorage.camperpins.token: ${localStorage.camperpins.token}`);
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    async logout() {
        user.set({
            email: "",
            token: "",
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("camperpins");
    },

    async signup(firstName, lastName, email, password) {
        try {
            const salt = await bcrypt.genSalt(10);

            console.log('trying to sign up');
            const userDetails = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            };
            console.log(userDetails);
            console.log('making hash');
            const hash = await bcrypt.hashSync(userDetails.password, salt);
            console.log('Hashed password:', hash);

            userDetails.password = hash;
            await axios.post(this.baseUrl + "/api/users", userDetails);
            return true;
        } catch (error) {
            return false;
        }
    },

    reload() {
        const camperpinsCredentials = localStorage.camperpins;
        if (camperpinsCredentials) {
            const savedUser = JSON.parse(camperpinsCredentials);
            user.set({
                email: savedUser.email,
                token: savedUser.token
            });
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    },

    async getPins() {
        let token;

        console.log("getting token");

        if (localStorage.camperpins) {
            token = JSON.parse(localStorage.camperpins).token;
        } else {
            user.subscribe(value => {
                token = value.token;
            })();
        }

        console.log(`THE GET PINS TOKEN: ${token}`);

        if (!token) {
            console.error("No token available. Please log in.");
            return;
        }

        console.log("getting request");

        try {
            const response = await axios.get(this.baseUrl + "/api/pins", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return [];
        }
    },   

    async getPin(pin) {
        try {
            const response = await axios.get(this.baseUrl + "/api/pins/" + pin);
            console.log(`get pin response: ${response}`);
            console.log(`get pin response.data: ${response.data}`);
            return response.data;
        } catch (error) {
            return error;
        }
    },
    
    async getCategories() {

        let token;

        console.log("getting token");

        if (localStorage.camperpins) {
            token = JSON.parse(localStorage.camperpins).token;
        } else {
            user.subscribe(value => {
                token = value.token;
            })();
        }

        console.log(`THE GET CATEGORIES TOKEN: ${token}`);

        if (!token) {
            console.error("No token available. Please log in.");
            return;
        }

        console.log("getting request");

        try {
            const response = await axios.get(this.baseUrl + "/api/categories", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            return [];
        }
    },   

    async getUsers() {
        try {
            const response = await axios.get(this.baseUrl + "/api/users");
            return response.data;
        } catch (error) {
            return [];
        }
    }, 

    async addPin(pin) {
        console.log("adding pin");
        try {
            let token;

            console.log("getting token");

            if (localStorage.camperpins) {
            token = JSON.parse(localStorage.camperpins).token;
            } else {
            token = user.token;
            }

            console.log("posting request");

            const response = await axios.post(this.baseUrl + "/api/pins/", pin, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.status);
            return response.data;
        } catch (error) {
            return false;
        }
    },

    async updatePin(pinId, updates) {
        console.log("updating pin");
        try {

            let token;

            console.log("adding token");

            if (localStorage.camperpins) {
                token = JSON.parse(localStorage.camperpins).token;
            } else {
                token = user.token;
            }

            const response = await axios.patch(this.baseUrl + "/api/pins/" + pinId + "/updatepin", updates, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response);
            console.log(response.status);
            return response.data;
        } catch (error) {
            return error;
        }
    },

    async addCategory(pinId, categoryObj) {
        console.log("adding category");
        try {
         
            let token;

            console.log("getting token");

            if (localStorage.camperpins) {
            token = JSON.parse(localStorage.camperpins).token;
            } else {
            token = user.token;
            }

            console.log("posting request");
    
            const response = await axios.post(this.baseUrl + "/api/pins/" + pinId + "/categories", categoryObj, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            //console.log(response.status);
            return response.data;
        } catch (error) {
            return false;
        }
    },

    async uploadImage(pinId, formData) {

        let token;

        console.log("getting token");

        if (localStorage.camperpins) {
        token = JSON.parse(localStorage.camperpins).token;
        } else {
        token = user.token;
        }

        console.log("posting request");

        try {
            const response = await axios.post(this.baseUrl + "/api/pins/" + pinId + "/uploadimage", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(response.status);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error); 
            return false;
        }
    },
    
    async removeImage(pinId, url) {
        console.log("removing pin image");
        try {

            let token;

            console.log("adding token");
    
            if (localStorage.camperpins) {
                token = JSON.parse(localStorage.camperpins).token;
            } else {
                token = user.token;
            }

            const response = await axios.post(this.baseUrl + "/api/pins/" + pinId + "/removeimage", { imgurl: url }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(`response: ${response}`);
            console.log(`response status: ${response.status}`);
            return true;
        } catch (error) {
            return error;
        }
    },

};
