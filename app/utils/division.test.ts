import { dividir } from "./division";

test("Test functions that import server-only", () => {
  expect(dividir(4, 2)).toBe(2);
});

test("Test functions that import server-only", () => {
    expect(dividir(1, 0)).toBe("not possible");
  });