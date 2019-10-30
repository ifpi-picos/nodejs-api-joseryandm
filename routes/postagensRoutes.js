const express = require('express');
const postagensController = require('../controllers/postagens')
const router = express.Router();

router.get('/', async (req, res) => {
  const postagens = await postagensController.get();
  res.send(postagens);
});

router.post('/', async (req, res) => {
  await postagensController.create(req.body);
  res.send('Adicionado com sucesso');
});

router.put('/:id', async(req, res) => {
  const id = req.params.id;
  const postagemDTO = req.body;
  await postagensController.update(id, req.body);
  res.send('Alterado com sucesso')
})

module.exports = router;