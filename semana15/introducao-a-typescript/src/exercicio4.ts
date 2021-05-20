//a) Como se trata de somente um arquivo, eu rodaria no terminal o comando tsc nomeDoArquivo.ts, o que geraria o arquivo .js correspondente.

//b) Com o arquivo dentro de uma pasta src, deve-se atribuir tal pasta à propriedade rootDir do tsconfig.json (criado por meio do comando tsc --init), bem como a pasta build à propriedade outDir, e rodar o comando tsc no terminal, o que gerará a pasta build e, dentro dela, o index.js com o código correspondente em JavaScript.

//c) O processo explanado no item B pode ser usado para vários arquivos de uma só vez, desde que todos estejam dentro da pasta src.

//d) Partindo do arquivo que criei e já editei, aparentemente, a única diferença entre ele e o arquivo da aula é a propriedade esModuleInterop, inclusa no arquivo que criei e cujo objetivo é permitir imports de outros arquivos, funções e variáveis. Com exceção disso, não vejo nenhuma diferença. As propriedades que mais chamam minha atenção são aquelas que, provavelmente, serão as mais utilizadas: target, module, sourceMap, outDir, rootDir, removeComments, noImplicitAny e esModuleInterop. 

type pokemon = {
	name: string,
        types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}