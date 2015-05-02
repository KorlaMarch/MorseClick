function morseTrack(){
	this.queue = [];
}

morseTrack.prototype.pushSignal = function(str){
	if(typeof str == 'string' || str instanceof String){
		for(var i = 0, len = str.length; i < len; i++){
			switch(str.charCodeAt(i)){
				case 45: //dash
					this.queue.push(new dash());
					break;
				case 46: //dot
					this.queue.push(new dot());
					break;
				case 32: //space
					this.queue.push(new gap());
					break;
				default:
					console.log('unexpected signal!');
			}
		}
	}
};

morseTrack.prototype.randomChar = function(){
	//random 0-26
	var c = Math.floor(Math.random()*27);
	switch(c){
		case 0: //A
			this.pushSignal(". -");
			break;
		case 1: //B
			this.pushSignal("- . . .");
			break;
		case 2: //C
			this.pushSignal("- . - .");
			break;
		case 3: //D
			this.pushSignal("- . .");
			break;
		case 4: //E
			this.pushSignal(".");
			break;
		case 5: //F
			this.pushSignal(". . - .");
			break;
		case 6: //G
			this.pushSignal("- - .");
			break;
		case 7: //H
			this.pushSignal(". . . .");
			break;
		case 8: //I
			this.pushSignal(". .");
			break;
		case 9: //J
			this.pushSignal(". - - -");
			break;
		case 10: //K
			this.pushSignal("- . -");
			break;
		case 11: //L
			this.pushSignal(". - . .");
			break;
		case 12: //M
			this.pushSignal("- -");
			break;
		case 13: //N
			this.pushSignal("- .");
			break;
		case 14: //O
			this.pushSignal("- - -");
			break;
		case 15: //P
			this.pushSignal(". - - .");
			break;
		case 16: //Q
			this.pushSignal("- - . -");
			break;
		case 17: //R
			this.pushSignal(". - .");
			break;
		case 18: //S
			this.pushSignal(". . .");
			break;
		case 19: //T
			this.pushSignal("-");
			break;
		case 20: //U
			this.pushSignal(". . -");
			break;
		case 21: //V
			this.pushSignal(". . . -");
			break;
		case 22: //W
			this.pushSignal(". - -");
			break;
		case 23: //X
			this.pushSignal("- . . -");
			break;
		case 24: //Y
			this.pushSignal("- . - -");
			break;
		case 25: //Z
			this.pushSignal("- - . .");
			break;
		case 26: //' '
			this.pushSignal("    ");
			break;
	}
	this.pushSignal("   ");
};