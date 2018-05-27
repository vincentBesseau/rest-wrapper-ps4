#!/usr/bin/env node

const express = require("express");
const config = require("./config.js")
const app = express();
const router = express.Router();
const {Device} = require("ps4-waker");
const OK = {status: "success"};
const HTTP_400 = 400;
const HTTP_404 = 404;

const get_options = function () {
    return {
        address: config.address,
        credentials: config.creds,
        timeout: 5000
    }
};

router.route("power/state=:value")
    .get(function (req, res) {
        let ps4 = new Device(get_options());
        if(req.params.value == 1){
            ps4.turnOn().then(function () {
                res.json(OK);
                ps4.close();
            }).catch(
                function (err) {
                    res.status(HTTP_400);
                    res.json({status: err.message})
                }
            );
        }else if(req.params.value == 0){
            ps4.turnOff().then(function () {
                res.json(OK);
                ps4.close();
            }).catch(
                function (err) {
                    res.status(HTTP_400);
                    res.json({status: err.message})
                }
            );
        }
    });

router.route("/start/:title")
    .get(function (req, res) {
        let ps4 = new Device(get_options());
        ps4.startTitle(req.params.title).then(function () {
            res.json(OK);
            ps4.close();
        }).catch(
            function (err) {
                res.status(HTTP_400);
                res.json({status: err.message})
            }
        );
    });

router.route("/")
    .get(function (req, res) {
        res.status(HTTP_400);
        res.json({status: "No param found"})
});


app.use("/ps4", router);
const port = 3000;
const ip = "0.0.0.0";
app.listen(port, ip, function () {
    console.log("Listening on " + ip + ":" + port);
});
