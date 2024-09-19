const savedData = JSON.parse(localStorage.getItem('savedData')) || []; // Retrieve saved data from localStorage or initialize as an empty array

// Function to save data into the array and localStorage
export const saveData = (savedLetter, word) => {
  const data = {
    savedLetter,
    word,
  };

  savedData.push(data); // Save data into the array
  localStorage.setItem('savedData', JSON.stringify(savedData)); // Save updated array into localStorage
};

// Function to retrieve saved data from the array
export const getSavedData = () => {
  return savedData;
};
