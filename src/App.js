import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import DashboardPage from "./components/dashboard/DashboardPage";
import ProductsPage from "./components/dashboard/products/ProductsPage";
import AddProducts from "./components/dashboard/products/AddProducts";
import EditProduct from "./components/dashboard/products/EditProduct";
import Nav from "./components/layout/Nav";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />

        <div className="container">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/dashboard" exact>
              <DashboardPage />
            </Route>
            <Route path="/dashboard/products" exact>
              <ProductsPage />
            </Route>
            <Route path="/dashboard/add" exact>
              <AddProducts />
              <Route path="/dashboard/product/edit/:id" exact>
                <EditProduct />
              </Route>
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
