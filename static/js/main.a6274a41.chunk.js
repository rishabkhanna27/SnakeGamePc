(this.webpackJsonpsnakegame=this.webpackJsonpsnakegame||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(11),i=a.n(c),o=(a(22),a(6)),r=a(12),l=a(13),h=a(16),m=a(15),u=function(e){return s.a.createElement("div",null,e.snakeDots.map((function(e,t){var a={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return s.a.createElement("div",{className:"main-dot",key:t,style:a})})))},d=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%")};return s.a.createElement("div",{className:"main-food",style:t})},f=function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("a",{href:"https://github.com/rishabkhanna27"},s.a.createElement("b",null,s.a.createElement("u",null,"Made By: Rishab Khanna"))))},k=a(30),v=a(3),E=a(4),p=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},b={food:p(),speed:150,direction:"RIGHT",isActive:!1,snakeDots:[[0,0],[2,0]]},g=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).handleStart=function(){e.setState({isActive:!0})},e.handlePause=function(){e.setState({isActive:!1})},e.handleRestart=function(){e.setState(b)},e.handleRight=function(){e.setState({direction:"RIGHT"})},e.handleLeft=function(){e.setState({direction:"LEFT"})},e.handleUp=function(){e.setState({direction:"UP"})},e.handleDown=function(){e.setState({direction:"DOWN"})},e.state=b,e.onKeyDown=function(t){switch((t=t||window.event).keyCode){case 38:e.setState({direction:"UP"});break;case 40:e.setState({direction:"DOWN"});break;case 37:e.setState({direction:"LEFT"});break;case 39:e.setState({direction:"RIGHT"})}},e.moveSnake=function(){if(e.state.isActive){var t=Object(o.a)(e.state.snakeDots),a=t[t.length-1];switch(e.state.direction){case"RIGHT":a=[a[0]+2,a[1]];break;case"LEFT":a=[a[0]-2,a[1]];break;case"DOWN":a=[a[0],a[1]+2];break;case"UP":a=[a[0],a[1]-2]}t.push(a),t.shift(),e.setState({snakeDots:t})}},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){setInterval(this.moveSnake,this.state.speed),document.onkeydown=this.onKeyDown}},{key:"componentDidUpdate",value:function(){this.checkIfOutOfBorders(),this.checkIfCollapsed(),this.checkIfEat()}},{key:"checkIfOutOfBorders",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.onGameOver()}},{key:"checkIfCollapsed",value:function(){var e=this,t=Object(o.a)(this.state.snakeDots),a=t[t.length-1];t.pop(),t.forEach((function(t){a[0]===t[0]&&a[1]===t[1]&&e.onGameOver()}))}},{key:"checkIfEat",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1],t=this.state.food;e[0]===t[0]&&e[1]===t[1]&&(this.setState({food:p()}),this.enlargeSnake(),this.increaseSpeed())}},{key:"enlargeSnake",value:function(){var e=Object(o.a)(this.state.snakeDots);e.unshift([]),this.setState({snakeDots:e})}},{key:"increaseSpeed",value:function(){this.state.speed>10&&this.setState({speed:this.state.speed-10})}},{key:"onGameOver",value:function(){alert("Game Over. Snake length is ".concat(this.state.snakeDots.length)),this.setState(b)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"area"},s.a.createElement(u,{snakeDots:this.state.snakeDots}),s.a.createElement(d,{dot:this.state.food})),s.a.createElement("p",{className:"head"},s.a.createElement("b",null,s.a.createElement("u",null,"Snake Game"))),s.a.createElement("div",{className:"main"},s.a.createElement(k.a,{className:"bt",variant:"info",size:"lg",onClick:this.handleStart},s.a.createElement(v.a,{icon:E.f})),"     ",s.a.createElement(k.a,{className:"bt",variant:"primary",size:"lg",onClick:this.handlePause},s.a.createElement(v.a,{icon:E.e}))," ","    ",s.a.createElement(k.a,{className:"bt",variant:"danger",size:"lg",onClick:this.handleRestart},s.a.createElement(v.a,{icon:E.g}))),s.a.createElement("div",{className:"controller"},s.a.createElement("p",null,s.a.createElement(k.a,{className:"button",variant:"info",size:"lg",onClick:this.handleUp},s.a.createElement(v.a,{icon:E.d}))),s.a.createElement(k.a,{className:"button",variant:"info",size:"lg",onClick:this.handleLeft},s.a.createElement(v.a,{icon:E.b})),"     ",s.a.createElement(k.a,{className:"button",variant:"primary",size:"lg",onClick:this.handleDown},s.a.createElement(v.a,{icon:E.a}))," ","    ",s.a.createElement(k.a,{className:"button",variant:"info",size:"lg",onClick:this.handleRight},s.a.createElement(v.a,{icon:E.c}))),s.a.createElement(f,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.a6274a41.chunk.js.map