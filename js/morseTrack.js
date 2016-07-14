function morseTrack(){
	this.queue = [];
}

morseTrack.prototype.pushSignal = function(str,ch){
	if(typeof str == 'string' || str instanceof String){
		switch(str.charCodeAt(i)){
			case 45: //dash
				this.queue.push(new dash(ch));
				break;
			case 46: //dot
				this.queue.push(new dot(ch));
				break;
			case 32: //space
				this.queue.push(new gap(ch));
				break;
			default:
				console.log('unexpected signal!');
		}

		for(var i = 1, len = str.length; i < len; i++){
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
			this.pushSignal(". -",String.fromCharCode(c+65));
			break;
		case 1: //B
			this.pushSignal("- . . .",String.fromCharCode(c+65));
			break;
		case 2: //C
			this.pushSignal("- . - .",String.fromCharCode(c+65));
			break;
		case 3: //D
			this.pushSignal("- . .",String.fromCharCode(c+65));
			break;
		case 4: //E
			this.pushSignal(".",String.fromCharCode(c+65));
			break;
		case 5: //F
			this.pushSignal(". . - .",String.fromCharCode(c+65));
			break;
		case 6: //G
			this.pushSignal("- - .",String.fromCharCode(c+65));
			break;
		case 7: //H
			this.pushSignal(". . . .",String.fromCharCode(c+65));
			break;
		case 8: //I
			this.pushSignal(". .",String.fromCharCode(c+65));
			break;
		case 9: //J
			this.pushSignal(". - - -",String.fromCharCode(c+65));
			break;
		case 10: //K
			this.pushSignal("- . -",String.fromCharCode(c+65));
			break;
		case 11: //L
			this.pushSignal(". - . .",String.fromCharCode(c+65));
			break;
		case 12: //M
			this.pushSignal("- -",String.fromCharCode(c+65));
			break;
		case 13: //N
			this.pushSignal("- .",String.fromCharCode(c+65));
			break;
		case 14: //O
			this.pushSignal("- - -",String.fromCharCode(c+65));
			break;
		case 15: //P
			this.pushSignal(". - - .",String.fromCharCode(c+65));
			break;
		case 16: //Q
			this.pushSignal("- - . -",String.fromCharCode(c+65));
			break;
		case 17: //R
			this.pushSignal(". - .",String.fromCharCode(c+65));
			break;
		case 18: //S
			this.pushSignal(". . .",String.fromCharCode(c+65));
			break;
		case 19: //T
			this.pushSignal("-",String.fromCharCode(c+65));
			break;
		case 20: //U
			this.pushSignal(". . -",String.fromCharCode(c+65));
			break;
		case 21: //V
			this.pushSignal(". . . -",String.fromCharCode(c+65));
			break;
		case 22: //W
			this.pushSignal(". - -",String.fromCharCode(c+65));
			break;
		case 23: //X
			this.pushSignal("- . . -",String.fromCharCode(c+65));
			break;
		case 24: //Y
			this.pushSignal("- . - -",String.fromCharCode(c+65));
			break;
		case 25: //Z
			this.pushSignal("- - . .",String.fromCharCode(c+65));
			break;
		case 26: //' '
			this.pushSignal("    ",String.fromCharCode(c+65));
			break;
	}
	this.pushSignal("   ","");
};