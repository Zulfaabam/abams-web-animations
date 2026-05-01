// use a script tag or an external JS file
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger)

  // Initialize Lenis
  const lenis = new Lenis()

  // Listen for the scroll event
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  // Cards
  const cards = gsap.utils.toArray('.card')
  const rotations = [-12, 10, -5, 5, -2]

  cards.forEach((card, idx) => {
    gsap.set(card, {
      rotate: rotations[idx] || 0,
      y: window.innerHeight,
    })
  })

  ScrollTrigger.create({
    trigger: '.sticky-cards',
    start: 'top top',
    end: `+=${window.innerHeight * 4}px`,
    pin: true,
    pinSpacing: true,
    scrub: 1,
    markers: true,

    onUpdate: (self) => {
      const progress = self.progress // 0 - 1
      const totalCards = cards.length
      const progressPerCard = 1 / totalCards // slice per card

      cards.forEach((card, idx) => {
        const cardStart = idx * progressPerCard

        // Normalize progress
        let cardProgress = (progress - cardStart) / progressPerCard
        cardProgress = Math.min(Math.max(cardProgress, 0), 1) // clamp 0..1

        // Default motion: slide from up to bottom
        let yPos = window.innerHeight * (1 - cardProgress)
        let xPos = 0

        // When a card is fully in (cardProgress === 1)
        // move it diagonally out while the next card comes in
        if (cardProgress === 1 && idx < totalCards - 1) {
          const remainingProgress =
            (progress - (cardStart + progressPerCard)) /
            (1 - (cardStart + progressPerCard))

          if (remainingProgress > 0) {
            const distanceMultiplier = 1 - idx * 0.15

            xPos =
              -window.innerWidth * 0.3 * distanceMultiplier * remainingProgress

            yPos =
              -window.innerHeight * 0.3 * distanceMultiplier * remainingProgress
          }
        }

        // Apply transforms instantly on each update
        gsap.to(card, {
          y: yPos,
          x: xPos,
          duration: 0,
          ease: 'none',
        })
      })
    },
  })
})
