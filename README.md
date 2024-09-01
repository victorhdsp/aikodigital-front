# Aiko digital front

> Este projeto é um teste técnico para uma vaga de front-end pleno (vue) da Aiko digital, onde foi pedido a criação de um "mini sistema" que consome um "banco de dados" em json.

### Ajustes e melhorias

- [x]  Exibir no mapa os equipamentos nas suas posições mais recentes.
- [x]  Visualizar o estado mais recente dos equipamentos.
    - [x]  Abrir um popup do equipamento como os cards do “aside”.
- [x]  Permitir a visualização do histórico de estados de um equipamento específico ao clicar sobre o equipamento.
    - [x]  Ordenar a visualização dos últimos para os primeiros.
- [x]  Filtrar as visualizações por estado atual ou modelo de equipamento.
- [x]  Pesquisar por dados de um equipamento especifico.
- [x]  Calcular a produtividade do equipamento.
    - consiste em uma relação das horas produtivas (em estado "Operando") em relação ao total de horas. Exemplo se um equipamento teve 18 horas operando no dia a formula deve ser `18 / 24 * 100 = 75% de produtividade`.
- [x]  Calcular o ganho do equipamento com base no valor recebido por hora informado no Modelo de Equipamento.
    - Exemplo se um modelo de equipamento gera 100 por hora em operando e -20 em manutenção, então se esse equipamento ficou 10 horas em operação e 4 em manutenção ele gerou `10 * 100 + 4 * -20 = 920`.
- [x]  Diferenciar visualmente os equipamentos por modelo de equipamento na visualização do mapa.
- [x]  Visualizar o histórico de posições de um equipamento, mostrando o trajeto realizado por ele.
    - [ ]  Escala de opacidade do ultimo para o primeiro no mapa de status.
- [ ] Pagina que acompanha o veiculo com uma lista dos seus devidos equipamentos.
- [ ] Testes de integração onde pudesse ser testando as funcionalidades entre componentes.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você instalou a versão `v20.15.1` ou maior do `node.js`
- Você instalou a versão `10.7.0+` ou maior do `npm`

## 🚀 Instalando

Para instalar o pixelite, siga estas etapas:

Linux e macOS:

```
$ npm install
$ npm run dev
```

## ☕ Usando

A aplicação tem 2 páginas, uma onde é possivel ver o mapa com todos os equipamentos e uma página de equipamento onde é possivel ver as posições do equipamento bem como seus status, é possivel entrar nessa pagina pelos cards no menu lateral ou clicando nele no mapa.