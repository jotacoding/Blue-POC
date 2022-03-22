// //Comando para funcionamento do programa
const prompt = require(`prompt-sync`)();
const figlet = require("figlet");
const colors = require("colors");
console.clear();

do {
  //Variaveis
  let numRod = 0;
  let iaVitorias = 0;
  let userVitorias = 0;
  let iaEsc;
  let userEsc;

  //Escolhas
  const opcoes = ["0-pedra", "1-papel", "2-tesoura"];

  //Variavel para a escolha aleatoria da I.A
  iaEsc = opcoes[Math.floor(Math.random() * opcoes.length)];

  //abertura
  console.log("<-----------JOKENPO----------->");
  console.log();

  console.clear();
  const name = prompt("Digite seu nome: ");
  console.clear();
  console.log(
    figlet.textSync("Jokenpo", {
      font: "Standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 100,
      whitespaceBreak: false,
    }).green
  );
  //Numero de rodadas
  numRod = prompt(`Olá ${name}, digite quantas rodadas iremos jogar: `);
  console.log(``);

  //Explicando
  console.log(
    `COMO JOGAR: \n escolha qual elemento voce deseja inserir e a nossa I.A jogará com você.\n \n BOA SORTE, ${name}!:`
  );

  //Repetindo partidas
  for (let i = 0; i < numRod; i++) {
    console.log(``);
    console.log(` 0-Pedra , 1-Papel, 2-Tesoura`);
    console.log(``);
    userEsc = prompt(`Qual sua escolha? : `);

    while (userEsc != 0 && userEsc != 1 && userEsc != 2) {
      console.log(`ERRO. Digite um número válido!`);
      console.log(``);
      userEsc = prompt("0- Pedra, 1-Papel ou 2-Tesoura? : ");
      console.log(``);
    }

    //Escolha do usuario
    if (userEsc == 0) {
      userEsc = opcoes[0];
      console.log(`Você escolheu: ${opcoes[0]}`);
      console.log(``);
      console.log(`A Inteligência Artificial escolheu: ${iaEsc}`);
    } else if (userEsc == 1) {
      userEsc = opcoes[1];
      console.log(`Você escolheu: ${opcoes[1]}`);
      console.log(``);
      console.log(`A Inteligência Artificial escolheu: ${iaEsc}`);
    } else {
      userEsc = opcoes[2];
      console.log(`Você escolheu: ${opcoes[2]}`);
      console.log(``);
      console.log(`A Inteligência Artificial escolheu: ${iaEsc}`);
    }

    //Contador de vitorias
    if (
      (userEsc == opcoes[0] && iaEsc == opcoes[2]) ||
      (userEsc == opcoes[1] && iaEsc == opcoes[0]) ||
      (userEsc == opcoes[2] && iaEsc == opcoes[1])
    ) {
      userVitorias++;
      console.log(`Você VENCEU esta rodada!!`);
    } else if (userEsc == iaEsc) {
      console.log("Vocês EMPATARAM esta rodada!! ");
    } else {
      iaVitorias++;
      console.log(`Você PERDEU esta rodada!!`);
    }
    console.log(``);
  }

  //Exibindo o vencedor
  if (userVitorias > iaVitorias) {
    console.log(` VITORIA!!!   ＼(^-^)／  PARABENS!!!`);
    console.log(``);
    console.log(`Você foi o grande campeão do Jokenpo!!`);
    console.log(``);
    console.log(`Você ganhou ${userVitorias} rodadas.`);
    console.log(``);
    console.log(`Enquanto isso nossa I.A venceu somente ${iaVitorias} rodadas`);
    console.log(``);
  } else if (userVitorias == iaVitorias) {
    console.log(`EMPATE!!   ¯\_(ツ)_/¯    QUASE!!`);
    console.log(``);
    console.log(`Você e a nossa I.A empataram!!`);
    console.log(``);
    console.log(`Você ganhou ${userVitorias} rodadas.`);
    console.log(``);
    console.log(`Enquanto isso nossa I.A venceu ${iaVitorias} rodadas`);
    console.log(``);
  } else {
    console.log(`DERROTA!!    (╥_╥)    NÃO FOI DESSA VEZ!`);
    console.log(`Você acabou perdendo o Jokenpo...`);
    console.log(`Você ganhou apenas ${userVitorias} rodadas.`);
    console.log(`Enquanto isso nossa I.A venceu ${iaVitorias} rodadas`);
    console.log(``);
  }

  reinicio = prompt(
    "Deseja reiniciar o jogo? Use S para reinciar OU qualquer tecla para sair. "
  ).toLowerCase();
} while (reinicio == "s");
