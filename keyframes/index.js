function planetTranslateYear(planet) {
	var ano = 365;
	var total = ano * planet / 87.97;
	return Math.round(total * 10000)/10000 + 's';
}

function planetTranslateDays(planet) {
	var total = planet / 87.97;
	return Math.round(total * 10000)/10000 + 's';
}

$('#mercury').css('animation-duration', planetTranslateDays(87.97));

$('#venus').css('animation-duration', planetTranslateDays(224.7));

$('#earth').css('animation-duration', planetTranslateDays(365.26));

$('#mars').css('animation-duration', planetTranslateYear(1.88));

$('#jupiter').css('animation-duration', planetTranslateYear(11.86));

$('#saturn').css('animation-duration', planetTranslateYear(29.46));

$('#uranus').css('animation-duration', planetTranslateYear(84.01));

$('#neptune').css('animation-duration', planetTranslateYear(164.79));

//$('.planet').css('animation-duration', '50s');