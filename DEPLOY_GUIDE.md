# 🚀 Guia de Deploy - EFOOD

## ✅ Status: Projeto pronto para deploy!

## 🌐 Deploy via Vercel CLI (Recomendado - Mais Rápido)

### 1. Instalar Vercel CLI
```powershell
npm install -g vercel
```

### 2. Fazer Login
```powershell
vercel login
```

### 3. Deploy
```powershell
cd "c:\Users\EZ\Documents\Arquivos\.Trabalhos\Curso_EBAC\Front_end\33_PROJETO_6_PART2"
vercel --prod
```

**Pronto!** Você receberá a URL do projeto.

## 🌐 Deploy via GitHub + Vercel (Alternativa)

### 1. Criar repo no GitHub
- Acesse: https://github.com/new
- Nome: `efood-projeto6-part2`

### 2. Conectar repo local
```powershell
git remote add origin https://github.com/SEU-USUARIO/efood-projeto6-part2.git
git push -u origin main
```

### 3. Deploy na Vercel
- Acesse: https://vercel.com/new
- Importe o repositório
- Clique em "Deploy"

## 📋 Configurações (Automáticas)
- Framework: Vite ✅
- Build Command: `npm run build` ✅
- Output Directory: `dist` ✅

## ✅ Checklist Final
- [ ] Deploy concluído
- [ ] URL funciona
- [ ] Testar listagem de restaurantes
- [ ] Testar modal de produto
- [ ] Testar carrinho
- [ ] Enviar link na plataforma EBAC

---

**Link direto para deploy**: https://vercel.com/new
