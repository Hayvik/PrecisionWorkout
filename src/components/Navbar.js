import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/logo-2-removebg-preview.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="0px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '150px', height: '100px', margin: '0px 10px',}} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
    {/* Link / is used to navigate to only the currect page
    and #exercises is used to navitage user to exercises page and it also enables to scroll this page on its own when someone click on it*/}
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #1F6E8C' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212',transition: 'color 0.5s ease-in-out' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;