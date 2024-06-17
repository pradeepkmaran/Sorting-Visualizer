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