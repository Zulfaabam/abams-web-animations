---
name: Aetheric Structure
colors:
  surface: '#fff8f1'
  surface-dim: '#e1d9cd'
  surface-bright: '#fff8f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fbf3e7'
  surface-container: '#f5ede1'
  surface-container-high: '#efe7db'
  surface-container-highest: '#e9e1d6'
  on-surface: '#1e1b14'
  on-surface-variant: '#44474d'
  inverse-surface: '#343028'
  inverse-on-surface: '#f8f0e4'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4e5f7e'
  primary: '#031632'
  on-primary: '#ffffff'
  primary-container: '#1a2b48'
  on-primary-container: '#8293b5'
  inverse-primary: '#b6c7eb'
  secondary: '#865041'
  on-secondary: '#ffffff'
  secondary-container: '#ffb9a5'
  on-secondary-container: '#7a4738'
  tertiary: '#001733'
  on-tertiary: '#ffffff'
  tertiary-container: '#002b57'
  on-tertiary-container: '#6f94cc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#b6c7eb'
  on-primary-fixed: '#081b38'
  on-primary-fixed-variant: '#374765'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#fcb6a2'
  on-secondary-fixed: '#351005'
  on-secondary-fixed-variant: '#6a3a2b'
  tertiary-fixed: '#d5e3ff'
  tertiary-fixed-dim: '#a7c8ff'
  on-tertiary-fixed: '#001c3b'
  on-tertiary-fixed-variant: '#1e477b'
  background: '#fff8f1'
  on-background: '#1e1b14'
  surface-variant: '#e9e1d6'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 4.5rem
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 3rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 2rem
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 32px
  margin: 64px
  section-gap: 128px
  modular-unit: 160px
---

## Brand & Style

The design system is rooted in the intersection of technical precision and creative spatiality. It embodies the clarity of an architectural blueprint while maintaining the warmth of a lived-in environment. The brand personality is authoritative yet visionary, catering to high-end developers and event planners who value structural integrity and minimalist aesthetics.

The visual style follows a **Spatial Minimalism** approach. It utilizes expansive whitespace to allow 3D renders and photography to breathe, mimicking the feeling of an open gallery. The modularity is a core tenet, where sections feel like distinct "zones" within a floor plan, connected by smooth, scroll-triggered transitions that guide the user through a narrative journey.

## Colors

The color palette is anchored by **Deep Architectural Navy**, providing a grounded, professional foundation that suggests stability and depth. This is contrasted by **Terra Cotta**, a warm, clay-inspired hue that brings a human element and creative spark to the technical blue.

The background is a curated selection of **Crisp Whites** and **Warm Creams (#F9F1E5)**, used to create "zones" of focus. This prevents the interface from feeling sterile. Slate and Cobalt shades serve as functional accents for interactive elements and data visualization, ensuring high legibility and a sophisticated, tiered hierarchy.

## Typography

The typography system pairs structural geometry with fluid modernism. **Space Grotesk** is used for headlines; its technical, slightly "engineered" character reflects the precision of architectural design. It should be used with tight tracking for a bold, editorial look.

**Plus Jakarta Sans** provides a soft, approachable contrast for body text, ensuring long-form content is highly readable and airy. For metadata, navigational labels, and technical specs, **Inter** is utilized in uppercase with wide letter spacing to mimic the utilitarian labeling found on construction documents and floor plans.

## Layout & Spacing

This design system employs a **Modular Fixed Grid**. The layout is built on a 12-column system with generous 32px gutters, emphasizing a sense of openness. Large-scale sections are separated by significant vertical "section-gaps" (128px) to create a rhythmic pacing that rewards scrolling.

Content blocks should adhere to "Zones." An image might occupy 8 columns while the accompanying description sits in a 3-column block, leaving a 1-column "spatial void" to maintain the airy aesthetic. Elements should often overlap or be slightly offset from the grid to create a three-dimensional, layered effect during scroll-driven parallax animations.

## Elevation & Depth

Depth is conveyed through **Spatial Layering** rather than traditional drop shadows. We use subtle, large-radius ambient shadows (color-tinted with Navy at 5% opacity) to lift "booth" components and "render cards" off the ivory background.

Depth tiers are defined as:

- **Ground:** Neutral cream backgrounds (#F9F1E5).
- **Floor:** White modular containers with 1px slate-gray borders.
- **Float:** Elements with a soft, diffused shadow and backdrop blur (Glassmorphism) used for navigation bars and floating action buttons, suggesting they are suspended above the layout.

## Shapes

The shape language is primarily **Soft-Cornered**. While architectural forms are often rigid, the UI uses a 0.25rem (4px) base radius to ensure the digital experience feels refined and approachable.

Interactive components like buttons and input fields use the base roundedness, while larger "spatial containers" (like project cards or 3D render frames) may use `rounded-lg` (8px) to create a subtle distinction between the container and the content. Large image masks should remain sharp (0px) to preserve the professional, "cut" look of architectural photography.

## Components

### Buttons

Primary buttons are solid Navy with white text, utilizing a "slide-up" fill animation on hover. Secondary buttons use the Terra Cotta color for "Creative" calls to action, such as "Request Design" or "View Concept."

### Modular Cards

Cards for architectural projects should have no border, using subtle shadows and high-quality 3D renders that bleed to the edges. Text overlays should appear on hover using a glassmorphic background.

### Navigation

The navigation bar is a minimalist, sticky element with a backdrop blur. Links are in the "Label-sm" style (Inter, Uppercase), using a thin horizontal line as an active-state indicator that expands from the center.

### Inputs & Selection

Forms use a "Low-Contrast Outline" style. Input fields are transparent with a 1px Slate bottom border that thickens and turns Navy upon focus. Checkboxes and radios are strictly geometric, using sharp squares and circles.

### Smooth Scroll Indicators

Custom scroll progress bars and "discovery" arrows are utilized to encourage vertical exploration. These elements should be thin, 1px lines that animate based on the user's scroll position.
