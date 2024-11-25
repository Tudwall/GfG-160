// User function Template for javascript

class Solution {
	// Function returns the second largest element
	getSecondLargest(arr) {
		// Code Here
		let largest = 0;
		let secondLargest = -1;

		for (const element of arr) {
			if (element > largest) {
				largest = element;
			}
		}

		for (const element of arr) {
			if (element > secondLargest && element !== largest) {
				secondLargest = element;
			}
		}
		return secondLargest;
	}
}
