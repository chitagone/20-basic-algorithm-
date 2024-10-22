function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const contacts = ["Alice", "Bob", "Charlie", "David", "Eve"];

const targetName = "Charlie";

const index = linearSearch(contacts, targetName);

if (index !== -1) {
  console.log(`contact ${targetName} found at index ${index}`);
} else {
  console.log(`Contact ${targetName} not found in the contact book`);
}
