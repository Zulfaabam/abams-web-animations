import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useBottomSheet } from '../contexts/bottom-sheet/use-bottom-sheet'

function BottomSheet() {
  const { product, isOpen, closeBottomSheet } = useBottomSheet()
  const backdropRef = useRef<HTMLDivElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This effect runs the animations. It's triggered when `isOpen` changes
    // or when `product` is set.
    if (isOpen && product) {
      document.body.style.overflow = 'hidden'
      // Animate in
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power3.out' },
      )
      gsap.fromTo(
        sheetRef.current,
        { y: '100%' },
        { y: '0%', duration: 0.5, ease: 'power3.out' },
      )
    } else if (!isOpen && product) {
      // Animate out
      document.body.style.overflow = ''
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
      })
      gsap.to(sheetRef.current, {
        y: '100%',
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          // Unmount component after animation
        },
      })
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, product])

  if (!product) return null

  return (
    <div className='fixed inset-0 z-50 flex flex-col justify-end'>
      {/* Backdrop overlay */}
      <div
        ref={backdropRef}
        className='absolute inset-0 bg-[#031632]/40 backdrop-blur-sm'
        onClick={closeBottomSheet}
      />

      {/* Bottom Sheet Modal */}
      <div
        ref={sheetRef}
        className='relative w-full h-[90vh] bg-[#fff8f1] rounded-t-xl md:rounded-t-2xl shadow-[0_-24px_80px_rgba(3,22,50,0.16)] flex flex-col'
      >
        {/* Drag Handle & Header area */}
        <div className='flex items-center justify-between px-6 py-4 border-b border-[#e1d9cd]'>
          <div>
            <h2 className="font-['Space_Grotesk'] text-xl md:text-2xl font-semibold text-[#031632]">
              {product?.name}
            </h2>
            <p className="font-['Inter'] text-[0.65rem] uppercase tracking-widest text-[#865041] mt-1">
              {product?.type}
            </p>
          </div>
          <button
            onClick={closeBottomSheet}
            className='p-2 text-[#4f5e74] hover:text-[#031632] hover:bg-[#efe7db] rounded-full transition-colors'
            aria-label='Close bottom sheet'
          >
            <svg
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {/* The Hosted Content */}
        <div className='flex-1 w-full relative bg-white overflow-hidden'>
          {product?.url && (
            <iframe
              src={product.url}
              className='absolute inset-0 w-full h-full border-none'
              title={product.name}
              sandbox='allow-scripts allow-same-origin'
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default BottomSheet
