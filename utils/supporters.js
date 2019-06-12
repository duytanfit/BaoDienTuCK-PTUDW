var moment = require('moment');

module.exports = {

	getCurrentDate: () => { 
		return moment().format('YYYY-MM-DD');
	}
}