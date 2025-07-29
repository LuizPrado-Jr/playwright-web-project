# Playwright-web-project

## Introdução:
Teste E2E com Cucumber utilizando Playwright.
Teste simples que abre uma aplicação web, realiza  login e navegue até uma 
página.

## Como executar

Clonar o projeto diretamente na IDE que esteja utilizado (  VCCode) ou realizar o download do .zip e salvar localmente em um diretório, extrai e abrir com a IDE.

**Após projeto aberto executar os comando abaixo para instalar todas as dependencias do projeto e rodar os testes:**

- **npm install**  para importar todas as dependencias do projeto

## Importante

_Para rodar o teste com sucesso é necessário ter o seguinte cadastro no link abaixo:_
https://front.serverest.dev/login

Cadastro utilizado no site:

usuraio = TesteLuiz
email: luiz@teste.com
senha: teste

**Esssas informações são importantes para a correta execução dos testes, pois sem o cadastro o teste falha e por ser um site para testes eles limpam o cadastro com uma frequencia de tempo, então pode ser que quando**
**executar o cadastro não esteja mais.**

**Após esses passos é importante executar os testes com o comando abaixo:**

- **npx cucumber-js --require tests/support/*.js --require tests/step_definitions/*.js**  para garantir que irá executar utilizando os hooks criados.
