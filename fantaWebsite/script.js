//criação de uma timeline do gsap com animações sincronizadas com o scroll
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% -20%",
    scrub: true,
    // markers: true, //Depuração (marcadores)
  },
});

tl.to(
  "#fanta",
  {
    top: "120%", //move o elemento com id fanta para 120% do topo
    left: "0%", //move o elemento para a posição 0%
  },
  "parte1"
); //nomeando esse trecho de animação como 'parte1' para sincronização

tl.to(
  "#laranja-cortada",
  {
    top: "160%", //move o elemento com id orange-cut para 160% do topo
    left: "23%", //move o elemento para a posição 23% da esquerda
  },
  "parte1"
); //sincronizandoo com a animação nomeada 'parte1'

tl.to(
  "#laranja",
  {
    width: "15%", //Reduz a largura do elemento com id 'laranja' pra 15%
    top: "166%", //move o elemento com id orange-cut para 160% do topo
    right: "10%", //move o elemento para a posição 10% da direita
  },
  "parte1"
); //sincronizandoo com a animação nomeada 'parte1'

tl.to(
  "#folha",
  {
    top: "100%", //move o elemento com id folha para 100% do topo
    left: "70%", //move o elemento para a posição 70% da esquerda
    rotate: "270deg", //rotaciona o objeto em 270 graus
  },
  "parte1"
); //sincronizandoo com a animação nomeada 'parte1'

tl.to(
  "#folha2",
  {
    top: "110%", //move o elemento com id folha para 110% do topo
    left: "0%", //move o elemento para a posição 0% da esquerda
    rotate: "530deg", //rotaciona o objeto em 530 graus
  },
  "parte1"
); //sincronizandoo com a animação nomeada 'parte1'

//criando outra timeline
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "5% 60%",
    end: "20% 50%", // fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .three)
    scrub: true,
    // markers: true, //Depuração (marcadores)
  },
});

tl2.from(
  // o from e de iniciar
  ".lemon1",
  {
    top: "110%", //inicia  o elemento com a classe lemon1 ligeiramente abaixo da tela (110% do topo)
    left: "-100%", //inicia o elemento para a posição -100% da esquerda
    rotate: "-90deg", //inicia rotacionando o objeto em -90 graus
  },
  "parte2"
); //nomeando operação como 'ca'

tl2.from(
  // o from e de iniciar
  "#cocacola",
  {
    top: "110%", //inicia  o elemento com a classe lemon1 ligeiramente abaixo da tela (110% do topo)
    left: "-100%", //inicia o elemento para a posição -100% da esquerda
    rotate: "-90deg", //inicia rotacionando o objeto em -90 graus
  },
  "parte2"
); //sincronizando operação com a 'parte2'

tl2.from(
  // o from e de iniciar
  ".lemon2",
  {
    top: "110%", //inicia  o elemento com a classe lemon1 ligeiramente abaixo da tela (110% do topo)
    left: "100%", //inicia o elemento para a posição 100% da esquerda
    rotate: "90deg", //inicia rotacionando o objeto em 90 graus
  },
  "parte2"
); //sincronizando operação com a 'parte2'

tl2.from(
  // o from e de iniciar
  "#pepsi",
  {
    top: "110%", //inicia  o elemento com a classe lemon1 ligeiramente abaixo da tela (110% do topo)
    left: "100%", //inicia o elemento para a posição 100% da esquerda
    rotate: "90deg", //inicia rotacionando o objeto em 90 graus
  },
  "parte2"
); //sincronizando operação com a 'parte2'

tl.to(
  "#laranja-cortada",
  {
    top: "204%", //move o elemento com id folha para 204% do topo
    left: "42%", //move o elemento para a posição 42% da esquerda
    width: "18%", //aumenta a largura do elemento com o id 'laranja-cortada' para 18%
  },
  "parte2"
); //sincronizandoo com a animação nomeada 'parte2'

tl.to(
  "#fanta",
  {
    top: "208%", //move o elemento com id folha para 210% do topo
    left: "33%", //move o elemento para a posição 33% da esquerda
    width: "35%", //aumenta a largura do elemento com o id 'laranja-cortada' para 35%
  },
  "parte2"
); //sincronizandoo com a animação nomeada 'parte2'
