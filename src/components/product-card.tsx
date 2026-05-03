import type { Products } from '../types'

function ProductCard({ product }: { product: Products }) {
  return (
    <a
      href={product.url}
      target='_blank'
      rel='noopener noreferrer'
      className='group block overflow-hidden shadow-[0_24px_80px_rgba(3,22,50,0.16)] transition-transform duration-500 hover:-translate-y-2'
    >
      <div className='relative overflow-hidden bg-black bg-center aspect-video flex items-center justify-center'>
        {product.videoUrl ? (
          <video
            src={product.videoUrl}
            className='w-[90%] aspect-video object-cover transition-transform duration-700 group-hover:scale-105'
            autoPlay
            loop
            muted
          />
        ) : null}
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={`${product.name}`}
            className='w-[90%] aspect-video transition-transform duration-700 group-hover:scale-105'
          />
        ) : null}
      </div>

      <div className='bg-white p-4'>
        <span className="font-['Inter'] text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#865041]">
          {product.type}
        </span>
        <h3 className="font-['Space_Grotesk'] text-[#031632] text-3xl font-semibold leading-tight mt-3">
          {product.name}
        </h3>
        <p className='mt-4 text-sm leading-7 text-[#4f5e74]'>
          {product.description}
        </p>
      </div>
    </a>
  )
}

export default ProductCard
