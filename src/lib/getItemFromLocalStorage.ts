const ISSERVER = typeof window === 'undefined'

export const getItemFromLocalStorage = (itemName: string) => {
  if (ISSERVER) return
  const item = localStorage.getItem(itemName)
  return item ? item : undefined
}