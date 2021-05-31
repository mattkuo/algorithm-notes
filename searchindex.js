Object.assign(window.search, {"doc_urls":["graphs/index.html#graphs","graphs/topological-sort.html#topological-sort","graphs/topological-sort.html#breadth-first-search-approach-kahns-algorithm","graphs/topological-sort.html#depth-first-search-approach","graphs/topological-sort.html#problems"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":2,"title":1},"1":{"body":46,"breadcrumbs":5,"title":2},"2":{"body":79,"breadcrumbs":9,"title":6},"3":{"body":64,"breadcrumbs":7,"title":4},"4":{"body":2,"breadcrumbs":4,"title":1}},"docs":{"0":{"body":"","breadcrumbs":"Graphs » Graphs","id":"0","title":"Graphs"},"1":{"body":"Topological sort is commonly used for resolving dependency graphs or job scheduling. The algorithm only works if the graph is acyclic . However, it can be applied to find find out whether a graph is acyclic or cyclic. For example, given the graph below, the topological order for the graph is ABCD or ACBD. The graph below is non-resolvable by topological sort because D has a dependency on A. Kahn's algorithm would return an incomplete ordering of nodes (i.e. AB).","breadcrumbs":"Graphs » Topological Sort » Topological Sort","id":"1","title":"Topological Sort"},"2":{"body":"The intuition here is to start at the top of the dependency tree and removing each node. Once the in-degree of a node reaches zero, remove it and add it to the sort order. Compute the in-degree of each node Add all nodes with zero dependents into a queue As each node is removed from the queue, append the node to the result list and for each of its children (dependencies): Decrement its ingress count Add it to the queue if ingress count reaches 0 When the queue is empty, if the number of nodes in the resulting list is less than the number of nodes, the ordering cannot be resolved (the graph is cyclic). If the graph is cyclic the algorithm will report an incomplete ordering. It will reach a point where there is at least two nodes that have an in-degree greater than zero. This property is useful for detecting cycles within a graph.","breadcrumbs":"Graphs » Topological Sort » Breadth First Search Approach (Kahn's Algorithm)","id":"2","title":"Breadth First Search Approach (Kahn's Algorithm)"},"3":{"body":"Intuition: Recursively traverse the graph and mark each node as visited. If a node is already visited, skip it. When a leaf is discovered, add nodes to a stack during backtracking. Unlike the BFS approach, the topological ordering is in reverse order because we traverse the bottom of the dependency graph and add it to the ordering. For each node, recursively traverse the graph Mark each node as visited During backtracking, add the node onto a stack Pop each node of the stack for the topological order The shortcoming of this approach is that it doesn't detect cycles in the graph (although you can use DFS with a few modifications to do so).","breadcrumbs":"Graphs » Topological Sort » Depth First Search Approach","id":"3","title":"Depth First Search Approach"},"4":{"body":"Course Scheduling","breadcrumbs":"Graphs » Topological Sort » Problems","id":"4","title":"Problems"}},"length":5,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"a":{"b":{"c":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.0}}},"c":{"b":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"y":{"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"d":{"d":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.4142135623730951}}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"o":{"a":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"f":{"df":1,"docs":{"3":{"tf":1.0}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"y":{"c":{"df":0,"docs":{},"l":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}},"i":{"c":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"d":{"df":1,"docs":{"1":{"tf":1.0}},"e":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.7320508075688772},"3":{"tf":1.0}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"f":{"df":1,"docs":{"3":{"tf":1.0}}},"i":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":2.0},"3":{"tf":2.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":2.449489742783178},"2":{"tf":1.7320508075688772},"3":{"tf":2.0}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"i":{".":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}}}}},"j":{"df":0,"docs":{},"o":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"k":{"a":{"df":0,"docs":{},"h":{"df":0,"docs":{},"n":{"'":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":3.0},"3":{"tf":2.6457513110645907}}}},"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.7320508075688772},"3":{"tf":2.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"r":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":2.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":1.0}}}}},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":2,"docs":{"1":{"tf":2.0},"3":{"tf":1.4142135623730951}}}}}}}},"r":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"w":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"s":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"a":{"b":{"c":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"1":{"tf":1.0}}},"c":{"b":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"y":{"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"d":{"d":{"df":2,"docs":{"2":{"tf":1.7320508075688772},"3":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{},"l":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.7320508075688772}}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"r":{"df":0,"docs":{},"o":{"a":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":2.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"f":{"df":1,"docs":{"3":{"tf":1.0}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"d":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"y":{"c":{"df":0,"docs":{},"l":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}},"i":{"c":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"d":{"df":1,"docs":{"1":{"tf":1.0}},"e":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.7320508075688772},"3":{"tf":1.0}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"t":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"f":{"df":1,"docs":{"3":{"tf":1.0}}},"i":{"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"n":{"'":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":2.0},"3":{"tf":2.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"x":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"3":{"tf":1.0}}}},"i":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":5,"docs":{"0":{"tf":1.7320508075688772},"1":{"tf":2.6457513110645907},"2":{"tf":2.0},"3":{"tf":2.23606797749979},"4":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"i":{".":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}}}}},"j":{"df":0,"docs":{},"o":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"k":{"a":{"df":0,"docs":{},"h":{"df":0,"docs":{},"n":{"'":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"m":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}},"n":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"e":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":3.0},"3":{"tf":2.6457513110645907}}}},"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"u":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}}},"o":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":1,"docs":{"3":{"tf":1.0}}}}},"r":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":3,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.7320508075688772},"3":{"tf":2.0}}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"p":{"df":1,"docs":{"3":{"tf":1.0}}}},"r":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":2.0}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"v":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"s":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":2,"docs":{"1":{"tf":1.0},"4":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":1.4142135623730951},"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"k":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":4,"docs":{"1":{"tf":2.23606797749979},"2":{"tf":1.4142135623730951},"3":{"tf":1.0},"4":{"tf":1.0}}}}},"t":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":4,"docs":{"1":{"tf":2.449489742783178},"2":{"tf":1.0},"3":{"tf":1.7320508075688772},"4":{"tf":1.0}}}}}}}},"r":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}},"w":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}}},"s":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0}}}},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.7320508075688772}}}}}}},"w":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"z":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}}}},"title":{"root":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"g":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"m":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"p":{"df":0,"docs":{},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"a":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}}}}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}},"k":{"a":{"df":0,"docs":{},"h":{"df":0,"docs":{},"n":{"'":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"b":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});