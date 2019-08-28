function soletrar(texto:string) {
  return texto.split('').join('-');
}

const texto = 'texto';
const soletrado = soletrar(texto);
console.log(soletrado);




function soma(a:number, b:number) {
  return a + b;
}

const resultado = soma(1, 5);
console.log(resultado);

interface analiseDeTexto {
  primeiraLetra:string,
  comprimento:number
};

function analisarTexto(texto:string):analiseDeTexto {
  return {
    primeiraLetra: texto[0],
    comprimento: texto.length,
  }
}

const analise = analisarTexto(texto);
