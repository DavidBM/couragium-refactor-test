let {resizeImage, submitToGoogle, submitToFacebook, submitToYellowPages} = require('../../exerciseFunctions');

var allDirectoriesList = "Google, Facebook, Yellow Pages";


class Submitter {
	submitSpam(data, directories, allDirectories, extraData) {
		data.start_date = extraData.start_date;
		data.end_date = extraData.end_date;

		if(!data.end_date || !data.end_date) {
			data.type = "FOREVER";
		} else {
			data.type = "TEMPORARY";
		}

		if(allDirectories) {
			directories = allDirectoriesList.split(',').map(dir => dir.trim());
		}

		resizeImages(data);

		var promises = [];

		directories.filter(a => a == "Google").map(() => submitToGoogle(data)).forEach(promise => promises.push(promise));
		directories.filter(a => a == "Facebook").map(() => submitToGoogle(data)).forEach(promise => promises.push(promise));
		directories.filter(a => a == "Yellow Pages").map(() => submitToGoogle(data)).forEach(promise => promises.push(promise));	
	
		return Promise.all(promises);
	}
}

function resizeImages(data) {
	var index = 0;

	data.images.forEach(image => {
		data.images[index++] = resizeImage(image);
	});
}

