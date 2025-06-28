


"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

export function useSearchParamsHook() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get all current search params as an object
  const params = useMemo(() => {
    const paramsObj = {};
    searchParams.forEach((value, key) => {
      paramsObj[key] = value;
    });
    return paramsObj;
  }, [searchParams]);

  // Get a specific parameter value
  const getParam = useCallback(
    (key) => {
      return searchParams.get(key);
    },
    [searchParams]
  );

  // Set or update a parameter
  const setParam = useCallback(
    (key, value) => {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set(key, value);
      router.push(`?${newParams.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  // Remove a parameter
  const removeParam = useCallback(
    (key) => {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.delete(key);
      router.push(`?${newParams.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  // Set multiple parameters at once
  const setMultipleParams = useCallback(
    (params) => {
      const newParams = new URLSearchParams(searchParams.toString());
      Object.entries(params).forEach(([key, value]) => {
        newParams.set(key, value);
      });
      router.push(`?${newParams.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  return {
    params,
    getParam,
    setParam,
    removeParam,
    setMultipleParams,
  };
}