const binarySearch = (list: number[], n: number) => {
 let left = 0
 let right = list.length - 1
 while (left <= right) {
  const mid = Math.floor((left + right)/2)
  if (list[mid] > n) {
    right = mid
  }
  if (list[mid] < n) {
    left = mid
  }
  if (list[mid] === n) {
    return mid
  }
 }
};
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
