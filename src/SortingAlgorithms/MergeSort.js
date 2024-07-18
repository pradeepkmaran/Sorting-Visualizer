// MERGE SORT
// export const mergeSort = array => {
//     if(array.length === 1) return array;
//     const mididx = Math.floor(array.length / 2);
//     const firstHalf = mergeSort(array.slice(0, mididx));
//     const secondHalf = mergeSort(array.slice(mididx));

//     const sortedArray = [];
//     let i=0, j=0;
    
//     while(i<firstHalf.length && j<secondHalf.length){
//         if(firstHalf[i] < secondHalf[j]){
//             sortedArray.push(firstHalf[i++]);
//         } else {
//             sortedArray.push(secondHalf[j++]);
//         }
//     }
//     while(i<firstHalf.length) sortedArray.push(firstHalf[i++]);
//     while(j<secondHalf.length) sortedArray.push(secondHalf[j++]);
// }

// export default mergeSort;




export const getMergeSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return animations;
    const dup = array.slice();
    performMergeSort(array, 0, array.length - 1, dup, animations);
    return animations;
}

export const mergeSortAlgo = () => {
    return `function mergeSort(array)
    if length of array <= 1
        return array
    
    mid = length of array / 2
    leftHalf = array[0...mid-1]
    rightHalf = array[mid...end]
    
    leftSorted = mergeSort(leftHalf)
    rightSorted = mergeSort(rightHalf)
    
    return merge(leftSorted, rightSorted)

function merge(left, right)
    result = empty array
    while left is not empty and right is not empty
        if left[0] <= right[0]
            append left[0] to result
            remove left[0] from left
        else
            append right[0] to result
            remove right[0] from right
    
    while left is not empty
        append left[0] to result
        remove left[0] from left
    
    while right is not empty
        append right[0] to result
        remove right[0] from right
    
    return result`;
}

export const mergeSortDef = () => {
    return `Merge Sort is a highly efficient, comparison-based, divide-and-conquer sorting algorithm. It works by recursively dividing an array into two halves, sorting each half independently, and then merging the sorted halves back together. The merging process ensures that the overall array remains sorted. Its faster than algorithms like Bubble Sort or Insertion Sort for large datasets. Additionally, Merge Sort is stable, meaning it preserves the relative order of equal elements, making it suitable for tasks that require stable sorting.`;
}

export const mergeSortTC = () => {
    return "O(n log n)";
}

function performMergeSort(mainArray, startIdx, endIdx, auxArray, animations) {
    if (startIdx === endIdx) return;
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    performMergeSort(auxArray, startIdx, midIdx, mainArray, animations);
    performMergeSort(auxArray, midIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, midIdx, endIdx, auxArray, animations);
}

function doMerge(mainArray, startIdx, midIdx, endIdx, auxArray, animations) {
    let i = startIdx;
    let j = midIdx + 1;
    let k = startIdx;

    while (i <= midIdx && j <= endIdx) {
        // Push both elements that are being compared
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxArray[i] <= auxArray[j]) {
            // Overwrite the value at index k in the original array with the value at index i in the auxiliary array
            animations.push([k, auxArray[i]]);
            mainArray[k++] = auxArray[i++];
        } else {
            // Overwrite the value at index k in the original array with the value at index j in the auxiliary array
            animations.push([k, auxArray[j]]);
            mainArray[k++] = auxArray[j++];
        }
    }

    while (i <= midIdx) {
        // Push both elements that are being compared
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
    }

    while (j <= endIdx) {
        // Push both elements that are being compared
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
    }
}