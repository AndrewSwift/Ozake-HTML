//------------------------------------------------------- functions

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

			$('#accueil').css({width:h,padding:0});

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

			// contact is 22.5% wide, 81.5% down, right edge is 112%
			large = Math.round(h*.225);
			haut = Math.round(h*.815);
			droite = extra+Math.round(h*1.12);
			$('#contact').css({width:large,top:haut,right:droite});
	}

	function haschanged(){
		if (realw != $(window).width() || realh != $(window).height()){
			realw = $(window).width();
			realh = $(window).height();
			workh = narrow(realw,realh);

			cinema(realw,realh,workh);
			dessinerlogo(realw,realh,workh);
		}
	}

	function cinema(realw,realh,workh){
	// rajoute des barres noires dessus/dessous si la page est trop étroite
	
		if (realh != workh){
			d = Math.round((realh-workh)/2);

			$('#haut').css('height',d+'px');
			$('#masque-haut').css('height',d+'px');
			$('#masque-bas').css('height',d+'px');
		}
		else {
			$('#haut').css('height','0px');
			$('#masque-haut').css('height','0px');
			$('#masque-bas').css('height','0px');
		}
	}

	function narrow(w,h){
	// tells if the screen is too narrow (less than 3/2) and returns a "work height" if neccesary
		if (w/h<1.5) x = w/1.5;
		else x = h;
		return Math.round(x);
	}

	function dessinerlogo(realw,realh,workh){
	// envoie le format de chaque élément de la page
	// 4+37+100+9 = 150%

			logowidth = 350; // pixels if height is 1000px
			logobottom = 490; // pixels if height is 1000px
			logoright = 1200; // pixels from right edge

			large = Math.round(realh*logowidth/1000);

			bas = Math.round(realh*logobottom/1000) + extray;
			droite = extra+Math.round(realh*logoright/1000)+ extrax;

			$('#logo').css({width:large,bottom:bas,right:droite});

	}

//------------------------------------------------------- global variables

	// to see if window changes size, we need to keep
	// a record of its size at all times
	realw = $(window).width();
	realh = $(window).height();

	// if the screen is too wide, we use an artificial width
	workw = Math.round((realw-(realh*1.5))/2);
	if (realw / realh*1.5) workw = Math.round(realh*1.5);
	else workw = realw;

	// if the screen is too narrow, we use an artificial height
	// and put black bars above and below
	workh = narrow(realw,realh);

	// offset to take into account window that is too wide or tall
	extrax = 0;
	extray = 0;

//------------------------------------------------------- startup

	cinema(realw,realh,workh);
	dessiner(realw,workh);
	dessinerlogo(realw,realh,workh);

	setInterval(function(){haschanged()},300);

//------------------------------------------------------- fin
