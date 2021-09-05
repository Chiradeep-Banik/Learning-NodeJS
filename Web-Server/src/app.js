const express = require('express');
const hbs = require('hbs');
const app = express(); // creating an express app

const public_path = '/mnt/c/Users/chira/OneDrive/Desktop/CODE/NodeJs/Web-Server/public';
const views_path = '/mnt/c/Users/chira/OneDrive/Desktop/CODE/NodeJs/Web-Server/templates/veiws';
const partial_path = '/mnt/c/Users/chira/OneDrive/Desktop/CODE/NodeJs/Web-Server/templates/partials'; 

app.set('view engine', 'hbs');
app.set('views', views_path);
hbs.registerPartials(partial_path);
//Express is a web framework for Node.js

app.use(express.static(public_path)); // serves static files

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/weather', (req, res) => {
    res.render('weather_app', {
        place_holder : 'e.g. Agartala'
    }); // renders the weather_app.hbs file in views folder
});//Set up the / root page and what the user would get when they visit the root page
app.get('/task',(req,res)=>{
    res.render('task_app',{
        title : 'Task App',
    });
});

app.listen(1313, () => console.log("Started at port 1313"));// started up the server at port 1313
