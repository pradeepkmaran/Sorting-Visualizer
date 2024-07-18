export const getInsertionSortAnimations = (array) => {
    const animations = [];

    performInsertionSort(array, animations);

    return animations;
}

function performInsertionSort(array, animations) {
    
    for(let i=0;i<array.length;i++) {
        let j=i;
        while(j>0) {
            if(array[j-1] > array[j]) {
                animations.push([j-1, j]);
                animations.push([j-1, j]);
                animations.push([j-1, array[j], j, array[j-1]]);
                let tmp = array[j-1];
                array[j-1] = array[j];
                array[j] = tmp;
                j--;
            } else {
                animations.push([j-1, j]);
                animations.push([j-1, j]);
                animations.push([j, array[j], j, array[j]])
                break;
            }
        }
    }
}

export const insertionSortAlgo = () => {
    return `function insertionSort(array)
    for i = 1 to length of array - 1
        key = array[i]
        j = i - 1

        // Move elements of array[0...i-1], that are greater than key,
        // to one position ahead of their current position
        while j >= 0 and array[j] > key
            array[j + 1] = array[j]
            j = j - 1

        array[j + 1] = key`;
}

export const insertionSortDef = () => {
    return `Insertion Sort is a simple, comparison-based sorting algorithm. It works by building a sorted portion of the array one element at a time, by repeatedly picking the next element and inserting it into the correct position relative to the already sorted portion. Insertion Sort is efficient for small datasets or nearly sorted arrays, with an average and worst-case time complexity of O(n^2). It is a stable sort, meaning it preserves the relative order of equal elements.`;
}

export const insertionSortTC = () => {
    return "O(n^2)";
}
