# Binary Search

Binary search can typically be used to find a certain element in a sorted collection (i.e. Array, LinkedList or Matrix). The basic case applies when the exact target element is in the collection.

Apply the following agorithm while `start <= end`:
1. Split the array in the middle use `middle = start + (end - start) / 2` to prevent integer overflow
2. If the target element is smaller than the `middle` element, apply the algorithm to the left side of the array: `end = mid - 1`
3. If the target element is grater than the `middle` element, apply the algorithm to the right side of the array: `start = mid + 1`
4. If equal, return the element

## Variation in Loop Invariant

The loop invariant `start <= end` introduces some interesting properties when the target element isn't in the collection. At the beginning of the last iteration, `start == middle == end`. So when the algorithm progresses, because of steps 2 or 3 above, the `start` will become the smallest element greater than the target (ceiling). The `end` element will become the largest element smaller than the target (floor).