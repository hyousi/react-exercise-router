import React from 'react';

export default function Profile(props) {
  const { username, gender, work, website } = props.user;
  return (
    <ul>
      <li>Username: {username}</li>
      <li>Gender: {gender}</li>
      <li>Work: {work}</li>
      <li>Website: {website}</li>
    </ul>
  );
}
