class Heap {
    constructor(cap) {
        this.arr = new Array(cap)
        this.size = 0;
        this.capacity = cap;
    }

    left = (i) => { return Math.floor((2 * i + 1)); }
    right = (i) => { return Math.floor((2 * i + 2)); }
    parent = (i) => { return Math.floor((i - 1) / 2); }

    /**
     * insert new elemnt in array and convert to min heap
     * @param {*} ele 
     * @returns 
     */
    insertMinHeap = (ele) => {
        this.size = this.arr.length;
        if (this.size === this.capacity) return;
        else {
            this.size++;
            this.arr[this.size - 1] = ele
        }

        this.createMinHeap(this.size - 1)
        return this.arr
    }

    /**
     * create min heap from bottom to top after inserting new element
     * @param {*} i 
     * @returns 
     */
    createMinHeap = (i) => {
        for (let start = i; start != 0 && this.arr[this.parent(start)] > this.arr[start];) {
            let temp = this.arr[start];
            this.arr[start] = this.arr[this.parent(start)]
            this.arr[this.parent(start)] = temp;
            start = this.parent(start)
        }
        return this.arr;
    }

    /**
     * min heapify - min at highest priority
     * @param {*} i 
     */
    minHeapify = (i) => {
        let lt = this.left(i);
        let rt = this.right(i);
        let smallest = i
        if (lt < this.size && this.arr[lt] < this.arr[smallest]) {
            smallest = lt
        };
        if (rt < this.size && this.arr[rt] < this.arr[smallest]) {
            smallest = rt
        };
        if (smallest != i) {
            let temp = this.arr[smallest];
            this.arr[smallest] = this.arr[i]
            this.arr[i] = temp;
            this.minHeapify(smallest)
        }
    }

    /**
     * removinf smallest element considering root is the smallest 
     * @returns 
     */
    extractMin = () => {
        if (this.size === 0) return [];
        if (this.size === 1) {
            this.arr.shift()
            this.size--
            return this.arr[this.size]
        }
        let el = this.arr[0]
        this.arr[0] = this.arr[this.size - 1];
        this.arr.pop()
        this.size--
        this.minHeapify(0)
        return el
    }

    /**
     * Decrease key at index i by value x
     */
    decreaseKey = (i, x) => {
        if (i >= this.size) return;
        else {
            this.arr[i] = x
        }
        this.createMinHeap(i);
        return this.arr
    }

    /**
     * Delete key at index
     * @param: i: index
     * @return : heapify arr
     */
    deleteKey = (i) => {
        if (i >= this.size) return;
        else {
            this.arr[i] = this.arr[this.size - 1];
            this.arr.pop();
            this.size--
        }
        this.minHeapify(i);
        return this.arr
    }

    /**
     * Create min heapify array from unsorted array
     * @returns 
     */
    buildHeap = (n = this.size) => {
        if (n >= this.capacity) {
            return 'arr size is more than its capacity '
        }
        else {
            for (let i = Math.floor((n - 2) / 2); i >= 0; i--) { this.minHeapify(i) }
        }
        return this.arr

    }

    /**
     * Heap Sort
     * Time Complexity : O(nLogn)
     * Steps: 1. max heapify so to get largets element in start
     * Steps: 2. replace first element with last element
     * Steps  3: then decrease the size by 1
     * Steps  4: and heapify rest of array 
     * 
     */
    heapSort = () => {
        this.buildMaxHeap()
        for (let i = this.size - 1; i >= 0; i--) {
            let temp = this.arr[0];
            this.arr[0] = this.arr[i];
            this.arr[i] = temp;
            this.maxHeapify(i, 0);
        }
        return this.arr;
    }

    /**
     * Build max heap
     */
    buildMaxHeap = () => {
        this.size = this.arr.length;
        if (this.size >= this.capacity) {
            return 'arr size is more than its capacity '
        }
        else {
            for (let i = this.size / 2 - 1; i >= 0; i--) { this.maxHeapify(this.size, Math.floor(i)) }
        }
    }

    /**
     * max heapify
     */
    maxHeapify = (n = this.size, i) => {
        let lt = this.left(i);
        let rt = this.right(i);
        let largest = i;
        if (lt < n && this.arr[lt] > this.arr[largest]) {
            largest = lt
        }
        if (rt < n && this.arr[rt] > this.arr[largest]) {
            largest = rt
        }

        if (largest !== i) {
            let temp = this.arr[largest];
            this.arr[largest] = this.arr[i]
            this.arr[i] = temp;
            this.maxHeapify(n, largest)
        }
        return this.arr
    }

    /**
     * Sort an array that is already k-sorted.
     * @param {*} k
     * @returns 
     */
    sortKSortedArr = (k) => {
        let n = this.size
        let priorityQueue = []
        let index = 0

        // enter k element in queue
        // Create a Min Heap of size k+1 with first k+1 elements. This will take O(k)
        for (let i = 0; i <= k; i++) {
            priorityQueue.push(this.arr[i])
        }
        // sort queue
        priorityQueue.sort((a, b) => a - b);

        // One by one remove min element from heap, put it in result array,
        // and add a new element to heap from remaining elements.
        for (let i = k + 1; i < n; i++) {
            // console.log(priorityQueue, "priorityQueue", this.arr, index)
            this.arr[index] = priorityQueue[0];
            index++;
            priorityQueue.shift();
            priorityQueue.push(this.arr[i]);
            priorityQueue.sort((a, b) => a - b);
        }

        // replace the arr at index from sorted priority queue
        while (priorityQueue.length != 0) {
            // console.log(priorityQueue, "priorityQueue1", this.arr, index)
            this.arr[index] = priorityQueue[0];
            index++
            priorityQueue.shift();
        }
        return this.arr
    }

    // Approach 1: sort element then get first k lement
    /**
     * Approach 2: build Max heap and extract max and again max heapify rest k times
     * k: no of elements
     * Time complexity O(n +KlogN)
     * @param {*} k 
     * @returns 
     */
    printKlargestEle = (k) => {
        let ans = []
        this.buildMaxHeap();
        for (let i = 0; i < k; i++) {
            ans.push(this.arr[0]);
            this.extractMax()
        }
        return ans
    }

    /**
     * Approach 3: print k largest element 
     * k: no of elements
     * minify heap till k element
     * replace array of k+1 with array first if arr[0] is smaller and minify heap till k element
     * remove k+1 element from arr
     * if(arr size is equal to k) return arr
     * Time complexity O(k +(N-k)logN)
     */

    printKlargestEleOpt = (k) => {
        this.buildHeap(k);
        while (this.arr.length > k) {
            if (this.arr[k] > this.arr[0]) {
                this.arr[0] = this.arr[k]
                this.buildHeap(k)
            }
            this.arr.splice(k, 1)
            if (this.arr.length === k) {
                return this.arr
            }
        }
    }

    /**
     * remove max element in max heap and heapify again
     * @returns 
     */
    extractMax = () => {
        if (this.size === 0) return []
        if (this.size === 1) {
            this.arr.shift()
            size--
            return this.arr[this.size]
        }
        this.arr[0] = this.arr[this.size - 1];
        this.arr.pop()
        this.size--;
        this.maxHeapify(this.size, 0)
        return this.arr
    }

    /**
     * Buy maximum from given sum
     */
    buyMaxEle = (sum) => {
        let count = 0
        this.buildHeap();
        sum = sum - this.arr[0]
        while (sum >= 0) {
            this.extractMin()
            sum = sum - this.arr[0];
            count++
        }
        return count
    }

    /**
     * X elementsclosest to k
     * @param {*} k 
     * @param {*} x 
     * @returns 
     */
    KclosestElement = (k, x) => {
        this.arr = this.arr.map((data) => Math.abs(data - k))
        this.buildHeap();
        let ans = [];
        while (x > 0) {
            ans.push(this.arr[0] + k)
            this.extractMin();
            x--
        }
        return ans
    }

    /**
     *  Merge K sorted Array
     * @returns 
     */
    mergeKSortedArray = () => {
        let res = []
        let n = this.arr.length
        let pq = new Array()
        for (let i = 0; i < n; i++) {
            let k = {
                value: this.arr[i][0],
                arrPos: i,
                valPos: 0
            }
            pq.push(k)
        }
        let ans = this.buildPQminHeap(n, pq);
        while (pq!== undefined && pq.length > 0) {
            let val = ans[0]
            res.push(val.value)
            if (this.arr[val.arrPos][val.valPos + 1]!== undefined) {
                pq.push({
                    value: this.arr[val.arrPos][val.valPos + 1],
                    arrPos: val.arrPos,
                    valPos: val.valPos + 1
                })
            }
            pq = this.extractPQMin(pq.length, pq);
        }
        return res
    }

    buildPQminHeap = (n, pq) => {
        for (let i = Math.floor((n - 2) / 2); i >= 0; i--) { this.minPQheapify(i, pq) }
        return pq
    }

    /**
     * 
     * @param {*} i 
     * @param {*} arr 
     * @returns 
     */
    minPQheapify = (i, arr) => {
        let lt = this.left(i);
        let rt = this.right(i);
        let smallest = i;
        if (lt < arr.length && arr[lt].value < arr[smallest].value) {
            smallest = lt
        }
        if (rt < arr.length && arr[rt].value < arr[smallest].value) {
            smallest = rt
        }
        if (smallest != i) {
            let temp = arr[smallest];
            arr[smallest] = arr[i]
            arr[i] = temp;
            this.minPQheapify(smallest, arr)
        }
        return arr
    }

    /**
     * 
     * @param {*} n 
     * @param {*} arr 
     * @returns 
     */
    extractPQMin = (n, arr) => {
        if (n === 0) return [];
        if (n === 1) {
            arr.shift()
            return arr[n]
        }
        arr[0] = arr[n-1];
        arr.pop()
        this.minPQheapify(0, arr)
        return arr
    }
}



// let heap = new Heap(15);
// heap.arr = [10, 20, 15, 40, 50, 100, 25, 45]
// heap.size = heap.arr.length;
// console.log(heap.insertMinHeap(12), "insert")
// console.log(heap.extractMin(), "remove min", heap.arr)
// console.log(heap.decreaseKey(3, 5), "decrease index value")
// console.log(heap.deleteKey(3), "delete key at index")


// let heap1 = new Heap(15);

// heap1.arr = [10, 5, 20, 2, 4, 8]
// heap1.size = heap1.arr.length;
// console.log(heap1.buildHeap(), "build heap from bt")

// let heapS = new Heap(15);
// heapS.arr = [10, 15, 50, 4, 20]
// heapS.size = heapS.arr.length;
// console.log(heapS.heapSort(), "heap sort")

// let sortKSorted = new Heap(15);
// sortKSorted.arr = [4, 2, 1, 3, 12, 56]
// sortKSorted.size = sortKSorted.arr.length
// console.log(sortKSorted.sortKSortedArr(3), "sortKSortedArr")

// let printKlargest =  new Heap(15);
// printKlargest.arr = [15,10,2,4,45,21,13]
// printKlargest.size = printKlargest.arr.length
// console.log(printKlargest.printKlargestEleOpt(4), "print klargest ")

// let getMaxEl = new Heap(15);
// getMaxEl.arr = [1,12,5,111,200]
// getMaxEl.size = getMaxEl.arr.length;
// console.log(getMaxEl.buyMaxEle(10), "buy max")

// let Kclosest = new Heap(15);
// Kclosest.arr = [10,30,5,40,38,80,70]
// Kclosest.size =  Kclosest.arr.length;
// console.log(Kclosest.KclosestElement(35, 2), "kclosest")


// let mergeSorted = new Heap(30);
// mergeSorted.arr = [[10, 15, 20], [3, 5, 12, 16], [7, 8, 10]];
// console.log(mergeSorted.mergeKSortedArray(), "mergeKsorted")
