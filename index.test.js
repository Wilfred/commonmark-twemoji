const commonmark = require("commonmark");
const transform = require("./index");

function transformAndRender(src) {
  const reader = new commonmark.Parser();
  const writer = new commonmark.HtmlRenderer();
  const parsed = reader.parse(src);

  return writer.render(transform(parsed)).trim();
}

describe("transform", () => {
  test("Plain text", () => {
    expect(transformAndRender("foo")).toBe("<p>foo</p>");
  });
  test("Text with emoji", () => {
    expect(transformAndRender("I \u2764\uFE0F emoji")).toBe(
      '<p>I <img class="emoji" draggable="false" alt="❤️" src="https://twemoji.maxcdn.com/v/12.1.4/72x72/2764.png"/> emoji</p>'
    );
  });
  test("Don't modify code blocks", () => {
    expect(transformAndRender("```\nI \u2764\uFE0F emoji\n```")).toBe(
      "<pre><code>I \u2764\uFE0F emoji\n</code></pre>"
    );
  });
});
