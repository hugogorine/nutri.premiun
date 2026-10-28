# Imagens — Marina Alencar · Nutrição Comportamental

Todas as imagens do site são placeholders até serem geradas por IA. O rodapé já traz o aviso
"Imagens ilustrativas geradas por inteligência artificial".

**Regras para todas as imagens:** retrato editorial em ambiente escuro, luz lateral suave, tons verdes
(fundo próximo de #0A0F0B, reflexos em #2F7A57 / #8FD9A8), mulher brasileira de 30 a 40 anos, a mesma
pessoa em todas as imagens (gere a primeira e use como referência de rosto nas outras).
**Nunca:** balança, fita métrica, antes e depois, corpo em foco, roupa de academia, comida "proibida x permitida".

Como trocar um placeholder: salve o arquivo em `public/images/` com o nome abaixo e, no componente indicado,
substitua o `<ImageSlot ... />` por `<img src="/images/<arquivo>" alt="<mesmo alt>" loading="lazy" ...>`
mantendo a mesma proporção e as mesmas classes de borda/arredondamento.

| # | Arquivo | Proporção | Tamanho sugerido | Onde aparece |
|---|---|---|---|---|
| 1 | `hero-retrato.jpg` | 3:4 | 900 × 1200 | Hero: medalhão em arco dentro do título (desktop) e retrato em arco abaixo do botão (celular) — `src/sections/hero.tsx` |
| 2 | `sobre-retrato.jpg` | 4:5 | 1200 × 1500 | Seção "Sobre a Marina", coluna fixa à esquerda — `src/sections/about.tsx` |
| 3 | `og-image.jpg` | 1,91:1 | 1200 × 630 | Prévia de compartilhamento (Open Graph) — `index.html`, salvar direto em `public/og-image.jpg` |

---

## 1. `hero-retrato.jpg` — 3:4

**Alt (já no código):** Retrato de Marina Alencar, nutricionista, sorrindo de leve em um ambiente escuro com luz lateral suave e tons verdes.

Atenção ao recorte: no desktop a imagem aparece pequena e cortada em arco (topo arredondado). O rosto
precisa ocupar o terço superior central, com espaço acima da cabeça.

**Prompt:**
```
Editorial portrait of a Brazilian woman in her mid-30s, nutritionist, warm and calm expression with a
slight smile, looking at the camera, shoulders up, centered composition with headroom, dark green-black
background (#0A0F0B), soft side light from the left like a window at dusk, subtle emerald green
reflections on the background and skin edges, natural skin texture, wavy dark brown hair, simple dark
green linen shirt, no jewelry overload, shallow depth of field, shot on 85mm, muted low-key color
grading, premium magazine look, vertical 3:4
```

## 2. `sobre-retrato.jpg` — 4:5

**Alt (já no código):** Marina Alencar sentada à mesa do consultório, de perfil, com luz lateral suave em um ambiente escuro e tons verdes.

**Prompt:**
```
Editorial portrait of the same Brazilian woman in her mid-30s, nutritionist, seated at a wooden table
in a calm dimly lit consultation room, three-quarter profile, hands resting near an open notebook and a
ceramic cup of tea, soft side light from a window on the right, dark green-black surroundings
(#0A0F0B), a plant with deep green leaves in the soft-focus background, subtle emerald and mint
highlights, natural skin texture, relaxed and attentive expression, no scale, no measuring tape,
no food plates, shot on 50mm, low-key muted color grading, premium editorial magazine look, vertical 4:5
```

## 3. `og-image.jpg` — 1,91:1 (1200 × 630)

**Alt (já no `index.html`):** Marina Alencar, nutricionista, em retrato editorial com luz lateral suave e tons verdes.

Deixe a metade esquerda escura e limpa: se quiser, escreva depois "Marina Alencar · Nutrição
Comportamental" em Instrument Serif #EDEFEA nessa área.

**Prompt:**
```
Wide editorial portrait of the same Brazilian woman in her mid-30s, nutritionist, positioned on the
right third of the frame, chest up, gentle smile, looking slightly off-camera, the left two thirds
are empty dark green-black negative space (#0A0F0B) with very faint flowing thin emerald lines, soft
side light, subtle mint green rim light, natural skin texture, low-key muted color grading, premium
and calm, horizontal 1.91:1
```
