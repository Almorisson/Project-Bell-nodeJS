const soundEndpoints = {
	sounds: {
		'GET /api/v1/docs/sounds': 'API docs for sounds',
		'GET V/api/v1/sounds/': 'Get all sounds',
		'GET /api/v1/sounds/:sound_id': 'Get a single sound by its id',
		'POST /api/v1/sounds/': 'Create a sound',
		'PUT /api/v1/sounds/:sound_id': 'Update a single sound by its id',
		'DELETE /api/v1/sounds/:sound_id': 'Delete a single sound by its id'
	}
};

module.exports = soundEndpoints;
