#language: pt
Funcionalidade: Buscar cursos
  Como um usuario nao logado
  Eu quero buscar por cursos
  E escolher qual irei me matricular

  Cenario: Deve mostrar o curso de "Android"
    Dado que eu estou na pagina do HypeFlame Academy
    Quando busco por "Android"
    E clico no botao MATRICULE-SE
    Entao verifico o nome do curso "Android Development" e o valor "R$ 149,90"
