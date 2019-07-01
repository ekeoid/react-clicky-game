(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=a(8),s=a(9),i=a(12),m=a(10),u=a(13),p=a(11),g=a(5);a(28);var h=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(p.b,{className:"navbar-brand",to:"/"},"Clicky Game"),r.a.createElement("div",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item score"},"Score: ",r.a.createElement("span",null,e.score)),"|",r.a.createElement("li",{className:"nav-item top-score"},"Top Score: ",e.topScore)))};var d=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)};function v(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function f(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function b(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(33);var E=function(e){return r.a.createElement(b,{size:"md-3"},r.a.createElement("img",{src:e.url,alt:e.id,onClick:e.onClick}))};a(34);var k=function(e){return r.a.createElement("span",null,function(e){return console.log(e),"none"===e.value.status?null:r.a.createElement("div",{className:"alert alert-".concat(e.value.status)},e.value.text)}(e))};function S(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}var y=[{name:"yellow",path:"../../../images/yellow.png"},{name:"biege",path:"../../../images/biege.png"},{name:"black",path:"../../..//images/black.png"},{name:"blue",path:"../../../images/blue.png"},{name:"brown",path:"../../../images/brown.png"},{name:"gray",path:"../../../images/gray.png"},{name:"green",path:"../../../images/green.png"},{name:"light blue",path:"../../../images/light-blue.png"},{name:"lime",path:"../../../images/lime.png"},{name:"maroon",path:"../../../images/maroon.png"},{name:"navy",path:"../../../images/navy.png"},{name:"olive",path:"../../../images/olive.png"},{name:"orange",path:"../../../images/orange.png"},{name:"pink",path:"../../../images/pink.png"},{name:"purple",path:"../../../images/purple.png"},{name:"red",path:"../../../images/red.png"}],w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={colors:y,clicked:[],score:0,topScore:0,message:{status:"none",text:""}},a.clickTile=function(e){var t=e.target.alt,n=!1,r=a.state.score;return-1===a.state.clicked.indexOf(t)?(a.state.clicked.push(t),n=!0,console.log("Click: ",n)):(n=!1,console.log("Click: ",n)),n?(r+=1,a.setState({colors:S(a.state.colors),score:r,message:{status:"none"}}),console.log(a.state.score,a.state.topScore)):(console.log("Clicked Already!"),r=0,a.setState({colors:S(a.state.colors),clicked:[],score:0,topScore:a.state.score>a.state.topScore?a.state.score:a.state.topScore,message:{status:"danger",text:"You clicked a color twice! Sorry, better luck next time"}})),12===a.state.score&&(r=0,a.setState({colors:S(a.state.colors),clicked:[],score:0,topScore:a.state.score>a.state.topScore?a.state.score:a.state.topScore,message:{status:"success",text:"You did it! You matched all the colors."}})),a.props.handleScores(r,a.state.topScore),console.log(a.state.clicked)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({colors:S(y).slice(4)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(k,{value:this.state.message}),r.a.createElement(d,null,r.a.createElement("h1",null,"Clicky Game!"),r.a.createElement("h3",null,"Click on an image to earn points, but don't click on any more than once!")),r.a.createElement(v,{style:{marginTop:30}},r.a.createElement(f,null,this.state.colors.map(function(t,a){return r.a.createElement(E,{key:a,id:t.name,onClick:e.clickTile,url:t.path})}))))}}]),t}(n.Component);a(35);var j=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"React Clicky Game 2019"))},C=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={score:0,topScore:0},a.handleScores=function(e,t){a.setState({score:e,topScore:t}),console.log("score: "+e),console.log("top score: "+t)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(h,{score:this.state.score,topScore:this.state.topScore}),r.a.createElement(g.a,{path:"/",render:function(t){return r.a.createElement(w,Object.assign({},t,{handleScores:e.handleScores}))}}),r.a.createElement(j,null)))}}]),t}(n.Component);o.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.af4cc268.chunk.js.map