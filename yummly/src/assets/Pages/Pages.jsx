import React from "react";
import { Route, RouterProvider,
  createBrowserRouter,
  createRoutesFromElements} from "react-router-dom";
// import Cuisine from "./Cuisine";
import Home from "./Home";
// import Recipe from "./Recipe";
// import Searched from "./Searched";
import About from "./About";
import Contact from "./Contact";
import Layout from "../Components/Layout";
import MealPlanning from "./MealPlanning";
import Signup from "./Signup";
import Login from "./Login";
import ProtectedRoute from "../Components/ProtectedRoute";
import NotFound from "./NotFound";
import Profile from "./Profile";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          {/* <Route path="cuisine/:type" element={<Cuisine />} /> */}
          {/* <Route path="searched/:search" element={<Searched />} /> */}
          {/* <Route path="recipe/:id" element={<Recipe />} /> */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mealplan" element={<MealPlanning />} />
          <Route path="profile" element={<Profile/>}/>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
        </Route>


))

const Pages = () => {
  
  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  );
};

export default Pages;
