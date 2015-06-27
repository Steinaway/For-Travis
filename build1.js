body = document.getElementById('body');
var div = document.createElement('div');
div.style.position = 'absolute';
div.style.margin = 'auto';
div.style.marginTop = '100px';
div.style.fontSize = '70px';
div.style.background = 'black'
div.style.fontFamily = 'Georgia';
div.style.opacity =  '0.6';
div.style.color = 'white';
div.style.padding = '20px'
div.s('Travis, theese are the colors that you smile every day  ');
body.x(div);

body.gridTable(10,10);

setInterval(function() {
	for(i = 0; i < 10;i++){
		for(j = 0; j < 10;j++) {
			var r = random();
			var g = random();
			var b = random();
			var x = [i,j].grid();
			x.setColor('rgb('+r+','+g+','+b+')');
		}
	}
},1000);
