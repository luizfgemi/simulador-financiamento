# Comandos de Finalização de Tarefas

## Verificação e Qualidade

### Testes Manuais Obrigatórios
```powershell
# 1. Abrir o simulador no navegador
start index.html

# 2. Testar funcionalidades principais:
# - Preencher formulário com valores válidos
# - Verificar cálculos Price
# - Verificar gráficos Chart.js
# - Testar tabelas detalhadas
# - Testar exportação CSV
# - Verificar responsividade (F12 > Device Toggle)
```

### Validação de Código
```powershell
# Verificar sintaxe HTML online
# https://validator.w3.org/

# Verificar JavaScript (se Node.js disponível)
node -c js/app.js

# Verificar console do navegador
# F12 > Console (deve estar livre de erros)
```

### Testes de Responsividade
```powershell
# Testar diferentes resoluções:
# - Mobile: 320px, 375px, 414px
# - Tablet: 768px, 1024px
# - Desktop: 1200px, 1920px

# Testar diferentes navegadores:
start chrome index.html
start msedge index.html
start firefox index.html
```

## Controle de Versão

### Antes do Commit
```powershell
# Verificar status
git status

# Verificar diferenças
git diff

# Verificar se todos os arquivos necessários estão incluídos
git add .
```

### Commit e Push
```powershell
# Commit com mensagem descritiva
git commit -m "feat: adicionar nova funcionalidade X"
# ou
git commit -m "fix: corrigir cálculo da TAE"
# ou
git commit -m "style: ajustar responsividade mobile"

# Push para repositório
git push origin main
```

### Convenções de Mensagens de Commit
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `style:` mudanças de estilo/CSS
- `refactor:` refatoração de código
- `docs:` atualização de documentação
- `test:` adição de testes

## Documentação

### Atualizar Documentação (se necessário)
```powershell
# Atualizar README.md se novas funcionalidades
code README.md

# Atualizar documentação técnica se mudanças estruturais
code GUIA_TECNICO.md

# Atualizar exemplos se novos casos de uso
code EXEMPLOS_PRATICOS.md
```

## Backup e Deploy

### Criar Backup
```powershell
# Backup local
Compress-Archive -Path * -DestinationPath "backup-$(Get-Date -Format 'yyyy-MM-dd-HHmm').zip"

# Verificar integridade do backup
# Extrair em pasta temporária e testar
```

### Deploy (se aplicável)
```powershell
# GitHub Pages (automático via push)
git push origin main

# Deploy manual para hosting
# 1. Fazer upload dos arquivos estáticos
# 2. Verificar URLs dos CDNs
# 3. Testar funcionalidades em produção
```

## Checklist Final

### ✅ Antes de Finalizar uma Tarefa

1. **Funcionalidade**
   - [ ] Todas as funcionalidades testadas manualmente
   - [ ] Cálculos verificados com casos conhecidos
   - [ ] Gráficos renderizando corretamente
   - [ ] Tabelas populadas com dados corretos

2. **Interface**
   - [ ] Layout responsivo em diferentes telas
   - [ ] Todos os elementos Bootstrap funcionando
   - [ ] CSS customizado aplicado corretamente
   - [ ] Textos e labels corretos

3. **Código**
   - [ ] JavaScript livre de erros no console
   - [ ] HTML validado (validator.w3.org)
   - [ ] CSS sem conflitos
   - [ ] Comentários atualizados se necessário

4. **Compatibilidade**
   - [ ] Testado em Chrome, Edge, Firefox
   - [ ] Funciona em mobile e desktop
   - [ ] CDNs acessíveis e carregando

5. **Documentação**
   - [ ] README atualizado se necessário
   - [ ] Comentários no código explicativos
   - [ ] Commit message descritiva

6. **Controle de Versão**
   - [ ] Mudanças commitadas
   - [ ] Push para repositório remoto
   - [ ] Backup criado se mudanças significativas

### 🚨 Comandos de Emergência
```powershell
# Se algo der errado, reverter:
git stash  # Salvar mudanças não commitadas
git checkout HEAD -- .  # Reverter para último commit
git stash pop  # Recuperar mudanças se necessário

# Restaurar arquivo específico
git checkout HEAD -- js/app.js
```

## Processo Completo de Finalização

```powershell
# 1. Testar tudo
start index.html
# Executar testes manuais completos

# 2. Verificar código
git status
git diff

# 3. Adicionar e commitar
git add .
git commit -m "tipo: descrição da mudança"

# 4. Push
git push origin main

# 5. Verificar deploy (se automático)
# Acessar URL de produção e testar

# 6. Documentar
echo "Tarefa finalizada em $(Get-Date)" >> CHANGELOG.md
```

Este processo garante que todas as mudanças sejam adequadamente testadas, documentadas e versionadas antes da finalização da tarefa.