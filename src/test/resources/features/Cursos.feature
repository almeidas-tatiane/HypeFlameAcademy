#language: pt
Funcionalidade: Buscar cursos
  Como um usuario nao logado
  Eu quero buscar por cursos
  E escolher qual irei me matricular

  Esquema do Cenario: Deve mostrar o curso de <curso>
    Dado que eu estou na pagina do HypeFlame Academy
    Quando busco por <curso>
    E clico no botao MATRICULE-SE
    Entao verifico o nome do curso <curso> e o valor <valor>
    Exemplos:
    |curso|valor|
    | "Android Development" | "R$ 149,90" |
    | "English for Coding" | "R$ 89,90" |


