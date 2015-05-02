function signal(time, hidden){
	this.time = time || 1;
	this.hidden = hidden || false;
}

signal.prototype.move = function(speed){
	
};

function dot(){
	signal.call(this,1,false);
}
dot.prototype = new signal();

function dash(){
	signal.call(this,3,false);
}
dash.prototype = new signal();

function gap(){
	signal.call(this,1,true);
}
gap.prototype = new signal();