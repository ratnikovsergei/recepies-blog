const express = require('express');
const upload = require('../middlewares/upload');
const isAuth = require('../middlewares/isAuth');

const router = express.Router();

router.post('/image', isAuth, upload.single('image'), (req, res) => {
  const file = req.file;
  if (!file) {
    res.send({ error: 'Ошибка при загрузке файла' });
  } else {
    res.send({
      error: null,
      url: `uploads/${file.filename}`,
      message: 'Файл успешно загружен',
    });
  }
});

module.exports = router;
