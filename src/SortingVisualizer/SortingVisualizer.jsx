import React from "react";
import './SortingVisualizer.css'
import { getMergeSortAnimations } from "../SortingAlgorithms/MergeSort";

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
        for(let i=0;i<200;i++) {
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
                }, (i*200));
                
            } else {
                const newHeight = animation[1];
                const barOneIdx = animation[0];
                
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${newHeight}px`
                }, (i*200));
            }
        }
    }

    quickSort() {

    }

    heapSort() {

    }

    bubbleSort() {

    }

    render() {
        const {array} = this.state;

        return (
            <div className='array-container'>
                {array.map((value, idx) =>(
                    <div 
                    className='array-bar' 
                    key={idx}
                    style={{height: `${value}px`}}></div>
                ))}
                <button onClick={() => {this.resetArray()}}>Generate New Button</button>
                <button onClick={() => {this.mergeSort()}}>Merge Sort</button>
                <button onClick={() => {this.quickSort()}}>Quick Sort</button>
                <button onClick={() => {this.heapSort()}}>Heap Sort</button>
                <button onClick={() => {this.bubbleSort()}}>Bubble Sort</button>
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