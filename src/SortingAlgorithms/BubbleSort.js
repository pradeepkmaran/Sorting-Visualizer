export const getBubbleSortAnimations = (array) => {
    const animations = [];

    performBubbleSort(array, animations);

    return animations;
}

function performBubbleSort(array, animations) {
    for(let i=0;i<array.length;i++) {
        
        // if you want to make the animation move from back to front
        for(let j=0;j<array.length-i-1;j++) { 
        
        // if you want to make the animationmove from front to back
        // doesnt works right?
        // for(let j=array.length-i-2;j>=0;j--) {
            animations.push([j, j+1]);
            animations.push([j, j+1]);
            if(array[j] > array[j+1]) {
                animations.push([j, array[j+1], j+1, array[j]]);
                let tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            } else {
                animations.push([j, array[j], j, array[j]]);
            }
        }
    }
}

export const bubbleSortAlgo = () => {
    return `function bubbleSort(array)
    n = length of array
    for i = 0 to n - 1
        for j = 0 to n - i - 2
            if array[j] > array[j + 1]
                swap(array[j], array[j + 1])`;
}

export const bubbleSortDef = () => {
    return `Bubble Sort is a simple, comparison-based sorting algorithm. It works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order. The process is repeated until the list is sorted. Bubble Sort is known for its simplicity but is inefficient for large datasets, with an average and worst-case time complexity of O(n^2). It is a stable sort, meaning it preserves the relative order of equal elements.`;
}

export const bubbleSortTC = () => {
    return "O(n^2)";
}
