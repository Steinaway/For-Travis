//statics
var xaxis = this.screen.width+'px';
var yaxis = this.screen.height+'px';
body = document.getElementById('body');
body.style.width = '100%';
var row = document.createAttribute('row');
var col = document.createAttribute("column");


/*
Athor  Nicholas Adam 
Thu Jun 25 2015 23:09:19 GMT+0200 (CEST)
Vienna

*/
Element.prototype.s = function(s) {
	x = document.createTextNode(s);
	this.appendChild(x);
}
//shortcuts colors
Element.prototype.setColor = function(s) {
	this.style.background = s;
}
/*
	shortcut the appendChild() method
*/
Element.prototype.x = function(x) {
	this.appendChild(x);
}
Element.prototype.c = function(y) {
	this.style.color = y;
}
Element.prototype.createButton = function(val,id) {
	var b = document.createElement('button');
	b.style.width = '100%';
	b.style.height = '100%';
	b.id = id;
	//b.style.position = 'relative';
	//v = val.split(' ');
	b.style.fontSize = '24px'
	b.s(val);
	this.x(b);
}
Element.prototype.createInput = function(val,id) {
	var i = document.createElement('input');
	i.style.width = '100%';
	i.style.height = '100%';
	i.id = id;
	//b.style.position = 'relative';
	//v = val.split(' ');
	i.style.fontSize = '24px'
	i.s(val);
	this.x(i);
}
function random() {
	return Math.floor(Math.random() * (255));
}

Element.prototype.gridTable = function(x,y) {
	var table = document.createElement('table');
	table.setAttribute('id','grid');
	var rows = {};
	var columns = {};
	for(i=0;i<y;i++){
		rows[i] = document.createElement('tr');
		rows[i].setAttribute('row',i);
		table.x(rows[i]);
		for(z=0;z<x;z++){
			var r = random();
			var g = random();
			var b = random();
			columns[z] = document.createElement('td');
			columns[z].setAttribute('col',z);
			columns[z].style.width = rows[i].style.width / x;
			columns[z].style.height = body.style.height / y;
			columns[z].setColor('rgb('+r+','+g+','+b+')');
			rows[i].appendChild(columns[z]);
		}
	}

	table.style.width =  '100%';
	table.style.height = '800px';
	this.x(table);
}

Array.prototype.grid = function() {
	var table  = document.getElementById('grid');
	var child = table.childNodes;
	var searchedrow = child[this[0]];
	var searchedcol = searchedrow.childNodes;
	var target = searchedcol[this[1]];
	return target;
}


Element.prototype.createDiv = function(x,border,id) {
	var div = document.createElement('div');
	div.id = id;
	div.style.height = x;
	div.style.border = border;
	this.x(div);
}
