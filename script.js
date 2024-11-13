//Animação do fundo estrelado
const numberOfStars = 90; // Número de estrelas
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      // Gerar uma posição aleatória para cada estrela
      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 100 + 50; // Distância para dar variação de profundidade

      // Define variáveis CSS personalizadas para o movimento em direção aleatória
      star.style.setProperty('--x', `${Math.cos(angle) * distance}vw`);
      star.style.setProperty('--y', `${Math.sin(angle) * distance}vh`);
      
      // Atraso aleatório para criar variação de animação
      star.style.animationDelay = `${Math.random() * 2}s`;
      
      document.body.appendChild(star);
    }//Final da animação
//


//Animação do Scroll
AOS.init({
  duration: 600,
  easing: 'ease-in-out',
  once: true,
  offset: window.innerWidth < 768 ? 100 : 150,
  //disable: 'mobile', // Desativa AOS em dispositivos móveis para melhorar a fluidez
});

var swiper = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  spaceBetween: 40, // Espaço entre os slides
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 20,
    modifier: 2,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: { // Para telas menores que 768px
      slidesPerView: 1, // Exibe um slide por vez
      spaceBetween: 20, // Espaço reduzido entre os slides
      centeredSlides: true, // Garante que o slide ativo fique centralizado
    },
    1024: { // Para telas maiores que 1024px
      slidesPerView: 3, // Exibe 3 slides por vez
      spaceBetween: 40, // Espaço normal entre os slides
      centeredSlides: true, // Garante que o slide ativo fique centralizado
    },
    1280: { // Para telas muito grandes (por exemplo, desktops)
      slidesPerView: 4, // Exibe 4 slides por vez
      spaceBetween: 50, // Mais espaço entre os slides
      centeredSlides: true, // Garante que o slide ativo fique centralizado
    },
  }
});

// Obtém a seta
const scrollToTopButton = document.getElementById("scrollToTop");
// Quando o usuário rolar a página, exibe ou esconde a seta
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopButton.classList.add("show"); // Exibe a seta
  } else {
    scrollToTopButton.classList.remove("show"); // Esconde a seta
  }
};
// Quando o usuário clicar na seta, rola até o topo
scrollToTopButton.onclick = function (e) {
  e.preventDefault(); // Impede o comportamento padrão do link
  window.scrollTo({ top: 0, behavior: "smooth" }); // Rolagem suave até o topo
};

// Inicializando o Particles.js
particlesJS('particles-js', {
  particles: {
    number: {
      value: window.innerWidth <= 768 ? 50 : 100,  // Menos partículas no celular
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"  // Cor das partículas
    },
    shape: {
      type: "circle",  // Forma das partículas
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      onmove: {  // Detectar movimento do mouse ou dedo
        enable: true,
        mode: "grab"
      },
      resize: true
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      grab: {
        distance: 150,  // Distância de interação para o toque
        line_linked: {
          opacity: 0.5
        }
      }
    }
  },
  retina_detect: true
});
