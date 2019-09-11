(window["webpackJsonpdonut-chart"]=window["webpackJsonpdonut-chart"]||[]).push([[0],{12:function(e,t,n){},29:function(e,t,n){e.exports=n(65)},34:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),l=(n(34),n(12),n(1)),s=n(2),i=n(5),u=n(3),d=n(6),f=n(4),h=(n(35),n(27)),m=n.n(h),p={1:{"money market":50,"government bonds":30,"equity mutual funds":20},2:{"money market":30,"government bonds":30,"equity mutual funds":20,"real estate":20},3:{"government bonds":30,"money market":15,"equity mutual funds":35,"real estate":20},4:{"government bonds":20,"equity mutual funds":40,"real estate":25,futures:15},5:{"equity mutual funds":35,"government bonds":15,"real estate":30,futures:20},6:{"equity mutual funds":40,"real estate":25,futures:20,options:15},7:{"real estate":40,"equity mutual funds":25,futures:20,options:15},8:{futures:30,"real estate":35,options:20,"equity mutual funds":15},9:{options:35,futures:35,"real estate":15,"equity mutual funds":15},10:{options:50,futures:30,"real estate":20}},v=n(28),g=n.n(v),b=n(8),y=n.n(b);function k(e,t,n,a){var r=Math.PI*n/180,o=e+e*t*Math.cos(r),c=e+e*t*Math.sin(r),l=Math.PI*a/180;return{x1:o,y1:c,x2:e+e*t*Math.cos(l),y2:e+e*t*Math.sin(l)}}function E(e,t,n,a,r){var o=e/2*t;return"A".concat(o,", ").concat(o," 0 ").concat(n," ").concat(a,", ").concat(r)}var O=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.width,n=e.angle,a=e.total,o=e.fill,c=e.stroke,l=e.opacity,s=e.item,i=e.className,u=e.innerRadius,d=e.outerRadius,f=e.onClick,h=e.onMouseEnter,m=s.value,p=function(e,t,n,a,r){var o=t+e,c=e>180?"1 1":"0 1",l=e>180?"1 0":"0 0",s=n/2,i=k(s,r,t,o),u=k(s,a,t,o),d=E(n,r,c,i.x2,i.y2),f=E(n,a,l,u.x1,u.y1);return"M".concat(i.x1,",").concat(i.y1,"\n    ").concat(d,"\n    L").concat(u.x2,",").concat(u.y2,"\n    ").concat(f," z")}(Number.isNaN(m/a)||a/m===1?359.99:m/a*360,n,t,u,d);return r.a.createElement("path",{onClick:function(){return f(s)},onMouseEnter:function(){return h(s)},className:i,d:p,stroke:c,fill:o,opacity:l})}}]),t}(a.Component);O.defaultProps={item:{label:"",value:100,isEmpty:!0},total:100,angle:0,width:500,innerRadius:.7,outerRadius:.9,onMouseEnter:function(e){return e},onClick:function(e){return e},fill:"#e0e0e0",stroke:"#e0e0e0",opacity:1,className:"donutchart-arcs-path"};var N=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.startAngle,a=t.className,o=t.data,c=t.selectedOffset,l=t.toggledOffset,s=t.emptyOffset,i=t.colors,u=t.emptyColor,d=t.strokeColor,f=t.colorFunction,h=t.onMouseEnter,m=t.onClick,p=t.total,v=t.width,g=t.selected,b=t.toggleSelect,k="".concat(a,"-path"),E=n;return r.a.createElement("g",{className:a},o.map(function(t,n){var a={},o=t.value,N=t.isEmpty,x=t.className,C=e.props,j=C.innerRadius,w=C.outerRadius,S=d,M=1;N?(a.empty=!0,j+=s,w-=s,S=u):g.label===t.label&&(b?(a.toggled=!0,j-=l,w+=l,M=1):(a.selected=!0,w+=c,M=.5)),x&&(a[x]=!0),a[k]=!0;var R=N?u:f(i,n),T=r.a.createElement(O,{width:v,item:t,key:"arcpath".concat(n),innerRadius:j,outerRadius:w,className:y()(a),opacity:M,fill:R,stroke:S,angle:E,total:p,onMouseEnter:h,onClick:m});return E+=o/p*360,T}))}}]),t}(a.Component);N.defaultProps={data:[{label:"",value:100,isEmpty:!0}],selected:{value:100,label:"",isEmpty:!0},toggleSelect:!1,total:100,className:"donutchart-arcs",width:500,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"],emptyColor:"#e0e0e0",strokeColor:"#212121",startAngle:0,colorFunction:function(e,t){return e[t%e.length]},innerRadius:.7,outerRadius:.9,selectedOffset:.03,emptyOffset:.08,toggledOffset:.04,onMouseEnter:function(e){return e},onClick:function(e){return e}};var x=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,n=e.className,a=e.width,o=e.formatValues,c=e.total,l=t.label,s=t.value,i=a/2,u="".concat(n,"-label"),d="".concat(n,"-value");return r.a.createElement("g",{className:n},r.a.createElement("text",{className:u,x:i,y:"45%",textAnchor:"middle"},l),r.a.createElement("text",{className:d,x:i,y:"60%",textAnchor:"middle"},o(s,c)))}}]),t}(a.Component);x.defaultProps={item:{label:"",value:100,isEmpty:!0},total:100,className:"donutchart-innertext",width:500,formatValues:function(e){return e}};var C=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.item,a=e.index,o=e.onClick,c=e.onMouseEnter,l=e.fill,s=e.opacity,i=e.width,u=e.totalWidth,d=e.stroke,f=n.label,h=n.value,m="".concat(t,"-rect"),p="".concat(t,"-label"),v=i/10,g="translate(".concat(u-i,",\n").concat(1.5*a*v,")");return r.a.createElement("g",{transform:g,className:t,onClick:function(){o(n)},onMouseEnter:function(){c(n)}},r.a.createElement("rect",{className:m,width:v,height:v,fill:l,opacity:s,stroke:d}),r.a.createElement("text",{className:p,x:v+v/2,y:v/2,dy:".35em"},"".concat(f," - ").concat(h)))}}]),t}(a.Component);C.defaultProps={item:{label:"",value:100,isEmpty:!0},index:0,opacity:1,fill:"#e0e0e0",stroke:"#e0e0e0",className:"donutchart-legend-item",width:250,totalWidth:750,onMouseEnter:function(e){return e},onClick:function(e){return e}};var j=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.data,a=e.strokeColor,o=e.emptyColor,c=e.colorFunction,l=e.colors,s=e.width,i=e.totalWidth,u=e.onClick,d=e.onMouseEnter,f=e.toggleSelect,h=e.selected,m="".concat(t,"-item");return r.a.createElement("g",{className:t},n.map(function(e,t){var n={},p=e.isEmpty,v=e.className,g=a,b=1;p?(n.empty=!0,g=o):h.label===e.label&&(f?(n.toggled=!0,b=1):(n.selected=!0,b=.5)),v&&(n[v]=!0),n[m]=!0;var k=p?o:c(l,t);return r.a.createElement(C,{key:"legenditem".concat(t),index:t,item:e,className:y()(n),width:s,totalWidth:i,opacity:b,fill:k,stroke:g,onClick:u,onMouseEnter:d})}))}}]),t}(a.Component);j.defaultProps={data:[{label:"",value:100,isEmpty:!0}],selected:{value:100,label:"",isEmpty:!0},toggleSelect:!1,className:"donutchart-legend",width:250,totalWidth:750,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"],emptyColor:"#e0e0e0",strokeColor:"#212121",colorFunction:function(e,t){return e[t%e.length]},onMouseEnter:function(e){return e},onClick:function(e){return e}};var w=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(i.a)(this,Object(u.a)(t).call(this,e));var a=e.data;return n.state={selected:a[0],toggleSelect:!1},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data;t&&JSON.stringify(t)!==JSON.stringify(this.props.data)&&this.setState({selected:t[0],toggleSelect:!1})}},{key:"handleClick",value:function(e){if(this.state.selected.label===e.label){var t=!!this.props.clickToggle&&!this.state.toggleSelect;this.setState({toggleSelect:t,selected:e}),this.props.onClick(e,t)}}},{key:"handleMouseEnter",value:function(e){this.state.toggleSelect||(this.setState({selected:e}),this.props.onMouseEnter(e))}},{key:"render",value:function(){var e=this.props,t=e.startAngle,n=e.width,a=e.height,o=e.formatValues,c=e.className,l=e.data,s=e.legend,i=e.emptyColor,u=e.strokeColor,d=e.colors,f=e.colorFunction,h=e.innerRadius,m=e.outerRadius,p=e.emptyOffset,v=e.selectedOffset,g=e.toggledOffset,b="".concat(c,"-arcs"),y="".concat(c,"-innertext"),k="".concat(c,"-legend"),E=l.length?l:[{label:"",value:100,isEmpty:!0}],O=E.reduce(function(e,t){return e+t.value},0),C=s?n*(2/3):n,w=n-C;return r.a.createElement("svg",{className:c,viewBox:"0 0 1000 ".concat(a)},r.a.createElement(N,{className:b,colors:d,data:E,width:C,emptyColor:i,strokeColor:u,colorFunction:f,onMouseEnter:this.handleMouseEnter.bind(this),onClick:this.handleClick.bind(this),selected:this.state.selected,startAngle:t,toggleSelect:this.state.toggleSelect,innerRadius:h,outerRadius:m,selectedOffset:v,toggledOffset:g,emptyOffset:p,total:O}),r.a.createElement(x,{item:this.state.selected,width:C,formatValues:o,total:O,className:y}),s?r.a.createElement(j,{data:E,totalWidth:n,width:w,colors:d,emptyColor:i,strokeColor:u,colorFunction:f,onMouseEnter:this.handleMouseEnter.bind(this),onClick:this.handleClick.bind(this),selected:this.state.selected,toggleSelect:this.state.toggleSelect,className:k}):null)}}]),t}(a.Component);w.defaultProps={data:[{label:"",value:100,isEmpty:!0}],className:"donutchart",height:500,width:750,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"],emptyColor:"#e0e0e0",strokeColor:"#212121",startAngle:0,colorFunction:function(e,t){return e[t%e.length]},innerRadius:.7,outerRadius:.9,selectedOffset:.03,emptyOffset:.08,toggledOffset:.04,formatValues:function(e,t){return Number.isNaN(e/t)?"--":"".concat((e/t*100).toFixed(2),"%")},onMouseEnter:function(e){return e},onClick:function(e,t){return t?e:null},legend:!0,clickToggle:!0};var S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,n=e.className,a=e.width,o=e.formatValues,c=e.total,l=t.label,s=t.value,i=a/2,u="".concat(n,"-label"),d="".concat(n,"-value");return r.a.createElement("g",{className:n},r.a.createElement("text",{className:u,x:i,y:"30%",textAnchor:"middle"},l),r.a.createElement("text",{className:d,x:i,y:"50%",textAnchor:"middle"},o(s,c)))}}]),t}(a.Component);S.defaultProps={item:{label:"",value:100,isEmpty:!0},total:100,className:"donutchart-innertext",width:500,formatValues:function(e){return e}};var M=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(i.a)(this,Object(u.a)(t).call(this,e));var a=e.data;return n.state={selected:a[0],toggleSelect:!1},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data;t&&JSON.stringify(t)!==JSON.stringify(this.props.data)&&this.setState({selected:t[0],toggleSelect:!1})}},{key:"handleClick",value:function(e){if(this.state.selected.label===e.label){var t=!!this.props.clickToggle&&!this.state.toggleSelect;this.setState({toggleSelect:t,selected:e}),this.props.onClick(e,t)}}},{key:"handleMouseEnter",value:function(e){this.state.toggleSelect||(this.setState({selected:e}),this.props.onMouseEnter(e))}},{key:"render",value:function(){var e=this.props,t=e.startAngle,n=e.width,a=(e.height,e.formatValues),o=e.className,c=e.data,l=e.legend,s=e.emptyColor,i=e.strokeColor,u=e.colors,d=e.colorFunction,f=e.innerRadius,h=e.outerRadius,m=e.emptyOffset,p=e.selectedOffset,v=e.toggledOffset,g="".concat(o,"-arcs"),b="".concat(o,"-innertext"),y="".concat(o,"-legend"),k=c.length?c:[{label:"",value:100,isEmpty:!0}],E=k.reduce(function(e,t){return e+t.value},0),O=l?n*(2/3):n,x=n-O;return r.a.createElement("div",{className:"hidden-over-500"},l?r.a.createElement("svg",{width:"".concat(300,"px"),height:"".concat(120,"px"),viewBox:"400 20 450 80"},r.a.createElement(j,{data:k,totalWidth:n,width:x,colors:u,emptyColor:s,strokeColor:i,colorFunction:d,onMouseEnter:this.handleMouseEnter.bind(this),onClick:this.handleClick.bind(this),selected:this.state.selected,toggleSelect:this.state.toggleSelect,className:y})):null,r.a.createElement("svg",{className:"donutchart-mobile",width:"300px",viewBox:"0 0 500 500"},r.a.createElement(N,{className:g,colors:u,data:k,width:O,emptyColor:s,strokeColor:i,colorFunction:d,onMouseEnter:this.handleMouseEnter.bind(this),onClick:this.handleClick.bind(this),selected:this.state.selected,startAngle:t,toggleSelect:this.state.toggleSelect,innerRadius:f,outerRadius:h,selectedOffset:p,toggledOffset:v,emptyOffset:m,total:E}),r.a.createElement(S,{item:this.state.selected,width:O,formatValues:a,total:E,className:b})))}}]),t}(a.Component);M.defaultProps={data:[{label:"",value:100,isEmpty:!0}],className:"donutchart",height:500,width:750,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#607d8b"],emptyColor:"#e0e0e0",strokeColor:"#212121",startAngle:0,colorFunction:function(e,t){return e[t%e.length]},innerRadius:.7,outerRadius:.9,selectedOffset:.03,emptyOffset:.08,toggledOffset:.04,formatValues:function(e,t){return Number.isNaN(e/t)?"--":"".concat((e/t*100).toFixed(2),"%")},onMouseEnter:function(e){return e},onClick:function(e,t){return t?e:null},legend:!0,clickToggle:!0},m()();var R=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).numberChange=n.numberChange.bind(Object(d.a)(n)),n.state={pageNumber:1},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"numberChange",value:function(e){var t=this;this.intervalId&&clearTimeout(this.intervalId),this.intervalId=setTimeout(function(){return t.setState({riskTolerance:e})},500),this.props.setRiskTolerance(e)}},{key:"renderRecommendation",value:function(){var e=this.state.riskTolerance,t=p[e];if(!t)return null;var n=Object.keys(t).map(function(e){return{label:e,value:t[e]}});return r.a.createElement("div",{className:"portfolio-recommend"},r.a.createElement("div",null,"Thank you! At a risk tolerance level of ",e,", we recommend: "),r.a.createElement("div",{className:"donutchart-container hidden-under-500"},r.a.createElement(w,{className:"donut-chart",data:n,formatValues:function(e){return e+"%"}})),r.a.createElement(M,{className:"donutchart-with-legend-mobile",data:n,formatValues:function(e){return e+"%"}}),r.a.createElement("div",null,r.a.createElement("span",{style:{marginRight:"15px"}},"Next, we'll suggest a series of asset transfers to achieve this recommended portfolio."),r.a.createElement("button",{onClick:this.props.nextPage},"Next")))}},{key:"addPercentSigns",value:function(){Array.from(document.getElementsByClassName("donut-chart-legend-item-label")).forEach(function(e){e.innerHTML.endsWith("%")||(e.innerHTML+="%")})}},{key:"changeViewBox",value:function(){document.getElementsByClassName("donut-chart")[0].viewBox="0 0 100 100"}},{key:"render",value:function(){return setTimeout(this.addPercentSigns,0),r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"centered-container",style:{maxWidth:"640px"}},r.a.createElement("div",{style:{marginBottom:"22px"}},"Over the next two pages, we'll guide you to an investment portfolio that achieves a balance of stability and profitability, tailored to your financial situation and preferences."),"Please select a level of risk tolerance from 1 to 10.",r.a.createElement(g.a,{min:1,max:10,className:"number-picker",onChange:this.numberChange}),r.a.createElement("div",null,this.renderRecommendation())))}}]),t}(r.a.Component),T=n(15),I=["money market","government bonds","equity mutual funds","real estate","futures","options"],P=function(e,t,n,a){var r={},o={},c=0;n.forEach(function(t){c+=e[t]||0}),c=parseInt(c),n.forEach(function(n){r[n]=Math.round(100*e[n]/(c*a)),o[n]=Math.round(t[n]/a)});var l=function(e,t,n){var a,r,o,c=[],l={},s={};Array.prototype.without=function(e){var t=this.indexOf(e);return this.slice(0,t).concat(this.slice(t+1))};for(var i=n.length-1;i>=0;i--){var u=n[i];if(l[u]=(t[u]||0)-(e[u]||0),0!==(a=l[u])){var d=s[a];s[a]=d?d.concat([u]):[u]}}for(var f=0;f<n.length;f++){var h=n[f];(a=l[h])&&((o=s[-a])&&o.length&&(s[a]=s[a].without(h),r=o.pop(),c.push(a<0?[h,r,-a]:[r,h,a]),l[h]=0,l[r]=0))}for(var m=function(e){var t=n[e];a=l[t];var r=function(e){var r=n[e],o=l[r],i=-a-o;if(!s[i])return"continue";var u=s[i].find(function(e){return![t,r].includes(e)});if(!u)return"continue";var d=a*o*i,f=[t,r,u],h=f.find(function(e){return l[e]*d>0}),m=l[h],p=f.filter(function(e){return e!==h});return m<0?p.forEach(function(e){return c.push([h,e,l[e]])}):p.forEach(function(e){return c.push([e,h,-l[e]])}),f.forEach(function(e){var t=s[l[e]],n=t.indexOf(e);s[l[e]]=t.slice(0,n).concat(t.slice(n+1)),l[e]=0}),"break"};e:for(var o=e+1;o<n.length;o++){switch(r(o)){case"continue":continue;case"break":break e}}},p=0;p<n.length;p++)m(p);for(var v=function(e){var t=n[e];for(l[t]&&(s[l[t]]=s[l[t]].without(t));l[n[e]];){t=n[e],a=l[t];var o=void 0;if(void 0===(o=s[-a]&&s[-a].length?-a:Object.keys(s).find(function(e){return e*a<0&&s[e].length})))return{v:c};var i=s[o].pop(),u=Math.min(Math.abs(l[i]),Math.abs(a));u=a<0?u:-u,c.push(u>0?[t,i,u]:[i,t,-u]),l[t]+=u,l[i]-=u;var d=o-u,f=s[d];if(s[d]=f?f.concat(i):[i],d){var h=s[-d];h&&h.length&&(s[d]=s[d].without(i),r=h.pop(),c.push(d<0?[i,r,-d]:[r,i,d]),l[i]=0,l[r]=0)}if(t=[t,i].find(function(e){return 0!==l[e]}),a=l[t],t){var m=function(r){var o=n[r];if(o===t||!l[o])return"continue";var i=l[o],u=-a-i;if(!u||!s[u])return"continue";var d=s[u].find(function(e){return![t,o].includes(e)});if(!d)return"continue";var f=a*i*u,h=[t,o,d],m=h.find(function(e){return l[e]*f>0}),p=l[m],v=h.filter(function(e){return e!==m});return p<0?v.forEach(function(e){c.push([m,e,l[e]])}):v.forEach(function(e){c.push([e,m,-l[e]])}),h.forEach(function(t){if(t!==n[e]){var a=s[l[t]],r=a.indexOf(t);s[l[t]]=a.slice(0,r).concat(a.slice(r+1))}l[t]=0}),"break"};e:for(var p=0;p<n.length;p++){switch(m(p)){case"continue":continue;case"break":break e}}}}},g=0;g<n.length;g++){var b=v(g);if("object"===typeof b)return b.v}return c}(r,o,n),s={},i=l.map(function(e){var t=[e[0],e[1],Math.round(e[2]*a*c)/100];return s[e[0]]=s[e[0]]||[],s[e[0]].push(t),t});return Object.keys(s).forEach(function(n){if(!t[n]){var a=0;s[n].forEach(function(e){a+=e[2]});var r=e[n]-a;s[n][0][2]+=r}}),i},A=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={selectedNotchIdx:e.default,notchSeparation:100},n.setSelectedIdx=n.setSelectedIdx.bind(Object(d.a)(n)),n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"renderNotch",value:function(e){return r.a.createElement("span",{className:"vert"})}},{key:"setSelectedIdx",value:function(e){this.setState({selectedNotchIdx:e}),this.props.selectionFunction(e)}},{key:"componentDidUpdate",value:function(e){e.dummyIdx!==this.props.dummyIdx&&this.setState({selectedNotchIdx:this.props.default})}},{key:"render",value:function(){var e=this,t=this.props,n=t.numBuckets,a=t.leftText,o=t.rightText,c=new Array(n-2).fill("1");return r.a.createElement("div",null,r.a.createElement("div",{className:"widget-left-text"},a),r.a.createElement("div",{className:"line-selector"},r.a.createElement("svg",{height:"20",width:"20",className:"polygon-pointer",style:{left:"".concat(100*this.state.selectedNotchIdx,"px")}},r.a.createElement("defs",null,r.a.createElement("linearGradient",{id:"grad1",x1:"0%",y1:"0%",x2:"100%",y2:"0%"},r.a.createElement("stop",{offset:"0%",style:{stopColor:"rgb(200,200,200)",stopOpacity:1}}),r.a.createElement("stop",{offset:"100%",style:{stopColor:"rgb(255,255,255)",stopOpacity:1}}))),r.a.createElement("polygon",{points:"0,0 16,0 16,12 8,20 0,12",style:{fill:"url(#grad1)",stroke:"rgb(150,150,150)",strokeWidth:1}})),r.a.createElement("span",{className:"left-bucket",onClick:function(){return e.setSelectedIdx(0)}},this.renderNotch(0)),c.map(function(t,n){return r.a.createElement("span",{className:"bucket",onClick:function(){return e.setSelectedIdx(n+1)}},e.renderNotch(n+1))}),r.a.createElement("span",{className:"right-bucket",onClick:function(){return e.setSelectedIdx(e.props.numBuckets-1)}},this.renderNotch(this.props.numBuckets-1))),r.a.createElement("div",{className:"widget-right-text"},o))}}]),t}(r.a.Component),F=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(i.a)(this,Object(u.a)(t).call(this,e));var a={};return I.forEach(function(e){return a[e]="$0.00"}),a.idealStateInPercentage=p[n.props.riskTolerance],a.dummyIdx=0,n.state=a,n.buttonClick=n.buttonClick.bind(Object(d.a)(n)),window.getState=n.getState.bind(Object(d.a)(n)),n.leftText="Exactly matches template portfolio",n.rightText="Fewer transfers",n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"getState",value:function(){return this.state}},{key:"keyDownHandler",value:function(e){console.log(e.key),"0123456789".split("").concat(["Backspace","Tab","ArrowRight","ArrowLeft"]).includes(e.key)||e.preventDefault()}},{key:"inputHandler",value:function(e,t){this.setState(Object(T.a)({},t,e.target.value))}},{key:"buttonClick",value:function(){var e=this,t={};I.forEach(function(n){return t[n]=parseFloat(e.state[n].slice(1))});var n=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:30,o=(a-.1)/(r-1),c=[P(e,t,n,.1)],l=c[0].length;n=n.slice();for(var s=1;s<r;s++)for(var i=0;i<8;i++){n.sort(function(){return Math.random()-.5});var u=P(e,t,n,.1+s*o);u.length<l&&(l=u.length,c.push(u))}return c}(t,this.state.idealStateInPercentage,I);this.setState({transactionChoices:n,choiceIdx:0,dummyIdx:this.state.dummyIdx+1})}},{key:"renderRecommendation",value:function(){var e=this,t=this.state.transactionChoices[this.state.choiceIdx];return r.a.createElement("div",null,r.a.createElement("ul",{className:"transfer-container"},t.map(function(e,t){return r.a.createElement("li",{key:t},"Transfer ","$"+e[2].toFixed(2)," from ",e[0]," to ",e[1])})),this.state.transactionChoices.length>1?r.a.createElement("div",null," ",r.a.createElement("span",{style:{marginBottom:"12px",display:"inline-block"}},"Optionally, use fewer transfers:"),r.a.createElement(A,{numBuckets:this.state.transactionChoices.length,dummyIdx:this.state.dummyIdx,default:0,selectionFunction:function(t){return e.setState({choiceIdx:t})},leftText:this.leftText,rightText:this.rightText})):null)}},{key:"focusHandler",value:function(e){var t=e.target.value;e.target.value="$0.00"===t?"":t.split(".")[0].slice(1)}},{key:"blurHandler",value:function(e,t){var n=e.target.value||"0";this.setState(Object(T.a)({},t,"$"+n+".00")),e.target.value="$"+n+".00"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement("div",{className:"centered-container",style:{maxWidth:"480px"}},r.a.createElement("div",{style:{textAlign:"left"}},"Since we don't have your current investment portfolio on file yet, please consult your records and enter the amounts below."),r.a.createElement("table",{className:"assets-container"},r.a.createElement("tbody",null,I.map(function(t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"asset-label"},t,":"),r.a.createElement("td",null,r.a.createElement("input",{onFocus:function(t){return e.focusHandler(t)},onBlur:function(n){return e.blurHandler(n,t)},defaultValue:"$0.00",className:"asset-input",onKeyDown:e.keyDownHandler,onPaste:function(e){return e.preventDefault()}})))}))),r.a.createElement("button",{onClick:function(){return setTimeout(e.buttonClick,80)}},"Recommend asset transfers")),this.state.transactionChoices?this.renderRecommendation():null))}}]),t}(r.a.Component),B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={pageNumber:1},n.nextPage=n.nextPage.bind(Object(d.a)(n)),n.setRiskTolerance=n.setRiskTolerance.bind(Object(d.a)(n)),n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"nextPage",value:function(){this.setState({pageNumber:this.state.pageNumber+1})}},{key:"setRiskTolerance",value:function(e){this.setState({riskTolerance:e})}},{key:"render",value:function(){var e=null;return 1===this.state.pageNumber?e=r.a.createElement(R,{nextPage:this.nextPage,setRiskTolerance:this.setRiskTolerance}):2===this.state.pageNumber&&(e=r.a.createElement(F,{riskTolerance:this.state.riskTolerance})),r.a.createElement("div",null," ",e)}}]),t}(r.a.Component);var W=function(){return r.a.createElement("div",{id:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.101cb8a0.chunk.js.map