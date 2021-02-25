const express = require('express');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');

app.set('view engine','ejs');
app.use(expressLayouts);

app.use('/',require('./routes'));


app.set('views','./views');




app.listen(port,function(err){
    if(err){
        console.log('Error on loading port',err);
    }
    console.log('Server is running on port',port);
});



