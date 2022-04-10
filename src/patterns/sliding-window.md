# Sliding Window

The sliding window pattern is the description given to a family of greedy algorithms that can be applied to optimally find the min/max property of a continguous slice of an array. The name comes from the fact that the algorithm keeps track of two indices into the input array, `tail` and `head`, that respectively form the start end end of a "window". The algorithm commonly makes use of a loop invariant to decide whether to shrink or expand the size of the window to arrive at a local optima.

This set of algorithms allow a problem to be solved in one pass with a time complexity of O(n).

## Fixed-size Window
- The size of the window is perserved. When moving the window, both `head` and `tail` are incremented simultaneously.

## Elastic Window
- Loop through array by incrementing `head` while perserving loop invariant
- When the loop invariant is violated, shrink the array by incrementing `tail` until loop invariant no longer violated

Example Problems:
- [Fruits into Baskets](https://leetcode.com/problems/fruit-into-baskets)

## Snapping Window
When the loop invariant no longer holds, the window snaps closed (`tail` = `head` although we don't need to keep track of tail if we don't care about window size).

Example Problems:
- [Maximum subarray](https://leetcode.com/problems/maximum-subarray)
- [Longest substring with no repeated characters](https://leetcode.com/problems/longest-substring-without-repeating-characters)