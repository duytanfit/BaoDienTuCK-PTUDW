var db = require('../utils/user');

module.exports = {
	all: () => {
		return db.load('select * from user');
	},

	single: id => {
		return db.load(`select * from user where UserID = ${id}`);
	},

	singleByUserName: userName => {
		return db.load(`select * from user where IDUser = '${userName}'`);
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