var db = require('../utils/db');

module.exports = {
	all: () => {
		return db.load('select * from user');
	},

	single: id => {
		return db.load(`select * from user where UserID = ${id}`);
	},

	singleByUserName: userName => {
		return db.load(`select * from user where Username = '${Username}'`);
	},

	add: entity => {
		return db.add('user', entity);
	},

	update: entity => {
		var id = entity.UserID;
		delete entity.UserID;
		return db.update('user', 'UserID', entity, id);
	},

	delete: id => {
		return db.delete('user', 'UserID', id);
	}
};