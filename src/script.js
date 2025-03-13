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
    let startJourney = false;

    console.log("Seu nome é: " + nameHero +
      ", seu nível atual é: " + nivelAtual + ", quantidade de XP atual é: " + xpAtual + ".");

    rl.question('Deseja iniciar sua jornada, a busca pela categoria de FERRO? (sim/não) ', (answer) => {
      startJourney = answer.toLowerCase() === 'sim';

    if (startJourney) {
      console.log(nameHero, "Você irá uppar agora!");
      console.log(nameHero, "Primeiro objetivo alcançar categoria FERRO! Boa jornada!")

      do {
        uppar += 100;
        console.log("Seu XP atual:", uppar);
      } while (uppar < 1000);

      xpAtual = uppar; 
      nivelAtual = 10; 
      category = "FERRO"; 

      console.log("Parabéns, " + nameHero + "! Agora você está no nível " + nivelAtual + 
        " com " + xpAtual + " XP, categoria de " + category);
    } else {
      console.log("Jornada não iniciada. Até a próxima! ❌");

    }

    rl.close(); 
  });

});
