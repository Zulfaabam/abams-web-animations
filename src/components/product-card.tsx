function ProductCard({
  product,
}: {
  product: { name: string; description: string; imageUrl: string; type: string }
}) {
  return (
    <a
      href='/stacking-small-card/index.html'
      className='group block overflow-hidden shadow-[0_24px_80px_rgba(3,22,50,0.16)] transition-transform duration-500 hover:-translate-y-2'
    >
      <div className='relative overflow-hidden bg-[#865041] bg-center aspect-square flex items-center justify-center'>
        <img
          src={product.imageUrl}
          alt={`${product.name}`}
          className='w-[90%] aspect-video transition-transform duration-700 group-hover:scale-105'
        />
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
