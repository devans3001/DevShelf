"use client"
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const useThemeDetector = () => {
  const [mounted, setMounted] = useState(false);
  const { theme,setTheme, systemTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted 
    ? theme === 'dark' || (theme === 'system' && systemTheme === 'dark')
    : false; // Default value during SSR

  return {
    mounted,
    isDark,
    theme,
    setTheme,
    systemTheme
  };
};