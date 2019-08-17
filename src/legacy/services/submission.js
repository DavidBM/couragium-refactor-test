let {resizeImage, submitToGoogle, submitToFacebook, submitToYellowPages} = require('../../exerciseFunctions');

var allDirectoriesList = "Google, Facebook, Yellow Pages";


module.exports = class Submitter {
	submitSpam(data, directories, allDirectories, extraData) {
		if(extraData.start_date) data.start_date = extraData.start_date;
		if(extraData.end_date) data.end_date = extraData.end_date;

		if(!data.end_date || !data.end_date) {
			data.type = "FOREVER";
		} else {
			data.type = "TEMPORARY";
		}

		if(allDirectories) {
			directories = allDirectoriesList.split(',').map(dir => dir.trim());
		}

		let submittingDirectories = {};

		resizeImages(data)
		.then(() => {
			var promises = [];

			directories.filter(a => a == "Google").map(() => submitToGoogle(data)).forEach(promise => {promises.push(promise); submittingDirectories["Google"] = promise});
			directories.filter(a => a == "Facebook").map(() => submitToGoogle(data)).forEach(promise => {promises.push(promise); submittingDirectories["Facebook"] = promise});
			directories.filter(a => a == "Yellow Pages").map(() => submitToGoogle(data)).forEach(promise => {promises.push(promise); submittingDirectories["Yellow Pages"] = promise});	
		
			return Promise.all(promises);
		})
		.then(() => {
			return Promise.all(Object.keys(submittingDirectories).map(key => submittingDirectories[key].then(result => submittingDirectories[key] = result)));
		})
		.then(() => {
			Object.keys(submittingDirectories).map(key => {
				return {
					directory: key,
					status: submittingDirectories[key],
				}
			});
		});
	}
}

async function resizeImages(data) {
	var index = 0;

	data.images.forEach(image => {
		data.images[index++] = await resizeImage(image);
	});
}

