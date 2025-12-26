# 🍕 EFOOD - Projeto 6 (Parte 2)

## 📝 Descrição do Projeto

Projeto de delivery de restaurantes desenvolvido com React, TypeScript e Styled Components. Esta versão inclui integração AJAX com API mockada, modal de produtos e sistema completo de carrinho de compras.

## ✨ Funcionalidades Implementadas

- ✅ **Listagem de Restaurantes via AJAX**: Os restaurantes são carregados dinamicamente através de uma API simulada
- ✅ **Modal de Produto**: Ao clicar em "Adicionar ao carrinho", uma modal exibe os detalhes do produto
- ✅ **Sistema de Carrinho**: Adicione múltiplos itens e gerencie seu pedido
- ✅ **Checkout Completo**: Formulário de entrega e pagamento
- ✅ **React Router**: Navegação entre páginas Home e Restaurante
- ✅ **Context API**: Gerenciamento global do carrinho
- ✅ **Styled Components**: Estilização componentizada
- ✅ **TypeScript**: Tipagem completa do projeto

## 🛠️ Tecnologias Utilizadas

- React 18.2.0
- TypeScript 5.2.2
- React Router DOM 6.20.1
- Styled Components 6.1.8
- Vite 5.0.8

## 🚀 Como Executar Localmente

1. **Instalar dependências:**
```bash
npm install
```

2. **Executar em modo desenvolvimento:**
```bash
npm run dev
```

3. **Acessar no navegador:**
```
http://localhost:5173
```

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🌐 Deploy na Vercel

### Via CLI (Recomendado)

1. Instalar Vercel CLI globalmente:
```bash
npm install -g vercel
```

2. Fazer login na Vercel:
```bash
vercel login
```

3. Deploy do projeto:
```bash
vercel
```

4. Para produção:
```bash
vercel --prod
```

### Via Dashboard Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Clique em "Deploy"

## 📁 Estrutura do Projeto

```
33_PROJETO_6_PART2/
├── src/
│   ├── components/
│   │   ├── Cart/              # Carrinho de compras
│   │   ├── Checkout/          # Página de checkout
│   │   ├── Footer/            # Rodapé
│   │   ├── Header/            # Cabeçalho
│   │   ├── MenuCard/          # Card de item do menu
│   │   ├── MenuList/          # Lista de itens do menu
│   │   ├── ProductModal/      # Modal de detalhes do produto ✨
│   │   ├── RestaurantCard/    # Card de restaurante
│   │   └── RestaurantList/    # Lista de restaurantes
│   ├── context/
│   │   └── CartContext.tsx    # Context API do carrinho
│   ├── pages/
│   │   ├── Home/              # Página inicial com restaurantes
│   │   └── Restaurant/        # Página do restaurante com menu
│   ├── services/
│   │   └── api.ts             # Serviço AJAX simulado ✨
│   ├── App.tsx                # Componente principal com rotas
│   ├── main.tsx               # Entry point
│   ├── styles.ts              # Estilos globais
│   └── types.ts               # Definições TypeScript
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json                # Configuração Vercel
```

## 🎨 Funcionalidades da API Simulada

O arquivo `src/services/api.ts` simula uma API REST com as seguintes funções:

### `fetchRestaurants()`
Retorna todos os restaurantes disponíveis.

```typescript
const restaurants = await fetchRestaurants()
```

### `fetchRestaurantById(id: number)`
Retorna um restaurante específico pelo ID.

```typescript
const restaurant = await fetchRestaurantById(1)
```

### `fetchRestaurantMenu(restaurantId: number)`
Retorna o cardápio de um restaurante específico.

```typescript
const menu = await fetchRestaurantMenu(1)
```

Todas as funções simulam latência de rede (300-500ms) para comportamento realista.

## 🔍 Como Funciona a Modal de Produto

1. Usuário clica em "Adicionar ao carrinho" em um item do menu
2. A modal abre exibindo:
   - Imagem ampliada do produto
   - Nome e descrição completa
   - Porção/quantidade
   - Preço formatado
   - Botão "Adicionar ao carrinho"
3. Ao adicionar, o item vai para o carrinho e a modal fecha
4. Feedback visual de adição bem-sucedida

## 🛒 Sistema de Carrinho

- Adicionar múltiplos produtos
- Visualizar total do pedido
- Remover itens
- Persistência durante a navegação
- Transição suave para checkout

## 📋 Checklist de Implementação

- [x] Copiar estrutura do Projeto 6
- [x] Criar serviço de API simulada
- [x] Integrar AJAX na página Home
- [x] Integrar AJAX na página Restaurant
- [x] Implementar ProductModal funcional
- [x] Testar fluxo completo
- [x] Preparar para deploy
- [ ] Fazer deploy na Vercel
- [ ] Enviar link do projeto

## 🐛 Solução de Problemas

### Erro ao instalar dependências
```bash
npm cache clean --force
npm install
```

### Porta 5173 em uso
```bash
npm run dev -- --port 3000
```

### Erro de build
```bash
rm -rf node_modules dist
npm install
npm run build
```

## 📝 Notas sobre a API

Como a API original (`https://api-ebac.vercel.app/api/efood/restaurantes`) está indisponível, foi implementada uma API mockada que simula:

- 6 restaurantes com categorias variadas
- 3-6 itens de menu por restaurante
- Delay de rede para simular requisições reais
- Estrutura de dados idêntica à API esperada

Para integrar com uma API real no futuro, basta modificar as funções em `src/services/api.ts` para fazer requisições HTTP reais.

## 📞 Contato

Desenvolvido para o curso EBAC de Front-end.

---

**✨ Projeto completo e pronto para deploy!**
