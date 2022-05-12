var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i =0; i<names.length;i++) {
     var firstLetter = names[i].charAt(0);
     const name = names[i];
  if (firstLetter=='j'|| firstLetter=='J'){
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}
