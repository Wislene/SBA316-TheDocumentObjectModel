const paragraph = document.getElementById("paragraph");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

for (const [key, value] of urlParams.entries()) {
  paragraph.appendChild(document.createTextNode(`${key} = ${value}`));
  paragraph.appendChild(document.createElement("br"));
}
