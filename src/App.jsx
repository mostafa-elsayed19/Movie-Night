import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Todo from "./pages/Todo";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Favorites from "./pages/Favorites";
import LoginForm from "./pages/Login";
import RegisterForm from "./pages/Register";
import NotFound from "./pages/Not-Found";

import AppLayout from "./AppLayout";
import { getMovieById } from "./utils/loader";
import { Provider } from "react-redux";
import store from "./store/store";
import { LanguageProvider } from "./contexts/language";
import { useState } from "react";

const routes = createBrowserRouter([
  {
    index: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "todos",
        element: <Todo />,
      },
      {
        path: "moviedetails/:id",
        element: <ProductDetails />,
        loader: getMovieById,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
    // errorElement: <Error />,
  },
]);
function App() {
  const [language, changeLanguage] = useState("en");
  return (
    <LanguageProvider value={{ language, changeLanguage }}>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </LanguageProvider>
  );
}

export default App;
