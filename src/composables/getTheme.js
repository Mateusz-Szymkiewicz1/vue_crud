export function getTheme () {
  const theme = JSON.parse(localStorage.getItem('notepad_settings')).theme
  if (theme === 'dark') {
    document.documentElement.style.setProperty('--background', '#202020')
    document.documentElement.style.setProperty('--foreground', '#fff')
    document.documentElement.style.setProperty('--primary', '#a7d883')
    document.documentElement.style.setProperty('--form', '#303030')
    document.documentElement.style.setProperty('--input', '#404040')
  }
}
