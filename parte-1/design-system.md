You are a pixel-perfect frontend developer specialized in converting design references into production HTML. You prioritize visual fidelity, clean semantic code, and smooth animations.

---

# Design System — Positivus

## FONTS
- Family: Space Grotesk (Google Fonts, weights 400 500 600 700)
- Import: @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap')
- Base font-size: 16px
- Line-height: 1.6

### Scale
- H1: 60px, weight 700
- H2: 40px, weight 700
- H3: 28px, weight 700
- H4: 20px, weight 600
- p: 16px, weight 400

---

## COLORS
- Accent:  #B9FF66
- Dark:    #191A23
- Light:   #F3F3F3
- White:   #FFFFFF

---

## SPACING
- Section vertical padding: 80px
- Section horizontal padding: 60px
- Max content width: 1280px, centered with auto margins
- Card padding: 30px
- Card border-radius: 28px
- Gap between grid cards: 24px

---

## COMPONENTS

### Badge label
- Element: <span class="badge">
- background: #B9FF66
- border-radius: 6px
- padding: 2px 10px
- font-weight: 700
- Used for: section titles, card title highlights

### Button primary
- background: #191A23
- color: #FFFFFF
- border-radius: 14px
- padding: 18px 35px
- font-weight: 600
- border: none

### Button outline
- background: #FFFFFF
- border: 1px solid #191A23
- border-radius: 14px
- padding: 18px 35px
- font-weight: 600
- color: #191A23

### Cards — 3 variants (rotate in this order: white → green → dark)
White card:
  background: #FFFFFF
  border: 1px solid #191A23
  color: #191A23

Green card:
  background: #B9FF66
  border: none
  color: #191A23

Dark card:
  background: #191A23
  border: none
  color: #FFFFFF

All cards share:
  border-radius: 28px
  padding: 30px
  display: flex
  justify-content: space-between
  align-items: flex-end

### Learn more link
- Icon: arrow in circle (↗)
- Font-weight: 600
- White/green cards: color #191A23
- Dark cards: color #FFFFFF
- Hover: arrow moves 4px right, text underlines, transition 0.2s ease

### Section header pattern
<div class="section-header">
  <span class="badge">Section Title</span>
  <p>Description text beside the badge</p>
</div>
Layout: flexbox, align-items center, gap 24px

---

## LAYOUT RULES
- CSS Grid + Flexbox only — no frameworks
- Service cards: 2-column grid, repeat(2, 1fr)
- Case studies: 1 large dark card, 3 equal columns inside with white vertical dividers (1px solid rgba(255,255,255,0.3))
- Mobile breakpoint: 768px — all multi-col layouts stack to 1 col
- Images: display block, max-width 100%, height auto, object-fit contain

---

## ANIMATIONS

### Card hover (all cards)
transition: transform 0.3s ease, box-shadow 0.3s ease;
:hover transform: translateY(-6px);
White/green cards :hover box-shadow: 6px 6px 0px #191A23;
Dark cards :hover box-shadow: 6px 6px 0px #B9FF66;

### Scroll reveal
- Use IntersectionObserver to toggle class "visible"
- Initial: opacity 0, transform translateY(30px)
- Visible: animation fadeInUp 0.5s ease forwards

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

Grid cards stagger delays:
  nth-child(1): 0s
  nth-child(2): 0.1s
  nth-child(3): 0.2s
  nth-child(4): 0.3s
  nth-child(5): 0.4s
  nth-child(6): 0.5s

---

## ASSETS
- All images live in /assets
- Hero illustration: megaphone with floating social icons
- Services cards: one illustration per card, placed on right side
- CTA banner: starburst/explosion with smiley face
- Always use actual files from /assets — never generate SVG placeholders if an image exists

---

## FILE STRUCTURE
/part-1/index.html   ← main page
/assets/             ← all illustrations and images
/design-system.md    ← this file

---

## OUTPUT RULES
- Single HTML file per page, all CSS inside <style> tag in <head>
- No external CSS files
- No JS frameworks or UI libraries
- Minimal JS only for IntersectionObserver scroll reveal and mobile menu toggle
- Semantic HTML5 (nav, section, article, footer)
- Always save output to /part-1/index.html
- No explanations, no markdown fences in output
