"use strict";

let carInventory = require('./carLot'),
    eventStuff = require('./events'),
    Handlebars = require('hbsfy/runtime'),
    carTemplate = require('../template/car-grid.hbs');
function populatePage (inventory) {
  
  let cards = document.getElementById("inventory-cards");
  let cardDiv = document.createElement("div"); 
    cardDiv.innerHTML = (carTemplate(inventory));
    cards.appendChild(cardDiv);
  
  eventStuff();
}


carInventory.loadInventory()
.then(
  function (inventoryFromLoadInventoryResolve) {
    populatePage(inventoryFromLoadInventoryResolve);
    console.log("carPromise", inventoryFromLoadInventoryResolve);
  },
  function (reason) {
    console.error('Something went wrong', reason);
  });
