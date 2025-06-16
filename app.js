// app.js
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const rootDir = require("./utils/path");
const { logger, readLog } = require('./utils/logger');
const log4js = require("log4js");
const fs = require('fs');
const fse = require('fs-extra');  // fs-extra für das Kopieren des gesamten Verzeichnisses

const exampleEnv = process.env.EXAMPLE || process.env.example;
console.log("Environment variable 'EXAMPLE' is set to:", exampleEnv);
var example;
if (exampleEnv == 1) {
  example = "cvExample1";
  logger.info("Selected example: cvExample1");
} else if (exampleEnv == 2) {
  example = "cvExample2";
  logger.info("Selected example: cvExample2");
} else {
  example = "cvExample1";
  logger.info("Default example selected: cvExample1");
}

var source = path.join(rootDir, "/public/examples", example);
var dest = path.join(rootDir, "/public/ress/mountedRess");

var file_json = "me.json";
var file_background = "background.jpeg";

// Prüfen, ob me.json im Ziel existiert
fs.access(path.join(dest, file_json), fs.constants.F_OK, (err) => {
  if (!err) {
    console.log("File 'me.json' exists in destination.");
    logger.info("File 'me.json' already exists in destination.");
  } else {
    logger.info(`'me.json' does not exist. Copying entire content of ${source} to ${dest}`);

    // Kopiere den gesamten Inhalt des Quellverzeichnisses in das Zielverzeichnis
    fse.copy(source, dest, (copyErr) => {
      if (copyErr) {
        logger.error(`Failed to copy directory from ${source} to ${dest}:`, copyErr);
        throw copyErr;
      }
      console.log(`All files from ${source} were copied to ${dest}.`);
      logger.info(`All files from ${source} were successfully copied to ${dest}.`);
    });

    let pwd = path.join(__dirname, "/public/ress/mountedRess/me.json");
    console.log(`Resolved path to JSON file: ${pwd}`);
    logger.debug(`Resolved path to JSON file: ${pwd}`);

    console.log(`Checking file ${path.join(dest, file_json)}.`);
    console.log(`Current working directory: ${fs.realpathSync(".")}`);

    // Überprüfe die Datei wie zuvor
    fs.readFile(pwd, "utf8", (error, data) => {
      if (error) {
        console.log(`Error reading file ${pwd}:`, error);
        logger.error(`Error reading file ${pwd}:`, error);
        return;
      }

      if (!data || data.trim() === "") {
        logger.error("Error: The JSON file 'me.json' is empty or contains no data.");
        console.log("Error: The JSON file 'me.json' is empty or contains no data.");
        return;
      }

      if (logger.level.levelStr === 'debug') {
        logger.debug(`File 'me.json' content: ${data}`);
      } else {
        logger.info("File 'me.json' read successfully.");
      }

      let obj;
      try {
        obj = JSON.parse(data);
        console.log("File 'me.json' parsed successfully.");
        logger.info("File 'me.json' parsed successfully.");
      } catch (parseError) {
        logger.error("Error parsing JSON file.");
        if (logger.level.levelStr === 'debug') {
          logger.debug(`Content: ${data}`);
        }
        logger.error("Parsing error:", parseError);
        console.log("Error parsing JSON file:", parseError);
        return;
      }

      // Bilddatei kopieren, wenn sie in der JSON-Datei definiert ist
      var file_picture = obj.picture;
      if (file_picture) {
        logger.info(`Copying picture file: ${file_picture}`);
        fs.copyFile(path.join(source, path.basename(file_picture)), path.join(dest, path.basename(file_picture)), (err) => {
          if (err) {
            logger.error(`Failed to copy picture file ${file_picture}:`, err);
            throw err;
          }
          console.log(`File ${file_picture} was copied to destination.`);
          logger.info(`File ${file_picture} successfully copied to destination.`);
        });
      } else {
        logger.error("No picture file defined in 'me.json'.");
        console.log("No picture file defined in 'me.json'.");
      }
    });
  }
});

const homeRoute = require("./routes/home");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

// Static Files
app.use(express.static(path.join(rootDir, "public")));
app.use("/css", express.static(path.join(rootDir, "node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(rootDir, "node_modules/bootstrap/dist/js")));
app.use("/fa", express.static(__dirname + "/node_modules/font-awesome/css"));
app.use("/fonts", express.static(__dirname + "/node_modules/font-awesome/fonts"));

app.use(log4js.connectLogger(logger, { level: "info" }));

// Request Logging
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  logger.info(`Received ${req.method} request for ${req.url}`);
  next();
});

// Routen
app.use(homeRoute);

// Server starten
const PORT = process.env.PORT || 5555;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  logger.info(`Server started and is listening on port ${PORT}`);
});
