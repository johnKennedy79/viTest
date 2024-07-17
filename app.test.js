import { test, expect, describe } from "vitest";
import { add, sub, multi, div, isItaPal } from "./app";

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
  test("div 8 by 2 = 5", function () {
    expect(div(8, 2)).toBe(4);
  });
});

test("isItaPal", function () {
  expect(isItaPal("kaak")).toBe(true);
});
