export const getHeapSortAnimations = (array) => {
    const animations = [];

    performHeapSort(array, animations);

    return animations;
}

function heapify(array, n, i, animations) {
    let largest = i; // current node
    let left = 2*i+1; // left child
    let right = 2*i+2; // right child
    if(left < n && array[left] > array[largest]) {
        largest = left;
    }
    if(right < n && array[right] > array[largest]) {
        largest = right;
    }
    if(largest !== i) { // if largest is not the root

        animations.push([i, largest]);
        animations.push([i, largest]);
        animations.push([i, array[largest], largest, array[i]]);

        let temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;        

        heapify(array, n, largest, animations);
    } 
    else {
        animations.push([i, largest]);
        animations.push([i, largest]);
        animations.push([i, array[i], largest, array[largest]]);
    }
}

function performHeapSort(array, animations) {
    var n=array.length;
    for(let i=n/2-1; i>=0; i--) {
        heapify(array, n, i, animations);
    }

    for(let i=n-1; i>0; i--) {
        animations.push([i, 0]);
        animations.push([i, 0]);
        animations.push([i, array[0], 0, array[i]]);

        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        heapify(array, i, 0, animations);
    }
}

export const heapSortAlgo = () => {
    return `function heapSort(array)
    n = length of array

    // Build max heap
    for i = n/2 - 1 downto 0
        heapify(array, n, i)

    // Extract elements from heap
    for i = n-1 downto 0
        swap(array[0], array[i]) // Move current root to end
        heapify(array, i, 0) // Call max heapify on the reduced heap

function heapify(array, n, i)
    largest = i // Initialize largest as root
    left = 2*i + 1 // Left child
    right = 2*i + 2 // Right child

    // If left child is larger than root
    if left < n and array[left] > array[largest]
        largest = left

    // If right child is larger than largest so far
    if right < n and array[right] > array[largest]
        largest = right

    // If largest is not root
    if largest != i
        swap(array[i], array[largest])

        // Recursively heapify the affected sub-tree
        heapify(array, n, largest)`;
}

export const heapSortDef = () => {
    return `Heap Sort is an efficient, comparison-based, in-place sorting algorithm that leverages a binary heap data structure. It works by first building a max heap from the input array, and then repeatedly extracting the maximum element from the heap and rebuilding the heap. The process continues until all elements are sorted. Heap Sort is particularly notable for its performance with large datasets and its worst-case time complexity, which is consistently O(n log n). However, it is not a stable sort, meaning it does not necessarily preserve the relative order of equal elements.`;
}

export const heapSortTC = () => {
    return "O(n log n)";
}
