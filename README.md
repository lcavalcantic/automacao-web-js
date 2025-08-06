# 🚀 Automação Web com CodeceptJS

Projeto de automação de testes web usando CodeceptJS com Playwright, integrado com relatórios Allure e geração de dados fake.

## 📖 Sobre o Projeto

Este projeto automatiza testes end-to-end para o site [Automation Practice](https://automationpratice.com.br/), focando em funcionalidades de:

- Login de usuários
- Atualização de dados pessoais
- Validação de formulários

## 🛠 Tecnologias Utilizadas

- **[CodeceptJS](https://codecept.io/)** - Framework de testes BDD
- **[Playwright](https://playwright.dev/)** - Automação de navegadores
- **[Allure](https://allurereport.org/)** - Relatórios de teste avançados
- **[Faker.js](https://fakerjs.dev/)** - Geração de dados fake
- **Node.js** - Ambiente de execução
- **JavaScript** - Linguagem de programação

## 📋 Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Git**

## 🚀 Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/lcavalcantic/automacao-web-js.git
   cd automacao-web-js
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Instale os navegadores do Playwright:**
   ```bash
   npx playwright install
   ```

## ⚙️ Configuração

### Configuração do CodeceptJS

O arquivo `codecept.conf.js` contém todas as configurações:

- **Helper**: Playwright (Chromium)
- **URL Base**: https://automationpratice.com.br/
- **Plugins**: Allure, stepByStepReport, screenshotOnFail
- **Autenticação**: Sistema de login automático

### Variáveis de Ambiente

```bash
# Browser (opcional - padrão: chromium)
BROWSER=chromium  # ou firefox, webkit
```

## 🎯 Execução dos Testes

### Comandos Disponíveis

```bash
# Executar todos os testes
npm test

# Executar testes com relatório Allure
npm run test:allure

# Gerar relatório Allure
npm run allure:report

# Abrir relatório Allure
npm run allure:open

# Servir relatório Allure
npm run allure:serve
```

### Execução com Parâmetros

```bash
# Executar teste específico
npx codeceptjs run login_test.js

# Executar com debug
npx codeceptjs run --debug

# Executar com verbosidade
npx codeceptjs run --verbose

# Executar em modo headless
BROWSER=chromium npx codeceptjs run
```

### Allure Reports

O projeto gera relatórios Allure com:

- ✅ Dashboard com estatísticas
- 📈 Timeline de execução
- 📸 Screenshots automáticas
- 📋 Logs detalhados
- 📊 Gráficos e métricas
- 🔄 Histórico de execuções

### Step by Step Reports

Relatórios HTML passo-a-passo salvos em `output/record_*/`

## 🧪 Funcionalidades Testadas

### Login (`login_test.js`)

- ✅ Login com credenciais válidas
- ❌ Login com campos vazios
- ❌ Validação de mensagens de erro

### Atualização de Usuário (`update_user_test.js`)

- ✅ Atualização de dados pessoais
- ✅ Preenchimento de formulários
- ✅ Validação de dados salvos

## 🏗 Page Object Model

### UpdatePage (`pages/update_page.js`)

```javascript
// Campos do formulário
fields: {
  firstName: '#f_name',
  lastName: '[placeholder="Dhoe"]',
  email: '#email_address',
  // ...
}

// Métodos
accessUpdatePage()      // Acessa página de atualização
informations(name, lastName)  // Preenche informações
saveUpdates()          // Salva alterações
```

## 🔧 Configurações Avançadas

### Autenticação Automática

O projeto possui um sistema de login automático configurado:

```javascript
auth: {
  enabled: true,
  saveToFile: true,
  inject: 'login',
  users: {
    user: {
      login: (I) => {
        // Processo de login
      },
      check: (I) => {
        // Verificação de login
      }
    }
  }
}
```

### Plugins Habilitados

- **allure**: Relatórios avançados
- **stepByStepReport**: Relatórios passo-a-passo
- **screenshotOnFail**: Screenshots em falhas
- **retryFailedStep**: Retry automático de steps

### Allure não gerando dados (tive esse problema)

- Verifique se `@codeceptjs/allure-legacy` está instalado
- Confirme a configuração no `codecept.conf.js`
