# Comandos Sugeridos - Simulador de Financiamento

## Comandos para Desenvolvimento

### Execução Local
```powershell
# Servidor HTTP simples com Python (se disponível)
python -m http.server 8000

# Servidor HTTP com Node.js (se disponível)
npx serve .

# Servidor HTTP com PHP (se disponível)
php -S localhost:8000

# Abrir diretamente no navegador
start index.html
```

### Navegação de Arquivos (Windows)
```powershell
# Listar arquivos
dir
ls  # Se usando PowerShell Core

# Navegar para diretórios
cd css
cd js
cd ..

# Visualizar conteúdo de arquivos
type README.md
Get-Content README.md

# Procurar arquivos
dir /s *.html
Get-ChildItem -Recurse -Name "*.js"
```

### Git (Controle de Versão)
```powershell
# Status do repositório
git status

# Adicionar mudanças
git add .
git add index.html

# Commit
git commit -m "Descrição das mudanças"

# Push para repositório remoto
git push origin main

# Pull de mudanças
git pull origin main

# Ver histórico
git log --oneline

# Ver diferenças
git diff
```

### Desenvolvimento e Debug
```powershell
# Abrir no VS Code
code .
code index.html
code js/app.js

# Verificar sintaxe JavaScript (se Node.js disponível)
node -c js/app.js

# Verificar arquivos HTML (validador online)
# https://validator.w3.org/

# Minificar CSS (online)
# https://cssminifier.com/

# Minificar JavaScript (online)
# https://javascript-minifier.com/
```

### Utilitários de Sistema (Windows)
```powershell
# Encontrar arquivos
findstr /s "function" *.js
Select-String -Pattern "function" -Path "*.js" -Recurse

# Contar linhas de código
(Get-Content js/app.js).Count
findstr /R /N "^" js/app.js | find /C ":"

# Copiar arquivos
copy index.html backup_index.html
Copy-Item index.html backup_index.html

# Criar backup
xcopy . backup\ /E /I
```

### Testes Manuais
```powershell
# Abrir múltiplos navegadores para teste
start chrome index.html
start msedge index.html
start firefox index.html

# Teste de responsividade (DevTools)
# F12 > Toggle Device Toolbar > Testar diferentes resoluções
```

### Deploy e Distribuição
```powershell
# Criar arquivo ZIP para distribuição
Compress-Archive -Path * -DestinationPath simulador-financiamento.zip

# Servir via GitHub Pages
# 1. Push para branch gh-pages
# 2. Configurar Pages no GitHub

# Upload para hosting
# Usar FTP/SFTP para upload dos arquivos estáticos
```

## Comandos Específicos do Projeto

### Verificação de Dependências
```powershell
# Verificar se CDNs estão funcionando
# Abrir index.html e verificar console do navegador (F12)

# Testar Decimal.js
# Console: new Decimal(0.1).plus(0.2).toString()

# Testar Chart.js
# Console: Chart.version
```

### Desenvolvimento de Funcionalidades
```powershell
# Backup antes de mudanças importantes
copy js\app.js js\app.js.backup
copy css\style.css css\style.css.backup

# Testar alterações
start index.html

# Verificar erros no console
# F12 > Console tab
```

### Manutenção
```powershell
# Verificar tamanho dos arquivos
dir /S

# Limpar arquivos temporários
del /Q /S *.tmp
del /Q /S *~

# Verificar integridade do projeto
# Testar todas as funcionalidades manualmente
```

## Fluxo de Trabalho Recomendado

1. **Abrir projeto**: `code .`
2. **Executar localmente**: `start index.html` ou usar servidor HTTP
3. **Fazer alterações**: Editar arquivos conforme necessário
4. **Testar**: Recarregar página e verificar funcionalidades
5. **Commit**: `git add .` e `git commit -m "descrição"`
6. **Deploy**: `git push origin main`

## Comandos de Emergência

```powershell
# Reverter mudanças não commitadas
git checkout -- .

# Voltar para commit anterior
git reset --hard HEAD~1

# Restaurar arquivo específico
git checkout HEAD -- js/app.js
```