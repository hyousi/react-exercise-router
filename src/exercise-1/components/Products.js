import React from 'react';
import { Route, Link, useRouteMatch, Switch } from 'react-router-dom';
import Product from './Product';

export default function Products(props) {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <div>All Products:</div>
          <ul>
            <li>
              <Link to={`${url}/bicycle`}>Bicycle</Link>
            </li>
            <li>
              <Link to={`${url}/tv`}>TV</Link>
            </li>
            <li>
              <Link to={`${url}/pencil`}>Pencil</Link>
            </li>
          </ul>
        </Route>
        <Route path={`${path}/:name`}>
          <Product />
        </Route>
      </Switch>
    </>
  );
}
