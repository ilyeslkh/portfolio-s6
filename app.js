const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const skills = document.querySelectorAll('.card');
  
	skills.forEach(skill => {
	  skill.addEventListener('click', function () {
		const description = this.querySelector('.description');
		if (description.style.display === 'none' || description.style.display === '') {
		  description.style.display = 'block';
		} else {
		  description.style.display = 'none';
		}
	  });
	});
});
  





let options = {
	startAngle: -1.55,
	size: 150,
	value: 0.9,
	fill: {gradient: ['#a445b2', '#00c2cb']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
	$(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
	value: 0.70
  });
  $(".php .bar").circleProgress({
	value: 0.70
  });
  $(".java .bar").circleProgress({
	value: 0.60
  });
  $(".python .bar").circleProgress({
	value: 0.65
  });
  $(".plsql .bar").circleProgress({
	value: 0.80
  });
  $(".laravel .bar").circleProgress({
	value: 0.75
  });
  $(".bootstrap .bar").circleProgress({
	value: 0.85
  });
  $(".git .bar").circleProgress({
	value: 0.70
  });
  $(".jetbrains .bar").circleProgress({
	value: 0.80
  });
  $(".reseaux .bar").circleProgress({
	value: 0.75
  });
  $(".linux .bar").circleProgress({
	value: 0.80
  });
