/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useLayoutEffect, useRef } from 'react'

export function useEvent<T extends (...args: any[]) => any>(handler: T) {
  const handlerRef = useRef<T | null>(null)

  useLayoutEffect(() => {
    handlerRef.current = handler
  })

  return useCallback(function (...args: Parameters<T>): ReturnType<T> {
    const fn = handlerRef.current
    return fn?.(...args)
  }, [])
}
