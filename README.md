README — Projeto de Cadastro MVC (HTML, CSS e JavaScript)

Este projeto demonstra a implementação do padrão MVC (Model–View–Controller) usando apenas HTML, CSS e JavaScript puro, sem bibliotecas externas.
O objetivo é mostrar como separar corretamente as responsabilidades entre as três camadas e manter um código organizado, escalável e fácil de entender.

O site permite cadastrar usuários (nome e e-mail) e exibir/remover esses usuários na lista, tudo seguindo a arquitetura MVC.

Como o MVC funciona neste projeto

Apesar de simples, este projeto mostra exatamente como o MVC deve operar dentro de um ambiente web:

Model – Camada de Dados

O Model é responsável por armazenar, gerenciar e fornecer acesso aos dados.
Aqui, temos uma lista chamada usuarios e funções que lidam com ela:

modelAdicionar(nome, email) — adiciona um novo usuário à lista.

modelRemover(index) — remove um usuário com base em sua posição.

modelObterTodos() — retorna a lista atual de usuários.

O Model não sabe nada sobre HTML, interface ou eventos.
Seu único trabalho é garantir que os dados estejam corretos e atualizados.

View – Camada de Interface

A View cuida exclusivamente da exibição das informações na tela.
Ela pega os dados que o Controller envia e transforma em HTML visível ao usuário.

Funções usadas:

viewMostrar(usuarios) — cria os elementos visuais da lista (nome, email, botão excluir).

viewLimparCampos() — apenas limpa os inputs após o cadastro.

A View não manipula dados diretamente.
Ela só mostra e atualiza aquilo que o Model fornece por meio do Controller.

Controller – Camada de Controle

O Controller é o intermediário entre o usuário, o Model e a View.
Ele recebe ações do usuário (como clicar em “Cadastrar”), envia comandos ao Model e pede para a View atualizar a interface.

Funções usadas:

controllerAdicionar()

lê os valores digitados pelo usuário

valida os campos

manda o Model salvar (modelAdicionar)

e por fim atualiza a View (viewMostrar)

controllerRemover(index)

solicita ao Model que remova o usuário

e manda a View atualizar a lista

No fim do arquivo, o Controller também inicializa a Interface:
