import DomUtils from "../src/DomUtils";

describe("DomUtils#attr", () => {
  it("body", () => {
    document.body.innerHTML =
      "<div>" +
      ' <span id="sample1" />' +
      ' <button id="sample2" />' +
      "</div>";

    expect(DomUtils.attr(document.getElementById("sample1"), "id")).toEqual(
      "sample1"
    );
  });
});

describe("DomUtils#attrAsNumber", () => {
  it("attr", () => {
    document.body.innerHTML =
      "<div>" +
      ' <input id="sample1" type="number" max="10" />' +
      "</div>";

    expect(
      DomUtils.attrAsNumber(document.getElementById("sample1"), "max")
    ).toBe(10);
  });
});

describe("DomUtils#clearSelection", () => {
  it("clearSelection", () => {
    document.body.innerHTML =
      "<div>" +
      ' <p id="sample">TEST TEST TEST</p>' +
      "</div>";

    const element = document.querySelector('#sample');

    const range = document.createRange();
    range.selectNodeContents(element!);

    const selection = window.getSelection();
    selection!.addRange(range);

    expect(selection!.rangeCount).toBe(1);

    DomUtils.clearSelection();

    expect(selection!.rangeCount).toBe(0);
  });
});

describe("DomUtils#getBoundingClientRect", () => {
  it("getBoundingClientRect", () => {
    document.body.innerHTML =
      "<div>" +
      ' <span id="sample1" />' +
      ' <button id="sample2" />' +
      "</div>";

    const rect = DomUtils.getBoundingClientRect(
      document.getElementById("sample1")
    );

    expect(rect).not.toBeNull();
    expect(rect.left).toBe(0);
    expect(rect.top).toBe(0);
    expect(rect.width).toBe(0);
    expect(rect.height).toBe(0);
  });
});

describe("DomUtils#getBoundingClientRect", () => {
  it("getBoundingClientRect", () => {
    document.body.innerHTML =
      "<div>" +
      ' <p class="sample">ABCDEFG</p>' +
      ' <p class="sample">ABCDEFG</p>' +
      ' <p class="sample">ABCDEFG</p>' +
      ' <p class="sample">ABCDEFG</p>' +
      ' <p class="sample">ABCDEFG</p>' +
      "</div>";

    const rects = DomUtils.getBoundingClientRects(document, ".sample");

    expect(rects.length).toBe(5);

    expect(rects[0].left).toBe(0);
    expect(rects[0].top).toBe(0);
    expect(rects[0].width).toBe(0);
    expect(rects[0].height).toBe(0);

    expect(rects[1].left).toBe(0);
    expect(rects[1].top).toBe(0);
    expect(rects[1].width).toBe(0);
    expect(rects[1].height).toBe(0);
  });
});

describe("DomUtils#expansionRects", () => {
  it("expansionRects", () => {
    const rects = [
      {
        bottom: 20,
        height: 10,
        left: 10,
        right: 20,
        top: 10,
        width: 10,
      },
      {
        bottom: 30,
        height: 10,
        left: 20,
        right: 30,
        top: 20,
        width: 10,
      },
    ];

    expect(DomUtils.expansionRects(rects)).toEqual({
      bottom: 30,
      height: 20,
      left: 10,
      right: 30,
      top: 10,
      width: 20,
    });
  });
});

describe("DomUtils#location", () => {
  it("body", () => {
    document.body.innerHTML =
      "<div>" +
      ' <span id="sample1" />' +
      ' <button id="sample2" />' +
      "</div>";

    expect(DomUtils.location(document.getElementById("sample1"))).toEqual({
      x: 0,
      y: 0,
    });
  });
});

describe("DomUtils#location", () => {
  it("body", () => {
    document.body.innerHTML =
      "<div>" + ' <p id="sample1">Hello !! World !!</p>' + "</div>";

    expect(DomUtils.text(document, "#sample1")).toBe("Hello !! World !!");
  });
});

describe("DomUtils#scrollTop", () => {
  it("body", () => {
    document.body.innerHTML =
      "<div>" + ' <p id="sample1">Hello !! World !!</p>' + "</div>";

    expect(DomUtils.scrollTop()).toBe(0);

    (document as any).defaultView.pageYOffset = 10;

    expect(DomUtils.scrollTop()).toBe(10);
  });
});
