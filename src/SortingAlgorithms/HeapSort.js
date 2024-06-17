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