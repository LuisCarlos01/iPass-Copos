# 🤝 Guia de Contribuição - iPass Copos

## 📋 Convenções de Commit

Utilizamos **Conventional Commits** para padronizar as mensagens:

### Formato
```
tipo(escopo): descrição breve

Descrição detalhada (opcional)

- Item específico 1
- Item específico 2
```

### Tipos Principais
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação/estilo (sem mudança lógica)
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Manutenção, configuração, dependências

### Exemplos
```bash
feat(auth): implementa validação de CPF
fix(ui): corrige responsividade do botão
docs: atualiza README com instruções de deploy
chore: atualiza dependências do Next.js
```

## 🔄 Workflow de Desenvolvimento

### 1. Criar Branch
```bash
git checkout -b feat/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
```

### 2. Fazer Commits
```bash
git add .
git commit -m "feat: descrição clara da mudança"
```

### 3. Push e Pull Request
```bash
git push origin feat/nome-da-feature
```

### 4. Code Review
- Aguardar aprovação do PR
- Aplicar correções se necessário
- Merge após aprovação

## 🧪 Testes

### Antes de Commitar
```bash
npm run lint        # Verificar código
npm run type-check  # Verificar tipos
npm run build      # Testar build
```

## 📁 Estrutura de Arquivos

### Nomenclatura
- **Componentes**: PascalCase (`LoginScreen.tsx`)
- **Arquivos**: kebab-case (`use-app.ts`)
- **Pastas**: kebab-case (`components/ui/`)

### Organização
```
src/
├── components/
│   ├── ui/          # Componentes base
│   └── screens/     # Telas da aplicação
├── hooks/           # Custom hooks
├── utils/           # Funções utilitárias
├── types/           # Definições TypeScript
└── styles/          # Estilos globais
```

## ✅ Checklist do PR

- [ ] Código segue padrões ESLint
- [ ] TypeScript sem erros
- [ ] Componentes testados manualmente
- [ ] Documentação atualizada se necessário
- [ ] Commit messages seguem convenção
- [ ] Branch atualizada com main

## 🚀 Deploy

### Ambiente de Desenvolvimento
```bash
npm run dev
```

### Build de Produção
```bash
npm run build
npm run start
``` 