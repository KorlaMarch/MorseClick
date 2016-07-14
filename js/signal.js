function signal(time, hidden, cha){
	this.time = time || 1;
	this.sttime = time || 1;
	this.hidden = hidden || false;
	this.text = cha || "";
}

signal.prototype.move = function(speed){
	
};

function dot(cha){
	signal.call(this,1,false,cha);
}
dot.prototype = new signal();

function dash(cha){
	signal.call(this,3,false,cha);
}
dash.prototype = new signal();

function gap(cha){
	signal.call(this,1,true,cha);
}
gap.prototype = new signal();