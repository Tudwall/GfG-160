// User function Template for javascript

/**
 * @param {Number[]} arr
 */

class Solution {
	pushZerosToEnd(arr) {
		// code here
		const temp = new Array(arr.length);

		let j = 0;

		for (const element of arr) {
			if (element !== 0) {
				temp[j++] = element;
			}
		}

		while (j < arr.length) {
			temp[j++] = 0;
		}

		for (let i = 0; i < arr.length; i++) {
			arr[i] = temp[i];
		}
	}
}
