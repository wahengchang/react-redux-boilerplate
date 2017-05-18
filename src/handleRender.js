

function handleRender(req, res) {
  res.send(renderFullPage())
}

function renderFullPage(html, preloadedState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Redux Hello World</title>
      </head>
      <body>
        <div id="root">${(html)?html:''}</div>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

module.exports = handleRender
