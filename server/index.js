const express = require("express")
const app = express()
const PORT = process.env.port || 3000
const path = require("path")

app.use(express.static(path.join(__dirname, "../public")))

// 404 middleware
app.use(() => {
  let err = new Error("Not Found")
  err.status = 404
  throw err
})

// Error Handling
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).send(err.message || "Internal Error")
})

app.listen(PORT, err => {
  if (err) throw err
  console.log(`

  =====================================================
  CircleCI Challenge listening at http://localhost:${PORT}
  =====================================================

  `)
})
