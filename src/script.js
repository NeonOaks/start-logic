const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Qual seu nome de Herói? ', (nameHero) => {
  let xpAtual = 100; 
  let nivelAtual = 1;
  let uppar = xpAtual; 
  let category = ""; 

  console.log("Seu nome é: " + nameHero +
    ", seu nível atual é: " + nivelAtual + ", quantidade de XP atual é: " + xpAtual + ".");

  if (xpAtual < 1000) {
    console.log(nameHero, "Você irá uppar agora!");
    console.log(nameHero, "Primeiro objetivo alcançar categoria FERRO! Boa jornada!")

    do {
      uppar += 100;
      console.log("Seu XP atual:", uppar);
    } while (uppar < 1000);

    xpAtual = uppar; 
    nivelAtual = 10; 
    category = "FERRO"; 
  } else {
    nivelAtual = 10; 
    category = "FERRO"; 
  }

  console.log("Parabéns, " + nameHero + "! Agora você está no nível " + nivelAtual + 
    " com " + xpAtual + " XP, categoria de " + category);

  rl.close(); 
});
