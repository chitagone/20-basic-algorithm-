function dfs(graph, start, visited = new Set()) {
  visited.add(start);

  for (const next of graph[start]) {
    if (!visited.has(next)) {
      dfs(graph, next, visited);
    }
  }

  return visited;
}
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: [],
};

const visited = dfs(graph, "A");
console.log(visited); // Output: Set(6) { 'A', 'B', 'C', 'D', 'E', 'F' }
