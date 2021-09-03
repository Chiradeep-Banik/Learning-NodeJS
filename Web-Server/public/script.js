const weather = require('../../Project_2/utils.js');
var text_field = document.querySelector('input');
var button = document.querySelector('button');
var app = document.querySelector('#app');

var result = weather.Get_weather(text_field.value,weather.callback);
app.innerHTML+=result;

