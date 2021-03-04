$(document).ready(function () {
  function initParticle() {
    fire();
  }

  function fire() {
    $.each($(".particletext.fire"), function () {
      let firecount = ($(this).width() / 100) * 10;
      for (let i = 0; i < firecount; i++) {
        let size = $.rnd(2, 10);
        $(this).append(
          `<span class ="particle" style="
          top:${$.rnd(40, 40)}%; 
          left : ${$.rnd(-20, 100)}%; 
          width: ${size}px;
          height: ${size}px;
          animation-delay:${$.rnd(0, 20) / 10}s;"></span>`
        );
      }
    });
  }

  jQuery.rnd = function (m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n + m + 1)) + m;
  };

  initParticle();
});
