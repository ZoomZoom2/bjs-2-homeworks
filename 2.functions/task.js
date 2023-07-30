function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let avg = arr[0];
  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
    avg += arr[i];
  }
  if (arr.length > 0) {
    avg = Number((avg / arr.length).toFixed(2));
  }
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = 0;
  let max = 0;
  if (arr.length > 0) {
    min = Math.min(...arr);
    max = Math.max(...arr);
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  if (countEvenElement > 0) {
    avg = Number((sumEvenElement / countEvenElement).toFixed(2));
  }
  return avg;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let resultWork = -Infinity;
  console.log(resultWork, maxWorkerResult);
  for (let i = 0; i < arrOfArr.length; i++) {
    resultWork = func(...arrOfArr[i]);
    maxWorkerResult = Math.max(maxWorkerResult, resultWork);
  };
  return maxWorkerResult;
}