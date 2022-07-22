# Binary Search

Binary search can typically be used to find a certain element in a sorted collection (i.e. Array, LinkedList or Matrix). The basic case applies when the exact target element is in the collection.

Apply the following agorithm while `start <= end`:
1. Split the array in the middle use `middle = start + (end - start) / 2` to prevent integer overflow
2. If the target element is smaller than the `middle` element, apply the algorithm to the left side of the array: `end = mid - 1`
3. If the target element is greater than the `middle` element, apply the algorithm to the right side of the array: `start = mid + 1`
4. If equal, return the element

## Variation in Loop Invariant

The loop invariant `start <= end` introduces some interesting properties when the target element isn't in the collection. At the beginning of the last iteration, `start == middle == end`. So when the algorithm progresses, because of steps 2 or 3 above, the `start` will become the smallest element greater than the target (ceiling). The `end` element will become the largest element smaller than the target (floor).

## Finding the Boundary

Binary search is commonly used to find the "boundary" case in an array. (e.g first element satisfying some condition). The general algorithm can be adapted simply be using a `boundary` variable that gets updated to `mid` on each iteration that `mid` satisfies that condition.

For example, given an array with only boolean false on the left side of the array and boolean true on the right, to find the first index with a true element, update the boundary each time that the elment at `mid` is true.

```java
public static int binarySearch(List<Boolean> bools) {
    int left = 0;
    int right = bools.size() - 1;
    int boundary = -1;

    while (left <= right) {
        int mid = (right - left) / 2 + left;
        if (bools.get(mid)) {
            boundary = mid;
            // Scan on left because this one might not be the left most
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return boundary;
}

```