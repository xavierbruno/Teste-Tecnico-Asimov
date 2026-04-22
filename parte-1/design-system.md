# Design System — Positivus

Documentação de referência para implementação em Next.js + Tailwind CSS.

---

## 1. Color Palette

| Token           | Hex       | Categoria | Uso principal                          |
|-----------------|-----------|-----------|----------------------------------------|
| `primary`       | `#B9FF66` | Primary   | CTAs, destaques, labels, badges        |
| `dark`          | `#191A23` | Dark      | Backgrounds escuros, texto principal   |
| `neutral`       | `#F3F3F3` | Neutral   | Backgrounds claros, cards, superfícies |
| `white`         | `#FFFFFF` | Base      | Backgrounds padrão, texto sobre dark   |

### Mapeamento para `tailwind.config.js`

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary:  '#B9FF66',
        dark:     '#191A23',
        neutral:  '#F3F3F3',
      },
    },
  },
}
```

---

## 2. Typography

### Fonte

- **Família:** Space Grotesk (geométrica, sem-serifa)
- **Pesos utilizados:** 400 (Regular), 700 (Bold)
- **Download / referência:** disponível no link do style guide original

Importação no Next.js (`app/layout.tsx`):

```tsx
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-grotesk',
})
```

---

### 2.1 Escala Tipográfica

| Tag  | Desktop            |              | Mobile             |              |
|------|--------------------|--------------|--------------------|--------------|
|      | **Tamanho**        | **Peso**     | **Tamanho**        | **Peso**     |
| H1   | 60px / 3.75rem     | Bold 700     | 43px / 2.6875rem   | Bold 700     |
| H2   | 40px / 2.5rem      | Bold 700     | 36px / 2.25rem     | Bold 700     |
| H3   | 28px / 1.75rem     | Bold 700     | 26px / 1.625rem    | Bold 700     |
| H4   | 20px / 1.25rem     | Regular 400  | 20px / 1.25rem     | Regular 400  |
| p    | 16px / 1rem        | Regular 400  | 16px / 1rem        | Regular 400  |

> **Hierarquia visual:** H1–H3 usam cor `#B9FF66` (primary) para a marcação de nível; H4 e P herdam a cor de contexto (dark ou white).

### 2.2 Mapeamento para `tailwind.config.js`

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        'h1-desktop': ['3.75rem',  { lineHeight: '1.1', fontWeight: '700' }],
        'h2-desktop': ['2.5rem',   { lineHeight: '1.2', fontWeight: '700' }],
        'h3-desktop': ['1.75rem',  { lineHeight: '1.3', fontWeight: '700' }],
        'h4-desktop': ['1.25rem',  { lineHeight: '1.4', fontWeight: '400' }],
        'p-desktop':  ['1rem',     { lineHeight: '1.6', fontWeight: '400' }],

        'h1-mobile':  ['2.6875rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h2-mobile':  ['2.25rem',   { lineHeight: '1.2', fontWeight: '700' }],
        'h3-mobile':  ['1.625rem',  { lineHeight: '1.3', fontWeight: '700' }],
        'h4-mobile':  ['1.25rem',   { lineHeight: '1.4', fontWeight: '400' }],
        'p-mobile':   ['1rem',      { lineHeight: '1.6', fontWeight: '400' }],
      },
    },
  },
}
```

### 2.3 Classes utilitárias responsivas (exemplo de uso)

```tsx
<h1 className="text-h1-mobile md:text-h1-desktop font-bold">
  Título principal
</h1>
```

---

## 3. Breakpoints sugeridos

| Nome | Valor  | Contexto         |
|------|--------|------------------|
| `sm` | 640px  | Mobile landscape |
| `md` | 768px  | Tablet           |
| `lg` | 1024px | Desktop          |
| `xl` | 1280px | Wide desktop     |

A transição Desktop ↔ Mobile da tipografia ocorre no breakpoint `md` (768px).

---

## 4. Asset Attribution

Créditos obrigatórios para os assets visuais utilizados no projeto:

| Asset        | Autor            | Fonte                           |
|--------------|------------------|---------------------------------|
| Illustrations | Igor Kapustin   | Portfolio / obra do autor       |
| Images        | vectorjuice      | [Freepik](https://freepik.com)  |

> Ao usar esses assets em produção, mantenha os créditos visíveis no rodapé ou página de atribuições conforme os termos de licença de cada fonte.

---

## 5. SEO & Next.js — Boas práticas

- Usar `<h1>` uma única vez por página; nunca pular níveis de heading
- Aplicar `font-display: swap` via `next/font` (padrão automático)
- Garantir contraste mínimo WCAG AA: `#191A23` sobre `#B9FF66` ✓ | `#191A23` sobre `#F3F3F3` ✓
- Evitar imagens de texto — usar CSS + fonte web para todos os headings
- Adicionar `alt` descritivo em todas as ilustrações de Igor Kapustin

---

## 6. `tailwind.config.js` completo (referência)

```js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#B9FF66',
        dark:    '#191A23',
        neutral: '#F3F3F3',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', ...fontFamily.sans],
      },
      fontSize: {
        'h1-desktop': ['3.75rem',   { lineHeight: '1.1', fontWeight: '700' }],
        'h2-desktop': ['2.5rem',    { lineHeight: '1.2', fontWeight: '700' }],
        'h3-desktop': ['1.75rem',   { lineHeight: '1.3', fontWeight: '700' }],
        'h4-desktop': ['1.25rem',   { lineHeight: '1.4', fontWeight: '400' }],
        'p-desktop':  ['1rem',      { lineHeight: '1.6', fontWeight: '400' }],

        'h1-mobile':  ['2.6875rem', { lineHeight: '1.1', fontWeight: '700' }],
        'h2-mobile':  ['2.25rem',   { lineHeight: '1.2', fontWeight: '700' }],
        'h3-mobile':  ['1.625rem',  { lineHeight: '1.3', fontWeight: '700' }],
        'h4-mobile':  ['1.25rem',   { lineHeight: '1.4', fontWeight: '400' }],
        'p-mobile':   ['1rem',      { lineHeight: '1.6', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}
```
