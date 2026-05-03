import type { Products } from '../types'
import ProductCard from '../components/product-card'
import BottomSheet from '../components/bottom-sheet'

const products: Products[] = [
  {
    id: 1,
    name: 'Self Stacking Small Cards',
    description: 'A collection of animated cards that stack on scroll.',
    imageUrl: '/stacking-small-card/thumbnail.gif',
    type: 'Scroll Animation',
    url: '/stacking-small-card/index.html',
  },
  {
    id: 2,
    name: 'Stacking Big Cards',
    description: 'A collection of big cards that stack on scroll.',
    videoUrl: '/stacking-big-card/video.mp4',
    type: 'Scroll Animation',
    url: '/stacking-big-card/index.html',
  },
]

function Homepage() {
  return (
    <div className='bg-[#fff8f1] antialiased min-h-screen'>
      {/* <!-- Hero Section --> */}
      <section className='mx-auto px-4 md:px-8 py-10 flex flex-col'>
        <h1 className='font-space-grotesk text-[#031632] text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[1.1] tracking-[-0.02em] max-w-4xl'>
          Web
          <br />
          Animations{' '}
          <span className='font-plus-jakarta-sans text-[#44474d] text-sm md:text-lg font-normal max-w-2xl tracking-normal'>
            by{' '}
            <a
              href='http://abams-folio.netlify.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='underline decoration-wavy hover:text-[#865041] transition-colors duration-300'
            >
              Abams
            </a>
          </span>
        </h1>
        <p></p>
      </section>

      {/* <!-- Grid Style List (Zones) --> */}
      <section className='mx-auto px-4 md:px-8 pb-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <BottomSheet />
    </div>
  )
}

export default Homepage
