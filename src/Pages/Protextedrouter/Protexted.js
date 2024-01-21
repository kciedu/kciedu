// Protexted.jsx
import React from 'react';
import { Navigate, Outlet} from 'react-router-dom';

function Protexted({ user ,name}) {
  console.log("the user data", user , name);
  if (user  && name ==='admin') {
      return <Outlet></Outlet>;
  }

  return <Navigate to="/login" />;
}

export default Protexted;
