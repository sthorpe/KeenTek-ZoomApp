require('dotenv').config();
const request = require('request');
const jwt = require('jsonwebtoken');
const config = require('./config');

//Use the ApiKey and APISecret from config.js
const payload = {
    iss: config.APIKey,
    exp: ((new Date()).getTime() + 5000)
};
const token = jwt.sign(payload, config.APISecret);

function getAllZoomRooms(){
  var options = {
    method: 'GET',
    url: `https://api.zoom.us/v2/rooms`,
    qs: {
      status: 'active'
    },
    auth: {
      'bearer': token
    },
    headers: {
      'User-Agent': 'Zoom-api-Jwt-Request',
      'content-type': 'application/json'
    },
    json: true //Parse the JSON string in the response
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(`We found ${body.rooms.length} Zoom Rooms`);
    getZoomRoomDevices(body.rooms);
  });
}

function getZoomRoomDevices(rooms){
  rooms.map((room) => {
    var options = {
      method: 'GET',
      url: `https://api.zoom.us/v2/rooms/${room.id}/devices`,
      qs: {
        status: 'active'
      },
      auth: {
        'bearer': token
      },
      headers: {
        'User-Agent': 'Zoom-api-Jwt-Request',
        'content-type': 'application/json'
      },
      json: true //Parse the JSON string in the response
    };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      // console.log(body);
      console.log(`Zoom Room ${room.name} has ${body.devices.length} devices`);
    });
  })
}

getAllZoomRooms();
