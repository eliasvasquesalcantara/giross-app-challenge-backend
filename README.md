## To run the app

1. Install dependecies
```bash
$ npm install
```
2. Start postgres
```bash
$ npm run postgres:up
```
3. Start application
```bash
$ npm run start
```

## Endpoints
* POST /cep
   * add new CEP record
* GET /cep
   * find CEPs (receives radius (Km) and CEP (center of the radius))
* POST auth/register
   * add User record
* POST auth/login
   * check User credentials
* GET auth/is-token-valid/:token
   * check if basic token is valid


# Challenge desription
### Desafio do Sistema de Consulta de CEPs

#### Objetivo:
Desenvolver um sistema multiplataforma que permita aos usuários logados realizar consultas de CEPs baseadas em um raio de distância específico e exibir os resultados em uma tabela. Além disso, é necessário ter uma página de histórico para visualização das consultas realizadas.

#### Funcionalidades Principais:
1. **Autenticação de Usuário:**
   - Os usuários devem ser capazes de se autenticar para acessar o sistema.
   - Após login, eles terão acesso à funcionalidade de consulta de CEPs.

2. **Consulta de CEPs por Raio de KM:**
   - Após o login, o usuário poderá inserir um CEP e um valor em km.
   - O sistema retornará todos os CEPs dentro do raio especificado em uma tabela.

3. **Página de Histórico de Consultas:**
   - O sistema deverá exibir um histórico das consultas realizadas por cada usuário.
   - Essa página deve apresentar as consultas anteriores em forma de lista ou tabela, com detalhes como data e hora da consulta, CEP e raio especificados.

#### Critérios de Avaliação:

1. **Histórico de commit:**
   - Frequência e consistência dos commits durante o período de sete dias.
   - Mensagens de commit claras e concisas, indicando as alterações realizadas.

2. **Organização e Estrutura do Código:**
   - Estrutura de pastas e arquivos bem definida, seguindo boas práticas de desenvolvimento.
   - Nomenclatura significativa para variáveis, funções e arquivos.
   - Utilização de padrões de projeto, quando aplicável.

3. **Qualidade do Código:**
   - Clareza, legibilidade e manutenibilidade do código.
   - Utilização de comentários explicativos para partes mais complexas do código.
   - Implementação de testes unitários para garantir a funcionalidade correta das principais partes do sistema.

4. **Resultado Funcional:**
   - Funcionamento adequado de todas as funcionalidades descritas.
   - Interface amigável e responsiva para a consulta de CEPs e visualização do histórico.

#### Tecnologias Obrigatórias:
- Angular (Front-end)
- NestJS (Back-end)
- SQL (Banco de dados)
- Testes unitários no Angular e NestJS
  
#### Prazo:
O desafio deve ser completado no prazo de 7 (sete) dias, a contar a partir do momento em que o repositório for enviado por e-mail.

#### Observação:
Em caso de ter uso de API externas, não precisa adicionar suas credenciais, apenas deixe um .env de exemplo e onde nossa equipe pode gerar as credenciais para teste. Só serão aceitas plataformas externas com teste gratuito.










```bash
$ npm install
```

## Running the app

```bash
# Run postgres
$ npm run postgres:up

# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test
```
