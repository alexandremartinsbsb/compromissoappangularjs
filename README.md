# CompromissoAPP - Angularjs
Repositório criado como start para iniciar um projeto, utilizando como principais tecnologias, AngularJS e MongoDB.

* **Material Design** - É uma linguagem de design desenvolvida pela Google.

* **AngularJS** - Um framework JavaScript open-source, mantido pelo Google, que auxilia na execução de single-page applications.

* **Eclipse** - IDE para desenvolvimento Java.

* **MongoDB** - Banco NoSQL baseado em documento sem transações e sem joins. Quando um aplicativo utiliza esse tipo de banco de dados, o resultado que se tem são consultas muito simples. Elas são mais fáceis de escrever.

* **Node.js** - Plataforma para desenvolvimento de aplicações server-side utilizando JavaScript.

* **Bower** - Gerenciamento de dependências client-side.

* **Gulp** - Uma ferramenta de automação de tarefas feita em JavaScript e rodando em cima do Node.js.

* **Sass** - Uma poderosa extensão da linguagem CSS que permite uma escrita profissional e completa escrevendo nossas folhas de estilo de forma muito mais dinâmica e produtiva.

* **Maven** - Uma ferramenta de automação de compilação utilizada primariamente em projetos Java.

* **wildfly-10** - Servidor de aplicação JEE Open Source da comunidade JBoss, permiti a implantação("deploy") de aplicações que sigam os padrões JEE.

## Ambiente
Abaixo segue o passo a passo para a preparação do ambiente.

* **Eclipse**
```python
    * Baixe o eclipse no link: `https://www.eclipse.org/downloads/eclipse-packages/`.
    * Acesse o `Marketplace` e instale o seguinte plugin: `JBoss`.
```

* **MongoDB**
```python
    * Siga as instruções no link: `https://docs.mongodb.com/manual/administration/install-community/`.
```

* **Node.js**
```python
    * Siga as instruções no link: `https://nodejs.org/`.
```

* **Gulp**
```python
    * Execute o seguinte comando no terminal `npm install gulp`.
```

* **Bower**
```python
    * Execute o seguinte comando no terminal `$ npm install -g bower`.
```


## Instalação
Abaixo segue o passo a passo do modo de instalação bem simples.

* **Cliente**
```python
    * Primeiramente clone o projeto: `git clone https://github.com/alexandremartinsbsb/compromissoappangularjs.git`.
    * Abra o `terminal` na raiz da pasta `cliente` e execute o comando `npm install`.
    * Com o `terminal` aberto na raiz da pasta `cliente` e execute o comando `bower install`.
    * Para testar a instalação cliente, com o `terminal` aberto na raiz da pasta `cliente` e execute o comando `gulp start-dev`.
```

* **Servidor**

* Java Build Path
```python
    * Acesse o `Java Build Path` do projeto e na aba `Libraries` adicone a biblioteca do Wildfly.
```
* [Como fazer](https://i.imgur.com/sjtUnMZ.gif)

* Standalone
```python
    * É necessario configurar o `standalone.xml` do Wildfly, devido as politicas de segurança dos browsers.
    Insira as seguintes configurações:
    
    <host name="default-host" alias="localhost">
      <location name="/" handler="welcome-content"/>
      <filter-ref name="server-header"/>
      <filter-ref name="x-powered-by-header"/>
      <filter-ref name="Access-Control-Allow-Origin"/>
      <filter-ref name="Access-Control-Allow-Methods"/>
      <filter-ref name="Access-Control-Allow-Headers"/>
      <filter-ref name="Access-Control-Allow-Credentials"/>
      <filter-ref name="Access-Control-Max-Age"/>
    </host>
    
    
    <filters>
      <response-header name="server-header" header-name="Server" header-value="WildFly/10"/>
      <response-header name="x-powered-by-header" header-name="X-Powered-By" header-value="Undertow/1"/>
      <response-header name="Access-Control-Allow-Origin" header-name="Access-Control-Allow-Origin" header-value="*"/>
      <response-header name="Access-Control-Allow-Methods" header-name="Access-Control-Allow-Methods" header-value="GET, POST, OPTIONS, PUT, DELETE"/>
      <response-header name="Access-Control-Allow-Headers" header-name="Access-Control-Allow-Headers" header-value="accept, authorization, content-type, x-requested-with"/>
      <response-header name="Access-Control-Allow-Credentials" header-name="Access-Control-Allow-Credentials" header-value="true"/>
      <response-header name="Access-Control-Max-Age" header-name="Access-Control-Max-Age" header-value="1"/>
    </filters>
```
* [Como fazer](https://i.imgur.com/HxI1xig.gif)

## Começando
* No cliente, abra o `terminal` na raiz da pasta `cliente` e execute o comando `gulp start-dev` para ambiente de desenvolvimento e o comando `gulp` para ambiente de produção.
* No servidor, 'starta' o servidor.
