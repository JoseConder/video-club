const express = require('express');
const router = express.Router();
const awaitlistController = require('../controllers/awaitlists');
const { app, checkPermission } = require('../app');


router.post('/', awaitlistController.create);
router.get('/', awaitlistController.list);
router.get('/:id', awaitlistController.index);
router.put('/:id', awaitlistController.replace);
router.patch('/:id', awaitlistController.update);
router.delete('/:id', awaitlistController.destroy);

module.exports = router;
