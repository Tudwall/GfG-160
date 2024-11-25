// User function Template for javascript

class Solution {
	// Function returns the second largest element
	getSecondLargest(arr) {
		// Code Here
		let largest = 0;
		let secondLargest = -1;

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > largest) {
				largest = arr[i];
			}
		}

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > secondLargest && arr[i] !== largest) {
				secondLargest = arr[i];
			}
		}
		return secondLargest;
	}
}
