// WARNING: Do not edit these functions.
// Use it in your refactored code as black box.
// You are allowed to move this whereever you want (another process, other thread, other file, etc)
// but it needs to be used the business logic.

type Promotion = {
	start_date: Date,
	end_date: Date,
	type: 'FOREVER' | 'TEMPORARY',
};

function getPromotionInstance(id: number): Promotion | null {
	if (id !== 42) return null;

	return {
		start_date: new Date('25-07-2018'),
		end_date: new Date('25-07-2021'),
		type: 'FOREVER',
	};
}

export function resizeImage(image: Buffer): Buffer {
	const date = new Date();

	while ( (new Date()).getTime() - date.getTime() < 3000 ) {}

	return image;
}

export function submitToGoogle(data: Promotion) {
	return submit();
}

export function submitToFacebook(data: Promotion) {
	return submit();
}

export function submitToYellowPages(data: Promotion) {
	return submit();
}

function submit(): Promise<{message: 'submitted'}> {
	return new Promise((resolve, reject) => {
		const chance = Math.random();

		if (chance > 0.8) {
			reject({error: 'Internal Error'});
		}

		return resolve({message: 'submitted'});
	});
}
