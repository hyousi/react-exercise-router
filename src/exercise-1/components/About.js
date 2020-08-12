import React from 'react';
import { Link } from 'react-router-dom';

export default function About(props) {
  const { company, location } = props;
  return (
    <div>
      <ul>
        <li>Company: {company}</li>
        <li>Location: {location}</li>
      </ul>
      <br/>
      <div>
        For more information, please view our <Link to="/">website</Link>.
      </div>
    </div>
  );
}
