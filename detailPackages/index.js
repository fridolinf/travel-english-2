// Change name in span on detailPackages file you can see any span inside classname "link-detail"
// this is change value innerHtml in span
const getData = document.getElementById("links")
const getLink = window.location.pathname.split("/").pop().replace(".html", "")
getData.innerHTML += getLink;

const getIdPicker = document.getElementById("picker-1");





