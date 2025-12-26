# 🚀 Guia de Deploy - efood

Este guia fornece instruções passo a passo para fazer o deploy do projeto efood.

## 📋 Pré-requisitos

- Projeto commitado no Git
- Conta na Vercel (gratuita)
- Build do projeto funcionando localmente

## 🌐 Deploy na Vercel (Recomendado)

A Vercel oferece deploy automático, SSL grátis e CDN global.

### Método 1: Via Interface Web

1. **Acesse a Vercel**
   - Vá para [vercel.com](https://vercel.com)
   - Faça login com GitHub, GitLab ou Bitbucket

2. **Importe o Projeto**
   - Clique em "Add New Project"
   - Selecione o repositório `32_PROJETO_6`
   - A Vercel detectará automaticamente que é um projeto Vite

3. **Configure o Build**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
   - Framework Preset: Vite

4. **Deploy**
   - Clique em "Deploy"
   - Aguarde o build (1-2 minutos)
   - Seu site estará disponível em `https://seu-projeto.vercel.app`

### Método 2: Via CLI

```powershell
# Instale a CLI da Vercel globalmente
npm i -g vercel

# Navegue até a pasta do projeto
cd "c:\Users\EZ\Documents\Arquivos\.Trabalhos\Curso_EBAC\Front_end\32_PROJETO_6"

# Execute o deploy
vercel

# Para produção
vercel --prod
```

## 🔧 Configurações Importantes

### vercel.json

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### Variáveis de Ambiente

Se você usar APIs externas no futuro:

1. No painel da Vercel, vá em "Settings" > "Environment Variables"
2. Adicione suas variáveis (ex: `VITE_API_URL`)
3. Refaça o deploy

## 🌐 Deploy na Netlify (Alternativa)

### Via Interface Web

1. **Acesse Netlify**
   - Vá para [netlify.com](https://netlify.com)
   - Faça login com GitHub

2. **Novo Site**
   - Clique em "Add new site" > "Import an existing project"
   - Selecione o repositório

3. **Configure**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Clique em "Deploy site"

### Via CLI

```powershell
# Instale a CLI do Netlify
npm install -g netlify-cli

# Faça login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

## 📦 Deploy no GitHub Pages

```powershell
# Instale gh-pages
npm install --save-dev gh-pages

# Adicione ao package.json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

# Execute o deploy
npm run deploy
```

Configure o `base` no `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/32_PROJETO_6/'
})
```

## ✅ Checklist Pré-Deploy

- [ ] Teste o build localmente: `npm run build && npm run preview`
- [ ] Verifique se não há erros no console
- [ ] Teste a navegação entre páginas
- [ ] Verifique se as imagens carregam corretamente
- [ ] Commit e push de todas as alterações
- [ ] Remova console.logs desnecessários

## 🔍 Troubleshooting

### Build falha na Vercel

```powershell
# Limpe o cache e reconstrua
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Rotas não funcionam após deploy

Se as rotas do React Router não funcionarem:

**Vercel**: Crie um arquivo `vercel.json`:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Netlify**: Crie um arquivo `public/_redirects`:

```
/*    /index.html   200
```

### Imagens não carregam

Verifique se:
- As imagens estão na pasta `public/`
- Os caminhos começam com `/` (ex: `/images/logo.png`)
- As extensões estão corretas (png, jpg, svg)

## 📱 Testando o Deploy

Após o deploy:

1. ✅ Abra o link fornecido
2. ✅ Teste a navegação entre Home e Restaurante
3. ✅ Verifique se as imagens carregam
4. ✅ Teste em diferentes dispositivos (mobile, tablet, desktop)
5. ✅ Verifique o console do navegador para erros

## 🔗 Links Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Netlify](https://docs.netlify.com/)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)

## 🎉 Pronto!

Seu projeto está no ar! Copie o link e envie através da plataforma EBAC.

Exemplo de URL: `https://efood-projeto6.vercel.app`
