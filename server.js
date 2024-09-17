const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files from the /build directory
app.use(express.static(path.join(__dirname, "build")));

// Catch-all route to serve the index.html on frontend routes like /admin
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
