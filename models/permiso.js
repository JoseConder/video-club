const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  description: String,
  type: {
    type: String,
    enum: ['Read', 'Create', 'Update', 'Delete'],
  },
});

module.exports = mongoose.model('Permission', permissionSchema);