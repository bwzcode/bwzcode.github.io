/*
*   Brian Zhu
*   Responsive NavBar Script
*   Converst Horizontal NavBar to dropdown menu on mobile devices
*/

function myFunction() {
    var x = document.getElementById("responsiveNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }