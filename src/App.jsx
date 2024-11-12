import React from "react";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import { Routes, Route } from "react-router";
import SearchResults from "./components/SearchResults";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import RecipeDetail from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";

const App = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      component: <HomePage />,
    },
    {
      id: 2,
      path: "/search/:request",
      component: <SearchResults />,
    },
    {
      id: 3,
      path: "/favorites",
      component: <Favorites />,
    },
    {
      id: 3,
      path: "/details/:id",
      component: <RecipeDetail />,
    },
    {
      id: 4,
      path: "/allRecipe",
      component: <RecipeList />,
    },
  ];
  return (
    <div>
      <Header />
      <div
        className=""
        style={{
          minHeight: "100vh",
        }}
      >
        <Routes>
          {routes.map((el) => (
            <Route path={el.path} element={el.component} key={el.id} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
