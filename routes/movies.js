const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');
const { checkPermission } = require('../acl');

router.post('/', checkPermission('Create'), controller.create)

router.get('/', checkPermission('Read'),controller.list);

router.get('/:id', checkPermission('Read'),controller.index);

router.put('/:id', checkPermission('Update'),controller.replace);

router.patch('/:id', checkPermission('Update'),controller.update);

router.delete('/:id', checkPermission('Delete'),controller.destroy);

module.exports = router;