// components/NavbarHeightContext.js
'use client';
import { createContext, useContext, useState } from 'react';

const NavbarHeightContext = createContext();

export function NavbarHeightProvider({ children }) {
  const [navbarHeight, setNavbarHeight] = useState(0);
  return (
    <NavbarHeightContext.Provider value={{ navbarHeight, setNavbarHeight }}>
      {children}
    </NavbarHeightContext.Provider>
  );
}

export function useNavbarHeight() {
  return useContext(NavbarHeightContext);
}
