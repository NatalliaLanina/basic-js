import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * --discard-next    excludes the next element of the array from the transformed array.
 * --discard-prev    excludes the previous element of the array from the transformed array.
 * --double-next    doubles the next element of the array in the transformed array.
 * --double-prev    doubles the previous element of the array in the transformed array.
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error('"arr" parameter must be an instance of the Array!');
  }

  let newArr = arr.slice();

  for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] === '--discard-next') {
      let index = newArr.indexOf('--discard-next');
      let result = newArr.splice(index, 2 );
      return result;
    }
  }

}
