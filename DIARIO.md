# Diário de estudo — Módulo 1

## Entrega 1 — Estrutura HTML

**Prática:** criei a estrutura inicial de um portfólio pessoal.

**Conceitos aplicados:**

- `<!DOCTYPE html>`, `html`, `head` e `body`;
- metadados com `meta charset`, `viewport` e `description`;
- estrutura semântica com `header`, `nav`, `main`, `section` e `footer`;
- navegação interna com links para IDs.

## Entrega 2 — CSS, Box Model e Flexbox

**Prática:** transformei a estrutura em uma página com cabeçalho, cartões e menu.

**Conceitos aplicados:**

- CSS externo conectado com `link`;
- Box Model com `margin`, `padding`, `border-radius` e `box-shadow`;
- menu alinhado com Flexbox;
- tags de tecnologias com `display: flex`, `gap` e `flex-wrap`;
- interação visual com `:hover`.

**Próximo passo:** adaptar o layout para telas pequenas usando uma media query.

## Entrega 3 — Responsividade

**Prática:** testei a página em uma largura de tela pequena usando as ferramentas do navegador.

**Conceitos aplicados:**

- media query com `@media (max-width: 600px)`;
- mudança de direção do Flexbox com `flex-direction: column`;
- validação visual de que não há rolagem horizontal.

**Próximo passo:** iniciar o repositório Git local e criar o primeiro commit.

## Entrega 4 — Git e GitHub

**Prática:** iniciei um repositório Git local, criei o primeiro commit, publiquei o projeto no GitHub e integrei uma alteração usando branch e Pull Request.

**Comandos praticados:**

- `git init`, `git status`, `git add` e `git commit`;
- `git branch`, `git switch -c` e `git branch -d`;
- `git remote add`, `git push` e `git pull`.

## Entrega 5 — Bootstrap

**Prática:** criei uma página independente com Bootstrap via CDN.

**Conceitos aplicados:**

- `container`, `row` e colunas responsivas;
- componentes `navbar`, `card`, `badge` e `button`;
- classes utilitárias de espaçamento, sombras e tipografia;
- teste do grid em tela pequena: três colunas passam a uma coluna.

**Resultado:** Módulo 1 praticado com HTML, CSS, Flexbox, responsividade, Git, GitHub, Pull Request e Bootstrap.

# Diário de estudo — Módulo 2

## Entrega 1 — Fundamentos de JavaScript

**Prática:** criei um laboratório JavaScript separado do portfólio e gerei uma mensagem após o clique em um botão.

**Conceitos aplicados:**

- constantes com `const`;
- arrays;
- funções e `return`;
- seleção de elementos com `querySelector`;
- eventos de clique com `addEventListener`;
- alteração de texto com `textContent`.

**Próximo passo:** listar as tecnologias na tela e usar decisão condicional para exibir o progresso.

## Entrega 2 — Decisão, arrays e repetição

**Prática:** mostrei uma lista de tecnologias após um clique e exibi uma mensagem de progresso conforme a quantidade de itens.

**Conceitos aplicados:**

- tamanho de array com `length`;
- decisão com operador ternário;
- repetição com `for...of`;
- criação de elementos com `createElement`;
- inclusão no documento com `appendChild`.

**Validação manual:** adicionei `Git` ao array e alterei a condição para quatro tecnologias; a lista e a mensagem foram atualizadas como esperado.

## Entrega 3 — Primeiro projeto React

**Prática:** criei uma aplicação React com Vite e substituí a tela padrão por um laboratório de tecnologias.

**Conceitos aplicados:**

- estrutura de projeto com Node.js, npm e Vite;
- componente principal `App`;
- estado com `useState`;
- eventos `onClick`;
- renderização condicional;
- componente separado `TechnologyList`;
- importação, exportação e props;
- verificação com ESLint e build de produção do Vite.

## Entrega 4 — Rotas com React Router

**Prática:** adicionei navegação entre Início, Tecnologias e Sobre sem recarregar a aplicação.

**Conceitos aplicados:**

- `BrowserRouter` como contexto de navegação;
- `Routes` e `Route` para associar URL e componente;
- `NavLink` para links e indicação visual de rota ativa;
- separação entre as páginas inicial, tecnologias e sobre.

**Validação:** testei as três rotas no navegador; lint e build de produção passaram sem erros.

## Entrega 5 — Requisição de dados

**Prática:** criei a rota Perfil e consultei dados públicos do GitHub.

**Conceitos aplicados:**

- busca assíncrona com `fetch`;
- `useEffect` para disparar a busca quando o componente é exibido;
- estados de carregamento, sucesso e erro;
- dados de API renderizados na interface;
- link externo com `target="_blank"` e `rel="noreferrer"`.

**Validação:** perfil exibido no navegador; lint e build de produção passaram sem erros.

## Entrega 6 — PrimeReact

**Prática:** adicionei uma página com componentes prontos da biblioteca PrimeReact.

**Conceitos aplicados:**

- instalação de dependências com npm;
- tema e ícones importados no ponto de entrada da aplicação;
- componentes `Card`, `Button` e `Tag`;
- estado React atualizado a partir de um componente de biblioteca;
- rota exclusiva para a demonstração.

**Validação:** interação testada no navegador; lint e build de produção passaram sem erros.

# Diário de estudo — Módulo 3

## Entrega 1 — API HTTP com Node.js e Express

**Prática:** criei uma API independente na pasta `api` e implementei a rota `GET /health`.

**Conceitos aplicados:**

- Node.js e `npm` para organizar dependências e comandos;
- Express para criar o servidor e as rotas;
- `cors` para permitir a futura comunicação com o front-end;
- `express.json()` para receber dados JSON;
- separação entre `app.js` (regras da aplicação) e `server.js` (inicialização do servidor);
- teste automatizado com `node:test` e Supertest.

**Validação:** o teste da rota de saúde passou com 1 sucesso e 0 falhas.

## Entrega 2 — Banco de dados com Sequelize e SQLite

**Prática:** modelei a entidade `Tecnologia` e criei a rota `GET /tecnologias` para consultar dados persistidos.

**Conceitos aplicados:**

- SQLite como banco de dados local;
- Sequelize para declarar modelos com tipos e regras;
- ambiente de teste com banco em memória (`:memory:`);
- `sequelize.sync()` para criar as tabelas no banco local;
- consulta ordenada com `findAll`;
- tratamento centralizado de erro no Express.

**Validação:** a suíte automatizada passou com 2 testes aprovados e 0 falhas.

## Entrega 3 — Cadastro e filtros de tecnologias

**Prática:** adicionei as rotas para cadastrar tecnologias e filtrar a listagem por categoria.

**Conceitos aplicados:**

- rota `POST /tecnologias`;
- código HTTP `201 Created` para um cadastro bem-sucedido;
- validação de campos obrigatórios e código `400 Bad Request`;
- query string, como `?categoria=Back-end`;
- filtro do Sequelize com `where`;
- `beforeEach` para que cada teste possua um banco isolado.

**Validação:** 4 testes aprovados e 0 falhas.

## Entrega 4 — Usuários e relacionamento

**Prática:** criei o modelo `Usuario`, o cadastro em `POST /usuarios` e o relacionamento entre usuários e tecnologias.

**Conceitos aplicados:**

- modelo com campos obrigatórios e e-mail único;
- hash de senha com `bcryptjs` e hook `beforeCreate`;
- resposta segura: a senha não é devolvida pela API;
- relacionamento um-para-muitos com `hasMany` e `belongsTo`;
- chave estrangeira `usuarioId` na tabela de tecnologias.

**Validação:** 5 testes aprovados e 0 falhas, incluindo confirmação de que a senha foi salva como hash.

## Entrega 5 — Autenticação com JWT

**Prática:** implementei login e uma rota protegida para consultar tecnologias do usuário autenticado.

**Conceitos aplicados:**

- comparação segura de senha com `bcrypt.compare`;
- criação de token JWT com identificador do usuário e expiração de uma hora;
- middleware para ler o cabeçalho `Authorization: Bearer <token>`;
- retorno `401 Unauthorized` quando o token não existe, é inválido ou expirou;
- rota protegida `GET /minhas-tecnologias` filtrada pelo `usuarioId` do token;
- variável privada `JWT_SECRET` no arquivo `.env`, fora do Git.

**Validação:** 8 testes aprovados e 0 falhas, cobrindo login, bloqueio sem token e acesso autorizado.

# Diário de estudo — Módulo 4

## Entrega 1 — Teste de back-end com Jest

**Prática:** instalei e configurei Jest para testar a API sem interferir na suíte de integração já existente.

**Conceitos aplicados:**

- configuração de ambiente `node` no Jest;
- padrão exclusivo `*.jest.test.js` para separar as suítes;
- `describe`, `test`, `expect` e `toEqual`;
- teste de integração da rota `GET /health` com Supertest;
- execução serial com `--runInBand`.

**Validação:** 1 suíte Jest aprovada, com 1 teste aprovado.

## Entrega 2 — Teste de front-end com Cypress

**Prática:** configurei Cypress no projeto React e automatizei o fluxo de navegação e interação da página de tecnologias.

**Conceitos aplicados:**

- configuração de teste ponta a ponta com URL base do Vite;
- navegação simulada pelo navegador com `cy.visit` e `cy.contains`;
- verificação de URL, textos e elementos visíveis;
- interação com botões e validação da atualização de estado React;
- arquivos de suporte globais do Cypress.

**Validação:** 1 especificação Cypress aprovada, com 1 teste aprovado e 0 falhas.

