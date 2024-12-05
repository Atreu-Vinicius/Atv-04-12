Este exercício tem como objetivo praticar o uso de React Elements e JSX, além de trabalhar com componentes e props em React. Durante a execução, você criará um layout com containers e usará React.Fragment para manipular a renderização de componentes sem adicionar nós extras no DOM. Além disso, o exercício envolve a criação de componentes reutilizáveis que recebem props para exibir informações dinâmicas.

Passos do Exercício
1. Criação do Workspace
O exercício começa com a criação de um novo projeto React utilizando o comando npx create-react-app. Esse comando cria a estrutura inicial do projeto, que inclui todos os arquivos necessários para um projeto React básico. Após a criação, o projeto será iniciado com o comando npm start.

2. Instalação de Dependências Adicionais
Caso seja necessário utilizar bibliotecas extras, como a prop-types (para validação de props nos componentes), o comando npm install prop-types é utilizado para instalá-las. A biblioteca prop-types é importante para garantir que os tipos de dados passados como props estejam corretos.

3. Estruturação do Layout com Containers e Componentes
Cabeçalho (Header): O primeiro passo é remover o conteúdo padrão de App.js e criar um layout com dois containers principais:

Um para o cabeçalho, que irá exibir o título do projeto.
Outro para a seção de tarefas.
Componentes: Dentro do cabeçalho, você criará um componente chamado Header, que será responsável apenas pelo título do projeto. Esse componente será importado e utilizado no arquivo App.js.

TaskContainer: A seção de tarefas será controlada pelo componente TaskContainer, que será responsável por renderizar uma lista de tarefas. Esse componente será criado dentro de um diretório chamado components para manter a estrutura organizada.

4. Utilização de React Fragment e Elementos Aninhados
Dentro do componente TaskContainer, será utilizado o React.Fragment para envolver a lista de tarefas. Isso permite que você agrupe os elementos JSX sem adicionar um nó extra no DOM. A utilização de React.Fragment é importante para evitar a criação de elementos desnecessários que podem interferir na performance do aplicativo.

Além disso, a lista de tarefas será criada diretamente no código como um array de objetos contendo título e descrição. Esses objetos serão representados como elementos JSX, como div, dentro do React.Fragment.

5. Criação e Renderização de Componentes com Props
Componente Task: Será criado um novo componente chamado Task, que recebe props para renderizar informações dinâmicas sobre cada tarefa, como título e descrição. O componente irá exibir essas informações dentro de elementos HTML como <h3> e <p>. O uso de PropTypes garante que as props title e description sejam do tipo string e sejam obrigatórias.

Atualização do TaskContainer: Em vez de renderizar diretamente as tarefas no componente TaskContainer, o componente será atualizado para utilizar o componente Task. O TaskContainer agora passará as props para o componente Task e mapeará a lista de tarefas.

6. Mapeamento das Tarefas
O componente TaskContainer utilizará o método .map() para iterar sobre a lista de tarefas e renderizar um componente Task para cada item da lista. Cada Task será recebida com um key único (a chave da tarefa) e as props title e description.

Conclusão