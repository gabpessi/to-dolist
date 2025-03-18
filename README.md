# Projeto Lista de Tarefas

Este projeto implementa uma aplicação de **Lista de Tarefas** onde o usuário pode adicionar, editar, marcar como concluída e excluir tarefas. As tarefas são armazenadas em um estado local e a aplicação é responsiva, adaptando-se a diferentes tamanhos de tela.

## Funcionalidades

- **Adicionar Tarefas**: O usuário pode inserir novas tarefas na lista.
- **Editar Tarefas**: As tarefas existentes podem ser editadas.
- **Marcar como Concluída**: O usuário pode marcar uma tarefa como concluída, o que aplica um estilo de risco e muda sua cor.
- **Excluir Tarefas**: O usuário pode excluir tarefas da lista.
- **Armazenamento Local**: O estado das tarefas (concluídas ou não) é armazenado no **LocalStorage**, o que garante que as mudanças sejam mantidas mesmo após o recarregamento da página.
- **Responsividade**: A interface da aplicação é responsiva, com a largura e o estilo dos itens da lista ajustados para diferentes tamanhos de tela (mobile, tablet, desktop).

## Tecnologias Usadas

- **React**: Biblioteca JavaScript para a construção da interface do usuário.
- **CSS**: Estilização dos componentes e criação de layouts responsivos.
- **LocalStorage**: Armazenamento local para salvar o estado das tarefas.

## Como Usar

### Pré-requisitos

Certifique-se de ter o **Node.js** e **npm** instalados. Se não tiver, você pode instalá-los em: [https://nodejs.org/](https://nodejs.org/)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/projeto-lista-tarefas.git
   
2. Navegue até o diretório do projeto:
   ```bash
   cd projeto-lista-tarefas
   
3. Instale as dependências
   ```bash
   npm install

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   
