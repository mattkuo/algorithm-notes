# Collections Library

## Comparator

Constructors for various data structures that apply sortation to the data allow you to pass in a comparator to compare elements as they are inserted. In addition the `Collections.sort()` method allows you to apply sortation to any data structure that implements the `List` interface. Being comfortable with the `Comparator` syntax is undoubtedly necessary.

The `Comparator` has one abstract method `compare()`.

```java
int compare(T obj1, T obj2);
```

- Returns -ive integer if first argument < second argument (or first argument comes before second argument in a natural ordering)
- Returns 0 if first argument == second argument 
- Returns +ive if first argument > second argument (or first argument comes after second argument in a natural ordering)



Longhand syntax.
```java
public class MyObjectComparator implements Comparator<MyObject> {
    @Override
    public int compare(MyObject obj1, MyObject obj2) {
        return Integer.compare(obj1.getValue(), obj2.getValue());
    }
}
```

Functional syntax.
```java
Comparator myComparator = (a, b) -> Integer.compare(a.getValue(), b.getValue());
```
Note: It's a good idea to use `Integer.compare()` here to prevent overflow.