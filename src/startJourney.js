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

    console.log("\nSeu nome é: " + nameHero +
      ", seu nível atual é: " + nivelAtual + ", quantidade de XP atual é: " + xpAtual + ".");

    rl.question('\nDeseja iniciar sua jornada, a busca pela categoria de FERRO? (sim/não) ', (answer) => {
      startJourney = answer.toLowerCase() === 'sim';

      if (startJourney) {
        console.log("\n" + nameHero + ", Você irá uppar agora!");
        console.log("Primeiro objetivo: alcançar categoria FERRO! Boa jornada!\n");

        do {
          uppar += 100;
          console.log("Seu XP atual:", uppar);
        } while (uppar < 1000);

        xpAtual = uppar; 
        nivelAtual = 10; 
        category = "FERRO"; 

        console.log("\n🎉 Parabéns, " + nameHero + "! Agora você está no nível " + nivelAtual + 
          " com " + xpAtual + " XP, categoria de " + category + "!\n");

        console.log("🔰 Você concluiu a jornada de FERRO! Agora olhe suas próximas jornadas, rumo a RADIANTE! 🌟\n");

        // Exibir os próximos níveis e categorias
        switch(category) {
          case "FERRO":
            console.log("🛡️ Nível 10\n📊 XP: 1.000\n🏅 Categoria: FERRO\n");
           

          case "BRONZE":
            console.log("🥉 Nível 11 a 20\n📊 XP: 1.001 - 2.000\n🏅 Categoria: BRONZE\n");
           

          case "PRATA":
            console.log("🥈 Nível 21 a 50\n📊 XP: 2.001 - 5.000\n🏅 Categoria: PRATA\n");
           

          case "OURO":
            console.log("🥇 Nível 51 a 70\n📊 XP: 5.001 - 7.000\n🏅 Categoria: OURO\n");
           

          case "PLATINA":
            console.log("💎 Nível 71 a 80\n📊 XP: 7.001 - 8.000\n🏅 Categoria: PLATINA\n");
           

          case "ASCENDENTE":
            console.log("🚀 Nível 81 a 90\n📊 XP: 8.001 - 9.000\n🏅 Categoria: ASCENDENTE\n");
           

          case "IMORTAL":
            console.log("👑 Nível 91 a 100\n📊 XP: 9.001 - 10.000\n🏅 Categoria: IMORTAL\n");
           

          case "RADIANTE":
            console.log("🌟 Nível 101\n📊 XP: 10.001+\n🏅 Categoria: RADIANTE\n");
           
        }

      } else {
        console.log("\nJornada não iniciada. Até a próxima! ❌");
      }

      rl.close(); 
    });
});
