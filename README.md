# CompromissoAPP - Angularjs
Repositório criado como teste de aprendizado do AngularJS e MongoDB.

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
```python    
    * Acesse o `Java Build Path` do projeto e na aba `Libraries` adicone a biblioteca do Wildfly.
```
<blockquote class="imgur-embed-pub" lang="en" data-id="a/OHa50"><a href="//imgur.com/OHa50"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

## Começando
* No cliente, abra o `terminal` na raiz da pasta `cliente` e execute o comando `gulp start-dev`.
* No servidor, 'starta' o servidor.
