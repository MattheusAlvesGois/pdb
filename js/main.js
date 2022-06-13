$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 2000
  });
  
  $('.slide').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  
  var setaEsquerdaSlider = document.querySelector(".slick-prev");
  
  var setaDireitaSlider = document.querySelector(".slick-next");
  
  var setaEsquerda = document.querySelector(".slider-principal>.slick-prev");
  
  var setaDireita = document.querySelector(".slider-principal>.slick-next");
  
  setaEsquerdaSlider.innerHTML = "<";
  
  setaDireitaSlider.innerHTML = ">";
  
  setaEsquerda.innerHTML = "<";
  
  setaDireita.innerHTML = ">";