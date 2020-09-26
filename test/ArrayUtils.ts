import ArrayUtils from "../src/ArrayUtils";

describe("ArrayUtils#addAll", () => {
  it("add 3 entries.", () => {
    expect(ArrayUtils.addAll([0, 1], [2, 3, 4])).toEqual([0, 1, 2, 3, 4]);
  });
});

describe("ArrayUtils#isArray", () => {
  it("is true", () => {
    expect(ArrayUtils.isArray([])).toBe(true);
    expect(ArrayUtils.isArray([1, 2, 3])).toBe(true);
  });

  it("is false", () => {
    expect(ArrayUtils.isArray(1)).toBe(false);
    expect(ArrayUtils.isArray("")).toBe(false);
    expect(ArrayUtils.isArray({})).toBe(false);
  });
});

describe("ArrayUtils#max", () => {
  it("max", () => {
    expect(ArrayUtils.max([1, 2, 3])).toBe(3);
    expect(ArrayUtils.max([3, 1, 2])).toBe(3);
    expect(ArrayUtils.max([1, 3, 2])).toBe(3);
  });
});

describe("ArrayUtils#min", () => {
  it("min", () => {
    expect(ArrayUtils.min([1, 2, 3])).toBe(1);
    expect(ArrayUtils.min([3, 1, 2])).toBe(1);
    expect(ArrayUtils.min([1, 3, 2])).toBe(1);
  });

  it("min use callback", () => {
    const compare = (a: any, b: any) => a.x - b.x;

    expect(ArrayUtils.min([{ x: 1 }, { x: 2 }, { x: 3 }], compare)).toEqual({ x: 1 });
    expect(ArrayUtils.min([{ x: 3 }, { x: 1 }, { x: 2 }], compare)).toEqual({ x: 1 });
    expect(ArrayUtils.min([{ x: 1 }, { x: 3 }, { x: 2 }], compare)).toEqual({ x: 1 });
  });
});

describe("ArrayUtils#of", () => {
  it("of", () => {
    expect(ArrayUtils.of(1, 2, 3)).toEqual([1, 2, 3]);
  });
});

describe("ArrayUtils#swap", () => {
  it("swap to 1", () => {
    expect(ArrayUtils.swap([0, 1, 2, 3, 4], 0, 2)).toEqual([1, 2, 0, 3, 4]);
  });

  it("swap to 2", () => {
    expect(ArrayUtils.swap([0, 1, 2, 3, 4], 0, 2, 2)).toEqual([2, 3, 0, 1, 4]);
  });
});
