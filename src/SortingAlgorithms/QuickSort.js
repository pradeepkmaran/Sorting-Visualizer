export const getQuickSortAnimations = (array) => {
    const animations = [];

    performQuickSort(array, animations);

    return animations;
}

function performQuickSort(array, animations) {
    quickSort(array, 0, array.length-1, animations);
}

function partition(arr, low, high, animations) { 
    let pivot = arr[high]; 
    let i = low; 
  
    for (let j = low; j <= high - 1; j++) { 
        if (arr[j] < pivot) { 
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([i, arr[j], j, arr[i]])
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp; 
            i++; 
        } 
        else { 
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([i, arr[i], j, arr[j]])
        }
    }   
    animations.push([i, high]);
    animations.push([i, high]);
    animations.push([i, arr[high], high, arr[i]])
    let tmp = arr[i];
    arr[i] = arr[high];
    arr[high] = tmp;
    return i; 
} 
  
function quickSort(arr, low, high, animations) { 
    if (low >= high) return; 
    let pi = partition(arr, low, high, animations); 
  
    quickSort(arr, low, pi - 1, animations); 
    quickSort(arr, pi + 1, high, animations); 
} 


export const quickSortAlgo = () => {
    return `function quickSort(array)
    if length of array <= 1
        return array

    pivot = array[end] // Choose pivot element
    left = [] // Elements less than pivot
    right = [] // Elements greater than pivot

    for element in array[0 ... end-1]
        if element <= pivot
            append element to left
        else
            append element to right

    return concatenate(quickSort(left), pivot, quickSort(right))

function partition(array, low, high)
    pivot = array[high]
    i = low

    for j = low to high - 1
        if array[j] <= pivot
            swap array[i] and array[j]
            increment i

    swap array[i] and array[high]
    return i`;
}

export const quickSortDef = () => {
    return `Quick Sort is a highly efficient, comparison-based, divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. Quick Sort is known for its performance on large datasets, and its average-case time complexity is O(n log n). It is generally faster than Merge Sort and performs well in practice, though it is not stable by default.`;
}

export const quickSortTC = () => {
    return "O(n log n)";
}
