import React, { useState } from 'react'
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import './Admin.css'
import AllProducts from '../../components/allProducts/AllProducts';
import NewProduct from '../../components/createProduct/NewProduct';



const Admin = () => {
  const { path, url } = useRouteMatch();
    return (
        <div className="admin_container">
          <div className="tabs">
            <NavLink
              activeClassName="activetab"
              className="tab"
              to={`${url}/createProduct`}
            >
              Create Product
            </NavLink>
            <NavLink
              activeClassName="activetab"
              className="tab"
              to={`${url}/allproducts`}
            >
              Products
            </NavLink>
      </div>
        <Switch>
          <Route path={`${path}/createProduct`}>
            <NewProduct/>
          </Route>
          <Route path={`${path}/allproducts`}>
            <AllProducts/>
          </Route>
        </Switch>
        </div>
    )
}

export default Admin
