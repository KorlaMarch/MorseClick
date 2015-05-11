$( document ).ready(function(){
	new GameManager();
});

function GameManager(){
	var self = this;
	$(document).keydown(function(event){ if(event.which!=13) self.down(); });
	$('.button').mousedown(function(event){ self.down(); });
	$(document).keyup(function(event){ 
		if(event.which==13){
			self.pause = !self.pause;
			if(self.pause) $('#beep')[0].pause();
		}else{
			self.up();
		}
	});
	$('.button').mouseup(function(event){ self.up(); });
	this.ctx = $('#game')[0].getContext('2d');
	this.ctx.imageSmoothingEnabled= false;
	this.score = 0;
	this.highscore = 0;
	this.speed = 6.0;
	this.pause = false;
	this.track = new morseTrack();
	while(this.track.queue.length<16){
		this.track.randomChar();
	}
	setInterval(function(){ self.gameloop(); }, 1000/30);
}

GameManager.prototype.down = function(){
	if(!this.isDown){
		this.isDown = true;
		$('.button').addClass("active");
	}
};

GameManager.prototype.up = function(){
	this.isDown = false;
	$('.button').removeClass("active");
};

GameManager.prototype.gameloop = function(){
	if(!this.pause){
		this.update();
	}
	this.render();
};

GameManager.prototype.update = function(){
	while(this.track.queue.length<16){
		this.track.randomChar();
	}
	var sig = this.track.queue[0];
	//start/stop beep sound
	var beep = $('#beep')[0];
	if(sig.hidden){
		beep.pause();
	}else if(beep.paused){
		beep.currentTime = 0;
		beep.play();
	}
	//update score
	if((!sig.hidden)&&this.isDown){
		this.score += 10;
	}else if(((!sig.hidden)||this.isDown)&&this.score>=20){
		this.score -= 20;
	}
	if(this.score > this.highscore) this.highscore = this.score;
	$('#score').text(this.score);
	$('#highscore').text(this.highscore);
	sig.time -= this.speed/30;
	console.log(sig.time);
	if(sig.time<0){
		this.track.queue.shift();
	}
};

GameManager.prototype.render = function(){
	this.ctx.clearRect(280, 0, 40, 500);
	this.ctx.fillStyle = "#b4b7b8";
	var qu = this.track.queue;
	for(p = 360,i = 0; i < qu.length&&p >= 0; i++){
		p -= Math.round(qu[i].time*40);
		if(!qu[i].hidden){
			if(qu[i] instanceof dot){
				this.ctx.beginPath();
				this.ctx.arc(300,p+20, 20, 0, Math.PI*2, false);
				this.ctx.fill();
			}else{
				this.ctx.fillRect(280,p,40,qu[i].time*40);
			}
		}
	}
};
