var promotions = require('./promotions').getInstance();

export function route(app) {
	app.post('/promotions/submit/:promotionId', promotions.submit);
}
