import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "./components";
import { Home, Error, Archive } from "./pages";

const definedRoutes = createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path="archive" element={<Archive />} />
  </Route>
);

const router = createBrowserRouter(definedRoutes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
