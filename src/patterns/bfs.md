# Breadth First Search

BFS can be implemented by using a queue to traverse nodes in order of nodes that are closest to start point. This naturally finds the shortest path solution from the root node.

See [BFS section](../data-structures/graphs/traversal.md) of graphs traversal for more information.

## Level Order Traversal

A trick to traverse the tree in order is to observe the size of the queue at the start of the while loop and only traverse this number of nodes in the current iteration. If done correctly, the next iteration will only visit the children of the current iteration.

```java
public void bfs(Node root) {
    Queue<Node> queue = new LinkedList<>();
    queue.add(root);

    while (!queue.isEmpty()) {
        int size = queue.size();
        
        for (int i = 0; i < size; i++) {
            Node current = queue.remove();

            for (Node child: current.getChildren()) {
                queue.add(child);
            }
        }
    }
}
```
