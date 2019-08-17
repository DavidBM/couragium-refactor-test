// WARNING: Do not edit these functions. 
// Use it in your refactored code as black box.
// You are allowed to move this whereever you want (another process, other thread, other file, etc)
// but it needs to be used the business logic. 

// Asume the argument image is a Buffer and that it returns another Buffer.
export function resizeImage(image) {
	const date = new Date();while(new Date() - date < 2000) {}

	return image;
}

export function submitToGoogle(data) {
	return submit();
};

export function submitToFacebook(data) {
	return submit();
};

export function submitToYellowPages(data) {
	return submit();
};

function submit() {
	return new Promise((resolve, reject) => {
		const chance = Math.random();

		if(chance > 0.8) {
			reject({error: "Internal Error"});
		}

		return resolve({message: "submitted"});
	});
}
