import React from "react";
import './SortingVisualizer.css';
import { getMergeSortAnimations } from "../SortingAlgorithms/MergeSort";
import { getInsertionSortAnimations } from "../SortingAlgorithms/InsertionSort";
import { getBubbleSortAnimations } from "../SortingAlgorithms/BubbleSort";
import { getHeapSortAnimations } from "../SortingAlgorithms/HeapSort";
import { getQuickSortAnimations } from "../SortingAlgorithms/QuickSort";

const ARRAY_SIZE = 150;

export class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        }
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < ARRAY_SIZE; i++) {
            array.push(i + 200);
        }
        shuffleArray(array);
        this.setState({ array });
    }

    animateSorting(animations) {
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
            const animation = animations[i];
            const isColorChange = (i % 3 !== 2);
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animation;
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (i % 3 === 0) ? 'red' : 'rgb(255, 196, 0)';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 2);
            } else {
                const [barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight] = animation;
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${barOneNewHeight}px`;
                    if (barTwoIdx !== undefined) {
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        barTwoStyle.height = `${barTwoNewHeight}px`;
                    }
                }, i * 2);
            }
        }
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        this.animateSorting(animations);
    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array);
        this.animateSorting(animations);
    }

    heapSort() {
        const animations = getHeapSortAnimations(this.state.array);
        this.animateSorting(animations);
    }

    insertionSort() {
        const animations = getInsertionSortAnimations(this.state.array);
        this.animateSorting(animations);
    }

    bubbleSort() {
        const animations = getBubbleSortAnimations(this.state.array);
        this.animateSorting(animations);
    }

    render() {
        const { array } = this.state;

        return (
            <div className='window'>
                <nav className='sort-buttons'>
                    <button onClick={() => this.resetArray()}>Generate New Bars</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </nav>
                <div className='array-bar-container'>
                    {array.map((value, idx) => (
                        <div
                            className='array-bar'
                            key={idx}
                            style={{ height: `${value}px` }}>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default SortingVisualizer;
