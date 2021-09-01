const fs = require('fs');
const rq = require('postman-request');
const api_key = "b0bc6917eb8b4d2587a94d4ca01c067a";
const geo_api_key = "kKQnmMrSTwvkXeX3LFuu7oMb8xlicwTO";
const base_url ="http://api.weatherbit.io/v2.0/current";
const geocode_url = "https://open.mapquestapi.com/geocoding/v1/address";

//zxas@gmail.com ----   zxcvbnm,./123

const url = base_url+"?"+"key="+api_key;
const geo_url = geocode_url+"?location=Agartala,Tripura&key="+geo_api_key;
console.log(geo_url);

rq({url : url+"&lat=23.814952071045003&lon=91.30954820138098",json : true},(err,res,body)=>{
    if(err){
        console.log("Error");
    }else{
        if(body.error){
            console.log("Error in location.");
        }else{
            var temp = body.data[0].temp;
            var apparent_temp = body.data[0].app_temp;
            var city_name = body.data[0].city_name;
            var weather = body.data[0].weather.description;
            console.log(`It is currently ${temp} deg in ${city_name}. It is ${weather}`);
            console.log(`It is currently ${temp} deg out but feels like ${apparent_temp} deg.`);
        }
    }
});
rq({url:geo_url,json:true},(err,res,body)=>{
    if(err){
        console.log("Error");
    }else{
        if(body.error){
            console.log("Error in location.");
        }else{
            lat = body.results[0].locations[0].latLng.lat;
            lon = body.results[0].locations[0].latLng.lng;
            console.log(lat,lon);
        }
    }
});