var trigger=[
	["hi","hey","hello"],
	["how r u","how is life","how r u"],
	["what are u doing","what is going on"],
	["how old are u"],
	["who are u","are you human","are you bot","are you human or bot"],
	["who created you","who made u","who invented you"],
	["what is your name","your name","name","tell me your name"],
	["valar morghulis"]


];
var reply=[
	["Hey","Hi","Hello"],
	["Fine","Pretty well","Fantastic"],
	["Nothing Much","About to go to sleep"],
	["Not old enough","Pretty young"],
	["I am a bot","Just a Bot.Who are u ?"],
	["My parents","kshitiz","God"],
	["My name is khan..","vision"],
	["Valar Doharis","Hmm.. GOT fan.I like it"]
];
var alternative=["hmm.","Eh.."];
document.querySelector("#input").addEventListener("keypress",function(e){
	var key=e.which||e.keycode;
	if(key===13)
	{
		var input=document.getElementById("input").value;
		document.getElementById("user").innerHTML=input;
        output(input);
	}

});
function output(input){
	try{
		var product=input +"=" +eval(input);
	}
	catch(e)
	{ var text=(input.toLowerCase()).replace(/[^\w\s\d]/gi,"");
	   text=text.replace(/ a /g,"").replace(/i feel /g,"").replace(/whats/g,"what is").replace(/please/g,"").replace(/my/g,"");
	  if(compare(trigger,reply,text)){
	  	var product=compare(trigger,reply,text);
	  }
	  else{
	  var product=alternative[Math.floor(Math.random()*alternative.length)];
      }
	}
	document.getElementById("chatbot").innerHTML=product;
	speak(product);
	document.getElementById("input").value="";

}
function compare(arr,array,string){
	var item;
	var items;
	for(var x=0;x<arr.length;x++)
	{
       for(var y=0;y<array.length;y++)
       {
       	if(arr[x][y]==string)
       	{
       		items=array[x];
       		item=items[Math.floor(Math.random()*items.length)];
       	}
       }
	}
	return item;
}
function speak(string){
	var utterance=new SpeechSynthesisUtterance();
	utterance.voice=window.speechSynthesis.getVoices()[0];//.filter(function(voice){return voice.name=="kshitiz";});
	utterance.text=string;
	utterance.lang="en-US";
	utterance.volume=1;
	utterance.pitch=2;
	speechSynthesis.speak(utterance);
  }

