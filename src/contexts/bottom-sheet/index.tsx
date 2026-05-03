import React, { useState } from 'react'
import type { Products } from '../../types'
import { BottomSheetContext } from './use-bottom-sheet'

export function BottomSheetProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState<Products | null>(null)

  const openBottomSheet = (p: Products) => {
    setProduct(p)
    setIsOpen(true)
  }
  const closeBottomSheet = () => {
    setIsOpen(false)

    // Delay clearing the product data until after the closing animation completes.
    setTimeout(() => {
      setProduct(null)
    }, 500)
  }

  return (
    <BottomSheetContext.Provider
      value={{ product, isOpen, openBottomSheet, closeBottomSheet }}
    >
      {children}
    </BottomSheetContext.Provider>
  )
}
