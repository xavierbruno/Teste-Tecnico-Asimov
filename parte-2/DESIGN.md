---
name: Asimov Tech-Premium
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#b9caca'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#adc7ff'
  on-secondary: '#002e68'
  secondary-container: '#4a8eff'
  on-secondary-container: '#00285b'
  tertiary: '#fdf9f9'
  on-tertiary: '#313030'
  tertiary-container: '#e0dddc'
  on-tertiary-container: '#626161'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc7ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#004493'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  code-snippet:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0em
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style
This design system is engineered to feel like a high-end integrated development environment (IDE) crossed with a premium production tool. It targets developers and data scientists who value efficiency, technical rigor, and aesthetic precision.

The design style is a hybrid of **Minimalism** and **Glassmorphism**. It utilizes deep, "ink" backgrounds to reduce eye strain, paired with vibrant teal and electric blue accents that signify intelligence and action. The emotional response is one of calm focus, high authority, and "cutting-edge" technological capability. Visuals are characterized by razor-sharp lines, subtle radial glows that suggest light emitting from code, and a sophisticated layering system that communicates depth through light rather than heavy shadows.

## Colors
The palette is rooted in a "Deep Space" black (`#020408`) to maximize the pop of functional accents. The primary teal is used for "success" states, primary calls to action, and highlights in code syntax. The secondary electric blue is reserved for secondary interactions and brand flourishes. 

Neutral tones are strictly cool-gray to maintain a "tech" feel, avoiding warm undertones. Use gradients sparingly—primarily as subtle radial "spotlights" behind key components or as linear strokes on container borders to simulate a metallic, premium edge.

## Typography
The system uses **Inter** for the majority of UI tasks due to its exceptional legibility and neutral, modern character. For technical labels, data points, and small caps, **Space Grotesk** is introduced to provide a subtle "geometric/technical" flair that hints at Python’s mathematical roots.

Headlines should use tight letter-spacing to feel "locked-in" and authoritative. Body text requires generous line-height to ensure clarity during long reading sessions. All "Action" labels (buttons, tabs) should use Medium or SemiBold weights to stand out against the dark background.

## Layout & Spacing
The design system employs a **12-column fixed grid** for desktop, centering the content at a maximum width of 1200px to maintain focus. The spacing rhythm is based on a 4px baseline, ensuring all elements align to a strict mathematical grid.

Layouts should favor high information density but utilize large "macro-white-space" (section gaps) to separate different concepts. Use "Internal Padding" within cards to create a sense of breathing room, while keeping "External Margins" between related components tight to show relationship.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and **Glassmorphism**. Instead of traditional drop shadows, which can look muddy on dark backgrounds, use:

1.  **Inner Glows:** A 1px inner border with low opacity white (`rgba(255,255,255,0.1)`) on the top edge of cards to simulate top-down lighting.
2.  **Backdrop Blur:** Use `backdrop-filter: blur(12px)` for navigation bars and modal overlays to maintain context while focusing the user.
3.  **Tiered Surfaces:** 
    *   Level 0: Base Background (`#020408`)
    *   Level 1: Cards/Modules (`#0B0E14`)
    *   Level 2: Popovers/Tooltips (`#161B22`)
4.  **Accent Glows:** A very soft, large-radius radial gradient (15% opacity) in teal behind primary icons or active course modules to draw the eye.

## Shapes
The shape language is **Soft (0.25rem)**. This subtle rounding provides a modern feel without leaning into the playfulness of more consumer-focused apps. 

- **Cards/Buttons:** Use `rounded-sm` (4px) or `rounded-md` (8px).
- **Inputs:** Use `rounded-sm` (4px) to maintain a crisp, functional appearance.
- **Visual Containers:** Video players or code blocks should use a slightly larger `rounded-lg` (12px) to frame the content as a distinct object.

## Components
- **Buttons:** 
  - *Primary:* Solid Teal (`#00F5FF`) with black text. High contrast for critical actions.
  - *Secondary:* Dark surface with a subtle 1px border (`#rgba(255,255,255,0.1)`) and white text. 
- **Course Cards:** Utilize a 1px border that glows slightly on hover. Include a "progress bar" using the electric blue accent.
- **Code Blocks:** Darker than the base background with custom syntax highlighting using the brand's teal and blue palette. 
- **Status Chips:** Small, pill-shaped indicators for "New," "Advanced," or "AI-Powered," using a transparent background with a solid accent border.
- **Inputs:** Darker background than the card they sit on. Focus state should trigger a 1px teal border and a very subtle teal outer glow.
- **Navigation:** Sleek top-bar with a glassmorphic blur and a thin bottom-border to separate it from the content.