document.addEventListener("DOMContentLoaded", function(){

  /* =========================
     LANGUAGE SWITCH
  ========================== */

  function switchLang(lang){
    document.querySelectorAll("[data-ru]").forEach(el=>{
      const newText = el.getAttribute("data-" + lang);
      if(newText){
        el.innerHTML = newText;
      }
    });

    const cvLink = document.getElementById("cvLink");

    if(cvLink){
      if(lang === "ru"){
        cvLink.href = "cv/CV_Yerkiman_Lazer_Junior_Data_Analyst.pdf";
        cvLink.innerHTML = "Скачать резюме";
      } else {
        cvLink.href = "cv/CV_Yerkiman_Lazer_Junior_Data_Analyst.pdf";
        cvLink.innerHTML = "Download CV";
      }
    }

    localStorage.setItem("lang", lang);
  }

  window.switchLang = switchLang;

  const savedLang = localStorage.getItem("lang") || "en";
  switchLang(savedLang);


  /* =========================
     SLIDERS (Independent)
  ========================== */

  document.querySelectorAll(".slider").forEach(slider=>{

    const slides = slider.querySelector(".slides");
    const images = slides.querySelectorAll("img");
    const btnLeft = slider.querySelector(".left");
    const btnRight = slider.querySelector(".right");

    let index = 0;
    let interval;

    function updateSlide(){
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide(){
      index = (index + 1) % images.length;
      updateSlide();
    }

    function prevSlide(){
      index = (index - 1 + images.length) % images.length;
      updateSlide();
    }

    function startAuto(){
      interval = setInterval(nextSlide, 4000);
    }

    function stopAuto(){
      clearInterval(interval);
    }

    if(btnRight) btnRight.addEventListener("click", nextSlide);
    if(btnLeft) btnLeft.addEventListener("click", prevSlide);

    slider.addEventListener("mouseenter", stopAuto);
    slider.addEventListener("mouseleave", startAuto);

    startAuto();

  });

});
