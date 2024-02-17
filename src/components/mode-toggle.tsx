"use client"

import { useTheme } from "next-themes"
export function ModeToggle() {
  const { setTheme } = useTheme()
  setTheme("dark")
  return (
    <div></div>
  )
}
