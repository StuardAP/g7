document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 180) {
      document.querySelector('.back-to-top').classList.add('show');
    } else {
      document.querySelector('.back-to-top').classList.remove('show');
    }
  });

  document.querySelector('.back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    var targetOffset = target.offsetTop;

    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  });
});    $(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
	} else {
			$('.back-to-top').fadeOut('slow');
	}
});