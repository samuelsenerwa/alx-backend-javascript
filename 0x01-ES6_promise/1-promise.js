/*eslint-disable*/
export default function getFullResponseFromAPI(success) {
	const arr = new Promise((response, reject) => {
		if(success) {
			resolve({status:200, body:'Success"});
		} else {
			reject(new Error('The fake API is not working currently'));
			}
		});
	return arr;
}

