# 📝 Guia Git - efood

Este guia ajuda você a inicializar o repositório Git e fazer o primeiro commit do projeto.

## 🚀 Inicializando o Repositório

### 1. Inicialize o Git

```powershell
# Navegue até a pasta do projeto
cd "c:\Users\EZ\Documents\Arquivos\.Trabalhos\Curso_EBAC\Front_end\32_PROJETO_6"

# Inicialize o repositório Git
git init

# Verifique o status
git status
```

### 2. Configure o Git (se ainda não configurou)

```powershell
# Configure seu nome
git config user.name "Seu Nome"

# Configure seu email
git config user.email "seu.email@example.com"

# Configure para usar main como branch padrão
git config --global init.defaultBranch main
```

### 3. Adicione os Arquivos

```powershell
# Adicione todos os arquivos ao staging
git add .

# Ou adicione arquivos específicos
git add src/ package.json README.md
```

### 4. Faça o Primeiro Commit

```powershell
# Commit com mensagem descritiva
git commit -m "feat: Initial commit - Projeto efood com React, TypeScript e Styled Components"
```

## 🌐 Criando Repositório no GitHub

### Via Interface Web

1. **Acesse GitHub**
   - Vá para [github.com](https://github.com)
   - Clique em "New repository"

2. **Configure o Repositório**
   - Repository name: `efood-projeto6` (ou nome de sua preferência)
   - Description: "Plataforma de delivery de restaurantes - Projeto 6 EBAC"
   - Visibilidade: Public ou Private
   - **NÃO** marque "Initialize with README" (já temos um)

3. **Crie o Repositório**
   - Clique em "Create repository"

### 5. Conecte ao Repositório Remoto

Após criar o repositório no GitHub, copie a URL e execute:

```powershell
# Adicione o repositório remoto (substitua pela sua URL)
git remote add origin https://github.com/seu-usuario/efood-projeto6.git

# Verifique se foi adicionado
git remote -v

# Renomeie a branch para main (se necessário)
git branch -M main

# Faça o primeiro push
git push -u origin main
```

## 📦 Workflow de Desenvolvimento

### Fazendo Alterações

```powershell
# 1. Verifique em qual branch está
git branch

# 2. Veja o status das alterações
git status

# 3. Adicione as mudanças
git add .

# 4. Commit com mensagem descritiva
git commit -m "feat: adiciona funcionalidade X"

# 5. Envie para o GitHub
git push
```

### Tipos de Commit (Conventional Commits)

```
feat:     Nova funcionalidade
fix:      Correção de bug
docs:     Alterações na documentação
style:    Formatação, ponto e vírgula, etc (sem mudança no código)
refactor: Refatoração de código
test:     Adição ou correção de testes
chore:    Atualização de tarefas de build, configs, etc
```

### Exemplos de Mensagens de Commit

```powershell
git commit -m "feat: adiciona página de detalhes do restaurante"
git commit -m "fix: corrige bug no carrinho de compras"
git commit -m "style: atualiza cores do tema"
git commit -m "docs: atualiza README com instruções de deploy"
git commit -m "refactor: reorganiza componentes em pastas"
```

## 🌿 Trabalhando com Branches

### Criar uma Nova Branch

```powershell
# Crie e mude para uma nova branch
git checkout -b feature/nova-funcionalidade

# Ou crie sem mudar
git branch feature/nova-funcionalidade
```

### Mudar de Branch

```powershell
# Mude para outra branch
git checkout main
git checkout feature/nova-funcionalidade
```

### Mesclar Branches

```powershell
# Mude para a branch de destino
git checkout main

# Mescle a branch de feature
git merge feature/nova-funcionalidade

# Delete a branch após mesclar
git branch -d feature/nova-funcionalidade
```

## 🔄 Atualizando do Remoto

```powershell
# Baixe as alterações do remoto
git pull origin main

# Ou faça fetch + merge manualmente
git fetch origin
git merge origin/main
```

## 📋 Comandos Úteis

### Visualizar Histórico

```powershell
# Log completo
git log

# Log resumido
git log --oneline

# Log com gráfico
git log --graph --oneline --all
```

### Desfazer Alterações

```powershell
# Desfazer alterações em arquivo (antes do add)
git checkout -- arquivo.txt

# Remover arquivo do staging (após add, antes do commit)
git reset HEAD arquivo.txt

# Desfazer último commit (mantém alterações)
git reset --soft HEAD~1

# Desfazer último commit (descarta alterações)
git reset --hard HEAD~1
```

### Ver Diferenças

```powershell
# Ver alterações não staged
git diff

# Ver alterações staged
git diff --staged

# Ver diferenças entre branches
git diff main feature/nova-funcionalidade
```

## 🚫 .gitignore

Verifique se o `.gitignore` está correto:

```
# Dependências
node_modules/

# Build
dist/
dist-ssr/

# Cache
.vite/
.cache/

# Logs
*.log

# Environment
.env
.env.local

# Editor
.vscode/*
!.vscode/extensions.json
.idea/

# OS
.DS_Store
Thumbs.db
```

## ⚠️ Problemas Comuns

### "Permission denied (publickey)"

```powershell
# Configure SSH ou use HTTPS
git remote set-url origin https://github.com/seu-usuario/efood-projeto6.git
```

### Conflitos de Merge

```powershell
# 1. Abra os arquivos em conflito no VS Code
# 2. Resolva os conflitos manualmente
# 3. Adicione os arquivos resolvidos
git add .

# 4. Continue o merge
git commit -m "merge: resolve conflitos"
```

### Arquivo Grande Demais

```powershell
# Remova arquivo do histórico
git rm --cached arquivo-grande.zip

# Adicione ao .gitignore
echo "arquivo-grande.zip" >> .gitignore

# Commit
git commit -m "chore: remove arquivo grande"
```

## 🎯 Checklist para Entrega

- [ ] Repositório criado no GitHub
- [ ] Todos os arquivos commitados
- [ ] README.md atualizado
- [ ] .gitignore configurado
- [ ] Branches organizadas
- [ ] Push feito para o repositório remoto
- [ ] Link do repositório copiado para envio

## 🔗 Links Úteis

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)

## ✅ Pronto!

Seu repositório está configurado! Agora você pode:
1. ✅ Fazer commits regularmente
2. ✅ Fazer deploy via Vercel (conectada ao GitHub)
3. ✅ Compartilhar o código com outros desenvolvedores
4. ✅ Enviar o link do GitHub junto com o deploy

Exemplo de links para enviar:
- **Repositório**: `https://github.com/seu-usuario/efood-projeto6`
- **Deploy**: `https://efood-projeto6.vercel.app`
