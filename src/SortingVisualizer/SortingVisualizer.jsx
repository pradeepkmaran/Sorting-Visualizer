import React from "react";
import './SortingVisualizer.css'
import { getMergeSortAnimations } from "../SortingAlgorithms/MergeSort";
import { getInsertionSortAnimations } from "../SortingAlgorithms/InsertionSort";
import { getBubbleSortAnimations } from "../SortingAlgorithms/BubbleSort";
import { getHeapSortAnimations } from "../SortingAlgorithms/HeapSort";
import { getQuickSortAnimations } from "../SortingAlgorithms/QuickSort";

const ARRAY_SIZE = 100;

export class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        }
    }

    componentDidMount() { // when the component loads for the first time
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for(let i=0;i<ARRAY_SIZE;i++) {
            array.push(i+200);
        }
        shuffleArray(array);
        console.log(array);
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for(let i=0;i<animations.length;i++){
            const animation = animations[i];
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = (i%3 !== 2);  
            if(isColorChange) {
                const barOneIdx = animation[0];
                const barTwoIdx = animation[1];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (i%3 === 0 ? 'red' : 'blue');
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, (i*2));
                
            } else {
                const barOneNewHeight = animation[1];
                const barOneIdx = animation[0];
                
                const barOneStyle = arrayBars[barOneIdx].style;

                setTimeout(() => {
                    barOneStyle.height = `${barOneNewHeight}px`
                }, (i*2));
            }
        }
    }

    quickSort() {
        const animations = getQuickSortAnimations(this.state.array)
        console.log(this.state.array);
        console.log(animations);

        for(let i=0;i<animations.length;i++) {
            const animation = animations[i];
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = (i%3 !== 2);  
            if(isColorChange) {
                const barOneIdx = animation[0];
                const barTwoIdx = animation[1];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (i%3 === 0 ? 'red' : 'blue');
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, (i*2));
                
            } else {
                const barOneNewHeight = animation[1];
                const barOneIdx = animation[0];
                
                const barTwoNewHeight = animation[3];
                const barTwoIdx = animation[2];
                
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                setTimeout(() => {
                    barOneStyle.height = `${barOneNewHeight}px`
                    barTwoStyle.height = `${barTwoNewHeight}px`
                }, (i*2));
            }
        }
    }

    heapSort() {
        const animations = getHeapSortAnimations(this.state.array);
        for(let i=0;i<animations.length;i++) {
            // perform animations
        }
    }

    insertionSort() {
        console.log(this.state.array);
        const animations = getInsertionSortAnimations(this.state.array)
        console.log(this.state.array);
        console.log(animations);

        for(let i=0;i<animations.length;i++) {
            const animation = animations[i];
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = (i%3 !== 2);  
            if(isColorChange) {
                const barOneIdx = animation[0];
                const barTwoIdx = animation[1];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (i%3 === 0 ? 'red' : 'blue');
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, (i*2));
                
            } else {
                const barOneNewHeight = animation[1];
                const barOneIdx = animation[0];
                
                const barTwoNewHeight = animation[3];
                const barTwoIdx = animation[2];
                
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                setTimeout(() => {
                    barOneStyle.height = `${barOneNewHeight}px`
                    barTwoStyle.height = `${barTwoNewHeight}px`
                }, (i*2));
            }
        }

    }

    bubbleSort() {
        console.log(this.state.array);
        const animations = getBubbleSortAnimations(this.state.array)
        console.log(this.state.array);
        console.log(animations);

        for(let i=0;i<animations.length;i++) {
            const animation = animations[i];
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = (i%3 !== 2);  
            if(isColorChange) {
                const barOneIdx = animation[0];
                const barTwoIdx = animation[1];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = (i%3 === 0 ? 'red' : 'blue');
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, (i*2));
                
            } else {
                const barOneNewHeight = animation[1];
                const barOneIdx = animation[0];
                
                const barTwoNewHeight = animation[3];
                const barTwoIdx = animation[2];
                
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;

                setTimeout(() => {
                    barOneStyle.height = `${barOneNewHeight}px`
                    barTwoStyle.height = `${barTwoNewHeight}px`
                }, (i*2));
            }
        }
    }

    render() {
        const {array} = this.state;
        
        // const changeArraySize,() => {
        //     const comp = document.getElementById('array-size-drop-down');
        //     ARRAY_SIZE = comp.value;
        //     this.setState(ARRAY_SIZE);
        // }

        return (
            <div className='window'>
                <nav className='sort-buttons'>
                    <button onClick={() => {this.resetArray()}}>Generate New Bars</button>
                    <button onClick={() => {this.mergeSort()}}>Merge Sort</button>
                    <button onClick={() => {this.quickSort()}}>Quick Sort</button>
                    <button onClick={() => {this.heapSort()}}>Heap Sort</button>
                    <button onClick={() => {this.insertionSort()}}>Insertion Sort</button>
                    <button onClick={() => {this.bubbleSort()}}>Bubble Sort</button>
                    <select id='array-size-drop-down'>
                        <label>SIZE</label>
                        <option value='5'>5</option>
                        <option value='10'>10</option>
                        <option value='20'>20</option>
                        <option value='50'>50</option>
                        <option value='100'>100</option>
                        <option value='200'>200</option>
                    </select>
                </nav>
                <div className='array-bar-container'>
                    {array.map((value, idx) =>(
                        <div 
                        className='array-bar' 
                        key={idx}
                        style={{height: `${value}px`}}></div>
                    ))}
                </div>
                
            </div>
        );
    }
}

// function randomIntFromInterval(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default SortingVisualizer;