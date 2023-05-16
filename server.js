let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/heroku-angular'));

app.get('/*', (req, resp) => {
    resp.sendFile(__dirname+'/dist/heroku-angular/index.html')
});

app.listen(process.env.PORT || 8080);