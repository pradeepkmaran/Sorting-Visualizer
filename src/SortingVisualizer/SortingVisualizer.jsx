import React from "react";
import './SortingVisualizer.css';
import { getMergeSortAnimations } from "../SortingAlgorithms/MergeSort";
import { getInsertionSortAnimations } from "../SortingAlgorithms/InsertionSort";
import { getBubbleSortAnimations } from "../SortingAlgorithms/BubbleSort";
import { getHeapSortAnimations } from "../SortingAlgorithms/HeapSort";
import { getQuickSortAnimations } from "../SortingAlgorithms/QuickSort";
import { FaBars, FaTimes, FaPlay } from "react-icons/fa";
import { MdShuffle } from "react-icons/md";
import ReactSlider from "react-slider";

export class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            arraySize: 120,
            sortingSpeed: 5,
            selectedSort: 'Select a sort from menu',
            showMenu: false,
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        let diff = this.state.arraySize
        let tot = 400;
        let each = tot / diff;
        for (let i = 1; i <= this.state.arraySize; i++) {
            array.push(i * each);
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
                }, i * 300 / this.state.sortingSpeed ** 2.3);
            } else {
                const [barOneIdx, barOneNewHeight, barTwoIdx, barTwoNewHeight] = animation;
                const barOneStyle = arrayBars[barOneIdx].style;
                setTimeout(() => {
                    barOneStyle.height = `${barOneNewHeight}px`;
                    if (barTwoIdx !== undefined) {
                        const barTwoStyle = arrayBars[barTwoIdx].style;
                        barTwoStyle.height = `${barTwoNewHeight}px`;
                    }
                }, i * 300 / this.state.sortingSpeed ** 2.3);
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

    handleSortChange(event) {
        const { value } = event.target;
        this.setState({ selectedSort: value, showMenu: false });
    }

    handleSort() {
        switch (this.state.selectedSort) {
            case 'Merge Sort':
                this.mergeSort();
                break;
            case 'Quick Sort':
                this.quickSort();
                break;
            case 'Heap Sort':
                this.heapSort();
                break;
            case 'Insertion Sort':
                this.insertionSort();
                break;
            case 'Bubble Sort':
                this.bubbleSort();
                break;
            default:
                break;
        }
    }

    toggleMenu = () => {
        this.setState(prevState => ({ showMenu: !prevState.showMenu }));
    }

    handleArraySizeChange = (value) => {
        this.setState({ arraySize: value }, () => this.resetArray());
    }

    handleSortingSpeedChange = (value) => {
        this.setState({ sortingSpeed: value });
    }

    render() {
        const { array, arraySize, sortingSpeed, selectedSort, showMenu } = this.state;

        return (
            <div className='window'>

                <header>
                    <nav>
                        <button className='open-menu-btn' onClick={this.toggleMenu}>
                            <FaBars />
                        </button>
                        <h1 className='app-name'>
                            Pradeep's Sorting Visualizer Pro
                        </h1>
                    </nav>
                </header>

                {showMenu && <div className="sliding-menu-bar">
                    <button className='close-menu-btn' onClick={this.toggleMenu}>
                        <FaTimes />
                    </button>
                    <div className='sort-options' onChange={(event) => this.handleSortChange(event)}>
                        <div className='sort-option'>
                            <input type="radio" id="mergeSort" name="sort" value="Merge Sort" checked={selectedSort === 'Merge Sort'} />
                            <label htmlFor="mergeSort">Merge Sort</label>
                        </div>
                        <div className='sort-option'>
                            <input type="radio" id="quickSort" name="sort" value="Quick Sort" checked={selectedSort === 'Quick Sort'} />
                            <label htmlFor="quickSort">Quick Sort</label>
                        </div>
                        <div className='sort-option'>
                            <input type="radio" id="heapSort" name="sort" value="Heap Sort" checked={selectedSort === 'Heap Sort'} />
                            <label htmlFor="heapSort">Heap Sort</label>
                        </div>
                        <div className='sort-option'>
                            <input type="radio" id="insertionSort" name="sort" value="Insertion Sort" checked={selectedSort === 'Insertion Sort'} />
                            <label htmlFor="insertionSort">Insertion Sort</label>
                        </div>
                        <div className='sort-option'>
                            <input type="radio" id="bubbleSort" name="sort" value="Bubble Sort" checked={selectedSort === 'Bubble Sort'} />
                            <label htmlFor="bubbleSort">Bubble Sort</label>
                        </div>
                    </div>
                </div>}

                <div className="display-container">
                    <div className='selected-sort-display'>
                        {selectedSort}
                    </div>
                    <div className='action-btns'>
                        <button className='generate-new-bars-btn' onClick={() => this.resetArray()}> <MdShuffle className="shuffle-icon" /> <h2>Shuffle</h2> </button>
                        <button 
                            className="sort-play-btn"
                            onClick={() => this.handleSort()}
                            disabled={selectedSort === "Select a sort from menu"}
                            >
                            <FaPlay className="play-icon" />
                            <h2>Sort</h2>
                        </button>
                    </div>
                    <div className="sliders-container">
                        <div className="slider">
                            <label>Array Size: {arraySize}</label>
                            <ReactSlider
                                className="horizontal-slider"
                                thumbClassName="slider-thumb"
                                trackClassName="slider-track"
                                value={arraySize}
                                onChange={this.handleArraySizeChange}
                                min={10}
                                max={200}
                                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                            />
                        </div>
                        <div className="slider">
                            <label>Sorting Speed: x{sortingSpeed}</label>
                            <ReactSlider
                                className="horizontal-slider"
                                thumbClassName="slider-thumb"
                                trackClassName="slider-track"
                                value={sortingSpeed}
                                onChange={this.handleSortingSpeedChange}
                                min={1}
                                max={20}
                                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                            />
                        </div>
                    </div>
                </div>

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
