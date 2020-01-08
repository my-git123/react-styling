//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red"
};
var timeOfDay;

var currentDate = new Date();
var currentHour = currentDate.getHours();

if (currentHour <= 12 && currentHour >= 0) {
  timeOfDay = "Good Morning";
} else if (currentHour > 12 && currentHour <= 18) {
  timeOfDay = "Good Afternoon";
  customStyle.color = "green";
} else {
  timeOfDay = "Good Evening";
  customStyle.color = "blue";
}
ReactDOM.render(
  <h1 style={customStyle}>{timeOfDay}</h1>,
  document.getElementById("root")
);
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
