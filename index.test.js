const commonmark = require("commonmark");
const transform = require("./index");

function transformAndRender(src) {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();
  const parsed = reader.parse(src);

  return writer.render(transform(parsed)).trim();
}

describe("transform", () => {
  test("Text without emoji", () => {
    expect(transformAndRender("foo")).toBe("<p>foo</p>");
  });
});
