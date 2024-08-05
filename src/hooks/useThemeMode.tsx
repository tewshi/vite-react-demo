import { useCallback, useEffect, useState } from 'react'

type ThemeState = 'light' | 'dark' | 'system'

const enum ThemeMode {
  light = 'light',
  dark = 'dark',
  system = 'system',
}

const useThemeMode = (): [ThemeState | null, (mode?: ThemeState) => void] => {
  const [themeMode, setThemeMode] = useState<ThemeState | null>(null)
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const initThemeMode = () => {
    if ([ThemeMode.dark, ThemeMode.light].includes(localStorage.theme)) {
      setThemeMode(localStorage.theme)
    } else {
      setThemeMode(ThemeMode.system)
    }
  }

  const updateThemeMode = (mode: ThemeState) => {
    setThemeMode(mode)
    if (mode === ThemeMode.system) {
      localStorage.removeItem('theme')
      applySystemMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    } else {
      localStorage.theme = mode
      document.documentElement.dataset.mode = mode
    }
  }

  const switchMode = (mode?: ThemeState) => {
    if (!mode) {
      switch (themeMode) {
        case ThemeMode.light:
          updateThemeMode(ThemeMode.dark)
          break
        case ThemeMode.dark:
          updateThemeMode(ThemeMode.system)
          break
        default:
          updateThemeMode(ThemeMode.light)
          break
      }
    } else {
      updateThemeMode(mode)
    }
  }

  const applySystemMode = (matchesDark: boolean) => {
    if (matchesDark) {
      document.documentElement.dataset.mode = ThemeMode.dark
    } else {
      document.documentElement.dataset.mode = ThemeMode.light
    }
  }

  const handleSystemThemeChange = useCallback(
    ({ matches }: MediaQueryListEvent) => {
      if (![ThemeMode.dark, ThemeMode.light].includes(localStorage.theme)) {
        applySystemMode(matches)
      }
    },
    []
  )

  useEffect(initThemeMode, [])

  useEffect(() => {
    darkModeMediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  return [themeMode, switchMode]
}

export default useThemeMode
