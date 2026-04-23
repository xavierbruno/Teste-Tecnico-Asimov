# Parte 2 - Teste Técnico Asimov Academy

## Conteúdo Obrigatório

### Quais ferramentas de IA você usou?
- O Stitch IA ajudou a consolidar direção visual a partir dessas referências.
- O Antigravity me auxiliou na criação do boilerplate inicial do projeto, me dando uma base sólida para começar a trabalhar.
- O Claude Sonnet 4.5 ajudou a refinar o código e corrigir bugs.

### Em que etapas a IA ajudou mais?
Na geração do conteúdo do arquivo DESIGN.md, com base na imagem de referência `Style.png`. O processo foi feito de forma incremental:
1. O Stitch IA sugeriu a estrutura inicial e os principais conceitos.
2. O Claude Sonnet 4.5 expandiu e refinou o conteúdo, acrescentando detalhes técnicos e organizando as informações de forma mais clara.


### O que você ajustou manualmente e por quê?
Fiz ajustes manuais em alguns pontos do código, principalmente no CSS, para garantir maior precisão e alinhamento com as diretrizes do design system. Os principais ajustes foram:
- Definição exata das cores, usando o conta-gotas do navegador para extrair os valores hexadecimais do layout.
- Ajuste de dimensões e posicionamento de imagens e outros elementos gráficos.
- Refinamento de espaçamentos, tipografia e alinhamento de textos.
- Correção de pequenos bugs e inconsistências visuais que apareceram durante o desenvolvimento.
- Acessibilidade:  adicionei atributos ARIA e utilizei semantic HTML para melhorar a experiência de usuários com tecnologias assistivas. Precisei ajustar dimencionamento do menu e do hero para que ele funcionasse corretamente em dispositivos móveis.

---

## Conteúdo Extra

### Funcionalidades implementadas

#### Loader animado
Tela de carregamento exibida na entrada da página. Apresenta um bloco de código fictício em estilo IDE, um spinner e uma barra de progresso com contador percentual. O tempo mínimo de exibição é 1500 ms; ao atingir 100%, a tela faz fade-out e é removida do DOM.


#### Troca de tema (dark / light)
Botão de toggle persiste a escolha em `localStorage`. Os temas são controlados inteiramente por custom properties CSS no seletor `body[data-theme]`, sem JavaScript manipulando cores diretamente.

| Tema | Background | Superfície | Acento principal |
|------|-----------|------------|-----------------|
| Dark | `#0f172a` | `#111618` | `#8beaf0` (ciano) |
| Light | `aliceblue` | `#ffffff` | `#8beaf0` (ciano) |

#### Internacionalização (PT / EN)
Tradução completa client-side via objeto `TRANSLATIONS`. A troca altera o atributo `lang` do `<html>`, o `dir` (preparado para RTL), todos os textos do nav, hero, badges e footer. O idioma escolhido é salvo em `localStorage`.

#### Seção Hero
- Pill de categoria animada
- Headline com destaque de cor no termo "IA / AI"
- Lista de benefícios com ícones de check
- Dois CTAs (primário sólido + secundário outline)
- Prova social com avatares empilhados e contagem de alunos
- Frame central com ícone Python e três badges flutuantes animados (CSS keyframes)
- Background com grid de código e partículas flutuantes

---

#### Acessibilidade

- Atributos `aria-label`, `aria-hidden` e `aria-expanded` aplicados nos elementos interativos
- Controles de navegação com `role` implícito correto (`<button>`, `<nav>`, `<a>`)
- `lang` e `dir` do documento atualizados dinamicamente na troca de idioma
- Partículas e elementos decorativos marcados com `aria-hidden="true"`

---

### Processo e inspirações

Durante a construção da `parte-2`, usei como inspiração o projeto abaixo no CodePen:

- https://codepen.io/Kan3an/pen/qEZzbom

Também utilizei o Stitch IA como apoio para explorar caminhos visuais a partir de referências de mercado e da identidade da marca.

- https://stitch.withgoogle.com/projects/1524858102894277512

Referências consideradas no processo:

- O próprio site da Asimov, especialmente para os elementos de identidade visual: https://asimov.academy
- https://linear.app
- https://frame.io
- https://www.isomeet.com
- https://antimetal.com

Considerações:

- O site da Asimov foi usado como referência de identidade visual, e não como cópia de layout.
- O projeto do CodePen serviu como inspiração de linguagem visual e base de exploração.
- O Stitch IA ajudou a consolidar direção visual a partir dessas referências.
- O Antigravity me auxiliou na criação do boilerplate inicial do projeto, me dando uma base sólida para começar a trabalhar.
- O Claude Sonnet 4.5 ajudou a refinar o código e corrigir bugs.

## Autor

**Bruno Xavier** — [linkedin.com/in/brunovx6](https://www.linkedin.com/in/brunovx6/)
