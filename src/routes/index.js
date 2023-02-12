// Layout
import Layout from "common/Layout";

// Pages

import Home from "pages/Home";
import Login from "pages/Login";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];
export default routes;
