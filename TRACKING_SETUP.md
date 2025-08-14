# Sistema de Tracking Completo - GlicoBem Funnel

## Visão Geral
Este documento descreve a implementação completa do sistema de tracking para o funil de vendas do GlicoBem, incluindo Facebook Pixel e UTM tracking via UTMify.

## Componentes Implementados

### 1. Facebook Pixel
- **Pixel ID**: `648351014264709`
- **Eventos Padrão**: PageView, ViewContent, AddToCart, Purchase
- **Eventos Customizados**: 
  - `Funnel_Step[1-8]_viewed` - Visualização de cada etapa
  - `Funnel_Step[1-8]_next` - Progressão entre etapas
  - `Funnel_Step8_checkout` - Início do checkout
  - `Step4Viewed` - Evento especial para 50% de visualização

### 2. UTM Tracking (UTMify)
- **Script**: `https://cdn.utmify.com.br/scripts/utms/latest.js`
- **Configurações**:
  - `data-utmify-prevent-xcod-sck`
  - `data-utmify-prevent-subids`
- **Eventos Rastreados**:
  - `funnel_progress` - Progressão do funil
  - `conversion` - Conversão final

## Estrutura de Arquivos

### Utilitários
- `src/utils/FacebookPixel.ts` - Configuração do Facebook Pixel
- `src/utils/UTMTracker.ts` - Gerenciamento de UTM e tracking avançado
- `src/utils/SoundManager.ts` - Gerenciamento de sons (já existente)

### Integração nos Componentes
Todos os steps do funil (1-8) foram atualizados com tracking duplo:
- Facebook Pixel + UTMify
- Preservação de parâmetros UTM em redirects
- Session tracking para análise de jornada

## Como Funciona

### 1. Inicialização
```typescript
// Em App.tsx
useEffect(() => {
  initFacebookPixel();
  utmTracker.trackFunnelProgress(0, 'page_loaded');
}, []);
```

### 2. Tracking por Etapa
Cada componente de etapa inclui:
```typescript
useEffect(() => {
  trackFunnelEvent(step, 'viewed');
  utmTracker.trackFunnelProgress(step, 'viewed');
}, []);
```

### 3. Progressão e Conversão
```typescript
// Progressão entre etapas
const handleNext = () => {
  trackFunnelEvent(step, 'next');
  utmTracker.trackFunnelProgress(step, 'next');
  onNext();
};

// Conversão final
const handleCheckout = () => {
  trackFunnelEvent(8, 'checkout');
  utmTracker.trackConversion(19.90);
  
  // Redirecionamento forçado com todos os parâmetros de URL
  const baseUrl = 'https://www.ggcheckout.com/checkout/v2/qKCrW40YMD1dZ0rcv4by';
  const fullUrl = `${baseUrl}${window.location.search}`;
  window.location.href = fullUrl;
};
```

## Parâmetros UTM Suportados
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `gclid` (Google Ads)
- `fbclid` (Facebook Ads)

## Testes e Validação

### 1. Testar Facebook Pixel
1. Instalar Facebook Pixel Helper (Chrome Extension)
2. Navegar pelo funil e verificar eventos
3. Confirmar parâmetros customizados nos eventos

### 2. Testar UTM Tracking
1. Acessar com parâmetros UTM:
   `http://localhost:5173/funil?utm_source=test&utm_medium=cpc&utm_campaign=test_campaign`
2. Verificar console para eventos UTMify
3. Confirmar preservação de parâmetros em redirects

### 3. Validação de Jornada
1. Iniciar sessão com UTM
2. Completar todo o funil
3. Verificar dados no dashboard UTMify
4. Confirmar attribution correta no Facebook Ads

## Debugging

### Console Logs
Todos os eventos são logados no console:
- `🎯 Facebook Pixel: [evento]`
- `🎯 UTMify: [evento]`
- `🔊 [tipo de som]`

### LocalStorage
Parâmetros UTM são armazenados em:
- `utm_[parametro]` - Valores individuais
- `utm_session_id` - ID único da sessão

## URLs de Checkout
- **Produção**: `https://www.ggcheckout.com/checkout/v2/qKCrW40YMD1dZ0rcv4by`
- **Com UTM**: Automaticamente construído preservando todos os parâmetros

## Suporte para Campanhas
- Google Ads (gclid)
- Facebook/Instagram Ads (fbclid)
- Email marketing (utm_medium=email)
- Afiliados (utm_source=affiliate)
- Conteúdo orgânico (utm_source=organic)

## Notas de Implementação
- Sistema totalmente reativo e não bloqueante
- Hot reload ativo durante desenvolvimento
- Zero impacto no performance do site
- Compatível com todos os navegadores modernos