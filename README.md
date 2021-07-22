# Para Rodar o Projeto:
1 - Faça o Clone da aplicação;
2 - Abra a aplicação no terminal;
3 - Digite o Comando npm i ou npm install para baixar as dependências do projeto;
4 - Após baixar as dependências digite no terminal npm start para rodar o projeto e abra o seu navegador na rota (http://localhost:3000/);
5 - Pronto, basta utilizar o mesmo. Obrigado!

## Funcionalidades do Projeto

### Resumo
 Projeto no modelo SPA(Single Page Application), aonde criei um sistema aonde é feito compra e lançado para o carrinho com sistema de checkout, registro do usuário, cadastro de email para receber promoções e direcionamento de entrega, no qual todos estão sendo armazenados no localstorage para cumprir com os requisítos do desafio.


### Especificações mais detalhadas
O usuário ao entrar na aplicação tera acesso a página Home aonde podera clicar no botão para adicionar os produtos no carrinho. Foi criado uma animação quando se entra com o mouse no container promocional ou quando se clica na Parte de BlackFriday a fim de proporcionar ao usuário uma melhor experiência e satisfaçao visual. Os demais produtos estao sendo rendenizados através do fetch API, aonde todos os produtos estão sendo adicionados ao carrinho ao clicar no botão Buy. No canto direito da tela foi colocado um botão para ser direcionado para a página de cadastramento de promoções.

Já na página de cadastramento de promoções foi adicionado animação para tentar levar ao usuário uma boa experiência de cadastro, tentando mostrar na animação o que será enviado ao mesmo por e-mail.
Ao fazer o cadastro para receber as promoções, esses dados estão sendo armazenados no localstorage.


No Header o Icone do Hiring Coders faz com que o usuário volte para a página Home. Voltando para a paǵina Home já no carrinho o usuário terá acesso ao mesmo na parte inicial superior da aplicação. Aonde até então não esta funcionado no Header o Login e Register do usuário. Porém... o carrinho está todo funcional, sendo assim, mostrando os items do carrinho ao clicar no icone e removendo os items do carrino ao clicar no botão remover dentro do carrinho, calculos dos valores dos produtos com frete taxa de frete por produto e calculo total. Foi criado dentro do carrinho um botão para redirecionar para a página de Checkout aonde o usuário terá que seguir 3 etapas: confirmar suas compras, registrar seus dados, confirmar os dados da entrega. 

Para confirmar seus dados basta apenas dar um único click no botão confirmar a baixo dos items do carrinho. O usuário poderá também cancelar a compra e voltar para a página Home da aplicação removendo os items do carrinho ou clicando no Icone do Hiring Coders.

Para fazer o registro basta apenas inserir seus dados conforme mencionado na página seguindo o modelo exigido no placeholder. Após completar todos os campos conforme o exigido, basta apenas clicar em enviar para salvar os dados no localstorage.

Os dados salvos no localstorage, caso o usuário for mandar a compra para o mesmo local, basta simplesmente confirmar os dados no formulário de entrega aonde já automaticamente estará preenchido com os dados do usuário, caso contrário, o usuário poderá apagar os dados e submeter o formulário novamente com os dados para a entrega do produto. Aṕos confirmar os dados o usuário tera acesso ao botão Concluir Compra. 

Clickando no botão concluir compra o usuário irá salvar seus dados do carrinho no localstorage, aonde será alertado ao usuário uma mensagem de alerta positivo e será redirecionado após 5 segundos para a página inicial com o carrinho vazio.




#Create ReactApp ReadME Abaixo
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
