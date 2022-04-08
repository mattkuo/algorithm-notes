# Graph Traversal

Graphs are typically traversed using depth first search or breadth first search. Both these family of algorithms have certain properties that make them more suitable for some problems over the other. In cases where traversal of a whole graph is required, either approach will find the correct solution.

## Depth First Search

Greedily traverses the depth of a graph/tree before exploring neighboring nodes. It's often implemented as a recursive algorithm. But, it can also be implemented iteratively using a stack.

### Recursion

Recursion tends to result in a solution that requires less lines of code.

```java
public void dfs(Node root) {
    if (root == null) return;

    for (Node child: root.getChildren()) {
        dfs(child);
    }
}
```

The shortcoming of using recursion for DFS is that it requires stack space. A graph with a large depth can quickly result in a stack overflow. This can be overcome by converting the solution to use [tail-recursion](https://stackoverflow.com/questions/310974/what-is-tail-call-optimization).

### Iteration

For languages that do not support tail-recursion optimization (e.g. Java, Python), we can use a Stack data structure to iteratively traverse the graph.

```java
public void iterativeDFS(Node root) {
    Stack<Node> stack = new Stack<>();
    stack.add(root);

    while (!stack.isEmpty()) {
        Node current = stack.pop();
        // Perform backtracking tasks

        for (Node child: current.getChildren()) {
            // Traverse child
            stack.push(child);
        }
    }
}
```

## Breadth First Search

This algorithm traverses its direct children first before any of its children's children. The consequence of this is that it is able to naturally solve shortest-path problems quite easily.

```java
public void bfs(Node root) {
    Queue<Node> queue = new LinkedList<>();
    queue.add(root);

    while (!queue.isEmpty()) {
        Node current = queue.remove();

        for (Node child: current.getChildren()) {
            queue.add(child);
        }
    }
}
```

Notice that the algorithm for BFS is almost identical to iterative DFS. The only difference between that it utilizes a queue (FIFO) versus a stack (LIFO).
