(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(n,e,t){"use strict";var r=t(18),a=t.n(r);t(0);function i(){var n=a()(["\n    /* Adapt the colors based on primary prop */\n    background: ",";\n    color: ",";\n    /* Adapt the colors based on primary prop */\n    background: ",";\n    color: ",";\n    cursor: pointer;\n    font-size: 1em;\n    margin: 1em;\n    padding: 0.25em 1em;\n    border: 0px solid palevioletred;\n    border-radius: 3px;\n    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2),\n                0px 1px 1px 0px rgba(0,0,0,0.14),\n                0px 2px 1px -1px rgba(0,0,0,0.12);\n\n    transition: .3s;\n    &:hover {\n        background: ",";\n        color: ",";\n\n        background: ",";\n        color: ",";\n    }\n"]);return i=function(){return n},n}var o=t(17).a.button(i(),function(n){return n.primary?"#2976D2":"white"},function(n){return n.primary?"white":"#2976D2"},function(n){return n.pink?"#e91e63":"white"},function(n){return n.pink?"white":"#e91e63"},function(n){return n.primary?"white":"#2976D2"},function(n){return n.primary?"#2976D2":"white"},function(n){return n.pink?"white":"#e91e63"},function(n){return n.pink?"#e91e63":"white"});e.a=o},150:function(n,e,t){"use strict";var r=t(18),a=t.n(r),i=(t(0),t(17)),o=t(151),c=t.n(o),l=t(152),u=t.n(l);function p(){var n=a()(["\n    width: 100%;\n    height: 60vh;\n    /* background-image: url(","); */\n    background-image: ",";\n    background-size: cover;\n    background-position: center;\n    color: white;\n    /* flex */\n    display: flex;\n    align-items: center;\n    flex-flow: column;\n    /* fix the hight of Navbar */\n    padding-top: 4rem;\n"]);return p=function(){return n},n}var m=i.a.div(p(),c.a,function(n){return n.blue?"url(".concat(u.a,")"):"url(".concat(c.a,")")});e.a=m},151:function(n,e,t){n.exports=t.p+"static/legopink.368051a6.jpg"},152:function(n,e,t){n.exports=t.p+"static/legoblue.5a2c38cc.jpg"},153:function(n,e,t){"use strict";var r=t(18),a=t.n(r);t(0);function i(){var n=a()(["\n    transition: .3s;\n    background-color: #fefefe;\n    &:hover {\n        background-color: white;\n    }\n    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2),\n                0px 1px 1px 0px rgba(0,0,0,0.14),\n                0px 2px 1px -1px rgba(0,0,0,0.12);\n\n    border-radius: 2px;\n    height: auto;\n    margin-top: 1rem;\n    margin-bottom: 2rem;\n    padding: 1rem;\n"]);return i=function(){return n},n}var o=t(17).a.div(i());e.a=o},154:function(n,e,t){"use strict";var r=t(18),a=t.n(r),i=t(0),o=t.n(i),c=t(17);function l(){var n=a()(["\n    background-color: #4caf50;\n    height: 4px;\n    width: 16px;\n    border-radius: 2px;\n    margin: 0 2px 4px;\n"]);return l=function(){return n},n}function u(){var n=a()(["\n    background-color: #ffeb3b;\n    height: 4px;\n    width: 16px;\n    border-radius: 2px;\n    margin: 0 2px 4px;\n"]);return u=function(){return n},n}function p(){var n=a()(["\n    background-color: #ff5722;\n    height: 4px;\n    width: 16px;\n    border-radius: 2px;\n    margin: 0 2px 4px;\n"]);return p=function(){return n},n}e.a=function(){return o.a.createElement("div",{className:"is-flex"},o.a.createElement(m,null),o.a.createElement(s,null),o.a.createElement(d,null))};var m=c.a.div(p()),s=c.a.div(u()),d=c.a.div(l())},155:function(n,e,t){"use strict";var r=t(0),a=t.n(r);e.a=function(){return a.a.createElement("div",null,a.a.createElement("span",{dangerouslySetInnerHTML:{__html:"&copy; "}}),"ShinKano 2019",a.a.createElement("p",null))}},61:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return s});var r=t(0),a=t.n(r),i=t(15),o=t(20),c=t(148),l=t(150),u=t(153),p=t(154),m=t(155);function s(){var n=Object(i.useRouteData)().posts;return a.a.createElement("div",{style:{textAlign:"center"}},a.a.createElement(l.a,{blue:!0},a.a.createElement("div",{className:"is-margin-top"},a.a.createElement("div",{className:"is-margin-top-4"}),a.a.createElement("br",null),a.a.createElement("h1",null,"スタッフのブログ"),a.a.createElement("h2",null,"ここにサブタイトルは入る"))),a.a.createElement("div",{className:"is-margin-top-4"}),a.a.createElement("div",null,a.a.createElement("a",{href:"#bottom",id:"top"},a.a.createElement(c.a,{pink:!0},"いちばん古いブログをみる"))),a.a.createElement("div",{className:"container"},a.a.createElement("br",null),a.a.createElement(p.a,null),a.a.createElement("br",null),a.a.createElement("ul",{className:"is-align-left"},n.map(function(n){return a.a.createElement("li",{key:n.id},a.a.createElement(u.a,null,a.a.createElement(o.a,{to:"/blog/post/".concat(n.id,"/")},a.a.createElement("p",null,n.created_at.slice(0,16).replace("T"," - ")),a.a.createElement("p",null,n.title))))}))),a.a.createElement("br",null),a.a.createElement(p.a,null),a.a.createElement("br",null),a.a.createElement("div",{className:"is-margin-top"}),a.a.createElement("a",{href:"#top",id:"bottom"},a.a.createElement(c.a,{pink:!0},"いちばん新しいブログをみる")),a.a.createElement("div",{className:"is-margin-top-4"}),a.a.createElement(m.a,null))}}}]);