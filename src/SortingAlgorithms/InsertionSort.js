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