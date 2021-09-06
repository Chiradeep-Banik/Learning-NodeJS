const express = require('express');
const handlebars = require('express-handlebars');
const app = express(); // creating an express app

const public_path = '/mnt/c/Users/chira/OneDrive/Desktop/CODE/NodeJs/Web-Server/public';
const views_path = '/mnt/c/Users/chira/OneDrive/Desktop/CODE/NodeJs/Web-Server/views';

app.use(express.static(public_path));

app.engine('handlebars',handlebars({
    defaultLayout:'main'
}));

app.set('view engine','handlebars');
app.set('views',views_path);

app.get('/',(req,res)=>{
    res.render('index',{
        title: 'Home Page',
        style_common: 'common_styles.css'
    });
});
app.get('/task',(req,res)=>{
    res.render('task_app',{
        title: 'Task Page',
        style_common: 'common_styles.css'
    });
});
app.get('/weather',(req,res)=>{
    res.render('weather_app',{
        title: 'Weather Page',
        style_common: 'common_styles.css',
        style_page: 'weather_style.css',
        place_holder:'e.g. Agartala'
    });
});

app.listen(1313, () => console.log("Started at port 1313"));// started up the server at port 1313
