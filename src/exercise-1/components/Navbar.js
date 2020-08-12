import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

export default function Navbar(props) {
  const location = useLocation();
  const { pathname } = location;
  // TODO: use map to generate JSX
  return (
    <nav>
      <ul>
        <li>
          <Link to='/' className={pathname === '/' ? 'underline' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/products'
            className={pathname.includes('/products') ? 'underline' : ''}>
            Products
          </Link>
        </li>
        <li>
          <Link
            to='/my-profile'
            className={pathname.includes('/my-profile') ? 'underline' : ''}>
            My Profile
          </Link>
        </li>
        <li>
          <Link
            to='/about-us'
            className={pathname.includes('/about-us') ? 'underline' : ''}>
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
