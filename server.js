const express = require("express");
require("dotenv").config();
const app = express();

// middleware for HTTP GET method
app.get("/", (req, res, next) => {
  res.json({
    message: "Using GET /",
    metadata: {
      host: req.hostname,
      port: process.env.port,
      method: req.method,
    },
  });
});

app.get("/:id", (req, res, next) => {
  res.json({
    message: "Using GET by ID",
    metadata: {
      host: req.hostname,
      port: process.env.port,
      id: req.params.id,
      method: req.method,
    },
  });
});

// middleware for HTTP POST method
app.post("/", (req, res, next) => {
  res.json({
    message: "Using POST /",
    metadata: {
      host: req.hostname,
      port: process.env.port,
      method: req.method,
    },
  });
});

// middleware for HTTP PATCH method
app.patch("/:id", (req, res, next) => {
  res.json({
    message: "Using PATCH by ID",
    metadata: {
      host: req.hostname,
      port: process.env.port,
      id: req.params.id,
      method: req.method,
    },
  });
});

// middleware for HTTP DELETE method
app.delete("/:id", (req, res, next) => {
  res.json({
    message: "Using DELETE by ID",
    metadata: {
      host: req.hostname,
      port: process.env.port,
      id: req.params.id,
      method: req.method,
    },
  });
});

// middleware modules for error handling
app.use((req, res, next) => {
  const error = Error("NOT FOUND!");
  error.status = 404;
  next(error);
});

// middleware to send error nicely
app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ error: { message: error.message, status: error.status, method: req.method } });
});

app.listen(process.env.port, () => console.log(`Starting server on port ${process.env.port}`));
