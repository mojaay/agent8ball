var e=true,h=null,i=false,k,q=this;function r(){}
function s(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array||!(a instanceof Object)&&Object.prototype.toString.call(a)=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(!(a instanceof Object)&&(Object.prototype.toString.call(a)=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call")))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}function aa(a){var b=s(a);return b=="array"||b=="object"&&typeof a.length=="number"}var t="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36),ba=0;function u(a,b){function c(){}c.prototype=b.prototype;a.Ra=b.prototype;a.prototype=new c};function v(a){this.stack=Error().stack||"";if(a)this.message=String(a)}u(v,Error);function ca(a){for(var b=1;b<arguments.length;b++){var c=String(arguments[b]).replace(/\$/g,"$$$$");a=a.replace(/\%s/,c)}return a}
function da(a,b){for(var c=0,d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),g=Math.max(d.length,f.length),j=0;c==0&&j<g;j++){var l=d[j]||"",o=f[j]||"",m=RegExp("(\\d*)(\\D*)","g"),A=RegExp("(\\d*)(\\D*)","g");do{var p=m.exec(l)||["","",""],n=A.exec(o)||["","",""];if(p[0].length==0&&n[0].length==0)break;c=x(p[1].length==0?0:parseInt(p[1],10),n[1].length==0?0:parseInt(n[1],10))||x(p[2].length==0,n[2].length==0)||x(p[2],n[2])}while(c==
0)}return c}function x(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};function ea(a,b){b.unshift(a);v.call(this,ca.apply(h,b));b.shift();this.fc=a}u(ea,v);function y(a,b){if(!a){var c=Array.prototype.slice.call(arguments,2),d="Assertion failed";if(b){d+=": "+b;var f=c}throw new ea(""+d,f||[]);}};var z=Array.prototype,fa=z.indexOf?function(a,b,c){y(a.length!=h);return z.indexOf.call(a,b,c)}:function(a,b,c){c=c==h?0:c<0?Math.max(0,a.length+c):c;if(typeof a=="string"){if(typeof b!="string"||b.length!=1)return-1;return a.indexOf(b,c)}for(c=c;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ga=z.forEach?function(a,b,c){y(a.length!=h);z.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=typeof a=="string"?a.split(""):a,g=0;g<d;g++)g in f&&b.call(c,f[g],g,a)};
function ha(){return z.concat.apply(z,arguments)};function B(){}B.prototype.Da=i;B.prototype.ca=function(){if(!this.Da){this.Da=e;this.U()}};B.prototype.U=function(){};var ia;function C(a,b){this.type=a;this.currentTarget=this.target=b}u(C,B);C.prototype.U=function(){delete this.type;delete this.target;delete this.currentTarget};C.prototype.va=i;C.prototype.sb=e;var D,ja,E,ka;function la(){return q.navigator?q.navigator.userAgent:h}ka=E=ja=D=i;var F;if(F=la()){var ma=q.navigator;D=F.indexOf("Opera")==0;ja=!D&&F.indexOf("MSIE")!=-1;E=!D&&F.indexOf("WebKit")!=-1;ka=!D&&!E&&ma.product=="Gecko"}var na=D,oa=ja,pa=ka,qa=E,ra=q.navigator,sa=(ra&&ra.platform||"").indexOf("Mac")!=-1,ta,ua="",G;
if(na&&q.opera){var va=q.opera.version;ua=typeof va=="function"?va():va}else{if(pa)G=/rv\:([^\);]+)(\)|;)/;else if(oa)G=/MSIE\s+([^\);]+)(\)|;)/;else if(qa)G=/WebKit\/(\S+)/;if(G){var wa=G.exec(la());ua=wa?wa[1]:""}}ta=ua;var xa={};function H(a,b){a&&this.la(a,b)}u(H,C);k=H.prototype;k.target=h;k.relatedTarget=h;k.offsetX=0;k.offsetY=0;k.clientX=0;k.clientY=0;k.screenX=0;k.screenY=0;k.button=0;k.keyCode=0;k.charCode=0;k.ctrlKey=i;k.altKey=i;k.shiftKey=i;k.metaKey=i;k.qb=i;k.Ea=h;
k.la=function(a,b){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(pa)try{d=d.nodeName&&d}catch(f){d=h}}else if(c=="mouseover")d=a.fromElement;else if(c=="mouseout")d=a.toElement;this.relatedTarget=d;this.offsetX=a.offsetX!==undefined?a.offsetX:a.layerX;this.offsetY=a.offsetY!==undefined?a.offsetY:a.layerY;this.clientX=a.clientX!==undefined?a.clientX:a.pageX;this.clientY=a.clientY!==undefined?a.clientY:a.pageY;this.screenX=a.screenX||0;
this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.qb=sa?a.metaKey:a.ctrlKey;this.Ea=a;delete this.sb;delete this.va};oa&&(xa["8"]||(xa["8"]=da(ta,"8")>=0));H.prototype.U=function(){H.Ra.U.call(this);this.relatedTarget=this.currentTarget=this.target=this.Ea=h};function ya(){}var za=0;k=ya.prototype;k.key=0;k.ba=i;k.Ba=i;k.la=function(a,b,c,d,f,g){if(s(a)=="function")this.Fa=e;else if(a&&a.handleEvent&&s(a.handleEvent)=="function")this.Fa=i;else throw Error("Invalid listener argument");this.oa=a;this.Oa=b;this.src=c;this.type=d;this.capture=!!f;this.cb=g;this.Ba=i;this.key=++za;this.ba=i};k.handleEvent=function(a){if(this.Fa)return this.oa.call(this.cb||this.src,a);return this.oa.handleEvent.call(this.oa,a)};function I(a,b){this.Ka=b;this.C=[];if(a>this.Ka)throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");for(var c=0;c<a;c++)this.C.push(this.s?this.s():{})}u(I,B);I.prototype.s=h;I.prototype.Ca=h;function Aa(a){if(a.C.length)return a.C.pop();return a.s?a.s():{}}function J(a,b){a.C.length<a.Ka?a.C.push(b):Ba(a,b)}function Ba(a,b){if(a.Ca)a.Ca(b);else{var c=s(b);if(c=="object"||c=="array"||c=="function")if(s(b.ca)=="function")b.ca();else for(var d in b)delete b[d]}}
I.prototype.U=function(){I.Ra.U.call(this);for(var a=this.C;a.length;)Ba(this,a.pop());delete this.C};var Ca;var Da=(Ca="ScriptEngine"in q&&q.ScriptEngine()=="JScript")?q.ScriptEngineMajorVersion()+"."+q.ScriptEngineMinorVersion()+"."+q.ScriptEngineBuildVersion():"0";var K,Ea,L,Fa,Ga,Ha,Ia,Ja;
(function(){function a(){return{T:0,aa:0}}function b(){return[]}function c(){function n(w){return j.call(n.src,n.key,w)}return n}function d(){return new ya}function f(){return new H}var g=Ca&&!(da(Da,"5.7")>=0),j;Fa=function(n){j=n};if(g){K=function(n){J(l,n)};Ea=function(){return Aa(o)};L=function(n){J(o,n)};Ga=function(){J(m,c())};Ha=function(n){J(A,n)};Ia=function(){return Aa(p)};Ja=function(n){J(p,n)};var l=new I(0,600);l.s=a;var o=new I(0,600);o.s=b;var m=new I(0,600);m.s=c;var A=new I(0,600);
A.s=d;var p=new I(0,600);p.s=f}else{K=r;Ea=b;Ha=Ga=L=r;Ia=f;Ja=r}})();var Ka=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];function M(a){for(var b,c,d=1;d<arguments.length;d++){c=arguments[d];for(b in c)a[b]=c[b];for(var f=0;f<Ka.length;f++){b=Ka[f];if(Object.prototype.hasOwnProperty.call(c,b))a[b]=c[b]}}};var N={},O={},La={},Ma={};function Na(a,b,c,d){if(!d.fa)if(d.La){for(var f=0,g=0;f<d.length;f++)if(d[f].ba){var j=d[f].Oa;j.src=h;Ga(j);Ha(d[f])}else{if(f!=g)d[g]=d[f];g++}d.length=g;d.La=i;if(g==0){L(d);delete O[a][b][c];O[a][b].T--;if(O[a][b].T==0){K(O[a][b]);delete O[a][b];O[a].T--}if(O[a].T==0){K(O[a]);delete O[a]}}}}function Oa(a){if(a in Ma)return Ma[a];return Ma[a]="on"+a}
function Pa(a,b,c,d,f){var g=1;b=b[t]||(b[t]=++ba);if(a[b]){a.aa--;a=a[b];if(a.fa)a.fa++;else a.fa=1;try{for(var j=a.length,l=0;l<j;l++){var o=a[l];if(o&&!o.ba)g&=Qa(o,f)!==i}}finally{a.fa--;Na(c,d,b,a)}}return Boolean(g)}
function Qa(a,b){var c=a.handleEvent(b);if(a.Ba){var d=a.key;if(N[d]){var f=N[d];if(!f.ba){var g=f.src,j=f.type,l=f.Oa,o=f.capture;if(g.removeEventListener){if(g==q||!g.ub)g.removeEventListener(j,l,o)}else g.detachEvent&&g.detachEvent(Oa(j),l);g=g[t]||(g[t]=++ba);l=O[j][o][g];if(La[g]){var m=La[g],A=fa(m,f);if(A>=0){y(m.length!=h);z.splice.call(m,A,1)}m.length==0&&delete La[g]}f.ba=e;l.La=e;Na(j,o,g,l);delete N[d]}}}return c}
Fa(function(a,b){if(!N[a])return e;var c=N[a],d=c.type,f=O;if(!(d in f))return e;f=f[d];var g,j;if(ia===undefined)ia=oa&&!q.addEventListener;if(ia){var l;if(!(l=b))a:{l="window.event".split(".");for(var o=q;g=l.shift();)if(o[g])o=o[g];else{l=h;break a}l=o}g=l;l=e in f;o=i in f;if(l){if(g.keyCode<0||g.returnValue!=undefined)return e;a:{var m=i;if(g.keyCode==0)try{g.keyCode=-1;break a}catch(A){m=e}if(m||g.returnValue==undefined)g.returnValue=e}}m=Ia();m.la(g,this);g=e;try{if(l){for(var p=Ea(),n=m.currentTarget;n;n=
n.parentNode)p.push(n);j=f[e];j.aa=j.T;for(var w=p.length-1;!m.va&&w>=0&&j.aa;w--){m.currentTarget=p[w];g&=Pa(j,p[w],d,e,m)}if(o){j=f[i];j.aa=j.T;for(w=0;!m.va&&w<p.length&&j.aa;w++){m.currentTarget=p[w];g&=Pa(j,p[w],d,i,m)}}}else g=Qa(c,m)}finally{if(p){p.length=0;L(p)}m.ca();Ja(m)}return g}d=new H(b,this);try{g=Qa(c,d)}finally{d.ca()}return g});function Ra(a,b){this.x=a!==undefined?a:0;this.y=b!==undefined?b:0}Ra.prototype.toString=function(){return"("+this.x+", "+this.y+")"};function P(a,b){this.width=a;this.height=b}P.prototype.toString=function(){return"("+this.width+" x "+this.height+")"};P.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};function Q(a,b){if(a instanceof Q)this.r=a.r;else{var c;if(c=aa(a))a:{for(var d=c=0;d<a.length;d++){if(!aa(a[d])||c>0&&a[d].length!=c){c=i;break a}for(var f=0;f<a[d].length;f++)if(typeof a[d][f]!="number"){c=i;break a}if(c==0)c=a[d].length}c=c!=0}if(c){if(s(a)=="array")c=ha(a);else{c=[];d=0;for(f=a.length;d<f;d++)c[d]=a[d];c=c}this.r=c}else if(a instanceof P)this.r=Sa(a.height,a.width);else if(typeof a=="number"&&typeof b=="number"&&a>0&&b>0)this.r=Sa(a,b);else throw Error("Invalid argument(s) for Matrix contructor");
}this.wa=new P(this.r[0].length,this.r.length)}function Ta(a,b,c){for(var d=0;d<a.wa.height;d++)for(var f=0;f<a.wa.width;f++)b.call(c,a.r[d][f],d,f,a)}function Sa(a,b){for(var c=[],d=0;d<a;d++){c[d]=[];for(var f=0;f<b;f++)c[d][f]=0}return c}Q.prototype.r=h;Q.prototype.wa=h;
Q.prototype.toString=function(){var a=0;Ta(this,function(c){c=String(c).length;if(c>a)a=c});var b=[];ga(this.r,function(c){b.push("[ ");ga(c,function(d){d=String(d);b.push(Array(a-d.length+1).join(" ")+d+" ")});b.push("]\n")});return b.join("")};function Ua(a,b){this.x=Number(a)||0;this.y=Number(b)||0}u(Ua,Ra);function R(a,b){if(a===undefined)a=0;this.x=a;if(b===undefined)b=0;this.y=b}R.prototype.w=function(){this.y=this.x=0};R.prototype.v=function(a,b){this.x=a;this.y=b};function S(a,b){a.x=b.x;a.y=b.y};function T(){}T.prototype={L:h,S:h,M:h,next:h};function Va(a,b){this.f=new T;this.g=new T;this.pa=0;if(!a||!b)this.k=this.j=h;else{this.j=a;this.k=b;this.ra=0;this.u=Math.sqrt(this.j.u*this.k.u);this.m=this.j.m>this.k.m?this.j.m:this.k.m;this.n=this.o=h;this.f.S=h;this.f.M=h;this.f.next=h;this.f.L=h;this.g.S=h;this.g.M=h;this.g.next=h;this.g.L=h}}Va.prototype={pa:0,o:h,n:h,f:new T,g:new T,j:h,k:h,ra:0,u:h,m:h};var Wa=Math.PI;function Xa(){}Xa.prototype={$a:0,Xa:0,Ya:0,Wa:0,Za:h};function Ya(){this.V=new Xa;this.V.Za=this}Ya.prototype={v:function(a){this.tb(a.O)},tb:function(a){this.O=a;this.V.$a=this.O&255;this.V.Xa=(this.O&65280)>>8&255;this.V.Ya=(this.O&16711680)>>16&255;this.V.Wa=(this.O&4278190080)>>24&255},V:new Xa,O:0};function Za(){this.position=new R;this.id=new Ya}Za.prototype={Ma:h,Sa:h};function $a(){this.W=Array(2);for(var a=0;a<2;a++)this.W[a]=new Za;this.pb=new R}$a.prototype={W:h,pb:h,Na:0};M(function(a,b){this.f=new T;this.g=new T;this.pa=0;if(!a||!b)this.k=this.j=h;else{this.j=a;this.k=b;this.ra=0;this.u=Math.sqrt(this.j.u*this.k.u);this.m=this.j.m>this.k.m?this.j.m:this.k.m;this.n=this.o=h;this.f.S=h;this.f.M=h;this.f.next=h;this.f.L=h;this.g.S=h;this.g.M=h;this.g.next=h;this.g.L=h;this.H=[new $a];this.H[0].Na=0;this.H[0].W[0].Ma=0;this.H[0].W[0].Sa=0}}.prototype,Va.prototype);M(function(a,b){this.f=new T;this.g=new T;this.pa=0;if(!a||!b)this.k=this.j=h;else{this.j=a;this.k=b;this.ra=0;this.u=Math.sqrt(this.j.u*this.k.u);this.m=this.j.m>this.k.m?this.j.m:this.k.m;this.n=this.o=h;this.f.S=h;this.f.M=h;this.f.next=h;this.f.L=h;this.g.S=h;this.g.M=h;this.g.next=h;this.g.L=h;this.H=[new $a];if(this.j.q!=ab)throw"Assert Failed!";if(this.k.q!=bb)throw"Assert Failed!";this.H[0].Na=0;this.H[0].W[0].Ma=0;this.H[0].W[0].Sa=0}}.prototype,Va.prototype);function cb(){}cb.prototype={Pa:0,Qa:0,next:0,status:0};function db(){}db.prototype={Pa:0,Qa:0};function eb(){var a=0;this.Ga=Array(8192);for(a=0;a<8192;++a)this.Ga[a]=65535;this.I=Array(8192);for(a=0;a<8192;++a)this.I[a]=new cb;this.Ja=Array(8192);for(a=0;a<8192;++a)this.Ja[a]=new db;for(a=0;a<8192;++a){this.I[a].Pa=65535;this.I[a].Qa=65535;this.I[a].N=h;this.I[a].status=0;this.I[a].next=a+1}this.I[8191].next=65535;this.lb=0}eb.prototype={lb:0,Ja:h,Ga:h};new eb;function U(a,b,c){if(a==h)a=0;this.b=new R;this.c=new R;if(b!=h&&c!=h){S(this.b,b);S(this.c,c)}else{b=Math.cos(a);a=Math.sin(a);this.b.x=b;this.c.x=-a;this.b.y=a;this.c.y=b}}U.prototype.v=function(a){var b=Math.cos(a);a=Math.sin(a);this.b.x=b;this.c.x=-a;this.b.y=a;this.c.y=b};U.prototype.w=function(){this.b.x=0;this.c.x=0;this.b.y=0;this.c.y=0};new U;var bb=0,ab=2;new U;function V(){}V.prototype={L:h,M:h,next:h};function W(a){this.f=new V;this.g=new V;this.q=a.type;this.n=this.o=h;this.d=a.P;this.a=a.Q;this.D=a.R;this.F=i;this.K=a.N}W.prototype={q:0,o:h,n:h,f:new V,g:new V,d:h,a:h,F:h,D:h,K:h};function X(a){this.f=new V;this.g=new V;this.q=a.type;this.n=this.o=h;this.d=a.P;this.a=a.Q;this.D=a.R;this.F=i;this.K=a.N;this.Ua=new U;this.xa=new U;this.ya=new U;this.Va=new U;this.h=new R;this.i=new R;this.mb=new R;this.nb=new U;var b,c,d;b=this.d.l;c=a.z.x-this.d.e.x;d=a.z.y-this.d.e.y;this.h.x=c*b.b.x+d*b.b.y;this.h.y=c*b.c.x+d*b.c.y;b=this.a.l;c=a.z.x-this.a.e.x;d=a.z.y-this.a.e.y;this.i.x=c*b.b.x+d*b.b.y;this.i.y=c*b.c.x+d*b.c.y;this.Jb=this.a.J-this.d.J;this.mb.v(0,0);this.gb=this.fb=this.ib=
0;this.Pb=a.xb;this.bc=a.ic;this.Wb=a.hc;this.kb=a.ob;this.db=a.ab;this.eb=a.bb}M(X.prototype,W.prototype);new U;X.prototype.xa=new U;X.prototype.ya=new U;X.prototype.Va=new U;function Y(){this.ma=new R;this.na=new R}Y.prototype={ma:new R,za:h,na:new R,Aa:h,w:function(){this.ma.w();this.za=0;this.na.w();this.Aa=0},v:function(a,b,c,d){S(this.ma,a);this.za=b;S(this.na,c);this.Aa=d}};M(function(a){this.f=new V;this.g=new V;this.q=a.type;this.n=this.o=h;this.d=a.P;this.a=a.Q;this.D=a.R;this.F=i;this.K=a.N;this.h=new R;this.i=new R;this.G=new R;this.Ia=new R;this.hb=new Y;this.jb=new Y;var b,c,d;b=this.d.l;c=a.z.x-this.d.e.x;d=a.z.y-this.d.e.y;this.h.v(c*b.b.x+d*b.b.y,c*b.c.x+d*b.c.y);b=this.a.l;c=a.z.x-this.a.e.x;d=a.z.y-this.a.e.y;this.i.v(c*b.b.x+d*b.b.y,c*b.c.x+d*b.c.y);b=this.d.l;c=a.axis.x;d=a.axis.y;this.G.v(c*b.b.x+d*b.b.y,c*b.c.x+d*b.c.y);this.Ia.x=-this.G.y;this.Ia.y=
this.G.x;this.Ib=this.a.J-this.d.J;this.hb.w();this.Bb=this.Cb=this.Nb=this.Ob=0;this.jb.w();this.gb=this.fb=this.ib=this.Xb=0;this.Qb=a.yb;this.cc=a.jc;this.Vb=a.gc;this.kb=a.ob;this.db=a.ab;this.eb=a.bb}.prototype,W.prototype);function fb(a){var b=a.d,c=a.a,d;d=b.l;var f=d.b.x*a.h.x+d.c.x*a.h.y,g=d.b.y*a.h.x+d.c.y*a.h.y;d=c.l;f=c.e.x+(d.b.x*a.i.x+d.c.x*a.i.y)-(b.e.x+f);c=c.e.y+(d.b.y*a.i.x+d.c.y*a.i.y)-(b.e.y+g);d=b.l;return(d.b.x*a.G.x+d.c.x*a.G.y)*f+(d.b.y*a.G.x+d.c.y*a.G.y)*c};M(function(a){this.f=new V;this.g=new V;this.q=a.type;this.n=this.o=h;this.d=a.P;this.a=a.Q;this.D=a.R;this.F=i;this.K=a.N;this.Ua=new U;this.xa=new U;this.ya=new U;this.Ha=new R;this.sa=new R;this.qa=new R;this.nb=new U;this.zb=new R;S(this.sa,a.target);var b=this.sa.x-this.a.e.x,c=this.sa.y-this.a.e.y;this.Ha.x=b*this.a.l.b.x+c*this.a.l.b.y;this.Ha.y=b*this.a.l.c.x+c*this.a.l.c.y;this.Sb=a.ec;this.qa.w();c=this.a.Rb;var d=2*Wa*a.wb;b=2*c*a.vb*d;c=c*d*d;this.Eb=1/(b+a.Ta*c);this.Db=a.Ta*c/(b+a.Ta*
c)}.prototype,W.prototype);M(function(a){this.f=new V;this.g=new V;this.q=a.type;this.n=this.o=h;this.d=a.P;this.a=a.Q;this.D=a.R;this.F=i;this.K=a.N;this.h=new R;this.i=new R;this.Zb=new R;var b,c,d;b=this.d.l;c=a.A.x-this.d.e.x;d=a.A.y-this.d.e.y;this.h.x=c*b.b.x+d*b.b.y;this.h.y=c*b.c.x+d*b.c.y;b=this.a.l;c=a.B.x-this.a.e.x;d=a.B.y-this.a.e.y;this.i.x=c*b.b.x+d*b.b.y;this.i.y=c*b.c.x+d*b.c.y;c=a.B.x-a.A.x;d=a.B.y-a.A.y;this.Kb=Math.sqrt(c*c+d*d);this.qa=0}.prototype,W.prototype);M(function(a){this.f=new V;this.g=new V;this.q=a.type;this.n=this.o=h;this.d=a.P;this.a=a.Q;this.D=a.R;this.F=i;this.K=a.N;this.X=new R;this.Y=new R;this.h=new R;this.i=new R;this.$b=new R;this.ac=new R;var b,c,d;this.ga=this.d.dc.Hb;this.X.x=a.ja.x-this.ga.e.x;this.X.y=a.ja.y-this.ga.e.y;this.Y.x=a.ka.x-this.ga.e.x;this.Y.y=a.ka.y-this.ga.e.y;b=this.d.l;c=a.A.x-this.d.e.x;d=a.A.y-this.d.e.y;this.h.x=c*b.b.x+d*b.b.y;this.h.y=c*b.c.x+d*b.c.y;b=this.a.l;c=a.B.x-this.a.e.x;d=a.B.y-this.a.e.y;this.i.x=
c*b.b.x+d*b.b.y;this.i.y=c*b.c.x+d*b.c.y;this.p=a.rb;c=a.ja.x-a.A.x;d=a.ja.y-a.A.y;b=Math.sqrt(c*c+d*d);c=a.ka.x-a.B.x;d=a.ka.y-a.B.y;c=Math.sqrt(c*c+d*d);d=0.5*Z>b?0.5*Z:b;c=0.5*Z>c?0.5*Z:c;this.t=d+this.p*c;this.Tb=d>(a.ta<this.t-this.p*Z?a.ta:this.t-this.p*Z)?d:a.ta<this.t-this.p*Z?a.ta:this.t-this.p*Z;this.Ub=c>(a.ua<(this.t-Z)/this.p?a.ua:(this.t-Z)/this.p)?c:a.ua<(this.t-Z)/this.p?a.ua:(this.t-Z)/this.p;this.Mb=this.Lb=this.Yb=0}.prototype,W.prototype);var Z=30;M(function(a){this.f=new V;this.g=new V;this.q=a.type;this.n=this.o=h;this.d=a.P;this.a=a.Q;this.D=a.R;this.F=i;this.K=a.N;this.X=new R;this.Y=new R;this.h=new R;this.i=new R;this.Ab=new Y;this.ia=this.$=this.ha=this.Z=h;var b,c;this.Fb=a.da.d;this.d=a.da.a;if(a.da.q==1){this.Z=a.da;S(this.X,this.Z.h);S(this.h,this.Z.i);b=this.Z.a.J-this.Z.d.J}else{this.ha=a.da;S(this.X,this.ha.h);S(this.h,this.ha.i);b=fb(this.ha)}this.Gb=a.ea.d;this.a=a.ea.a;if(a.ea.q==1){this.$=a.ea;S(this.Y,this.$.h);S(this.i,
this.$.i);c=this.$.a.J-this.$.d.J}else{this.ia=a.ea;S(this.Y,this.ia.h);S(this.i,this.ia.i);c=fb(this.ia)}this.p=a.rb;this.t=b+this.p*c;this.qa=0}.prototype,W.prototype);new Q([[-1,0],[0,1]]);new Q([[-1,0],[0,-1]]);
