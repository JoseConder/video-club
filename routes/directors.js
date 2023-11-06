const express = require('express');


const router = express.Router();

const controller = require('../controllers/directors');
const { app, checkPermission } = require('../app');


router.get('/list/:page?', controller.list);
router.get('/:id', controller.index);
router.post('/', controller.create);
router.put('/:id', controller.replace);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;