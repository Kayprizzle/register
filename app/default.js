"use strict";
var $ = require("jquery");

$(document).ready(function() {

  //idk what I'm doing down here. Just tryin to figure out how to display the var total in #subtotal
    function update() {
      $("#subtotal").html(total);
    }

  var inventory = {
    candybar: 1.75,
    soda: 1.00,
    sandwich: 5.00,
    coffee: 0.50
  };

  var total = 0;

  $("#candy").click(function() {
    total += inventory.candybar;
    update();
  });

  $("#soda").click(function() {
    total += inventory.soda;
    update();
  });

  $("#sandwich").click(function() {
    total += inventory.sandwich;
    update();
  });

  $("#coffee").click(function() {
    total += inventory.coffee;
    update();
  });



});
