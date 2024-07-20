export const getBitonicSortAnimations = (array) => {
    const animations = [];
    if (array.length <= 1) return animations;
    const dup = array.slice();
    performBitonicSort(array, 0, array.length, 1, dup, animations);
    return animations;
}

export const bitonicSortAlgo = () => {
    return `function bitonicSort(array, up) {
        if (array.length <= 1) return array;

        const mid = Math.floor(array.length / 2);
        const leftHalf = array.slice(0, mid);
        const rightHalf = array.slice(mid);

        const leftSorted = bitonicSort(leftHalf, 1);
        const rightSorted = bitonicSort(rightHalf, 0);

        return bitonicMerge(leftSorted.concat(rightSorted), up);
    }`
}

function bitonicMerge(array, up) {
    if (array.length <= 1) return array;

    const mid = Math.floor(array.length / 2);
    for (let i = 0; i < mid; i++) {
        if ((array[i] > array[i + mid]) === up) {
            [array[i], array[i + mid]] = [array[i + mid], array[i]];
        }
    }

    const left = bitonicMerge(array.slice(0, mid), up);
    const right = bitonicMerge(array.slice(mid), up);

    return left.concat(right);
}

export const bitonicSortDef = () => {
    return "Bitonic Sort is a parallel algorithm for sorting. It works by recursively constructing a bitonic sequence (a sequence that increases and then decreases), and then merging this sequence into a sorted sequence. The process of constructing the bitonic sequence and merging are both highly parallelizable, making Bitonic Sort suitable for parallel computing environments.";
}

export const bitonicSortTC = () => {
    return "O(n log^2 n)";
}

function performBitonicSort(mainArray, low, cnt, direction, auxArray, animations) {
    if (cnt <= 1) return;
    const k = Math.floor(cnt / 2);

    performBitonicSort(auxArray, low, k, 1, mainArray, animations);
    performBitonicSort(auxArray, low + k, cnt - k, 0, mainArray, animations);

    doBitonicMerge(mainArray, low, cnt, direction, auxArray, animations);
}

function doBitonicMerge(mainArray, low, cnt, direction, auxArray, animations) {
    if (cnt <= 1) return;
    const k = Math.floor(cnt / 2);

    for (let i = low; i < low + k; i++) {
        if ((auxArray[i] > auxArray[i + k]) === direction) {
            animations.push([i, i + k]);
            animations.push([i, i + k]);
            animations.push([i, auxArray[i + k]]);
            animations.push([i + k, auxArray[i]]);
            [auxArray[i], auxArray[i + k]] = [auxArray[i + k], auxArray[i]];
        } else {
            animations.push([i, i + k]);
            animations.push([i, i + k]);
            animations.push([i, auxArray[i]]);
            animations.push([i + k, auxArray[i + k]]);
        }
    }

    doBitonicMerge(mainArray, low, k, direction, auxArray, animations);
    doBitonicMerge(mainArray, low + k, cnt - k, direction, auxArray, animations);
}
