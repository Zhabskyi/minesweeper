import {
  generateBombs,
  generateBoard,
  setBombs,
  setCellNumberForBombs,
  generateOverlapBoard,
  isArrayInArray
} from "./gridHelpers";

//test for generateBombs
test("generateBombs returns an array", () => {
  const result = generateBombs(4);
  expect(Array.isArray(result)).toBe(true);
});

test("generateBombs returns array length to be 10", () => {
  const result = generateBombs(10);
  expect(result.length).toEqual(10);
});

test("generateBombs returns array which contains arrays", () => {
  const result = generateBombs(10);
  expect(Array.isArray(result[0])).toBe(true);
});

//test for generateBoard
test("generateBoard returns an array", () => {
  const result = generateBoard(4);
  expect(Array.isArray(result)).toBe(true);
});

test("generateBoard returns array length to be 16", () => {
  const result = generateBoard(16);
  expect(result.length).toEqual(16);
});

test("generateBoard returns array which contains arrays of length 16", () => {
  const result = generateBoard(16);
  expect(result[0].length).toEqual(16);
});

//test for setBombs
const board = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
const bombs = [
  [0, 1],
  [2, 2]
];

test("setBombs returns an array", () => {
  const result = setBombs(board, bombs);
  expect(Array.isArray(result)).toBe(true);
});

test("setBombs returns board[0][1] equal 1", () => {
  const result = setBombs(board, bombs);
  expect(result[0][1]).toEqual(1);
});

//test for setCellNumberForBombs
test("setCellNumberForBombs returns an array", () => {
  const result = setCellNumberForBombs(setBombs(board, bombs));
  expect(Array.isArray(result)).toBe(true);
});

test("setCellNumberForBombs returns result[0][2] equal 2", () => {
  const result = setCellNumberForBombs(setBombs(board, bombs));
  expect(result[0][2]).toEqual(4);
});

//test for generateOverlapBoard
test("generateOverlapBoard returns an array", () => {
  const result = generateOverlapBoard(16);
  expect(Array.isArray(result)).toBe(true);
});

test("generateOverlapBoard returns an array with false values", () => {
  const result = generateOverlapBoard(16);
  expect(result[0][2]).toEqual(false);
  expect(result[0][1]).toEqual(false);
  expect(result[0][0]).toEqual(false);
});

//test for isArrayInArray
const arr = [
  [1, 0],
  [2, 1],
  [0, 0]
];
const item = [2, 1];

test("isArrayInArray returns true", () => {
  const result = isArrayInArray(arr, item);
  expect(result).toEqual(true);
});

test("isArrayInArray returns false", () => {
  const result = isArrayInArray(arr, [5, 5]);
  expect(result).toEqual(false);
});
