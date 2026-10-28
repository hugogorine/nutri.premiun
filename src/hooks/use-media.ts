import { useCallback, useSyncExternalStore } from 'react'

export function useMedia(query: string, serverValue = false) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    [query],
  )
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => serverValue,
  )
}

/** Celular/tablet sem mouse ou tela estreita: animações mais leves e sem Magnet. */
export const useIsCompact = () => useMedia('(max-width: 767px), (pointer: coarse)')

export const usePrefersReducedMotion = () => useMedia('(prefers-reduced-motion: reduce)')
