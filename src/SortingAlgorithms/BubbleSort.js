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