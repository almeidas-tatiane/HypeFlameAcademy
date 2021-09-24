$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Cursos.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Buscar cursos",
  "description": "Como um usuario nao logado\r\nEu quero buscar por cursos\r\nE escolher qual irei me matricular",
  "id": "buscar-cursos",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Deve mostrar o curso de \u003ccurso\u003e",
  "description": "",
  "id": "buscar-cursos;deve-mostrar-o-curso-de-\u003ccurso\u003e",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "que eu estou na pagina do HypeFlame Academy",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "busco por \u003ccurso\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "clico no botao MATRICULE-SE",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "verifico o nome do curso \u003ccurso\u003e e o valor \u003cvalor\u003e",
  "keyword": "Entao "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "buscar-cursos;deve-mostrar-o-curso-de-\u003ccurso\u003e;",
  "rows": [
    {
      "cells": [
        "curso",
        "valor"
      ],
      "line": 13,
      "id": "buscar-cursos;deve-mostrar-o-curso-de-\u003ccurso\u003e;;1"
    },
    {
      "cells": [
        "\"Android Development\"",
        "\"R$ 149,90\""
      ],
      "line": 14,
      "id": "buscar-cursos;deve-mostrar-o-curso-de-\u003ccurso\u003e;;2"
    },
    {
      "cells": [
        "\"English for Coding\"",
        "\"R$ 89,90\""
      ],
      "line": 15,
      "id": "buscar-cursos;deve-mostrar-o-curso-de-\u003ccurso\u003e;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1906698400,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Deve mostrar o curso de \"Android Development\"",
  "description": "",
  "id": "buscar-cursos;deve-mostrar-o-curso-de-\u003ccurso\u003e;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "que eu estou na pagina do HypeFlame Academy",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "busco por \"Android Development\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "clico no botao MATRICULE-SE",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "verifico o nome do curso \"Android Development\" e o valor \"R$ 149,90\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "Cursos.que_eu_estou_na_pagina_do_HypeFlame_Academy()"
});
formatter.result({
  "duration": 4159551100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Android Development",
      "offset": 11
    }
  ],
  "location": "Cursos.busco_por(String)"
});
formatter.result({
  "duration": 852126100,
  "status": "passed"
});
formatter.match({
  "location": "Cursos.clico_no_botÃ£o_MATRICULE_SE()"
});
formatter.result({
  "duration": 4034459400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Android Development",
      "offset": 26
    },
    {
      "val": "R$ 149,90",
      "offset": 58
    }
  ],
  "location": "Cursos.verifico_o_nome_do_curso_e_o_valor(String,String)"
});
formatter.result({
  "duration": 62576500,
  "status": "passed"
});
formatter.after({
  "duration": 678131900,
  "status": "passed"
});
formatter.before({
  "duration": 1107874600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Deve mostrar o curso de \"English for Coding\"",
  "description": "",
  "id": "buscar-cursos;deve-mostrar-o-curso-de-\u003ccurso\u003e;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 8,
  "name": "que eu estou na pagina do HypeFlame Academy",
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "busco por \"English for Coding\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 10,
  "name": "clico no botao MATRICULE-SE",
  "keyword": "E "
});
formatter.step({
  "line": 11,
  "name": "verifico o nome do curso \"English for Coding\" e o valor \"R$ 89,90\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "Cursos.que_eu_estou_na_pagina_do_HypeFlame_Academy()"
});
formatter.result({
  "duration": 4402255500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English for Coding",
      "offset": 11
    }
  ],
  "location": "Cursos.busco_por(String)"
});
formatter.result({
  "duration": 873778800,
  "status": "passed"
});
formatter.match({
  "location": "Cursos.clico_no_botÃ£o_MATRICULE_SE()"
});
formatter.result({
  "duration": 2970142800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English for Coding",
      "offset": 26
    },
    {
      "val": "R$ 89,90",
      "offset": 57
    }
  ],
  "location": "Cursos.verifico_o_nome_do_curso_e_o_valor(String,String)"
});
formatter.result({
  "duration": 66709100,
  "status": "passed"
});
formatter.after({
  "duration": 667189000,
  "status": "passed"
});
});