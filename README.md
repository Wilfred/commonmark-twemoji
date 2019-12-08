# commonmark-twemoji

Applies [twemoji](https://github.com/twitter/twemoji) rendering to
commonmark source code.

## Usage

```javascript
var commonmark = require("commonmark");
var twemoji = require("commonmark-twemoji");

var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();

var parsed = reader.parse(src);
var transformed = twemoji.transform(parsed);

var htmlSrc = writer.render(transformed);
```

