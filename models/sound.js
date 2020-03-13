const mongoose = require('mongoose');

const SoundSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
    link: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Sound', SoundSchema);
