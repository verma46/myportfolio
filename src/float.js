window.addEventListener('scroll', function() {
    var homeHero = document.getElementById('home-hero');
    var floatBtn = document.querySelector('.float');
    var scrollPos = window.scrollY + window.innerHeight;
    var heroPos = homeHero.offsetTop + homeHero.offsetHeight;
  
    if (scrollPos > heroPos) {
      floatBtn.style.display = 'block';
    } else {
      floatBtn.style.display = 'none';
    }
  });
  