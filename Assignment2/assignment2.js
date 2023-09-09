// Define the data structure to represent the available tickets/routes
const routes = {
  'Paris': ['Skopje'],
  'Skopje': ['Paris'],
  'Zurich': ['Amsterdam'],
  'Amsterdam': ['Barcelona'],
  'Prague': ['Zurich'],
  'Barcelona': ['Berlin'],
  'Kiev': ['Prague'],
  'Berlin': ['Kiev', 'Amsterdam']
};

// Function to perform DFS and find the route
function findRoute(currentCity, visited, path) {
  // Mark the current city as visited
  visited[currentCity] = true;

  // Add the current city to the path
  path.push(currentCity);

  // Check if we've visited all cities; if so, we've found the route
  if (path.length === Object.keys(visited).length) {
    return path;
  }

  // Explore the next cities from the current city
  for (let nextCity of routes[currentCity]) {
    if (!visited[nextCity]) {
      const newPath = findRoute(nextCity, visited, [...path]);
      if (newPath) {
        return newPath;
      }
    }
  }

  return null;
}

// Initialize visited cities data structure
const visited = {
  'Zurich': false,
  'Amsterdam': false,
  'Prague': false,
  'Barcelona': false,
  'Kiev': false,
  'Berlin': false
};

// Call the function to find the route starting from Kiev
const path = findRoute('Kiev', visited, []);

if (path) {
  console.log("The route your son traveled is: ", path.join(" -> "));
} else {
  console.log("No valid route found for your son.");
}