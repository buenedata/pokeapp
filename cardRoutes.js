const express = require('express');
const router = express.Router();
const { getCards, getCardById } = require('../controllers/cardController');

router.get('/', getCards);
router.get('/:id', getCardById);

module.exports = router;
