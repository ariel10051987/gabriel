# omm-lqdc

Este projeto foi gerado com `gaw-cli` versão `12.0.8`.

- [omm-lqdc](#omm-lqdc)
  - [Comandos básicos](#comandos-básicos)
    - [Servir Aplicação](#servir-aplicação)
    - [Geração de código](#geração-de-código)
    - [Build](#build)
    - [Executando testes unitários](#executando-testes-unitários)
    - [Executando testes end-to-end](#executando-testes-end-to-end)
  - [Componentes Visuais](#componentes-visuais)
  - [Acessibilidade](#acessibilidade)
  - [Configuração exemplo do proxy reverso](#configuração-exemplo-do-proxy-reverso)
  - [Endereço para acessar diretamente a aplicação no navegador](#endereço-para-acessar-diretamente-a-aplicação-no-navegador)
  - [Executar aplicação na Plataforma](#executar-aplicação-na-plataforma)
  - [Ajuda adicional](#ajuda-adicional)

## Comandos básicos

### Servir Aplicação

Execute `npm run serve-omm-lqdc` para servir a aplicação localmente.

### Geração de código

Execute `ng generate component nome-componente` para gerar um novo componente. Você também pode user `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Execute `npm run build` para construir o projeto. Os artefatos ficarão armazenados no diretório `www/`.

### Executando testes unitários

Execute `npm test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

### Executando testes end-to-end

Execute `npm run e2e` para executar os testes end-to-end via [Protractor](http://www.protractortest.org/).

## Componentes Visuais

A biblioteca de componentes de interface utilizada é o [PrimeNG](https://primefaces.org/primeng/).

## Acessibilidade

É de grande importância que o projeto possua elementos acessíveis a todos. Segue abaixo links úteis:

- [Artigo da Mozilla reunindo tudo sobre acessibilidade](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
- [Inspetor de Acessibilidade do Mozilla Firefox](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector)
- [Artigo da A2C sobre acessibilidade na WEB](https://www.a2c.com.br/novidade/acessibilidade-web-tudo-o-que-voce-precisa-saber/)
- [Núcleo de Acessibilidade e Usabilidade da UNIRIO](http://nau.uniriotec.br/index.php)

## Configuração exemplo do `gaw-reverse`

> As orientações completas de uso do `gaw-reverse` se encontram neste link: <https://fontes.intranet.bb.com.br/gaw/publico/gaw-reverse/-/blob/master/README.md>

- `gaw-reverse-conf.json`

```json
{
  "version": 1,
  "localhost.desenv.bb.com.br": {
    "rules": {
      "/estatico/omm-lqdc/": "http://localhost:4200/estatico/omm-lqdc/",
      ...
    },
    "default": "https://plataforma.desenv.bb.com.br"
  },
  "localhost.estatico.bb.com.br": {
    "rules": {
      "/omm-lqdc/": "http://localhost:4200/estatico/omm-lqdc/",
      ...
    },
    "default": "https://desenv.estatico.bb.com.br"
  },
  "noProxy": "127.0.0.1,localhost",
  "uuid": "xxxxxx-xxxxxx-xxxxxx-xxxxxx-xxxxxx"
}
```

## Endereço Local SSO:

<https://login.desenv.bb.com.br/sso/XUI/?goto=https://localhost.desenv.bb.com.br/gaw/v3#login/>

## Endereço para acessar diretamente a aplicação no navegador

- <https://localhost.desenv.bb.com.br/estatico/omm-lqdc/>

## Executar aplicação na Plataforma

Para iniciar a aplicação na área transacional da Plataforma através do console JavaScript, insira o seguinte comando no navegador (F12 -> console):

```js
iniciarAplicacaoNaAreaTransacional({
  nome: 'omm-lqdc',
  urlInicial: '/estatico/omm-lqdc/'
});

//iniciar aplicação na máquina local de desenvolvimento
iniciarAplicacaoNaAreaTransacional({
  nome: 'omm-lqdc',
  urlInicial: '/estatico/omm-lqdc/#/eventos-carteira'
});

```

## Ajuda adicional

Para obter mais ajuda sobre o Angular CLI use `ng help` ou verifique [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

A documentaçao do GAW se encontra em <https://estatico.bb.com.br/gaw-docs>.

O suporte ao desenvolvedor é fornecido através da comunidade do connections: <https://connections.bb.com.br/communities/service/html/communitystart?communityUuid=af93a57a-67ac-4001-8814-6a195b8e2d01> e também pelo RocketChat em <https://rocketchat.nuvem.bb.com.br/channel/desenvolvimento_web>
