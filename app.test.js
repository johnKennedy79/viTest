import { test, expect, describe } from "vitest";
import { add, sub, multi, div } from "./app";

test("add 1+3 equals 4", function () {
  expect(add(1, 4)).toBe(5);
});
test("sub 7-5 = 2", function () {
  expect(sub(7, 5)).toBe(2);
});
test("multi 10x10 = 100", function () {
  expect(multi(10, 10)).toBe(100);
});

describe("div test", function () {
  test("div 10by2 = 5", function () {
    expect(div(10, 2)).toBe(5);
  });
});
