const app = "I don't do much.";

var digitalClock = {
	time:  Math.round(Date.now() / 1000),
    startTicking: function(){
    	setInterval(function(){this.time += 1;}.bind(this),1000);
    }
}

var censor = (word, sentence) => {
  return sentence.split(word).join("BLEEP");
}

var violenceCensor = censor.bind(null,"violence");

var drugsCensor = censor.bind(null,"drugs");