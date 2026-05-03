import { createContext, useContext } from 'react'
import type { Products } from '../../types'

interface BottomSheetContextType {
  product: Products | null
  isOpen: boolean
  openBottomSheet: (product: Products) => void
  closeBottomSheet: () => void
}

export const BottomSheetContext = createContext<
  BottomSheetContextType | undefined
>(undefined)

export function useBottomSheet() {
  const context = useContext(BottomSheetContext)
  if (context === undefined) {
    throw new Error('useBottomSheet must be used within a BottomSheetProvider')
  }
  return context
}
