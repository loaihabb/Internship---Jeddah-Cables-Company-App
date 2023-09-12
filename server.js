const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect("mongodb+srv://cables:database@cables.9zsvj94.mongodb.net", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const upload = multer({ dest: "uploads/" });

const File = mongoose.model("File", {
  name: String,
  details: String,
  filename: String,
  contentType: String,
  length: Number,
  uploadDate: Date,
});

app.use(express.json());

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const file = new File({
      name: req.body.name,
      details: req.body.details,
      filename: req.file.filename,
      contentType: req.file.mimetype,
      length: req.file.size,
      uploadDate: new Date(),
    });

    await file.save();
    res.status(201).send("Dosya yüklendi");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/files", async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/file/:id", async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) {
      return res.status(404).send("Dosya bulunamadı");
    }

    const readStream = bucket.openDownloadStreamByName(file.filename);
    const readableStream = new Readable().wrap(readStream);

    res.setHeader("Content-Length", file.length);
    res.setHeader("Content-Type", file.contentType);
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${file.filename}`
    );
    readableStream.pipe(res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/file/:id", async (req, res) => {
  try {
    const file = await File.findByIdAndDelete(req.params.id);
    if (!file) {
      return res.status(404).send("Dosya bulunamadı");
    }

    fs.unlinkSync(`uploads/${file.filename}`);

    res.send("Dosya silindi");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
