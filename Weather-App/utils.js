const rq = require('postman-request');

const Get_weather = (address, callback) => {
    const url = "https://open.mapquestapi.com/geocoding/v1/address?location="+encodeURIComponent(address)+"&key=kKQnmMrSTwvkXeX3LFuu7oMb8xlicwTO";
    rq({url:url, json : true}, (error, {body}) => {
        if(error){
            callback("Unable to connect",undefined);
        }else{
            var data = body.results[0].locations[0].latLng;
            callback(undefined, data);
        }
    });
};
const weather = (lat, lon, callback) => {
    const url = "http://api.weatherbit.io/v2.0/current?key=b0bc6917eb8b4d2587a94d4ca01c067a"+"&lat="+lat+"&lon="+lon;
    rq({url:url, json : true}, (error,{body}) => {
        if(error){
            we_callback("Unable to connect",undefined);
        }else{
            var temp = body.data[0].temp;
            var apparent_temp = body.data[0].app_temp;
            var city_name = body.data[0].city_name;
            var weather = body.data[0].weather.description;
            we_callback(undefined, {temp, apparent_temp, city_name, weather});
        }
    });
};
var we_callback = (err,data)=>{ 
    if(err){
        console.log(err);
    }else{
        console.log(`${data.weather}.It is ${data.temp} deg in ${data.city_name} but feels like ${data.apparent_temp}.\n`);
    }
}
var callback = (err,data)=>{
    if(err){
        console.log(err);
    }else{
        weather(data.lat, data.lng, we_callback);
    }
}

module.exports = {
    Get_weather,
    callback,
};