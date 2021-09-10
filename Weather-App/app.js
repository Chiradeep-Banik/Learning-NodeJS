const utils = require('./utils');

// const api_key = "b0bc6917eb8b4d2587a94d4ca01c067a";
// const geo_api_key = "kKQnmMrSTwvkXeX3LFuu7oMb8xlicwTO";
// const base_url ="http://api.weatherbit.io/v2.0/current";
// const geocode_url = "https://open.mapquestapi.com/geocoding/v1/address";
// const url = base_url+"?"+"key="+api_key;
// const geo_url = geocode_url+"?location=Agartala,Tripura&key="+geo_api_key;
//zxas@gmail.com ----   zxcvbnm,./123

var place = process.argv[2];
if(place === undefined) console.log("Please enter a place");
else utils.Get_weather(place,utils.callback);
