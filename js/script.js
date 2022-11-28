// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-04/sw.js", {
    scope: "/ICS20-Unit-5-04/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  // input
  const age = parseFloat(document.getElementById("age").value)
  const day = document.getElementById("day").value

  if (age <= 5 || age >= 65 || day == "tuesday" || day == "thursday") {
    document.getElementById("enter").innerHTML =
      "You can enter the museum for free"
  } else {
    document.getElementById("enter").innerHTML =
      "You need to pay for your ticket"
  }
}
