function SortingAlgorithms(canvas) {
    var link = "https://en.wikipedia.org/wiki/Sorting_algorithm";
    var ctx = canvas.getContext("2d");
    var copyCanvas = document.createElement('canvas');
    copyCanvas.width = canvas.width;
    copyCanvas.height = canvas.height;

    console.log(`Sorting algorithms: ${link}`);

    function swap(array, i, j) {
        var tmp = array[i];
        array[i] = array[j];
        array[j] = tmp;
    }

    function createRandomArray() {
        randomArray = [];
        for (var i = 0; i < canvas.width; ++i) {
            randomArray[i] = i;
        }
        for (var i = randomArray.length - 1; i > 0; --i) {
            swap(randomArray, i, Math.floor(Math.random() * i));
        }
        return randomArray;
    }

    function stepBubbleSort(sortingState) {
        if (sortingState.randomArray[sortingState.currentIndex] > sortingState.randomArray[sortingState.currentIndex + 1]) {
            swap(sortingState.randomArray, sortingState.currentIndex, sortingState.currentIndex + 1);
        }
        sortingState.currentIndex = (sortingState.currentIndex + 1) % (sortingState.randomArray.length - 1)
        return sortingState;
    }

    function draw(sortingState) {
        ctx.fillStyle = "#0086ff33";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ff8600";
        for (var i = 0; i < sortingState.randomArray.length; ++i) {
            ctx.fillRect(i, canvas.height, 1, -sortingState.randomArray[i]);
        }
    }

    function getLink() {
        return link;
    }

    function runAnimation(interval) {
        var sortingState = {
            randomArray: createRandomArray(),
            currentIndex: 0
        };
        setInterval(function () {
            sortingState = stepBubbleSort(sortingState);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            draw(sortingState);
        }, interval);
    }

    return {
        getLink,
        runAnimation
    };
}