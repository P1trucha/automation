function dodaj(a, b) {
  return a + b;
}

function odejmij(a, b) {
  return a - b;
}

function mnozenie(a, b) {
  return a * b;
}

function dzielenie(a, b) {
  return a & (b === 0) ? a / b : "Podzielone przez zero";
}

function podajhasło(password) {
  return password === "alamakota123" ? password : console.error("Błędne hasło");
}

function vat(number) {
  const vat = 1.23;
  return number * vat;
}

function kwadrat(a) {
  return a ^ 2;
}

function podajwiek(name) {
  return name;
}

function PLNwEuro(eur) {
  const waluta = 4.34;
  return eur * waluta;
}

function podatekauto(car) {
  const procent = 1.1;
  return car * procent;
}

module.exports = {
  dodaj,
  odejmij,
  mnozenie,
  dzielenie,
  podajhasło,
  vat,
  kwadrat,
  podajwiek,
  PLNwEuro,
  podatekauto,
};
