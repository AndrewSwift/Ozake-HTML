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
			//desslogo(realw,realh,workh);
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
	}

	function desslogo(obj){

			// logodim = ['#logo','width',350,'right',1500-380,'bottom',1000-490];
			t = Math.round(obj[2] * conversion);
			x = Math.round(obj[4] * conversion + extrax);
			y = Math.round(obj[6] * conversion + extray);

			str = obj[1]+':'+t+'px;'+obj[3]+':'+x+'px;'+obj[5]+':'+y+'px;';
			$(obj[0]).attr('style',str);

	}

//------------------------------------------------------- global variables

	ratio = 3/2; // width and height of main image

	// to see if window changes size, we need to keep
	// a record of its size at all times
	realw = $(window).width();
	realh = $(window).height();

	// if the screen is too narrow, we use an artificial height
	// and put black bars above and below

	if (realw/realh>ratio){ // screen is too wide
		workw = Math.round(realh*ratio);
		workh = realh;
		extrax = Math.round((realw-workw)/2);
		extray = 0;
	}
	else{ // screen is too narrow
		workw = realw;
		workh = Math.round(workw/1.5);
		extray = Math.round((realh-workh)/2);
		extrax = 0;
	}

	conversion = workh/1000;


			// positionnement des 2 ombres verticales
			// verticals are 67% high, 25% down

//			marge = extra+Math.round((4+37+100)*ratio);
//			hauteur = Math.round(h*.67);
//			haut = Math.round(h*.25);
//			$('#ombred').css({left:marge,top:haut,height:hauteur});

//			marge = extra+Math.round((100+9)*ratio);
//			$('#ombreg').css({right:marge,top:haut,height:hauteur});

//------------------------------------------------------- startup

	cinema(realw,realh,workh);
	dessiner(realw,workh);

	dimlogo   = ['#logo',  'width' ,350,'right',1500-380,'bottom',1000-490];
	dimombreg = ['#ombreg','height',667,'right',1500-410,'top'   ,250     ];

	desslogo(dimlogo);
	desslogo(dimombreg);

//	setInterval(function(){haschanged()},300);

//------------------------------------------------------- fin
