import "./App.css";

import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { DashboardProvider } from "./features/dashboard/context/dashboard-context";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
function App() {
  return (
    <>
      <DashboardProvider>
        <RouterProvider router={router} />
      </DashboardProvider>
    </>
  );
}

export default App;
