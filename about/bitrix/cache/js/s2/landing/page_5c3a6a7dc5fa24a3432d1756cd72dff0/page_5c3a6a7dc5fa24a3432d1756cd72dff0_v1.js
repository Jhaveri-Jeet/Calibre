
; /* Start:"a:4:{s:4:"full";s:39:"/js/production_mobile.js?14419826342856";s:6:"source";s:24:"/js/production_mobile.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(function(){

    lineHeight();
    
    if($(window).width() <= 568){
        $(window).scroll(function(){
            redline();
            setIcon();
        });
    }

});

$(window).resize(function(){
    lineHeight();
});

function lineHeight(){
    var line_height = 0;
    
    $('.item').each(function(){
        line_height += $(this).outerHeight() - 24;
    });
    
    $('#redline div').css('max-height', line_height - $('#item10').height() - 10);
    $('#redline').height(line_height - $('#item10').height() - 10);
}


function redline(){
    var scroll = $(window).scrollTop();
    $('#redline div').height(scroll);
}

function setIcon(){
    
    var scroll = $(window).scrollTop();
        scroll = scroll + 230;
        
    if(scroll > $('#item1 .icon').offset().top){
        $('#item1 .icon').addClass('active');
    } else if(scroll < $('#item1 .icon').offset().top){
        $('#item1 .icon').removeClass('active');
    }
    
    if(scroll > $('#item2 .icon').offset().top){
        $('#item2 .icon').addClass('active');
    } else if(scroll < $('#item2 .icon').offset().top){
        $('#item2 .icon').removeClass('active');
    }
    
    if(scroll > $('#item3 .icon').offset().top){
        $('#item3 .icon').addClass('active');
    } else if(scroll < $('#item3 .icon').offset().top){
        $('#item3 .icon').removeClass('active');
    }
    
    if(scroll > $('#item4 .icon').offset().top){
        $('#item4 .icon').addClass('active');
    } else if(scroll < $('#item4 .icon').offset().top){
        $('#item4 .icon').removeClass('active');
    }
    
    if(scroll > $('#item5 .icon').offset().top){
        $('#item5 .icon').addClass('active');
    } else if(scroll < $('#item5 .icon').offset().top){
        $('#item5 .icon').removeClass('active');
    }
    
    if(scroll > $('#item6 .icon').offset().top){
        $('#item6 .icon').addClass('active');
    } else if(scroll < $('#item6 .icon').offset().top){
        $('#item6 .icon').removeClass('active');
    }
    
    if(scroll > $('#item7 .icon').offset().top){
        $('#item7 .icon').addClass('active');
    } else if(scroll < $('#item7 .icon').offset().top){
        $('#item7 .icon').removeClass('active');
    }
    
    if(scroll > $('#item8 .icon').offset().top){
        $('#item8 .icon').addClass('active');
    } else if(scroll < $('#item8 .icon').offset().top){
        $('#item8 .icon').removeClass('active');
    }
    
    if(scroll > $('#item9 .icon').offset().top){
        $('#item9 .icon').addClass('active');
    } else if(scroll < $('#item9 .icon').offset().top){
        $('#item9 .icon').removeClass('active');
    }
    
    if(scroll > $('#item10 .icon').offset().top){
        $('#item10 .icon').addClass('active');
    } else if(scroll < $('#item10 .icon').offset().top){
        $('#item10 .icon').removeClass('active');
    }
    
}
/* End */
;
; /* Start:"a:4:{s:4:"full";s:45:"/rusal/raphael.patched.min.js?144198257890967";s:6:"source";s:29:"/rusal/raphael.patched.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
!function(t){var e,r,i="0.4.2",n="hasOwnProperty",a=/[\.\/]/,s="*",o=function(){},l=function(t,e){return t-e},h={n:{}},u=function(t,i){t=String(t);var n,a=r,s=Array.prototype.slice.call(arguments,2),o=u.listeners(t),h=0,c=[],f={},p=[],d=e;e=t,r=0;for(var g=0,x=o.length;x>g;g++)"zIndex"in o[g]&&(c.push(o[g].zIndex),o[g].zIndex<0&&(f[o[g].zIndex]=o[g]));for(c.sort(l);c[h]<0;)if(n=f[c[h++]],p.push(n.apply(i,s)),r)return r=a,p;for(g=0;x>g;g++)if(n=o[g],"zIndex"in n)if(n.zIndex==c[h]){if(p.push(n.apply(i,s)),r)break;do if(h++,n=f[c[h]],n&&p.push(n.apply(i,s)),r)break;while(n)}else f[n.zIndex]=n;else if(p.push(n.apply(i,s)),r)break;return r=a,e=d,p.length?p:null};u._events=h,u.listeners=function(t){var e,r,i,n,o,l,u,c,f=t.split(a),p=h,d=[p],g=[];for(n=0,o=f.length;o>n;n++){for(c=[],l=0,u=d.length;u>l;l++)for(p=d[l].n,r=[p[f[n]],p[s]],i=2;i--;)e=r[i],e&&(c.push(e),g=g.concat(e.f||[]));d=c}return g},u.on=function(t,e){if(t=String(t),"function"!=typeof e)return function(){};for(var r=t.split(a),i=h,n=0,s=r.length;s>n;n++)i=i.n,i=i.hasOwnProperty(r[n])&&i[r[n]]||(i[r[n]]={n:{}});for(i.f=i.f||[],n=0,s=i.f.length;s>n;n++)if(i.f[n]==e)return o;return i.f.push(e),function(t){+t==+t&&(e.zIndex=+t)}},u.f=function(t){var e=[].slice.call(arguments,1);return function(){u.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},u.stop=function(){r=1},u.nt=function(t){return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},u.nts=function(){return e.split(a)},u.off=u.unbind=function(t,e){if(!t)return void(u._events=h={n:{}});var r,i,o,l,c,f,p,d=t.split(a),g=[h];for(l=0,c=d.length;c>l;l++)for(f=0;f<g.length;f+=o.length-2){if(o=[f,1],r=g[f].n,d[l]!=s)r[d[l]]&&o.push(r[d[l]]);else for(i in r)r[n](i)&&o.push(r[i]);g.splice.apply(g,o)}for(l=0,c=g.length;c>l;l++)for(r=g[l];r.n;){if(e){if(r.f){for(f=0,p=r.f.length;p>f;f++)if(r.f[f]==e){r.f.splice(f,1);break}!r.f.length&&delete r.f}for(i in r.n)if(r.n[n](i)&&r.n[i].f){var x=r.n[i].f;for(f=0,p=x.length;p>f;f++)if(x[f]==e){x.splice(f,1);break}!x.length&&delete r.n[i].f}}else{delete r.f;for(i in r.n)r.n[n](i)&&r.n[i].f&&delete r.n[i].f}r=r.n}},u.once=function(t,e){var r=function(){return u.unbind(t,r),e.apply(this,arguments)};return u.on(t,r)},u.version=i,u.toString=function(){return"You are running Eve "+i},"undefined"!=typeof module&&module.exports?module.exports=u:"undefined"!=typeof define?define("eve",[],function(){return u}):t.eve=u}(this),function(t,e){"function"==typeof define&&define.amd?define(["eve"],function(r){return e(t,r)}):e(t,t.eve||"function"==typeof require&&require("eve"))}(this,function(t,e){function r(t){if(r.is(t,"function"))return b?t():e.on("raphael.DOMload",t);if(r.is(t,X))return r._engine.create[E](r,t.splice(0,3+r.is(t[0],G))).add(t);var i=Array.prototype.slice.call(arguments,0);if(r.is(i[i.length-1],"function")){var n=i.pop();return b?n.call(r._engine.create[E](r,i)):e.on("raphael.DOMload",function(){n.call(r._engine.create[E](r,i))})}return r._engine.create[E](r,arguments)}function i(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var r in t)t[C](r)&&(e[r]=i(t[r]));return e}function n(t,e){for(var r=0,i=t.length;i>r;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}function a(t,e,r){function i(){var a=Array.prototype.slice.call(arguments,0),s=a.join("␀"),o=i.cache=i.cache||{},l=i.count=i.count||[];return o[C](s)?(n(l,s),r?r(o[s]):o[s]):(l.length>=1e3&&delete o[l.shift()],l.push(s),o[s]=t[E](e,a),r?r(o[s]):o[s])}return i}function s(){return this.hex}function o(t,e){for(var r=[],i=0,n=t.length;n-2*!e>i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}function l(t,e,r,i,n){var a=-3*e+9*r-9*i+3*n,s=t*a+6*e-12*r+6*i;return t*s-3*e+3*r}function h(t,e,r,i,n,a,s,o,h){null==h&&(h=1),h=h>1?1:0>h?0:h;for(var u=h/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;c>g;g++){var x=u*f[g]+u,v=l(x,t,r,n,s),y=l(x,e,i,a,o),m=v*v+y*y;d+=p[g]*q.sqrt(m)}return u*d}function u(t,e,r,i,n,a,s,o,l){if(!(0>l||h(t,e,r,i,n,a,s,o)<l)){var u,c=1,f=c/2,p=c-f,d=.01;for(u=h(t,e,r,i,n,a,s,o,p);O(u-l)>d;)f/=2,p+=(l>u?1:-1)*f,u=h(t,e,r,i,n,a,s,o,p);return p}}function c(t,e,r,i,n,a,s,o){if(!(D(t,r)<V(n,s)||V(t,r)>D(n,s)||D(e,i)<V(a,o)||V(e,i)>D(a,o))){var l=(t*i-e*r)*(n-s)-(t-r)*(n*o-a*s),h=(t*i-e*r)*(a-o)-(e-i)*(n*o-a*s),u=(t-r)*(a-o)-(e-i)*(n-s);if(u){var c=l/u,f=h/u,p=+c.toFixed(2),d=+f.toFixed(2);if(!(p<+V(t,r).toFixed(2)||p>+D(t,r).toFixed(2)||p<+V(n,s).toFixed(2)||p>+D(n,s).toFixed(2)||d<+V(e,i).toFixed(2)||d>+D(e,i).toFixed(2)||d<+V(a,o).toFixed(2)||d>+D(a,o).toFixed(2)))return{x:c,y:f}}}}function f(t,e,i){var n=r.bezierBBox(t),a=r.bezierBBox(e);if(!r.isBBoxIntersect(n,a))return i?0:[];for(var s=h.apply(0,t),o=h.apply(0,e),l=D(~~(s/5),1),u=D(~~(o/5),1),f=[],p=[],d={},g=i?0:[],x=0;l+1>x;x++){var v=r.findDotsAtSegment.apply(r,t.concat(x/l));f.push({x:v.x,y:v.y,t:x/l})}for(x=0;u+1>x;x++)v=r.findDotsAtSegment.apply(r,e.concat(x/u)),p.push({x:v.x,y:v.y,t:x/u});for(x=0;l>x;x++)for(var y=0;u>y;y++){var m=f[x],b=f[x+1],_=p[y],w=p[y+1],k=O(b.x-m.x)<.001?"y":"x",B=O(w.x-_.x)<.001?"y":"x",C=c(m.x,m.y,b.x,b.y,_.x,_.y,w.x,w.y);if(C){if(d[C.x.toFixed(4)]==C.y.toFixed(4))continue;d[C.x.toFixed(4)]=C.y.toFixed(4);var S=m.t+O((C[k]-m[k])/(b[k]-m[k]))*(b.t-m.t),T=_.t+O((C[B]-_[B])/(w[B]-_[B]))*(w.t-_.t);S>=0&&1.001>=S&&T>=0&&1.001>=T&&(i?g++:g.push({x:C.x,y:C.y,t1:V(S,1),t2:V(T,1)}))}}return g}function p(t,e,i){t=r._path2curve(t),e=r._path2curve(e);for(var n,a,s,o,l,h,u,c,p,d,g=i?0:[],x=0,v=t.length;v>x;x++){var y=t[x];if("M"==y[0])n=l=y[1],a=h=y[2];else{"C"==y[0]?(p=[n,a].concat(y.slice(1)),n=p[6],a=p[7]):(p=[n,a,n,a,l,h,l,h],n=l,a=h);for(var m=0,b=e.length;b>m;m++){var _=e[m];if("M"==_[0])s=u=_[1],o=c=_[2];else{"C"==_[0]?(d=[s,o].concat(_.slice(1)),s=d[6],o=d[7]):(d=[s,o,s,o,u,c,u,c],s=u,o=c);var w=f(p,d,i);if(i)g+=w;else{for(var k=0,B=w.length;B>k;k++)w[k].segment1=x,w[k].segment2=m,w[k].bez1=p,w[k].bez2=d;g=g.concat(w)}}}}}return g}function d(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function g(){return this.x+z+this.y+z+this.width+" × "+this.height}function x(t,e,r,i,n,a){function s(t){return((c*t+u)*t+h)*t}function o(t,e){var r=l(t,e);return((d*r+p)*r+f)*r}function l(t,e){var r,i,n,a,o,l;for(n=t,l=0;8>l;l++){if(a=s(n)-t,O(a)<e)return n;if(o=(3*c*n+2*u)*n+h,O(o)<1e-6)break;n-=a/o}if(r=0,i=1,n=t,r>n)return r;if(n>i)return i;for(;i>r;){if(a=s(n),O(a-t)<e)return n;t>a?r=n:i=n,n=(i-r)/2+r}return n}var h=3*e,u=3*(i-e)-h,c=1-h-u,f=3*r,p=3*(n-r)-f,d=1-f-p;return o(t,1/(200*a))}function v(t,e){var r=[],i={};if(this.ms=e,this.times=1,t){for(var n in t)t[C](n)&&(i[K(n)]=t[n],r.push(K(n)));r.sort(ce)}this.anim=i,this.top=r[r.length-1],this.percents=r}function y(t,i,n,a,s,o){n=K(n);var l,h,u,c,f,p,g=t.ms,v={},y={},m={};if(a)for(_=0,k=sr.length;k>_;_++){var b=sr[_];if(b.el.id==i.id&&b.anim==t){b.percent!=n?(sr.splice(_,1),u=1):h=b,i.attr(b.totalOrigin);break}}else a=+y;for(var _=0,k=t.percents.length;k>_;_++){if(t.percents[_]==n||t.percents[_]>a*t.top){n=t.percents[_],f=t.percents[_-1]||0,g=g/t.top*(n-f),c=t.percents[_+1],l=t.anim[n];break}a&&i.attr(t.anim[t.percents[_]])}if(l){if(h)h.initstatus=a,h.start=new Date-h.ms*a;else{for(var B in l)if(l[C](B)&&(ie[C](B)||i.paper.customAttributes[C](B)))switch(v[B]=i.attr(B),null==v[B]&&(v[B]=re[B]),y[B]=l[B],ie[B]){case G:m[B]=(y[B]-v[B])/g;break;case"colour":v[B]=r.getRGB(v[B]);var S=r.getRGB(y[B]);m[B]={r:(S.r-v[B].r)/g,g:(S.g-v[B].g)/g,b:(S.b-v[B].b)/g};break;case"path":var T=Fe(v[B],y[B]),A=T[1];for(v[B]=T[0],m[B]=[],_=0,k=v[B].length;k>_;_++){m[B][_]=[0];for(var E=1,M=v[B][_].length;M>E;E++)m[B][_][E]=(A[_][E]-v[B][_][E])/g}break;case"transform":var L=i._,z=De(L[B],y[B]);if(z)for(v[B]=z.from,y[B]=z.to,m[B]=[],m[B].real=!0,_=0,k=v[B].length;k>_;_++)for(m[B][_]=[v[B][_][0]],E=1,M=v[B][_].length;M>E;E++)m[B][_][E]=(y[B][_][E]-v[B][_][E])/g;else{var R=i.matrix||new d,I={_:{transform:L.transform},getBBox:function(){return i.getBBox(1)}};v[B]=[R.a,R.b,R.c,R.d,R.e,R.f],je(I,y[B]),y[B]=I._.transform,m[B]=[(I.matrix.a-R.a)/g,(I.matrix.b-R.b)/g,(I.matrix.c-R.c)/g,(I.matrix.d-R.d)/g,(I.matrix.e-R.e)/g,(I.matrix.f-R.f)/g]}break;case"csv":var j=P(l[B])[F](w),q=P(v[B])[F](w);if("clip-rect"==B)for(v[B]=q,m[B]=[],_=q.length;_--;)m[B][_]=(j[_]-v[B][_])/g;y[B]=j;break;default:for(j=[][N](l[B]),q=[][N](v[B]),m[B]=[],_=i.paper.customAttributes[B].length;_--;)m[B][_]=((j[_]||0)-(q[_]||0))/g}var D=l.easing,V=r.easing_formulas[D];if(!V)if(V=P(D).match(Q),V&&5==V.length){var O=V;V=function(t){return x(t,+O[1],+O[2],+O[3],+O[4],g)}}else V=fe;if(p=l.start||t.start||+new Date,b={anim:t,percent:n,timestamp:p,start:p+(t.del||0),status:0,initstatus:a||0,stop:!1,ms:g,easing:V,from:v,diff:m,to:y,el:i,callback:l.callback,prev:f,next:c,repeat:o||t.times,origin:i.attr(),totalOrigin:s},sr.push(b),a&&!h&&!u&&(b.stop=!0,b.start=new Date-g*a,1==sr.length))return lr();u&&(b.start=new Date-b.ms*a),1==sr.length&&or(lr)}e("raphael.anim.start."+i.id,i,t)}}function m(t){for(var e=0;e<sr.length;e++)sr[e].el.paper==t&&sr.splice(e--,1)}r.version="2.1.2",r.eve=e;var b,_,w=/[, ]+/,k={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},B=/\{(\d+)\}/g,C="hasOwnProperty",S={doc:document,win:t},T={was:Object.prototype[C].call(S.win,"Raphael"),is:S.win.Raphael},A=function(){this.ca=this.customAttributes={}},E="apply",N="concat",M="ontouchstart"in S.win||S.win.DocumentTouch&&S.doc instanceof DocumentTouch,L="",z=" ",P=String,F="split",R="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[F](z),I={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},j=P.prototype.toLowerCase,q=Math,D=q.max,V=q.min,O=q.abs,Y=q.pow,W=q.PI,G="number",H="string",X="array",U=Object.prototype.toString,$=(r._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Z={NaN:1,Infinity:1,"-Infinity":1},Q=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,J=q.round,K=parseFloat,te=parseInt,ee=P.prototype.toUpperCase,re=r._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},ie=r._availableAnimAttrs={blur:G,"clip-rect":"csv",cx:G,cy:G,fill:"colour","fill-opacity":G,"font-size":G,height:G,opacity:G,path:"path",r:G,rx:G,ry:G,stroke:"colour","stroke-opacity":G,"stroke-width":G,transform:"transform",width:G,x:G,y:G},ne=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,ae={hs:1,rg:1},se=/,?([achlmqrstvxz]),?/gi,oe=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,le=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,he=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,ue=(r._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),ce=function(t,e){return K(t)-K(e)},fe=function(t){return t},pe=r._rectPath=function(t,e,r,i,n){return n?[["M",t+n,e],["l",r-2*n,0],["a",n,n,0,0,1,n,n],["l",0,i-2*n],["a",n,n,0,0,1,-n,n],["l",2*n-r,0],["a",n,n,0,0,1,-n,-n],["l",0,2*n-i],["a",n,n,0,0,1,n,-n],["z"]]:[["M",t,e],["l",r,0],["l",0,i],["l",-r,0],["z"]]},de=function(t,e,r,i){return null==i&&(i=r),[["M",t,e],["m",0,-i],["a",r,i,0,1,1,0,2*i],["a",r,i,0,1,1,0,-2*i],["z"]]},ge=r._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return de(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return de(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return pe(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return pe(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return pe(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return pe(e.x,e.y,e.width,e.height)}},xe=r.mapPath=function(t,e){if(!e)return t;var r,i,n,a,s,o,l;for(t=Fe(t),n=0,s=t.length;s>n;n++)for(l=t[n],a=1,o=l.length;o>a;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i;return t};if(r._g=S,r.type=S.win.SVGAngle||S.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==r.type){var ve,ye=S.doc.createElement("div");if(ye.innerHTML='<v:shape adj="1"/>',ve=ye.firstChild,ve.style.behavior="url(#default#VML)",!ve||"object"!=typeof ve.adj)return r.type=L;ye=null}r.svg=!(r.vml="VML"==r.type),r._Paper=A,r.fn=_=A.prototype=r.prototype,r._id=0,r._oid=0,r.is=function(t,e){return e=j.call(e),"finite"==e?!Z[C](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||U.call(t).slice(8,-1).toLowerCase()==e},r.angle=function(t,e,i,n,a,s){if(null==a){var o=t-i,l=e-n;return o||l?(180+180*q.atan2(-l,-o)/W+360)%360:0}return r.angle(t,e,a,s)-r.angle(i,n,a,s)},r.rad=function(t){return t%360*W/180},r.deg=function(t){return Math.round(180*t/W%360*1e3)/1e3},r.snapTo=function(t,e,i){if(i=r.is(i,"finite")?i:10,r.is(t,X)){for(var n=t.length;n--;)if(O(t[n]-e)<=i)return t[n]}else{t=+t;var a=e%t;if(i>a)return e-a;if(a>t-i)return e-a+t}return e};r.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=16*q.random()|0,r="x"==t?e:3&e|8;return r.toString(16)});r.setWindow=function(t){e("raphael.setWindow",r,S.win,t),S.win=t,S.doc=S.win.document,r._engine.initWin&&r._engine.initWin(S.win)};var me=function(t){if(r.vml){var e,i=/^\s+|\s+$/g;try{var n=new ActiveXObject("htmlfile");n.write("<body>"),n.close(),e=n.body}catch(s){e=createPopup().document.body}var o=e.createTextRange();me=a(function(t){try{e.style.color=P(t).replace(i,L);var r=o.queryCommandValue("ForeColor");return r=(255&r)<<16|65280&r|(16711680&r)>>>16,"#"+("000000"+r.toString(16)).slice(-6)}catch(n){return"none"}})}else{var l=S.doc.createElement("i");l.title="Raphaël Colour Picker",l.style.display="none",S.doc.body.appendChild(l),me=a(function(t){return l.style.color=t,S.doc.defaultView.getComputedStyle(l,L).getPropertyValue("color")})}return me(t)},be=function(){return"hsb("+[this.h,this.s,this.b]+")"},_e=function(){return"hsl("+[this.h,this.s,this.l]+")"},we=function(){return this.hex},ke=function(t,e,i){if(null==e&&r.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(i=t.b,e=t.g,t=t.r),null==e&&r.is(t,H)){var n=r.getRGB(t);t=n.r,e=n.g,i=n.b}return(t>1||e>1||i>1)&&(t/=255,e/=255,i/=255),[t,e,i]},Be=function(t,e,i,n){t*=255,e*=255,i*=255;var a={r:t,g:e,b:i,hex:r.rgb(t,e,i),toString:we};return r.is(n,"finite")&&(a.opacity=n),a};r.color=function(t){var e;return r.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(e=r.hsb2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.hex=e.hex):r.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(e=r.hsl2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.hex=e.hex):(r.is(t,"string")&&(t=r.getRGB(t)),r.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(e=r.rgb2hsl(t),t.h=e.h,t.s=e.s,t.l=e.l,e=r.rgb2hsb(t),t.v=e.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=we,t},r.hsb2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,i=t.o,t=t.h),t*=360;var n,a,s,o,l;return t=t%360/60,l=r*e,o=l*(1-O(t%2-1)),n=a=s=r-l,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],Be(n,a,s,i)},r.hsl2rgb=function(t,e,r,i){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360;var n,a,s,o,l;return t=t%360/60,l=2*e*(.5>r?r:1-r),o=l*(1-O(t%2-1)),n=a=s=r-l/2,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],Be(n,a,s,i)},r.rgb2hsb=function(t,e,r){r=ke(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s;return a=D(t,e,r),s=a-V(t,e,r),i=0==s?null:a==t?(e-r)/s:a==e?(r-t)/s+2:(t-e)/s+4,i=(i+360)%6*60/360,n=0==s?0:s/a,{h:i,s:n,b:a,toString:be}},r.rgb2hsl=function(t,e,r){r=ke(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s,o,l;return s=D(t,e,r),o=V(t,e,r),l=s-o,i=0==l?null:s==t?(e-r)/l:s==e?(r-t)/l+2:(t-e)/l+4,i=(i+360)%6*60/360,a=(s+o)/2,n=0==l?0:.5>a?l/(2*a):l/(2-2*a),{h:i,s:n,l:a,toString:_e}},r._path2string=function(){return this.join(",").replace(se,"$1")};r._preload=function(t,e){var r=S.doc.createElement("img");r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,S.doc.body.removeChild(this)},r.onerror=function(){S.doc.body.removeChild(this)},S.doc.body.appendChild(r),r.src=t};r.getRGB=a(function(t){if(!t||(t=P(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:s};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:s};!(ae[C](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=me(t));var e,i,n,a,o,l,h=t.match($);return h?(h[2]&&(n=te(h[2].substring(5),16),i=te(h[2].substring(3,5),16),e=te(h[2].substring(1,3),16)),h[3]&&(n=te((o=h[3].charAt(3))+o,16),i=te((o=h[3].charAt(2))+o,16),e=te((o=h[3].charAt(1))+o,16)),h[4]&&(l=h[4][F](ne),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),i=K(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=K(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),"rgba"==h[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100)),h[5]?(l=h[5][F](ne),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),i=K(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=K(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(e/=360),"hsba"==h[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),r.hsb2rgb(e,i,n,a)):h[6]?(l=h[6][F](ne),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),i=K(l[1]),"%"==l[1].slice(-1)&&(i*=2.55),n=K(l[2]),"%"==l[2].slice(-1)&&(n*=2.55),("deg"==l[0].slice(-3)||"°"==l[0].slice(-1))&&(e/=360),"hsla"==h[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),r.hsl2rgb(e,i,n,a)):(h={r:e,g:i,b:n,toString:s},h.hex="#"+(16777216|n|i<<8|e<<16).toString(16).slice(1),r.is(a,"finite")&&(h.opacity=a),h)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:s}},r),r.hsb=a(function(t,e,i){return r.hsb2rgb(t,e,i).hex}),r.hsl=a(function(t,e,i){return r.hsl2rgb(t,e,i).hex}),r.rgb=a(function(t,e,r){return"#"+(16777216|r|e<<8|t<<16).toString(16).slice(1)}),r.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex},r.getColor.reset=function(){delete this.start},r.parsePathString=function(t){if(!t)return null;var e=Ce(t);if(e.arr)return Te(e.arr);var i={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return r.is(t,X)&&r.is(t[0],X)&&(n=Te(t)),n.length||P(t).replace(oe,function(t,e,r){var a=[],s=e.toLowerCase();if(r.replace(he,function(t,e){e&&a.push(+e)}),"m"==s&&a.length>2&&(n.push([e][N](a.splice(0,2))),s="l",e="m"==e?"l":"L"),"r"==s)n.push([e][N](a));else for(;a.length>=i[s]&&(n.push([e][N](a.splice(0,i[s]))),i[s]););}),n.toString=r._path2string,e.arr=Te(n),n},r.parseTransformString=a(function(t){if(!t)return null;var e=[];return r.is(t,X)&&r.is(t[0],X)&&(e=Te(t)),e.length||P(t).replace(le,function(t,r,i){{var n=[];j.call(r)}i.replace(he,function(t,e){e&&n.push(+e)}),e.push([r][N](n))}),e.toString=r._path2string,e});var Ce=function(t){var e=Ce.ps=Ce.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[C](r)&&r!=t&&(e[r].sleep--,!e[r].sleep&&delete e[r])}),e[t]};r.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=Y(h,3),c=Y(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,x=t+2*l*(r-t)+f*(n-2*r+t),v=e+2*l*(i-e)+f*(a-2*i+e),y=r+2*l*(n-r)+f*(s-2*n+r),m=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,_=h*e+l*i,w=h*n+l*s,k=h*a+l*o,B=90-180*q.atan2(x-y,v-m)/W;return(x>y||m>v)&&(B+=180),{x:d,y:g,m:{x:x,y:v},n:{x:y,y:m},start:{x:b,y:_},end:{x:w,y:k},alpha:B}},r.bezierBBox=function(t,e,i,n,a,s,o,l){r.is(t,"array")||(t=[t,e,i,n,a,s,o,l]);var h=Pe.apply(null,t);return{x:h.min.x,y:h.min.y,x2:h.max.x,y2:h.max.y,width:h.max.x-h.min.x,height:h.max.y-h.min.y}},r.isPointInsideBBox=function(t,e,r){return e>=t.x&&e<=t.x2&&r>=t.y&&r<=t.y2},r.isBBoxIntersect=function(t,e){var i=r.isPointInsideBBox;return i(e,t.x,t.y)||i(e,t.x2,t.y)||i(e,t.x,t.y2)||i(e,t.x2,t.y2)||i(t,e.x,e.y)||i(t,e.x2,e.y)||i(t,e.x,e.y2)||i(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y)},r.pathIntersection=function(t,e){return p(t,e)},r.pathIntersectionNumber=function(t,e){return p(t,e,1)},r.isPointInsidePath=function(t,e,i){var n=r.pathBBox(t);return r.isPointInsideBBox(n,e,i)&&p(t,[["M",e,i],["H",n.x2+10]],1)%2==1},r._removedFactory=function(t){return function(){e("raphael.log",null,"Raphaël: you are calling to method “"+t+"” of removed object",t)}};var Se=r.pathBBox=function(t){var e=Ce(t);if(e.bbox)return i(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};t=Fe(t);for(var r,n=0,a=0,s=[],o=[],l=0,h=t.length;h>l;l++)if(r=t[l],"M"==r[0])n=r[1],a=r[2],s.push(n),o.push(a);else{var u=Pe(n,a,r[1],r[2],r[3],r[4],r[5],r[6]);s=s[N](u.min.x,u.max.x),o=o[N](u.min.y,u.max.y),n=r[5],a=r[6]}var c=V[E](0,s),f=V[E](0,o),p=D[E](0,s),d=D[E](0,o),g=p-c,x=d-f,v={x:c,y:f,x2:p,y2:d,width:g,height:x,cx:c+g/2,cy:f+x/2};return e.bbox=i(v),v},Te=function(t){var e=i(t);return e.toString=r._path2string,e},Ae=r._pathToRelative=function(t){var e=Ce(t);if(e.rel)return Te(e.rel);r.is(t,X)&&r.is(t&&t[0],X)||(t=r.parsePathString(t));var i=[],n=0,a=0,s=0,o=0,l=0;"M"==t[0][0]&&(n=t[0][1],a=t[0][2],s=n,o=a,l++,i.push(["M",n,a]));for(var h=l,u=t.length;u>h;h++){var c=i[h]=[],f=t[h];if(f[0]!=j.call(f[0]))switch(c[0]=j.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-n).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":s=f[1],o=f[2];default:for(var p=1,d=f.length;d>p;p++)c[p]=+(f[p]-(p%2?n:a)).toFixed(3)}else{c=i[h]=[],"m"==f[0]&&(s=f[1]+n,o=f[2]+a);for(var g=0,x=f.length;x>g;g++)i[h][g]=f[g]}var v=i[h].length;switch(i[h][0]){case"z":n=s,a=o;break;case"h":n+=+i[h][v-1];break;case"v":a+=+i[h][v-1];break;default:n+=+i[h][v-2],a+=+i[h][v-1]}}return i.toString=r._path2string,e.rel=Te(i),i},Ee=r._pathToAbsolute=function(t){var e=Ce(t);if(e.abs)return Te(e.abs);if(r.is(t,X)&&r.is(t&&t[0],X)||(t=r.parsePathString(t)),!t||!t.length)return[["M",0,0]];var i=[],n=0,a=0,s=0,l=0,h=0;"M"==t[0][0]&&(n=+t[0][1],a=+t[0][2],s=n,l=a,h++,i[0]=["M",n,a]);for(var u,c,f=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),p=h,d=t.length;d>p;p++){if(i.push(u=[]),c=t[p],c[0]!=ee.call(c[0]))switch(u[0]=ee.call(c[0]),u[0]){case"A":u[1]=c[1],u[2]=c[2],u[3]=c[3],u[4]=c[4],u[5]=c[5],u[6]=+(c[6]+n),u[7]=+(c[7]+a);break;case"V":u[1]=+c[1]+a;break;case"H":u[1]=+c[1]+n;break;case"R":for(var g=[n,a][N](c.slice(1)),x=2,v=g.length;v>x;x++)g[x]=+g[x]+n,g[++x]=+g[x]+a;i.pop(),i=i[N](o(g,f));break;case"M":s=+c[1]+n,l=+c[2]+a;default:for(x=1,v=c.length;v>x;x++)u[x]=+c[x]+(x%2?n:a)}else if("R"==c[0])g=[n,a][N](c.slice(1)),i.pop(),i=i[N](o(g,f)),u=["R"][N](c.slice(-2));else for(var y=0,m=c.length;m>y;y++)u[y]=c[y];switch(u[0]){case"Z":n=s,a=l;break;case"H":n=u[1];break;case"V":a=u[1];break;case"M":s=u[u.length-2],l=u[u.length-1];default:n=u[u.length-2],a=u[u.length-1]}}return i.toString=r._path2string,e.abs=Te(i),i},Ne=function(t,e,r,i){return[t,e,r,i,r,i]},Me=function(t,e,r,i,n,a){var s=1/3,o=2/3;return[s*t+o*r,s*e+o*i,s*n+o*r,s*a+o*i,n,a]},Le=function(t,e,r,i,n,s,o,l,h,u){var c,f=120*W/180,p=W/180*(+n||0),d=[],g=a(function(t,e,r){var i=t*q.cos(r)-e*q.sin(r),n=t*q.sin(r)+e*q.cos(r);return{x:i,y:n}});if(u)B=u[0],C=u[1],w=u[2],k=u[3];else{c=g(t,e,-p),t=c.x,e=c.y,c=g(l,h,-p),l=c.x,h=c.y;var x=(q.cos(W/180*n),q.sin(W/180*n),(t-l)/2),v=(e-h)/2,y=x*x/(r*r)+v*v/(i*i);y>1&&(y=q.sqrt(y),r=y*r,i=y*i);var m=r*r,b=i*i,_=(s==o?-1:1)*q.sqrt(O((m*b-m*v*v-b*x*x)/(m*v*v+b*x*x))),w=_*r*v/i+(t+l)/2,k=_*-i*x/r+(e+h)/2,B=q.asin(((e-k)/i).toFixed(9)),C=q.asin(((h-k)/i).toFixed(9));B=w>t?W-B:B,C=w>l?W-C:C,0>B&&(B=2*W+B),0>C&&(C=2*W+C),o&&B>C&&(B-=2*W),!o&&C>B&&(C-=2*W)}var S=C-B;if(O(S)>f){var T=C,A=l,E=h;C=B+f*(o&&C>B?1:-1),l=w+r*q.cos(C),h=k+i*q.sin(C),d=Le(l,h,r,i,n,0,o,A,E,[C,T,w,k])}S=C-B;var M=q.cos(B),L=q.sin(B),z=q.cos(C),P=q.sin(C),R=q.tan(S/4),I=4/3*r*R,j=4/3*i*R,D=[t,e],V=[t+I*L,e-j*M],Y=[l+I*P,h-j*z],G=[l,h];if(V[0]=2*D[0]-V[0],V[1]=2*D[1]-V[1],u)return[V,Y,G][N](d);d=[V,Y,G][N](d).join()[F](",");for(var H=[],X=0,U=d.length;U>X;X++)H[X]=X%2?g(d[X-1],d[X],p).y:g(d[X],d[X+1],p).x;return H},ze=function(t,e,r,i,n,a,s,o,l){var h=1-l;return{x:Y(h,3)*t+3*Y(h,2)*l*r+3*h*l*l*n+Y(l,3)*s,y:Y(h,3)*e+3*Y(h,2)*l*i+3*h*l*l*a+Y(l,3)*o}},Pe=a(function(t,e,r,i,n,a,s,o){var l,h=n-2*r+t-(s-2*n+r),u=2*(r-t)-2*(n-r),c=t-r,f=(-u+q.sqrt(u*u-4*h*c))/2/h,p=(-u-q.sqrt(u*u-4*h*c))/2/h,d=[e,o],g=[t,s];return O(f)>"1e12"&&(f=.5),O(p)>"1e12"&&(p=.5),f>0&&1>f&&(l=ze(t,e,r,i,n,a,s,o,f),g.push(l.x),d.push(l.y)),p>0&&1>p&&(l=ze(t,e,r,i,n,a,s,o,p),g.push(l.x),d.push(l.y)),h=a-2*i+e-(o-2*a+i),u=2*(i-e)-2*(a-i),c=e-i,f=(-u+q.sqrt(u*u-4*h*c))/2/h,p=(-u-q.sqrt(u*u-4*h*c))/2/h,O(f)>"1e12"&&(f=.5),O(p)>"1e12"&&(p=.5),f>0&&1>f&&(l=ze(t,e,r,i,n,a,s,o,f),g.push(l.x),d.push(l.y)),p>0&&1>p&&(l=ze(t,e,r,i,n,a,s,o,p),g.push(l.x),d.push(l.y)),{min:{x:V[E](0,g),y:V[E](0,d)},max:{x:D[E](0,g),y:D[E](0,d)}}}),Fe=r._path2curve=a(function(t,e){var r=!e&&Ce(t);if(!e&&r.curve)return Te(r.curve);for(var i=Ee(t),n=e&&Ee(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e,r){var i,n,a={T:1,Q:1};if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in a)&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][N](Le[E](0,[e.x,e.y][N](t.slice(1))));break;case"S":"C"==r||"S"==r?(i=2*e.x-e.bx,n=2*e.y-e.by):(i=e.x,n=e.y),t=["C",i,n][N](t.slice(1));break;case"T":"Q"==r||"T"==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"][N](Me(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][N](Me(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][N](Ne(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][N](Ne(e.x,e.y,t[1],e.y));break;case"V":t=["C"][N](Ne(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][N](Ne(e.x,e.y,e.X,e.Y))}return t}),l=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)u[e]="A",n&&(c[e]="A"),t.splice(e++,0,["C"][N](r.splice(0,6)));t.splice(e,1),g=D(i.length,n&&n.length||0)}},h=function(t,e,r,a,s){t&&e&&"M"==t[s][0]&&"M"!=e[s][0]&&(e.splice(s,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],g=D(i.length,n&&n.length||0))},u=[],c=[],f="",p="",d=0,g=D(i.length,n&&n.length||0);g>d;d++){i[d]&&(f=i[d][0]),"C"!=f&&(u[d]=f,d&&(p=u[d-1])),i[d]=o(i[d],a,p),"A"!=u[d]&&"C"==f&&(u[d]="C"),l(i,d),n&&(n[d]&&(f=n[d][0]),"C"!=f&&(c[d]=f,d&&(p=c[d-1])),n[d]=o(n[d],s,p),"A"!=c[d]&&"C"==f&&(c[d]="C"),l(n,d)),h(i,n,a,s,d),h(n,i,s,a,d);var x=i[d],v=n&&n[d],y=x.length,m=n&&v.length;a.x=x[y-2],a.y=x[y-1],a.bx=K(x[y-4])||a.x,a.by=K(x[y-3])||a.y,s.bx=n&&(K(v[m-4])||s.x),s.by=n&&(K(v[m-3])||s.y),s.x=n&&v[m-2],s.y=n&&v[m-1]}return n||(r.curve=Te(i)),n?[i,n]:i},null,Te),Re=(r._parseDots=a(function(t){for(var e=[],i=0,n=t.length;n>i;i++){var a={},s=t[i].match(/^([^:]*):?([\d\.]*)/);if(a.color=r.getRGB(s[1]),a.color.error)return null;a.color=a.color.hex,s[2]&&(a.offset=s[2]+"%"),e.push(a)}for(i=1,n=e.length-1;n>i;i++)if(!e[i].offset){for(var o=K(e[i-1].offset||0),l=0,h=i+1;n>h;h++)if(e[h].offset){l=e[h].offset;break}l||(l=100,h=n),l=K(l);for(var u=(l-o)/(h-i+1);h>i;i++)o+=u,e[i].offset=o+"%"}return e}),r._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)}),Ie=(r._tofront=function(t,e){e.top!==t&&(Re(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},r._toback=function(t,e){e.bottom!==t&&(Re(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},r._insertafter=function(t,e,r){Re(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},r._insertbefore=function(t,e,r){Re(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},r.toMatrix=function(t,e){var r=Se(t),i={_:{transform:L},getBBox:function(){return r}};return je(i,e),i.matrix}),je=(r.transformPath=function(t,e){return xe(t,Ie(t,e))},r._extractTransform=function(t,e){if(null==e)return t._.transform;e=P(e).replace(/\.{3}|\u2026/g,t._.transform||L);var i=r.parseTransformString(e),n=0,a=0,s=0,o=1,l=1,h=t._,u=new d;if(h.transform=i||[],i)for(var c=0,f=i.length;f>c;c++){var p,g,x,v,y,m=i[c],b=m.length,_=P(m[0]).toLowerCase(),w=m[0]!=_,k=w?u.invert():0;"t"==_&&3==b?w?(p=k.x(0,0),g=k.y(0,0),x=k.x(m[1],m[2]),v=k.y(m[1],m[2]),u.translate(x-p,v-g)):u.translate(m[1],m[2]):"r"==_?2==b?(y=y||t.getBBox(1),u.rotate(m[1],y.x+y.width/2,y.y+y.height/2),n+=m[1]):4==b&&(w?(x=k.x(m[2],m[3]),v=k.y(m[2],m[3]),u.rotate(m[1],x,v)):u.rotate(m[1],m[2],m[3]),n+=m[1]):"s"==_?2==b||3==b?(y=y||t.getBBox(1),u.scale(m[1],m[b-1],y.x+y.width/2,y.y+y.height/2),o*=m[1],l*=m[b-1]):5==b&&(w?(x=k.x(m[3],m[4]),v=k.y(m[3],m[4]),u.scale(m[1],m[2],x,v)):u.scale(m[1],m[2],m[3],m[4]),o*=m[1],l*=m[2]):"m"==_&&7==b&&u.add(m[1],m[2],m[3],m[4],m[5],m[6]),h.dirtyT=1,t.matrix=u}t.matrix=u,h.sx=o,h.sy=l,h.deg=n,h.dx=a=u.e,h.dy=s=u.f,1==o&&1==l&&!n&&h.bbox?(h.bbox.x+=+a,h.bbox.y+=+s):h.dirtyT=1}),qe=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},De=r._equaliseTransform=function(t,e){e=P(e).replace(/\.{3}|\u2026/g,t),t=r.parseTransformString(t)||[],e=r.parseTransformString(e)||[];
	for(var i,n,a,s,o=D(t.length,e.length),l=[],h=[],u=0;o>u;u++){if(a=t[u]||qe(e[u]),s=e[u]||qe(a),a[0]!=s[0]||"r"==a[0].toLowerCase()&&(a[2]!=s[2]||a[3]!=s[3])||"s"==a[0].toLowerCase()&&(a[3]!=s[3]||a[4]!=s[4]))return;for(l[u]=[],h[u]=[],i=0,n=D(a.length,s.length);n>i;i++)i in a&&(l[u][i]=a[i]),i in s&&(h[u][i]=s[i])}return{from:l,to:h}};r._getContainer=function(t,e,i,n){var a;return a=null!=n||r.is(t,"object")?t:S.doc.getElementById(t),null!=a?a.tagName?null==e?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:e,height:i}:{container:1,x:t,y:e,width:i,height:n}:void 0},r.pathToRelative=Ae,r._engine={},r.path2curve=Fe,r.matrix=function(t,e,r,i,n,a){return new d(t,e,r,i,n,a)},function(t){function e(t){return t[0]*t[0]+t[1]*t[1]}function i(t){var r=q.sqrt(e(t));t[0]&&(t[0]/=r),t[1]&&(t[1]/=r)}t.add=function(t,e,r,i,n,a){var s,o,l,h,u=[[],[],[]],c=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],f=[[t,r,n],[e,i,a],[0,0,1]];for(t&&t instanceof d&&(f=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),s=0;3>s;s++)for(o=0;3>o;o++){for(h=0,l=0;3>l;l++)h+=c[s][l]*f[l][o];u[s][o]=h}this.a=u[0][0],this.b=u[1][0],this.c=u[0][1],this.d=u[1][1],this.e=u[0][2],this.f=u[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new d(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new d(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,i){null==e&&(e=t),(r||i)&&this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&&this.add(1,0,0,1,-r,-i)},t.rotate=function(t,e,i){t=r.rad(t),e=e||0,i=i||0;var n=+q.cos(t).toFixed(9),a=+q.sin(t).toFixed(9);this.add(n,a,-a,n,e,i),this.add(1,0,0,1,-e,-i)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[P.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return r.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=q.sqrt(e(n[0])),i(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=q.sqrt(e(n[1])),i(n[1]),t.shear/=t.scaley;var a=-n[0][1],s=n[1][1];return 0>s?(t.rotate=r.deg(q.acos(s)),0>a&&(t.rotate=360-t.rotate)):t.rotate=r.deg(q.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[F]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:L)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:L)+(e.rotate?"r"+[e.rotate,0,0]:L)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(d.prototype);for(var Ve=function(){this.returnValue=!1},Oe=function(){return this.originalEvent.preventDefault()},Ye=function(){this.cancelBubble=!0},We=function(){return this.originalEvent.stopPropagation()},Ge=function(t){var e=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,r=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft;return{x:t.clientX+r,y:t.clientY+e}},He=function(){return S.doc.addEventListener?function(t,e,r,i){var n=function(t){var e=Ge(t);return r.call(i,t,e.x,e.y)};if(t.addEventListener(e,n,!1),M&&I[e]){var a=function(e){for(var n=Ge(e),a=e,s=0,o=e.targetTouches&&e.targetTouches.length;o>s;s++)if(e.targetTouches[s].target==t){e=e.targetTouches[s],e.originalEvent=a,e.preventDefault=Oe,e.stopPropagation=We;break}return r.call(i,e,n.x,n.y)};t.addEventListener(I[e],a,!1)}return function(){return t.removeEventListener(e,n,!1),M&&I[e]&&t.removeEventListener(I[e],a,!1),!0}}:S.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||S.win.event;var e=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,n=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e;return t.preventDefault=t.preventDefault||Ve,t.stopPropagation=t.stopPropagation||Ye,r.call(i,t,a,s)};t.attachEvent("on"+e,n);var a=function(){return t.detachEvent("on"+e,n),!0};return a}:void 0}(),Xe=[],Ue=function(t){for(var r,i=t.clientX,n=t.clientY,a=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,s=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft,o=Xe.length;o--;){if(r=Xe[o],M&&t.touches){for(var l,h=t.touches.length;h--;)if(l=t.touches[h],l.identifier==r.el._drag.id){i=l.clientX,n=l.clientY,(t.originalEvent?t.originalEvent:t).preventDefault();break}}else t.preventDefault();var u,c=r.el.node,f=c.nextSibling,p=c.parentNode,d=c.style.display;S.win.opera&&p.removeChild(c),c.style.display="none",u=r.el.paper.getElementByPoint(i,n),c.style.display=d,S.win.opera&&(f?p.insertBefore(c,f):p.appendChild(c)),u&&e("raphael.drag.over."+r.el.id,r.el,u),i+=s,n+=a,e("raphael.drag.move."+r.el.id,r.move_scope||r.el,i-r.el._drag.x,n-r.el._drag.y,i,n,t)}},$e=function(t){r.unmousemove(Ue).unmouseup($e);for(var i,n=Xe.length;n--;)i=Xe[n],i.el._drag={},e("raphael.drag.end."+i.el.id,i.end_scope||i.start_scope||i.move_scope||i.el,t);Xe=[]},Ze=r.el={},Qe=R.length;Qe--;)!function(t){r[t]=Ze[t]=function(e,i){return r.is(e,"function")&&(this.events=this.events||[],this.events.push({name:t,f:e,unbind:He(this.shape||this.node||S.doc,t,e,i||this)})),this},r["un"+t]=Ze["un"+t]=function(e){for(var i=this.events||[],n=i.length;n--;)i[n].name!=t||!r.is(e,"undefined")&&i[n].f!=e||(i[n].unbind(),i.splice(n,1),!i.length&&delete this.events);return this}}(R[Qe]);Ze.data=function(t,i){var n=ue[this.id]=ue[this.id]||{};if(0==arguments.length)return n;if(1==arguments.length){if(r.is(t,"object")){for(var a in t)t[C](a)&&this.data(a,t[a]);return this}return e("raphael.data.get."+this.id,this,n[t],t),n[t]}return n[t]=i,e("raphael.data.set."+this.id,this,i,t),this},Ze.removeData=function(t){return null==t?ue[this.id]={}:ue[this.id]&&delete ue[this.id][t],this},Ze.getData=function(){return i(ue[this.id]||{})},Ze.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)},Ze.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var Je=[];Ze.drag=function(t,i,n,a,s,o){function l(l){(l.originalEvent||l).preventDefault();var h=l.clientX,u=l.clientY,c=S.doc.documentElement.scrollTop||S.doc.body.scrollTop,f=S.doc.documentElement.scrollLeft||S.doc.body.scrollLeft;if(this._drag.id=l.identifier,M&&l.touches)for(var p,d=l.touches.length;d--;)if(p=l.touches[d],this._drag.id=p.identifier,p.identifier==this._drag.id){h=p.clientX,u=p.clientY;break}this._drag.x=h+f,this._drag.y=u+c,!Xe.length&&r.mousemove(Ue).mouseup($e),Xe.push({el:this,move_scope:a,start_scope:s,end_scope:o}),i&&e.on("raphael.drag.start."+this.id,i),t&&e.on("raphael.drag.move."+this.id,t),n&&e.on("raphael.drag.end."+this.id,n),e("raphael.drag.start."+this.id,s||a||this,l.clientX+f,l.clientY+c,l)}return this._drag={},Je.push({el:this,start:l}),this.mousedown(l),this},Ze.onDragOver=function(t){t?e.on("raphael.drag.over."+this.id,t):e.unbind("raphael.drag.over."+this.id)},Ze.undrag=function(){for(var t=Je.length;t--;)Je[t].el==this&&(this.unmousedown(Je[t].start),Je.splice(t,1),e.unbind("raphael.drag.*."+this.id));!Je.length&&r.unmousemove(Ue).unmouseup($e),Xe=[]},_.circle=function(t,e,i){var n=r._engine.circle(this,t||0,e||0,i||0);return this.__set__&&this.__set__.push(n),n},_.rect=function(t,e,i,n,a){var s=r._engine.rect(this,t||0,e||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},_.ellipse=function(t,e,i,n){var a=r._engine.ellipse(this,t||0,e||0,i||0,n||0);return this.__set__&&this.__set__.push(a),a},_.path=function(t){t&&!r.is(t,H)&&!r.is(t[0],X)&&(t+=L);var e=r._engine.path(r.format[E](r,arguments),this);return this.__set__&&this.__set__.push(e),e},_.image=function(t,e,i,n,a){var s=r._engine.image(this,t||"about:blank",e||0,i||0,n||0,a||0);return this.__set__&&this.__set__.push(s),s},_.text=function(t,e,i){var n=r._engine.text(this,t||0,e||0,P(i));return this.__set__&&this.__set__.push(n),n},_.set=function(t){!r.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var e=new ur(t);return this.__set__&&this.__set__.push(e),e.paper=this,e.type="set",e},_.setStart=function(t){this.__set__=t||this.set()},_.setFinish=function(){var t=this.__set__;return delete this.__set__,t},_.getSize=function(){var t=this.canvas.parentNode;return{width:t.offsetWidth,height:t.offsetHeight}},_.setSize=function(t,e){return r._engine.setSize.call(this,t,e)},_.setViewBox=function(t,e,i,n,a){return r._engine.setViewBox.call(this,t,e,i,n,a)},_.top=_.bottom=null,_.raphael=r;var Ke=function(t){var e=t.getBoundingClientRect(),r=t.ownerDocument,i=r.body,n=r.documentElement,a=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,o=e.top+(S.win.pageYOffset||n.scrollTop||i.scrollTop)-a,l=e.left+(S.win.pageXOffset||n.scrollLeft||i.scrollLeft)-s;return{y:o,x:l}};_.getElementByPoint=function(t,e){var r=this,i=r.canvas,n=S.doc.elementFromPoint(t,e);if(S.win.opera&&"svg"==n.tagName){var a=Ke(i),s=i.createSVGRect();s.x=t-a.x,s.y=e-a.y,s.width=s.height=1;var o=i.getIntersectionList(s,null);o.length&&(n=o[o.length-1])}if(!n)return null;for(;n.parentNode&&n!=i.parentNode&&!n.raphael;)n=n.parentNode;return n==r.canvas.parentNode&&(n=i),n=n&&n.raphael?r.getById(n.raphaelid):null},_.getElementsByBBox=function(t){var e=this.set();return this.forEach(function(i){r.isBBoxIntersect(i.getBBox(),t)&&e.push(i)}),e},_.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},_.forEach=function(t,e){for(var r=this.bottom;r;){if(t.call(e,r)===!1)return this;r=r.next}return this},_.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(i){i.isPointInside(t,e)&&r.push(i)}),r},Ze.isPointInside=function(t,e){var i=this.realPath=ge[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(i=r.transformPath(i,this.attr("transform"))),r.isPointInsidePath(i,t,e)},Ze.getBBox=function(t){if(this.removed)return{};var e=this._;return t?((e.dirty||!e.bboxwt)&&(this.realPath=ge[this.type](this),e.bboxwt=Se(this.realPath),e.bboxwt.toString=g,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&((e.dirty||!this.realPath)&&(e.bboxwt=0,this.realPath=ge[this.type](this)),e.bbox=Se(xe(this.realPath,this.matrix)),e.bbox.toString=g,e.dirty=e.dirtyT=0),e.bbox)},Ze.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},Ze.glow=function(t){if("text"==this.type)return null;t=t||{};var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:t.opacity||.5,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||ge[this.type](this);a=this.matrix?xe(a,this.matrix):a;for(var s=1;r+1>s;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));return n.insertBefore(this).translate(e.offsetx,e.offsety)};var tr=function(t,e,i,n,a,s,o,l,c){return null==c?h(t,e,i,n,a,s,o,l):r.findDotsAtSegment(t,e,i,n,a,s,o,l,u(t,e,i,n,a,s,o,l,c))},er=function(t,e){return function(i,n,a){i=Fe(i);for(var s,o,l,h,u,c="",f={},p=0,d=0,g=i.length;g>d;d++){if(l=i[d],"M"==l[0])s=+l[1],o=+l[2];else{if(h=tr(s,o,l[1],l[2],l[3],l[4],l[5],l[6]),p+h>n){if(e&&!f.start){if(u=tr(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),c+=["C"+u.start.x,u.start.y,u.m.x,u.m.y,u.x,u.y],a)return c;f.start=c,c=["M"+u.x,u.y+"C"+u.n.x,u.n.y,u.end.x,u.end.y,l[5],l[6]].join(),p+=h,s=+l[5],o=+l[6];continue}if(!t&&!e)return u=tr(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),{x:u.x,y:u.y,alpha:u.alpha}}p+=h,s=+l[5],o=+l[6]}c+=l.shift()+l}return f.end=c,u=t?p:e?f:r.findDotsAtSegment(s,o,l[0],l[1],l[2],l[3],l[4],l[5],1),u.alpha&&(u={x:u.x,y:u.y,alpha:u.alpha}),u}},rr=er(1),ir=er(),nr=er(0,1);r.getTotalLength=rr,r.getPointAtLength=ir,r.getSubpath=function(t,e,r){if(this.getTotalLength(t)-r<1e-6)return nr(t,e).end;var i=nr(t,r,1);return e?nr(i,e).end:i},Ze.getTotalLength=function(){var t=this.getPath();if(t)return this.node.getTotalLength?this.node.getTotalLength():rr(t)},Ze.getPointAtLength=function(t){var e=this.getPath();if(e)return ir(e,t)},Ze.getPath=function(){var t,e=r._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return e&&(t=e(this)),t},Ze.getSubpath=function(t,e){var i=this.getPath();if(i)return r.getSubpath(i,t,e)};var ar=r.easing_formulas={linear:function(t){return t},"<":function(t){return Y(t,1.7)},">":function(t){return Y(t,.48)},"<>":function(t){var e=.48-t/1.04,r=q.sqrt(.1734+e*e),i=r-e,n=Y(O(i),1/3)*(0>i?-1:1),a=-r-e,s=Y(O(a),1/3)*(0>a?-1:1),o=n+s+.5;return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:Y(2,-10*t)*q.sin(2*(t-.075)*W/.3)+1},bounce:function(t){var e,r=7.5625,i=2.75;return 1/i>t?e=r*t*t:2/i>t?(t-=1.5/i,e=r*t*t+.75):2.5/i>t?(t-=2.25/i,e=r*t*t+.9375):(t-=2.625/i,e=r*t*t+.984375),e}};ar.easeIn=ar["ease-in"]=ar["<"],ar.easeOut=ar["ease-out"]=ar[">"],ar.easeInOut=ar["ease-in-out"]=ar["<>"],ar["back-in"]=ar.backIn,ar["back-out"]=ar.backOut;var sr=[],or=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(t){setTimeout(t,16)},lr=function(){for(var t=+new Date,i=0;i<sr.length;i++){var n=sr[i];if(!n.el.removed&&!n.paused){var a,s,o=t-n.start,l=n.ms,h=n.easing,u=n.from,c=n.diff,f=n.to,p=(n.t,n.el),d={},g={};if(n.initstatus?(o=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*l,n.status=n.initstatus,delete n.initstatus,n.stop&&sr.splice(i--,1)):n.status=(n.prev+(n.percent-n.prev)*(o/l))/n.anim.top,!(0>o))if(l>o){var x=h(o/l);for(var v in u)if(u[C](v)){switch(ie[v]){case G:a=+u[v]+x*l*c[v];break;case"colour":a="rgb("+[hr(J(u[v].r+x*l*c[v].r)),hr(J(u[v].g+x*l*c[v].g)),hr(J(u[v].b+x*l*c[v].b))].join(",")+")";break;case"path":a=[];for(var m=0,b=u[v].length;b>m;m++){a[m]=[u[v][m][0]];for(var _=1,w=u[v][m].length;w>_;_++)a[m][_]=+u[v][m][_]+x*l*c[v][m][_];a[m]=a[m].join(z)}a=a.join(z);break;case"transform":if(c[v].real)for(a=[],m=0,b=u[v].length;b>m;m++)for(a[m]=[u[v][m][0]],_=1,w=u[v][m].length;w>_;_++)a[m][_]=u[v][m][_]+x*l*c[v][m][_];else{var k=function(t){return+u[v][t]+x*l*c[v][t]};a=[["m",k(0),k(1),k(2),k(3),k(4),k(5)]]}break;case"csv":if("clip-rect"==v)for(a=[],m=4;m--;)a[m]=+u[v][m]+x*l*c[v][m];break;default:var B=[][N](u[v]);for(a=[],m=p.paper.customAttributes[v].length;m--;)a[m]=+B[m]+x*l*c[v][m]}d[v]=a}p.attr(d),function(t,r,i){setTimeout(function(){e("raphael.anim.frame."+t,r,i)})}(p.id,p,n.anim)}else{if(function(t,i,n){setTimeout(function(){e("raphael.anim.frame."+i.id,i,n),e("raphael.anim.finish."+i.id,i,n),r.is(t,"function")&&t.call(i)})}(n.callback,p,n.anim),p.attr(f),sr.splice(i--,1),n.repeat>1&&!n.next){for(s in f)f[C](s)&&(g[s]=n.totalOrigin[s]);n.el.attr(g),y(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&&!n.stop&&y(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)}}}sr.length&&or(lr)},hr=function(t){return t>255?255:0>t?0:t};Ze.animateWith=function(t,e,i,n,a,s){var o=this;if(o.removed)return s&&s.call(o),o;var l=i instanceof v?i:r.animation(i,n,a,s);y(l,o,l.percents[0],null,o.attr());for(var h=0,u=sr.length;u>h;h++)if(sr[h].anim==e&&sr[h].el==t){sr[u-1].start=sr[h].start;break}return o},Ze.onAnimation=function(t){return t?e.on("raphael.anim.frame."+this.id,t):e.unbind("raphael.anim.frame."+this.id),this},v.prototype.delay=function(t){var e=new v(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},v.prototype.repeat=function(t){var e=new v(this.anim,this.ms);return e.del=this.del,e.times=q.floor(D(t,0))||1,e},r.animation=function(t,e,i,n){if(t instanceof v)return t;(r.is(i,"function")||!i)&&(n=n||i||null,i=null),t=Object(t),e=+e||0;var a,s,o={};for(s in t)t[C](s)&&K(s)!=s&&K(s)+"%"!=s&&(a=!0,o[s]=t[s]);if(a)return i&&(o.easing=i),n&&(o.callback=n),new v({100:o},e);if(n){var l=0;for(var h in t){var u=te(h);t[C](h)&&u>l&&(l=u)}l+="%",!t[l].callback&&(t[l].callback=n)}return new v(t,e)},Ze.animate=function(t,e,i,n){var a=this;if(a.removed)return n&&n.call(a),a;var s=t instanceof v?t:r.animation(t,e,i,n);return y(s,a,s.percents[0],null,a.attr()),a},Ze.setTime=function(t,e){return t&&null!=e&&this.status(t,V(e,t.ms)/t.ms),this},Ze.status=function(t,e){var r,i,n=[],a=0;if(null!=e)return y(t,this,-1,V(e,1)),this;for(r=sr.length;r>a;a++)if(i=sr[a],i.el.id==this.id&&(!t||i.anim==t)){if(t)return i.status;n.push({anim:i.anim,status:i.status})}return t?0:n},Ze.pause=function(t){for(var r=0;r<sr.length;r++)sr[r].el.id!=this.id||t&&sr[r].anim!=t||e("raphael.anim.pause."+this.id,this,sr[r].anim)!==!1&&(sr[r].paused=!0);return this},Ze.resume=function(t){for(var r=0;r<sr.length;r++)if(sr[r].el.id==this.id&&(!t||sr[r].anim==t)){var i=sr[r];e("raphael.anim.resume."+this.id,this,i.anim)!==!1&&(delete i.paused,this.status(i.anim,i.status))}return this},Ze.stop=function(t){for(var r=0;r<sr.length;r++)sr[r].el.id!=this.id||t&&sr[r].anim!=t||e("raphael.anim.stop."+this.id,this,sr[r].anim)!==!1&&sr.splice(r--,1);return this},e.on("raphael.remove",m),e.on("raphael.clear",m),Ze.toString=function(){return"Raphaël’s object"};var ur=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;r>e;e++)!t[e]||t[e].constructor!=Ze.constructor&&t[e].constructor!=ur||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},cr=ur.prototype;cr.push=function(){for(var t,e,r=0,i=arguments.length;i>r;r++)t=arguments[r],!t||t.constructor!=Ze.constructor&&t.constructor!=ur||(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},cr.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},cr.forEach=function(t,e){for(var r=0,i=this.items.length;i>r;r++)if(t.call(e,this.items[r],r)===!1)return this;return this};for(var fr in Ze)Ze[C](fr)&&(cr[fr]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t][E](r,e)})}}(fr));return cr.attr=function(t,e){if(t&&r.is(t,X)&&r.is(t[0],"object"))for(var i=0,n=t.length;n>i;i++)this.items[i].attr(t[i]);else for(var a=0,s=this.items.length;s>a;a++)this.items[a].attr(t,e);return this},cr.clear=function(){for(;this.length;)this.pop()},cr.splice=function(t,e){t=0>t?D(this.length+t,0):t,e=D(0,V(this.length-t,e));var r,i=[],n=[],a=[];for(r=2;r<arguments.length;r++)a.push(arguments[r]);for(r=0;e>r;r++)n.push(this[t+r]);for(;r<this.length-t;r++)i.push(this[t+r]);var s=a.length;for(r=0;r<s+i.length;r++)this.items[t+r]=this[t+r]=s>r?a[r]:i[r-s];for(r=this.items.length=this.length-=e-s;this[r];)delete this[r++];return new ur(n)},cr.exclude=function(t){for(var e=0,r=this.length;r>e;e++)if(this[e]==t)return this.splice(e,1),!0},cr.animate=function(t,e,i,n){(r.is(i,"function")||!i)&&(n=i||null);var a,s,o=this.items.length,l=o,h=this;if(!o)return this;n&&(s=function(){!--o&&n.call(h)}),i=r.is(i,H)?i:s;var u=r.animation(t,e,i,s);for(a=this.items[--l].animate(u);l--;)this.items[l]&&!this.items[l].removed&&this.items[l].animateWith(a,u,u),this.items[l]&&!this.items[l].removed||o--;return this},cr.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},cr.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox();t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return t=V[E](0,t),e=V[E](0,e),r=D[E](0,r),i=D[E](0,i),{x:t,y:e,x2:r,y2:i,width:r-t,height:i-e}},cr.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;r>e;e++)t.push(this.items[e].clone());return t},cr.toString=function(){return"Raphaël‘s set"},cr.glow=function(t){var e=this.paper.set();return this.forEach(function(r){var i=r.glow(t);null!=i&&i.forEach(function(t){e.push(t)})}),e},cr.isPointInside=function(t,e){var r=!1;return this.forEach(function(i){return i.isPointInside(t,e)?(r=!0,!1):void 0}),r},r.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"];for(var i in t.face)t.face[C](i)&&(e.face[i]=t.face[i]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){e.face["units-per-em"]=te(t.face["units-per-em"],10);for(var n in t.glyphs)if(t.glyphs[C](n)){var a=t.glyphs[n];if(e.glyphs[n]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var s in a.k)a[C](s)&&(e.glyphs[n].k[s]=a.k[s])}}return t},_.getFont=function(t,e,i,n){if(n=n||"normal",i=i||"normal",e=+e||{normal:400,bold:700,lighter:300,bolder:800}[e]||400,r.fonts){var a=r.fonts[t];if(!a){var s=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,L)+"(\\s|$)","i");for(var o in r.fonts)if(r.fonts[C](o)&&s.test(o)){a=r.fonts[o];break}}var l;if(a)for(var h=0,u=a.length;u>h&&(l=a[h],l.face["font-weight"]!=e||l.face["font-style"]!=i&&l.face["font-style"]||l.face["font-stretch"]!=n);h++);return l}},_.print=function(t,e,i,n,a,s,o,l){s=s||"middle",o=D(V(o||0,1),-1),l=D(V(l||1,3),1);var h,u=P(i)[F](L),c=0,f=0,p=L;if(r.is(n,"string")&&(n=this.getFont(n)),n){h=(a||16)/n.face["units-per-em"];for(var d=n.face.bbox[F](w),g=+d[0],x=d[3]-d[1],v=0,y=+d[1]+("baseline"==s?x+ +n.face.descent:x/2),m=0,b=u.length;b>m;m++){if("\n"==u[m])c=0,k=0,f=0,v+=x*l;else{var _=f&&n.glyphs[u[m-1]]||{},k=n.glyphs[u[m]];c+=f?(_.w||n.w)+(_.k&&_.k[u[m]]||0)+n.w*o:0,f=1}k&&k.d&&(p+=r.transformPath(k.d,["t",c*h,v*h,"s",h,h,g,y,"t",(t-g)/h,(e-y)/h]))}}return this.path(p).attr({fill:"#000",stroke:"none"})},_.add=function(t){if(r.is(t,"array"))for(var e,i=this.set(),n=0,a=t.length;a>n;n++)e=t[n]||{},k[C](e.type)&&i.push(this[e.type]().attr(e));return i},r.format=function(t,e){var i=r.is(e,X)?[0][N](e):arguments;return t&&r.is(t,H)&&i.length-1&&(t=t.replace(B,function(t,e){return null==i[++e]?L:i[e]})),t||L},r.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,r=function(t,r,i){var n=i;return r.replace(e,function(t,e,r,i,a){e=e||i,n&&(e in n&&(n=n[e]),"function"==typeof n&&a&&(n=n()))}),n=(null==n||n==i?t:n)+""};return function(e,i){return String(e).replace(t,function(t,e){return r(t,e,i)})}}(),r.ninja=function(){return T.was?S.win.Raphael=T.is:delete Raphael,r},r.st=cr,e.on("raphael.DOMload",function(){b=!0}),function(t,e,i){function n(){/in/.test(t.readyState)?setTimeout(n,9):r.eve("raphael.DOMload")}null==t.readyState&&t.addEventListener&&(t.addEventListener(e,i=function(){t.removeEventListener(e,i,!1),t.readyState="complete"},!1),t.readyState="loading"),n()}(document,"DOMContentLoaded"),function(){if(r.svg){var t="hasOwnProperty",e=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=r.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};r.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var x=function(i,n){if(n){"string"==typeof i&&(i=x(i));for(var a in n)n[t](a)&&("xlink:"==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),e(n[a])):i.setAttribute(a,e(n[a])))}else i=r._g.doc.createElementNS("http://www.w3.org/2000/svg",i),i.style&&(i.style.webkitTapHighlightColor="rgba(0,0,0,0)");return i},v=function(t,n){var h="linear",u=t.id+n,f=.5,p=.5,d=t.node,g=t.paper,v=d.style,y=r._g.doc.getElementById(u);if(!y){if(n=e(n).replace(r._radial_gradient,function(t,e,r){if(h="radial",e&&r){f=i(e),p=i(r);var n=2*(p>.5)-1;l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*n+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*n)}return c}),n=n.split(/\s*\-\s*/),"linear"==h){var m=n.shift();if(m=-i(m),isNaN(m))return null;var b=[0,0,a.cos(r.rad(m)),a.sin(r.rad(m))],_=1/(s(o(b[2]),o(b[3]))||1);b[2]*=_,b[3]*=_,b[2]<0&&(b[0]=-b[2],b[2]=0),b[3]<0&&(b[1]=-b[3],b[3]=0)}var w=r._parseDots(n);if(!w)return null;if(u=u.replace(/[\(\)\s,\xb0#]/g,"_"),t.gradient&&u!=t.gradient.id&&(g.defs.removeChild(t.gradient),delete t.gradient),!t.gradient){y=x(h+"Gradient",{id:u}),t.gradient=y,x(y,"radial"==h?{fx:f,fy:p}:{x1:b[0],y1:b[1],x2:b[2],y2:b[3]}),g.defs.appendChild(y);for(var k=0,B=w.length;B>k;k++)y.appendChild(x("stop",{offset:w[k].offset?w[k].offset:k?"100%":"0%","stop-color":w[k].color||"#fff"}))}}return x(d,{fill:"url('"+document.location+"#"+u+"')",opacity:1,"fill-opacity":1}),v.fill=c,v.opacity=1,v.fillOpacity=1,1},y=function(t){var e=t.getBBox(1);x(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},m=function(i,n,a){if("path"==i.type){for(var s,o,l,h,u,f=e(n).toLowerCase().split("-"),p=i.paper,v=a?"end":"start",y=i.node,m=i.attrs,b=m["stroke-width"],_=f.length,w="classic",k=3,B=3,C=5;_--;)switch(f[_]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=f[_];break;case"wide":B=5;break;case"narrow":B=2;break;case"long":k=5;break;case"short":k=2}if("open"==w?(k+=2,B+=2,C+=2,l=1,h=a?4:1,u={fill:"none",stroke:m.stroke}):(h=l=k/2,u={fill:m.stroke,stroke:"none"}),i._.arrows?a?(i._.arrows.endPath&&g[i._.arrows.endPath]--,i._.arrows.endMarker&&g[i._.arrows.endMarker]--):(i._.arrows.startPath&&g[i._.arrows.startPath]--,i._.arrows.startMarker&&g[i._.arrows.startMarker]--):i._.arrows={},"none"!=w){var S="raphael-marker-"+w,T="raphael-marker-"+v+w+k+B+"-obj"+i.id;r._g.doc.getElementById(S)?g[S]++:(p.defs.appendChild(x(x("path"),{"stroke-linecap":"round",d:d[w],id:S})),g[S]=1);var A,E=r._g.doc.getElementById(T);E?(g[T]++,A=E.getElementsByTagName("use")[0]):(E=x(x("marker"),{id:T,markerHeight:B,markerWidth:k,orient:"auto",refX:h,refY:B/2}),A=x(x("use"),{"xlink:href":"#"+S,transform:(a?"rotate(180 "+k/2+" "+B/2+") ":c)+"scale("+k/C+","+B/C+")","stroke-width":(1/((k/C+B/C)/2)).toFixed(4)}),E.appendChild(A),p.defs.appendChild(E),g[T]=1),x(A,u);var N=l*("diamond"!=w&&"oval"!=w);a?(s=i._.arrows.startdx*b||0,o=r.getTotalLength(m.path)-N*b):(s=N*b,o=r.getTotalLength(m.path)-(i._.arrows.enddx*b||0)),u={},u["marker-"+v]="url(#"+T+")",(o||s)&&(u.d=r.getSubpath(m.path,s,o)),x(y,u),i._.arrows[v+"Path"]=S,i._.arrows[v+"Marker"]=T,i._.arrows[v+"dx"]=N,i._.arrows[v+"Type"]=w,i._.arrows[v+"String"]=n}else a?(s=i._.arrows.startdx*b||0,o=r.getTotalLength(m.path)-s):(s=0,o=r.getTotalLength(m.path)-(i._.arrows.enddx*b||0)),i._.arrows[v+"Path"]&&x(y,{d:r.getSubpath(m.path,s,o)}),delete i._.arrows[v+"Path"],delete i._.arrows[v+"Marker"],delete i._.arrows[v+"dx"],delete i._.arrows[v+"Type"],delete i._.arrows[v+"String"];for(u in g)if(g[t](u)&&!g[u]){var M=r._g.doc.getElementById(u);M&&M.parentNode.removeChild(M)}}},b={"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},_=function(t,r,i){if(r=b[e(r).toLowerCase()]){for(var n=t.attrs["stroke-width"]||"1",a={round:n,square:n,butt:0}[t.attrs["stroke-linecap"]||i["stroke-linecap"]]||0,s=[],o=r.length;o--;)s[o]=r[o]*n+(o%2?1:-1)*a;x(t.node,{"stroke-dasharray":s.join(",")})}else x(t.node,{"stroke-dasharray":"none"})},w=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility;l.style.visibility="hidden";for(var d in a)if(a[t](d)){if(!r._availableAttrs[t](d))continue;var g=a[d];switch(u[d]=g,d){case"blur":i.blur(g);break;case"title":var b=l.getElementsByTagName("title");if(b.length&&(b=b[0]))b.firstChild.nodeValue=g;else{b=x("title");var w=r._g.doc.createTextNode(g);b.appendChild(w),l.appendChild(b)}break;case"href":case"target":var k=l.parentNode;if("a"!=k.tagName.toLowerCase()){var C=x("a");k.insertBefore(C,l),C.appendChild(l),k=C}"target"==d?k.setAttributeNS(p,"show","blank"==g?"new":g):k.setAttributeNS(p,d,g);break;case"cursor":l.style.cursor=g;break;case"transform":i.transform(g);break;case"arrow-start":m(i,g);break;case"arrow-end":m(i,g,1);break;case"clip-rect":var S=e(g).split(h);if(4==S.length){i.clip&&i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);var T=x("clipPath"),A=x("rect");T.id=r.createUUID(),x(A,{x:S[0],y:S[1],width:S[2],height:S[3]}),T.appendChild(A),i.paper.defs.appendChild(T),x(l,{"clip-path":"url(#"+T.id+")"}),i.clip=A}if(!g){var E=l.getAttribute("clip-path");if(E){var N=r._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g,c));N&&N.parentNode.removeChild(N),x(l,{"clip-path":c}),delete i.clip}}break;case"path":"path"==i.type&&(x(l,{d:g?u.path=r._pathToAbsolute(g):"M0,0"}),i._.dirty=1,i._.arrows&&("startString"in i._.arrows&&m(i,i._.arrows.startString),"endString"in i._.arrows&&m(i,i._.arrows.endString,1)));break;case"width":if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break;d="x",g=u.x;case"x":u.fx&&(g=-u.x-(u.width||0));case"rx":if("rx"==d&&"rect"==i.type)break;case"cx":l.setAttribute(d,g),i.pattern&&y(i),i._.dirty=1;break;case"height":if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break;d="y",g=u.y;case"y":u.fy&&(g=-u.y-(u.height||0));case"ry":if("ry"==d&&"rect"==i.type)break;case"cy":l.setAttribute(d,g),i.pattern&&y(i),i._.dirty=1;break;case"r":"rect"==i.type?x(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1;break;case"src":"image"==i.type&&l.setAttributeNS(p,"href",g);break;case"stroke-width":(1!=i._.sx||1!=i._.sy)&&(g/=s(o(i._.sx),o(i._.sy))||1),l.setAttribute(d,g),u["stroke-dasharray"]&&_(i,u["stroke-dasharray"],a),i._.arrows&&("startString"in i._.arrows&&m(i,i._.arrows.startString),"endString"in i._.arrows&&m(i,i._.arrows.endString,1));break;case"stroke-dasharray":_(i,g,a);break;case"fill":var M=e(g).match(r._ISURL);if(M){T=x("pattern");var L=x("image");T.id=r.createUUID(),x(T,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),x(L,{x:0,y:0,"xlink:href":M[1]}),T.appendChild(L),function(t){r._preload(M[1],function(){var e=this.offsetWidth,r=this.offsetHeight;x(t,{width:e,height:r}),x(L,{width:e,height:r})})}(T),i.paper.defs.appendChild(T),x(l,{fill:"url(#"+T.id+")"}),i.pattern=T,i.pattern&&y(i);break}var z=r.getRGB(g);if(z.error){if(("circle"==i.type||"ellipse"==i.type||"r"!=e(g).charAt())&&v(i,g)){if("opacity"in u||"fill-opacity"in u){var P=r._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(P){var F=P.getElementsByTagName("stop");x(F[F.length-1],{"stop-opacity":("opacity"in u?u.opacity:1)*("fill-opacity"in u?u["fill-opacity"]:1)})}}u.gradient=g,u.fill="none";break}}else delete a.gradient,delete u.gradient,!r.is(u.opacity,"undefined")&&r.is(a.opacity,"undefined")&&x(l,{opacity:u.opacity}),!r.is(u["fill-opacity"],"undefined")&&r.is(a["fill-opacity"],"undefined")&&x(l,{"fill-opacity":u["fill-opacity"]});z[t]("opacity")&&x(l,{"fill-opacity":z.opacity>1?z.opacity/100:z.opacity});case"stroke":z=r.getRGB(g),l.setAttribute(d,z.hex),"stroke"==d&&z[t]("opacity")&&x(l,{"stroke-opacity":z.opacity>1?z.opacity/100:z.opacity}),"stroke"==d&&i._.arrows&&("startString"in i._.arrows&&m(i,i._.arrows.startString),"endString"in i._.arrows&&m(i,i._.arrows.endString,1));break;case"gradient":("circle"==i.type||"ellipse"==i.type||"r"!=e(g).charAt())&&v(i,g);break;case"opacity":u.gradient&&!u[t]("stroke-opacity")&&x(l,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(u.gradient){P=r._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)),P&&(F=P.getElementsByTagName("stop"),x(F[F.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=n(g,10)+"px");var R=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});l.style[R]=g,i._.dirty=1,l.setAttribute(d,g)
}}B(i,a),l.style.visibility=f},k=1.2,B=function(i,a){if("text"==i.type&&(a[t]("text")||a[t]("font")||a[t]("font-size")||a[t]("x")||a[t]("y"))){var s=i.attrs,o=i.node,l=o.firstChild?n(r._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue("font-size"),10):10;if(a[t]("text")){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h,u=e(a.text).split("\n"),f=[],p=0,d=u.length;d>p;p++)h=x("tspan"),p&&x(h,{dy:l*k,x:s.x}),h.appendChild(r._g.doc.createTextNode(u[p])),o.appendChild(h),f[p]=h}else for(f=o.getElementsByTagName("tspan"),p=0,d=f.length;d>p;p++)p?x(f[p],{dy:l*k,x:s.x}):x(f[0],{dy:0});x(o,{x:s.x,y:s.y}),i._.dirty=1;var g=i._getBBox(),v=s.y-(g.y+g.height/2);v&&r.is(v,"finite")&&x(f[0],{dy:v})}},C=function(t){return t.parentNode&&"a"===t.parentNode.tagName.toLowerCase()?t.parentNode:t},S=function(t,e){this[0]=this.node=t,t.raphael=!0,this.id=r._oid++,t.raphaelid=this.id,this.matrix=r.matrix(),this.realPath=null,this.paper=e,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!e.bottom&&(e.bottom=this),this.prev=e.top,e.top&&(e.top.next=this),e.top=this,this.next=null},T=r.el;S.prototype=T,T.constructor=S,r._engine.path=function(t,e){var r=x("path");e.canvas&&e.canvas.appendChild(r);var i=new S(r,e);return i.type="path",w(i,{fill:"none",stroke:"#000",path:t}),i},T.rotate=function(t,r,n){if(this.removed)return this;if(t=e(t).split(h),t.length-1&&(r=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(r=n),null==r||null==n){var a=this.getBBox(1);r=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,r,n]])),this},T.scale=function(t,r,n,a){if(this.removed)return this;if(t=e(t).split(h),t.length-1&&(r=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==r&&(r=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,r,n,a]])),this},T.translate=function(t,r){return this.removed?this:(t=e(t).split(h),t.length-1&&(r=i(t[1])),t=i(t[0])||0,r=+r||0,this.transform(this._.transform.concat([["t",t,r]])),this)},T.transform=function(e){var i=this._;if(null==e)return i.transform;if(r._extractTransform(this,e),this.clip&&x(this.clip,{transform:this.matrix.invert()}),this.pattern&&y(this),this.node&&x(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[t]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":n})}return this},T.hide=function(){return this.removed||(this.node.style.display="none"),this},T.show=function(){return this.removed||(this.node.style.display=""),this},T.remove=function(){var t=C(this.node);if(!this.removed&&t.parentNode){var e=this.paper;e.__set__&&e.__set__.exclude(this),u.unbind("raphael.*.*."+this.id),this.gradient&&e.defs.removeChild(this.gradient),r._tear(this,e),t.parentNode.removeChild(t),this.removeData();for(var i in this)this[i]="function"==typeof this[i]?r._removedFactory(i):null;this.removed=!0}},T._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e,r=!1;this.paper.canvas.parentElement?e=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(e=this.paper.canvas.parentNode.style),e&&"none"==e.display&&(r=!0,e.display="");var i={};try{i=this.node.getBBox()}catch(n){i={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{i=i||{},r&&(e.display="none")}return t&&this.hide(),i},T.attr=function(e,i){if(this.removed)return this;if(null==e){var n={};for(var a in this.attrs)this.attrs[t](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&r.is(e,"string")){if("fill"==e&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==e)return this._.transform;for(var s=e.split(h),o={},l=0,c=s.length;c>l;l++)e=s[l],o[e]=e in this.attrs?this.attrs[e]:r.is(this.paper.customAttributes[e],"function")?this.paper.customAttributes[e].def:r._availableAttrs[e];return c-1?o:o[s[0]]}if(null==i&&r.is(e,"array")){for(o={},l=0,c=e.length;c>l;l++)o[e[l]]=this.attr(e[l]);return o}if(null!=i){var f={};f[e]=i}else null!=e&&r.is(e,"object")&&(f=e);for(var p in f)u("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[t](p)&&f[t](p)&&r.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));this.attrs[p]=f[p];for(var g in d)d[t](g)&&(f[g]=d[g])}return w(this,f),this},T.toFront=function(){if(this.removed)return this;var t=C(this.node);t.parentNode.appendChild(t);var e=this.paper;return e.top!=this&&r._tofront(this,e),this},T.toBack=function(){if(this.removed)return this;var t=C(this.node),e=t.parentNode;e.insertBefore(t,e.firstChild),r._toback(this,this.paper);this.paper;return this},T.insertAfter=function(t){if(this.removed||!t)return this;var e=C(this.node),i=C(t.node||t[t.length-1].node);return i.nextSibling?i.parentNode.insertBefore(e,i.nextSibling):i.parentNode.appendChild(e),r._insertafter(this,t,this.paper),this},T.insertBefore=function(t){if(this.removed||!t)return this;var e=C(this.node),i=C(t.node||t[0].node);return i.parentNode.insertBefore(e,i),r._insertbefore(this,t,this.paper),this},T.blur=function(t){var e=this;if(0!==+t){var i=x("filter"),n=x("feGaussianBlur");e.attrs.blur=t,i.id=r.createUUID(),x(n,{stdDeviation:+t||1.5}),i.appendChild(n),e.paper.defs.appendChild(i),e._blur=i,x(e.node,{filter:"url(#"+i.id+")"})}else e._blur&&(e._blur.parentNode.removeChild(e._blur),delete e._blur,delete e.attrs.blur),e.node.removeAttribute("filter");return e},r._engine.circle=function(t,e,r,i){var n=x("circle");t.canvas&&t.canvas.appendChild(n);var a=new S(n,t);return a.attrs={cx:e,cy:r,r:i,fill:"none",stroke:"#000"},a.type="circle",x(n,a.attrs),a},r._engine.rect=function(t,e,r,i,n,a){var s=x("rect");t.canvas&&t.canvas.appendChild(s);var o=new S(s,t);return o.attrs={x:e,y:r,width:i,height:n,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},o.type="rect",x(s,o.attrs),o},r._engine.ellipse=function(t,e,r,i,n){var a=x("ellipse");t.canvas&&t.canvas.appendChild(a);var s=new S(a,t);return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:"none",stroke:"#000"},s.type="ellipse",x(a,s.attrs),s},r._engine.image=function(t,e,r,i,n,a){var s=x("image");x(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:"none"}),s.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(s);var o=new S(s,t);return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type="image",o},r._engine.text=function(t,e,i,n){var a=x("text");t.canvas&&t.canvas.appendChild(a);var s=new S(a,t);return s.attrs={x:e,y:i,"text-anchor":"middle",text:n,"font-family":r._availableAttrs["font-family"],"font-size":r._availableAttrs["font-size"],stroke:"none",fill:"#000"},s.type="text",w(s,s.attrs),s},r._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},r._engine.create=function(){var t=r._getContainer.apply(0,arguments),e=t&&t.container,i=t.x,n=t.y,a=t.width,s=t.height;if(!e)throw new Error("SVG container not found.");var o,l=x("svg"),h="overflow:hidden;";return i=i||0,n=n||0,a=a||512,s=s||342,x(l,{height:s,version:1.1,width:a,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==e?(l.style.cssText=h+"position:absolute;left:"+i+"px;top:"+n+"px",r._g.doc.body.appendChild(l),o=1):(l.style.cssText=h+"position:relative",e.firstChild?e.insertBefore(l,e.firstChild):e.appendChild(l)),e=new r._Paper,e.width=a,e.height=s,e.canvas=l,e.clear(),e._left=e._top=0,o&&(e.renderfix=function(){}),e.renderfix(),e},r._engine.setViewBox=function(t,e,r,i,n){u("raphael.setViewBox",this,this._viewBox,[t,e,r,i,n]);var a,o,l=this.getSize(),h=s(r/l.width,i/l.height),c=this.top,p=n?"xMidYMid meet":"xMinYMin";for(null==t?(this._vbSize&&(h=1),delete this._vbSize,a="0 0 "+this.width+f+this.height):(this._vbSize=h,a=t+f+e+f+r+f+i),x(this.canvas,{viewBox:a,preserveAspectRatio:p});h&&c;)o="stroke-width"in c.attrs?c.attrs["stroke-width"]:1,c.attr({"stroke-width":o}),c._.dirty=1,c._.dirtyT=1,c=c.prev;return this._viewBox=[t,e,r,i,!!n],this},r.prototype.renderfix=function(){var t,e=this.canvas,r=e.style;try{t=e.getScreenCTM()||e.createSVGMatrix()}catch(i){t=e.createSVGMatrix()}var n=-t.e%1,a=-t.f%1;(n||a)&&(n&&(this._left=(this._left+n)%1,r.left=this._left+"px"),a&&(this._top=(this._top+a)%1,r.top=this._top+"px"))},r.prototype.clear=function(){r.eve("raphael.clear",this);for(var t=this.canvas;t.firstChild;)t.removeChild(t.firstChild);this.bottom=this.top=null,(this.desc=x("desc")).appendChild(r._g.doc.createTextNode("Created with Raphaël "+r.version)),t.appendChild(this.desc),t.appendChild(this.defs=x("defs"))},r.prototype.remove=function(){u("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null};var A=r.st;for(var E in T)T[t](E)&&!A[t](E)&&(A[E]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(E))}}(),function(){if(r.vml){var t="hasOwnProperty",e=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h="fill",u=/[, ]+/,c=r.eve,f=" progid:DXImageTransform.Microsoft",p=" ",d="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},x=/([clmz]),?([^clmz]*)/gi,v=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,m="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",b=21600,_={path:1,rect:1,image:1},w={circle:1,ellipse:1},k=function(t){var i=/[ahqstv]/gi,n=r._pathToAbsolute;if(e(t).match(i)&&(n=r._path2curve),i=/[clmz]/g,n==r._pathToAbsolute&&!e(t).match(i)){var s=e(t).replace(x,function(t,e,r){var i=[],n="m"==e.toLowerCase(),s=g[e];return r.replace(y,function(t){n&&2==i.length&&(s+=i+g["m"==e?"l":"L"],i=[]),i.push(a(t*b))}),s+i});return s}var o,l,h=n(t);s=[];for(var u=0,c=h.length;c>u;u++){o=h[u],l=h[u][0].toLowerCase(),"z"==l&&(l="x");for(var f=1,v=o.length;v>f;f++)l+=a(o[f]*b)+(f!=v-1?",":d);s.push(l)}return s.join(p)},B=function(t,e,i){var n=r.matrix();return n.rotate(-t,.5,.5),{dx:n.x(e,i),dy:n.y(e,i)}},C=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,f=c.style,d=1,g="",x=b/e,v=b/r;if(f.visibility="hidden",e&&r){if(c.coordsize=l(x)+p+l(v),f.rotation=a*(0>e*r?-1:1),a){var y=B(a,i,n);i=y.dx,n=y.dy}if(0>e&&(g+="x"),0>r&&(g+=" y")&&(d=-1),f.flip=g,c.coordorigin=i*-x+p+n*-v,u||s.fillsize){var m=c.getElementsByTagName(h);m=m&&m[0],c.removeChild(m),u&&(y=B(a,o.x(u[0],u[1]),o.y(u[0],u[1])),m.position=y.dx*d+p+y.dy*d),s.fillsize&&(m.size=s.fillsize[0]*l(e)+p+s.fillsize[1]*l(r)),c.appendChild(m)}f.visibility="visible"}};r.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var S=function(t,r,i){for(var n=e(r).toLowerCase().split("-"),a=i?"end":"start",s=n.length,o="classic",l="medium",h="medium";s--;)switch(n[s]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":o=n[s];break;case"wide":case"narrow":h=n[s];break;case"long":case"short":l=n[s]}var u=t.node.getElementsByTagName("stroke")[0];u[a+"arrow"]=o,u[a+"arrowlength"]=l,u[a+"arrowwidth"]=h},T=function(n,l){n.attrs=n.attrs||{};var c=n.node,f=n.attrs,g=c.style,x=_[n.type]&&(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),v=w[n.type]&&(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),y=n;for(var m in l)l[t](m)&&(f[m]=l[m]);if(x&&(f.path=r._getPath[n.type](n),n._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&n.blur(l.blur),(l.path&&"path"==n.type||x)&&(c.path=k(~e(f.path).toLowerCase().indexOf("r")?r._pathToAbsolute(f.path):f.path),n._.dirty=1,"image"==n.type&&(n._.fillpos=[f.x,f.y],n._.fillsize=[f.width,f.height],C(n,1,1,0,0,0))),"transform"in l&&n.transform(l.transform),v){var B=+f.cx,T=+f.cy,E=+f.rx||+f.r||0,N=+f.ry||+f.r||0;c.path=r.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((B-E)*b),a((T-N)*b),a((B+E)*b),a((T+N)*b),a(B*b)),n._.dirty=1}if("clip-rect"in l){var L=e(l["clip-rect"]).split(u);if(4==L.length){L[2]=+L[2]+ +L[0],L[3]=+L[3]+ +L[1];var z=c.clipRect||r._g.doc.createElement("div"),P=z.style;P.clip=r.format("rect({1}px {2}px {3}px {0}px)",L),c.clipRect||(P.position="absolute",P.top=0,P.left=0,P.width=n.paper.width+"px",P.height=n.paper.height+"px",c.parentNode.insertBefore(z,c),z.appendChild(c),c.clipRect=z)}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(n.textpath){var F=n.textpath.style;l.font&&(F.font=l.font),l["font-family"]&&(F.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),l["font-size"]&&(F.fontSize=l["font-size"]),l["font-weight"]&&(F.fontWeight=l["font-weight"]),l["font-style"]&&(F.fontStyle=l["font-style"])}if("arrow-start"in l&&S(y,l["arrow-start"]),"arrow-end"in l&&S(y,l["arrow-end"],1),null!=l.opacity||null!=l["stroke-width"]||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var R=c.getElementsByTagName(h),I=!1;if(R=R&&R[0],!R&&(I=R=M(h)),"image"==n.type&&l.src&&(R.src=l.src),l.fill&&(R.on=!0),(null==R.on||"none"==l.fill||null===l.fill)&&(R.on=!1),R.on&&l.fill){var j=e(l.fill).match(r._ISURL);if(j){R.parentNode==c&&c.removeChild(R),R.rotate=!0,R.src=j[1],R.type="tile";var q=n.getBBox(1);R.position=q.x+p+q.y,n._.fillpos=[q.x,q.y],r._preload(j[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else R.color=r.getRGB(l.fill).hex,R.src=d,R.type="solid",r.getRGB(l.fill).error&&(y.type in{circle:1,ellipse:1}||"r"!=e(l.fill).charAt())&&A(y,l.fill,R)&&(f.fill="none",f.gradient=l.fill,R.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var D=((+f["fill-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+r.getRGB(l.fill).o+1||2)-1);D=o(s(D,0),1),R.opacity=D,R.src&&(R.color="none")}c.appendChild(R);var V=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],O=!1;!V&&(O=V=M("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(V.on=!0),("none"==l.stroke||null===l.stroke||null==V.on||0==l.stroke||0==l["stroke-width"])&&(V.on=!1);var Y=r.getRGB(l.stroke);V.on&&l.stroke&&(V.color=Y.hex),D=((+f["stroke-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+Y.o+1||2)-1);var W=.75*(i(l["stroke-width"])||1);if(D=o(s(D,0),1),null==l["stroke-width"]&&(W=f["stroke-width"]),l["stroke-width"]&&(V.weight=W),W&&1>W&&(D*=W)&&(V.weight=1),V.opacity=D,l["stroke-linejoin"]&&(V.joinstyle=l["stroke-linejoin"]||"miter"),V.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(V.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),"stroke-dasharray"in l){var G={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};V.dashstyle=G[t](l["stroke-dasharray"])?G[l["stroke-dasharray"]]:d}O&&c.appendChild(V)}if("text"==y.type){y.paper.canvas.style.display=d;var H=y.paper.span,X=100,U=f.font&&f.font.match(/\d+(?:\.\d*)?(?=px)/);g=H.style,f.font&&(g.font=f.font),f["font-family"]&&(g.fontFamily=f["font-family"]),f["font-weight"]&&(g.fontWeight=f["font-weight"]),f["font-style"]&&(g.fontStyle=f["font-style"]),U=i(f["font-size"]||U&&U[0])||10,g.fontSize=U*X+"px",y.textpath.string&&(H.innerHTML=e(y.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=H.getBoundingClientRect();y.W=f.w=($.right-$.left)/X,y.H=f.h=($.bottom-$.top)/X,y.X=f.x,y.Y=f.y+y.H/2,("x"in l||"y"in l)&&(y.path.v=r.format("m{0},{1}l{2},{1}",a(f.x*b),a(f.y*b),a(f.x*b)+1));for(var Z=["x","y","text","font","font-family","font-weight","font-style","font-size"],Q=0,J=Z.length;J>Q;Q++)if(Z[Q]in l){y._.dirty=1;break}switch(f["text-anchor"]){case"start":y.textpath.style["v-text-align"]="left",y.bbx=y.W/2;break;case"end":y.textpath.style["v-text-align"]="right",y.bbx=-y.W/2;break;default:y.textpath.style["v-text-align"]="center",y.bbx=0}y.textpath.style["v-text-kern"]=!0}},A=function(t,a,s){t.attrs=t.attrs||{};var o=(t.attrs,Math.pow),l="linear",h=".5 .5";if(t.attrs.gradient=a,a=e(a).replace(r._radial_gradient,function(t,e,r){return l="radial",e&&r&&(e=i(e),r=i(r),o(e-.5,2)+o(r-.5,2)>.25&&(r=n.sqrt(.25-o(e-.5,2))*(2*(r>.5)-1)+.5),h=e+p+r),d}),a=a.split(/\s*\-\s*/),"linear"==l){var u=a.shift();if(u=-i(u),isNaN(u))return null}var c=r._parseDots(a);if(!c)return null;if(t=t.shape||t.node,c.length){t.removeChild(s),s.on=!0,s.method="none",s.color=c[0].color,s.color2=c[c.length-1].color;for(var f=[],g=0,x=c.length;x>g;g++)c[g].offset&&f.push(c[g].offset+p+c[g].color);s.colors=f.length?f.join():"0% "+s.color,"radial"==l?(s.type="gradientTitle",s.focus="100%",s.focussize="0 0",s.focusposition=h,s.angle=0):(s.type="gradient",s.angle=(270-u)%360),t.appendChild(s)}return 1},E=function(t,e){this[0]=this.node=t,t.raphael=!0,this.id=r._oid++,t.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=e,this.matrix=r.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!e.bottom&&(e.bottom=this),this.prev=e.top,e.top&&(e.top.next=this),e.top=this,this.next=null},N=r.el;E.prototype=N,N.constructor=E,N.transform=function(t){if(null==t)return this._.transform;var i,n=this.paper._viewBoxShift,a=n?"s"+[n.scale,n.scale]+"-1-1t"+[n.dx,n.dy]:d;n&&(i=t=e(t).replace(/\.{3}|\u2026/g,this._.transform||d)),r._extractTransform(this,a+t);var s,o=this.matrix.clone(),l=this.skew,h=this.node,u=~e(this.attrs.fill).indexOf("-"),c=!e(this.attrs.fill).indexOf("url(");if(o.translate(1,1),c||u||"image"==this.type)if(l.matrix="1 0 0 1",l.offset="0 0",s=o.split(),u&&s.noRotation||!s.isSimple){h.style.filter=o.toFilter();var f=this.getBBox(),g=this.getBBox(1),x=f.x-g.x,v=f.y-g.y;h.coordorigin=x*-b+p+v*-b,C(this,1,1,x,v,0)}else h.style.filter=d,C(this,s.scalex,s.scaley,s.dx,s.dy,s.rotate);else h.style.filter=d,l.matrix=e(o),l.offset=o.offset();return null!==i&&(this._.transform=i,r._extractTransform(this,i)),this},N.rotate=function(t,r,n){if(this.removed)return this;if(null!=t){if(t=e(t).split(u),t.length-1&&(r=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&&(r=n),null==r||null==n){var a=this.getBBox(1);r=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,r,n]])),this}},N.translate=function(t,r){return this.removed?this:(t=e(t).split(u),t.length-1&&(r=i(t[1])),t=i(t[0])||0,r=+r||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=r),this.transform(this._.transform.concat([["t",t,r]])),this)},N.scale=function(t,r,n,a){if(this.removed)return this;if(t=e(t).split(u),t.length-1&&(r=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&&(n=null),isNaN(a)&&(a=null)),t=i(t[0]),null==r&&(r=t),null==a&&(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([["s",t,r,n,a]])),this._.dirtyT=1,this},N.hide=function(){return!this.removed&&(this.node.style.display="none"),this},N.show=function(){return!this.removed&&(this.node.style.display=d),this},N.auxGetBBox=r.el.getBBox,N.getBBox=function(){var t=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var e={},r=1/this.paper._viewBoxShift.scale;return e.x=t.x-this.paper._viewBoxShift.dx,e.x*=r,e.y=t.y-this.paper._viewBoxShift.dy,e.y*=r,e.width=t.width*r,e.height=t.height*r,e.x2=e.x+e.width,e.y2=e.y+e.height,e}return t},N._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},N.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),r.eve.unbind("raphael.*.*."+this.id),r._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null;this.removed=!0}},N.attr=function(e,i){if(this.removed)return this;if(null==e){var n={};for(var a in this.attrs)this.attrs[t](a)&&(n[a]=this.attrs[a]);return n.gradient&&"none"==n.fill&&(n.fill=n.gradient)&&delete n.gradient,n.transform=this._.transform,n}if(null==i&&r.is(e,"string")){if(e==h&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var s=e.split(u),o={},l=0,f=s.length;f>l;l++)e=s[l],o[e]=e in this.attrs?this.attrs[e]:r.is(this.paper.customAttributes[e],"function")?this.paper.customAttributes[e].def:r._availableAttrs[e];return f-1?o:o[s[0]]}if(this.attrs&&null==i&&r.is(e,"array")){for(o={},l=0,f=e.length;f>l;l++)o[e[l]]=this.attr(e[l]);return o}var p;null!=i&&(p={},p[e]=i),null==i&&r.is(e,"object")&&(p=e);for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d]);if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[t](d)&&p[t](d)&&r.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));this.attrs[d]=p[d];for(var x in g)g[t](x)&&(p[x]=g[x])}p.text&&"text"==this.type&&(this.textpath.string=p.text),T(this,p)}return this},N.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&r._tofront(this,this.paper),this},N.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),r._toback(this,this.paper)),this)},N.insertAfter=function(t){return this.removed?this:(t.constructor==r.st.constructor&&(t=t[t.length-1]),t.node.nextSibling?t.node.parentNode.insertBefore(this.node,t.node.nextSibling):t.node.parentNode.appendChild(this.node),r._insertafter(this,t,this.paper),this)},N.insertBefore=function(t){return this.removed?this:(t.constructor==r.st.constructor&&(t=t[0]),t.node.parentNode.insertBefore(this.node,t.node),r._insertbefore(this,t,this.paper),this)},N.blur=function(t){var e=this.node.runtimeStyle,i=e.filter;return i=i.replace(v,d),0!==+t?(this.attrs.blur=t,e.filter=i+p+f+".Blur(pixelradius="+(+t||1.5)+")",e.margin=r.format("-{0}px 0 0 -{0}px",a(+t||1.5))):(e.filter=i,e.margin=0,delete this.attrs.blur),this},r._engine.path=function(t,e){var r=M("shape");r.style.cssText=m,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;var i=new E(r,e),n={fill:"none",stroke:"#000"};t&&(n.path=t),i.type="path",i.path=[],i.Path=d,T(i,n),e.canvas.appendChild(r);var a=M("skew");return a.on=!0,r.appendChild(a),i.skew=a,i.transform(d),i},r._engine.rect=function(t,e,i,n,a,s){var o=r._rectPath(e,i,n,a,s),l=t.path(o),h=l.attrs;return l.X=h.x=e,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type="rect",l},r._engine.ellipse=function(t,e,r,i,n){{var a=t.path();a.attrs}return a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type="ellipse",T(a,{cx:e,cy:r,rx:i,ry:n}),a},r._engine.circle=function(t,e,r,i){{var n=t.path();n.attrs}return n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type="circle",T(n,{cx:e,cy:r,r:i}),n},r._engine.image=function(t,e,i,n,a,s){var o=r._rectPath(i,n,a,s),l=t.path(o).attr({stroke:"none"}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0];return u.src=e,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=e,f.type="tile",l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),C(l,1,1,0,0,0),l},r._engine.text=function(t,i,n,s){var o=M("shape"),l=M("path"),h=M("textpath");i=i||0,n=n||0,s=s||"",l.v=r.format("m{0},{1}l{2},{1}",a(i*b),a(n*b),a(i*b)+1),l.textpathok=!0,h.string=e(s),h.on=!0,o.style.cssText=m,o.coordsize=b+p+b,o.coordorigin="0 0";var u=new E(o,t),c={fill:"#000",stroke:"none",font:r._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type="text",u.attrs.text=e(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,T(u,c),o.appendChild(h),o.appendChild(l),t.canvas.appendChild(o);var f=M("skew");return f.on=!0,o.appendChild(f),u.skew=f,u.transform(d),u},r._engine.setSize=function(t,e){var i=this.canvas.style;return this.width=t,this.height=e,t==+t&&(t+="px"),e==+e&&(e+="px"),i.width=t,i.height=e,i.clip="rect(0 "+t+" "+e+" 0)",this._viewBox&&r._engine.setViewBox.apply(this,this._viewBox),this},r._engine.setViewBox=function(t,e,i,n,a){r.eve("raphael.setViewBox",this,this._viewBox,[t,e,i,n,a]);var s,o,l=this.getSize(),h=l.width,u=l.height;return a&&(s=u/n,o=h/i,h>i*s&&(t-=(h-i*s)/2/s),u>n*o&&(e-=(u-n*o)/2/o)),this._viewBox=[t,e,i,n,!!a],this._viewBoxShift={dx:-t,dy:-e,scale:l},this.forEach(function(t){t.transform("...")}),this};var M;r._engine.initWin=function(t){var e=t.document;e.styleSheets.length<31?e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):e.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),M=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(r){M=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},r._engine.initWin(r._g.win),r._engine.create=function(){var t=r._getContainer.apply(0,arguments),e=t.container,i=t.height,n=t.width,a=t.x,s=t.y;if(!e)throw new Error("VML container not found.");var o=new r._Paper,l=o.canvas=r._g.doc.createElement("div"),h=l.style;return a=a||0,s=s||0,n=n||512,i=i||342,o.width=n,o.height=i,n==+n&&(n+="px"),i==+i&&(i+="px"),o.coordsize=1e3*b+p+1e3*b,o.coordorigin="0 0",o.span=r._g.doc.createElement("span"),o.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",l.appendChild(o.span),h.cssText=r.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",n,i),1==e?(r._g.doc.body.appendChild(l),h.left=a+"px",h.top=s+"px",h.position="absolute"):e.firstChild?e.insertBefore(l,e.firstChild):e.appendChild(l),o.renderfix=function(){},o},r.prototype.clear=function(){r.eve("raphael.clear",this),this.canvas.innerHTML=d,this.span=r._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},r.prototype.remove=function(){r.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null;return!0};var L=r.st;for(var z in N)N[t](z)&&!L[t](z)&&(L[z]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(z))}}(),T.was?S.win.Raphael=r:Raphael=r,"object"==typeof exports&&(module.exports=r),r});
/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/rusal/rsl_production_process_en_cap.js?1441982575478";s:6:"source";s:39:"/rusal/rsl_production_process_en_cap.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var _rsl_prod_caption = {
	'Добыча бокситов' : 'Bauxite mining',
	'Декомпозиция' : 'Precipitation',
	'Выщелачивание' : 'Digestion',
	'Дробление' : 'Crushing',
	'Литейные сплавы' : 'Foundry alloys',
	'Прокат' : 'Rolling',
	'Экструзия' : 'Extrusion',
	'Электролиз' : 'Electrolytic reduction',
	'Литейное производство' : 'Casting',
	'Переработка' : 'Recycling'
};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:48:"/rusal/rsl_production_process.js?144198257953050";s:6:"source";s:32:"/rusal/rsl_production_process.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var red_path, grey_path;
var _horizontal_length;

function rslProdGetText(t){
	if(_rsl_prod_caption !== "undefined" && _rsl_prod_caption[t]){
		return _rsl_prod_caption[t];
	} else {
		return t;
	}
}

$(function(){
if(!_rsl_prod_caption){
	var _rsl_prod_caption = {};
}
var _prevWWidth = $(window).width();
var _prevWHeight = $(window).height();

var xScale = 1;
var yScale = 1;


$(window).resize(function(){
	__global.remove();
	__global.clear();

	_horizontal_length = Math.ceil($('#content').width() - 20);
	$('#content').height((_vertical_length * 13 + _image_step * 6 + 300) + "px");

	reinitVars();

	//paper.setViewBox(0, 0, parseInt($('#content').width()), parseInt($('#content').height()), true);
	initLines();
 });

_horizontal_length = Math.ceil($('#content').width() - 20);
var _vertical_length = 90;
var _image_step = 330;
var _circle_radius = 55;

$('#content').height((_vertical_length * 13 + _image_step * 6 + 300) + "px");

//var paper = Raphael(0, 0, '1280px', "4000px");
var paper = Raphael("content");

function reinitVars(){
	_move_to_x = _horizontal_length/2;
	_move_to_y = _vertical_length;

	_extra_path_part = "m 0 "+_image_step+" v" + (_vertical_length) + "h -" + (_horizontal_length-4) + "v" + (_vertical_length) + "m 0 "+_image_step+" v" + (_vertical_length) + "h " + (_horizontal_length-4);
	_extra_path_part_connect = "v" + (_vertical_length+1);
	_extra_back_line_arrow = 'v -' + ((_vertical_length) * 2 + _image_step/2);

	_shadow_params = {width : 10, fill : true, opacity : 0.1};

	_extra_array = [_extra_path_part, _extra_path_part_connect, _extra_path_part, _extra_path_part_connect, _extra_path_part, _extra_back_line_arrow];
	_extra_array_shadow = [_extra_path_part, _extra_path_part_connect, _extra_path_part, _extra_path_part_connect, _extra_path_part];

}

//paper.setViewBox(0, 0, parseInt($('#content').width()), parseInt($('#content').height()), true);
//paper.canvas.setAttribute('preserveAspectRatio', 'none');

var _move_to_x;
var _move_to_y;

var _extra_path_part;
var _extra_path_part_connect;
var _extra_back_line_arrow;

var _shadow_params;

var _extra_array;
var _extra_array_shadow;

reinitVars();

var path_part1, path_part2;

var start_shape_set, circle_start, arrow_start;

var dobicha_set, dobicha_circle, dobicha_circle_shadow, dobicha_icon, dobicha_icon_support, dobicha_text;


var manufacture_set, manufacture_shadow_set, manufacture1_circle, manufacture2_circle_shadow, manufacture1_icon, manufacture2_icon, manufacture3_icon;
var manufacture_1_text,manufacture_2_text,manufacture_3_text;
var complete_production_set,complete_production_shadow_set, complete_production_icon_1, complete_production_icon_2, complete_production_icon_3;
var electroliz_set, electroliz_icon, electroliz_shadow;
var razliv_set, razliv_shadow, razliv_icon;
var refurb_set, refurb_shadow, refurb_icon;

var __global = paper.set();

var standartHoverIn = function(){
	this.attr('cursor', 'pointer');

	if(this.data('attached_icon_id')) {
		this.attr({fill: "38-#f00-#E22727"});
		paper.getById(this.data('attached_icon_id')).attr({fill: '#fff', stroke: '#fff'}).data('hovered', 1);

	}



};

var standartHoverOut = function(evt){
	var _bbox = this.getBBox();
	var _center_x = _bbox.x + _bbox.width/2
	var _center_y = _bbox.y + _bbox.height/2

	var _distance_from_circle_center = Math.sqrt(Math.pow(_center_x - evt.layerX, 2) + Math.pow(_center_y - evt.layerY, 2));

	if(_distance_from_circle_center > this.attr('r')) {
		this.attr('cursor', null);


		rslToggleHoverStyle(this);
	}
};

function rslToggleHoverStyle(elem){
	if (elem.data('attached_icon_id')) {
		if(!elem.data('selected')) {
			elem.attr({fill: '38-#fff-#efefef'});
			if (elem.data('is_on_path') == '1') {
				paper.getById(elem.data('attached_icon_id')).attr({
					fill: '#FF0000',
					stroke: '#FF0000'
				}).data('hovered', 0);
			} else {
				paper.getById(elem.data('attached_icon_id')).attr({
					fill: '#6D757F',
					stroke: '#6D757F'
				}).data('hovered', 0);
			}
		}
	}
}

var standartClick = function(){
	if(this.data('mOnCick')){
		if(!this.data('selected')) {
			$(document).trigger(this.data('mOnCick'));

			if(this.data('attached_icon_id')){
				if(this.data('attached_icon_id').indexOf('manufacture') >= 0){
					for(var i = 0; i < 3; i++) {
						if (manufacture_set[i].data('selected')) {
							manufacture_set[i].data('selected', 0);
							rslToggleHoverStyle(manufacture_set[i]);
						}
					}
				}
				else if(this.data('attached_icon_id').indexOf('complete_production') >= 0){
					for(var i = 0; i < 3; i++) {
						if (complete_production_set[i].data('selected')) {
							complete_production_set[i].data('selected', 0);
							rslToggleHoverStyle(complete_production_set[i]);
						}
					}
				}
			}

			this.data('selected', 1);
			//console.log(this.data('mOnCick'));
		}
	}
};

function checkPathIntersection(p1, p2){
	var p2_bbox = p2.getBBox();

	var p1_length = p1.getTotalLength();
	var p1_x = p1.getPointAtLength(p1_length).x + _move_to_x;
	var p1_y = p1.getPointAtLength(p1_length).y + _move_to_y;

	if(Raphael.isPointInsideBBox(p2_bbox, p1_x, p1_y)){
		return true;
	}

	return false;
}



function getVirtualPathLengthToAnotherPathCenter(p1, p2, start_from){
	var _length = 0;
	var p2_bbox = p2.getBBox();
	var p1_length = p1.getTotalLength();

	for(var i = start_from; i < p1_length; i++){
		var p1_x = p1.getPointAtLength(i).x + _move_to_x;
		var p1_y = p1.getPointAtLength(i).y + _move_to_y;

		if(Raphael.isPointInsideBBox(p2_bbox, p1_x, p1_y)){
			_length = i;
			break;
		}
	}

	return _length;
}

function initPathLengths(){
	//dobicha_circle.data('path_length', getVirtualPathLengthToAnotherPathCenter(path_part1, dobicha_circle, 0));
	dobicha_circle.data('path_length', _vertical_length + (_horizontal_length/4) - 55);

	//manufacture_set[2].data('path_length', getVirtualPathLengthToAnotherPathCenter(path_part1, manufacture_set[2], dobicha_circle.data('path_length')));
	manufacture_set[2].data('path_length', dobicha_circle.data('path_length') + 55 + _horizontal_length/4 +_vertical_length*2 +(_move_to_x - _horizontal_length/3) - 55);
	//manufacture_set[1].data('path_length', getVirtualPathLengthToAnotherPathCenter(path_part1, manufacture_set[1], manufacture_set[2].data('path_length')));
	manufacture_set[1].data('path_length', manufacture_set[2].data('path_length') + _horizontal_length/3);
	//manufacture_set[0].data('path_length', getVirtualPathLengthToAnotherPathCenter(path_part1, manufacture_set[0], manufacture_set[1].data('path_length')));
	manufacture_set[0].data('path_length', manufacture_set[1].data('path_length') + _horizontal_length/3);


	//electroliz_set[0].data('path_length', getVirtualPathLengthToAnotherPathCenter(path_part1, electroliz_set[0], manufacture_set[0].data('path_length')));
	electroliz_set[0].data('path_length', manufacture_set[0].data('path_length') + _horizontal_length/3 - 55 + _vertical_length*2 + _horizontal_length/2 - 55);

	//razliv_set[0].data('path_length', getVirtualPathLengthToAnotherPathCenter(path_part1, razliv_set[0], electroliz_set[0].data('path_length')));
	razliv_set[0].data('path_length', electroliz_set[0].data('path_length') + _horizontal_length/2 + 2*_vertical_length + _horizontal_length/2 - 44);

	//complete_production_set[0].data('path_length', getVirtualPathLengthToAnotherPathCenter(path_part1, complete_production_set[0], razliv_set[0].data('path_length')));
	complete_production_set[0].data('path_length', razliv_set[0].data('path_length') + 55 + _horizontal_length/2 + _vertical_length*2 + (_move_to_x - _horizontal_length/3) - 55);
	//complete_production_set[1].data('path_length', getVirtualPathLengthToAnotherPathCenter(path_part1, complete_production_set[1], complete_production_set[0].data('path_length')));
	complete_production_set[1].data('path_length', complete_production_set[0].data('path_length') + _horizontal_length / 3);
	//complete_production_set[2].data('path_length', getVirtualPathLengthToAnotherPathCenter(path_part1, complete_production_set[2], complete_production_set[1].data('path_length')));
	complete_production_set[2].data('path_length', complete_production_set[1].data('path_length') + _horizontal_length / 3);

	//refurb_set[0].data('path_length', getVirtualPathLengthToAnotherPathCenter(path_part1, refurb_set[0], complete_production_set[2].data('path_length')));
	refurb_set[0].data('path_length', complete_production_set[2].data('path_length') + _horizontal_length/3 - 55 + _vertical_length*2 + _horizontal_length/2 - 110);
}

function initLines() {
	if(path_part1){
		path_part1.remove();
	}
	if(path_part2){
		path_part2.remove();
	}

	if(start_shape_set){
		start_shape_set.remove();
		start_shape_set.clear();
	}

	if(dobicha_set){
		dobicha_set.remove();
		dobicha_set.clear();
	}

	path_part1 = paper.path("M0 0v" + (_vertical_length) + "h" + (_horizontal_length / 2) + "v" + _vertical_length + _extra_array_shadow.join(' '));
	path_part1.attr({stroke: "#696969", 'stroke-linecap': 'round', 'stroke-width': 8, 'stroke-linejoin': 'round'});

	path_part2 = paper.path("M0 1v" + (_vertical_length) + "h" + (_horizontal_length / 2) + "v" + (_vertical_length) + _extra_array.join(' ') + "l-13 11m13 -11l13 11");
	path_part2.node.id = 'fff-1';
	path_part2.attr({stroke: "#C2C1C2", 'stroke-linecap': 'round', 'stroke-width': 8, 'stroke-linejoin': 'round'});








	start_shape_set = paper.set();

	circle_start = paper.circle(0, 0, 25).attr({fill: "38-#f00-#da0000", stroke : null}).toFront();
	arrow_start = paper.path("M-10 -2l10 11l10 -11").attr({stroke : "#fff", 'stroke-width' : 1}).toFront();

	start_shape_set.push(circle_start, arrow_start);




	dobicha_set = paper.set();
	//dobicha_circle_shadow = paper.circle(9, 11, 55).attr({fill: "black", stroke : null}).glow({width: 20, opacity: 0.04});

	dobicha_circle = paper.circle(0, 0, 55).attr({fill: "38-#fff-#efefef", stroke : null}).toFront();
	dobicha_circle_shadow = dobicha_circle.glow(_shadow_params).toFront();
	//dobicha_circle.hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.dobicha_click');
	dobicha_icon = paper.path('M45.639,10.201H41.57V9.963v-2.56v-1.5h-1.5h-2.785v-0.86v-1.5h-1.5h-2.938V2.878v-1.5h-1.5h-1.429V0h-1.5  H17.509h-1.5v1.5v0.764h-2.041h-1.5v1.5v0.763H7.07h-1.5v1.5v3.937v0.238H1.5H0v1.5v4.397v1.5h1.5h1.273l0.239,0.88  c0.006,0.023,0.012,0.045,0.019,0.068l3.928,14.335l0.93,3.394L8,36.091c0.005,0.107-0.005,0.216,0.006,0.324H1.5H0v1.5v3.09v1.5  h1.5h44.139h1.5v-1.5v-3.09v-1.5h-1.5h-6.505c0.012-0.133,0.003-0.266,0.007-0.399l0.127,0.208l0.878-3.434l3.885-15.191h1.608h1.5  v-1.5v-4.397v-1.5H45.639z M7.07,6.026h6.898V3.764h3.541V1.5h10.908v1.378h2.929v2.165h4.438v2.36h4.285v2.56h-33V6.026z   M45.639,37.915v3.09H1.5v-3.09h8.476c-1.275-2.463-0.101-6.263,3.524-6.263s4.8,3.8,3.524,6.263h13.09  c-1.274-2.463-0.101-6.263,3.524-6.263s4.799,3.8,3.524,6.263H45.639z M45.639,16.099h-2.774l-4.172,16.319  c-0.162-0.265-0.344-0.515-0.545-0.748c-1.1-1.28-2.701-1.985-4.509-1.985S30.23,30.39,29.13,31.67  c-0.955,1.11-1.48,2.582-1.48,4.142h-8.159c0-1.56-0.526-3.031-1.482-4.142c-1.1-1.28-2.701-1.985-4.509-1.985  c-1.807,0-3.408,0.705-4.509,1.985c-0.218,0.254-0.413,0.526-0.585,0.815L4.468,18.116c0.018,0.001,0.302,0.002,0.806,0.002  c5.069,0,32.295-0.1,31.944-2.02H1.5v-4.397h44.139V16.099z');
	dobicha_icon.attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', 't'+(_move_to_x+ (_horizontal_length/4) - 24)+',' + (_move_to_y+_vertical_length-25)).toFront();
	dobicha_icon.id = 'dobicha_icon';
	dobicha_circle.data('attached_icon_id', 'dobicha_icon');
	//dobicha_icon.hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.dobicha_click');
	//dobicha_set.push(dobicha_circle_shadow, dobicha_circle, dobicha_icon);

	dobicha_text = paper.text(0, 85, rslProdGetText("Добыча бокситов")).attr({fill : '#323232', 'font-size' : '13px'});

	dobicha_set.push(dobicha_circle, dobicha_text);


	manufacture_1_text = paper.text(0, 85, rslProdGetText("Декомпозиция")).attr({fill : '#323232', 'font-size' : '13px'});
	manufacture_2_text = paper.text(0 + _horizontal_length/3, 85, rslProdGetText("Выщелачивание")).attr({fill : '#323232', 'font-size' : '13px'});
	manufacture_3_text = paper.text(0 + 2*_horizontal_length/3, 85, rslProdGetText("Дробление")).attr({fill : '#323232', 'font-size' : '13px'});

	manufacture_shadow_set = paper.set();
	manufacture_set = paper.set();

	manufacture_set.push(
		//dobicha_icon_support,
		paper.circle(0, 0, 55).attr({fill: "38-#fff-#efefef", stroke : null}).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.manufacture1_click').toFront(),
		paper.circle(0 + _horizontal_length/3, 0, 55).attr({fill: "38-#fff-#efefef", stroke : null}).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.manufacture2_click').toFront(),
		paper.circle(0 + 2*(_horizontal_length/3), 0, 55).attr({fill: "38-#fff-#efefef", stroke : null}).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.manufacture3_click').toFront(),
		manufacture_1_text,
		manufacture_2_text,
		manufacture_3_text
	);

	manufacture_shadow_set.push(
		manufacture_set[0].glow(_shadow_params),
		manufacture_set[1].glow(_shadow_params),
		manufacture_set[2].glow(_shadow_params)
	)

	manufacture1_icon = paper.path('m326.112,421.385h-34h-1.5v1.5v34v0.871l0.756,0.432l11.494,6.568v10.254v1.5h1.5h9.5h1.5v-1.5   v-10.254l11.494-6.568l0.756-0.432v-0.871v-34v-1.5H326.112z M326.112,456.885l-12.25,7v11.125h-9.5v-11.125l-12.25-7v-34h34   V456.885z M308.165,445.424c0.501,0.002,1.002,0.003,1.503,0.003s1.003-0.001,1.504-0.002   c0.384-0.001,0.577-0.199,0.58-0.583c0.005-0.494,0.001-0.988,0.002-1.481c0-0.502,0.003-1.003-0.002-1.504   c-0.003-0.387-0.195-0.584-0.577-0.586c-0.501-0.001-1.002-0.002-1.503-0.002s-1.003,0.001-1.504,0.002   c-0.371,0.001-0.567,0.2-0.569,0.572c-0.004,1.002-0.004,2.005,0,3.007C307.599,445.223,307.795,445.423,308.165,445.424z    M309.096,442.769c0.192,0,0.384,0,0.576,0c0.194,0,0.389,0,0.583,0c0,0.06,0,0.119,0,0.179l-0.001,0.413v0.531   c0,0.012,0,0.023,0.001,0.035l-0.587,0.001c-0.191,0-0.381,0-0.572,0C309.095,443.54,309.095,443.154,309.096,442.769z M297.893,442.445c1.764,2.366,4.023,3.953,6.717,4.718c0.21,0.06,0.42,0.113,0.628,0.163   c-0.281,1.476-0.666,3.021-1.168,4.694c-0.052,0.172-0.107,0.344-0.162,0.516c-0.115,0.362-0.235,0.737-0.335,1.132   c-0.198,0.786-0.098,1.442,0.299,1.952c0.211,0.272,0.7,0.728,1.592,0.728c0.174,0,0.356-0.017,0.556-0.051   c1.022-0.174,1.948-0.566,2.751-1.165c2.542-1.895,4.185-4.365,4.886-7.346c1.591,0.306,3.222,0.717,4.958,1.249   c0.126,0.039,0.251,0.079,0.377,0.12c0.33,0.106,0.671,0.216,1.04,0.305c0.251,0.06,0.477,0.089,0.693,0.089   c0.603,0,1.133-0.235,1.494-0.662c0.399-0.473,0.537-1.098,0.408-1.859c-0.175-1.035-0.568-1.969-1.169-2.776   c-1.891-2.537-4.361-4.181-7.346-4.89c0.254-1.339,0.615-2.801,1.11-4.503c0.064-0.216,0.134-0.434,0.203-0.653   c0.12-0.376,0.245-0.765,0.349-1.174c0.201-0.782,0.102-1.439-0.295-1.952c-0.212-0.273-0.701-0.731-1.596-0.731   c-0.175,0-0.357,0.017-0.558,0.052c-1.065,0.185-2.04,0.612-2.896,1.272c-2.465,1.899-4.059,4.335-4.739,7.24   c-1.465-0.28-3.002-0.663-4.666-1.161c-0.184-0.055-0.366-0.113-0.547-0.17c-0.359-0.114-0.73-0.232-1.122-0.332   c-0.267-0.068-0.509-0.102-0.739-0.102c-0.599,0-1.126,0.234-1.486,0.66c-0.4,0.475-0.537,1.109-0.405,1.886   C296.902,440.715,297.294,441.641,297.893,442.445z M298.618,438.646c0.104,0,0.226,0.019,0.369,0.055   c0.543,0.138,1.072,0.325,1.609,0.485c1.883,0.564,3.788,1.038,5.729,1.361c0.177,0.028,0.355,0.047,0.55,0.073   c0.08-0.406,0.153-0.8,0.237-1.191c0.593-2.717,2.044-4.884,4.233-6.571c0.662-0.51,1.41-0.839,2.236-0.982   c0.113-0.02,0.214-0.03,0.303-0.03c0.445,0,0.582,0.252,0.438,0.811c-0.153,0.599-0.364,1.184-0.539,1.779   c-0.563,1.931-1.053,3.878-1.353,5.87c-0.011,0.073-0.015,0.148-0.023,0.245c0.35,0.066,0.693,0.125,1.034,0.195   c2.834,0.594,5.091,2.086,6.815,4.399c0.471,0.632,0.762,1.35,0.893,2.13c0.088,0.521-0.038,0.771-0.423,0.771   c-0.097,0-0.211-0.016-0.341-0.047c-0.449-0.108-0.887-0.265-1.329-0.4c-1.987-0.609-4.001-1.111-6.053-1.457   c-0.168-0.028-0.339-0.042-0.528-0.066c-0.081,0.411-0.153,0.813-0.242,1.211c-0.613,2.763-2.101,4.957-4.357,6.64   c-0.626,0.466-1.336,0.758-2.108,0.89c-0.113,0.02-0.214,0.029-0.303,0.029c-0.444,0-0.579-0.25-0.437-0.81   c0.136-0.535,0.32-1.058,0.479-1.586c0.567-1.891,1.043-3.804,1.366-5.752c0.029-0.176,0.048-0.354,0.071-0.531   c-0.661-0.152-1.302-0.27-1.925-0.447c-2.458-0.698-4.406-2.135-5.924-4.171c-0.466-0.625-0.758-1.336-0.89-2.109   C298.115,438.901,298.234,438.646,298.618,438.646z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-291,-421t" + (_move_to_x + (_horizontal_length/3) - 18) + "," + (_move_to_y - 25 + _vertical_length*3+_image_step)).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.manufacture1_click').attr({fill: '#6D757F', stroke: '#6D757F'}).toFront();
	/*manufacture1_icon = paper.set();
	manufacture1_icon.push(
		paper.path('M326.112,421.385h-34h-1.5v1.5v34v0.871l0.756,0.432l11.494,6.568v10.254v1.5h1.5h9.5h1.5v-1.5v-10.254   l11.494-6.568l0.756-0.432v-0.871v-34v-1.5H326.112z M326.112,456.885l-12.25,7v11.125h-9.5v-11.125l-12.25-7v-34h34V456.885z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-291,-421t" + (_move_to_x + (_horizontal_length/3) - 18) + "," + (_move_to_y - 25 + _vertical_length*3+_image_step)).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.manufacture1_click').attr({fill: '#6D757F', stroke: '#6D757F'}).toFront(),
		paper.path('M308.165,445.424c0.501,0.002,1.002,0.003,1.503,0.003s1.003-0.001,1.504-0.002   c0.384-0.001,0.577-0.199,0.58-0.583c0.005-0.494,0.001-0.988,0.002-1.481c0-0.501,0.003-1.003-0.002-1.504   c-0.003-0.387-0.195-0.584-0.577-0.586c-0.501-0.001-1.002-0.002-1.503-0.002s-1.003,0.001-1.504,0.002   c-0.371,0.001-0.567,0.2-0.569,0.572c-0.004,1.002-0.004,2.005,0,3.007C307.599,445.223,307.795,445.423,308.165,445.424z    M309.096,442.769c0.192,0,0.384,0,0.576,0c0.194,0,0.389,0,0.583,0c0,0.06,0,0.119,0,0.179v0.413v0.531c0,0.012,0,0.022,0,0.035   l-0.587,0.001c-0.191,0-0.381,0-0.572,0C309.095,443.54,309.095,443.154,309.096,442.769z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-291,-421t" + (_move_to_x + (_horizontal_length/3) - 18) + "," + (_move_to_y - 25 + _vertical_length*3+_image_step)).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.manufacture1_click').attr({fill: '#6D757F', stroke: '#6D757F'}).toFront(),
		paper.path('M297.893,442.445c1.764,2.366,4.023,3.953,6.717,4.718c0.21,0.061,0.42,0.113,0.628,0.163   c-0.281,1.478-0.666,3.021-1.167,4.694c-0.052,0.172-0.107,0.344-0.162,0.516c-0.115,0.362-0.235,0.737-0.335,1.133   c-0.198,0.785-0.098,1.441,0.299,1.951c0.211,0.272,0.7,0.729,1.592,0.729c0.174,0,0.356-0.018,0.556-0.051   c1.022-0.175,1.948-0.566,2.751-1.165c2.542-1.896,4.185-4.365,4.886-7.347c1.591,0.307,3.222,0.718,4.958,1.249   c0.126,0.039,0.251,0.079,0.377,0.12c0.33,0.106,0.671,0.216,1.04,0.305c0.251,0.061,0.477,0.09,0.693,0.09   c0.603,0,1.133-0.235,1.494-0.662c0.399-0.474,0.537-1.099,0.408-1.859c-0.175-1.035-0.568-1.969-1.169-2.776   c-1.891-2.536-4.361-4.181-7.346-4.89c0.254-1.339,0.615-2.801,1.11-4.503c0.064-0.216,0.134-0.435,0.203-0.653   c0.12-0.376,0.245-0.765,0.349-1.174c0.201-0.782,0.102-1.438-0.295-1.952c-0.212-0.272-0.701-0.73-1.596-0.73   c-0.175,0-0.357,0.017-0.558,0.052c-1.065,0.185-2.04,0.612-2.896,1.271c-2.465,1.898-4.059,4.334-4.739,7.239   c-1.465-0.279-3.002-0.663-4.666-1.161c-0.184-0.055-0.366-0.112-0.547-0.17c-0.359-0.113-0.73-0.231-1.123-0.332   c-0.267-0.067-0.509-0.102-0.739-0.102c-0.599,0-1.126,0.234-1.486,0.66c-0.4,0.475-0.537,1.108-0.405,1.886   C296.902,440.715,297.294,441.641,297.893,442.445z M298.618,438.646c0.104,0,0.226,0.019,0.369,0.055   c0.543,0.139,1.072,0.325,1.609,0.485c1.883,0.563,3.788,1.038,5.729,1.361c0.177,0.027,0.354,0.047,0.55,0.072   c0.08-0.405,0.153-0.8,0.237-1.19c0.593-2.717,2.044-4.884,4.233-6.571c0.662-0.51,1.41-0.839,2.236-0.982   c0.113-0.02,0.214-0.029,0.303-0.029c0.445,0,0.582,0.252,0.438,0.812c-0.153,0.6-0.364,1.185-0.539,1.779   c-0.563,1.931-1.053,3.878-1.353,5.87c-0.011,0.073-0.015,0.147-0.023,0.245c0.35,0.065,0.693,0.125,1.034,0.194   c2.834,0.595,5.091,2.086,6.814,4.399c0.471,0.632,0.762,1.35,0.894,2.13c0.088,0.521-0.038,0.771-0.423,0.771   c-0.097,0-0.21-0.017-0.341-0.048c-0.449-0.107-0.887-0.265-1.329-0.399c-1.987-0.609-4.001-1.111-6.053-1.457   c-0.168-0.028-0.339-0.042-0.528-0.066c-0.081,0.411-0.153,0.813-0.242,1.211c-0.613,2.764-2.101,4.957-4.357,6.641   c-0.626,0.466-1.336,0.758-2.108,0.89c-0.113,0.021-0.214,0.029-0.303,0.029c-0.444,0-0.579-0.25-0.437-0.811   c0.136-0.534,0.32-1.058,0.479-1.586c0.567-1.891,1.043-3.804,1.366-5.752c0.029-0.176,0.048-0.354,0.071-0.531   c-0.661-0.151-1.302-0.27-1.925-0.446c-2.458-0.698-4.406-2.135-5.924-4.171c-0.466-0.625-0.758-1.336-0.89-2.109   C298.115,438.901,298.234,438.646,298.618,438.646z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-291,-421t" + (_move_to_x + (_horizontal_length/3) - 18) + "," + (_move_to_y - 25 + _vertical_length*3+_image_step)).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.manufacture1_click').attr({fill: '#6D757F', stroke: '#6D757F'}).toFront()
	);*/
	manufacture2_icon = paper.path('M421.159,421.563h-43.5h-1.5v1.5v43.5v1.5h1.5h43.5h1.5v-1.5v-43.5v-1.5H421.159z M421.159,466.563   h-43.5v-43.5h43.5V466.563z M399.409,457.313c6.893,0,12.5-5.607,12.5-12.5c0-6.893-5.607-12.5-12.5-12.5   c-6.892,0-12.5,5.607-12.5,12.5C386.909,451.706,392.516,457.313,399.409,457.313z M399.409,433.813c6.075,0,11,4.925,11,11   c0,6.075-4.925,11-11,11s-11-4.925-11-11C388.409,438.738,393.333,433.813,399.409,433.813z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-388,-421t" + (_move_to_x - 12) + "," + (_move_to_y - 25 + _vertical_length*3+_image_step)).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.manufacture2_click').attr({fill: '#6D757F', stroke: '#6D757F'}).toFront();
	manufacture3_icon = paper.path('M520.458,445.995c-0.78-4.249-2.661-8.152-5.751-11.932   c-1.173-1.434-2.386-2.59-3.704-3.529l-0.463,0.622c-0.586,0.79-1.191,1.607-1.832,2.392c-0.278,0.338-0.94,0.573-1.313,0.459   c-0.425-0.132-0.777-0.738-0.786-1.151c-0.026-1.194-0.382-2.347-1.085-3.521c-0.616-1.03-1.222-1.874-1.85-2.579   c-2.569-2.888-5.846-5.269-10.623-7.718c-0.813-0.416-1.649-0.787-2.536-1.18c-0.273-0.121-0.54-0.239-0.81-0.36   c-0.002,0.224-0.003,0.406,0.006,0.588c0.146,2.506-0.364,4.764-1.518,6.71c-1.169,1.973-2.495,4.21-4.192,6.084   c-2.482,2.741-5.16,5.382-7.75,7.937l-0.521,0.514c-0.445,0.44-0.892,0.879-1.336,1.32c-2.605,2.585-3.788,5.476-3.515,8.591   c0.431,4.947,3.033,8.992,7.734,12.022c0.025,0.016,0.052,0.031,0.082,0.045l-0.001-0.038c-0.01-0.428-0.02-0.819,0.025-1.212   c0.075-0.701-0.142-1.166-0.798-1.717c-3.327-2.798-4.92-6.172-4.734-10.028c0.136-2.8,0.916-4.808,2.457-6.318   c0.358-0.351,0.719-0.528,1.072-0.528c0.294,0,0.83,0.13,1.124,1c0.536,1.588,1.66,2.625,3.189,3.642   c-0.5-1.769-0.582-3.573-0.259-5.645c0.478-3.068,2.297-5.226,4.013-6.932c3.16-3.143,5.295-6.793,6.345-10.852   c0.175-0.676,0.489-1.451,1.374-1.451c0.294,0,0.639,0.087,1.083,0.273c3.63,1.514,6.641,4.061,9.204,7.786   c0.939,1.367,1.43,2.768,1.456,4.163c0.027,1.454-0.029,2.943-0.079,4.258l-0.003,0.093c-0.047,1.227,0.139,2.344,0.565,3.412   c0.138-0.148,0.274-0.295,0.411-0.44l0.11-0.119c0.666-0.711,1.294-1.382,1.891-2.091c0.994-1.18,1.954-2.403,2.856-3.636   c0.261-0.359,0.677-0.837,1.267-0.837c0.365,0,0.725,0.174,1.13,0.548c2.288,2.107,4.049,4.644,5.232,7.54   c2.872,7.023,0.842,14.405-5.173,18.807c-0.744,0.542-0.974,1.169-0.735,2.02c1.772-0.875,3.873-2.624,5.269-4.396   C520.147,454.595,521.283,450.47,520.458,445.995z M505.784,459.104c-0.001-1.074-0.001-2.148,0.002-3.224   c0.002-0.651-0.219-1.082-0.719-1.397c-2.966-1.867-5.928-3.743-8.877-5.632c-0.266-0.169-0.504-0.252-0.73-0.252   c-0.228,0-0.47,0.084-0.74,0.257c-2.628,1.69-5.448,3.482-8.876,5.638c-0.49,0.31-0.71,0.714-0.71,1.312l-0.001,10.101   c-0.001,0.587,0.217,0.973,0.727,1.291c3.409,2.131,6.207,3.909,8.807,5.596c0.609,0.396,0.981,0.394,1.6-0.004   c2.822-1.822,5.703-3.651,8.808-5.594c0.503-0.314,0.716-0.701,0.713-1.295c-0.007-1.184-0.006-2.368-0.004-3.551L505.784,459.104z    M504.001,464.572c0.012,0.876-0.317,1.494-1.035,1.945c-2.14,1.343-4.276,2.694-6.403,4.059c-0.365,0.234-0.724,0.349-1.096,0.349   c-0.383,0-0.759-0.121-1.148-0.372c-2.104-1.347-4.215-2.688-6.33-4.017c-0.759-0.477-1.096-1.095-1.06-1.946   c0.036-0.854,0.028-1.73,0.022-2.578c-0.005-0.414-0.008-0.785-0.008-1.155c-0.001-0.354-0.005-0.711-0.009-1.067   c-0.012-0.94-0.024-1.914,0.038-2.883c0.032-0.522,0.346-1.262,0.864-1.608c2.223-1.489,4.478-2.922,6.702-4.259   c0.46-0.277,1.416-0.259,1.892,0.026c1.627,0.979,3.276,2.035,4.731,2.967l1.838,1.171c0.684,0.434,1.012,1.047,1.001,1.874   C503.963,459.629,503.963,462.15,504.001,464.572z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-485,-421t" + (_move_to_x  - (_horizontal_length/3) - 10) + "," + (_move_to_y - 25 + _vertical_length*3+_image_step)).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.manufacture3_click').attr({fill: '#6D757F', stroke: '#6D757F'}).toFront();

	manufacture1_icon.id = 'manufacture1_icon';
	manufacture1_icon.data('mOnCick', 'morRusal.manufacture3_click').data('selected', 1);
	manufacture2_icon.id = 'manufacture2_icon';
	manufacture2_icon.data('mOnCick', 'morRusal.manufacture2_click');
	manufacture3_icon.id = 'manufacture3_icon';
	manufacture3_icon.data('mOnCick', 'morRusal.manufacture1_click');

	manufacture_set[0].data('attached_icon_id', 'manufacture3_icon');
	manufacture_set[1].data('attached_icon_id', 'manufacture2_icon');
	manufacture_set[2].data('attached_icon_id', 'manufacture1_icon').data('selected', 1);

	standartHoverIn.call(manufacture_set[2]);


	complete_production_set = paper.set();
	complete_production_shadow_set = paper.set();

	complete_production_set.push(
		//dobicha_icon_support,
		paper.circle(0, 0, 55).attr({fill: "38-#fff-#efefef", stroke : null}).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.completeprod1_click').toFront(),
		paper.circle(0 + _horizontal_length/3, 0, 55).attr({fill: "38-#fff-#efefef", stroke : null}).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.completeprod2_click').toFront(),
		paper.circle(0 + 2*(_horizontal_length/3), 0, 55).attr({fill: "38-#fff-#efefef", stroke : null}).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.completeprod3_click').toFront(),
		paper.text(0, 85, rslProdGetText("Литейные сплавы")).attr({fill : '#323232', 'font-size' : '13px'}),
		paper.text(0 + _horizontal_length/3, 85, rslProdGetText("Прокат")).attr({fill : '#323232', 'font-size' : '13px'}),
		paper.text(0 + 2*(_horizontal_length/3), 85, rslProdGetText("Экструзия")).attr({fill : '#323232', 'font-size' : '13px'})
	);

	complete_production_shadow_set.push(
		complete_production_set[0].glow(_shadow_params),
		complete_production_set[1].glow(_shadow_params),
		complete_production_set[2].glow(_shadow_params)
	);

	complete_production_icon_1 = paper.path('M779.321,428.157l-8.801,9.63l-0.667-0.119c-0.45-0.08-0.907-0.12-1.359-0.12  c-7.411,0-12.813,10.625-15.273,16.63c-2.476-6.001-7.899-16.628-15.261-16.63h-0.002c-0.451,0-0.908,0.041-1.358,0.12l-0.668,0.119  l-8.801-9.63l-2.607-2.853v3.865v13.841v1.959l1.892-0.512c0.99-0.268,1.881-0.398,2.722-0.398c1.524,0,2.608,0.442,3.656,0.869  c0.933,0.38,1.896,0.773,3.023,0.773c1.249,0,2.441-0.475,3.747-1.486c1.699,1.574,2.528,9.997,1.79,19.069h-11.312h-1.5v1.5v4.789  v1.5h1.5h46.367h1.5v-1.5v-4.789v-1.5h-1.5h-11.31c-0.738-9.073,0.091-17.496,1.79-19.069c1.306,1.012,2.498,1.486,3.748,1.486  c1.126,0,2.091-0.393,3.023-0.773c1.048-0.427,2.132-0.868,3.656-0.868c0.841,0,1.73,0.13,2.721,0.398l1.892,0.512v-1.959v-13.841  v-3.865L779.321,428.157z M729.136,442.56c-0.895,0-1.917,0.126-3.113,0.45v-13.841l8.16,8.929l-0.077,0.014l1.587,1.974  l2.575,3.205c-0.94,0.65-1.727,0.911-2.452,0.911C733.903,444.201,732.356,442.56,729.136,442.56z M776.409,469.572h-46.367v-4.789  h11.188l-0.021,0.252h1.63h10.386h10.387h1.629l-0.021-0.252h11.188V469.572z M763.592,463.284h-20.733  c0.152-2.055,1.08-16.323-2.128-19.977l0.143-0.112l-1.094-1.197l-2.63-2.878c0.271-0.036,0.542-0.072,0.809-0.072  c8.96,0.002,15.263,19.405,15.268,19.416c0.004-0.011,6.307-19.416,15.268-19.416c0.267,0,0.537,0.036,0.808,0.072l-2.63,2.878  l-1.094,1.197l0.143,0.112C762.512,446.96,763.44,461.229,763.592,463.284z M780.428,443.01c-1.196-0.324-2.219-0.45-3.112-0.45  c-3.22,0-4.768,1.641-6.68,1.641c-0.726,0-1.513-0.261-2.453-0.911l2.576-3.204l1.587-1.974l-0.078-0.014l8.16-8.929V443.01z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-735,-421t" + (_move_to_x - (_horizontal_length/3) - 18) + "," + (_move_to_y - 25 + _vertical_length*9+_image_step*4)).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.completeprod1_click').toFront();
	complete_production_icon_2 = paper.path('M878.198,450.844c-0.396-4.171-2.398-8.342-6.247-10.489  l-18.817-10.475c-0.783-0.197-1.694-0.207-2.484-0.16c-3.488,0.202-6.758,1.935-9.203,4.572c-0.727,0.785-1.396,1.665-1.961,2.574  l-9.89-5.785c-0.023,0.039-9.538,13.579-2.241,24.476l0.233,0.234l18.023,12.107c1.213,0.814,2.361,1.602,3.537,2.465  c1.288,1.05,3.082,1.811,4.754,2.266c7.366,2.015,15.533-1.814,20.028-7.592C877.15,460.903,878.653,455.619,878.198,450.844z   M839.898,462.009l-2.36-1.582l-5.152-3.457l-2.212-1.483l-1.723-1.157c-1.043-1.595-1.748-3.384-2.102-5.251l-0.248-2.068  c-0.107-1.928,0.117-3.814,0.522-5.571l0.43-1.627c0.861-2.863,2.099-5.233,2.905-6.606l3.829,2.229l1.41,0.822l5.233,3.046  l1.409,0.819l4.765,2.776c-0.782,1.493-1.962,4.028-2.78,7.103l-0.39,1.652c-0.41,1.982-0.632,4.13-0.503,6.335l0.219,2.037  c0.274,1.759,0.79,3.489,1.738,5.333L839.898,462.009z M872.545,464.165c-4.101,5.195-11.494,8.732-18.165,6.92  c-3.736-1.011-6.566-3.611-8.17-6.994c-4.76-9.992,2.651-21.641,2.674-21.675c-0.622-0.414-1.237-0.773-1.885-1.15l-6.032-3.532  c0.537-0.87,1.191-1.699,1.907-2.431c2.461-2.506,6.235-4.548,9.658-3.901l13.513,7.509c-2.041,0.029-4.163,0.54-6.213,1.546  c-1.709,0.838-3.325,1.976-4.643,3.33c-4.51,4.636-5.941,13.838,0.287,17.801c4.035,2.569,9.535,1.352,12.195-2.62  c1.742-2.594,2.343-7-0.75-8.967l-9.202-6.306c0.885-0.695,1.835-1.303,2.847-1.801c3.243-1.592,7.125-1.93,10.34-0.263  c3.518,1.836,5.295,5.635,5.648,9.369C876.977,455.431,875.567,460.344,872.545,464.165z M861.36,452.5  c0.911-0.822,1.864-1.582,3.188-1.573c0.796,0.007,1.454,0.313,1.957,0.821c1.644,1.663,0.916,4.662-0.212,6.344  c-2.16,3.226-6.631,4.237-9.918,2.144c-4.243-2.698-4.076-8.629-1.995-12.574L861.36,452.5z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-834,-421t" + (_move_to_x  - 18) + "," + (_move_to_y - 25 + _vertical_length*9+_image_step*4)).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.completeprod2_click').toFront();
	complete_production_icon_3 = paper.path('M938.185,429.815c-8.066,0-16.703,1.548-16.703,4.889v33.408c0,3.34,8.637,4.889,16.703,4.889  s16.705-1.549,16.705-4.889v-33.408C954.89,431.363,946.251,429.815,938.185,429.815z M938.185,431.444  c9.778,0,15.074,2.119,15.074,3.259c0,1.141-5.296,3.259-15.074,3.259c-9.777,0-15.074-2.119-15.074-3.259  C923.111,433.563,928.408,431.444,938.185,431.444z M953.259,436.965v28.884c-2.877-1.782-9.125-2.627-15.074-2.627  c-5.95,0-12.198,0.846-15.074,2.628v-28.886c2.876,1.783,9.124,2.628,15.074,2.628C944.134,439.592,950.382,438.747,953.259,436.965  z M938.185,471.371c-9.777,0-15.074-2.12-15.074-3.259c0-1.141,5.297-3.26,15.074-3.26c9.778,0,15.074,2.12,15.074,3.26  C953.259,469.251,947.963,471.371,938.185,471.371z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-899,-421t" + (_move_to_x + (_horizontal_length/3) - 40) + "," + (_move_to_y - 30 + _vertical_length*9+_image_step*4)).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.completeprod2_click').toFront();



	complete_production_icon_1.id = 'complete_production_icon_1';
	complete_production_icon_1.data('mOnCick', 'morRusal.completeprod1_click').data('selected', 1);
	complete_production_icon_2.id = 'complete_production_icon_2';
	complete_production_icon_2.data('mOnCick', 'morRusal.completeprod2_click');
	complete_production_icon_3.id = 'complete_production_icon_3';
	complete_production_icon_3.data('mOnCick', 'morRusal.completeprod3_click');

	complete_production_set[0].data('attached_icon_id', 'complete_production_icon_1').data('selected', 1);
	complete_production_set[1].data('attached_icon_id', 'complete_production_icon_2');
	complete_production_set[2].data('attached_icon_id', 'complete_production_icon_3');

	standartHoverIn.call(complete_production_set[0]);

	electroliz_set = paper.set();
	electroliz_set.push(
		//paper.circle(0, 0, 55).attr({fill: "38-#fff-#efefef", stroke : null}).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.electroliz_click').toFront(),
		paper.circle(0, 0, 55).attr({fill: "38-#fff-#efefef", stroke : null}).toFront(),
		paper.text(0, 85, rslProdGetText("Электролиз")).attr({fill : '#323232', 'font-size' : '13px'})
	);

	electroliz_shadow = electroliz_set[0].glow(_shadow_params);

	//electroliz_icon = paper.path('M585.776,436.617l9.722-14.996h-19.811l-7.897,16.318h4.974l-6.46,14.937h4.708l-5.877,20.337  l20.29-21.922l-4.568,0.065l8.643-14.74H585.776z M581.946,452.842l-13.614,14.709l4.674-16.174h-4.419l6.46-14.937h-4.864  l6.446-13.318h16.109l-9.722,14.996h3.864l-8.665,14.778L581.946,452.842z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-550,-421t" + (_move_to_x   - 28) + "," + (_move_to_y - 25 + _vertical_length*5+_image_step*2)).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.electroliz_click').toFront();
	electroliz_icon = paper.path('M585.776,436.617l9.722-14.996h-19.811l-7.897,16.318h4.974l-6.46,14.937h4.708l-5.877,20.337  l20.29-21.922l-4.568,0.065l8.643-14.74H585.776z M581.946,452.842l-13.614,14.709l4.674-16.174h-4.419l6.46-14.937h-4.864  l6.446-13.318h16.109l-9.722,14.996h3.864l-8.665,14.778L581.946,452.842z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-550,-421t" + (_move_to_x   - 28) + "," + (_move_to_y - 25 + _vertical_length*5+_image_step*2)).toFront();
	electroliz_icon.id = 'electroliz_icon';




	electroliz_set[0].data('attached_icon_id', 'electroliz_icon');

	razliv_set = paper.set();
	razliv_set.push(
		//paper.circle(0, 0, 55).attr({fill: "38-#fff-#efefef", stroke : null}).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.razlive_click').toFront(),
		paper.circle(0, 0, 55).attr({fill: "38-#fff-#efefef", stroke : null}).data('mOnCick', 'morRusal.razlive_click').toFront(),
		paper.text(0, 85, rslProdGetText("Литейное производство")).attr({fill : '#323232', 'font-size' : '13px'})
	);

	razliv_shadow = razliv_set[0].glow(_shadow_params);

	//razliv_icon = paper.path('M672.313,451.641l-3.937-8.728l2.876-3.746l0.31-0.404v-0.509v-3.168v-1.5h-1.5h-6.558h-1.5v1.5   v7.47c0,3.127-3.886,5.807-7.067,5.807c-3.182,0-7.067-2.68-7.067-5.807v-7.47v-1.5h-1.5h-6.558h-1.5v1.5v3.168v0.509l0.311,0.404   l2.876,3.746l-3.937,8.728l-0.133,0.294v0.323v9.504v0.449l0.247,0.375l5.491,8.345l0.444,0.675h0.809h21.033h0.809l0.444-0.675   l5.491-8.345l0.247-0.375v-0.449v-9.504v-0.323L672.313,451.641z M670.946,461.762l-5.491,8.345h-21.033l-5.491-8.345v-9.504   l4.306-9.546l-3.423-4.458v-3.168h6.558v7.47c0,4.029,4.539,7.307,8.567,7.307s8.567-3.278,8.567-7.307v-7.47h6.558v3.168   l-3.423,4.458l4.306,9.546V461.762z M647.631,431.224h1.5v-1.5v-2.622v-1.5h-1.5h-6.575h-1.5v1.5v2.622v1.5h1.5H647.631z    M641.056,427.102h6.575v2.622h-6.575V427.102z M668.819,431.224h1.5v-1.5v-2.622v-1.5h-1.5h-6.574h-1.5v1.5v2.622v1.5h1.5H668.819z    M662.245,427.102h6.574v2.622h-6.574V427.102z M654.938,442.318c0.913,0,1.655-0.742,1.655-1.655s-0.742-1.655-1.655-1.655   c-0.912,0-1.655,0.742-1.655,1.655S654.026,442.318,654.938,442.318z M654.938,440.509c0.084,0,0.155,0.071,0.155,0.155   c0,0.084-0.071,0.155-0.155,0.155s-0.155-0.071-0.155-0.155C654.783,440.58,654.854,440.509,654.938,440.509z M654.938,446.316c3.117,0,5.652-2.536,5.652-5.653v-17.557v-1.5h-1.5h-8.305h-1.5v1.5v17.557   C649.286,443.781,651.821,446.316,654.938,446.316z M650.786,423.107h8.305v17.557c0,2.293-1.859,4.153-4.152,4.153   c-2.293,0-4.152-1.859-4.152-4.153V423.107z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-637,-421t" + (_move_to_x   - 18) + "," + (_move_to_y - 25 + _vertical_length*7+_image_step*3)).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.razliv_click').toFront();
	razliv_icon = paper.path('M672.313,451.641l-3.937-8.728l2.876-3.746l0.31-0.404v-0.509v-3.168v-1.5h-1.5h-6.558h-1.5v1.5   v7.47c0,3.127-3.886,5.807-7.067,5.807c-3.182,0-7.067-2.68-7.067-5.807v-7.47v-1.5h-1.5h-6.558h-1.5v1.5v3.168v0.509l0.311,0.404   l2.876,3.746l-3.937,8.728l-0.133,0.294v0.323v9.504v0.449l0.247,0.375l5.491,8.345l0.444,0.675h0.809h21.033h0.809l0.444-0.675   l5.491-8.345l0.247-0.375v-0.449v-9.504v-0.323L672.313,451.641z M670.946,461.762l-5.491,8.345h-21.033l-5.491-8.345v-9.504   l4.306-9.546l-3.423-4.458v-3.168h6.558v7.47c0,4.029,4.539,7.307,8.567,7.307s8.567-3.278,8.567-7.307v-7.47h6.558v3.168   l-3.423,4.458l4.306,9.546V461.762z M647.631,431.224h1.5v-1.5v-2.622v-1.5h-1.5h-6.575h-1.5v1.5v2.622v1.5h1.5H647.631z    M641.056,427.102h6.575v2.622h-6.575V427.102z M668.819,431.224h1.5v-1.5v-2.622v-1.5h-1.5h-6.574h-1.5v1.5v2.622v1.5h1.5H668.819z    M662.245,427.102h6.574v2.622h-6.574V427.102z M654.938,442.318c0.913,0,1.655-0.742,1.655-1.655s-0.742-1.655-1.655-1.655   c-0.912,0-1.655,0.742-1.655,1.655S654.026,442.318,654.938,442.318z M654.938,440.509c0.084,0,0.155,0.071,0.155,0.155   c0,0.084-0.071,0.155-0.155,0.155s-0.155-0.071-0.155-0.155C654.783,440.58,654.854,440.509,654.938,440.509z M654.938,446.316c3.117,0,5.652-2.536,5.652-5.653v-17.557v-1.5h-1.5h-8.305h-1.5v1.5v17.557   C649.286,443.781,651.821,446.316,654.938,446.316z M650.786,423.107h8.305v17.557c0,2.293-1.859,4.153-4.152,4.153   c-2.293,0-4.152-1.859-4.152-4.153V423.107z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-637,-421t" + (_move_to_x   - 18) + "," + (_move_to_y - 25 + _vertical_length*7+_image_step*3)).toFront();
	razliv_icon.id = 'razliv_icon';

	razliv_set[0].data('attached_icon_id', 'razliv_icon');

	refurb_set = paper.set();
	refurb_set.push(
		//paper.circle(0, 0, 55).attr({fill: "38-#fff-#efefef", stroke : null}).hover(standartHoverIn, standartHoverOut).click(standartClick).data('mOnCick', 'morRusal.refurb_click').toFront(),
		paper.circle(0, 0, 55).attr({fill: "38-#fff-#efefef", stroke : null}).toFront(),
		paper.text(0, 85, rslProdGetText("Переработка")).attr({fill : '#323232', 'font-size' : '13px'})
	);

	refurb_shadow = refurb_set[0].glow(_shadow_params);

	//refurb_icon = paper.path('M1047.015,454.713c0-1.196-0.738-3.044-2.222-5.556c-1.11-1.768-2.225-3.522-3.329-5.25l-11.18,6.42   l5.804,10.062l-4.754-0.06l0.247-5.065l-9.57,11.485l9.757,11.545l-0.061-5.249l1.975,0.125c1.728,0.12,3.542-0.904,5.431-3.09   c1.396-1.563,2.883-3.782,4.445-6.666c0.95-1.89,1.894-3.768,2.839-5.616h-0.061   C1046.788,456.602,1047.015,455.577,1047.015,454.713z M1039.172,467.674c-1.97,2.924-3.804,4.341-5.49,4.261l-3.15-0.12v3.204   l-6.973-8.27l6.667-8.027l-0.126,2.778c0.943,0,2.37,0,4.26,0c1.894,0.045,3.315,0.065,4.261,0.065c2.1,0,3.621-0.19,4.571-0.557   C1041.87,463.228,1040.535,465.454,1039.172,467.674z M1038.805,460.39h-1.295l-5.558-9.631l9.079-5.25   c0.945,1.527,1.889,3.024,2.833,4.512c1.315,2.26,1.979,3.848,1.979,4.752C1045.843,458.522,1043.499,460.39,1038.805,460.39z M1010.899,456.25l4.261,2.658l-5.185-14.011l-14.811,2.712l4.562,2.593   c-1.15,1.773-1.729,3.295-1.729,4.571c0,1.848,0.97,4.546,2.903,8.088c0.12,0.202,1.688,2.753,4.692,7.652v-0.061   c1.648,2.055,4.095,3.089,7.345,3.089c0.743,0,1.914-0.064,3.518-0.19c1.606-0.12,2.823-0.181,3.646-0.181v-12.84h-11.604   L1010.899,456.25z M1001.274,460.39c-1.402-2.592-2.1-4.446-2.1-5.556c0-0.905,0.226-1.789,0.678-2.652   c0.04-0.08,0.558-0.884,1.542-2.412l-2.773-1.602l10.615-1.914l3.582,9.816l-2.286-1.481c-1.11,1.813-2.226,3.621-3.33,5.431   c-1.689,2.842-2.618,4.877-2.784,6.112C1003.354,464.238,1002.298,462.324,1001.274,460.39z M1018.927,461.5v10.495h-8.893   c-1.064,0-2.085-0.563-3.054-1.697c-0.965-1.131-1.446-2.252-1.446-3.366c0-1.192,0.758-3.005,2.28-5.431H1018.927z M1035.224,445.329l4.938-14.137l-4.446,2.713c-0.944-1.728-1.788-2.918-2.532-3.577   c-1.064-0.904-2.447-1.336-4.13-1.296v-0.125h-14.137c-2.14,0-4.078,1.401-5.807,4.195c-1.196,2.311-2.387,4.612-3.576,6.918   l11.172,6.546l5.802-10.128l2.287,4.14l-4.322,2.281L1035.224,445.329z M1016.275,444.897l-9.139-5.31l4.445-7.717   c0.698-1.19,1.748-1.794,3.144-1.794h10.806c-0.824,0.583-1.501,1.321-2.034,2.226L1016.275,444.897z M1023.187,435.201   c1.069-1.848,1.828-3.024,2.281-3.516c0.993-0.984,2.265-1.482,3.828-1.482c1.485,0,2.742,0.578,3.768,1.728   c0.291,0.332,1.029,1.522,2.221,3.582l2.656-1.607l-3.521,10.127l-10.308-1.729l2.349-1.236L1023.187,435.201z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-1012,-421t" + (_move_to_x   - 12) + "," + (_move_to_y - 30 + _vertical_length*11+_image_step*5)).hover(standartHoverIn, standartHoverOut).click(standartClick).toFront();
	refurb_icon = paper.path('M1047.015,454.713c0-1.196-0.738-3.044-2.222-5.556c-1.11-1.768-2.225-3.522-3.329-5.25l-11.18,6.42   l5.804,10.062l-4.754-0.06l0.247-5.065l-9.57,11.485l9.757,11.545l-0.061-5.249l1.975,0.125c1.728,0.12,3.542-0.904,5.431-3.09   c1.396-1.563,2.883-3.782,4.445-6.666c0.95-1.89,1.894-3.768,2.839-5.616h-0.061   C1046.788,456.602,1047.015,455.577,1047.015,454.713z M1039.172,467.674c-1.97,2.924-3.804,4.341-5.49,4.261l-3.15-0.12v3.204   l-6.973-8.27l6.667-8.027l-0.126,2.778c0.943,0,2.37,0,4.26,0c1.894,0.045,3.315,0.065,4.261,0.065c2.1,0,3.621-0.19,4.571-0.557   C1041.87,463.228,1040.535,465.454,1039.172,467.674z M1038.805,460.39h-1.295l-5.558-9.631l9.079-5.25   c0.945,1.527,1.889,3.024,2.833,4.512c1.315,2.26,1.979,3.848,1.979,4.752C1045.843,458.522,1043.499,460.39,1038.805,460.39z M1010.899,456.25l4.261,2.658l-5.185-14.011l-14.811,2.712l4.562,2.593   c-1.15,1.773-1.729,3.295-1.729,4.571c0,1.848,0.97,4.546,2.903,8.088c0.12,0.202,1.688,2.753,4.692,7.652v-0.061   c1.648,2.055,4.095,3.089,7.345,3.089c0.743,0,1.914-0.064,3.518-0.19c1.606-0.12,2.823-0.181,3.646-0.181v-12.84h-11.604   L1010.899,456.25z M1001.274,460.39c-1.402-2.592-2.1-4.446-2.1-5.556c0-0.905,0.226-1.789,0.678-2.652   c0.04-0.08,0.558-0.884,1.542-2.412l-2.773-1.602l10.615-1.914l3.582,9.816l-2.286-1.481c-1.11,1.813-2.226,3.621-3.33,5.431   c-1.689,2.842-2.618,4.877-2.784,6.112C1003.354,464.238,1002.298,462.324,1001.274,460.39z M1018.927,461.5v10.495h-8.893   c-1.064,0-2.085-0.563-3.054-1.697c-0.965-1.131-1.446-2.252-1.446-3.366c0-1.192,0.758-3.005,2.28-5.431H1018.927z M1035.224,445.329l4.938-14.137l-4.446,2.713c-0.944-1.728-1.788-2.918-2.532-3.577   c-1.064-0.904-2.447-1.336-4.13-1.296v-0.125h-14.137c-2.14,0-4.078,1.401-5.807,4.195c-1.196,2.311-2.387,4.612-3.576,6.918   l11.172,6.546l5.802-10.128l2.287,4.14l-4.322,2.281L1035.224,445.329z M1016.275,444.897l-9.139-5.31l4.445-7.717   c0.698-1.19,1.748-1.794,3.144-1.794h10.806c-0.824,0.583-1.501,1.321-2.034,2.226L1016.275,444.897z M1023.187,435.201   c1.069-1.848,1.828-3.024,2.281-3.516c0.993-0.984,2.265-1.482,3.828-1.482c1.485,0,2.742,0.578,3.768,1.728   c0.291,0.332,1.029,1.522,2.221,3.582l2.656-1.607l-3.521,10.127l-10.308-1.729l2.349-1.236L1023.187,435.201z').attr({fill : '#6D757F', stroke : '#6D757F'}).attr('transform', "T-1012,-421t" + (_move_to_x   - 12) + "," + (_move_to_y - 30 + _vertical_length*11+_image_step*5)).toFront();
	refurb_icon.id = 'refurb_icon';

	refurb_set[0].data('attached_icon_id', 'refurb_icon');

	__global.push(
		path_part1, path_part2, circle_start, arrow_start,
		dobicha_circle, dobicha_circle_shadow, dobicha_icon, dobicha_text,
		manufacture_1_text, manufacture_2_text, manufacture_3_text, manufacture_set[0], manufacture_set[1], manufacture_set[2], manufacture_shadow_set[0], manufacture_shadow_set[1], manufacture_shadow_set[2], manufacture1_icon, manufacture2_icon, manufacture3_icon,
		complete_production_set[0], complete_production_set[1], complete_production_set[2], complete_production_set[3], complete_production_set[4], complete_production_set[5],complete_production_shadow_set[0], complete_production_shadow_set[1], complete_production_shadow_set[2], complete_production_icon_1, complete_production_icon_2, complete_production_icon_3,
		electroliz_set[0], electroliz_set[1], electroliz_shadow, electroliz_icon,
		razliv_set[0], razliv_set[1], razliv_shadow, razliv_icon,
		refurb_set[0], refurb_set[1], refurb_shadow, refurb_icon
	);

	//M10 11V72H500V140M500 280

	path_part1.attr('transform', "t" + _move_to_x + "," + _move_to_y);
	path_part2.attr('transform', "t" + _move_to_x + "," + _move_to_y);
	start_shape_set.attr('transform', "t" + _move_to_x + "," + _move_to_y).toFront();
	dobicha_circle_shadow.attr("transform", "t" + (_move_to_x + (_horizontal_length/4)) + "," + (_move_to_y + _vertical_length)).toFront();
	dobicha_set.attr("transform", "t" + (_move_to_x + (_horizontal_length/4)) + "," + (_move_to_y + _vertical_length)).toFront();
	manufacture_shadow_set.attr('transform', "t" + (_move_to_x - _horizontal_length/3) + "," + (_move_to_y + _vertical_length*3+_image_step)).toFront();
	manufacture_set.attr('transform', "t" + (_move_to_x - _horizontal_length/3) + "," + (_move_to_y + _vertical_length*3+_image_step)).toFront();
	electroliz_shadow.attr('transform', "t" + (_move_to_x) + "," + (_move_to_y + _vertical_length*5+_image_step*2)).toFront();
	electroliz_set.attr('transform', "t" + (_move_to_x) + "," + (_move_to_y + _vertical_length*5+_image_step*2)).toFront();
	razliv_shadow.attr('transform', "t" + (_move_to_x) + "," + (_move_to_y + _vertical_length*7+_image_step*3)).toFront();
	razliv_set.attr('transform', "t" + (_move_to_x) + "," + (_move_to_y + _vertical_length*7+_image_step*3)).toFront();
	refurb_shadow.attr('transform', "t" + (_move_to_x) + "," + (_move_to_y + _vertical_length*11+_image_step*5)).toFront();
	refurb_set.attr('transform', "t" + (_move_to_x) + "," + (_move_to_y + _vertical_length*11+_image_step*5)).toFront();

	complete_production_shadow_set.attr('transform', "t" + (_move_to_x - _horizontal_length/3) + "," + (_move_to_y + _vertical_length*9+_image_step*4)).toFront();
	complete_production_set.attr('transform', "t" + (_move_to_x - _horizontal_length/3) + "," + (_move_to_y + _vertical_length*9+_image_step*4)).toFront();
	//dobicha_icon.transform("t" + (_move_to_x + (_horizontal_length/4)) + "," + (_move_to_y + _vertical_length)).toFront();
	//path_part3.translate(_move_to_x, _move_to_y);

	initPathLengths();

	drawLines();
}

initLines();


$(window).scroll(function() {
	drawLines();
});

function drawLines(){
	$.each($("#fff-1"), function(i, val){
		var line = val;
		drawLine($(this), line);
	});
}

function drawLine(container, line){
	var _bbox = line.getBBox();
	var percDone = $(window).scrollTop()/ (_bbox.height + $(container).offset().top);

	if(percDone <= 0.01){
		percDone = 0.01;
	}
	else if(percDone > 0.80 || ($(document).height() - $(window).scrollTop() < 300)){
		percDone = 1;
	}


	var totalPathLength = path_part2.getTotalLength();


	if(percDone >= 1){
		percDone = 1;
	}

	var hightlightPoints = {
		start : percDone,
		end : totalPathLength * percDone
	};

	if(hightlightPoints.end != totalPathLength) {
		if(grey_path){
			grey_path.remove();
		}
		grey_path = paper.path(path_part2.getSubpath(hightlightPoints.end, totalPathLength)).attr({
			'stroke-width': '8',
			'stroke': '#C2C1C2',
			'stroke-linecap': 'round',
			'stroke-linejoin': 'round'/*,
			 'arrow-end': "open-classic-medium-medium"*/
		}).attr('transform', "t"+_move_to_x+","+ _move_to_y).scale(xScale, yScale);
	}

	if(red_path){
		red_path.remove();
	}

	red_path = paper.path(path_part2.getSubpath(0, hightlightPoints.end)).attr({
		'stroke-width': '8',
		'stroke': '#FF0000',
		'stroke-linecap': 'round',
		'stroke-linejoin': 'round'
	}).attr('transform', "t"+_move_to_x+","+ _move_to_y);

	__global.push(grey_path, red_path);

	var _red_path_length = red_path.getTotalLength();

	if(_red_path_length >= dobicha_circle.data('path_length')){
		dobicha_circle.data('is_on_path', '1');
		dobicha_icon.attr({fill : '#FF0000', stroke : '#FF0000'});
	} else {
		dobicha_circle.data('is_on_path', '0');
		dobicha_icon.attr({fill : '#6D757F', stroke : '#6D757F'});
	}

	if(_red_path_length >= manufacture_set[2].data('path_length')){
		manufacture_set[2].data('is_on_path', '1');
		if(!manufacture1_icon.data('hovered')) {
			manufacture1_icon.attr({fill: '#FF0000', stroke: '#FF0000'});
		}
	} else {
		manufacture_set[2].data('is_on_path', '0');
		if(!manufacture1_icon.data('hovered')) {
			manufacture1_icon.attr({fill: '#6D757F', stroke: '#6D757F'});
		}
	}

	if(_red_path_length >= manufacture_set[1].data('path_length')){
		manufacture_set[1].data('is_on_path', '1');
		if(!manufacture2_icon.data('hovered')) {
			manufacture2_icon.attr({fill: '#FF0000', stroke: '#FF0000'});
		}
	} else {
		manufacture_set[1].data('is_on_path', '0');
		if(!manufacture2_icon.data('hovered')) {
			manufacture2_icon.attr({fill: '#6D757F', stroke: '#6D757F'});
		}
	}

	if(_red_path_length >= manufacture_set[0].data('path_length')){
		manufacture_set[0].data('is_on_path', '1');
		if(!manufacture3_icon.data('hovered')) {
			manufacture3_icon.attr({fill: '#FF0000', stroke: '#FF0000'});
		}
	} else {
		manufacture_set[0].data('is_on_path', '0');
		if(!manufacture3_icon.data('hovered')) {
			manufacture3_icon.attr({fill: '#6D757F', stroke: '#6D757F'});
		}
	}

	if(_red_path_length >= electroliz_set[0].data('path_length')){
		electroliz_set[0].data('is_on_path', '1');
		electroliz_icon.attr({fill : '#FF0000', stroke : '#FF0000'});
	} else {
		electroliz_set[0].data('is_on_path', '0');
		electroliz_icon.attr({fill : '#6D757F', stroke : '#6D757F'});
	}

	if(_red_path_length >= razliv_set[0].data('path_length')){
		razliv_set[0].data('is_on_path', '1');
		razliv_icon.attr({fill : '#FF0000', stroke : '#FF0000'});
	} else {
		razliv_set[0].data('is_on_path', '0');
		razliv_icon.attr({fill : '#6D757F', stroke : '#6D757F'});
	}

	if(_red_path_length >= refurb_set[0].data('path_length')){
		refurb_set[0].data('is_on_path', '1');
		refurb_icon.attr({fill : '#FF0000', stroke : '#FF0000'});
	} else {
		refurb_set[0].data('is_on_path', '0');
		refurb_icon.attr({fill : '#6D757F', stroke : '#6D757F'});
	}

	if(_red_path_length >= complete_production_set[2].data('path_length')){
		complete_production_set[2].data('is_on_path', '1');
		if(!complete_production_icon_3.data('hovered')) {
			complete_production_icon_3.attr({fill: '#FF0000', stroke: '#FF0000'});
		}
	} else {
		complete_production_set[2].data('is_on_path', '0');
		if(!complete_production_icon_3.data('hovered')) {
			complete_production_icon_3.attr({fill : '#6D757F', stroke : '#6D757F'});
		}
	}

	if(_red_path_length >= complete_production_set[1].data('path_length')){
		complete_production_set[1].data('is_on_path', '1');
		if(!complete_production_icon_2.data('hovered')) {
			complete_production_icon_2.attr({fill: '#FF0000', stroke: '#FF0000'});
		}
	} else {
		complete_production_set[1].data('is_on_path', '0');
		if(!complete_production_icon_2.data('hovered')) {
			complete_production_icon_2.attr({fill: '#6D757F', stroke: '#6D757F'});
		}
	}

	if(_red_path_length >= complete_production_set[0].data('path_length')){
		complete_production_set[0].data('is_on_path', '1');
		if(!complete_production_icon_1.data('hovered')) {
			complete_production_icon_1.attr({fill: '#FF0000', stroke: '#FF0000'});
		}
	} else {
		complete_production_set[0].data('is_on_path', '0');
		if(!complete_production_icon_1.data('hovered')) {
			complete_production_icon_1.attr({fill: '#6D757F', stroke: '#6D757F'});
		}
	}




	start_shape_set.toFront();
	dobicha_set.toFront();
	dobicha_icon.toFront();
	manufacture_shadow_set.toFront();
	manufacture_set.toFront();
	manufacture1_icon.toFront();
	manufacture2_icon.toFront();
	manufacture3_icon.toFront();
	electroliz_shadow.toFront();
	electroliz_set.toFront();
	electroliz_icon.toFront();
	razliv_shadow.toFront();
	razliv_set.toFront();
	razliv_icon.toFront();
	refurb_shadow.toFront();
	refurb_set.toFront();
	refurb_icon.toFront();
	complete_production_shadow_set.toFront();
	complete_production_set.toFront();
	complete_production_icon_1.toFront();
	complete_production_icon_2.toFront();
	complete_production_icon_3.toFront();

}
});
/* End */
;; /* /js/production_mobile.js?14419826342856*/
; /* /rusal/raphael.patched.min.js?144198257890967*/
; /* /rusal/rsl_production_process_en_cap.js?1441982575478*/
; /* /rusal/rsl_production_process.js?144198257953050*/
