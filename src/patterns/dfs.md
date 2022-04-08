# Depth First Search

The recursive process for DFS usually results in less code and is more elegant. DFS can also be done utilizing a stack. See the [DFS](../data-structures/graphs/traversal.md) section on the discussion on graphs for more information. Note that the recursive traversal method is analogous to the iterative one. In iterative traversal, the stack data structure emulates the call stack of the recursive solution.

## Keeping Track of the Current Path

A common pattern is to be asked to find the path from root to leaf. This can be done by keeping track of the current path in a list and removing it during backtracking.

```java
public List<Node> dfs(Node root, List<Node> path) {
    if (root == null) return;
    path.add(root);

    if (condition) {
        return path;
    }

    for (Node child: root.getChildren()) {
        dfs(child);
    }

    // We're done considering this node. Remove it as we're now backtracking.
    path.remove(path.size() - 1);
}
```