

(function ($) {

	var invitados_array = {
		abuelita: "Elisa Otalora",
		alejoysandris: "Alejandro Gutiérrez y Sandra Quiroga",
		nata: "Señorita Natali Quiroga",
		carlitos: "Carlos Murcia y Paula Rodríguez",
		willi: "William Rodríguez y Claudia Ayala",
		pinchipito: "Hernando Pulido",
		marisol: "Orlando Rodríguez y Marisol Chacón",
		zaida: "Zaida Carvajal",
		jaime: "Jaime Serrano y Martha Martínez",
		dani: "Señorita Daniela Briceño",
		vale: "Valentina Briceño y Santiago Barrera",
		papitos: "Juan Francisco Briceño y Mariela Novoa",
		juanchis: "Juan Camilo Briceño",
		rosalba: "Luis Alberto Quiroga y Rosalba Novoa",
		jorgeyclarita: "Jorge Pacheco y Clarita Briceño",
		andresBri: "Andrés Briceño y Yessica Granados",
		xiomi: "Xiomara y Andres",
		pedrito: "Marielisa y Pedro",
		angela: "Ángela e Ivan",
		ferchito: "Fernando Sánchez Esposa e Hijos.",
		tio_willi: "William Velasco y Cindy Duque",
		daniel: "Daniel Mendoza y Nataly Salcedo",
		andres: "Andrés Villamil y Laura Soler",
		lulu: "Luisa Fernanda Velasco",
		ralf: "Andrés Montoya y Mary Ramírez",
		luzclarita: "Luz Dary Gómez y Rodrigo Gómez",
		pardo: "Fredy Pardo y Yulier Urrea",
		mis_chiquitines: "Alejandro Sánchez Esteban Sánchez Juan Pablo Sánchez",
		mamita: "Alejandro Sánchez y Gloria Yency León",
		davidysaris: "David y Saris",
		primos: "Cristian Sánchez y Briggite Sánchez",
		tiojairo: "Jairo Sánchez y Yadira Rodríguez",
		pastores: "Pastor Aníbal Vanegas y Pastora Gladis Reyes",
		amormio: "Fabián Sánchez y Laura Briceño",
		danito: "Dany Cruz y Kate",
		jhoan: "Jhoan y Marcela",
		lore: "Lorena Briceño y Carlos Ibarra"
	}
	if (typeof window.location.search.split('=')[1] !== 'undefined') {
		if (window.location.search.split('=')[1] in invitados_array) {
			var index = window.location.search.split('=')[1];
			invitados.innerText = invitados_array[index];
		} else {
			invitados.innerText = ""

		}

	} else {
		invitados.innerText = ""

	}

	"use strict";

	// JQUERY LIGHT BOX

	if ($.isFunction($.fn.fluidbox)) {
		$('a').fluidbox();
	}


	$('a[href="#"]').on('click', function (event) {
		return;
	});

	// COUNTDOWN TIME 

	countdownTime();


	$('[data-nav-menu]').on('click', function (event) {

		var $this = $(this),
			visibleHeadArea = $this.data('nav-menu');

		$(visibleHeadArea).toggleClass('visible');

	});


	var winWidth = $(window).width();
	dropdownMenu(winWidth);

	$(window).on('resize', function () {
		dropdownMenu(winWidth);

	});

	// Circular Progress Bar

	var isAnimated = false;


})(jQuery);



function countdownTime() {

	if (isExists('#clock')) {
		$('#clock').countdown('2019/09/13', function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-sec"><span class="title">%D</span> días </div>'
				+ '<div class="time-sec"><span class="title">%H</span> horas </div>'
				+ '<div class="time-sec"><span class="title">%M</span> minutos </div>'
				+ '<div class="time-sec"><span class="title">%S</span> segundos </div>'));
		});
	}
}
function dropdownMenu(winWidth) {

	if (winWidth > 767) {

		$('.main-menu li.drop-down').on('mouseover', function () {
			var $this = $(this),
				menuAnchor = $this.children('a');

			menuAnchor.addClass('mouseover');

		}).on('mouseleave', function () {
			var $this = $(this),
				menuAnchor = $this.children('a');

			menuAnchor.removeClass('mouseover');
		});

	} else {

		$('.main-menu li.drop-down > a').on('click', function () {

			if ($(this).attr('href') == '#') return false;
			if ($(this).hasClass('mouseover')) { $(this).removeClass('mouseover'); }
			else { $(this).addClass('mouseover'); }
			return false;
		});
	}

}

function isExists(elem) {
	if ($(elem).length > 0) {
		return true;
	}
	return false;
}

function initMap() {

	// Create a new StyledMapType object, passing it an array of styles,
	// and the name to be displayed on the map type control.
	var styledMapType = new google.maps.StyledMapType(
		[
			{
				"featureType": "administrative",
				"elementType": "all",
				"stylers": [
					{
						"saturation": "-100"
					}
				]
			},
			{
				"featureType": "administrative.province",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 65
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": "50"
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": "-100"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "all",
				"stylers": [
					{
						"lightness": "30"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "all",
				"stylers": [
					{
						"lightness": "40"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"hue": "#ffff00"
					},
					{
						"lightness": -25
					},
					{
						"saturation": -97
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels",
				"stylers": [
					{
						"lightness": -25
					},
					{
						"saturation": -100
					}
				]
			}
		],
		{ name: 'Styled Map' });

	// Create a map object, and include the MapTypeId to add
	// to the map type control.

	var uluru = { lat: 4.826857, lng: -74.033154 };
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
	});

	var image = 'images/google-marker.png';
	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		icon: image
	});
	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
}