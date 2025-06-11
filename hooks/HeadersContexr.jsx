"use client"

// context/HeaderContext.jsx
import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export default function HeaderProvider({ children }) {
  const [headers, setHeaders] = useState([]);

  return (
    <HeaderContext.Provider value={{ headers, setHeaders }}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaders() {
  const context = useContext(HeaderContext);
  if (!context) throw new Error('useHeaders must be used within HeaderProvider');
  return context;
}
