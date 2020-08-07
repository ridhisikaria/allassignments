(function(){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry",
"Paula", "Laura", "Jim"]; 
for (var name in names) {
	if((((names[name].toLowerCase()).charAt(0))==="j")||(names[name].charAt(0)==="J")){
		byeSpeaker.speak(names[name]);
	}
	else{
		helloSpeaker.speak(names[name]);
	}
}
})();