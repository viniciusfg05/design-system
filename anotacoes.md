## O que é um Design System?
  - É incluir elementos visuais que podemos aproveitar em diversar aplicaçóes da empresa
  - Ui kits - Consjuto de components que podemos aproveitar em algumas aplicações

## Criando um design system
  - [ ] Text: 
  - [ ] Heading:
  - [ ] Box ou Card:
  - [ ] Button: 
  - [ ] TextInput:
  - [ ] TextArea:
  - [ ] Checkbox:
  - [ ] Avatar:
  - [ ] MultiStep:

## Criando pacote de tokens
    Criando um 'package.json' em "\design-system\packages\tokens>"
    Name: package.json: Vamos detalar um nome da 'organizations' - "name": "@ignite-ui/tokens",

## Build do pacote com TSUP
    - Pacote npm i tsup -D - Processo de conversão dos tokens para JS que podemos importar pra outras aplicações
    - Script tsup 
        - "build": "tsup src/index.ts --format esm,cjs --dts" 
            * esm,cjs - ecmascript module.js e JS
            * --dts - Definiççaos de tipagem | Auxiliam outro pacotes que importarem a ter a iteligencia do TS
            * --watch - Fica monitorando qualquer alteração e salva