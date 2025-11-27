‘	// ADICIONAR ABAIXO SEM ALTERAR O CÓDIGO EXISTENTE

filmes.comedia = [
  { 
    nome: 'Gente Grande', 
    imagem: 'gentegrande.jpg', 
    classificacao: '10', 
    ano: 0, 
    duracao: '0', 
    sinopse: 'A morte do treinador de basquete de infância reúne velhos amigos no local onde celebraram um campeonato anos atrás. Eles, suas esposas e filhos descobrem que idade não é sinônimo de maturidade.', 
    trailer: 'link_gente_grande' 
  },
  { 
    nome: 'Uma Família de Dois', 
    imagem: 'umafamiliadedois.jpg', 
    classificacao: '12', 
    ano: 0, 
    duracao: '0', 
    sinopse: 'Samuel vive tranquilamente no litoral sul da França até que uma bebê chamada Glória, sua filha, chega inesperadamente, mudando totalmente sua vida.', 
    trailer: 'link_familia_dois' 
  },
  { 
    nome: 'As Férias de Mr. Bean', 
    imagem: 'mrbeanferias.jpg', 
    classificacao: 'Livre', 
    ano: 0, 
    duracao: '0', 
    sinopse: 'Mr. Bean decide viajar para a Riviera Francesa, mas seus planos dão errado e ele é confundido com criminosos e cineastas, acabando no Festival de Cannes.', 
    trailer: 'link_mr_bean' 
  },
  { 
    nome: 'O Pequenino', 
    imagem: 'opequenino.jpg', 
    classificacao: '12', 
    ano: 0, 
    duracao: '0', 
    sinopse: 'O anão Calvin, recém-saído da prisão, se disfarça de bebê para recuperar um diamante escondido na bolsa de Vanessa, cujo marido sonha em ter um filho.', 
    trailer: 'link_pequenino' 
  },
  { 
    nome: 'As Branquelas', 
    imagem: 'asbranquelas.jpg', 
    classificacao: '14', 
    ano: 0, 
    duracao: '0', 
    sinopse: 'Dois agentes do FBI se disfarçam de socialites loiras para investigar um sequestro após arruinarem uma apreensão de drogas.', 
    trailer: 'link_branquelas' 
  }
];

filmes.terror = [
  { 
    nome: 'Terrifier 3', 
    imagem: 'terrifier3.jpg', 
    classificacao: '18', 
    ano: 0, 
    duracao: '0', 
    sinopse: 'Uma babá encontra uma fita VHS misteriosa com três contos ligados por um palhaço assassino. Coisas estranhas começam a acontecer durante a noite.', 
    trailer: 'link_terrifier3' 
  },
  { 
    nome: 'Chuck', 
    imagem: 'chuck.jpg', 
    classificacao: '10', 
    ano: 0, 
    duracao: '0', 
    sinopse: 'Chuck Bartowski, um gênio da informática, recebe um e-mail criptografado que instala segredos do governo em sua mente, tornando-o uma arma viva.', 
    trailer: 'link_chuck' 
  },
  { 
    nome: 'Premonição', 
    imagem: 'premonicao.jpg', 
    classificacao: '16', 
    ano: 0, 
    duracao: '0', 
    sinopse: 'Alex tem uma visão de que um avião explodirá. Ele e mais seis passageiros deixam a aeronave, que explode logo após a decolagem.', 
    trailer: 'link_premonicao' 
  },
  { 
    nome: 'A Mulher no Jardim', 
    imagem: 'amulhernjardim.jpg', 
    classificacao: '16', 
    ano: 0, 
    duracao: '0', 
    sinopse: 'Uma mulher vestida de preto aparece misteriosamente no jardim de Ramona, assombrando a família com mensagens enigmáticas e ameaças perturbadoras.', 
    trailer: 'link_mulher_jardim' 
  },
  { 
    nome: 'A Noiva Cadáver', 
    imagem: 'noivacadaver.jpg', 
    classificacao: 'Livre', 
    ano: 0, 
    duracao: '0', 
    sinopse: 'Victor ensaia seus votos na floresta e, sem saber, casa-se com Emily, uma noiva morta que o leva para o mundo dos mortos.', 
    trailer: 'link_noiva_cadaver' 
  }
];

filmes.animacao = [
  { 
    nome: 'Bob Esponja – Karate Radical', 
    imagem: 'bobkarate.jpg', 
    classificacao: 'Livre', 
    ano: 0, 
    duracao: '0', 
    sinopse: 'Bob Esponja passa por aventuras radicais, desafios, competições e treinos de karate com Sandy em episódios cheios de humor e ação.', 
    trailer: 'link_bobkarate' 
  },
  { 
    nome: 'Coraline', 
    imagem: 'coraline.jpg', 
    classificacao: '10', 
    ano: 0, 
    duracao: '0', 
    sinopse: 'Coraline encontra uma porta secreta que leva a um mundo alternativo perfeito demais para ser real, onde segredos sombrios a aguardam.', 
    trailer: 'link_coraline' 
  },
  { 
    nome: 'Toy Story', 
    imagem: 'toystory.jpg', 
    classificacao: 'Livre', 
    ano: 0, 
    duracao: '0', 
    sinopse: 'Os brinquedos de Andy temem ser substituídos por novos presentes de aniversário, especialmente após a chegada do astronauta Buzz Lightyear.', 
    trailer: 'link_toystory' 
  }
];


};


let idadeUsuario = 0;


function inserirNome() {
  let nomeUsuario = prompt("Qual o seu nome?");
  let elemento = document.querySelector("#nome-usuario");
  elemento.textContent = `Olá, ${nomeUsuario}! Espero te ajudar a escolher um filme!`;
}


function validarIdade() {
  const input = document.getElementById('idade');
  idadeUsuario = parseInt(input.value);
  if (!isNaN(idadeUsuario) && idadeUsuario >= 0) {
    document.getElementById('menu-generos').classList.remove('oculto');
  } else {
    alert('Por favor, digite uma idade válida.');
  }
}


function mostrarFilmes(genero) {
  const container = document.getElementById('conteudo-filmes');
  container.innerHTML = '';


  filmes[genero].forEach(filme => {
    if (verificarClassificacao(filme.classificacao)) {
      const div = document.createElement('div');
      div.classList.add('filme');


      div.innerHTML = `
  	<h2>${filme.nome}</h2>
 	 <img src="${filme.imagem}" alt="${filme.nome}" />
  	<p><strong>Classificação:</strong> ${filme.classificacao} anos</p>
  	<p><strong>Ano:</strong> ${filme.ano}</p>
  	<p><strong>Duração:</strong> ${filme.duracao}</p>
  	<p><strong>Sinopse:</strong> ${filme.sinopse}</p>


  	<iframe 
    		src="https://www.youtube.com/embed/${filme.trailer}"
   		 allowfullscreen>
  	</iframe>
`;


      container.appendChild(div);
    }
  });
}


function verificarClassificacao(classificacao) {
  if (classificacao === 'Livre') return true;
  return idadeUsuario >= parseInt(classificacao);
}


inserirNome();
