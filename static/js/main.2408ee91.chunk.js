(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Dr. Octopus",image:"https://vignette.wikia.nocookie.net/marveldatabase/images/7/7e/Otto_Octavius_%28Earth-12131%29.png/revision/latest?cb=20140927154402"},{id:2,name:"William Baker",image:"http://vignette4.wikia.nocookie.net/marveldatabase/images/5/5e/William_Baker_(Earth-12131)_002.png/revision/latest?cb=20140523225548"},{id:3,name:"Iron Fist",image:"https://cdn.vox-cdn.com/uploads/chorus_image/image/49347507/Iron_Fist_Portrait_Art.0.0.png"},{id:4,name:"Quicksilver",image:"https://vignette.wikia.nocookie.net/avengersalliance/images/e/e7/Quicksilver_Portrait_Art.png/revision/latest?cb=20131215102229"},{id:5,name:"Hawkeye",image:"https://vignette.wikia.nocookie.net/the-adventures-of-the-gladiators-of-cybertron/images/5/52/Hawkeye.png/revision/latest?cb=20140727182629"},{id:6,name:"Iron Man",image:"https://i.pinimg.com/originals/00/ef/cc/00efccb2b757bf1a84025289ed076f86.png"},{id:7,name:"Captain America",image:"https://vignette.wikia.nocookie.net/fantendo/images/0/00/CaptainAmericaFull.png/revision/latest?cb=20131227162737"},{id:8,name:"Cyclops",image:"https://i.pinimg.com/originals/80/47/14/80471452ae65335875c22acb5044876d.png"},{id:9,name:"Hulk",image:"https://vignette.wikia.nocookie.net/marveldatabase/images/f/fc/Bruce_Banner_%28Earth-12131%29_from_Marvel_Avengers_Alliance_001.png/revision/latest?cb=20130402200335"},{id:10,name:"Black Panther",image:"https://i.pinimg.com/originals/c2/7b/f3/c27bf3ef1ee6313eaa73515ec9872592.png"},{id:11,name:"Deadpool",image:"https://vignette.wikia.nocookie.net/avengersalliance/images/c/c4/Deadpool_Portrait_Art.png/revision/latest?cb=20130529053756"},{id:12,name:"Magneto",image:"http://www.blogcdn.com/blog.games.com/media/2013/01/magneto1full01.png"}]},,,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),s=a(4),o=a(5),l=a(7),m=a(6),u=a(8);a(15);var g=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar fixed-top navbar-light bg-light"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Navbar"),r.a.createElement("div",{className:"row nav-row"},r.a.createElement("div",{className:"col-lg-6"},e.firstGuess?r.a.createElement("div",null,e.correctGuess?r.a.createElement("p",null,"You Guessed Correctly!"):r.a.createElement("p",null,"Wrong Guess!")):r.a.createElement("p",null,"Choose a Character Below: ")),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("p",{className:""},"Correct Guesses: ",e.count," | High Score: ",e.highScore)))))};a(17);var h=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};a(19);var d=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",{className:"title"},e.children)))},v=a(1);a(21);var p=function(e){return r.a.createElement("div",{onClick:function(){return e.shuffleArray(e.id)},className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})))},f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={characters:v,countedCharacters:[],count:0,highScore:0,correctGuess:null,firstGuess:!1},a.countCharacter=function(e){if(-1===a.state.countedCharacters.indexOf(e)){for(var t=a.state.characters.filter(function(t){return t.id===e}),n=a.state.countedCharacters,r=0;r<t.length;r++)n.push(t[r].id);console.log(t);for(var c=a.state.characters.length-1;c>0;c--){var i=Math.floor(Math.random()*(c+1)),s=[a.state.characters[i],a.state.characters[c]];a.state.characters[c]=s[0],a.state.characters[i]=s[1]}var o=a.state.highScore;o<=a.state.count&&(o=a.state.count+1),a.setState({countedCharacters:n,count:a.state.count+1,characters:a.state.characters,highScore:o,correctGuess:!0,firstGuess:!0}),console.log(v),console.log(a.state.correctGuess),console.log(a.state.countedCharacters),console.log(a.state.count)}else a.setState({count:0,countedCharacters:[],correctGuess:!1,firstGuess:!0})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(h,{className:"container"},r.a.createElement(g,{count:this.state.count,highScore:this.state.highScore,correctGuess:this.state.correctGuess,firstGuess:this.state.firstGuess}),r.a.createElement(d,null,"Superhero Memory Game"),this.state.characters.map(function(t){return r.a.createElement(p,{shuffleArray:e.countCharacter,id:t.id,key:t.id,name:t.name,image:t.image})}))}}]),t}(n.Component);i.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.2408ee91.chunk.js.map