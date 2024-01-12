// app.js
const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')
const rootDir = require('./utils/path');
const { logger, readLog } = require('./utils/logger');
const log4js = require("log4js");
const fs = require('fs');

console.log(process.env.example);
var example
if (process.env.example == 1) {
    example = 'cvExample1';
} else if (process.env.example == 2) {
    example = 'cvExample2';
} else {
  example = 'cvExample1';
}
 
var source = path.join(rootDir , '/public/examples',example);

var file_json = 'me.json';
var file_background = 'background.jpeg'
var dest = path.join(rootDir , '/public/ress/mountedRess');

fs.access(path.join(dest, file_json), fs.constants.F_OK, (err) => {
  if (!err) {
    console.log("File exists");
  } else {
    fs.copyFile(path.join(source, file_json), path.join(dest,file_json), (err) => {
      if (err) throw err;
      console.log('file_json was copied to destination.txt');
    });

    fs.copyFile(path.join(source, file_background), path.join(dest,file_background), (err) => {
      if (err) throw err;
      console.log('file_background was copied to destination.txt');
    });

    pwd =  path.join(__dirname,'/public/ress/mountedRess/me.json');
    console.log(pwd);
    console.log(path.join(dest,file_json));
    console.log(fs.realpathSync("."));


    fs.readFile("public/ress/mountedRess/me.json", "utf8", (error, data) => {
      if (error) {
        console.log(error);
        return;
      }

      rawData = JSON.parse(data)  
      cleanData = JSON.stringify(rawData);
      obj = JSON.parse(data);
  
      var file_picture = obj.picture;

      fs.copyFile(path.join(source, path.basename(file_picture)), path.join(dest, path.basename(file_picture)), (err) => {
        if (err) throw err;
        console.log('file_png was copied to destination.txt');
      });
    });

  }
});


const homeRoute = require('./routes/home');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

//Static Files
app.use(express.static(path.join(rootDir,'public')));
app.use('/css', express.static(path.join(rootDir, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(rootDir, 'node_modules/bootstrap/dist/js')));
app.use('/fa', express.static(__dirname + '/node_modules/font-awesome/css'));
app.use('/fonts', express.static(__dirname + '/node_modules/font-awesome/fonts'));

app.use(log4js.connectLogger(logger, { level: "info" }));

//Routes
app.use(homeRoute);

app.use((req,res,next) => {
    console.log('Logging the request');
    next();
})


app.listen(5555, () => {
  console.log('Listening on port ' + 5555);
});

