

    // Declaração de variáveis //
    var pegarNome = "";
    var nomePersonagem = document.getElementById('nome');
    var input = document.getElementById("username");
    var maximoCaracteres = document.getElementById('username').maxLength;
    //Fim Declaração de variáveis

    // Evento de Apertar Enter //
    var input = document.getElementById("username");
    input.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("read").click();
      }
    });
    input.addEventListener("keyup", function (event) {
      if (0 >= event.keyCode <= 126) {
        event.preventDefault();
        document.getElementById('teclado').volume = 0.2;
        document.getElementById('teclado').play();
      }
    });

    // Fim Evento de Apertar Enter //

    // Efeito máquina de escrever //
    function typeWriter(elemento) {
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      for (let i = 0; i < textoArray.length; i++) {
        setTimeout(() => elemento.innerHTML += textoArray[i], 85 * i);
      }
    }
    const titulo = document.querySelector('div#welcome');
    typeWriter(titulo);
    // Fim efeito máquina de escrever //


    // Pegar username //
    function nomeDigitado() {
      pegarNome = document.getElementById('username').value;
      document.getElementById('nomeqdigitou').innerHTML = '<h2>' + pegarNome + ',</h2>';

      if (pegarNome == "") {
        document.getElementById('nomeqdigitou').innerHTML = 'não digitou nenhum nome, também não vai jogar rum!';
        document.getElementById('escolhaBoneco').innerText = '';
        document.getElementById('tocarMusica').pause();
      }

    }

    // Fim pegar username //

    // Efeito de carregar cena01 //
    function sumirCloader() {
      let cloader = document.getElementById('c-loader');
      cloader.style.display = 'block';
      setTimeout(function () { cloader.style.display = 'none'; }, 2700);
    }
    // Efeito de aparecer cena01 //
    function aparecerCena01() {
      let cena01 = document.getElementById('cena01');
      cena01.style.display = 'none';
      setTimeout(function () { cena01.style.display = 'block'; }, 3300);
    }
    /* Fim Efeito de aparecer cena01 */
    function tocarMusica1() {
      let musicatocar = document.getElementById('tocarMusica1');
      document.getElementById('tocarMusica1').pause();
      setTimeout(function () { document.getElementById('tocarMusica1').play(); }, 3300);
    }
    
  