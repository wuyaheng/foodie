import axios from 'axios';

export default {
    // Get stores from api
    getStores: function(term, location) {
        return axios.get("/api/yelp", {params: {term: term, location: location}})
    },
    // Get all saved stores
    getSavedStores: function() {
        return axios.get("/api/stores")
    },
    deleteStore: function(storeData) {
        return axios.delete("/api/stores" + id);
    },
    // Save a store to the database
    saveStore: function(storeData) {
        return axios.post("/api/stores", storeData);
    }
}