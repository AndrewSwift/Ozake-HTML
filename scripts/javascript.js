//------------------------------------------------------- intro

	function cinema(w,h){
	// rajoute des barres noires dessus/dessous si la page est trop étroite
	
		if (w/h<1.5){
			x = w/1.5;
			d = Math.round((h-x)/2);
			$('#haut').css('height',d+'px');
			$('#masque-haut').css('height',d+'px');
			$('#masque-bas').css('height',d+'px');
		}
	}

	function dessiner(w,h){
	// envoie le format de chaque élément de la page
	// 4+37+100+9 = 150%

			// ratio pour convertir de pourcent en pixels
			ratio = h/100;

			// montant de supp' de chaque côté de notre page
			extra = Math.round((w-(h*1.5))/2);

			// positionnement des images de portfolio
			marge = Math.round((4+37)*ratio);

			$('#scroller').css({width:h, left:extra+marge});

			// marge blanche autour des images de portfolio
			marge = Math.round(h*.05);
			$('#scroller img').css({width:h-marge,padding:marge/2});

			// positionnement des 2 ombres verticales
			// verticals are 67% high, 25% down

			marge = extra+Math.round((4+37+100)*ratio);
			hauteur = Math.round(h*.67);
			haut = Math.round(h*.25);
			$('#ombred').css({left:marge,top:haut,height:hauteur});

			marge = extra+Math.round((100+9)*ratio);
			$('#ombreg').css({right:marge,top:haut,height:hauteur});

			// positionnement des 2 ombres horizontales
			// bottom of top shadow is 50% down
			// top of bottom shadow is 78% down

			bas = Math.round(h*.5);
			$('#ombreh').css({bottom:bas});

			haut = Math.round(h*.78);
			$('#ombreb').css({top:haut});

			// logo is 35% wide, 39% right edge is 112% in
			large = Math.round(h*.35);
			haut = Math.round(h*.39);
			droite = extra+Math.round(h*1.12);
			$('#logo').css({width:large,top:haut,right:droite});

			// contact is 22.5% wide, 81.5% down, right edge is 112%
			large = Math.round(h*.225);
			haut = Math.round(h*.815);
			droite = extra+Math.round(h*1.12);
			$('#contact').css({width:large,top:haut,right:droite});
	}

	//$(window).resize(function(){
	//	cinema();
	//});

	cinema($(window).width(),$(window).height());

	dessiner($(window).width(),$(window).height());

	setInterval(function(){haschanged()},300);

	origw = $(window).width();
	origh = $(window).height();

	function haschanged(){
		if (origw != $(window).width() || origh != $(window).height()){
			dessiner($(window).width(),$(window).height());	
			origw = $(window).width();
		}
	}


//------------------------------------------------------- fin
