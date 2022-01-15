# Bit Manipulation

A common problem is computing the number of bits set to 1 in an integer. There are two solutions:

1. Loop starting at the least significant digit of the integer and bitwise-AND the integer with 1. Increment count and shift right by one bit on each iteration. The runtime complexity is _O(n)_ with _n_ being the number of bits in the integer.

```java
public int countOnes(int integer) {
    int count = 0;
    while (integer > 0) {
        if ((integer & 1) == 1) {
            count++;
        }

        integer = integer >>> 1;
    }
    return count;
}
```

2. A less intuitive approach is to use a couple of bit manipulation tricks to isolate out the least significant bit set to 1 of the input integer and XOR this with the input (to remove this bit). Continue doing this while integer isn't 0. The runtime complexity is _O(s)_ where _s_ is the number of 1's in the integer. This trick works even for negative numbers.

_Note: `x & (x - 1)` also seem to replace lowest bit that is 1 with 0_

```java
public static int countOnes2(int integer) {
    int count = 0;
    while (integer > 0) {
        // Isolate out the rightmost set bit
        int rightMostOne = integer & ~(integer - 1);
        // Remove the bit from the original input
        integer = integer ^ rightMostOne;
        count++;
    }
    return count;
}
```

Summary
- Clear the lowest set bit: `x & (x - 1)`
    - Intuition: Substracting one from `x` will turn the lowest bit into a 0
- Isolate lowest 1-bit: `x & ~(x - 1)`
    - Intuition: Following from above, the NOT operator will turn the 0 into a 1 and so the AND operator will end up selecting the lowest 1-bit