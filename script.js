
const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result = []; // To store the resulting subarrays
  let currentChunk = []; // Current subarray being formed
  let currentSum = 0; // Current sum of elements in the chunk

  for (let num of arr) {
    // If adding the current number exceeds n
    if (currentSum + num > n) {
      // Push the current chunk to the result and reset
      result.push(currentChunk);
      currentChunk = [];
      currentSum = 0;
    }

    // Add the current number to the chunk and update the sum
    currentChunk.push(num);
    currentSum += num;
  }

  // If there are remaining elements in the last chunk
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
