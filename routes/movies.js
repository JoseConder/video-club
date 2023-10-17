const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');
/* GET users listing.
la jerarquia importa */
router.get('/',controller.list );
router.post('/', controller.create);
router.get('/:id', controller.index)
router.put('/:id', controller.replace);
router.patch('/Actor', controller.addActor);

router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
module.exports = router;
