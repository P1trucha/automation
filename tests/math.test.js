const {
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
} = require("../src/math");

test("Dodaje 1 + 2 równe 3", () => {
  expect(dodaj(1, 2)).toBe(3);
});

test("Odejmuje 4 - 2 równe 2", () => {
  expect(odejmij(4, 2)).toBe(2);
});

test("Mnozenie 4 * 4 równe 16", () => {
  expect(mnozenie(4, 4)).toBe(16);
});

test("Dzielenie 20 / 4 równe 5", () => {
  expect(dzielenie(20, 4)).toBe(5);
});

test("Podaj Hasło", () => {
  expect(dzielenie("alamakota123")).toBe("alamakota123");
});

test("Podaj Hasło", () => {
  expect(podajhasło("alamakota123")).toBe("alamakota123");
});

test("VAT", () => {
  expect(vat(10)).toBe(10.23);
});

test("Liczba do kwadratu", () => {
  expect(kwadrat(2)).toBe(4);
});

test("Podaj wiek", () => {
  expect(podajwiek(24)).toBe(24);
});

test("EURO w PLN", () => {
  expect(PLNwEuro(20)).toBe(86.8);
});

test("Podatek za auto", () => {
  expect(podatekauto(5000)).toBe(5100);
});
