console.clear();
const prompt = require("prompt-sync")();
const figlet = require("figlet");
const colors = require("colors");

//STATUS
let team = {
  entrosamento: 3,
  felicidade: 3,
  fadiga: 0,
  maxFe: function (incremento) {
    this.felicidade += incremento;
    if (this.felicidade > 10) {
      this.felicidade = 10;
    } else if (this.felicidade < 0) {
      this.felicidade = 0;
    }
  },

  maxFa: function (incremento1) {
    this.fadiga += incremento1;
    if (this.fadiga > 10) {
      this.fadiga = 10;
    } else if (this.fadiga < 0) {
      this.fadiga = 0;
    }
  },

  maxEnt: function (incremento2) {
    this.entrosamento += incremento2;
    if (this.entrosamento > 10) {
      this.entrosamento = 10;
    } else if (this.entrosamento < 0) {
      this.entrosamento = 0;
    }
  },
};

//FUNCTION TREINOS
treino1 = () => {
  //REPTIÇÃO (NESSE CASO 2 DIAS)
  for (let i = 0; i < 2; i++) {
    while (horas <= 24) {
      console.log(
        `Agora são ${horas} horas, dia ${dia}. Escolha uma opção:
          1 - Fazer treinamento fisíco (10 horas) + Entrosamento + Fadiga 
          2 - Dar folga (24 horas) + Felicidade - Fadiga - Entrosamento
          3 - Analisar adversário (8 horas) + Entrosamento - Felicidade
          4 - Descansar (7 horas) + Felicidade - Fadiga`.yellow
      );

      let escolha = +prompt();
      console.log();

      if (escolha == 1) {
        horas = avancahora(horas, 10);
        team.maxEnt(1);
        team.maxFa(1);
      } else if (escolha == 2) {
        horas = avancahora(horas, 24);
        team.maxFe(1);
        team.maxEnt(-1);
        team.maxFa(-1);
      } else if (escolha == 3) {
        horas = avancahora(horas, 8);
        team.maxEnt(1);
        team.maxFe(-1);
      } else if (escolha == 4) {
        horas = avancahora(horas, 7);
        team.maxFe(1);
        team.maxFa(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }
      console.log();
    }

    dia++;
    horas = horas - 24;
  }
};

treino2 = () => {
  for (let i = 0; i < 2; i++) {
    while (horas <= 24) {
      console.log(
        `Agora são ${horas} horas, dia ${dia}. Escolha uma opção:
              1 - Treinar Dificuldades (10 horas) + Entrosamento + Fadiga
              2 - Fazer um churrasco (Day Off) (24 horas) + Felicidade - Fadiga - Entrosamento
              3 - Academia (8 horas) + Entrosamento - Felicidade
              4 - Descansar (7 horas) + Felicidade - Fadiga`.yellow
      );

      let escolha = +prompt();
      console.log();

      if (escolha == 1) {
        horas = avancahora(horas, 10);
        team.maxEnt(1);
        team.maxFa(1);
      } else if (escolha == 2) {
        horas = avancahora(horas, 24);
        team.maxFe(1);
        team.maxEnt(-1);
        team.maxFa(-1);
      } else if (escolha == 3) {
        horas = avancahora(horas, 8);
        team.maxEnt(1);
        team.maxFe(-1);
      } else if (escolha == 4) {
        horas = avancahora(horas, 7);
        team.maxFe(1);
        team.maxFa(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }
      console.log();
    }

    dia++;
    horas = horas - 24;
  }
};

treino3 = () => {
  for (let i = 0; i < 2; i++) {
    while (horas <= 24) {
      console.log(
        `Agora são ${horas} horas, dia ${dia}. Escolha uma opção:
              1 - Academia (10 horas) + Entrosamento + Fadiga 
              2 - Dar folga (24 horas) + Felicidade - Fadiga - Entrosamento
              3 - Recuperação pós jogo (8 horas) + Entrosamento - Felicidade
              4 - Descansar (7 horas) + Felicidade - Fadiga`.yellow
      );

      let escolha = +prompt();
      console.log();

      if (escolha == 1) {
        horas = avancahora(horas, 10);
        team.maxEnt(1);
        team.maxFa(1);
      } else if (escolha == 2) {
        horas = avancahora(horas, 24);
        team.maxFe(1);
        team.maxEnt(-1);
        team.maxFa(-1);
      } else if (escolha == 3) {
        horas = avancahora(horas, 8);
        team.maxEnt(1);
        team.maxFe(-1);
      } else if (escolha == 4) {
        horas = avancahora(horas, 7);
        team.maxFe(1);
        team.maxFa(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }
      console.log();
    }

    dia++;
    horas = horas - 24;
  }
};

treino4 = () => {
  for (let i = 0; i < 2; i++) {
    while (horas <= 24) {
      console.log(
        `Agora são ${horas} horas, dia ${dia}. Escolha uma opção:
              1 - Treino de bola parada (10 horas) + Entrosamento + Fadiga 
              2 - Tocar um pagode (Day OFF) (24 horas) + Felicidade - Fadiga - Entrosamento
              3 - Assitir o jogo anterior (8 horas) + Entrosamento - Felicidade
              4 - Descansar (7 horas) + Felicidade - Fadiga`.yellow
      );

      let escolha = +prompt();
      console.log();

      if (escolha == 1) {
        horas = avancahora(horas, 10);
        team.maxEnt(1);
        team.maxFa(1);
      } else if (escolha == 2) {
        horas = avancahora(horas, 24);
        team.maxFe(1);
        team.maxEnt(-1);
        team.maxFa(-1);
      } else if (escolha == 3) {
        horas = avancahora(horas, 8);
        team.maxEnt(1);
        team.maxFe(-1);
      } else if (escolha == 4) {
        horas = avancahora(horas, 7);
        team.maxFe(1);
        team.maxFa(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }
      console.log();
    }

    dia++;
    horas = horas - 24;
  }
};

//FUNCTION DE COLETIVAS DE IMPRENSA
coletiva1 = () => {
  console.log();
  console.log("COLETIVA DE IMPRENSA".green.bold);
  prompt("PRESS START");

  console.log();

  if (jogo == 0) {
    while (imprensa != 1 && imprensa != 2 && imprensa != 3) {
      console.log(
        `REPÓRTER TV GLOBO: "Olá Professor(a) ${name}, o Brasil conseguiu a PROEZA de perder na estréia, e fica com risco de não passar da primeira fase da competição, feito que não acontece com a seleção desde 1966. É possível reverter essa situação? `
          .red
      );

      console.log(
        `1 - Sim, acrdito fielmente na força e capacidade do time! (+ Entrosamento + Felicidade) 
                            2 - Talvez, vai ser difícil, mas a gente vai tentar (+ Felicidade)  
                            3 - Não, acho que não conseguiremos... (- Entrosamento - Felicidade)
                            `.green
      );

      var imprensa = +prompt();
      console.log();

      if (imprensa == 1) {
        team.maxEnt(1);
        team.maxFe(1);
      } else if (imprensa == 2) {
        team.maxFe(1);
      } else if (imprensa == 3) {
        team.maxEnt(-1);
        team.maxFe(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }

      console.log();
      console.log(`REPÓRTER TV GLOBO: "Obrigado, ${name}! `.red);
      console.log();
    }
  }

  if (jogo == 1) {
    while (imprensa != 1 && imprensa != 2 && imprensa != 3) {
      console.log(
        `REPÓRTER TV GLOBO: "Olá Professor(a) ${name}, o Brasil venceu a primeira partida, contra a seleção da Suiça, você acha que o Brasil está totalmente pronto para qualquer desafio?`
          .blue
      );

      console.log(
        `1 - Acredito que estamos 100% prontos! (+ Entrosamento + Felicidade) 
                    2 - Acho que ainda não, precisamos corrigir alguns detalhes ainda (+ Felicidade)  
                    3 - Não, definitivamente NÃO! (- Entrosamento - Felicidade)
                    `.green
      );

      var imprensa = +prompt();
      console.log();

      if (imprensa == 1) {
        team.maxEnt(1);
        team.maxFe(1);
      } else if (imprensa == 2) {
        team.maxFe(1);
      } else if (imprensa == 3) {
        team.maxEnt(-1);
        team.maxFe(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }
      console.log();
      console.log(`REPÓRTER TV GLOBO: "Obrigado, ${name}! `.green);
      console.log();
    }
  }
};
coletiva2 = () => {
  console.log();
  console.log("COLETIVA DE IMPRENSA".green.bold);
  prompt("PRESS START");

  console.log();

  if (jogo == 0) {
    while (imprensa != 1 && imprensa != 2 && imprensa != 3) {
      console.log(
        `REPÓRTER TNT SPORTS: "Olá Professor(a) ${name}, o Brasil perde no segundo jogo da fase de grupos, o que você tem achado do desempenho até aqui?? `
          .red
      );

      console.log(
        `1 - Acredito que somos capazes de reverter essa situação. (+ Entrosamento + Felicidade) 
                                2 - O time tropeçou, mas nós não desistimos! (+ Felicidade)  
                                3 - Infelizmente, essa derrota abalou tudo, já era. (- Entrosamento - Felicidade)
                                `.green
      );

      var imprensa = +prompt();
      console.log();

      if (imprensa == 1) {
        team.maxEnt(1);
        team.maxFe(1);
      } else if (imprensa == 2) {
        team.maxFe(1);
      } else if (imprensa == 3) {
        team.maxEnt(-1);
        team.maxFe(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }

      console.log();
      console.log(`REPÓRTER TNT SPORTS: "Obrigado, ${name}! `.red);
      console.log();
    }
  }

  if (jogo == 1) {
    while (imprensa != 1 && imprensa != 2 && imprensa != 3) {
      console.log(
        `REPÓRTER TNT SPORTS: "Olá Professor(a) ${name}, o Brasil venceu, contra a seleção da Sérvia, a classificação parece perto, o que esperar do proxímo jogo?`
          .blue
      );

      console.log(
        `1 - Podem esperar o Brasil que todos temem! (+ Entrosamento + Felicidade) 
                        2 - Pés no chão, mas 100% de empenho (+ Felicidade)  
                        3 - Não espere nada da gente... (- Entrosamento - Felicidade)
                        `.green
      );

      var imprensa = +prompt();
      console.log();

      if (imprensa == 1) {
        team.maxEnt(1);
        team.maxFe(1);
      } else if (imprensa == 2) {
        team.maxFe(1);
      } else if (imprensa == 3) {
        team.maxEnt(-1);
        team.maxFe(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }
      console.log();
      console.log(`REPÓRTER TNT SPORTS: "Obrigado, ${name}! `.green);
      console.log();
    }
  }
};
coletiva3 = () => {
  console.log();
  console.log("COLETIVA DE IMPRENSA".green.bold);
  prompt("PRESS START");

  console.log();

  if (jogo == 0) {
    while (imprensa != 1 && imprensa != 2 && imprensa != 3) {
      console.log(
        `REPÓRTER TV BLUE: "Olá Professor(a) ${name}, o Brasil perde no terceiro jogo da fase de grupos, o que você achou da atuação de hoje? `
          .red
      );

      console.log(
        `1 - O time apesar da derrota se esforçou, hoje não era o dia deles. (+ Entrosamento + Felicidade) 
                                2 - Fomos mal, agora é sacodir a poeira (+ Felicidade)  
                                3 - Entramos achando que já tinhamos ganho, é o preço que se paga, todos foram mal. (- Entrosamento - Felicidade)
                                `.green
      );

      var imprensa = +prompt();
      console.log();

      if (imprensa == 1) {
        team.maxEnt(1);
        team.maxFe(1);
      } else if (imprensa == 2) {
        team.maxFe(1);
      } else if (imprensa == 3) {
        team.maxEnt(-1);
        team.maxFe(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }

      console.log();
      console.log(`REPÓRTER TV BLUE: "Obrigado, ${name}! `.red);
      console.log();
    }
  }

  if (jogo == 1) {
    while (imprensa != 1 && imprensa != 2 && imprensa != 3) {
      console.log(
        `REPÓRTER TV BLUE: "Olá Professor(a) ${name}, o Brasil venceu, contra a seleção do Camarões, o que você achou da partida?`
          .blue
      );

      console.log(
        `1 - Fomos bem, time fez em campo o que foi trabalhado na semana. (+ Entrosamento + Felicidade) 
                        2 - Hoje estão todos de parabéns. (+ Felicidade)  
                        3 - Apesar de vencermos não estou contente, muita vaidade... (- Entrosamento - Felicidade)
                        `.green
      );

      var imprensa = +prompt();
      console.log();

      if (imprensa == 1) {
        team.maxEnt(1);
        team.maxFe(1);
      } else if (imprensa == 2) {
        team.maxFe(1);
      } else if (imprensa == 3) {
        team.maxEnt(-1);
        team.maxFe(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }
      console.log();
      console.log(`REPÓRTER TV BLUE: "Obrigado, ${name}! `.green);
      console.log();
    }
  }
};
coletiva4 = () => {
  console.log();
  console.log("COLETIVA DE IMPRENSA".green.bold);
  prompt("PRESS START");

  console.log();

  if (jogo == 1) {
    while (imprensa != 1 && imprensa != 2 && imprensa != 3) {
      console.log(
        `FRED DESIMPEDIDOS (YOUTUBE): "Fala Professor(a) ${name}, o Brasil venceu, e está classificado para a próxima fase, o que esperar para o jogo contra a Alemanha?`
          .blue
      );

      console.log(
        `1 - Iremos dar o TROCO da Copa de 2014! (+ Entrosamento + Felicidade) 
                        2 - O elenco está muito fechado, todos focados, estou confiante (+ Felicidade)  
                        3 - Confesso que não durmo, pensando nisso... tenho receios ainda. (- Entrosamento - Felicidade)
                        `.green
      );

      var imprensa = +prompt();
      console.log();

      if (imprensa == 1) {
        team.maxEnt(1);
        team.maxFe(1);
      } else if (imprensa == 2) {
        team.maxFe(1);
      } else if (imprensa == 3) {
        team.maxEnt(-1);
        team.maxFe(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }
      console.log();
      console.log(`FRED DESIMPEDIDOS: "Obrigado, ${name}! `.green);
      console.log();
    }
  }
};
coletiva5 = () => {
  console.log();
  console.log("COLETIVA DE IMPRENSA".green.bold);
  prompt("PRESS START");

  console.log();

  if (jogo == 1) {
    while (imprensa != 1 && imprensa != 2 && imprensa != 3) {
      console.log(
        `PROF. GABRIEL (TV BLUE): "De Professor para Professor(a) ${name}, o Brasil venceu a Alemanha (FINALMENTE), mas ninguém para de pensar no jogo contra a Argentina.`
          .blue
      );

      console.log(
        `1 - Eles quem tem que estar preocupados! (+ Entrosamento + Felicidade) 
                        2 - Não tem pra que se preocupar, o time tem um foco e um objetivo: ser CAMPEÃO  (+ Felicidade)  
                        3 - É Professor, Messi está em boa fase... (- Entrosamento - Felicidade)
                        `.green
      );

      var imprensa = +prompt();
      console.log();

      if (imprensa == 1) {
        team.maxEnt(1);
        team.maxFe(1);
      } else if (imprensa == 2) {
        team.maxFe(1);
      } else if (imprensa == 3) {
        team.maxEnt(-1);
        team.maxFe(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }
      console.log();
      console.log(`PROF GABRIEL: "Obrigado, ${name}! `.green);
      console.log();
    }
  }
};
coletiva6 = () => {
  console.log();
  console.log("COLETIVA DE IMPRENSA".green.bold);
  prompt("PRESS START");

  console.log();

  if (jogo == 1) {
    while (imprensa != 1 && imprensa != 2 && imprensa != 3) {
      console.log(
        `PROF ALÊ (BLUE TV): "Eai Professor(a) ${name}, acredito que todos os brasileiros estão confiantes para a final, depois de toda essa trajétoria, a equipe está assim também?`
          .blue
      );

      console.log(
        `1 - Fala Alê, pode confiar, voltaremos com a TAÇA! (+ Entrosamento + Felicidade) 
                        2 - Confiantes sim, mas com humildade e pés no chão. (+ Felicidade)  
                        3 - Alê, acho que o Mbappe vai dar muito trabalho... estamos pensativos. (- Entrosamento - Felicidade)
                        `.green
      );

      var imprensa = +prompt();
      console.log();

      if (imprensa == 1) {
        team.maxEnt(1);
        team.maxFe(1);
      } else if (imprensa == 2) {
        team.maxFe(1);
      } else if (imprensa == 3) {
        team.maxEnt(-1);
        team.maxFe(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }
      console.log();
      console.log(`PROF ALÊ: "Obrigado, ${name}! `.green);
      console.log();
    }
  }
};
coletivaF = () => {
  console.log();
  console.log("COLETIVA DE IMPRENSA".green.bold);
  prompt("PRESS START");

  console.log();

  if (jogo == 1) {
    while (imprensa != 1 && imprensa != 2 && imprensa != 3) {
      console.log(
        `GALVÃO BUENO: "Grande Professor(a) ${name}, o Brasil conquista o tão sonhado HEXA, você está na história!`
          .blue
      );

      console.log(
        `1 - Mérito dos jogadores, eles foram fantásticos (+ Entrosamento + Felicidade) 
                        2 - Muito obrigado, com certeza o melhor dia da minha vida! (+ Felicidade)  
                        3 - Com certeza, sem mim essa seleção nunca teria ganhado. (- Entrosamento - Felicidade)
                        `.green
      );

      var imprensa = +prompt();
      console.log();

      if (imprensa == 1) {
        team.maxEnt(1);
        team.maxFe(1);
      } else if (imprensa == 2) {
        team.maxFe(1);
      } else if (imprensa == 3) {
        team.maxEnt(-1);
        team.maxFe(-1);
      } else {
        console.log("Opção inválida".red.bold);
      }
      console.log();
      console.log(`GALVÃO BUENO: "Obrigado, ${name}! `.green);
      console.log();
    }
  }
};

//PARTIDAS
game1 = () => {
  console.log(
    `NARRADOR: "Agora é a hora, HOJE É A ESTREIA da seleção Brasileira!"`.yellow
  );

  prompt(`${"Brasil x Suiça".green.bold}`);
  console.log();

  if (team.entrosamento > 7 && team.felicidade > 6) {
    console.log(
      `O Brasil vence de goleada ${"4x0".green} , ${"JOGA BONITO".yellow.bold} `
    );

    jogo = 1;
    pontos++;
  } else if (team.entrosamento >= 6 && team.fadiga <= 4) {
    console.log(
      "O Brasil vence por pouco, 2x1 time se esforça mas ainda não é a seleção que conhecemos "
    );
    jogo = 1;
    pontos++;
  } else if (team.entrosamento <= 5 || team.fadiga > 5) {
    console.log("O Brasil DECEPCIONA a todos, 2x0 para a Suiça, que ZEBRA... ");
    jogo = 0;
  } else if (team.entrosamento == 0 || team.fadiga == 0) {
    console.log(
      "QUE VEXAME, a Suiça não toma conhecimento e o Brasil perde de 4x0... "
    );
    jogo = 0;
  }
};
game2 = () => {
  console.log(
    `NARRADOR: "Ansiedade a mil, hoje é dia de seleção brasileira!"`.yellow
  );

  prompt(`${"Brasil x Sérvia".green.bold}`);
  console.log();

  if (team.entrosamento > 7 && team.felicidade > 6) {
    console.log(
      `O Brasil venceu e convenceu! ${"5x0".green} , ${
        "JOGA BONITO".yellow.bold
      } `
    );

    jogo = 1;
    pontos++;
  } else if (team.entrosamento >= 6 && team.fadiga <= 4) {
    console.log(
      "Em um jogo difícil o Brasil sai vitorioso 3x2, o jogo realmente não era fácil..."
    );
    jogo = 1;
    pontos++;
  } else if (team.entrosamento <= 5 || team.fadiga > 5) {
    console.log(
      "O Brasil PERDEU, 1x0 para a Sérvia, os sérvios estão em festa... "
    );
    jogo = 0;
  } else if (team.entrosamento == 0 || team.fadiga == 0) {
    console.log(
      "QUE VEXAME, a Sérvia ATROPELOU o Brasil, a seleção perde de 4x0... "
    );
    jogo = 0;
  }

  console.log();
};
game3 = () => {
  console.log(
    `NARRADOR: "Olá amigos da rede Blue, hoje temos a seleção canarinho pelo último jogo da fase de grupos...ééé amigos é jogo grande!"`
      .yellow
  );

  prompt(`${"Brasil x Camarões".green.bold}`);
  console.log();

  if (team.entrosamento > 7 && team.felicidade > 6) {
    console.log(
      `O Brasil ATROPELOU! ${"6x1".green} , ${"JOGA BONITO".yellow.bold} `
    );

    jogo = 1;
    pontos++;
  } else if (team.entrosamento >= 6 && team.fadiga <= 4) {
    console.log(
      "Jogo difícil 1x0 para o Brasil, os africanos são muito fortes físicamente, Brasil teve dificuldades."
    );
    jogo = 1;
    pontos++;
  } else if (team.entrosamento <= 5 || team.fadiga > 5) {
    console.log(
      "O Brasil PERDEU, 1x0 para Camarões, com direito a gol de cavadinha. "
    );
    jogo = 0;
  } else if (team.entrosamento == 0 || team.fadiga == 0) {
    console.log(
      "Vexatório, Camarões não viu o Brasil em campo, a seleção perde de 4x0... "
    );
    jogo = 0;
  }

  console.log();
};
game4 = () => {
  console.log(
    `NARRADOR: "Vamos lá, chegamos a fase do MATA-MATA, não tem jogo fácil amigos, é OITAVAS DE FINAL..."`
      .yellow
  );

  prompt(`${"Brasil x Uruguai".green.bold}`);
  console.log();

  if (team.entrosamento > 7 && team.felicidade > 6) {
    console.log(
      `O Brasil venceu, muito fácil, a seleção está em outro patamar! ${
        "5x0".green
      }, VAMOS PARA AS QUARTAS! ${"JOGA BONITO".yellow.bold} `
    );

    jogo = 1;
    pontos++;
  } else if (team.entrosamento >= 6 && team.fadiga <= 4) {
    console.log(
      "No confronto de sulamericanos, o Brasil sai vitorioso por 2x1, o jogo foi bem pegado."
    );
    jogo = 1;
    pontos++;
  } else if (team.entrosamento <= 5 || team.fadiga > 5) {
    console.log(
      "O Brasil PERDEU, 1x0 para o Uruguai, a torcida do Brasil está sem reação, ELIMINADOS de forma precoce "
    );
    jogo = 0;
  } else if (team.entrosamento == 0 || team.fadiga == 0) {
    console.log(
      "QUE VEXAME, o Brasil toma uma goleada histórica 4x0, a seleção está eliminada nas oitavas... "
    );
    jogo = 0;
  }

  console.log();
};
game5 = () => {
  console.log(
    `NARRADOR: "Olá amigos, hoje tem Brasil, hoje tem QUARTAS DE FINAL da Copa do Mundo 2022. Será a revanche de 2014? Esperamos que sim..."`
      .yellow
  );

  prompt(`${"Brasil x Alemanha".green.bold}`);
  console.log();

  if (team.entrosamento > 7 && team.felicidade > 6) {
    console.log(
      `O Brasil dá o TROCO, HISTÓRICO! ${
        "7x1".green
      }, VAMOS PARA A SEMI FINAL! ${"JOGA BONITO".yellow.bold} `
    );

    jogo = 1;
    pontos++;
  } else if (team.entrosamento >= 6 && team.fadiga <= 4) {
    console.log(
      "No confronto de gigantes, o Brasil vence por 3x2, com direito a Hat-Trick de Neymar Jr."
    );
    jogo = 1;
    pontos++;
  } else if (team.entrosamento <= 5 || team.fadiga > 5) {
    console.log(
      "O Brasil PERDEU, 1x0 para a Alemanha, NOVAMENTE ELIMINADOS para Alemanha... "
    );
    jogo = 0;
  } else if (team.entrosamento == 0 || team.fadiga == 0) {
    console.log(
      "MAIS 1, O Brasil se apequenou e está ELIMINADO! Mais uma goleada da Alemanha 4x0, lá vem eles de novo... "
    );
    jogo = 0;
  }

  console.log();
};
game6 = () => {
  console.log(
    `NARRADOR: "Vamos que vamos, hoje é dia de clássico, contra os hermanos, pela SEMI FINAL da Copa do Mundo de 2022"`
      .yellow
  );

  prompt(`${"Brasil x Argentina".green.bold}`);
  console.log();

  if (team.entrosamento > 7 && team.felicidade > 6) {
    console.log(
      `O Brasil vence com mais uma goleada, ESTAMOS NA FINAL! ADIOS HERMANOS ${
        "3x0".green
      }! ${"JOGA BONITO".yellow.bold} `
    );

    jogo = 1;
    pontos++;
  } else if (team.entrosamento >= 6 && team.fadiga <= 4) {
    console.log(
      "Classico nunca é fácil mas, o Brasil sai vitorioso novamente, 2x1 para a seleção verde e amarelo, o jogo foi complicado, Messi estava inspirado, mas não como nossa seleção!."
    );
    jogo = 1;
    pontos++;
  } else if (team.entrosamento <= 5 || team.fadiga > 5) {
    console.log(
      "O Brasil PERDEU, 2x1 para a Argentina, SHOW de Messi, o Brasil se despede na semi... "
    );
    jogo = 0;
  } else if (team.entrosamento == 0 || team.fadiga == 0) {
    console.log(
      "O Brasil perde tomando uma goleada histórica de 5x1, a maior derrota para a Argentina em copas. Brasil ELIMINADO... "
    );
    jogo = 0;
  }

  console.log();
};
gameFinal = () => {
  console.log(
    `NARRADOR: "É HOJE, a tão sonhada FINAL da Copa do Mundo, será que o Brasil será finalmente HEXA?"`
      .yellow
  );

  prompt(`${"Brasil x França".green.bold}`);
  console.log();

  if (team.entrosamento > 7 && team.felicidade > 6) {
    console.log(
      `É HEXA, É HEXA O BRASIL APLICA ${
        "3x0".green
      } NA FRANÇA, DANDO O TROCO DA COPA DE 98! ${"HEXACAMPEÃOOO".yellow.bold} `
    );

    jogo = 1;
    pontos++;
  } else if (team.entrosamento >= 6 && team.fadiga <= 4) {
    console.log(
      "ACABOOOOU! ACABOOOOOU! O BRASIL É CAMPEÃO, 2X1 CONTRA A PODEROSA SELEÇÃO FRANCESA. É HEXA!"
    );
    jogo = 1;
    pontos++;
  } else if (team.entrosamento <= 5 || team.fadiga > 5) {
    console.log(
      "O Brasil PERDE a tão sonhada final, 1x0 para a França, SHOW de Mbappe, Brasil adia o sonho do hexa... "
    );
    jogo = 0;
  } else if (team.entrosamento == 0 || team.fadiga == 0) {
    console.log(
      "O Brasil perde e toma mais uma goleada da França em copas do mundo, vencem mais uma final, 3x0 DE NOVO para os franceses... "
    );
    jogo = 0;
  }

  console.log();
};

//DESIGN DO GAME
console.log(
  figlet.textSync("World", {
    font: "standard",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 100,
    whitespaceBreak: false,
  }).blue
);

console.log(
  figlet.textSync("Cup", {
    font: "standard",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 100,
    whitespaceBreak: false,
  }).white
);

console.log(
  figlet.textSync("2022", {
    font: "standard",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 100,
    whitespaceBreak: false,
  }).red
);

console.log();

//APRESENTAÇÃO
console.log(
  `Fala mister, esse é o World Cup 2022, onde você cria o seu próprio treinador da seleção brasileira e trilhará o seu caminho para a glória... ou não ¯\_(ツ)_/¯  `
    .yellow
);

console.log();

console.log(
  `Ah, aqui suas atitudes podem mudar todo o rumo da sua trajetória... não se esqueça.`
    .yellow
);

console.log();

console.log(
  "O seu elenco possui alguns status, como felicidade, entrosamento e fadiga, a felicidade pode fazer com que o time ganha por muitos gols, o entrosamento pode fazer o time ganhar, porém nada adianta se a fadiga estiver alta... tome cuidado e gerencie!."
    .yellow
);

console.log();

console.log(`Agora é a hora de criar o seu treinador!`.green.bold);

console.log();

let name = prompt("Digite o nome do(a) seu(a) treinador(a): ".green);

//ERRO AO DIGITAR O NOME
while (!Number.isNaN(Number(name))) {
  console.log("Nome inválido! ".red.bold);
  name = +prompt("Digite o nome apenas com letras: ".green);
}

let idade = +prompt("Digite a idade (Entre 30 e 50): ".green);

//ERRO AO DIGITAR A IDADE
while (idade > 50 || idade < 30 || Number.isNaN(idade)) {
  console.log("Idade inválida! Digite entre 30 e 50".red.bold);
  idade = +prompt("Digite a idade: ".green);
}

let pais = prompt("Digite o seu pais de origem: ".green);

//ERRO AO DIGITAR O PAÍS
while (!Number.isNaN(Number(pais))) {
  console.log("Nome inválido! ".red.bold);
  pais = +prompt("Digite o pais apenas com letras: ".green);
}

console.log();

console.log(
  `Você criou o(a) treinador(a) ${name} de ${idade} anos de idade, do país ${pais}.`
    .yellow
);

console.log();

prompt("PRESS START").green.bold;

//INÍCIO
console.log(
  `- AUXILIAR TÉCNICO: "Fala ${name}, tudo certo? Essa semana começa a copa do mundo, estamos em um grupo um pouco difícil, mas acredito na força do elenco... " `
    .blue.bold
);

console.log();

console.log(` 
                  GRUPO G
                  ${"BRASIL".yellow.bold}
                  SUIÇA
                  SÉRVIA
                  CAMARÕES
`);

console.log();

console.log(
  `- AUXILIAR TÉCNICO: "Essa semana será MUITO importante, pois os primeiros jogos que definem se iremos para o "MATA-MATA" ou não, se prepare bastante, evite distrações..." `
    .blue.bold
);

console.log();

console.log(
  `- AUXILIAR TÉCNICO: "AH, a nossa grande estreia será daqui à 4 dias, contra a perigosa seleção da SUIÇA! MÃO NA MASSA ${name}! `
    .blue.bold
);

console.log();
console.log(`VAMOS LÁ!`.green.bold);

console.log();
console.log();

//FUNCTION PASSATEMPO
function avancahora(horaatual, tempopassado) {
  console.log(`Se passaram ${tempopassado} hora(s)`);
  horaatual = horaatual + tempopassado;

  return horaatual;
}

//TEMPO
let horas = 7;
let dia = 1;

//VARIAVEIS DE CONTROLE DE VITORIA E PONTOS
let jogo = 0;
let pontos = 0;

while (pontos < 7) {
  //PRIMEIROS 2 DIAS
  treino1();

  //OUTRO TIPO DE OPÇÕES
  treino2();

  //TESTE DE STATUS
  console.log(
    `
ENTROSAMENTO: ${team.entrosamento} 
FADIGA: ${team.fadiga}
FELICIDADE: ${team.felicidade}
`.green.bold
  );

  //PRIMEIRO JOGO
  game1();

  //CHAMANDO COLETIVA DE ESTRÉIA
  console.log();
  coletiva1();
  console.log();
  //OUTRO TIPO DE OPÇÕES
  treino3();

  //OUTRO TIPO DE OPÇÕES
  treino4();

  //TESTE DE STATUS
  console.log(
    `
ENTROSAMENTO: ${team.entrosamento} 
FADIGA: ${team.fadiga}
FELICIDADE: ${team.felicidade}
`.green.bold
  );

  //SEGUNDO JOGO
  game2();
  console.log();
  coletiva2();
  console.log();
  //INICIO DA SEMANA 3 JOGO
  treino1();

  treino2();

  //TESTE DE STATUS
  console.log(
    `
ENTROSAMENTO: ${team.entrosamento} 
FADIGA: ${team.fadiga}
FELICIDADE: ${team.felicidade}
`.green.bold
  );

  //JOGO 3
  game3();

  if (pontos < 2) {
    console.log("O Brasil foi eliminado! N GAME OVER!");
    
    console.log(
        figlet.textSync("ELIMINADO", {
          font: "standard",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 100,
          whitespaceBreak: false,
        }).red
      );
    
    break;
  } else if ((jogo = 1)) {
    console.log("O BRASIL ESTÁ CLASSIFICADO PARA O MATA-MATA");
  }
  console.log();
  coletiva3();
  console.log();
  //INCIO DA SEMANA OITAVAS
  treino3();

  //TESTE DE STATUS
  console.log(
    `
ENTROSAMENTO: ${team.entrosamento} 
FADIGA: ${team.fadiga}
FELICIDADE: ${team.felicidade}
`.green.bold
  );

  //OITAVAS
  game4();

  if (jogo != 1) {
    console.log("O Brasil foi eliminado! N GAME OVER!");
    
    console.log(
        figlet.textSync("ELIMINADO", {
          font: "standard",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 100,
          whitespaceBreak: false,
        }).red
      );
    
    break;
  } else if ((jogo = 1)) {
    console.log("O BRASIL ESTÁ CLASSIFICADO PARA AS QUARTAS DE FINAL");
  }
  console.log();
  coletiva4();
  console.log();
  //INICIO SEMANA QUARTAS
  treino1();

  //QUARTAS
  game5();

  if (jogo != 1) {
    console.log("O Brasil foi eliminado! N GAME OVER!");
   
    console.log(
        figlet.textSync("ELIMINADO", {
          font: "standard",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 100,
          whitespaceBreak: false,
        }).red
      );
   
    break;
  } else if ((jogo = 1)) {
    console.log("O BRASIL ESTÁ CLASSIFICADO PARA A SEMI FINAL");
  }
  console.log();
  coletiva5();
  console.log();
  //INCIO SEMANA SEMI
  treino4();

  //SEMI
  game6();

  if (jogo != 1) {
    console.log("O Brasil foi eliminado! N GAME OVER!");
   
    console.log(
        figlet.textSync("ELIMINADO", {
          font: "standard",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 100,
          whitespaceBreak: false,
        }).red
      );
   
    break;
  } else if ((jogo = 1)) {
    console.log("O BRASIL ESTÁ CLASSIFICADO PARA A GRANDE FINAL, O HEXA VEM?");
  }

  console.log();
  coletiva6();

  console.log();
  //INICIO SEMANA FINAL
  treino2();

  //FINAL
  gameFinal();

  if (jogo != 1) {
    console.log("O Brasil perdeu a final! N GAME OVER!");
   
    console.log(
        figlet.textSync("ELIMINADO", {
          font: "standard",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 100,
          whitespaceBreak: false,
        }).red
      );
   
    break;
  } else if ((jogo = 1)) {
    console.log(
      figlet.textSync("CAMPEÃO", {
        font: "standard",
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 100,
        whitespaceBreak: false,
      }).yellow
    );

    coletivaF();



console.log(
    figlet.textSync("POR:", {
      font: "standard",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 60,
      whitespaceBreak: false,
    }).white
  );

    console.log(
        figlet.textSync("João Victor Cavalcante", {
          font: "standard",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 60,
          whitespaceBreak: false,
        }).red
      );



      console.log(
        figlet.textSync("Obrigado por jogar !", {
          font: "standard",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 70,
          whitespaceBreak: false,
        }).yellow
      );

    break;
  }
}
