let exerciseFunctions = require('../../../exerciseFunctions');
let SubmissionService = require('../../services/submission');

let submissionService = new SubmissionService();

class Promotion  {
	submit(req, res) {
		exerciseFunctions.getPromotionInstance(parseInt(req.params.promotionId))
		.then((promotion) => {
			if(!promotion) throw new Error("No promotion found");

			let extraData = {};

			if(promotion.start_date.getTime() < (new Date).getTime())
				extraData.start_date = new Date();

			var allDirectories = true;
			var directories = [];

			if(req.query.directories) {
				directories = req.query.directories.split(',').map(a => a.trim());
				allDirectories = false;
			}

			return submissionService.submitSpam(promotion, directories, allDirectories, extraData);
		})
		.then(result => {
			res.status(200);
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(result));
		})
		.catch(e => {
			console.log(e)
			if(e && e.message && e.message === "No promotion found") {
				res.status(400);
				res.setHeader('Content-Type', 'application/json');
				res.end(JSON.stringify({message: "Not found"}));
			} else {
				res.status(500);
				res.setHeader('Content-Type', 'application/json');
				res.end(JSON.stringify({message: "Internal Error"}));
			}
		})
		.catch(e => console.log(e));
	}
}

const promotion = new Promotion();

export function getInstance() {
	return promotion;
}
