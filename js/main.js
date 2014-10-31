$(window).load(function(){
	KMB.changeP1();
	KMB.slider();
});

var KMB = {};

KMB.changeP1 = function(){
	document.getElementById('b1').addEventListener('click', function(){
		document.getElementById('p1').innerHTML = "Hello World!!!";
		console.log("Text entered");
	});
};

KMB.slider = function(){
	var ctr = 1;
	var imgCtr = document.getElementsByTagName('img');
	document.getElementsByClassName('picture').class = "hidden";
	console.log(imgCtr);

	document.getElementById('nxt').addEventListener('click', function(){
		while(ctr < 9){
			ctr = ctr + 1;
			document.getElementById('imgPhoto')
				.setAttribute('src','img/' + 'photo' + ctr +'.png');
			break;
		}	
	});
	document.getElementById('prv').addEventListener('click', function(){
		while(ctr > 1){
			ctr = ctr - 1;
			document.getElementById('imgPhoto')
			.setAttribute('src', 'img/' + 'photo' + ctr +'.png');
			break;
		}
	});
};
