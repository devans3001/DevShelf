'use client';

import { useEffect } from "react";
import { useHeaders } from "./HeadersContexr";

export default function ClientWrapper({ 
  headings 
}) {
  const { setHeaders } = useHeaders();

  useEffect(() => {
    setHeaders(headings);
  }, [headings, setHeaders]);

  return null;
}