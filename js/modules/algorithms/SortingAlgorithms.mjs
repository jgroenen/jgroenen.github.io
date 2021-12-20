export default function (canvas, colors) {
    var link = "https://en.wikipedia.org/wiki/Sorting_algorithm";
    var ctx = canvas.getContext("2d");
    var copyCanvas = document.createElement('canvas');
    copyCanvas.width = canvas.width;
    copyCanvas.height = canvas.height;

    var sortingAlgorithms = [
        BubbleSort,
        InsertionSort
    ];

    console.log(`Sorting algorithms: ${link}`);

    function swap(array, i, j) {
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }

    function BubbleSort(unsortedArray) {
        var link = "https://nl.wikipedia.org/wiki/Bubblesort";

        var i, j;
        
        i = j = 0;

        function getArray() {
            return unsortedArray;
        }

        function getIndex() {
            return i;
        }

        function step() {
            if (j >= unsortedArray.length - 1) {
                return -1; // done
            }
            if (i >= unsortedArray.length - 1 - j) {
                i = 0;
                ++j;
            } else {
                if (unsortedArray[i] > unsortedArray[i + 1]) {
                    swap(unsortedArray, i, i + 1);
                }
                ++i;
            }
        }

        function getLink() {
            return link;
        }

        return {
            getArray,
            getIndex,
            step,
            getLink
        }
    }

    function InsertionSort(unsortedArray) {
        var link = "https://en.wikipedia.org/wiki/Insertion_sort";
        var i, j;
        
        i = j = unsortedArray.length - 2;

        function getArray() {
            return unsortedArray;
        }

        function getIndex() {
            return i;
        }

        function step() {
            if (j < 0) return -1; // done
            if (i > unsortedArray.length - 2 || unsortedArray[i] <= unsortedArray[i + 1]) {
                i = --j;
            } else {
                swap(unsortedArray, i, i + 1);
                ++i;
            }
        }

        function getLink() {
            return link;
        }

        return {
            getArray,
            getIndex,
            step,
            getLink
        }
    }

    function createRandomArray() {
        var randomArray = [];
        for (var i = 0; i < canvas.width; ++i) {
            randomArray[i] = i + 1;
        }
        for (var i = randomArray.length - 1; i > 0; --i) {
            swap(randomArray, i, Math.floor(Math.random() * i));
        }
        return randomArray;
    }

    function draw(theArray, theCurrentIndex) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colors[0] + "99";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < theArray.length; ++i) {
            ctx.fillStyle = i === theCurrentIndex ? colors[0] : colors[1];
            ctx.fillRect(i, canvas.height, 1, -theArray[i]);
        }
    }

    function getLink() {
        return link;
    }

    function runAnimation(interval) {
        var sortingAlgorithm = new (sortingAlgorithms[Math.floor(Math.random() * sortingAlgorithms.length)])(createRandomArray());
        console.log(`Algorithm: ${sortingAlgorithm.getLink()}`);
        var handle = setInterval(function () {
            draw(sortingAlgorithm.getArray(), sortingAlgorithm.getIndex());
            if (sortingAlgorithm.step() === -1) {
                clearInterval(handle);
            }
        }, interval);
    }

    return {
        getLink,
        runAnimation
    };
}