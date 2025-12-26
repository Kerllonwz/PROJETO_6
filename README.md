# 🍽️ efood - Plataforma de Delivery de Restaurantes

[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)](https://www.typescriptlang.org/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-6.1.8-pink)](https://styled-components.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)](https://vitejs.dev/)

Projeto desenvolvido como parte do curso de Front-end da EBAC. A efood é uma plataforma moderna para divulgação de estabelecimentos gastronômicos, permitindo que usuários naveguem por restaurantes e seus cardápios de forma intuitiva.

## 📁 Estrutura do Projeto

```
32_PROJETO_6/
├── public/              # Arquivos públicos (imagens, ícones)
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── RestaurantCard/
│   │   ├── RestaurantList/
│   │   ├── MenuCard/
│   │   └── MenuList/
│   ├── pages/          # Páginas da aplicação
│   │   ├── Home/
│   │   └── Restaurant/
│   ├── App.tsx         # Componente principal com rotas
│   ├── main.tsx        # Ponto de entrada da aplicação
│   ├── styles.ts       # Estilos globais
│   └── types.ts        # Definições de tipos TypeScript
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.2.2** - Superset JavaScript com tipagem estática
- **Styled Components 6.1.8** - Biblioteca para estilização com CSS-in-JS
- **React Router DOM 6.20.1** - Roteamento e navegação entre páginas
- **Vite 5.0.8** - Build tool e dev server ultra-rápido

## 🎨 Design

O layout foi baseado no design disponível no [Figma](https://www.figma.com/file/JjduV2Tg713TzYUUsees8b/efood), seguindo as especificações de cores, tipografia e componentes.

### Paleta de Cores

- **Primary**: `#E66767` - Vermelho principal
- **Background**: `#FFF8F2` - Fundo claro
- **Cream**: `#FFEBD9` - Bege claro
- **White**: `#FFFFFF` - Branco puro

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

```powershell
# Navegue até a pasta do projeto
cd "c:\Users\EZ\Documents\Arquivos\.Trabalhos\Curso_EBAC\Front_end\32_PROJETO_6"

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

```powershell
# Gere a build de produção
npm run build

# Visualize a build localmente
npm run preview
```

## 📄 Funcionalidades

✅ **Página Home**
- Listagem de restaurantes com cards informativos
- Exibição de avaliações (rating)
- Tags de destaque e categoria
- Navegação para página de detalhes

✅ **Página de Restaurante**
- Banner com imagem do estabelecimento
- Listagem de pratos do cardápio
- Cards de produtos com descrição e preço
- Botão para adicionar ao carrinho

✅ **Componentes Reutilizáveis**
- Header com duas variações (hero e simples)
- Footer com links sociais
- Cards de restaurantes e menu
- Sistema de navegação com React Router

✅ **Styled Components**
- Estilos componentizados e reutilizáveis
- Tema de cores centralizado
- Responsividade mobile-first
- Hover states e transições

## 🔗 Rotas

- `/` - Página inicial com lista de restaurantes
- `/restaurante/:id` - Página de detalhes do restaurante e cardápio

## 📝 Scripts Disponíveis

```json
"dev": "vite"              // Inicia servidor de desenvolvimento
"build": "tsc && vite build"  // Cria build de produção
"preview": "vite preview"   // Visualiza build de produção
"lint": "eslint . --ext ts,tsx"  // Executa linter
```

## 🌐 Deploy

O projeto pode ser facilmente deployado em plataformas como:

- **Vercel** (recomendado)
- **Netlify**
- **GitHub Pages**

### Deploy na Vercel

```powershell
# Instale a CLI da Vercel
npm i -g vercel

# Execute o deploy
vercel
```

## 📦 Dependências Principais

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.1",
  "styled-components": "^6.1.8"
}
```

## 🎓 Sobre o Projeto

Este projeto foi desenvolvido como parte do **Projeto 6** do curso de Front-end da EBAC, com os seguintes objetivos de aprendizado:

1. ✅ Criar um projeto React do zero com Vite
2. ✅ Utilizar Styled Components para estilização
3. ✅ Implementar navegação com React Router
4. ✅ Trabalhar com TypeScript
5. ✅ Criar componentes reutilizáveis
6. ✅ Gerenciar estado da aplicação
7. ✅ Fazer deploy do projeto

## 👨‍💻 Autor

Desenvolvido como parte do curso EBAC Front-end

## 📄 Licença

Este projeto é para fins educacionais.

---

⚠️ **Nota**: A efood é uma plataforma para divulgação de estabelecimentos. A responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.
