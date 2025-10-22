const var_km_e = document.querySelector("#var_km");
const var_trans_e = document.querySelector("#var_trans");
const var_uhr_e = document.querySelector("#var_uhr");
const var_elektro_e = document.querySelector("#var_elektro");
const var_plaket_e = document.querySelector("#var_plaket");
const var_preis_e = document.querySelector("#var_preis");


let auto_preis = 0.3;
let opnv_preis = 0.15;
let fahrrad_preis = 0.05;
let gesamtkosten = 0;

// const var_km = prompt("Type a KM: ");
// const var_trans = prompt("Type a Transportmittel : ");
// const var_uhr = prompt("Type a Uhrzeit der Abfahrt: ");

// var_km_e.innerText = var_km;
// var_trans_e.innerText = var_trans;
// var_uhr_e.innerText = var_uhr;

var_km_e.innerText = 15;
var_trans_e.innerText = "fahrrad";
var_uhr_e.innerText = 7;
var_elektro_e.innerText = "ja";
var_plaket_e.innerText = "nein";


if (
  (var_uhr_e.innerText >= 7 && var_uhr_e.innerText <= 9) ||
  (var_uhr_e.innerText >= 16 && var_uhr_e.innerText <= 18)
) {
  auto_preis = auto_preis * 1.2;
  opnv_preis = opnv_preis * 1.1;
}

switch (var_trans_e.innerText) {
  case "auto":
    gesamtkosten = auto_preis * Number(var_km_e.innerText);
    break;
  case "opnv":
    gesamtkosten = opnv_preis * Number(var_km_e.innerText);
    break;
  case "fahrrad":
    gesamtkosten = fahrrad_preis * Number(var_km_e.innerText);
    break;
  default:
    console.log("Unbekanntes Transportmittel");
    break;
}

if (
  var_trans_e.innerText === "fahrrad" ||
  (var_trans_e.innerText === "opnv" && var_km_e.innerText > 20) ||
  var_elektro_e.innerText === "ja"
) {
  gesamtkosten = gesamtkosten * 0.15;
}

if (var_trans_e.innerText === "auto" && var_plaket_e.innerText === "ja") {
  gesamtkosten = gesamtkosten + 10;
}

var_preis_e.innerText = gesamtkosten.toFixed(2) + " €";
console.log("Gesamtkosten:", gesamtkosten.toFixed(2), "€");
