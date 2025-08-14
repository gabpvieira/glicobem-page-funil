
# Documentação Completa - Funil Gamificado GlicoBem

## Visão Geral Técnica

Este funil gamificado foi construído usando React + TypeScript, Tailwind CSS, Framer Motion para animações, e Shadcn/UI para componentes base. O design segue uma abordagem responsiva mobile-first com foco em conversão e experiência do usuário.

## Estrutura Geral do Projeto

```
src/
├── components/funnel/
│   ├── Step1.tsx         # Landing/Presell
│   ├── Step2.tsx         # Quiz: Desafios
│   ├── Step3.tsx         # Quiz: Dificuldades
│   ├── Step4.tsx         # Social Proof
│   ├── Step5.tsx         # Apresentação de Bônus
│   ├── Step6.tsx         # Oferta Principal
│   ├── Step7.tsx         # Urgência/Escassez
│   ├── Step8.tsx         # Checkout Final
│   └── ProgressBar.tsx   # Barra de Progresso
├── pages/
│   ├── Index.tsx         # Página inicial
│   └── Funnel.tsx        # Container do funil
```

## Configurações Globais

### Fontes
- **Família principal**: Montserrat (Google Fonts)
- **Implementação**: `font-montserrat` class via Tailwind
- **Pesos utilizados**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold), 900 (black)

### Paleta de Cores
```css
/* Principais */
- Verde: from-green-400 to-green-600 (CTAs primários)
- Azul: from-blue-400 to-blue-600 (elementos secundários)
- Vermelho: text-red-600 (urgência/alertas)
- Cinza: text-gray-900 (títulos), text-gray-600 (textos)

/* Gradientes de fundo */
- Landing: from-white via-blue-50/30 to-green-50/30
- Cards: from-green-50 to-blue-50
- Urgência: from-red-500 to-red-600
```

### Animações Base (Framer Motion)
```javascript
// Entrada padrão
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}

// Hover em botões
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Stagger para listas
transition={{ delay: index * 0.1 }}
```

---

## ETAPA 1: LANDING/PRESELL (Step1.tsx)

### Objetivo
Capturar atenção e gerar interesse inicial através de uma proposta de valor forte.

### Estrutura Visual
- **Layout**: Fullscreen centrado com gradiente suave
- **Container**: max-w-5xl mx-auto
- **Espaçamento**: space-y-8 (32px entre seções)

### Elementos Principais

#### 1. Badge Social Proof Animado
```tsx
// Contador dinâmico que incrementa a cada 5 segundos
const [socialCount, setSocialCount] = useState(27000);

// Visual
className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 rounded-full border border-green-200"
```

#### 2. Headline Principal
- **Tamanho**: text-4xl md:text-5xl lg:text-6xl
- **Peso**: font-black (900)
- **Cores**: Preto base + red-600 para "MEDO" + gradiente verde para "PRAZER"
- **Espaçamento**: leading-tight
- **Técnica**: Contraste emocional (medo vs prazer)

#### 3. Imagem Hero
- **Container**: rounded-3xl overflow-hidden shadow-2xl
- **Overlay**: bg-gradient-to-t from-black/60 via-transparent
- **Responsive**: max-w-4xl mx-auto
- **Lazy loading**: loading="lazy"

#### 4. Cards de Social Proof
```tsx
// Grid responsivo
className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"

// Card de avaliação
- Ícones: 5 estrelas preenchidas (fill-yellow-400)
- Número: text-2xl font-bold text-yellow-600
- Fundo: bg-white/90 backdrop-blur-sm border-yellow-200

// Card de usuários
- Ícone: Users do Lucide
- Número: text-2xl font-bold text-green-600
- Fundo: bg-white/90 backdrop-blur-sm border-green-200
```

#### 5. CTA Principal
```tsx
// Container com fundo diferenciado
className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl border-2 border-green-200"

// Botão
className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-16 py-8 text-2xl md:text-3xl font-bold rounded-2xl shadow-2xl uppercase"

// Efeito glow
<div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
```

### Responsividade
- **Mobile**: text-4xl, px-4 padding
- **Tablet**: text-5xl, px-6 padding  
- **Desktop**: text-6xl, px-8 padding

---

## ETAPA 2: QUIZ - PERFIL DO USUÁRIO (Step2.tsx)

### Objetivo
Segmentar o usuário e criar senso de personalização através de perguntas direcionadas.

### Estrutura Visual
- **Layout**: min-h-screen flex items-center justify-center
- **Container**: max-w-4xl mx-auto
- **Background**: bg-white (limpo e focado)

### Header do Quiz
```tsx
// Badge de progresso
className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full"
// Indicador visual: bolinha azul + texto

// Título principal
className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
// Destaque: span com text-blue-600 na palavra "desafio"

// Subtítulo
className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
```

### Cards de Opções
```tsx
// Container
className="grid gap-4 max-w-3xl mx-auto"

// Card individual
className="cursor-pointer transition-all duration-300 p-6 border-2 rounded-2xl group relative overflow-hidden"

// Estados visuais
- Default: bg-white border-[color]-200
- Hover: border-[color]-400 hover:shadow-md  
- Selected: bg-[color]-50 border-[color]-400 shadow-lg

// Gradiente no hover
className="absolute inset-0 bg-gradient-to-r from-[color]-50 to-[color]-100/50 opacity-0 group-hover:opacity-100"
```

### Opções Disponíveis
1. **Controle Glicêmico** (Vermelho)
   - Ícone: 🎯
   - Foco: Medo de comer errado

2. **Variedade Alimentar** (Azul)
   - Ícone: 🌟
   - Foco: Monotonia alimentar

3. **Prazer Culinário** (Roxo)
   - Ícone: 🍰
   - Foco: Vontade de doces

4. **Conhecimento Nutricional** (Verde)
   - Ícone: 🧠
   - Foco: Insegurança alimentar

### Loading State
```tsx
// Overlay fullscreen
className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"

// Spinner
className="w-8 h-8 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin"
```

---

## ETAPA 3: QUIZ - DIFICULDADES (Step3.tsx)

### Objetivo
Aprofundar a segmentação identificando dificuldades específicas do usuário.

### Diferenças do Step 2
- **Cor tema**: Roxo (text-purple-600)
- **Badge**: Bolinha roxa + "Identificação"
- **Headline**: "O que mais te **incomoda**?"

### Cards com Dicas Interativas
```tsx
// Card base (similar ao Step 2)
// + Seção de dica expandível

// Dica expandida
className="ml-16" // Alinhamento com conteúdo do card
<div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
  // Ícone lâmpada animado
  <Lightbulb className="w-5 h-5 text-amber-500" />
  // Animação de rotação e escala em loop
  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
</div>
```

### Opções com Soluções
1. **Satisfação Alimentar** (Laranja)
   - Problema: Não poder comer nada gostoso
   - Solução: Receitas saborosas e seguras

2. **Vida Social** (Azul)
   - Problema: Recusar convites para comer fora
   - Solução: Guia para socialização

3. **Adaptação Culinária** (Roxo)
   - Problema: Não conseguir adaptar receitas favoritas
   - Solução: Receitas adaptadas

4. **Controle Glicêmico** (Verde)
   - Problema: Glicemia subir mesmo tomando cuidado
   - Solução: Monitoramento personalizado

---

## ETAPA 4: SOCIAL PROOF (Step4.tsx)

### Objetivo
Validar a solução através de depoimentos reais e dados de credibilidade.

### Estrutura Principal
```tsx
// Background
className="min-h-screen bg-gradient-to-br from-gray-50 to-white"

// Container com overflow controlado
className="overflow-x-hidden pb-[100px]"
```

### Header WhatsApp Style
```tsx
// Cabeçalho verde simulando WhatsApp
className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-t-3xl shadow-lg"

// Indicador online
className="ml-auto flex items-center gap-1"
<div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
```

### Cards de Depoimentos
```tsx
// Grid responsivo
className="grid gap-8 md:grid-cols-2"

// Card com hover
whileHover={{ scale: 1.02 }}
className="border-2 border-green-200 hover:border-green-400 transition-all duration-300 shadow-lg hover:shadow-xl"

// Header do depoimento
className="bg-gradient-to-r from-green-50 to-green-100 p-4 border-b border-green-200"

// Avatar
className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold"
```

### Mensagens WhatsApp Simuladas
```tsx
// Container da mensagem
className="p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:bg-gray-100"

// Avatar com status online
<div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>

// Balão da mensagem
className="bg-green-50 p-3 rounded-2xl rounded-tl-sm border-l-4 border-green-400"

// Checkmarks
<CheckCheck className="w-4 h-4 text-green-500" />
```

### Seção de Estatísticas
```tsx
// Container
className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl border border-green-200 shadow-lg"

// Grid de stats
className="grid md:grid-cols-3 gap-6 text-center"

// Cada stat
- Número: text-3xl font-bold text-[color]-600
- Label: text-gray-700
```

---

## ETAPA 5: APRESENTAÇÃO DE BÔNUS (Step5.tsx)

### Objetivo
Aumentar o valor percebido apresentando bônus gratuitos inclusos na oferta.

### Estrutura de Bônus
```tsx
// Grid responsivo
className="grid gap-6 md:grid-cols-2 mb-8"

// Card de bônus com hover
whileHover={{ scale: 1.05 }}
className="p-6 h-full bg-gradient-to-br from-white to-green-50 border-green-200 hover:shadow-xl"
```

### Bônus Apresentados
1. **Pão Sem Culpa**
   - Valor: R$ 29,90
   - Ícone: Wheat
   - Descrição: 50 receitas de pães

2. **Manual SOS Cozinha**
   - Valor: R$ 24,90
   - Ícone: Book
   - Descrição: Guia de substituições

3. **Doces Liberados**
   - Valor: R$ 19,90
   - Ícone: Cake
   - Descrição: 10 sobremesas gourmet

4. **Chás Reguladores**
   - Valor: R$ 19,90
   - Ícone: Coffee
   - Descrição: 9 fórmulas de chás

### Sistema de Pricing
```tsx
// Valor original riscado
className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold line-through"

// Valor grátis
className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold"
```

### Resumo de Valor
```tsx
// Card destaque
className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200"

// Valor total dos bônus
text-2xl font-bold text-gray-900 // "💰 Você leva R$ 94,60 em bônus GRÁTIS!"
```

---

## ETAPA 6: OFERTA PRINCIPAL (Step6.tsx)

### Objetivo
Apresentar a oferta principal com prova de resultados e elementos de urgência.

### Gráfico de Resultados (Componente Personalizado)
```tsx
const ResultsChart = () => {
  // Dados dos resultados
  const data = [
    {
      metric: 'Glicose em Jejum',
      before: 185, after: 95,
      unit: 'mg/dl', target: '< 100',
      improvement: '-49%'
    },
    // ... outros métricas
  ];

  // Barras animadas
  style={{
    width: barsLoaded ? '90%' : '0%',
    transitionDelay: `${index * 200}ms`
  }}
};
```

### Timer de Urgência
```tsx
// Container do timer
className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-lg"

// Display do tempo
className="text-4xl md:text-5xl font-bold font-montserrat"

// Função de formatação
const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};
```

### Card da Oferta
```tsx
// Layout em grid
className="grid lg:grid-cols-2 gap-8"

// Lista de features
{features.map((feature, index) => (
  <div className="flex items-center gap-3">
    <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
    <span className="text-gray-700 font-montserrat">{feature}</span>
  </div>
))}

// Seção de preço
className="text-center lg:border-l lg:border-green-200 lg:pl-8"

// Preço riscado
className="text-gray-400 line-through text-xl"

// Preço principal
className="text-6xl md:text-7xl font-bold text-green-600"
```

---

## ETAPA 7: URGÊNCIA/ESCASSEZ (Step7.tsx)

### Objetivo
Criar senso de urgência e FOMO (Fear of Missing Out) para acelerar a decisão.

### Banner Principal
```tsx
// Imagem de capa
src="https://dicassaudeonline.com.br/wp-content/uploads/2025/05/CAPA.png"
className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
```

### Elementos de Urgência
```tsx
// Título de alerta
className="text-3xl md:text-4xl font-bold text-red-600"
// "⚠️ Não perca essa chance!"

// Cards de estatísticas com animação stagger
transition={{ delay: index * 0.2, duration: 0.5 }}
```

### Card de Urgência
```tsx
// Container com gradiente de alerta
className="bg-gradient-to-r from-yellow-50 to-red-50 p-6 rounded-lg border border-red-200"

// Preço destacado
className="font-bold text-red-600 text-lg"
// "⏰ Apenas R$ 19,90 por tempo limitado!"
```

---

## ETAPA 8: CHECKOUT FINAL (Step8.tsx)

### Objetivo
Fechar a venda com máxima conversão através de elementos de confiança e urgência final.

### Header de Sucesso
```tsx
// Ícone de sucesso animado
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.8, type: "spring", stiffness: 200 }}

// Container do ícone
className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto"
```

### Mockup do Produto
```tsx
// Imagem do app
src="https://dicassaudeonline.com.br/wp-content/uploads/2025/05/MOCKUP-NOVO.png"
className="w-full h-auto rounded-2xl shadow-2xl"
```

### Card de Produto
```tsx
// Container principal
className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300 shadow-2xl"

// Benefícios com animação stagger
{benefits.map((benefit, index) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.7 + index * 0.1 }}
  >
))}
```

### CTA Final com Efeito Glow
```tsx
// Container com glow
<div className="absolute inset-0 bg-green-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>

// Botão principal
className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-20 py-8 text-3xl md:text-4xl font-bold rounded-3xl shadow-2xl w-full max-w-3xl uppercase font-montserrat border-4 border-green-400"

// Ícone do carrinho
<ShoppingCart className="w-10 h-10 mr-6" />
```

### FAQ Expansível
```tsx
// Accordion do Shadcn/UI
<Accordion type="single" collapsible className="space-y-4">
  <AccordionItem className="border-2 border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md">
    <AccordionTrigger className="px-6 py-4 font-montserrat font-semibold text-gray-900 hover:text-green-600">
    <AccordionContent className="px-6 pb-4 text-gray-700 font-montserrat leading-relaxed">
```

---

## COMPONENTES AUXILIARES

### ProgressBar.tsx
```tsx
// Barra de progresso animada
<motion.div
  className="h-full bg-gradient-to-r from-secondary to-primary rounded-full shadow-lg"
  initial={{ width: 0 }}
  animate={{ width: `${progress}%` }}
  transition={{ duration: 0.8, ease: "easeOut" }}
/>

// Indicadores de etapa
{Array.from({ length: totalSteps }, (_, i) => (
  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
    i < currentStep ? 'bg-secondary' : 'bg-gray-300'
  }`} />
))}
```

---

## PADRÕES DE RESPONSIVIDADE

### Breakpoints Utilizados
```css
/* Mobile First */
- Base: 320px+
- sm: 640px+ (não muito usado)
- md: 768px+ (tablets)
- lg: 1024px+ (desktop pequeno)
- xl: 1280px+ (desktop grande)
```

### Tamanhos de Texto Responsivos
```css
/* Títulos principais */
text-4xl md:text-5xl lg:text-6xl

/* Subtítulos */
text-2xl md:text-3xl

/* Botões grandes */  
text-xl md:text-2xl

/* Texto normal */
text-lg md:text-xl
```

### Padding e Margin Responsivos
```css
/* Containers */
p-4 md:p-6 lg:p-8

/* Espaçamento entre elementos */
space-y-6 md:space-y-8 lg:space-y-12

/* Margens de seção */
mb-8 md:mb-12 lg:mb-16
```

---

## ANIMAÇÕES E TRANSIÇÕES

### Timing de Animações
- **Entrada de elementos**: 0.6-0.8s
- **Hover effects**: 0.3s
- **Loading states**: 1.2-2.0s
- **Stagger delay**: 0.1-0.2s entre elementos

### Easing Functions
```javascript
// Suave e natural
transition={{ duration: 0.8, ease: "easeOut" }}

// Para springs
transition={{ type: "spring", stiffness: 200 }}

// Para stagger
transition={{ delay: index * 0.1 }}
```

### Animações de Hover Padrão
```javascript
// Botões
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Cards
whileHover={{ scale: 1.02 }}

// Ícones
whileHover={{ scale: 1.2 }}
transition={{ duration: 0.3 }}
```

---

## OTIMIZAÇÕES E PERFORMANCE

### Lazy Loading
- Todas as imagens usam `loading="lazy"`
- Componentes pesados são carregados sob demanda

### Bundle Splitting
- Cada step é um componente separado
- Import dinâmico na navegação

### Sound Management
- Sistema centralizado de sons
- Logs de console para debugging

---

## INTEGRAÇÃO E CHECKOUT

### Redirecionamento
```javascript
const handleCheckout = () => {
  console.log('🔊 Success sound');
  console.log('Redirecionando para checkout...', userAnswers);
  window.location.href="https://www.ggcheckout.com/checkout/v2/qKCrW40YMD1dZ0rcv4by" + window.location.search;
};
```

### Tracking de Respostas
```javascript
const saveAnswer = (question: string, answer: string) => {
  setUserAnswers(prev => ({
    ...prev,
    [question]: answer
  }));
};
```

---

## CHECKLIST PARA REPLICAÇÃO

### Design System
- [ ] Configurar Montserrat como fonte principal
- [ ] Implementar paleta de cores base (verde, azul, vermelho)
- [ ] Criar gradientes padrão para backgrounds
- [ ] Configurar animações base do Framer Motion

### Componentes Base
- [ ] Cards com hover states e gradientes
- [ ] Botões com efeitos glow e animações
- [ ] Sistema de badges e tags
- [ ] Loading states consistentes

### Estrutura do Funil
- [ ] Página inicial com proposta de valor
- [ ] 2-3 perguntas de quiz para segmentação
- [ ] Página de social proof com depoimentos
- [ ] Apresentação de bônus
- [ ] Oferta principal com prova de resultados
- [ ] Página de urgência/escassez
- [ ] Checkout final com FAQ

### Elementos de Conversão
- [ ] Social proof dinâmico (contadores)
- [ ] Timer de urgência funcional
- [ ] Gráficos de resultados animados
- [ ] Depoimentos em formato WhatsApp
- [ ] Sistema de bônus com valores riscados
- [ ] FAQ expansível no checkout

Este documento serve como blueprint completo para replicar a estrutura, design e funcionalidades do funil em outros produtos digitais.
