(this.webpackJsonpsongs=this.webpackJsonpsongs||[]).push([[0],{16:function(e,t,n){e.exports=n(26)},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),i=n.n(l),c=n(4),o=n(3),s=n(11),u=n(12),m=n(14),d=n(13),E=n(15),p=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"renderList",value:function(){var e=this;return this.props.songs.map((function(t){return r.a.createElement("div",{className:"item",key:t.title},r.a.createElement("div",{className:"right floated content"},r.a.createElement("button",{className:"ui button primary",onClick:function(){return e.props.selectSong(t)}},"Select")),r.a.createElement("div",{className:"content"},t.title))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"ui divided list"},this.renderList())}}]),t}(a.Component),g=Object(c.b)((function(e){return{songs:e.songs}}),{selectSong:function(e){return{type:"SONG_SELECTED",payload:e}}})(p),b=Object(c.b)((function(e){return console.log("HERE",e),{song:e.spiderman}}))((function(e){var t=e.song;return t?r.a.createElement("div",null,r.a.createElement("h3",null,"Details for:"),r.a.createElement("p",null,"Title: ",t.title,r.a.createElement("br",null),"Duration: ",t.duration)):"Select a song"})),v=function(){return r.a.createElement("div",{className:"ui container grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"column eight wide"},r.a.createElement(g,null)),r.a.createElement("div",{className:"column eight wide"},r.a.createElement(b,null))))},f=Object(o.b)({songs:function(){return console.log("songs reducer"),[{title:"No Scrubs",duration:"4:05"},{title:"Macarena",duration:"2:30"},{title:"All Star",duration:"3:15"},{title:"I Want it That Way",duration:"1:45"}]},spiderman:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SONG_SELECTED"===t.type?t.payload:e}});i.a.render(r.a.createElement(c.a,{store:Object(o.c)(f)},r.a.createElement(v,null)),document.querySelector("#root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a5da8128.chunk.js.map