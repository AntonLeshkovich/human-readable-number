module.exports = function toReadable (number) {
  let arr = Array.from(number.toString());
  let arrNums = arr.map(num => {
     return Number(num);
  });
  let arrWords = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
                  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
                  ];
  let arrZeroEnd = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

   if (number < 20) {
      for (let i = 0; i < arrWords.length; i++) {
          if (number == i) {
              return arrWords[i];
          }
      }
   } else if (number > 19 && number < 100 && arrNums[1] !== 0) {
      for (let i = 0; i < arrZeroEnd.length + 1; i++) {
                  if (arrNums[0] == i) {
                      for (let j = 0; j < arrWords.length; j++) {
                          if (arrNums[1] == j)
                          return arrZeroEnd[i - 1] + ` ${arrWords[j]}`;
                      }
                  } 
              };

   } else if (number < 100 && arrNums[1] == 0) {
      for (let i = 0; i < arrZeroEnd.length + 1; i++) {
          if (arrNums[0] == i) {
              return arrZeroEnd[i - 1];
          }
      }

   } else if (number > 99 && number < 1000 && arrNums[1] !== 0 && arrNums[1] !== 1 && arrNums[2] !== 0) {
      let hundredValue;
      let value;
      for (let i = 0; i < arrWords.length; i++) {
          if (arrNums[0] == i) {
              for (let j = 0; j < arrZeroEnd.length + 1; j++) {
                  if (arrNums[1] == j) {
                      hundredValue = `${arrWords[i]} hundred ${arrZeroEnd[j - 1]}`;
                  }
              }
          }
      }
      for (let i = 0; i < arrWords.length; i++) {
          if (arrNums[2] == i) {
              value = arrWords[i];
          }
      }
      return hundredValue + ` ${value}`;

   } else if (number > 99 && arrNums[1] == 0 && arrNums[2] !== 0) {
      for (let i = 0; i < arrWords.length; i++) {
          if (arrNums[0] == i) {
              for (let j = 0; j < arrWords.length; j++) {
                  if (arrNums[2] == j) {
                      return `${arrWords[i]} hundred ${arrWords[j]}`
                  }
              }
          }
      }
   } else if (number > 99 && arrNums[1] == 1) {
      for (let i = 0; i < arrWords.length; i++) {
          if (arrNums[0] == i) {
              for (let j = 0; j < arrWords.length; j++) {
                  if (Number(arr[1] + arr[2]) == j) {
                      return `${arrWords[i]} hundred ${arrWords[j]}`
                  }
              }
          }
      }
  } else if (number > 119 && arrNums[2] == 0) {
      for (let i = 0; i < arrWords.length; i++) {
          if (arrNums[0] == i) {
              for (j = 0; j < arrZeroEnd.length + 1; j++) {
                  if (arrNums[1] == j) {
                      return `${arrWords[i]} hundred ${arrZeroEnd[j - 1]}` 
                  }
              }
          }
      }
  } else if (number > 99 && arrNums[1] == 0 && arrNums[2] == 0) {
      for (let i = 0; i < arrWords.length; i++) {
          if (arrNums[0] == i) {
              return `${arrWords[i]} hundred`
          }
      }
  }
}

// toReadable(997);
