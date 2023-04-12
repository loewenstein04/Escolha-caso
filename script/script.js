function escolhaSigno() {
  const signo = document.querySelector('#signos').value
  let text;
  const resp = document.querySelector('#frase')
  if (resp.classList.contains('height-text')) {
    resp.classList.remove('height-text')
    resp.classList.add('height0')
  }
  if (resp.classList.contains('height-anything')) {
    resp.classList.remove('height-anything')
    resp.classList.add('height0')
  }
  const img = document.querySelector('#image')
  if (img.classList.contains('opacity1')) {
    img.classList.remove('opacity1')
    img.classList.add('opacity0')
  }
  if (resp.classList.contains('height-text') || resp.classList.contains('height-anything')) {
    resp.classList.remove('height-text')
    resp.classList.remove('height-anything')
    resp.classList.add('height0')
  }
  switch (signo) {
    case 'Áries':
      text = ''
    resp.innerHTML = text
      text = 'Áries pode se identificar com características como a impulsividade e a coragem. Sabe aquela galera que não tem medo de nada? Provavelmente tem Áries forte no Mapa. Eles também amam motivar quem está ao seu redor e são guerreiros por natureza.'
      setTimeout(function () {
        img.src = 'https://img.freepik.com/fotos-premium/uma-exploracao-artistica-explora-a-constelacao-de-aries-por-meio-de-ilustracoes-vibrantes-revelando-a_826316-19.jpg?w=2000'
        img.classList.add('opacity1')
        img.classList.remove('opacity0')
      }, 1001)
      resp.classList.add('height-text')
      break

    case 'Touro':
      text = ''
    resp.innerHTML = text
      setTimeout(function () {
        img.src = 'https://monitormercantil.com.br/wp-content/uploads/2021/05/Touro-signo-ilustracao-Darkmoon-Art-Pixabay.jpg'
        img.classList.add('opacity1')
        img.classList.remove('opacity0')
      }, 1001)
      resp.classList.add('height-text')
      text = 'Quem nasce com o sol no signo Touro pode se identificar com virtudes como a paciência, o bom gosto e a sensualidade. Afeto e valorização do prazer e conforto também podem ser características de Touro, mas sabe aquela galera meio teimosa? Pode ser que tenham o signo de Touro forte no Mapa também...'
      break

    case 'Gêmeos':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo de Gêmeos geralmente se identifica com características como a curiosidade, a inteligência e o desejo de liberdade. Sabe aquela galera que ama ler, aprender coisas novas, puxar conversa e fazer novas amizades? Provavelmente tem gêmeos signo forte no mapa.'
      setTimeout(function () {
        img.src = 'https://signo.net.br/wp-content/uploads/2022/05/gem.jpg'
        img.classList.add('opacity1')
        img.classList.remove('opacity0')
      }, 1001)
      resp.classList.add('height-text')
      break
    case 'Câncer':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo de Câncer pode se identificar com características como a sensibilidade e o carinho. Um canceriano ou canceriana típicos costumam ter uma ótima intuição, além de um forte vínculo com seus familiares. A busca constante por segurança também é uma característica do signo de câncer.'
      setTimeout(function () {
        img.src = 'https://bhaz.com.br/wp-content/uploads/2022/12/signo-cancer.jpg'
        img.classList.add('opacity1')
        img.classList.remove('opacity0')
      }, 1001)
      resp.classList.add('height-text')
      break

    case 'Leão':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo Leão pode se identificar com características como a criatividade e a coragem. Sabe aquela galera com a autoestima lá em cima? Provavelmente tem Leão signo forte no mapa. A generosidade e o otimismo também podem ser bem presentes.'
      setTimeout(function () {
        img.src = 'https://www.atribuna.com.br/storage/Variedades/Comportamento/img1447851413799.webp'
        img.classList.add('opacity1')
        img.classList.remove('opacity0')
      }, 1001)
      resp.classList.add('height-text')
      break

    case 'Virgem':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o Sol no signo Virgem pode se identificar com características como a objetividade e a organização. Virginianas e virginianos típicos costumam buscar constantemente a perfeição e identificar facilmente detalhes que passam despercebidos por todos os outros, essa é uma das características de Virgem mais admiradas.'
      setTimeout(function () {
        img.src = 'https://p2.trrsf.com/image/fget/cf/800/450/middle/images.terra.com/2022/01/03/star-sign-g6f0daf554_1920.jpg'
        img.classList.add('opacity1')
        img.classList.remove('opacity0')
      }, 1001)
      resp.classList.add('height-text')
      break

    case 'Libra':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo Libra, em geral, se identifica com características como a cortesia, a delicadeza e a busca constante pelo equilíbrio. Librianas e librianos típicos adoram viver relacionamentos e tendem a ter um pouco de dificuldade para tomar decisões.'
      setTimeout(function () {
        img.src = 'https://blog.malupires.com.br/wp-content/uploads/2021/03/signo-de-libra-abre.jpg'
        img.classList.add('opacity1')
        img.classList.remove('opacity0')
      }, 1001)
      resp.classList.add('height-text')
      break

    case 'Escorpião':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo Escorpião pode se identificar com características como a intensidade e o poder de transformação. Escorpianas e escorpianos típicos costumam ser bastante passionais e muito generosos. O espírito de detetive e o sexto sentido afiado também são bem marcantes em quem tem escorpião forte no mapa também.'
      setTimeout(function () {
        img.src = 'https://blog.malupires.com.br/wp-content/uploads/2021/04/signo-de-escorpi%C3%A3o-1.jpg'
        img.classList.add('opacity1')
        img.classList.remove('opacity0')
      }, 1001)
      resp.classList.add('height-text')
      break

    case 'Sagitário':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo de Sagitário pode se identificar com características como o otimismo e o desejo de liberdade. Sagitarianas e sagitarianos típicos costumam ser viajantes e, geralmente, enxergam o mundo inteiro como sua casa. A jovialidade também é uma característica marcante de Sagitário.'
      setTimeout(function () {
        img.src = 'https://blog.malupires.com.br/wp-content/uploads/2021/04/signo-de-sagit%C3%A1rio-s%C3%ADmbolo.jpg'
        img.classList.add('opacity1')
        img.classList.remove('opacity0')
      }, 1001)
      resp.classList.add('height-text')
      break

    case 'Capricórnio':
      text = ''
    resp.innerHTML = text
      text = 'Quem tem Sol em Capricórnio pode se identificar com virtudes como persistência e responsabilidade. Capricórnio signo costuma ter metas bem definidas e noção dos seus limites. A relação próxima com o trabalho também pode ser uma característica de capricórnio bem marcante.'
      setTimeout(function () {
        img.src = 'https://blog.malupires.com.br/wp-content/uploads/2021/04/signo-de-capric%C3%B3rnio.jpg'
        img.classList.add('opacity1')
        img.classList.remove('opacity0')
      }, 1001)
      resp.classList.add('height-text')
      break

    case 'Aquário':
      text = ''
    resp.innerHTML = text
      setTimeout(function () {
        img.src = 'https://www.atribuna.com.br/storage/Variedades/Comportamento/img3092618912329.webp'
        img.classList.add('opacity1')
        img.classList.remove('opacity0')
      }, 1001)
      resp.classList.add('height-text')
      text = 'Um aquariano ou uma aquariana pode se identificar com características como o desejo de inovar e a independência. Sabe aquela galera diferentona? São eles. Aquário signo costuma ser bastante idealista e seus nativos prezam por experiências que trazem liberdade. Podem ter posturas consideradas radicais e é bem comum o aquariano ser o "do contra" da turma.'
      break

    case 'Peixes':
      text = ''
    resp.innerHTML = text
      text = 'Quem nasce com o sol no signo de Peixes pode se identificar com virtudes como a sensibilidade e a intuição. Piscianos e piscianas típicos costumam ser bastante solidários e muitas vezes têm uma forte conexão com a espiritualidade. Por serem bastante sonhadores, se iludir com certa facilidade também é uma característica de Peixes.'
      setTimeout(function () {
        img.src = 'https://blog.malupires.com.br/wp-content/uploads/2021/04/signo-de-peixes-1.jpg'
        img.classList.add('opacity1')
        img.classList.remove('opacity0')
      }, 1001)
      resp.classList.add('height-text')
      break

    default:

      img.classList.add('opacity0')
      img.classList.remove('opacity1')
      text = 'Escreva um signo válido'
      resp.classList.add('height-anything')
  }
  setTimeout(function () {
    resp.classList.remove('height0')
    setTimeout(function() {
      resp.innerHTML = text
    },500)
  }, 500)
}

/* Apagando um elemento 
document.body.removeChild(elemento)
*/