/* @codekit-append "vendor/jquery-1.10.2.min.js",  "vendor/looper.js",  "vendor/jquery.touchSwipe.js",  vendor/jquery.debouncedresize.js",  "vendor/imagesloaded.pkgd.js",  "vendor/twitter.widgets.js",  "vendor/list.js",  "vendor/froogaloop.js",  "vendor/yt-iframe-api.js",  "map.js",  "main.js";
     *//* **********************************************
     Begin jquery-1.10.2.min.js
********************************************** *//*! jQuery v1.10.2 | (c) 2005,  2013 jQuery Foundation,  Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/function initMap() {
    function s(e, t) {
    var i= {
    coord: [1, 1, 1, 52, 52, 52, 52, 1], type:"poly"}
;
    for(var s=0;
    s<t.length;
    s++) {
    var o=t[s];
    n.geocode( {
    address: o[0];
}
, function(t) {
    var n=t[0].geometry.location.lat(), s=t[0].geometry.location.lng(), u=o[3], a=new google.maps.InfoWindow( {
    content: u;
}
), f=new google.maps.LatLng(n, s), l=new google.maps.MarkerImage(o[1], null, null, null, new google.maps.Size(52, 52)), c=new google.maps.Marker( {
    position: f, map:e, icon:l, shape:i, title:o[0], zIndex:o[2];
}
);
    google.maps.event.addListener(c, "click", function() {
    r!=null&&r.close();
    a.open(e, c);
    r=a;
}
);
});
}google.maps.event.addListener(e, "click", function() {
    r!=null&&r.close();
}
);
}var e, t, n=new google.maps.Geocoder, r=null, i=[ {
    stylers: [ {
    lightness: 25;
}
,  {
    saturation: -100;
}
,  {
    gamma: .5;
}
];
},  {
    featureType: "road", elementType:"geometry.fill", stylers:[ {
    color: "#FFFFFF"}
];
},  {
    featureType: "road", elementType:"geometry.stroke", stylers:[ {
    color: "#AAAAAA"}
];
},  {
    featureType: "road", elementType:"labels.text.fill", stylers:[ {
    color: "#000000"}
];
},  {
    featureType: "road", elementType:"labels.text.stroke", stylers:[ {
    visibility: "off"}
];
},  {
    featureType: "water", elementType:"geometry.fill", stylers:[ {
    color: "#FFFFFF"}
];
},  {
    featureType: "administrative", elementType:"labels.text.stroke", stylers:[ {
    visibility: "off"}
];
},  {
    featureType: "administrative", elementType:"labels.text.fill", stylers:[ {
    color: "#000000"}
];
}];
    n.geocode( {
    address: mapCenter;
}
, function(n) {
    var r=n[0].geometry.location.lat(), o=n[0].geometry.location.lng();
    e= {
    center: new google.maps.LatLng(r, o), zoom:zoom, minZoom:3, maxZoom:23, styles:i;
}
;
    t=new google.maps.Map(document.getElementById("map"), e);
    google.maps.event.addListenerOnce(t, "idle", function() {
    s(t, markers);
}
);
});
}(function(e, t) {
    function H(e) {
    var t=e.length, n=w.type(e);
    return w.isWindow(e)?!1: 1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e);
}
function j(e) {
    var t=B[e]= {
}
;
    return w.each(e.match(S)||[], function(e, n) {
    t[n]=!0;
}
), t;
}function q(e, n, r, i) {
    if(w.acceptData(e)) {
    var s, o, u=w.expando, a=e.nodeType, f=a?w.cache: e, l=a?e[u]:e[u]&&u;
    if(l&&f[l]&&(i||f[l].data)||r!==t||"string"!=typeof n)return l||(l=a?e[u]=c.pop()||w.guid++: u), f[l]||(f[l]=a? {
}
: {
    toJSON: w.noop;
}
), ("object"==typeof n||"function"==typeof n)&&(i?f[l]=w.extend(f[l], n):f[l].data=w.extend(f[l].data, n)), o=f[l], i||(o.data||(o.data= {
}
), o=o.data), r!==t&&(o[w.camelCase(n)]=r), "string"==typeof n?(s=o[n], null==s&&(s=o[w.camelCase(n)])):s=o, s;
}
}function R(e, t, n) {
    if(w.acceptData(e)) {
    var r, i, s=e.nodeType, o=s?w.cache: e, u=s?e[w.expando]:w.expando;
    if(o[u]) {
    if(t&&(r=n?o[u]: o[u].data)) {
    w.isArray(t)?t=t.concat(w.map(t, w.camelCase)): t in r?t=[t]:(t=w.camelCase(t), t=t in r?[t]:t.split(" ")), i=t.length;
    while(i--)delete r[t[i]];
    if(n?!z(r): !w.isEmptyObject(r))return;
}
(n||(delete o[u].data, z(o[u])))&&(s?w.cleanData([e], !0):w.support.deleteExpando||o!=o.window?delete o[u]:o[u]=null);
}}}function U(e, n, r) {
    if(r===t&&1===e.nodeType) {
    var i="data-"+n.replace(I, "-$1").toLowerCase();
    if(r=e.getAttribute(i), "string"==typeof r) {
    try {
    r="true"===r?!0: "false"===r?!1:"null"===r?null:+r+""===r?+r:F.test(r)?w.parseJSON(r):r;
}
catch(s) {
}
w.data(e, n, r);
}
else r=t;
}return r;
}function z(e) {
    var t;
    for(t in e)if(("data"!==t||!w.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;
    return!0;
}
function it() {
    return!0;
}
function st() {
    return!1;
}
function ot() {
    try {
    return o.activeElement;
}
catch(e) {
}
}
function ct(e, t) {
    do e=e[t];
    while(e&&1!==e.nodeType);
    return e;
}
function ht(e, t, n) {
    if(w.isFunction(t))return w.grep(e, function(e, r) {
    return!!t.call(e, r, e)!==n;
}
);
    if(t.nodeType)return w.grep(e, function(e) {
    return e===t!==n;
}
);
    if("string"==typeof t) {
    if(ut.test(t))return w.filter(t, e, n);
    t=w.filter(t, e);
}
return w.grep(e, function(e) {
    return w.inArray(e, t)>=0!==n;
}
);
}function pt(e) {
    var t=dt.split("|"), n=e.createDocumentFragment();
    if(n.createElement)while(t.length)n.createElement(t.pop());
    return n;
}
function Mt(e, t) {
    return w.nodeName(e, "table")&&w.nodeName(1===t.nodeType?t: t.firstChild, "tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e;
}
function _t(e) {
    return e.type=(null!==w.find.attr(e, "type"))+"/"+e.type, e;
}
function Dt(e) {
    var t=Ct.exec(e.type);
    return t?e.type=t[1]: e.removeAttribute("type"), e;
}
function Pt(e, t) {
    var n, r=0;
    for(;
    null!=(n=e[r]);
    r++)w._data(n, "globalEval", !t||w._data(t[r], "globalEval"));
}
function Ht(e, t) {
    if(1===t.nodeType&&w.hasData(e)) {
    var n, r, i, s=w._data(e), o=w._data(t, s), u=s.events;
    if(u) {
    delete o.handle, o.events= {
}
;
    for(n in u)for(r=0, i=u[n].length;
    i>r;
    r++)w.event.add(t, n, u[n][r]);
}
o.data&&(o.data=w.extend( {
}
, o.data));
}
}function Bt(e, t) {
    var n, r, i;
    if(1===t.nodeType) {
    if(n=t.nodeName.toLowerCase(), !w.support.noCloneEvent&&t[w.expando]) {
    i=w._data(t);
    for(r in i.events)w.removeEvent(t, r, i.handle);
    t.removeAttribute(w.expando);
}
"script"===n&&t.text!==e.text?(_t(t).text=e.text, Dt(t)): "object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML), w.support.html5Clone&&e.innerHTML&&!w.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&xt.test(e.type)?(t.defaultChecked=t.checked=e.checked, t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue);
}}function jt(e, n) {
    var r, s, o=0, u=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"): typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;
    if(!u)for(u=[], r=e.childNodes||e;
    null!=(s=r[o]);
    o++)!n||w.nodeName(s, n)?u.push(s): w.merge(u, jt(s, n));
    return n===t||n&&w.nodeName(e, n)?w.merge([e], u): u;
}
function Ft(e) {
    xt.test(e.type)&&(e.defaultChecked=e.checked);
}
function tn(e, t) {
    if(t in e)return t;
    var n=t.charAt(0).toUpperCase()+t.slice(1), r=t, i=en.length;
    while(i--)if(t=en[i]+n, t in e)return t;
    return r;
}
function nn(e, t) {
    return e=t||e, "none"===w.css(e, "display")||!w.contains(e.ownerDocument, e);
}
function rn(e, t) {
    var n, r, i, s=[], o=0, u=e.length;
    for(;
    u>o;
    o++)r=e[o], r.style&&(s[o]=w._data(r, "olddisplay"), n=r.style.display, t?(s[o]||"none"!==n||(r.style.display=""), ""===r.style.display&&nn(r)&&(s[o]=w._data(r, "olddisplay", an(r.nodeName)))): s[o]||(i=nn(r), (n&&"none"!==n||!i)&&w._data(r, "olddisplay", i?n:w.css(r, "display"))));
    for(o=0;
    u>o;
    o++)r=e[o], r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?s[o]||"": "none"));
    return e;
}
function sn(e, t, n) {
    var r=$t.exec(t);
    return r?Math.max(0, r[1]-(n||0))+(r[2]||"px"): t;
}
function on(e, t, n, r, i) {
    var s=n===(r?"border": "content")?4:"width"===t?1:0, o=0;
    for(;
    4>s;
    s+=2)"margin"===n&&(o+=w.css(e, n+Zt[s], !0, i)), r?("content"===n&&(o-=w.css(e, "padding"+Zt[s], !0, i)), "margin"!==n&&(o-=w.css(e, "border"+Zt[s]+"Width", !0, i))): (o+=w.css(e, "padding"+Zt[s], !0, i), "padding"!==n&&(o+=w.css(e, "border"+Zt[s]+"Width", !0, i)));
    return o;
}
function un(e, t, n) {
    var r=!0, i="width"===t?e.offsetWidth: e.offsetHeight, s=qt(e), o=w.support.boxSizing&&"border-box"===w.css(e, "boxSizing", !1, s);
    if(0>=i||null==i) {
    if(i=Rt(e, t, s), (0>i||null==i)&&(i=e.style[t]), Jt.test(i))return i;
    r=o&&(w.support.boxSizingReliable||i===e.style[t]), i=parseFloat(i)||0;
}
return i+on(e, t, n||(o?"border": "content"), r, s)+"px"}function an(e) {
    var t=o, n=Qt[e];
    return n||(n=fn(e, t), "none"!==n&&n||(It=(It||w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display: block !important")).appendTo(t.documentElement), t=(It[0].contentWindow||It[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n=fn(e, t), It.detach()), Qt[e]=n), n;
}
function fn(e, t) {
    var n=w(t.createElement(e)).appendTo(t.body), r=w.css(n[0], "display");
    return n.remove(), r;
}
function vn(e, t, n, r) {
    var i;
    if(w.isArray(t))w.each(t, function(t, i) {
    n||cn.test(e)?r(e, i): vn(e+"["+("object"==typeof i?t:"")+"]", i, n, r);
}
);
    else if(n||"object"!==w.type(t))r(e, t);
    else for(i in t)vn(e+"["+i+"]", t[i], n, r);
}
function _n(e) {
    return function(t, n) {
    "string"!=typeof t&&(n=t, t="*");
    var r, i=0, s=t.toLowerCase().match(S)||[];
    if(w.isFunction(n))while(r=s[i++])"+"===r[0]?(r=r.slice(1)||"*", (e[r]=e[r]||[]).unshift(n)): (e[r]=e[r]||[]).push(n);
}
}function Dn(e, n, r, i) {
    function u(a) {
    var f;
    return s[a]=!0, w.each(e[a]||[], function(e, a) {
    var l=a(n, r, i);
    return"string"!=typeof l||o||s[l]?o?!(f=l): t:(n.dataTypes.unshift(l), u(l), !1);
}
), f;
}var s= {
}
, o=e===An;
    return u(n.dataTypes[0])||!s["*"]&&u("*");
}
function Pn(e, n) {
    var r, i, s=w.ajaxSettings.flatOptions|| {
}
;
    for(i in n)n[i]!==t&&((s[i]?e: r||(r= {
}
))[i]=n[i]);
    return r&&w.extend(!0, e, r), e;
}
function Hn(e, n, r) {
    var i, s, o, u, a=e.contents, f=e.dataTypes;
    while("*"===f[0])f.shift(), s===t&&(s=e.mimeType||n.getResponseHeader("Content-Type"));
    if(s)for(u in a)if(a[u]&&a[u].test(s)) {
    f.unshift(u);
    break;
}
if(f[0]in r)o=f[0];
    else {
    for(u in r) {
    if(!f[0]||e.converters[u+" "+f[0]]) {
    o=u;
    break;
}
i||(i=u);
}o=o||i;
}return o?(o!==f[0]&&f.unshift(o), r[o]): t;
}function Bn(e, t, n, r) {
    var i, s, o, u, a, f= {
}
, l=e.dataTypes.slice();
    if(l[1])for(o in e.converters)f[o.toLowerCase()]=e.converters[o];
    s=l.shift();
    while(s)if(e.responseFields[s]&&(n[e.responseFields[s]]=t), !a&&r&&e.dataFilter&&(t=e.dataFilter(t, e.dataType)), a=s, s=l.shift())if("*"===s)s=a;
    else if("*"!==a&&a!==s) {
    if(o=f[a+" "+s]||f["* "+s], !o)for(i in f)if(u=i.split(" "), u[1]===s&&(o=f[a+" "+u[0]]||f["* "+u[0]])) {
    o===!0?o=f[i]: f[i]!==!0&&(s=u[0], l.unshift(u[1]));
    break;
}
if(o!==!0)if(o&&e["throws"])t=o(t);
    else try {
    t=o(t);
}
catch(c) {
    return {
    state: "parsererror", error:o?c:"No conversion from "+a+" to "+s;
}
}}return {
    state: "success", data:t;
}
}function zn() {
    try {
    return new e.XMLHttpRequest;
}
catch(t) {
}
}
function Wn() {
    try {
    return new e.ActiveXObject("Microsoft.XMLHTTP");
}
catch(t) {
}
}
function Yn() {
    return setTimeout(function() {
    Xn=t;
}
), Xn=w.now();
}function Zn(e, t, n) {
    var r, i=(Gn[t]||[]).concat(Gn["*"]), s=0, o=i.length;
    for(;
    o>s;
    s++)if(r=i[s].call(n, t, e))return r;
}
function er(e, t, n) {
    var r, i, s=0, o=Qn.length, u=w.Deferred().always(function() {
    delete a.elem;
}
), a=function() {
    if(i)return!1;
    var t=Xn||Yn(), n=Math.max(0, f.startTime+f.duration-t), r=n/f.duration||0, s=1-r, o=0, a=f.tweens.length;
    for(;
    a>o;
    o++)f.tweens[o].run(s);
    return u.notifyWith(e, [f, s, n]), 1>s&&a?n: (u.resolveWith(e, [f]), !1);
}
, f=u.promise( {
    elem: e, props:w.extend( {
}
, t), opts:w.extend(!0,  {
    specialEasing:  {
}
}
, n), originalProperties:t, originalOptions:n, startTime:Xn||Yn(), duration:n.duration, tweens:[], createTween:function(t, n) {
    var r=w.Tween(e, f.opts, t, n, f.opts.specialEasing[t]||f.opts.easing);
    return f.tweens.push(r), r;
}
, stop: function(t) {
    var n=0, r=t?f.tweens.length: 0;
    if(i)return this;
    for(i=!0;
    r>n;
    n++)f.tweens[n].run(1);
    return t?u.resolveWith(e, [f, t]): u.rejectWith(e, [f, t]), this;
}
}), l=f.props;
    for(tr(l, f.opts.specialEasing);
    o>s;
    s++)if(r=Qn[s].call(f, e, l, f.opts))return r;
    return w.map(l, Zn, f), w.isFunction(f.opts.start)&&f.opts.start.call(e, f), w.fx.timer(w.extend(a,  {
    elem: e, anim:f, queue:f.opts.queue;
}
)), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always);
}function tr(e, t) {
    var n, r, i, s, o;
    for(n in e)if(r=w.camelCase(n), i=t[r], s=e[n], w.isArray(s)&&(i=s[1], s=e[n]=s[0]), n!==r&&(e[r]=s, delete e[n]), o=w.cssHooks[r], o&&"expand"in o) {
    s=o.expand(s), delete e[r];
    for(n in s)n in e||(e[n]=s[n], t[n]=i);
}
else t[r]=i;
}function nr(e, t, n) {
    var r, i, s, o, u, a, f=this, l= {
}
, c=e.style, h=e.nodeType&&nn(e), p=w._data(e, "fxshow");
    n.queue||(u=w._queueHooks(e, "fx"), null==u.unqueued&&(u.unqueued=0, a=u.empty.fire, u.empty.fire=function() {
    u.unqueued||a();
}
), u.unqueued++, f.always(function() {
    f.always(function() {
    u.unqueued--, w.queue(e, "fx").length||u.empty.fire();
}
);
})), 1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[c.overflow, c.overflowX, c.overflowY], "inline"===w.css(e, "display")&&"none"===w.css(e, "float")&&(w.support.inlineBlockNeedsLayout&&"inline"!==an(e.nodeName)?c.zoom=1: c.display="inline-block")), n.overflow&&(c.overflow="hidden", w.support.shrinkWrapBlocks||f.always(function() {
    c.overflow=n.overflow[0], c.overflowX=n.overflow[1], c.overflowY=n.overflow[2];
}
));
    for(r in t)if(i=t[r], $n.exec(i)) {
    if(delete t[r], s=s||"toggle"===i, i===(h?"hide": "show"))continue;
    l[r]=p&&p[r]||w.style(e, r);
}
if(!w.isEmptyObject(l)) {
    p?"hidden"in p&&(h=p.hidden): p=w._data(e, "fxshow",  {
}
), s&&(p.hidden=!h), h?w(e).show():f.done(function() {
    w(e).hide();
}
), f.done(function() {
    var t;
    w._removeData(e, "fxshow");
    for(t in l)w.style(e, t, l[t]);
}
);
    for(r in l)o=Zn(h?p[r]: 0, r, f), r in p||(p[r]=o.start, h&&(o.end=o.start, o.start="width"===r||"height"===r?1:0));
}
}function rr(e, t, n, r, i) {
    return new rr.prototype.init(e, t, n, r, i);
}
function ir(e, t) {
    var n, r= {
    height: e;
}
, i=0;
    for(t=t?1: 0;
    4>i;
    i+=2-t)n=Zt[i], r["margin"+n]=r["padding"+n]=e;
    return t&&(r.opacity=r.width=e), r;
}
function sr(e) {
    return w.isWindow(e)?e: 9===e.nodeType?e.defaultView||e.parentWindow:!1;
}
var n, r, i=typeof t, s=e.location, o=e.document, u=o.documentElement, a=e.jQuery, f=e.$, l= {
}
, c=[], h="1.10.2", p=c.concat, d=c.push, v=c.slice, m=c.indexOf, g=l.toString, y=l.hasOwnProperty, b=h.trim, w=function(e, t) {
    return new w.fn.init(e, t, r);
}
, E=/[+-]?(?: \d*\.|)\d+(?:[eE][+-]?\d+|)/.source, S=/\S+/g, x=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, N=/^<(\w+)\s*\/?>(?:<\/\1>|)$/, C=/^[\], : {
}
\s]*$/, k=/(?:^|:|, )(?:\s*\[)+/g, L=/\\(?:["\\\/bfnrt]|u[\da-fA-F] {
    4;
}
)/g, A=/"[^"\\\r\n]*"|true|false|null|-?(?: \d+\.|)\d+(?:[eE][+-]?\d+|)/g, O=/^-ms-/, M=/-([\da-z])/gi, _=function(e, t) {
    return t.toUpperCase();
}
, D=function(e) {
    (o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(P(), w.ready());
}
, P=function() {
    o.addEventListener?(o.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1)): (o.detachEvent("onreadystatechange", D), e.detachEvent("onload", D));
}
;
    w.fn=w.prototype= {
    jquery: h, constructor:w, init:function(e, n, r) {
    var i, s;
    if(!e)return this;
    if("string"==typeof e) {
    if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null, e, null]: T.exec(e), !i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);
    if(i[1]) {
    if(n=n instanceof w?n[0]: n, w.merge(this, w.parseHTML(i[1], n&&n.nodeType?n.ownerDocument||n:o, !0)), N.test(i[1])&&w.isPlainObject(n))for(i in n)w.isFunction(this[i])?this[i](n[i]):this.attr(i, n[i]);
    return this;
}
if(s=o.getElementById(i[2]), s&&s.parentNode) {
    if(s.id!==i[2])return r.find(e);
    this.length=1, this[0]=s;
}
return this.context=o, this.selector=e, this;
}return e.nodeType?(this.context=this[0]=e, this.length=1, this): w.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector, this.context=e.context), w.makeArray(e, this));
}, selector:"", length:0, toArray:function() {
    return v.call(this);
}
, get: function(e) {
    return null==e?this.toArray(): 0>e?this[this.length+e]:this[e];
}
, pushStack:function(e) {
    var t=w.merge(this.constructor(), e);
    return t.prevObject=this, t.context=this.context, t;
}
, each: function(e, t) {
    return w.each(this, e, t);
}
, ready: function(e) {
    return w.ready.promise().done(e), this;
}
, slice: function() {
    return this.pushStack(v.apply(this, arguments));
}
, first: function() {
    return this.eq(0);
}
, last: function() {
    return this.eq(-1);
}
, eq: function(e) {
    var t=this.length, n=+e+(0>e?t: 0);
    return this.pushStack(n>=0&&t>n?[this[n]]: []);
}
, map:function(e) {
    return this.pushStack(w.map(this, function(t, n) {
    return e.call(t, n, t);
}
));
}, end: function() {
    return this.prevObject||this.constructor(null);
}
, push: d, sort:[].sort, splice:[].splice;
}, w.fn.init.prototype=w.fn, w.extend=w.fn.extend=function() {
    var e, n, r, i, s, o, u=arguments[0]|| {
}
, a=1, f=arguments.length, l=!1;
    for("boolean"==typeof u&&(l=u, u=arguments[1]|| {
}
, a=2), "object"==typeof u||w.isFunction(u)||(u= {
}
), f===a&&(u=this, --a);
    f>a;
    a++)if(null!=(s=arguments[a]))for(i in s)e=u[i], r=s[i], u!==r&&(l&&r&&(w.isPlainObject(r)||(n=w.isArray(r)))?(n?(n=!1, o=e&&w.isArray(e)?e: []):o=e&&w.isPlainObject(e)?e: {
}
, u[i]=w.extend(l, o, r)):r!==t&&(u[i]=r));
    return u;
}
, w.extend( {
    expando: "jQuery"+(h+Math.random()).replace(/\D/g, ""), noConflict:function(t) {
    return e.$===w&&(e.$=f), t&&e.jQuery===w&&(e.jQuery=a), w;
}
, isReady: !1, readyWait:1, holdReady:function(e) {
    e?w.readyWait++: w.ready(!0);
}
, ready:function(e) {
    if(e===!0?!--w.readyWait: !w.isReady) {
    if(!o.body)return setTimeout(w.ready);
    w.isReady=!0, e!==!0&&--w.readyWait>0||(n.resolveWith(o, [w]), w.fn.trigger&&w(o).trigger("ready").off("ready"));
}
}, isFunction: function(e) {
    return"function"===w.type(e);
}
, isArray: Array.isArray||function(e) {
    return"array"===w.type(e);
}
, isWindow: function(e) {
    return null!=e&&e==e.window;
}
, isNumeric: function(e) {
    return!isNaN(parseFloat(e))&&isFinite(e);
}
, type: function(e) {
    return null==e?e+"": "object"==typeof e||"function"==typeof e?l[g.call(e)]||"object":typeof e;
}
, isPlainObject:function(e) {
    var n;
    if(!e||"object"!==w.type(e)||e.nodeType||w.isWindow(e))return!1;
    try {
    if(e.constructor&&!y.call(e, "constructor")&&!y.call(e.constructor.prototype, "isPrototypeOf"))return!1;
}
catch(r) {
    return!1;
}
if(w.support.ownLast)for(n in e)return y.call(e, n);
    for(n in e);
    return n===t||y.call(e, n);
}
, isEmptyObject: function(e) {
    var t;
    for(t in e)return!1;
    return!0;
}
, error: function(e) {
    throw Error(e);
}
, parseHTML: function(e, t, n) {
    if(!e||"string"!=typeof e)return null;
    "boolean"==typeof t&&(n=t, t=!1), t=t||o;
    var r=N.exec(e), i=!n&&[];
    return r?[t.createElement(r[1])]: (r=w.buildFragment([e], t, i), i&&w(i).remove(), w.merge([], r.childNodes));
}
, parseJSON:function(n) {
    return e.JSON&&e.JSON.parse?e.JSON.parse(n): null===n?n:"string"==typeof n&&(n=w.trim(n), n&&C.test(n.replace(L, "@").replace(A, "]").replace(k, "")))?Function("return "+n)():(w.error("Invalid JSON: "+n), t);
}
, parseXML:function(n) {
    var r, i;
    if(!n||"string"!=typeof n)return null;
    try {
    e.DOMParser?(i=new DOMParser, r=i.parseFromString(n, "text/xml")): (r=new ActiveXObject("Microsoft.XMLDOM"), r.async="false", r.loadXML(n));
}
catch(s) {
    r=t;
}
return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||w.error("Invalid XML:  "+n), r;
}, noop:function() {
}
, globalEval:function(t) {
    t&&w.trim(t)&&(e.execScript||function(t) {
    e.eval.call(e, t);
}
)(t);
}, camelCase: function(e) {
    return e.replace(O, "ms-").replace(M, _);
}
, nodeName: function(e, t) {
    return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase();
}
, each: function(e, t, n) {
    var r, i=0, s=e.length, o=H(e);
    if(n) {
    if(o) {
    for(;
    s>i;
    i++)if(r=t.apply(e[i], n), r===!1)break;
}
else for(i in e)if(r=t.apply(e[i], n), r===!1)break;
}else if(o) {
    for(;
    s>i;
    i++)if(r=t.call(e[i], i, e[i]), r===!1)break;
}
else for(i in e)if(r=t.call(e[i], i, e[i]), r===!1)break;
    return e;
}
, trim: b&&!b.call("﻿ ")?function(e) {
    return null==e?"": b.call(e);
}
:function(e) {
    return null==e?"": (e+"").replace(x, "");
}
, makeArray:function(e, t) {
    var n=t||[];
    return null!=e&&(H(Object(e))?w.merge(n, "string"==typeof e?[e]: e):d.call(n, e)), n;
}
, inArray:function(e, t, n) {
    var r;
    if(t) {
    if(m)return m.call(t, e, n);
    for(r=t.length, n=n?0>n?Math.max(0, r+n): n:0;
    r>n;
    n++)if(n in t&&t[n]===e)return n;
}
return-1;
}, merge: function(e, n) {
    var r=n.length, i=e.length, s=0;
    if("number"==typeof r)for(;
    r>s;
    s++)e[i++]=n[s];
    else while(n[s]!==t)e[i++]=n[s++];
    return e.length=i, e;
}
, grep: function(e, t, n) {
    var r, i=[], s=0, o=e.length;
    for(n=!!n;
    o>s;
    s++)r=!!t(e[s], s), n!==r&&i.push(e[s]);
    return i;
}
, map: function(e, t, n) {
    var r, i=0, s=e.length, o=H(e), u=[];
    if(o)for(;
    s>i;
    i++)r=t(e[i], i, n), null!=r&&(u[u.length]=r);
    else for(i in e)r=t(e[i], i, n), null!=r&&(u[u.length]=r);
    return p.apply([], u);
}
, guid: 1, proxy:function(e, n) {
    var r, i, s;
    return"string"==typeof n&&(s=e[n], n=e, e=s), w.isFunction(e)?(r=v.call(arguments, 2), i=function() {
    return e.apply(n||this, r.concat(v.call(arguments)));
}
, i.guid=e.guid=e.guid||w.guid++, i): t;
}, access:function(e, n, r, i, s, o, u) {
    var a=0, f=e.length, l=null==r;
    if("object"===w.type(r)) {
    s=!0;
    for(a in r)w.access(e, n, a, r[a], !0, o, u);
}
else if(i!==t&&(s=!0, w.isFunction(i)||(u=!0), l&&(u?(n.call(e, i), n=null): (l=n, n=function(e, t, n) {
    return l.call(w(e), n);
}
)), n))for(;
    f>a;
    a++)n(e[a], r, u?i: i.call(e[a], a, n(e[a], r)));
    return s?e: l?n.call(e):f?n(e[0], r):o;
}
, now:function() {
    return(new Date).getTime();
}
, swap: function(e, t, n, r) {
    var i, s, o= {
}
;
    for(s in t)o[s]=e.style[s], e.style[s]=t[s];
    i=n.apply(e, r||[]);
    for(s in t)e.style[s]=o[s];
    return i;
}
}), w.ready.promise=function(t) {
    if(!n)if(n=w.Deferred(), "complete"===o.readyState)setTimeout(w.ready);
    else if(o.addEventListener)o.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1);
    else {
    o.attachEvent("onreadystatechange", D), e.attachEvent("onload", D);
    var r=!1;
    try {
    r=null==e.frameElement&&o.documentElement;
}
catch(i) {
}
r&&r.doScroll&&function s() {
    if(!w.isReady) {
    try {
    r.doScroll("left");
}
catch(e) {
    return setTimeout(s, 50);
}
P(), w.ready();
}}();
}return n.promise(t);
}, w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    l["[object "+t+"]"]=t.toLowerCase();
}
);
    r=w(o), function(e, t) {
    function ot(e, t, n, i) {
    var s, o, u, a, f, l, p, m, g, w;
    if((t?t.ownerDocument||t: E)!==h&&c(t), t=t||h, n=n||[], !e||"string"!=typeof e)return n;
    if(1!==(a=t.nodeType)&&9!==a)return[];
    if(d&&!i) {
    if(s=Z.exec(e))if(u=s[1]) {
    if(9===a) {
    if(o=t.getElementById(u), !o||!o.parentNode)return n;
    if(o.id===u)return n.push(o), n;
}
else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(u))&&y(t, o)&&o.id===u)return n.push(o), n;
}else {
    if(s[2])return H.apply(n, t.getElementsByTagName(e)), n;
    if((u=s[3])&&r.getElementsByClassName&&t.getElementsByClassName)return H.apply(n, t.getElementsByClassName(u)), n;
}
if(r.qsa&&(!v||!v.test(e))) {
    if(m=p=b, g=t, w=9===a&&e, 1===a&&"object"!==t.nodeName.toLowerCase()) {
    l=mt(e), (p=t.getAttribute("id"))?m=p.replace(nt, "\\$&"): t.setAttribute("id", m), m="[id='"+m+"'] ", f=l.length;
    while(f--)l[f]=m+gt(l[f]);
    g=$.test(e)&&t.parentNode||t, w=l.join(", ");
}
if(w)try {
    return H.apply(n, g.querySelectorAll(w)), n;
}
catch(S) {
}
finally {
    p||t.removeAttribute("id");
}
}}return Nt(e.replace(W, "$1"), t, n, i);
}function ut() {
    function t(n, r) {
    return e.push(n+=" ")>s.cacheLength&&delete t[e.shift()], t[n]=r;
}
var e=[];
    return t;
}
function at(e) {
    return e[b]=!0, e;
}
function ft(e) {
    var t=h.createElement("div");
    try {
    return!!e(t);
}
catch(n) {
    return!1;
}
finally {
    t.parentNode&&t.parentNode.removeChild(t), t=null;
}
}function lt(e, t) {
    var n=e.split("|"), r=e.length;
    while(r--)s.attrHandle[n[r]]=t;
}
function ct(e, t) {
    var n=t&&e, r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||O)-(~e.sourceIndex||O);
    if(r)return r;
    if(n)while(n=n.nextSibling)if(n===t)return-1;
    return e?1: -1;
}
function ht(e) {
    return function(t) {
    var n=t.nodeName.toLowerCase();
    return"input"===n&&t.type===e;
}
}function pt(e) {
    return function(t) {
    var n=t.nodeName.toLowerCase();
    return("input"===n||"button"===n)&&t.type===e;
}
}function dt(e) {
    return at(function(t) {
    return t=+t, at(function(n, r) {
    var i, s=e([], n.length, t), o=s.length;
    while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]));
}
);
});
}function vt() {
}
function mt(e, t) {
    var n, r, i, o, u, a, f, l=N[e+" "];
    if(l)return t?0: l.slice(0);
    u=e, a=[], f=s.preFilter;
    while(u) {
    (!n||(r=X.exec(u)))&&(r&&(u=u.slice(r[0].length)||u), a.push(i=[])), n=!1, (r=V.exec(u))&&(n=r.shift(), i.push( {
    value: n, type:r[0].replace(W, " ");
}
), u=u.slice(n.length));
    for(o in s.filter)!(r=G[o].exec(u))||f[o]&&!(r=f[o](r))||(n=r.shift(), i.push( {
    value: n, type:o, matches:r;
}
), u=u.slice(n.length));
    if(!n)break;
}
return t?u.length: u?ot.error(e):N(e, a).slice(0);
}function gt(e) {
    var t=0, n=e.length, r="";
    for(;
    n>t;
    t++)r+=e[t].value;
    return r;
}
function yt(e, t, n) {
    var r=t.dir, s=n&&"parentNode"===r, o=x++;
    return t.first?function(t, n, i) {
    while(t=t[r])if(1===t.nodeType||s)return e(t, n, i);
}
: function(t, n, u) {
    var a, f, l, c=S+" "+o;
    if(u) {
    while(t=t[r])if((1===t.nodeType||s)&&e(t, n, u))return!0;
}
else while(t=t[r])if(1===t.nodeType||s)if(l=t[b]||(t[b]= {
}
), (f=l[r])&&f[0]===c) {
    if((a=f[1])===!0||a===i)return a===!0;
}
else if(f=l[r]=[c], f[1]=e(t, n, u)||i, f[1]===!0)return!0;
}}function bt(e) {
    return e.length>1?function(t, n, r) {
    var i=e.length;
    while(i--)if(!e[i](t, n, r))return!1;
    return!0;
}
: e[0];
}function wt(e, t, n, r, i) {
    var s, o=[], u=0, a=e.length, f=null!=t;
    for(;
    a>u;
    u++)(s=e[u])&&(!n||n(s, r, i))&&(o.push(s), f&&t.push(u));
    return o;
}
function Et(e, t, n, r, i, s) {
    return r&&!r[b]&&(r=Et(r)), i&&!i[b]&&(i=Et(i, s)), at(function(s, o, u, a) {
    var f, l, c, h=[], p=[], d=o.length, v=s||Tt(t||"*", u.nodeType?[u]: u, []), m=!e||!s&&t?v:wt(v, h, e, u, a), g=n?i||(s?e:d||r)?[]:o:m;
    if(n&&n(m, g, u, a), r) {
    f=wt(g, p), r(f, [], u, a), l=f.length;
    while(l--)(c=f[l])&&(g[p[l]]=!(m[p[l]]=c));
}
if(s) {
    if(i||e) {
    if(i) {
    f=[], l=g.length;
    while(l--)(c=g[l])&&f.push(m[l]=c);
    i(null, g=[], f, a);
}
l=g.length;
    while(l--)(c=g[l])&&(f=i?j.call(s, c): h[l])>-1&&(s[f]=!(o[f]=c));
}
}else g=wt(g===o?g.splice(d, g.length):g), i?i(null, o, g, a):H.apply(o, g);
});
}function St(e) {
    var t, n, r, i=e.length, o=s.relative[e[0].type], u=o||s.relative[" "], a=o?1: 0, l=yt(function(e) {
    return e===t;
}
, u, !0), c=yt(function(e) {
    return j.call(t, e)>-1;
}
, u, !0), h=[function(e, n, r) {
    return!o&&(r||n!==f)||((t=n).nodeType?l(e, n, r): c(e, n, r));
}
];
    for(;
    i>a;
    a++)if(n=s.relative[e[a].type])h=[yt(bt(h), n)];
    else {
    if(n=s.filter[e[a].type].apply(null, e[a].matches), n[b]) {
    for(r=++a;
    i>r;
    r++)if(s.relative[e[r].type])break;
    return Et(a>1&&bt(h), a>1&&gt(e.slice(0, a-1).concat( {
    value: " "===e[a-2].type?"*":""}
)).replace(W, "$1"), n, r>a&&St(e.slice(a, r)), i>r&&St(e=e.slice(r)), i>r&&gt(e));
}h.push(n);
}return bt(h);
}function xt(e, t) {
    var n=0, r=t.length>0, o=e.length>0, u=function(u, a, l, c, p) {
    var d, v, m, g=[], y=0, b="0", w=u&&[], E=null!=p, x=f, T=u||o&&s.find.TAG("*", p&&a.parentNode||a), N=S+=null==x?1: Math.random()||.1;
    for(E&&(f=a!==h&&a, i=n);
    null!=(d=T[b]);
    b++) {
    if(o&&d) {
    v=0;
    while(m=e[v++])if(m(d, a, l)) {
    c.push(d);
    break;
}
E&&(S=N, i=++n);
}r&&((d=!m&&d)&&y--, u&&w.push(d));
}if(y+=b, r&&b!==y) {
    v=0;
    while(m=t[v++])m(w, g, a, l);
    if(u) {
    if(y>0)while(b--)w[b]||g[b]||(g[b]=D.call(c));
    g=wt(g);
}
H.apply(c, g), E&&!u&&g.length>0&&y+t.length>1&&ot.uniqueSort(c);
}return E&&(S=N, f=x), w;
};
    return r?at(u): u;
}
function Tt(e, t, n) {
    var r=0, i=t.length;
    for(;
    i>r;
    r++)ot(e, t[r], n);
    return n;
}
function Nt(e, t, n, i) {
    var o, u, f, l, c, h=mt(e);
    if(!i&&1===h.length) {
    if(u=h[0]=h[0].slice(0), u.length>2&&"ID"===(f=u[0]).type&&r.getById&&9===t.nodeType&&d&&s.relative[u[1].type]) {
    if(t=(s.find.ID(f.matches[0].replace(rt, it), t)||[])[0], !t)return n;
    e=e.slice(u.shift().value.length);
}
o=G.needsContext.test(e)?0: u.length;
    while(o--) {
    if(f=u[o], s.relative[l=f.type])break;
    if((c=s.find[l])&&(i=c(f.matches[0].replace(rt, it), $.test(u[0].type)&&t.parentNode||t))) {
    if(u.splice(o, 1), e=i.length&&gt(u), !e)return H.apply(n, i), n;
    break;
}
}}return a(e, h)(i, t, !d, n, $.test(e)), n;
}var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b="sizzle"+ -(new Date), E=e.document, S=0, x=0, T=ut(), N=ut(), C=ut(), k=!1, L=function(e, t) {
    return e===t?(k=!0, 0): 0;
}
, A=typeof t, O=1<<31, M= {
}
.hasOwnProperty, _=[], D=_.pop, P=_.push, H=_.push, B=_.slice, j=_.indexOf||function(e) {
    var t=0, n=this.length;
    for(;
    n>t;
    t++)if(this[t]===e)return t;
    return-1;
}
, F="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", I="[\\x20\\t\\r\\n\\f]", q="(?: \\\\.|[\\w-]|[^\\x00-\\xa0])+", R=q.replace("w", "w#"), U="\\["+I+"*("+q+")"+I+"*(?:([*^$|!~]?=)"+I+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+R+")|)|)"+I+"*\\]", z=":("+q+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+U.replace(3, 8)+")*)|.*)\\)|)", W=RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$", "g"), X=RegExp("^"+I+"*, "+I+"*"), V=RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"), $=RegExp(I+"*[+~]"), J=RegExp("="+I+"*([^\\]'\"]*)"+I+"*\\]", "g"), K=RegExp(z), Q=RegExp("^"+R+"$"), G= {
    ID: RegExp("^#("+q+")"), CLASS:RegExp("^\\.("+q+")"), TAG:RegExp("^("+q.replace("w", "w*")+")"), ATTR:RegExp("^"+U), PSEUDO:RegExp("^"+z), CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)", "i"), bool:RegExp("^(?:"+F+")$", "i"), needsContext:RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)", "i");
}
, Y=/^[^ {
    ]+\ {
    \s*\[native \w/, Z=/^(?: #([\w-]+)|(\w+)|\.([\w-]+))$/, et=/^(?:input|select|textarea|button)$/i, tt=/^h\d$/i, nt=/'|\\/g, rt=RegExp("\\\\([\\da-f] {
    1, 6;
}
"+I+"?|("+I+")|.)", "ig"), it=function(e, t, n) {
    var r="0x"+t-65536;
    return r!==r||n?t: 0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10, 56320|1023&r);
}
;
    try {
    H.apply(_=B.call(E.childNodes), E.childNodes), _[E.childNodes.length].nodeType;
}
catch(st) {
    H= {
    apply: _.length?function(e, t) {
    P.apply(e, B.call(t));
}
: function(e, t) {
    var n=e.length, r=0;
    while(e[n++]=t[r++]);
    e.length=n-1;
}
}}u=ot.isXML=function(e) {
    var t=e&&(e.ownerDocument||e).documentElement;
    return t?"HTML"!==t.nodeName: !1;
}
, r=ot.support= {
}
, c=ot.setDocument=function(e) {
    var n=e?e.ownerDocument||e: E, i=n.defaultView;
    return n!==h&&9===n.nodeType&&n.documentElement?(h=n, p=n.documentElement, d=!u(n), i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload", function() {
    c();
}
), r.attributes=ft(function(e) {
    return e.className="i", !e.getAttribute("className");
}
), r.getElementsByTagName=ft(function(e) {
    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
}
), r.getElementsByClassName=ft(function(e) {
    return e.innerHTML="<div class='a'></div><div class='a i'></div>", e.firstChild.className="i", 2===e.getElementsByClassName("i").length;
}
), r.getById=ft(function(e) {
    return p.appendChild(e).id=b, !n.getElementsByName||!n.getElementsByName(b).length;
}
), r.getById?(s.find.ID=function(e, t) {
    if(typeof t.getElementById!==A&&d) {
    var n=t.getElementById(e);
    return n&&n.parentNode?[n]: [];
}
}, s.filter.ID=function(e) {
    var t=e.replace(rt, it);
    return function(e) {
    return e.getAttribute("id")===t;
}
}): (delete s.find.ID, s.filter.ID=function(e) {
    var t=e.replace(rt, it);
    return function(e) {
    var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");
    return n&&n.value===t;
}
}), s.find.TAG=r.getElementsByTagName?function(e, n) {
    return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e): t;
}
:function(e, t) {
    var n, r=[], i=0, s=t.getElementsByTagName(e);
    if("*"===e) {
    while(n=s[i++])1===n.nodeType&&r.push(n);
    return r;
}
return s;
}, s.find.CLASS=r.getElementsByClassName&&function(e, n) {
    return typeof n.getElementsByClassName!==A&&d?n.getElementsByClassName(e): t;
}
, m=[], v=[], (r.qsa=Y.test(n.querySelectorAll))&&(ft(function(e) {
    e.innerHTML="<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length||v.push("\\["+I+"*(?: value|"+F+")"), e.querySelectorAll(":checked").length||v.push(":checked");
}
), ft(function(e) {
    var t=n.createElement("input");
    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length&&v.push("[*^$]="+I+"*(?: ''|\"\")"), e.querySelectorAll(":enabled").length||v.push(":enabled", ":disabled"), e.querySelectorAll("*, :x"), v.push(", .*:");
}
)), (r.matchesSelector=Y.test(g=p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&ft(function(e) {
    r.disconnectedMatch=g.call(e, "div"), g.call(e, "[s!='']: x"), m.push("!=", z);
}
), v=v.length&&RegExp(v.join("|")), m=m.length&&RegExp(m.join("|")), y=Y.test(p.contains)||p.compareDocumentPosition?function(e, t) {
    var n=9===e.nodeType?e.documentElement: e, r=t&&t.parentNode;
    return e===r||!!r&&1===r.nodeType&&!!(n.contains?n.contains(r): e.compareDocumentPosition&&16&e.compareDocumentPosition(r));
}
:function(e, t) {
    if(t)while(t=t.parentNode)if(t===e)return!0;
    return!1;
}
, L=p.compareDocumentPosition?function(e, t) {
    if(e===t)return k=!0, 0;
    var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);
    return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||y(E, e)?-1: t===n||y(E, t)?1:l?j.call(l, e)-j.call(l, t):0:4&i?-1:1:e.compareDocumentPosition?-1:1;
}
:function(e, t) {
    var r, i=0, s=e.parentNode, o=t.parentNode, u=[e], a=[t];
    if(e===t)return k=!0, 0;
    if(!s||!o)return e===n?-1: t===n?1:s?-1:o?1:l?j.call(l, e)-j.call(l, t):0;
    if(s===o)return ct(e, t);
    r=e;
    while(r=r.parentNode)u.unshift(r);
    r=t;
    while(r=r.parentNode)a.unshift(r);
    while(u[i]===a[i])i++;
    return i?ct(u[i], a[i]): u[i]===E?-1:a[i]===E?1:0;
}
, n):h;
}, ot.matches=function(e, t) {
    return ot(e, null, null, t);
}
, ot.matchesSelector=function(e, t) {
    if((e.ownerDocument||e)!==h&&c(e), t=t.replace(J, "='$1']"), !(!r.matchesSelector||!d||m&&m.test(t)||v&&v.test(t)))try {
    var n=g.call(e, t);
    if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n;
}
catch(i) {
}
return ot(t, h, null, [e]).length>0;
}
, ot.contains=function(e, t) {
    return(e.ownerDocument||e)!==h&&c(e), y(e, t);
}
, ot.attr=function(e, n) {
    (e.ownerDocument||e)!==h&&c(e);
    var i=s.attrHandle[n.toLowerCase()], o=i&&M.call(s.attrHandle, n.toLowerCase())?i(e, n, !d): t;
    return o===t?r.attributes||!d?e.getAttribute(n): (o=e.getAttributeNode(n))&&o.specified?o.value:null:o;
}
, ot.error=function(e) {
    throw Error("Syntax error,  unrecognized expression:  "+e);
}
, ot.uniqueSort=function(e) {
    var t, n=[], i=0, s=0;
    if(k=!r.detectDuplicates, l=!r.sortStable&&e.slice(0), e.sort(L), k) {
    while(t=e[s++])t===e[s]&&(i=n.push(s));
    while(i--)e.splice(n[i], 1);
}
return e;
}, o=ot.getText=function(e) {
    var t, n="", r=0, i=e.nodeType;
    if(i) {
    if(1===i||9===i||11===i) {
    if("string"==typeof e.textContent)return e.textContent;
    for(e=e.firstChild;
    e;
    e=e.nextSibling)n+=o(e);
}
else if(3===i||4===i)return e.nodeValue;
}else for(;
    t=e[r];
    r++)n+=o(t);
    return n;
}
, s=ot.selectors= {
    cacheLength: 50, createPseudo:at, match:G, attrHandle: {
}
, find: {
}
, relative: {
    ">":  {
    dir: "parentNode", first:!0;
}
, " ": {
    dir: "parentNode"}
, "+": {
    dir: "previousSibling", first:!0;
}
, "~": {
    dir: "previousSibling"}
}, preFilter: {
    ATTR: function(e) {
    return e[1]=e[1].replace(rt, it), e[3]=(e[4]||e[5]||"").replace(rt, it), "~="===e[2]&&(e[3]=" "+e[3]+" "), e.slice(0, 4);
}
, CHILD: function(e) {
    return e[1]=e[1].toLowerCase(), "nth"===e[1].slice
(0, 3)?(e[3]||ot.error(e[0]), e[4]=+(e[4]?e[5]+(e[6]||1): 2*("even"===e[3]||"odd"===e[3])), e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]), e;
}
, PSEUDO:function(e) {
    var n, r=!e[5]&&e[2];
    return G.CHILD.test(e[0])?null: (e[3]&&e[4]!==t?e[2]=e[4]:r&&K.test(r)&&(n=mt(r, !0))&&(n=r.indexOf(")", r.length-n)-r.length)&&(e[0]=e[0].slice(0, n), e[2]=r.slice(0, n)), e.slice(0, 3));
}
}, filter: {
    TAG: function(e) {
    var t=e.replace(rt, it).toLowerCase();
    return"*"===e?function() {
    return!0;
}
: function(e) {
    return e.nodeName&&e.nodeName.toLowerCase()===t;
}
}, CLASS: function(e) {
    var t=T[e+" "];
    return t||(t=RegExp("(^|"+I+")"+e+"("+I+"|$)"))&&T(e, function(e) {
    return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"");
}
);
}, ATTR: function(e, t, n) {
    return function(r) {
    var i=ot.attr(r, e);
    return null==i?"!="===t: t?(i+="", "="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0, n.length+1)===n+"-":!1):!0;
}
}, CHILD:function(e, t, n, r, i) {
    var s="nth"!==e.slice(0, 3), o="last"!==e.slice(-4), u="of-type"===t;
    return 1===r&&0===i?function(e) {
    return!!e.parentNode;
}
: function(t, n, a) {
    var f, l, c, h, p, d, v=s!==o?"nextSibling": "previousSibling", m=t.parentNode, g=u&&t.nodeName.toLowerCase(), y=!a&&!u;
    if(m) {
    if(s) {
    while(v) {
    c=t;
    while(c=c[v])if(u?c.nodeName.toLowerCase()===g: 1===c.nodeType)return!1;
    d=v="only"===e&&!d&&"nextSibling"}
return!0;
}if(d=[o?m.firstChild: m.lastChild], o&&y) {
    l=m[b]||(m[b]= {
}
), f=l[e]||[], p=f[0]===S&&f[1], h=f[0]===S&&f[2], c=p&&m.childNodes[p];
    while(c=++p&&c&&c[v]||(h=p=0)||d.pop())if(1===c.nodeType&&++h&&c===t) {
    l[e]=[S, p, h];
    break;
}
}else if(y&&(f=(t[b]||(t[b]= {
}
))[e])&&f[0]===S)h=f[1];
    else while(c=++p&&c&&c[v]||(h=p=0)||d.pop())if((u?c.nodeName.toLowerCase()===g: 1===c.nodeType)&&++h&&(y&&((c[b]||(c[b]= {
}
))[e]=[S, h]), c===t))break;
    return h-=i, h===r||0===h%r&&h/r>=0;
}
}}, PSEUDO: function(e, t) {
    var n, r=s.pseudos[e]||s.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo:  "+e);
    return r[b]?r(t): r.length>1?(n=[e, e, "", t], s.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e, n) {
    var i, s=r(e, t), o=s.length;
    while(o--)i=j.call(e, s[o]), e[i]=!(n[i]=s[o]);
}
): function(e) {
    return r(e, 0, n);
}
): r;
}}, pseudos: {
    not: at(function(e) {
    var t=[], n=[], r=a(e.replace(W, "$1"));
    return r[b]?at(function(e, t, n, i) {
    var s, o=r(e, null, i, []), u=e.length;
    while(u--)(s=o[u])&&(e[u]=!(t[u]=s));
}
): function(e, i, s) {
    return t[0]=e, r(t, null, s, n), !n.pop();
}
}), has: at(function(e) {
    return function(t) {
    return ot(e, t).length>0;
}
}), contains: at(function(e) {
    return function(t) {
    return(t.textContent||t.innerText||o(t)).indexOf(e)>-1;
}
}), lang: at(function(e) {
    return Q.test(e||"")||ot.error("unsupported lang:  "+e), e=e.replace(rt, it).toLowerCase(), function(t) {
    var n;
    do if(n=d?t.lang: t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(), n===e||0===n.indexOf(e+"-");
    while((t=t.parentNode)&&1===t.nodeType);
    return!1;
}
}), target: function(t) {
    var n=e.location&&e.location.hash;
    return n&&n.slice(1)===t.id;
}
, root: function(e) {
    return e===p;
}
, focus: function(e) {
    return e===h.activeElement&&(!h.hasFocus||h.hasFocus())&&!!(e.type||e.href||~e.tabIndex);
}
, enabled: function(e) {
    return e.disabled===!1;
}
, disabled: function(e) {
    return e.disabled===!0;
}
, checked: function(e) {
    var t=e.nodeName.toLowerCase();
    return"input"===t&&!!e.checked||"option"===t&&!!e.selected;
}
, selected: function(e) {
    return e.parentNode&&e.parentNode.selectedIndex, e.selected===!0;
}
, empty: function(e) {
    for(e=e.firstChild;
    e;
    e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;
    return!0;
}
, parent: function(e) {
    return!s.pseudos.empty(e);
}
, header: function(e) {
    return tt.test(e.nodeName);
}
, input: function(e) {
    return et.test(e.nodeName);
}
, button: function(e) {
    var t=e.nodeName.toLowerCase();
    return"input"===t&&"button"===e.type||"button"===t;
}
, text: function(e) {
    var t;
    return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type);
}
, first: dt(function() {
    return[0];
}
), last: dt(function(e, t) {
    return[t-1];
}
), eq: dt(function(e, t, n) {
    return[0>n?n+t: n];
}
), even:dt(function(e, t) {
    var n=0;
    for(;
    t>n;
    n+=2)e.push(n);
    return e;
}
), odd: dt(function(e, t) {
    var n=1;
    for(;
    t>n;
    n+=2)e.push(n);
    return e;
}
), lt: dt(function(e, t, n) {
    var r=0>n?n+t: n;
    for(;
    --r>=0;
    )e.push(r);
    return e;
}
), gt: dt(function(e, t, n) {
    var r=0>n?n+t: n;
    for(;
    t>++r;
    )e.push(r);
    return e;
}
);
}}, s.pseudos.nth=s.pseudos.eq;
    for(n in {
    radio: !0, checkbox:!0, file:!0, password:!0, image:!0;
}
)s.pseudos[n]=ht(n);
    for(n in {
    submit: !0, reset:!0;
}
)s.pseudos[n]=pt(n);
    vt.prototype=s.filters=s.pseudos, s.setFilters=new vt;
    a=ot.compile=function(e, t) {
    var n, r=[], i=[], s=C[e+" "];
    if(!s) {
    t||(t=mt(e)), n=t.length;
    while(n--)s=St(t[n]), s[b]?r.push(s): i.push(s);
    s=C(e, xt(i, r));
}
return s;
};
    r.sortStable=b.split("").sort(L).join("")===b, r.detectDuplicates=k, c(), r.sortDetached=ft(function(e) {
    return 1&e.compareDocumentPosition(h.createElement("div"));
}
), ft(function(e) {
    return e.innerHTML="<a href='#'></a>", "#"===e.firstChild.getAttribute("href");
}
)||lt("type|href|height|width", function(e, n, r) {
    return r?t: e.getAttribute(n, "type"===n.toLowerCase()?1:2);
}
), r.attributes&&ft(function(e) {
    return e.innerHTML="<input/>", e.firstChild.setAttribute("value", ""), ""===e.firstChild.getAttribute("value");
}
)||lt("value", function(e, n, r) {
    return r||"input"!==e.nodeName.toLowerCase()?t: e.defaultValue;
}
), ft(function(e) {
    return null==e.getAttribute("disabled");
}
)||lt(F, function(e, n, r) {
    var i;
    return r?t: (i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null;
}
), w.find=ot, w.expr=ot.selectors, w.expr[":"]=w.expr.pseudos, w.unique=ot.uniqueSort, w.text=ot.getText, w.isXMLDoc=ot.isXML, w.contains=ot.contains;
}(e);
    var B= {
}
;
    w.Callbacks=function(e) {
    e="string"==typeof e?B[e]||j(e): w.extend( {
}
, e);
    var n, r, i, s, o, u, a=[], f=!e.once&&[], l=function(t) {
    for(r=e.memory&&t, i=!0, o=u||0, u=0, s=a.length, n=!0;
    a&&s>o;
    o++)if(a[o].apply(t[0], t[1])===!1&&e.stopOnFalse) {
    r=!1;
    break;
}
n=!1, a&&(f?f.length&&l(f.shift()): r?a=[]:c.disable());
}, c= {
    add: function() {
    if(a) {
    var t=a.length;
    (function i(t) {
    w.each(t, function(t, n) {
    var r=w.type(n);
    "function"===r?e.unique&&c.has(n)||a.push(n): n&&n.length&&"string"!==r&&i(n);
}
);
})(arguments), n?s=a.length:r&&(u=t, l(r));
}return this;
}, remove:function() {
    return a&&w.each(arguments, function(e, t) {
    var r;
    while((r=w.inArray(t, a, r))>-1)a.splice(r, 1), n&&(s>=r&&s--, o>=r&&o--);
}
), this;
}, has: function(e) {
    return e?w.inArray(e, a)>-1: !!a&&!!a.length;
}
, empty:function() {
    return a=[], s=0, this;
}
, disable: function() {
    return a=f=r=t, this;
}
, disabled: function() {
    return!a;
}
, lock: function() {
    return f=t, r||c.disable(), this;
}
, locked: function() {
    return!f;
}
, fireWith: function(e, t) {
    return!a||i&&!f||(t=t||[], t=[e, t.slice?t.slice(): t], n?f.push(t):l(t)), this;
}
, fire:function() {
    return c.fireWith(this, arguments), this;
}
, fired: function() {
    return!!i;
}
};
    return c;
}
, w.extend( {
    Deferred: function(e) {
    var t=[["resolve", "done", w.Callbacks("once memory"), "resolved"], ["reject", "fail", w.Callbacks("once memory"), "rejected"], ["notify", "progress", w.Callbacks("memory")]], n="pending", r= {
    state: function() {
    return n;
}
, always: function() {
    return i.done(arguments).fail(arguments), this;
}
, then: function() {
    var e=arguments;
    return w.Deferred(function(n) {
    w.each(t, function(t, s) {
    var o=s[0], u=w.isFunction(e[t])&&e[t];
    i[s[1]](function() {
    var e=u&&u.apply(this, arguments);
    e&&w.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify): n[o+"With"](this===r?n.promise():this, u?[e]:arguments);
}
);
}), e=null;
}).promise();
}, promise:function(e) {
    return null!=e?w.extend(e, r): r;
}
}, i= {
}
;
    return r.pipe=r.then, w.each(t, function(e, s) {
    var o=s[2], u=s[3];
    r[s[1]]=o.add, u&&o.add(function() {
    n=u;
}
, t[1^e][2].disable, t[2][2].lock), i[s[0]]=function() {
    return i[s[0]+"With"](this===i?r: this, arguments), this;
}
, i[s[0]+"With"]=o.fireWith;
}), r.promise(i), e&&e.call(i, i), i;
}, when:function(e) {
    var t=0, n=v.call(arguments), r=n.length, i=1!==r||e&&w.isFunction(e.promise)?r: 0, s=1===i?e:w.Deferred(), o=function(e, t, n) {
    return function(r) {
    t[e]=this, n[e]=arguments.length>1?v.call(arguments): r, n===u?s.notifyWith(t, n):--i||s.resolveWith(t, n);
}
}, u, a, f;
    if(r>1)for(u=Array(r), a=Array(r), f=Array(r);
    r>t;
    t++)n[t]&&w.isFunction(n[t].promise)?n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)): --i;
    return i||s.resolveWith(f, n), s.promise();
}
}), w.support=function(t) {
    var n, r, s, u, a, f, l, c, h, p=o.createElement("div");
    if(p.setAttribute("className", "t"), p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n=p.getElementsByTagName("*")||[], r=p.getElementsByTagName("a")[0], !r||!r.style||!n.length)return t;
    u=o.createElement("select"), f=u.appendChild(o.createElement("option")), s=p.getElementsByTagName("input")[0], r.style.cssText="top: 1px;
    float: left;
    opacity: .5", t.getSetAttribute="t"!==p.className, t.leadingWhitespace=3===p.firstChild.nodeType, t.tbody=!p.getElementsByTagName("tbody").length, t.htmlSerialize=!!p.getElementsByTagName("link").length, t.style=/top/.test(r.getAttribute("style")), t.hrefNormalized="/a"===r.getAttribute("href"), t.opacity=/^0.5/.test(r.style.opacity), t.cssFloat=!!r.style.cssFloat, t.checkOn=!!s.value, t.optSelected=f.selected, t.enctype=!!o.createElement("form").enctype, t.html5Clone="<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout=!1, t.shrinkWrapBlocks=!1, t.pixelPosition=!1, t.deleteExpando=!0, t.noCloneEvent=!0, t.reliableMarginRight=!0, t.boxSizingReliable=!0, s.checked=!0, t.noCloneChecked=s.cloneNode(!0).checked, u.disabled=!0, t.optDisabled=!f.disabled;
    try {
    delete p.test;
}
catch(d) {
    t.deleteExpando=!1;
}
s=o.createElement("input"), s.setAttribute("value", ""), t.input=""===s.getAttribute("value"), s.value="t", s.setAttribute("type", "radio"), t.radioValue="t"===s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), a=o.createDocumentFragment(), a.appendChild(s), t.appendChecked=s.checked, t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent&&(p.attachEvent("onclick", function() {
    t.noCloneEvent=!1;
}
), p.cloneNode(!0).click());
    for(h in {
    submit: !0, change:!0, focusin:!0;
}
)p.setAttribute(l="on"+h, "t"), t[h+"Bubbles"]=l in e||p.attributes[l].expando===!1;
    p.style.backgroundClip="content-box", p.cloneNode(!0).style.backgroundClip="", t.clearCloneStyle="content-box"===p.style.backgroundClip;
    for(h in w(t))break;
    return t.ownLast="0"!==h, w(function() {
    var n, r, s, u="padding: 0;
    margin: 0;
    border: 0;
    display: block;
    box-sizing: content-box;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    ", a=o.getElementsByTagName("body")[0];
    a&&(n=o.createElement("div"), n.style.cssText="border: 0;
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: -9999px;
    margin-top: 1px", a.appendChild(n).appendChild(p), p.innerHTML="<table><tr><td></td><td>t</td></tr></table>", s=p.getElementsByTagName("td"), s[0].style.cssText="padding:0;
    margin: 0;
    border: 0;
    display: none", c=0===s[0].offsetHeight, s[0].style.display="", s[1].style.display="none", t.reliableHiddenOffsets=c&&0===s[0].offsetHeight, p.innerHTML="", p.style.cssText="box-sizing:border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 1px;
    border: 1px;
    display: block;
    width: 4px;
    margin-top: 1%;
    position: absolute;
    top: 1%;
    ", w.swap(a, null!=a.style.zoom? {
    zoom: 1;
}
: {
}
, function() {
    t.boxSizing=4===p.offsetWidth;
}
), e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(p, null)|| {
}
).top, t.boxSizingReliable="4px"===(e.getComputedStyle(p, null)|| {
    width: "4px"}
).width, r=p.appendChild(o.createElement("div")), r.style.cssText=p.style.cssText=u, r.style.marginRight=r.style.width="0", p.style.width="1px", t.reliableMarginRight=!parseFloat((e.getComputedStyle(r, null)|| {
}
).marginRight)), typeof p.style.zoom!==i&&(p.innerHTML="", p.style.cssText=u+"width:1px;
    padding: 1px;
    display: inline;
    zoom: 1", t.inlineBlockNeedsLayout=3===p.offsetWidth, p.style.display="block", p.innerHTML="<div></div>", p.firstChild.style.width="5px", t.shrinkWrapBlocks=3!==p.offsetWidth, t.inlineBlockNeedsLayout&&(a.style.zoom=1)), a.removeChild(n), n=p=s=r=null);
}
), n=u=a=f=r=s=null, t;
}( {
}
);
    var F=/(?: \ {
    [\s\S]*\;
}
|\[[\s\S]*\])$/, I=/([A-Z])/g;
    w.extend( {
    cache:  {
}
, noData: {
    applet: !0, embed:!0, object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}
, hasData:function(e) {
    return e=e.nodeType?w.cache[e[w.expando]]: e[w.expando], !!e&&!z(e);
}
, data:function(e, t, n) {
    return q(e, t, n);
}
, removeData: function(e, t) {
    return R(e, t);
}
, _data: function(e, t, n) {
    return q(e, t, n, !0);
}
, _removeData: function(e, t) {
    return R(e, t, !0);
}
, acceptData: function(e) {
    if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;
    var t=e.nodeName&&w.noData[e.nodeName.toLowerCase()];
    return!t||t!==!0&&e.getAttribute("classid")===t;
}
}), w.fn.extend( {
    data: function(e, n) {
    var r, i, s=null, o=0, u=this[0];
    if(e===t) {
    if(this.length&&(s=w.data(u), 1===u.nodeType&&!w._data(u, "parsedAttrs"))) {
    for(r=u.attributes;
    r.length>o;
    o++)i=r[o].name, 0===i.indexOf("data-")&&(i=w.camelCase(i.slice(5)), U(u, i, s[i]));
    w._data(u, "parsedAttrs", !0);
}
return s;
}return"object"==typeof e?this.each(function() {
    w.data(this, e);
}
): arguments.length>1?this.each(function() {
    w.data(this, e, n);
}
): u?U(u, e, w.data(u, e)):null;
}, removeData:function(e) {
    return this.each(function() {
    w.removeData(this, e);
}
);
}});
    w.extend( {
    queue: function(e, n, r) {
    var i;
    return e?(n=(n||"fx")+"queue", i=w._data(e, n), r&&(!i||w.isArray(r)?i=w._data(e, n, w.makeArray(r)): i.push(r)), i||[]):t;
}
, dequeue:function(e, t) {
    t=t||"fx";
    var n=w.queue(e, t), r=n.length, i=n.shift(), s=w._queueHooks(e, t), o=function() {
    w.dequeue(e, t);
}
;
    "inprogress"===i&&(i=n.shift(), r--), i&&("fx"===t&&n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r&&s&&s.empty.fire();
}
, _queueHooks: function(e, t) {
    var n=t+"queueHooks";
    return w._data(e, n)||w._data(e, n,  {
    empty: w.Callbacks("once memory").add(function() {
    w._removeData(e, t+"queue"), w._removeData(e, n);
}
);
});
}}), w.fn.extend( {
    queue: function(e, n) {
    var r=2;
    return"string"!=typeof e&&(n=e, e="fx", r--), r>arguments.length?w.queue(this[0], e): n===t?this:this.each(function() {
    var t=w.queue(this, e, n);
    w._queueHooks(this, e), "fx"===e&&"inprogress"!==t[0]&&w.dequeue(this, e);
}
);
}, dequeue: function(e) {
    return this.each(function() {
    w.dequeue(this, e);
}
);
}, delay: function(e, t) {
    return e=w.fx?w.fx.speeds[e]||e: e, t=t||"fx", this.queue(t, function(t, n) {
    var r=setTimeout(t, e);
    n.stop=function() {
    clearTimeout(r);
}
});
}, clearQueue: function(e) {
    return this.queue(e||"fx", []);
}
, promise: function(e, n) {
    var r, i=1, s=w.Deferred(), o=this, u=this.length, a=function() {
    --i||s.resolveWith(o, [o]);
}
;
    "string"!=typeof e&&(n=e, e=t), e=e||"fx";
    while(u--)r=w._data(o[u], e+"queueHooks"), r&&r.empty&&(i++, r.empty.add(a));
    return a(), s.promise(n);
}
});
    var W, X, V=/[\t\r\n\f]/g, $=/\r/g, J=/^(?: input|select|textarea|button|object)$/i, K=/^(?:a|area)$/i, Q=/^(?:checked|selected)$/i, G=w.support.getSetAttribute, Y=w.support.input;
    w.fn.extend( {
    attr: function(e, t) {
    return w.access(this, w.attr, e, t, arguments.length>1);
}
, removeAttr: function(e) {
    return this.each(function() {
    w.removeAttr(this, e);
}
);
}, prop: function(e, t) {
    return w.access(this, w.prop, e, t, arguments.length>1);
}
, removeProp: function(e) {
    return e=w.propFix[e]||e, this.each(function() {
    try {
    this[e]=t, delete this[e];
}
catch(n) {
}
}
);
}, addClass: function(e) {
    var t, n, r, i, s, o=0, u=this.length, a="string"==typeof e&&e;
    if(w.isFunction(e))return this.each(function(t) {
    w(this).addClass(e.call(this, t, this.className));
}
);
    if(a)for(t=(e||"").match(S)||[];
    u>o;
    o++)if(n=this[o], r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(V, " "): " ")) {
    s=0;
    while(i=t[s++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");
    n.className=w.trim(r);
}
return this;
}, removeClass: function(e) {
    var t, n, r, i, s, o=0, u=this.length, a=0===arguments.length||"string"==typeof e&&e;
    if(w.isFunction(e))return this.each(function(t) {
    w(this).removeClass(e.call(this, t, this.className));
}
);
    if(a)for(t=(e||"").match(S)||[];
    u>o;
    o++)if(n=this[o], r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(V, " "): "")) {
    s=0;
    while(i=t[s++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" ", " ");
    n.className=e?w.trim(r): ""}
return this;
}, toggleClass:function(e, t) {
    var n=typeof e;
    return"boolean"==typeof t&&"string"===n?t?this.addClass(e): this.removeClass(e):w.isFunction(e)?this.each(function(n) {
    w(this).toggleClass(e.call(this, n, this.className, t), t);
}
): this.each(function() {
    if("string"===n) {
    var t, r=0, s=w(this), o=e.match(S)||[];
    while(t=o[r++])s.hasClass(t)?s.removeClass(t): s.addClass(t);
}
else(n===i||"boolean"===n)&&(this.className&&w._data(this, "__className__", this.className), this.className=this.className||e===!1?"":w._data(this, "__className__")||"");
});
}, hasClass:function(e) {
    var t=" "+e+" ", n=0, r=this.length;
    for(;
    r>n;
    n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(V, " ").indexOf(t)>=0)return!0;
    return!1;
}
, val: function(e) {
    var n, r, i, s=this[0];
    if(arguments.length)return i=w.isFunction(e), this.each(function(n) {
    var s;
    1===this.nodeType&&(s=i?e.call(this, n, w(this).val()): e, null==s?s="":"number"==typeof s?s+="":w.isArray(s)&&(s=w.map(s, function(e) {
    return null==e?"": e+""}
)), r=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()], r&&"set"in r&&r.set(this, s, "value")!==t||(this.value=s));
});
    if(s)return r=w.valHooks[s.type]||w.valHooks[s.nodeName.toLowerCase()], r&&"get"in r&&(n=r.get(s, "value"))!==t?n: (n=s.value, "string"==typeof n?n.replace($, ""):null==n?"":n);
}
}), w.extend( {
    valHooks:  {
    option:  {
    get: function(e) {
    var t=w.find.attr(e, "value");
    return null!=t?t: e.text;
}
}, select: {
    get: function(e) {
    var t, n, r=e.options, i=e.selectedIndex, s="select-one"===e.type||0>i, o=s?null: [], u=s?i+1:r.length, a=0>i?u:s?i:0;
    for(;
    u>a;
    a++)if(n=r[a], !(!n.selected&&a!==i||(w.support.optDisabled?n.disabled: null!==n.getAttribute("disabled"))||n.parentNode.disabled&&w.nodeName(n.parentNode, "optgroup"))) {
    if(t=w(n).val(), s)return t;
    o.push(t);
}
return o;
}, set: function(e, t) {
    var n, r, i=e.options, s=w.makeArray(t), o=i.length;
    while(o--)r=i[o], (r.selected=w.inArray(w(r).val(), s)>=0)&&(n=!0);
    return n||(e.selectedIndex=-1), s;
}
}}, attr: function(e, n, r) {
    var s, o, u=e.nodeType;
    if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?w.prop(e, n, r): (1===u&&w.isXMLDoc(e)||(n=n.toLowerCase(), s=w.attrHooks[n]||(w.expr.match.bool.test(n)?X:W)), r===t?s&&"get"in s&&null!==(o=s.get(e, n))?o:(o=w.find.attr(e, n), null==o?t:o):null!==r?s&&"set"in s&&(o=s.set(e, r, n))!==t?o:(e.setAttribute(n, r+""), r):(w.removeAttr(e, n), t));
}
, removeAttr:function(e, t) {
    var n, r, i=0, s=t&&t.match(S);
    if(s&&1===e.nodeType)while(n=s[i++])r=w.propFix[n]||n, w.expr.match.bool.test(n)?Y&&G||!Q.test(n)?e[r]=!1: e[w.camelCase("default-"+n)]=e[r]=!1:w.attr(e, n, ""), e.removeAttribute(G?n:r);
}
, attrHooks: {
    type:  {
    set: function(e, t) {
    if(!w.support.radioValue&&"radio"===t&&w.nodeName(e, "input")) {
    var n=e.value;
    return e.setAttribute("type", t), n&&(e.value=n), t;
}
}}}, propFix:  {
    "for": "htmlFor", "class":"className"}
, prop:function(e, n, r) {
    var i, s, o, u=e.nodeType;
    if(e&&3!==u&&8!==u&&2!==u)return o=1!==u||!w.isXMLDoc(e), o&&(n=w.propFix[n]||n, s=w.propHooks[n]), r!==t?s&&"set"in s&&(i=s.set(e, r, n))!==t?i: e[n]=r:s&&"get"in s&&null!==(i=s.get(e, n))?i:e[n];
}
, propHooks: {
    tabIndex:  {
    get: function(e) {
    var t=w.find.attr(e, "tabindex");
    return t?parseInt(t, 10): J.test(e.nodeName)||K.test(e.nodeName)&&e.href?0:-1;
}
}}}), X= {
    set: function(e, t, n) {
    return t===!1?w.removeAttr(e, n): Y&&G||!Q.test(n)?e.setAttribute(!G&&w.propFix[n]||n, n):e[w.camelCase("default-"+n)]=e[n]=!0, n;
}
}, w.each(w.expr.match.bool.source.match(/\w+/g), function(e, n) {
    var r=w.expr.attrHandle[n]||w.find.attr;
    w.expr.attrHandle[n]=Y&&G||!Q.test(n)?function(e, n, i) {
    var s=w.expr.attrHandle[n], o=i?t: (w.expr.attrHandle[n]=t)!=r(e, n, i)?n.toLowerCase():null;
    return w.expr.attrHandle[n]=s, o;
}
: function(e, n, r) {
    return r?t: e[w.camelCase("default-"+n)]?n.toLowerCase():null;
}
}), Y&&G||(w.attrHooks.value= {
    set: function(e, n, r) {
    return w.nodeName(e, "input")?(e.defaultValue=n, t): W&&W.set(e, n, r);
}
}), G||(W= {
    set: function(e, n, r) {
    var i=e.getAttributeNode(r);
    return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)), i.value=n+="", "value"===r||n===e.getAttribute(r)?n: t;
}
}, w.expr.attrHandle.id=w.expr.attrHandle.name=w.expr.attrHandle.coords=function(e, n, r) {
    var i;
    return r?t: (i=e.getAttributeNode(n))&&""!==i.value?i.value:null;
}
, w.valHooks.button= {
    get: function(e, n) {
    var r=e.getAttributeNode(n);
    return r&&r.specified?r.value: t;
}
, set:W.set;
}, w.attrHooks.contenteditable= {
    set: function(e, t, n) {
    W.set(e, ""===t?!1: t, n);
}
}, w.each(["width", "height"], function(e, n) {
    w.attrHooks[n]= {
    set: function(e, r) {
    return""===r?(e.setAttribute(n, "auto"), r): t;
}
}})), w.support.hrefNormalized||w.each(["href", "src"], function(e, t) {
    w.propHooks[t]= {
    get: function(e) {
    return e.getAttribute(t, 4);
}
}}), w.support.style||(w.attrHooks.style= {
    get: function(e) {
    return e.style.cssText||t;
}
, set: function(e, t) {
    return e.style.cssText=t+""}
}), w.support.optSelected||(w.propHooks.selected= {
    get: function(e) {
    var t=e.parentNode;
    return t&&(t.selectedIndex, t.parentNode&&t.parentNode.selectedIndex), null;
}
}), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    w.propFix[this.toLowerCase()]=this;
}
), w.support.enctype||(w.propFix.enctype="encoding"), w.each(["radio", "checkbox"], function() {
    w.valHooks[this]= {
    set: function(e, n) {
    return w.isArray(n)?e.checked=w.inArray(w(e).val(), n)>=0: t;
}
}, w.support.checkOn||(w.valHooks[this].get=function(e) {
    return null===e.getAttribute("value")?"on": e.value;
}
);
});
    var Z=/^(?: input|select|textarea)$/i, et=/^key/, tt=/^(?:mouse|contextmenu)|click/, nt=/^(?:focusinfocus|focusoutblur)$/, rt=/^([^.]*)(?:\.(.+)|)$/;
    w.event= {
    global:  {
}
, add:function(e, n, r, s, o) {
    var u, a, f, l, c, h, p, d, v, m, g, y=w._data(e);
    if(y) {
    r.handler&&(l=r, r=l.handler, o=l.selector), r.guid||(r.guid=w.guid++), (a=y.events)||(a=y.events= {
}
), (h=y.handle)||(h=y.handle=function(e) {
    return typeof w===i||e&&w.event.triggered===e.type?t: w.event.dispatch.apply(h.elem, arguments);
}
, h.elem=e), n=(n||"").match(S)||[""], f=n.length;
    while(f--)u=rt.exec(n[f])||[], v=g=u[1], m=(u[2]||"").split(".").sort(), v&&(c=w.event.special[v]|| {
}
, v=(o?c.delegateType: c.bindType)||v, c=w.event.special[v]|| {
}
, p=w.extend( {
    type: v, origType:g, data:s, handler:r, guid:r.guid, selector:o, needsContext:o&&w.expr.match.needsContext.test(o), namespace:m.join(".");
}
, l), (d=a[v])||(d=a[v]=[], d.delegateCount=0, c.setup&&c.setup.call(e, s, m, h)!==!1||(e.addEventListener?e.addEventListener(v, h, !1):e.attachEvent&&e.attachEvent("on"+v, h))), c.add&&(c.add.call(e, p), p.handler.guid||(p.handler.guid=r.guid)), o?d.splice(d.delegateCount++, 0, p):d.push(p), w.event.global[v]=!0);
    e=null;
}
}, remove: function(e, t, n, r, i) {
    var s, o, u, a, f, l, c, h, p, d, v, m=w.hasData(e)&&w._data(e);
    if(m&&(l=m.events)) {
    t=(t||"").match(S)||[""], f=t.length;
    while(f--)if(u=rt.exec(t[f])||[], p=v=u[1], d=(u[2]||"").split(".").sort(), p) {
    c=w.event.special[p]|| {
}
, p=(r?c.delegateType: c.bindType)||p, h=l[p]||[], u=u[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"), a=s=h.length;
    while(s--)o=h[s], !i&&v!==o.origType||n&&n.guid!==o.guid||u&&!u.test(o.namespace)||r&&r!==o.selector&&("**"!==r||!o.selector)||(h.splice(s, 1), o.selector&&h.delegateCount--, c.remove&&c.remove.call(e, o));
    a&&!h.length&&(c.teardown&&c.teardown.call(e, d, m.handle)!==!1||w.removeEvent(e, p, m.handle), delete l[p]);
}
else for(p in l)w.event.remove(e, p+t[f], n, r, !0);
    w.isEmptyObject(l)&&(delete m.handle, w._removeData(e, "events"));
}
}, trigger: function(n, r, i, s) {
    var u, a, f, l, c, h, p, d=[i||o], v=y.call(n, "type")?n.type: n, m=y.call(n, "namespace")?n.namespace.split("."):[];
    if(f=h=i=i||o, 3!==i.nodeType&&8!==i.nodeType&&!nt.test(v+w.event.triggered)&&(v.indexOf(".")>=0&&(m=v.split("."), v=m.shift(), m.sort()), a=0>v.indexOf(": ")&&"on"+v, n=n[w.expando]?n:new w.Event(v, "object"==typeof n&&n), n.isTrigger=s?2:3, n.namespace=m.join("."), n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null, n.result=t, n.target||(n.target=i), r=null==r?[n]:w.makeArray(r, [n]), c=w.event.special[v]|| {
}
, s||!c.trigger||c.trigger.apply(i, r)!==!1)) {
    if(!s&&!c.noBubble&&!w.isWindow(i)) {
    for(l=c.delegateType||v, nt.test(l+v)||(f=f.parentNode);
    f;
    f=f.parentNode)d.push(f), h=f;
    h===(i.ownerDocument||o)&&d.push(h.defaultView||h.parentWindow||e);
}
p=0;
    while((f=d[p++])&&!n.isPropagationStopped())n.type=p>1?l: c.bindType||v, u=(w._data(f, "events")|| {
}
)[n.type]&&w._data(f, "handle"), u&&u.apply(f, r), u=a&&f[a], u&&w.acceptData(f)&&u.apply&&u.apply(f, r)===!1&&n.preventDefault();
    if(n.type=v, !s&&!n.isDefaultPrevented()&&(!c._default||c._default.apply(d.pop(), r)===!1)&&w.acceptData(i)&&a&&i[v]&&!w.isWindow(i)) {
    h=i[a], h&&(i[a]=null), w.event.triggered=v;
    try {
    i[v]();
}
catch(g) {
}
w.event.triggered=t, h&&(i[a]=h);
}
return n.result;
}}, dispatch: function(e) {
    e=w.event.fix(e);
    var n, r, i, s, o, u=[], a=v.call(arguments), f=(w._data(this, "events")|| {
}
)[e.type]||[], l=w.event.special[e.type]|| {
}
;
    if(a[0]=e, e.delegateTarget=this, !l.preDispatch||l.preDispatch.call(this, e)!==!1) {
    u=w.event.handlers.call(this, e, f), n=0;
    while((s=u[n++])&&!e.isPropagationStopped()) {
    e.currentTarget=s.elem, o=0;
    while((i=s.handlers[o++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i, e.data=i.data, r=((w.event.special[i.origType]|| {
}
).handle||i.handler).apply(s.elem, a), r!==t&&(e.result=r)===!1&&(e.preventDefault(), e.stopPropagation()));
}
return l.postDispatch&&l.postDispatch.call(this, e), e.result;
}}, handlers: function(e, n) {
    var r, i, s, o, u=[], a=n.delegateCount, f=e.target;
    if(a&&f.nodeType&&(!e.button||"click"!==e.type))for(;
    f!=this;
    f=f.parentNode||this)if(1===f.nodeType&&(f.disabled!==!0||"click"!==e.type)) {
    for(s=[], o=0;
    a>o;
    o++)i=n[o], r=i.selector+" ", s[r]===t&&(s[r]=i.needsContext?w(r, this).index(f)>=0: w.find(r, this, null, [f]).length), s[r]&&s.push(i);
    s.length&&u.push( {
    elem: f, handlers:s;
}
);
}return n.length>a&&u.push( {
    elem: this, handlers:n.slice(a);
}
), u;
}, fix:function(e) {
    if(e[w.expando])return e;
    var t, n, r, i=e.type, s=e, u=this.fixHooks[i];
    u||(this.fixHooks[i]=u=tt.test(i)?this.mouseHooks: et.test(i)?this.keyHooks: {
}
), r=u.props?this.props.concat(u.props):this.props, e=new w.Event(s), t=r.length;
    while(t--)n=r[t], e[n]=s[n];
    return e.target||(e.target=s.srcElement||o), 3===e.target.nodeType&&(e.target=e.target.parentNode), e.metaKey=!!e.metaKey, u.filter?u.filter(e, s): e;
}
, props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {
}
, keyHooks: {
    props: "char charCode key keyCode".split(" "), filter:function(e, t) {
    return null==e.which&&(e.which=null!=t.charCode?t.charCode: t.keyCode), e;
}
}, mouseHooks: {
    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter:function(e, n) {
    var r, i, s, u=n.button, a=n.fromElement;
    return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o, s=i.documentElement, r=i.body, e.pageX=n.clientX+(s&&s.scrollLeft||r&&r.scrollLeft||0)-(s&&s.clientLeft||r&&r.clientLeft||0), e.pageY=n.clientY+(s&&s.scrollTop||r&&r.scrollTop||0)-(s&&s.clientTop||r&&r.clientTop||0)), !e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement: a), e.which||u===t||(e.which=1&u?1:2&u?3:4&u?2:0), e;
}
}, special: {
    load:  {
    noBubble: !0;
}
, focus: {
    trigger: function() {
    if(this!==ot()&&this.focus)try {
    return this.focus(), !1;
}
catch(e) {
}
}
, delegateType: "focusin"}, blur: {
    trigger: function() {
    return this===ot()&&this.blur?(this.blur(), !1): t;
}
, delegateType:"focusout"}, click: {
    trigger: function() {
    return w.nodeName(this, "input")&&"checkbox"===this.type&&this.click?(this.click(), !1): t;
}
, _default:function(e) {
    return w.nodeName(e.target, "a");
}
}, beforeunload:  {
    postDispatch: function(e) {
    e.result!==t&&(e.originalEvent.returnValue=e.result);
}
}}, simulate: function(e, t, n, r) {
    var i=w.extend(new w.Event, n,  {
    type: e, isSimulated:!0, originalEvent: {
}
}
);
    r?w.event.trigger(i, null, t): w.event.dispatch.call(t, i), i.isDefaultPrevented()&&n.preventDefault();
}
}, w.removeEvent=o.removeEventListener?function(e, t, n) {
    e.removeEventListener&&e.removeEventListener(t, n, !1);
}
: function(e, t, n) {
    var r="on"+t;
    e.detachEvent&&(typeof e[r]===i&&(e[r]=null), e.detachEvent(r, n));
}
, w.Event=function(e, n) {
    return this instanceof w.Event?(e&&e.type?(this.originalEvent=e, this.type=e.type, this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it: st):this.type=e, n&&w.extend(this, n), this.timeStamp=e&&e.timeStamp||w.now(), this[w.expando]=!0, t):new w.Event(e, n);
}
, w.Event.prototype= {
    isDefaultPrevented: st, isPropagationStopped:st, isImmediatePropagationStopped:st, preventDefault:function() {
    var e=this.originalEvent;
    this.isDefaultPrevented=it, e&&(e.preventDefault?e.preventDefault(): e.returnValue=!1);
}
, stopPropagation:function() {
    var e=this.originalEvent;
    this.isPropagationStopped=it, e&&(e.stopPropagation&&e.stopPropagation(), e.cancelBubble=!0);
}
, stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped=it, this.stopPropagation();
}
}, w.each( {
    mouseenter: "mouseover", mouseleave:"mouseout"}
, function(e, t) {
    w.event.special[e]= {
    delegateType: t, bindType:t, handle:function(e) {
    var n, r=this, i=e.relatedTarget, s=e.handleObj;
    return(!i||i!==r&&!w.contains(r, i))&&(e.type=s.origType, n=s.handler.apply(this, arguments), e.type=t), n;
}
}}), w.support.submitBubbles||(w.event.special.submit= {
    setup: function() {
    return w.nodeName(this, "form")?!1: (w.event.add(this, "click._submit keypress._submit", function(e) {
    var n=e.target, r=w.nodeName(n, "input")||w.nodeName(n, "button")?n.form: t;
    r&&!w._data(r, "submitBubbles")&&(w.event.add(r, "submit._submit", function(e) {
    e._submit_bubble=!0;
}
), w._data(r, "submitBubbles", !0));
}), t);
}, postDispatch: function(e) {
    e._submit_bubble&&(delete e._submit_bubble, this.parentNode&&!e.isTrigger&&w.event.simulate("submit", this.parentNode, e, !0));
}
, teardown: function() {
    return w.nodeName(this, "form")?!1: (w.event.remove(this, "._submit"), t);
}
}), w.support.changeBubbles||(w.event.special.change= {
    setup: function() {
    return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(w.event.add(this, "propertychange._change", function(e) {
    "checked"===e.originalEvent.propertyName&&(this._just_changed=!0);
}
), w.event.add(this, "click._change", function(e) {
    this._just_changed&&!e.isTrigger&&(this._just_changed=!1), w.event.simulate("change", this, e, !0);
}
)), !1): (w.event.add(this, "beforeactivate._change", function(e) {
    var t=e.target;
    Z.test(t.nodeName)&&!w._data(t, "changeBubbles")&&(w.event.add(t, "change._change", function(e) {
    !this.parentNode||e.isSimulated||e.isTrigger||w.event.simulate("change", this.parentNode, e, !0);
}
), w._data(t, "changeBubbles", !0));
}), t);
}, handle: function(e) {
    var n=e.target;
    return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this, arguments): t;
}
, teardown:function() {
    return w.event.remove(this, "._change"), !Z.test(this.nodeName);
}
}), w.support.focusinBubbles||w.each( {
    focus: "focusin", blur:"focusout"}
, function(e, t) {
    var n=0, r=function(e) {
    w.event.simulate(t, e.target, w.event.fix(e), !0);
}
;
    w.event.special[t]= {
    setup: function() {
    0===n++&&o.addEventListener(e, r, !0);
}
, teardown: function() {
    0===--n&&o.removeEventListener(e, r, !0);
}
}}), w.fn.extend( {
    on: function(e, n, r, i, s) {
    var o, u;
    if("object"==typeof e) {
    "string"!=typeof n&&(r=r||n, n=t);
    for(o in e)this.on(o, n, r, e[o], s);
    return this;
}
if(null==r&&null==i?(i=n, r=n=t): null==i&&("string"==typeof n?(i=r, r=t):(i=r, r=n, n=t)), i===!1)i=st;
    else if(!i)return this;
    return 1===s&&(u=i, i=function(e) {
    return w().off(e), u.apply(this, arguments);
}
, i.guid=u.guid||(u.guid=w.guid++)), this.each(function() {
    w.event.add(this, e, i, r, n);
}
);
}, one: function(e, t, n, r) {
    return this.on(e, t, n, r, 1);
}
, off: function(e, n, r) {
    var i, s;
    if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj, w(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace: i.origType, i.selector, i.handler), this;
    if("object"==typeof e) {
    for(s in e)this.off(s, n, e[s]);
    return this;
}
return(n===!1||"function"==typeof n)&&(r=n, n=t), r===!1&&(r=st), this.each(function() {
    w.event.remove(this, e, r, n);
}
);
}, trigger: function(e, t) {
    return this.each(function() {
    w.event.trigger(e, t, this);
}
);
}, triggerHandler: function(e, n) {
    var r=this[0];
    return r?w.event.trigger(e, n, r, !0): t;
}
});
    var ut=/^.[^: #\[\., ]*$/, at=/^(?:parents|prev(?:Until|All))/, ft=w.expr.match.needsContext, lt= {
    children: !0, contents:!0, next:!0, prev:!0;
}
;
    w.fn.extend( {
    find: function(e) {
    var t, n=[], r=this, i=r.length;
    if("string"!=typeof e)return this.pushStack(w(e).filter(function() {
    for(t=0;
    i>t;
    t++)if(w.contains(r[t], this))return!0;
}
));
    for(t=0;
    i>t;
    t++)w.find(e, r[t], n);
    return n=this.pushStack(i>1?w.unique(n): n), n.selector=this.selector?this.selector+" "+e:e, n;
}
, has:function(e) {
    var t, n=w(e, this), r=n.length;
    return this.filter(function() {
    for(t=0;
    r>t;
    t++)if(w.contains(this, n[t]))return!0;
}
);
}, not: function(e) {
    return this.pushStack(ht(this, e||[], !0));
}
, filter: function(e) {
    return this.pushStack(ht(this, e||[], !1));
}
, is: function(e) {
    return!!ht(this, "string"==typeof e&&ft.test(e)?w(e): e||[], !1).length;
}
, closest:function(e, t) {
    var n, r=0, i=this.length, s=[], o=ft.test(e)||"string"!=typeof e?w(e, t||this.context): 0;
    for(;
    i>r;
    r++)for(n=this[r];
    n&&n!==t;
    n=n.parentNode)if(11>n.nodeType&&(o?o.index(n)>-1: 1===n.nodeType&&w.find.matchesSelector(n, e))) {
    n=s.push(n);
    break;
}
return this.pushStack(s.length>1?w.unique(s): s);
}, index:function(e) {
    return e?"string"==typeof e?w.inArray(this[0], w(e)): w.inArray(e.jquery?e[0]:e, this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;
}
, add:function(e, t) {
    var n="string"==typeof e?w(e, t): w.makeArray(e&&e.nodeType?[e]:e), r=w.merge(this.get(), n);
    return this.pushStack(w.unique(r));
}
, addBack: function(e) {
    return this.add(null==e?this.prevObject: this.prevObject.filter(e));
}
});
    w.each( {
    parent: function(e) {
    var t=
e.parentNode;
    return t&&11!==t.nodeType?t: null;
}
, parents:function(e) {
    return w.dir(e, "parentNode");
}
, parentsUntil: function(e, t, n) {
    return w.dir(e, "parentNode", n);
}
, next: function(e) {
    return ct(e, "nextSibling");
}
, prev: function(e) {
    return ct(e, "previousSibling");
}
, nextAll: function(e) {
    return w.dir(e, "nextSibling");
}
, prevAll: function(e) {
    return w.dir(e, "previousSibling");
}
, nextUntil: function(e, t, n) {
    return w.dir(e, "nextSibling", n);
}
, prevUntil: function(e, t, n) {
    return w.dir(e, "previousSibling", n);
}
, siblings: function(e) {
    return w.sibling((e.parentNode|| {
}
).firstChild, e);
}
, children: function(e) {
    return w.sibling(e.firstChild);
}
, contents: function(e) {
    return w.nodeName(e, "iframe")?e.contentDocument||e.contentWindow.document: w.merge([], e.childNodes);
}
}, function(e, t) {
    w.fn[e]=function(n, r) {
    var i=w.map(this, t, n);
    return"Until"!==e.slice(-5)&&(r=n), r&&"string"==typeof r&&(i=w.filter(r, i)), this.length>1&&(lt[e]||(i=w.unique(i)), at.test(e)&&(i=i.reverse())), this.pushStack(i);
}
}), w.extend( {
    filter: function(e, t, n) {
    var r=t[0];
    return n&&(e=": not("+e+")"), 1===t.length&&1===r.nodeType?w.find.matchesSelector(r, e)?[r]:[]:w.find.matches(e, w.grep(t, function(e) {
    return 1===e.nodeType;
}
));
}, dir: function(e, n, r) {
    var i=[], s=e[n];
    while(s&&9!==s.nodeType&&(r===t||1!==s.nodeType||!w(s).is(r)))1===s.nodeType&&i.push(s), s=s[n];
    return i;
}
, sibling: function(e, t) {
    var n=[];
    for(;
    e;
    e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);
    return n;
}
});
    var dt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", vt=/ jQuery\d+="(?: null|\d+)"/g, mt=RegExp("<(?:"+dt+")[\\s/>]", "i"), gt=/^\s+/, yt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt=/<([\w:]+)/, wt=/<tbody/i, Et=/<|&#?\w+;
    /, St=/<(?: script|style|link)/i, xt=/^(?:checkbox|radio)$/i, Tt=/checked\s*(?:[^=]|=\s*.checked.)/i, Nt=/^$|\/(?:java|ecma)script/i, Ct=/^true\/(.*)/, kt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Lt= {
    option: [1, "<select multiple='multiple'>", "</select>"], legend:[1, "<fieldset>", "</fieldset>"], area:[1, "<map>", "</map>"], param:[1, "<object>", "</object>"], thead:[1, "<table>", "</table>"], tr:[2, "<table><tbody>", "</tbody></table>"], col:[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], _default:w.support.htmlSerialize?[0, "", ""]:[1, "X<div>", "</div>"];
}
, At=pt(o), Ot=At.appendChild(o.createElement("div"));
    Lt.optgroup=Lt.option, Lt.tbody=Lt.tfoot=Lt.colgroup=Lt.caption=Lt.thead, Lt.th=Lt.td, w.fn.extend( {
    text: function(e) {
    return w.access(this, function(e) {
    return e===t?w.text(this): this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e));
}
, null, e, arguments.length);
}, append:function() {
    return this.domManip(arguments, function(e) {
    if(1===this.nodeType||11===this.nodeType||9===this.nodeType) {
    var t=Mt(this, e);
    t.appendChild(e);
}
});
}, prepend: function() {
    return this.domManip(arguments, function(e) {
    if(1===this.nodeType||11===this.nodeType||9===this.nodeType) {
    var t=Mt(this, e);
    t.insertBefore(e, t.firstChild);
}
});
}, before: function() {
    return this.domManip(arguments, function(e) {
    this.parentNode&&this.parentNode.insertBefore(e, this);
}
);
}, after: function() {
    return this.domManip(arguments, function(e) {
    this.parentNode&&this.parentNode.insertBefore(e, this.nextSibling);
}
);
}, remove: function(e, t) {
    var n, r=e?w.filter(e, this): this, i=0;
    for(;
    null!=(n=r[i]);
    i++)t||1!==n.nodeType||w.cleanData(jt(n)), n.parentNode&&(t&&w.contains(n.ownerDocument, n)&&Pt(jt(n, "script")), n.parentNode.removeChild(n));
    return this;
}
, empty: function() {
    var e, t=0;
    for(;
    null!=(e=this[t]);
    t++) {
    1===e.nodeType&&w.cleanData(jt(e, !1));
    while(e.firstChild)e.removeChild(e.firstChild);
    e.options&&w.nodeName(e, "select")&&(e.options.length=0);
}
return this;
}, clone: function(e, t) {
    return e=null==e?!1: e, t=null==t?e:t, this.map(function() {
    return w.clone(this, e, t);
}
);
}, html: function(e) {
    return w.access(this, function(e) {
    var n=this[0]|| {
}
, r=0, i=this.length;
    if(e===t)return 1===n.nodeType?n.innerHTML.replace(vt, ""): t;
    if(!("string"!=typeof e||St.test(e)||!w.support.htmlSerialize&&mt.test(e)||!w.support.leadingWhitespace&&gt.test(e)||Lt[(bt.exec(e)||["", ""])[1].toLowerCase()])) {
    e=e.replace(yt, "<$1></$2>");
    try {
    for(;
    i>r;
    r++)n=this[r]|| {
}
, 1===n.nodeType&&(w.cleanData(jt(n, !1)), n.innerHTML=e);
    n=0;
}
catch(s) {
}
}
n&&this.empty().append(e);
}, null, e, arguments.length);
}, replaceWith: function() {
    var e=w.map(this, function(e) {
    return[e.nextSibling, e.parentNode];
}
), t=0;
    return this.domManip(arguments, function(n) {
    var r=e[t++], i=e[t++];
    i&&(r&&r.parentNode!==i&&(r=this.nextSibling), w(this).remove(), i.insertBefore(n, r));
}
, !0), t?this: this.remove();
}, detach:function(e) {
    return this.remove(e, !0);
}
, domManip: function(e, t, n) {
    e=p.apply([], e);
    var r, i, s, o, u, a, f=0, l=this.length, c=this, h=l-1, d=e[0], v=w.isFunction(d);
    if(v||!(1>=l||"string"!=typeof d||w.support.checkClone)&&Tt.test(d))return this.each(function(r) {
    var i=c.eq(r);
    v&&(e[0]=d.call(this, r, i.html())), i.domManip(e, t, n);
}
);
    if(l&&(a=w.buildFragment(e, this[0].ownerDocument, !1, !n&&this), r=a.firstChild, 1===a.childNodes.length&&(a=r), r)) {
    for(o=w.map(jt(a, "script"), _t), s=o.length;
    l>f;
    f++)i=a, f!==h&&(i=w.clone(i, !0, !0), s&&w.merge(o, jt(i, "script"))), t.call(this[f], i, f);
    if(s)for(u=o[o.length-1].ownerDocument, w.map(o, Dt), f=0;
    s>f;
    f++)i=o[f], Nt.test(i.type||"")&&!w._data(i, "globalEval")&&w.contains(u, i)&&(i.src?w._evalUrl(i.src): w.globalEval((i.text||i.textContent||i.innerHTML||"").replace(kt, "")));
    a=r=null;
}
return this;
}});
    w.each( {
    appendTo: "append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}
, function(e, t) {
    w.fn[e]=function(e) {
    var n, r=0, i=[], s=w(e), o=s.length-1;
    for(;
    o>=r;
    r++)n=r===o?this: this.clone(!0), w(s[r])[t](n), d.apply(i, n.get());
    return this.pushStack(i);
}
});
    w.extend( {
    clone: function(e, t, n) {
    var r, i, s, o, u, a=w.contains(e.ownerDocument, e);
    if(w.support.html5Clone||w.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?s=e.cloneNode(!0): (Ot.innerHTML=e.outerHTML, Ot.removeChild(s=Ot.firstChild)), !(w.support.noCloneEvent&&w.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(r=jt(s), u=jt(e), o=0;
    null!=(i=u[o]);
    ++o)r[o]&&Bt(i, r[o]);
    if(t)if(n)for(u=u||jt(e), r=r||jt(s), o=0;
    null!=(i=u[o]);
    o++)Ht(i, r[o]);
    else Ht(e, s);
    return r=jt(s, "script"), r.length>0&&Pt(r, !a&&jt(e, "script")), r=u=i=null, s;
}
, buildFragment: function(e, t, n, r) {
    var i, s, o, u, a, f, l, c=e.length, h=pt(t), p=[], d=0;
    for(;
    c>d;
    d++)if(s=e[d], s||0===s)if("object"===w.type(s))w.merge(p, s.nodeType?[s]: s);
    else if(Et.test(s)) {
    u=u||h.appendChild(t.createElement("div")), a=(bt.exec(s)||["", ""])[1].toLowerCase(), l=Lt[a]||Lt._default, u.innerHTML=l[1]+s.replace(yt, "<$1></$2>")+l[2], i=l[0];
    while(i--)u=u.lastChild;
    if(!w.support.leadingWhitespace&&gt.test(s)&&p.push(t.createTextNode(gt.exec(s)[0])), !w.support.tbody) {
    s="table"!==a||wt.test(s)?"<table>"!==l[1]||wt.test(s)?0: u:u.firstChild, i=s&&s.childNodes.length;
    while(i--)w.nodeName(f=s.childNodes[i], "tbody")&&!f.childNodes.length&&s.removeChild(f);
}
w.merge(p, u.childNodes), u.textContent="";
    while(u.firstChild)u.removeChild(u.firstChild);
    u=h.lastChild;
}
else p.push(t.createTextNode(s));
    u&&h.removeChild(u), w.support.appendChecked||w.grep(jt(p, "input"), Ft), d=0;
    while(s=p[d++])if((!r||-1===w.inArray(s, r))&&(o=w.contains(s.ownerDocument, s), u=jt(h.appendChild(s), "script"), o&&Pt(u), n)) {
    i=0;
    while(s=u[i++])Nt.test(s.type||"")&&n.push(s);
}
return u=null, h;
}, cleanData: function(e, t) {
    var n, r, s, o, u=0, a=w.expando, f=w.cache, l=w.support.deleteExpando, h=w.event.special;
    for(;
    null!=(n=e[u]);
    u++)if((t||w.acceptData(n))&&(s=n[a], o=s&&f[s])) {
    if(o.events)for(r in o.events)h[r]?w.event.remove(n, r): w.removeEvent(n, r, o.handle);
    f[s]&&(delete f[s], l?delete n[a]: typeof n.removeAttribute!==i?n.removeAttribute(a):n[a]=null, c.push(s));
}
}, _evalUrl:function(e) {
    return w.ajax( {
    url: e, type:"GET", dataType:"script", async:!1, global:!1, "throws":!0;
}
);
}}), w.fn.extend( {
    wrapAll: function(e) {
    if(w.isFunction(e))return this.each(function(t) {
    w(this).wrapAll(e.call(this, t));
}
);
    if(this[0]) {
    var t=w(e, this[0].ownerDocument).eq(0).clone(!0);
    this[0].parentNode&&t.insertBefore(this[0]), t.map(function() {
    var e=this;
    while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;
    return e;
}
).append(this);
}return this;
}, wrapInner: function(e) {
    return w.isFunction(e)?this.each(function(t) {
    w(this).wrapInner(e.call(this, t));
}
): this.each(function() {
    var t=w(this), n=t.contents();
    n.length?n.wrapAll(e): t.append(e);
}
);
}, wrap:function(e) {
    var t=w.isFunction(e);
    return this.each(function(n) {
    w(this).wrapAll(t?e.call(this, n): e);
}
);
}, unwrap:function() {
    return this.parent().each(function() {
    w.nodeName(this, "body")||w(this).replaceWith(this.childNodes);
}
).end();
}});
    var It, qt, Rt, Ut=/alpha\([^)]*\)/i, zt=/opacity\s*=\s*([^)]*)/, Wt=/^(top|right|bottom|left)$/, Xt=/^(none|table(?!-c[ea]).+)/, Vt=/^margin/, $t=RegExp("^("+E+")(.*)$", "i"), Jt=RegExp("^("+E+")(?!px)[a-z%]+$", "i"), Kt=RegExp("^([+-])=("+E+")", "i"), Qt= {
    BODY: "block"}
, Gt= {
    position: "absolute", visibility:"hidden", display:"block"}
, Yt= {
    letterSpacing: 0, fontWeight:400;
}
, Zt=["Top", "Right", "Bottom", "Left"], en=["Webkit", "O", "Moz", "ms"];
    w.fn.extend( {
    css: function(e, n) {
    return w.access(this, function(e, n, r) {
    var i, s, o= {
}
, u=0;
    if(w.isArray(n)) {
    for(s=qt(e), i=n.length;
    i>u;
    u++)o[n[u]]=w.css(e, n[u], !1, s);
    return o;
}
return r!==t?w.style(e, n, r): w.css(e, n);
}, e, n, arguments.length>1);
}, show:function() {
    return rn(this, !0);
}
, hide: function() {
    return rn(this);
}
, toggle: function(e) {
    return"boolean"==typeof e?e?this.show(): this.hide():this.each(function() {
    nn(this)?w(this).show(): w(this).hide();
}
);
}}), w.extend( {
    cssHooks:  {
    opacity:  {
    get: function(e, t) {
    if(t) {
    var n=Rt(e, "opacity");
    return""===n?"1": n;
}
}}}, cssNumber: {
    columnCount: !0, fillOpacity:!0, fontWeight:!0, lineHeight:!0, opacity:!0, order:!0, orphans:!0, widows:!0, zIndex:!0, zoom:!0;
}
, cssProps: {
    "float": w.support.cssFloat?"cssFloat":"styleFloat"}
, style:function(e, n, r, i) {
    if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style) {
    var s, o, u, a=w.camelCase(n), f=e.style;
    if(n=w.cssProps[a]||(w.cssProps[a]=tn(f, a)), u=w.cssHooks[n]||w.cssHooks[a], r===t)return u&&"get"in u&&(s=u.get(e, !1, i))!==t?s: f[n];
    if(o=typeof r, "string"===o&&(s=Kt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(w.css(e, n)), o="number"), !(null==r||"number"===o&&isNaN(r)||("number"!==o||w.cssNumber[a]||(r+="px"), w.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(f[n]="inherit"), u&&"set"in u&&(r=u.set(e, r, i))===t)))try {
    f[n]=r;
}
catch(l) {
}
}
}, css: function(e, n, r, i) {
    var s, o, u, a=w.camelCase(n);
    return n=w.cssProps[a]||(w.cssProps[a]=tn(e.style, a)), u=w.cssHooks[n]||w.cssHooks[a], u&&"get"in u&&(o=u.get(e, !0, r)), o===t&&(o=Rt(e, n, i)), "normal"===o&&n in Yt&&(o=Yt[n]), ""===r||r?(s=parseFloat(o), r===!0||w.isNumeric(s)?s||0: o):o;
}
}), e.getComputedStyle?(qt=function(t) {
    return e.getComputedStyle(t, null);
}
, Rt=function(e, n, r) {
    var i, s, o, u=r||qt(e), a=u?u.getPropertyValue(n)||u[n]: t, f=e.style;
    return u&&(""!==a||w.contains(e.ownerDocument, e)||(a=w.style(e, n)), Jt.test(a)&&Vt.test(n)&&(i=f.width, s=f.minWidth, o=f.maxWidth, f.minWidth=f.maxWidth=f.width=a, a=u.width, f.width=i, f.minWidth=s, f.maxWidth=o)), a;
}
): o.documentElement.currentStyle&&(qt=function(e) {
    return e.currentStyle;
}
, Rt=function(e, n, r) {
    var i, s, o, u=r||qt(e), a=u?u[n]: t, f=e.style;
    return null==a&&f&&f[n]&&(a=f[n]), Jt.test(a)&&!Wt.test(n)&&(i=f.left, s=e.runtimeStyle, o=s&&s.left, o&&(s.left=e.currentStyle.left), f.left="fontSize"===n?"1em": a, a=f.pixelLeft+"px", f.left=i, o&&(s.left=o)), ""===a?"auto":a;
}
);
    w.each(["height", "width"], function(e, n) {
    w.cssHooks[n]= {
    get: function(e, r, i) {
    return r?0===e.offsetWidth&&Xt.test(w.css(e, "display"))?w.swap(e, Gt, function() {
    return un(e, n, i);
}
): un(e, n, i):t;
}, set:function(e, t, r) {
    var i=r&&qt(e);
    return sn(e, t, r?on(e, n, r, w.support.boxSizing&&"border-box"===w.css(e, "boxSizing", !1, i), i): 0);
}
}}), w.support.opacity||(w.cssHooks.opacity= {
    get: function(e, t) {
    return zt.test((t&&e.currentStyle?e.currentStyle.filter: e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""}
, set:function(e, t) {
    var n=e.style, r=e.currentStyle, i=w.isNumeric(t)?"alpha(opacity="+100*t+")": "", s=r&&r.filter||n.filter||"";
    n.zoom=1, (t>=1||""===t)&&""===w.trim(s.replace(Ut, ""))&&n.removeAttribute&&(n.removeAttribute("filter"), ""===t||r&&!r.filter)||(n.filter=Ut.test(s)?s.replace(Ut, i): s+" "+i);
}
}), w(function() {
    w.support.reliableMarginRight||(w.cssHooks.marginRight= {
    get: function(e, n) {
    return n?w.swap(e,  {
    display: "inline-block"}
, Rt, [e, "marginRight"]):t;
}}), !w.support.pixelPosition&&w.fn.position&&w.each(["top", "left"], function(e, n) {
    w.cssHooks[n]= {
    get: function(e, r) {
    return r?(r=Rt(e, n), Jt.test(r)?w(e).position()[n]+"px": r):t;
}
}});
}), w.expr&&w.expr.filters&&(w.expr.filters.hidden=function(e) {
    return 0>=e.offsetWidth&&0>=e.offsetHeight||!w.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||w.css(e, "display"));
}
, w.expr.filters.visible=function(e) {
    return!w.expr.filters.hidden(e);
}
), w.each( {
    margin: "", padding:"", border:"Width"}
, function(e, t) {
    w.cssHooks[e+t]= {
    expand: function(n) {
    var r=0, i= {
}
, s="string"==typeof n?n.split(" "): [n];
    for(;
    4>r;
    r++)i[e+Zt[r]+t]=s[r]||s[r-2]||s[0];
    return i;
}
}, Vt.test(e)||(w.cssHooks[e+t].set=sn);
});
    var ln=/%20/g, cn=/\[\]$/, hn=/\r?\n/g, pn=/^(?: submit|button|image|reset|file)$/i, dn=/^(?:input|select|textarea|keygen)/i;
    w.fn.extend( {
    serialize: function() {
    return w.param(this.serializeArray());
}
, serializeArray: function() {
    return this.map(function() {
    var e=w.prop(this, "elements");
    return e?w.makeArray(e): this;
}
).filter(function() {
    var e=this.type;
    return this.name&&!w(this).is(": disabled")&&dn.test(this.nodeName)&&!pn.test(e)&&(this.checked||!xt.test(e));
}
).map(function(e, t) {
    var n=w(this).val();
    return null==n?null: w.isArray(n)?w.map(n, function(e) {
    return {
    name: t.name, value:e.replace(hn, "\r\n");
}
}): {
    name: t.name, value:n.replace(hn, "\r\n");
}
}).get();
}}), w.param=function(e, n) {
    var r, i=[], s=function(e, t) {
    t=w.isFunction(t)?t(): null==t?"":t, i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t);
}
;
    if(n===t&&(n=w.ajaxSettings&&w.ajaxSettings.traditional), w.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e, function() {
    s(this.name, this.value);
}
);
    else for(r in e)vn(r, e[r], n, s);
    return i.join("&").replace(ln, "+");
}
;
    w.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    w.fn[t]=function(e, n) {
    return arguments.length>0?this.on(t, null, e, n): this.trigger(t);
}
}), w.fn.extend( {
    hover: function(e, t) {
    return this.mouseenter(e).mouseleave(t||e);
}
, bind: function(e, t, n) {
    return this.on(e, null, t, n);
}
, unbind: function(e, t) {
    return this.off(e, null, t);
}
, delegate: function(e, t, n, r) {
    return this.on(t, e, n, r);
}
, undelegate: function(e, t, n) {
    return 1===arguments.length?this.off(e, "**"): this.off(t, e||"**", n);
}
});
    var mn, gn, yn=w.now(), bn=/\?/, wn=/#.*$/, En=/([?&])_=[^&]*/, Sn=/^(.*?): [ \t]*([^\r\n]*)\r?$/gm, xn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Tn=/^(?:GET|HEAD)$/, Nn=/^\/\//, Cn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, kn=w.fn.load, Ln= {
}
, An= {
}
, On="*/".concat("*");
    try {
    gn=s.href;
}
catch(Mn) {
    gn=o.createElement("a"), gn.href="", gn=gn.href;
}
mn=Cn.exec(gn.toLowerCase())||[];
    w.fn.load=function(e, n, r) {
    if("string"!=typeof e&&kn)return kn.apply(this, arguments);
    var i, s, o, u=this, a=e.indexOf(" ");
    return a>=0&&(i=e.slice(a, e.length), e=e.slice(0, a)), w.isFunction(n)?(r=n, n=t): n&&"object"==typeof n&&(o="POST"), u.length>0&&w.ajax( {
    url: e, type:o, dataType:"html", data:n;
}
).done(function(e) {
    s=arguments, u.html(i?w("<div>").append(w.parseHTML(e)).find(i): e);
}
).complete(r&&function(e, t) {
    u.each(r, s||[e.responseText, t, e]);
}
), this;
}, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    w.fn[t]=function(e) {
    return this.on(t, e);
}
}), w.extend( {
    active: 0, lastModified: {
}
, etag: {
}
, ajaxSettings: {
    url: gn, type:"GET", isLocal:xn.test(mn[1]), global:!0, processData:!0, async:!0, contentType:"application/x-www-form-urlencoded;
     charset=UTF-8", accepts:  {
    "*": On, text:"text/plain", html:"text/html", xml:"application/xml,  text/xml", json:"application/json,  text/javascript"}
, contents: {
    xml: /xml/, html:/html/, json:/json/}
, responseFields: {
    xml: "responseXML", text:"responseText", json:"responseJSON"}
, converters: {
    "* text": String, "text html":!0, "text json":w.parseJSON, "text xml":w.parseXML;
}
, flatOptions: {
    url: !0, context:!0;
}
}, ajaxSetup:function(e, t) {
    return t?Pn(Pn(e, w.ajaxSettings), t): Pn(w.ajaxSettings, e);
}
, ajaxPrefilter:_n(Ln), ajaxTransport:_n(An), ajax:function(e, n) {
    function N(e, n, r, i) {
    var l, g, y, E, S, T=n;
    2!==b&&(b=2, u&&clearTimeout(u), f=t, o=i||"", x.readyState=e>0?4: 0, l=e>=200&&300>e||304===e, r&&(E=Hn(c, x, r)), E=Bn(c, E, x, l), l?(c.ifModified&&(S=x.getResponseHeader("Last-Modified"), S&&(w.lastModified[s]=S), S=x.getResponseHeader("etag"), S&&(w.etag[s]=S)), 204===e||"HEAD"===c.type?T="nocontent":304===e?T="notmodified":(T=E.state, g=E.data, y=E.error, l=!y)):(y=T, (e||!T)&&(T="error", 0>e&&(e=0))), x.status=e, x.statusText=(n||T)+"", l?d.resolveWith(h, [g, T, x]):d.rejectWith(h, [x, T, y]), x.statusCode(m), m=t, a&&p.trigger(l?"ajaxSuccess":"ajaxError", [x, c, l?g:y]), v.fireWith(h, [x, T]), a&&(p.trigger("ajaxComplete", [x, c]), --w.active||w.event.trigger("ajaxStop")));
}
"object"==typeof e&&(n=e, e=t), n=n|| {
}
;
    var r, i, s, o, u, a, f, l, c=w.ajaxSetup( {
}
, n), h=c.context||c, p=c.context&&(h.nodeType||h.jquery)?w(h): w.event, d=w.Deferred(), v=w.Callbacks("once memory"), m=c.statusCode|| {
}
, g= {
}
, y= {
}
, b=0, E="canceled", x= {
    readyState: 0, getResponseHeader:function(e) {
    var t;
    if(2===b) {
    if(!l) {
    l= {
}
;
    while(t=Sn.exec(o))l[t[1].toLowerCase()]=t[2];
}
t=l[e.toLowerCase()];
}return null==t?null: t;
}, getAllResponseHeaders:function() {
    return 2===b?o: null;
}
, setRequestHeader:function(e, t) {
    var n=e.toLowerCase();
    return b||(e=y[n]=y[n]||e, g[e]=t), this;
}
, overrideMimeType: function(e) {
    return b||(c.mimeType=e), this;
}
, statusCode: function(e) {
    var t;
    if(e)if(2>b)for(t in e)m[t]=[m[t], e[t]];
    else x.always(e[x.status]);
    return this;
}
, abort: function(e) {
    var t=e||E;
    return f&&f.abort(t), N(0, t), this;
}
};
    if(d.promise(x).complete=v.add, x.success=x.done, x.error=x.fail, c.url=((e||c.url||gn)+"").replace(wn, "").replace(Nn, mn[1]+"//"), c.type=n.method||n.type||c.method||c.type, c.dataTypes=w.trim(c.dataType||"*").toLowerCase().match(S)||[""], null==c.crossDomain&&(r=Cn.exec(c.url.toLowerCase()), c.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http: "===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))), c.data&&c.processData&&"string"!=typeof c.data&&(c.data=w.param(c.data, c.traditional)), Dn(Ln, c, n, x), 2===b)return x;
    a=c.global, a&&0===w.active++&&w.event.trigger("ajaxStart"), c.type=c.type.toUpperCase(), c.hasContent=!Tn.test(c.type), s=c.url, c.hasContent||(c.data&&(s=c.url+=(bn.test(s)?"&": "?")+c.data, delete c.data), c.cache===!1&&(c.url=En.test(s)?s.replace(En, "$1_="+yn++):s+(bn.test(s)?"&":"?")+"_="+yn++)), c.ifModified&&(w.lastModified[s]&&x.setRequestHeader("If-Modified-Since", w.lastModified[s]), w.etag[s]&&x.setRequestHeader("If-None-Match", w.etag[s])), (c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type", c.contentType), x.setRequestHeader("Accept", c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?",  "+On+";
     q=0.01": ""):c.accepts["*"]);
    for(i in c.headers)x.setRequestHeader(i, c.headers[i]);
    if(!c.beforeSend||c.beforeSend.call(h, x, c)!==!1&&2!==b) {
    E="abort";
    for(i in {
    success: 1, error:1, complete:1;
}
)x[i](c[i]);
    if(f=Dn(An, c, n, x)) {
    x.readyState=1, a&&p.trigger("ajaxSend", [x, c]), c.async&&c.timeout>0&&(u=setTimeout(function() {
    x.abort("timeout");
}
, c.timeout));
    try {
    b=1, f.send(g, N);
}
catch(T) {
    if(!(2>b))throw T;
    N(-1, T);
}
}else N(-1, "No Transport");
    return x;
}
return x.abort();
}, getJSON: function(e, t, n) {
    return w.get(e, t, n, "json");
}
, getScript: function(e, n) {
    return w.get(e, t, n, "script");
}
}), w.each(["get", "post"], function(e, n) {
    w[n]=function(e, r, i, s) {
    return w.isFunction(r)&&(s=s||i, i=r, r=t), w.ajax( {
    url: e, type:n, dataType:s, data:r, success:i;
}
);
}});
    w.ajaxSetup( {
    accepts:  {
    script: "text/javascript,  application/javascript,  application/ecmascript,  application/x-ecmascript"}
, contents: {
    script: /(?:java|ecma)script/}
, converters: {
    "text script": function(e) {
    return w.globalEval(e), e;
}
}}), w.ajaxPrefilter("script", function(e) {
    e.cache===t&&(e.cache=!1), e.crossDomain&&(e.type="GET", e.global=!1);
}
), w.ajaxTransport("script", function(e) {
    if(e.crossDomain) {
    var n, r=o.head||w("head")[0]||o.documentElement;
    return {
    send: function(t, i) {
    n=o.createElement("script"), n.async=!0, e.scriptCharset&&(n.charset=e.scriptCharset), n.src=e.url, n.onload=n.onreadystatechange=function(e, t) {
    (t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null, n.parentNode&&n.parentNode.removeChild(n), n=null, t||i(200, "success"));
}
, r.insertBefore(n, r.firstChild);
}, abort: function() {
    n&&n.onload(t, !0);
}
}}});
    var jn=[], Fn=/(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup( {
    jsonp: "callback", jsonpCallback:function() {
    var e=jn.pop()||w.expando+"_"+yn++;
    return this[e]=!0, e;
}
}), w.ajaxPrefilter("json jsonp", function(n, r, i) {
    var s, o, u, a=n.jsonp!==!1&&(Fn.test(n.url)?"url": "string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Fn.test(n.data)&&"data");
    return a||"jsonp"===n.dataTypes[0]?(s=n.jsonpCallback=w.isFunction(n.jsonpCallback)?n.jsonpCallback(): n.jsonpCallback, a?n[a]=n[a].replace(Fn, "$1"+s):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+s), n.converters["script json"]=function() {
    return u||w.error(s+" was not called"), u[0];
}
, n.dataTypes[0]="json", o=e[s], e[s]=function() {
    u=arguments;
}
, i.always(function() {
    e[s]=o, n[s]&&(n.jsonpCallback=r.jsonpCallback, jn.push(s)), u&&w.isFunction(o)&&o(u[0]), u=o=t;
}
), "script"): t;
});
    var In, qn, Rn=0, Un=e.ActiveXObject&&function() {
    var e;
    for(e in In)In[e](t, !0);
}
;
    w.ajaxSettings.xhr=e.ActiveXObject?function() {
    return!this.isLocal&&zn()||Wn();
}
: zn, qn=w.ajaxSettings.xhr(), w.support.cors=!!qn&&"withCredentials"in qn, qn=w.support.ajax=!!qn, qn&&w.ajaxTransport(function(n) {
    if(!n.crossDomain||w.support.cors) {
    var r;
    return {
    send: function(i, s) {
    var o, u, a=n.xhr();
    if(n.username?a.open(n.type, n.url, n.async, n.username, n.password): a.open(n.type, n.url, n.async), n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];
    n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType), n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
    try {
    for(u in i)a.setRequestHeader(u, i[u]);
}
catch(f) {
}
a.send(n.hasContent&&n.data||null), r=function(e, i) {
    var u, f, l, c;
    try {
    if(r&&(i||4===a.readyState))if(r=t, o&&(a.onreadystatechange=w.noop, Un&&delete In[o]), i)4!==a.readyState&&a.abort();
    else {
    c= {
}
, u=a.status, f=a.getAllResponseHeaders(), "string"==typeof a.responseText&&(c.text=a.responseText);
    try {
    l=a.statusText;
}
catch(h) {
    l=""}
u||!n.isLocal||n.crossDomain?1223===u&&(u=204): u=c.text?200:404;
}}catch(p) {
    i||s(-1, p);
}
c&&s(u, l, c, f);
}, n.async?4===a.readyState?setTimeout(r): (o=++Rn, Un&&(In||(In= {
}
, w(e).unload(Un)), In[o]=r), a.onreadystatechange=r):r();
}
, abort:function() {
    r&&r(t, !0);
}
}}});
    var Xn, Vn, $n=/^(?: toggle|show|hide)$/, Jn=RegExp("^(?:([+-])=|)("+E+")([a-z%]*)$", "i"), Kn=/queueHooks$/, Qn=[nr], Gn= {
    "*": [function(e, t) {
    var n=this.createTween(e, t), r=n.cur(), i=Jn.exec(t), s=i&&i[3]||(w.cssNumber[e]?"": "px"), o=(w.cssNumber[e]||"px"!==s&&+r)&&Jn.exec(w.css(n.elem, e)), u=1, a=20;
    if(o&&o[3]!==s) {
    s=s||o[3], i=i||[], o=+r||1;
    do u=u||".5", o/=u, w.style(n.elem, e, o+s);
    while(u!==(u=n.cur()/r)&&1!==u&&--a);
}
return i&&(o=n.start=+o||+r||0, n.unit=s, n.end=i[1]?o+(i[1]+1)*i[2]: +i[2]), n;
}];
};
    w.Animation=w.extend(er,  {
    tweener: function(e, t) {
    w.isFunction(e)?(t=e, e=["*"]): e=e.split(" ");
    var n, r=0, i=e.length;
    for(;
    i>r;
    r++)n=e[r], Gn[n]=Gn[n]||[], Gn[n].unshift(t);
}
, prefilter: function(e, t) {
    t?Qn.unshift(e): Qn.push(e);
}
});
    w.Tween=rr, rr.prototype= {
    constructor: rr, init:function(e, t, n, r, i, s) {
    this.elem=e, this.prop=n, this.easing=i||"swing", this.options=t, this.start=this.now=this.cur(), this.end=r, this.unit=s||(w.cssNumber[n]?"": "px");
}
, cur:function() {
    var e=rr.propHooks[this.prop];
    return e&&e.get?e.get(this): rr.propHooks._default.get(this);
}
, run:function(e) {
    var t, n=rr.propHooks[this.prop];
    return this.pos=t=this.options.duration?w.easing[this.easing](e, this.options.duration*e, 0, 1, this.options.duration): e, this.now=(this.end-this.start)*t+this.start, this.options.step&&this.options.step.call(this.elem, this.now, this), n&&n.set?n.set(this):rr.propHooks._default.set(this), this;
}
}, rr.prototype.init.prototype=rr.prototype, rr.propHooks= {
    _default:  {
    get: function(e) {
    var t;
    return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=w.css(e.elem, e.prop, ""), t&&"auto"!==t?t: 0):e.elem[e.prop];
}
, set:function(e) {
    w.fx.step[e.prop]?w.fx.step[e.prop](e): e.elem.style&&(null!=e.elem.style[w.cssProps[e.prop]]||w.cssHooks[e.prop])?w.style(e.elem, e.prop, e.now+e.unit):e.elem[e.prop]=e.now;
}
}}, rr.propHooks.scrollTop=rr.propHooks.scrollLeft= {
    set: function(e) {
    e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now);
}
}, w.each(["toggle", "show", "hide"], function(e, t) {
    var n=w.fn[t];
    w.fn[t]=function(e, r, i) {
    return null==e||"boolean"==typeof e?n.apply(this, arguments): this.animate(ir(t, !0), e, r, i);
}
}), w.fn.extend( {
    fadeTo: function(e, t, n, r) {
    return this.filter(nn).css("opacity", 0).show().end().animate( {
    opacity: t;
}
, e, n, r);
}, animate:function(e, t, n, r) {
    var i=w.isEmptyObject(e), s=w.speed(t, n, r), o=function() {
    var t=er(this, w.extend( {
}
, e), s);
    (i||w._data(this, "finish"))&&t.stop(!0);
}
;
    return o.finish=o, i||s.queue===!1?this.each(o): this.queue(s.queue, o);
}
, stop:function(e, n, r) {
    var i=function(e) {
    var t=e.stop;
    delete e.stop, t(r);
}
;
    return"string"!=typeof e&&(r=n, n=e, e=t), n&&e!==!1&&this.queue(e||"fx", []), this.each(function() {
    var t=!0, n=null!=e&&e+"queueHooks", s=w.timers, o=w._data(this);
    if(n)o[n]&&o[n].stop&&i(o[n]);
    else for(n in o)o[n]&&o[n].stop&&Kn.test(n)&&i(o[n]);
    for(n=s.length;
    n--;
    )s[n].elem!==this||null!=e&&s[n].queue!==e||(s[n].anim.stop(r), t=!1, s.splice(n, 1));
    (t||!r)&&w.dequeue(this, e);
}
);
}, finish: function(e) {
    return e!==!1&&(e=e||"fx"), this.each(function() {
    var t, n=w._data(this), r=n[e+"queue"], i=n[e+"queueHooks"], s=w.timers, o=r?r.length: 0;
    for(n.finish=!0, w.queue(this, e, []), i&&i.stop&&i.stop.call(this, !0), t=s.length;
    t--;
    )s[t].elem===this&&s[t].queue===e&&(s[t].anim.stop(!0), s.splice(t, 1));
    for(t=0;
    o>t;
    t++)r[t]&&r[t].finish&&r[t].finish.call(this);
    delete n.finish;
}
);
}});
    w.each( {
    slideDown: ir("show"), slideUp:ir("hide"), slideToggle:ir("toggle"), fadeIn: {
    opacity: "show"}
, fadeOut: {
    opacity: "hide"}
, fadeToggle: {
    opacity: "toggle"}
}, function(e, t) {
    w.fn[e]=function(e, n, r) {
    return this.animate(t, e, n, r);
}
}), w.speed=function(e, t, n) {
    var r=e&&"object"==typeof e?w.extend( {
}
, e):  {
    complete: n||!n&&t||w.isFunction(e)&&e, duration:e, easing:n&&t||t&&!w.isFunction(t)&&t;
}
;
    return r.duration=w.fx.off?0: "number"==typeof r.duration?r.duration:r.duration in w.fx.speeds?w.fx.speeds[r.duration]:w.fx.speeds._default, (null==r.queue||r.queue===!0)&&(r.queue="fx"), r.old=r.complete, r.complete=function() {
    w.isFunction(r.old)&&r.old.call(this), r.queue&&w.dequeue(this, r.queue);
}
, r;
}, w.easing= {
    linear: function(e) {
    return e;
}
, swing: function(e) {
    return.5-Math.cos(e*Math.PI)/2;
}
}, w.timers=[], w.fx=rr.prototype.init, w.fx.tick=function() {
    var e, n=w.timers, r=0;
    for(Xn=w.now();
    n.length>r;
    r++)e=n[r], e()||n[r]!==e||n.splice(r--, 1);
    n.length||w.fx.stop(), Xn=t;
}
, w.fx.timer=function(e) {
    e()&&w.timers.push(e)&&w.fx.start();
}
, w.fx.interval=13, w.fx.start=function() {
    Vn||(Vn=setInterval(w.fx.tick, w.fx.interval));
}
, w.fx.stop=function() {
    clearInterval(Vn), Vn=null;
}
, w.fx.speeds= {
    slow: 600, fast:200, _default:400;
}
, w.fx.step= {
}
, w.expr&&w.expr.filters&&(w.expr.filters.animated=function(e) {
    return w.grep(w.timers, function(t) {
    return e===t.elem;
}
).length;
}), w.fn.offset=function(e) {
    if(arguments.length)return e===t?this: this.each(function(t) {
    w.offset.setOffset(this, e, t);
}
);
    var n, r, s= {
    top: 0, left:0;
}
, o=this[0], u=o&&o.ownerDocument;
    if(u)return n=u.documentElement, w.contains(n, o)?(typeof o.getBoundingClientRect!==i&&(s=o.getBoundingClientRect()), r=sr(u),  {
    top: s.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0), left:s.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0);
}
):s;
}, w.offset= {
    setOffset: function(e, t, n) {
    var r=w.css(e, "position");
    "static"===r&&(e.style.position="relative");
    var i=w(e), s=i.offset(), o=w.css(e, "top"), u=w.css(e, "left"), a=("absolute"===r||"fixed"===r)&&w.inArray("auto", [o, u])>-1, f= {
}
, l= {
}
, c, h;
    a?(l=i.position(), c=l.top, h=l.left): (c=parseFloat(o)||0, h=parseFloat(u)||0), w.isFunction(t)&&(t=t.call(e, n, s)), null!=t.top&&(f.top=t.top-s.top+c), null!=t.left&&(f.left=t.left-s.left+h), "using"in t?t.using.call(e, f):i.css(f);
}
}, w.fn.extend( {
    position: function() {
    if(this[0]) {
    var e, t, n= {
    top: 0, left:0;
}
, r=this[0];
    return"fixed"===w.css(r, "position")?t=r.getBoundingClientRect(): (e=this.offsetParent(), t=this.offset(), w.nodeName(e[0], "html")||(n=e.offset()), n.top+=w.css(e[0], "borderTopWidth", !0), n.left+=w.css(e[0], "borderLeftWidth", !0)),  {
    top: t.top-n.top-w.css(r, "marginTop", !0), left:t.left-n.left-w.css(r, "marginLeft", !0);
}
}}, offsetParent:function() {
    return this.map(function() {
    var e=this.offsetParent||u;
    while(e&&!w.nodeName(e, "html")&&"static"===w.css(e, "position"))e=e.offsetParent;
    return e||u;
}
);
}}), w.each( {
    scrollLeft: "pageXOffset", scrollTop:"pageYOffset"}
, function(e, n) {
    var r=/Y/.test(n);
    w.fn[e]=function(i) {
    return w.access(this, function(e, i, s) {
    var o=sr(e);
    return s===t?o?n in o?o[n]: o.document.documentElement[i]:e[i]:(o?o.scrollTo(r?w(o).scrollLeft():s, r?s:w(o).scrollTop()):e[i]=s, t);
}
, e, i, arguments.length, null);
}});
    w.each( {
    Height: "height", Width:"width"}
, function(e, n) {
    w.each( {
    padding: "inner"+e, content:n, "":"outer"+e;
}
, function(r, i) {
    w.fn[i]=function(i, s) {
    var o=arguments.length&&(r||"boolean"!=typeof i), u=r||(i===!0||s===!0?"margin": "border");
    return w.access(this, function(n, r, i) {
    var s;
    return w.isWindow(n)?n.document.documentElement["client"+e]: 9===n.nodeType?(s=n.documentElement, Math.max(n.body["scroll"+e], s["scroll"+e], n.body["offset"+e], s["offset"+e], s["client"+e])):i===t?w.css(n, r, u):w.style(n, r, i, u);
}
, n, o?i:t, o, null);
}});
}), w.fn.size=function() {
    return this.length;
}
, w.fn.andSelf=w.fn.addBack, "object"==typeof module&&module&&"object"==typeof module.exports?module.exports=w: (e.jQuery=e.$=w, "function"==typeof define&&define.amd&&define("jquery", [], function() {
    return w;
}
));
})(window);
    (function(e, t, n, r) {
    "use strict";
    var i=function() {
    var e=n.body||n.documentElement, t= {
    transition: "transitionend", WebkitTransition:"webkitTransitionEnd", MozTransition:"transitionend", MsTransition:"MSTransitionEnd", OTransition:"oTransitionEnd otransitionend"}
, i;
    for(i in t)if(e.style[i]!==r)return t[i];
    return!1;
}
(), s=function(t, n) {
    this.$element=e(t);
    this.options=n;
    this.looping=!1;
    var r=this;
    this.$element.attr("tabindex", 0).keydown(function(e) {
    switch(e.which) {
    case 37: r.prev();
    break;
    case 39: r.next();
    break;
    default: return;
}
e.preventDefault();
}).find(".item").attr("aria-hidden", !0);
    this.options.pause==="hover"&&this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.loop, this));
    this.$element.trigger("init");
}
;
    s.prototype= {
    loop: function(t) {
    t||(this.paused=!1);
    if(this.interval) {
    clearInterval(this.interval);
    this.interval=null;
}
this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next, this), this.options.interval));
    return this;
}
, pause: function(e) {
    e||(this.paused=!0);
    if(this.$element.find(".next,  .prev").length&&i) {
    this.$element.trigger(i);
    this.loop();
}
clearInterval(this.interval);
    this.interval=null;
    return this;
}
, next: function() {
    return this.looping?this: this.go("next");
}
, prev:function() {
    return this.looping?this: this.go("prev");
}
, to:function(t) {
    if(this.looping)return this;
    --t;
    var n=this.$element.find(".item"), r=n.filter(".active"), i=n.index(r);
    return t>n.length-1||t<0?this: i==t?this.pause().loop():this.go(e(n[t]));
}
, go:function(t) {
    if(this.looping)return this;
    var n=this.$element.find(".item");
    if(!n.length)return this;
    var r=n.filter(".active"), s=n.index(r), o=typeof t=="string"?r[t](): t, u=n.index(o), a=this.interval, f=typeof t=="string"?t:s==-1&&u==-1||u>s?"next":"prev", l=f=="next"?"first":"last", c=this, h=function(t, r, i) {
    if(!this.looping)return;
    this.looping=!1;
    t.removeClass("active go "+i).attr("aria-hidden", !0);
    r.removeClass("go "+i).addClass("active").removeAttr("aria-hidden");
    var s=e.Event("shown",  {
    relatedTarget: r[0], relatedIndex:n.index(r);
}
);
    this.$element.trigger(s);
}
;
    o=o&&o.length?o: n[l]();
    if(o.hasClass("active"))return this;
    var p=e.Event("show",  {
    relatedTarget: o[0], relatedIndex:n.index(o[0]);
}
);
    this.$element.trigger(p);
    if(p.isDefaultPrevented())return this;
    this.looping=!0;
    a&&this.pause();
    if(this.$element.hasClass("slide")||this.$element.hasClass("xfade"))if(i) {
    o.addClass(f);
    r.addClass("go "+f);
    o[0].offsetWidth;
    o.addClass("go");
    this.$element.one(i, function() {
    if(!r.length)return;
    h.call(c, r, o, f);
}
);
    setTimeout(function() {
    h.call(c, r, o, f);
}
, this.options.speed);
}else {
    var d= {
}
, v, m= {
}
, g;
    v=r.attr("style");
    g=o.attr("style");
    if(this.$element.hasClass("xfade")) {
    d.opacity=0;
    m.opacity=1;
    o.css("opacity", 0);
}
if(this.$element.hasClass("slide"))if(this.$element.hasClass("up")) {
    d.top=f=="next"?"-100%": "100%";
    m.top=0;
}
else if(this.$element.hasClass("down")) {
    d.top=f=="next"?"100%": "-100%";
    m.top=0;
}
else if(this.$element.hasClass("right")) {
    d.left=f=="next"?"100%": "-100%";
    m.left=0;
}
else {
    d.left=f=="next"?"-100%": "100%";
    m.left=0;
}
o.addClass(f);
    r.animate(d, this.options.speed);
    o.animate(m, this.options.speed, function() {
    h.call(c, r, o, f);
    r.attr("style", v||"");
    o.attr("style", g||"");
}
);
}else h.call(c, r, o, f);
    (a||!a&&this.options.interval)&&(!t||typeof 
t=="string"&&t!==this.options.pause||t.length&&this.options.pause!=="to")&&this.loop();
    return this;
}
};
    e.fn.looper=function(t) {
    var n=arguments;
    return this.each(function() {
    var r=e(this), i=r.data("looperjs"), o=e.extend( {
}
, e.fn.looper.defaults, e.isPlainObject(t)?t:  {
}
), u=typeof t=="string"?t:t.looper, a=t.args||n.length>1&&Array.prototype.slice.call(n, 1);
    i||r.data("looperjs", i=new s(this, o));
    typeof t=="number"?i.to(t): u?a?i[u].apply(i, a.length?a:(""+a).split(", ")):i[u]():o.interval?i.loop():i.go();
}
);
};
    e.fn.looper.defaults= {
    interval: 5e3, pause:"hover", speed:500;
}
;
    e.fn.looper.Constructor=s;
    e(function() {
    e("body").on("click.looper", "[data-looper]", function(t) {
    var n=e(this);
    if(n.data("looper")=="go")return;
    var r, i=e(n.data("target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/, "")), s=e.extend( {
}
, i.data(), n.data());
    i.looper(s);
    t.preventDefault();
}
);
    e('[data-looper="go"]').each(function() {
    var t=e(this);
    t.looper(t.data());
}
);
});
})(jQuery, window, document);
    (function(e) {
    typeof define=="function"&&define.amd&&define.amd.jQuery?define(["jquery"], e): e(jQuery);
}
)(function(e) {
    "use strict";
    function N(t) {
    t&&t.allowPageScroll===undefined&&(t.swipe!==undefined||t.swipeStatus!==undefined)&&(t.allowPageScroll=u);
    t.click!==undefined&&t.tap===undefined&&(t.tap=t.click);
    t||(t= {
}
);
    t=e.extend( {
}
, e.fn.swipe.defaults, t);
    return this.each(function() {
    var n=e(this), r=n.data(x);
    if(!r) {
    r=new C(this, t);
    n.data(x, r);
}
});
}function C(T, N) {
    function Z(t) {
    if(Pt())return;
    if(e(t.target).closest(N.excludedElements, R).length>0)return;
    var n=t.originalEvent?t.originalEvent: t, r, i=S?n.touches[0]:n;
    U=y;
    S?z=n.touches.length: t.preventDefault();
    _=0;
    D=null;
    I=null;
    P=0;
    H=0;
    B=0;
    j=1;
    F=0;
    W=It();
    q=Ut();
    _t();
    if(!S||z===N.fingers||N.fingers===m||dt()) {
    Bt(0, i);
    X=Gt();
    if(z==2) {
    Bt(1, n.touches[1]);
    H=B=Xt(W[0].start, W[1].start);
}
if(N.swipeStatus||N.pinchStatus)r=ot(n, U);
}else r=!1;
    if(r===!1) {
    U=E;
    ot(n, U);
    return r;
}
Ht(!0);
    return null;
}
function et(e) {
    var t=e.originalEvent?e.originalEvent: e;
    if(U===w||U===E||Dt())return;
    var n, r=S?t.touches[0]: t, i=jt(r);
    V=Gt();
    S&&(z=t.touches.length);
    U=b;
    if(z==2) {
    if(H==0) {
    Bt(1, t.touches[1]);
    H=B=Xt(W[0].start, W[1].start);
}
else {
    jt(t.touches[1]);
    B=Xt(W[0].end, W[1].end);
    I=$t(W[0].end, W[1].end);
}
j=Vt(H, B);
    F=Math.abs(H-B);
}
if(z===N.fingers||N.fingers===m||!S||dt()) {
    D=Qt(i.start, i.end);
    ht(e, D);
    _=Jt(i.start, i.end);
    P=Wt();
    qt(D, _);
    if(N.swipeStatus||N.pinchStatus)n=ot(t, U);
    if(!N.triggerOnTouchEnd||N.triggerOnTouchLeave) {
    var s=!0;
    if(N.triggerOnTouchLeave) {
    var o=Yt(this);
    s=Zt(i.end, o);
}
!N.triggerOnTouchEnd&&s?U=st(b): N.triggerOnTouchLeave&&!s&&(U=st(w));
    (U==E||U==w)&&ot(t, U);
}
}else {
    U=E;
    ot(t, U);
}
if(n===!1) {
    U=E;
    ot(t, U);
}
}function tt(e) {
    var t=e.originalEvent;
    if(S&&t.touches.length>0) {
    Mt();
    return!0;
}
Dt()&&(z=K);
    e.preventDefault();
    V=Gt();
    P=Wt();
    if(ft()) {
    U=E;
    ot(t, U);
}
else if(N.triggerOnTouchEnd||N.triggerOnTouchEnd==0&&U===b) {
    U=w;
    ot(t, U);
}
else if(!N.triggerOnTouchEnd&&Et()) {
    U=w;
    ut(t, U, c);
}
else if(U===b) {
    U=E;
    ot(t, U);
}
Ht(!1);
    return null;
}
function nt() {
    z=0;
    V=0;
    X=0;
    H=0;
    B=0;
    j=1;
    _t();
    Ht(!1);
}
function rt(e) {
    var t=e.originalEvent;
    if(N.triggerOnTouchLeave) {
    U=st(w);
    ot(t, U);
}
}function it() {
    R.unbind(k, Z);
    R.unbind(M, nt);
    R.unbind(L, et);
    R.unbind(A, tt);
    O&&R.unbind(O, rt);
    Ht(!1);
}
function st(e) {
    var t=e, n=ct(), r=at(), i=ft();
    !n||i?t=E: r&&e==b&&(!N.triggerOnTouchEnd||N.triggerOnTouchLeave)?t=w:!r&&e==w&&N.triggerOnTouchLeave&&(t=E);
    return t;
}
function ot(e, t) {
    var n=undefined;
    yt()||gt()?n=ut(e, t, f): (vt()||dt())&&n!==!1&&(n=ut(e, t, l));
    At()&&n!==!1?n=ut(e, t, h): Ot()&&n!==!1?n=ut(e, t, p):Lt()&&n!==!1&&(n=ut(e, t, c));
    t===E&&nt(e);
    t===w&&(S?e.touches.length==0&&nt(e): nt(e));
    return n;
}
function ut(u, a, d) {
    var v=undefined;
    if(d==f) {
    R.trigger("swipeStatus", [a, D||null, _||0, P||0, z]);
    if(N.swipeStatus) {
    v=N.swipeStatus.call(R, u, a, D||null, _||0, P||0, z);
    if(v===!1)return!1;
}
if(a==w&&mt()) {
    R.trigger("swipe", [D, _, P, z]);
    if(N.swipe) {
    v=N.swipe.call(R, u, D, _, P, z);
    if(v===!1)return!1;
}
switch(D) {
    case t: R.trigger("swipeLeft", [D, _, P, z]);
    N.swipeLeft&&(v=N.swipeLeft.call(R, u, D, _, P, z));
    break;
    case n: R.trigger("swipeRight", [D, _, P, z]);
    N.swipeRight&&(v=N.swipeRight.call(R, u, D, _, P, z));
    break;
    case r: R.trigger("swipeUp", [D, _, P, z]);
    N.swipeUp&&(v=N.swipeUp.call(R, u, D, _, P, z));
    break;
    case i: R.trigger("swipeDown", [D, _, P, z]);
    N.swipeDown&&(v=N.swipeDown.call(R, u, D, _, P, z));
}
}}if(d==l) {
    R.trigger("pinchStatus", [a, I||null, F||0, P||0, z, j]);
    if(N.pinchStatus) {
    v=N.pinchStatus.call(R, u, a, I||null, F||0, P||0, z, j);
    if(v===!1)return!1;
}
if(a==w&&pt())switch(I) {
    case s: R.trigger("pinchIn", [I||null, F||0, P||0, z, j]);
    N.pinchIn&&(v=N.pinchIn.call(R, u, I||null, F||0, P||0, z, j));
    break;
    case o: R.trigger("pinchOut", [I||null, F||0, P||0, z, j]);
    N.pinchOut&&(v=N.pinchOut.call(R, u, I||null, F||0, P||0, z, j));
}
}if(d==c) {
    if(a===E||a===w) {
    clearTimeout(G);
    if(St()&&!Nt()) {
    Q=Gt();
    G=setTimeout(e.proxy(function() {
    Q=null;
    R.trigger("tap", [u.target]);
    N.tap&&(v=N.tap.call(R, u, u.target));
}
, this), N.doubleTapThreshold);
}else {
    Q=null;
    R.trigger("tap", [u.target]);
    N.tap&&(v=N.tap.call(R, u, u.target));
}
}}else if(d==h) {
    if(a===E||a===w) {
    clearTimeout(G);
    Q=null;
    R.trigger("doubletap", [u.target]);
    N.doubleTap&&(v=N.doubleTap.call(R, u, u.target));
}
}else if(d==p)if(a===E||a===w) {
    clearTimeout(G);
    Q=null;
    R.trigger("longtap", [u.target]);
    N.longTap&&(v=N.longTap.call(R, u, u.target));
}
return v;
}function at() {
    var e=!0;
    N.threshold!==null&&(e=_>=N.threshold);
    return e;
}
function ft() {
    var e=!1;
    N.cancelThreshold!==null&&D!==null&&(e=Rt(D)-_>=N.cancelThreshold);
    return e;
}
function lt() {
    return N.pinchThreshold!==null?F>=N.pinchThreshold: !0;
}
function ct() {
    var e;
    N.maxTimeThreshold?P>=N.maxTimeThreshold?e=!1: e=!0:e=!0;
    return e;
}
function ht(e, s) {
    if(N.allowPageScroll===u||dt())e.preventDefault();
    else {
    var o=N.allowPageScroll===a;
    switch(s) {
    case t: (N.swipeLeft&&o||!o&&N.allowPageScroll!=d)&&e.preventDefault();
    break;
    case n: (N.swipeRight&&o||!o&&N.allowPageScroll!=d)&&e.preventDefault();
    break;
    case r: (N.swipeUp&&o||!o&&N.allowPageScroll!=v)&&e.preventDefault();
    break;
    case i: (N.swipeDown&&o||!o&&N.allowPageScroll!=v)&&e.preventDefault();
}
}}function pt() {
    var e=bt(), t=wt(), n=lt();
    return e&&t&&n;
}
function dt() {
    return!!(N.pinchStatus||N.pinchIn||N.pinchOut);
}
function vt() {
    return!!pt()&&!!dt();
}
function mt() {
    var e=ct(), t=at(), n=bt(), r=wt(), i=ft(), s=!i&&r&&n&&t&&e;
    return s;
}
function gt() {
    return!!(N.swipe||N.swipeStatus||N.swipeLeft||N.swipeRight||N.swipeUp||N.swipeDown);
}
function yt() {
    return!!mt()&&!!gt();
}
function bt() {
    return z===N.fingers||N.fingers===m||!S;
}
function wt() {
    return W[0].end.x!==0;
}
function Et() {
    return!!N.tap;
}
function St() {
    return!!N.doubleTap;
}
function xt() {
    return!!N.longTap;
}
function Tt() {
    if(Q==null)return!1;
    var e=Gt();
    return St()&&e-Q<=N.doubleTapThreshold;
}
function Nt() {
    return Tt();
}
function Ct() {
    return(z===1||!S)&&(isNaN(_)||_===0);
}
function kt() {
    return P>N.longTapThreshold&&_<g;
}
function Lt() {
    return!!Ct()&&!!Et();
}
function At() {
    return!!Tt()&&!!St();
}
function Ot() {
    return!!kt()&&!!xt();
}
function Mt() {
    J=Gt();
    K=event.touches.length+1;
}
function _t() {
    J=0;
    K=0;
}
function Dt() {
    var e=!1;
    if(J) {
    var t=Gt()-J;
    t<=N.fingerReleaseThreshold&&(e=!0);
}
return e;
}function Pt() {
    return R.data(x+"_intouch")===!0;
}
function Ht(e) {
    if(e===!0) {
    R.bind(L, et);
    R.bind(A, tt);
    O&&R.bind(O, rt);
}
else {
    R.unbind(L, et, !1);
    R.unbind(A, tt, !1);
    O&&R.unbind(O, rt, !1);
}
R.data(x+"_intouch", e===!0);
}function Bt(e, t) {
    var n=t.identifier!==undefined?t.identifier: 0;
    W[e].identifier=n;
    W[e].start.x=W[e].end.x=t.pageX||t.clientX;
    W[e].start.y=W[e].end.y=t.pageY||t.clientY;
    return W[e];
}
function jt(e) {
    var t=e.identifier!==undefined?e.identifier: 0, n=Ft(t);
    n.end.x=e.pageX||e.clientX;
    n.end.y=e.pageY||e.clientY;
    return n;
}
function Ft(e) {
    for(var t=0;
    t<W.length;
    t++)if(W[t].identifier==e)return W[t];
}
function It() {
    var e=[];
    for(var t=0;
    t<=5;
    t++)e.push( {
    start:  {
    x: 0, y:0;
}
, end: {
    x: 0, y:0;
}
, identifier:0;
});
    return e;
}
function qt(e, t) {
    t=Math.max(t, Rt(e));
    q[e].distance=t;
}
function Rt(e) {
    return q[e]?q[e].distance: undefined;
}
function Ut() {
    var e= {
}
;
    e[t]=zt(t);
    e[n]=zt(n);
    e[r]=zt(r);
    e[i]=zt(i);
    return e;
}
function zt(e) {
    return {
    direction: e, distance:0;
}
}function Wt() {
    return V-X;
}
function Xt(e, t) {
    var n=Math.abs(e.x-t.x), r=Math.abs(e.y-t.y);
    return Math.round(Math.sqrt(n*n+r*r));
}
function Vt(e, t) {
    var n=t/e*1;
    return n.toFixed(2);
}
function $t() {
    return j<1?o: s;
}
function Jt(e, t) {
    return Math.round(Math.sqrt(Math.pow(t.x-e.x, 2)+Math.pow(t.y-e.y, 2)));
}
function Kt(e, t) {
    var n=e.x-t.x, r=t.y-e.y, i=Math.atan2(r, n), s=Math.round(i*180/Math.PI);
    s<0&&(s=360-Math.abs(s));
    return s;
}
function Qt(e, s) {
    var o=Kt(e, s);
    return o<=45&&o>=0?t: o<=360&&o>=315?t:o>=135&&o<=225?n:o>45&&o<135?i:r;
}
function Gt() {
    var e=new Date;
    return e.getTime();
}
function Yt(t) {
    t=e(t);
    var n=t.offset(), r= {
    left: n.left, right:n.left+t.outerWidth(), top:n.top, bottom:n.top+t.outerHeight();
}
;
    return r;
}
function Zt(e, t) {
    return e.x>t.left&&e.x<t.right&&e.y>t.top&&e.y<t.bottom;
}
var C=S||!N.fallbackToMouseEvents, k=C?"touchstart": "mousedown", L=C?"touchmove":"mousemove", A=C?"touchend":"mouseup", O=C?null:"mouseleave", M="touchcancel", _=0, D=null, P=0, H=0, B=0, j=1, F=0, I=0, q=null, R=e(T), U="start", z=0, W=null, X=0, V=0, J=0, K=0, Q=0, G=null;
    try {
    R.bind(k, Z);
    R.bind(M, nt);
}
catch(Y) {
    e.error("events not supported "+k+", "+M+" on jQuery.swipe");
}
this.enable=function() {
    R.bind(k, Z);
    R.bind(M, nt);
    return R;
}
;
    this.disable=function() {
    it();
    return R;
}
;
    this.destroy=function() {
    it();
    R.data(x, null);
    return R;
}
;
    this.option=function(t, n) {
    if(N[t]!==undefined) {
    if(n===undefined)return N[t];
    N[t]=n;
}
else e.error("Option "+t+" does not exist on jQuery.swipe.options");
    return null;
}
}var t="left", n="right", r="up", i="down", s="in", o="out", u="none", a="auto", f="swipe", l="pinch", c="tap", h="doubletap", p="longtap", d="horizontal", v="vertical", m="all", g=10, y="start", b="move", w="end", E="cancel", S="ontouchstart"in window, x="TouchSwipe", T= {
    fingers: 1, threshold:75, cancelThreshold:null, pinchThreshold:20, maxTimeThreshold:null, fingerReleaseThreshold:250, longTapThreshold:500, doubleTapThreshold:200, swipe:null, swipeLeft:null, swipeRight:null, swipeUp:null, swipeDown:null, swipeStatus:null, pinchIn:null, pinchOut:null, pinchStatus:null, click:null, tap:null, doubleTap:null, longTap:null, triggerOnTouchEnd:!0, triggerOnTouchLeave:!1, allowPageScroll:"auto", fallbackToMouseEvents:!0, excludedElements:"label,  button,  input,  select,  textarea,  a,  .noSwipe"}
;
    e.fn.swipe=function(t) {
    var n=e(this), r=n.data(x);
    if(r&&typeof t=="string") {
    if(r[t])return r[t].apply(this, Array.prototype.slice.call(arguments, 1));
    e.error("Method "+t+" does not exist on jQuery.swipe");
}
else if(!r&&(typeof t=="object"||!t))return N.apply(this, arguments);
    return n;
}
;
    e.fn.swipe.defaults=T;
    e.fn.swipe.phases= {
    PHASE_START: y, PHASE_MOVE:b, PHASE_END:w, PHASE_CANCEL:E;
}
;
    e.fn.swipe.directions= {
    LEFT: t, RIGHT:n, UP:r, DOWN:i, IN:s, OUT:o;
}
;
    e.fn.swipe.pageScroll= {
    NONE: u, HORIZONTAL:d, VERTICAL:v, AUTO:a;
}
;
    e.fn.swipe.fingers= {
    ONE: 1, TWO:2, THREE:3, ALL:m;
}
});
    (function(e) {
    var t=e.event, n, r;
    n=t.special.debouncedresize= {
    setup: function() {
    e(this).on("resize", n.handler);
}
, teardown: function() {
    e(this).off("resize", n.handler);
}
, handler: function(e, i) {
    var s=this, o=arguments, u=function() {
    e.type="debouncedresize";
    t.dispatch.apply(s, o);
}
;
    r&&clearTimeout(r);
    i?u(): r=setTimeout(u, n.threshold);
}
, threshold:150;
}})(jQuery);
    (function() {
    function e() {
}
function i(e, t) {
    var n=e.length;
    while(n--)if(e[n].listener===t)return n;
    return-1;
}
function s(e) {
    return function() {
    return this[e].apply(this, arguments);
}
}var t=e.prototype, n=this, r=n.EventEmitter;
    t.getListeners=function(t) {
    var n=this._getEvents(), r, i;
    if(typeof t=="object") {
    r= {
}
;
    for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(r[i]=n[i]);
}
else r=n[t]||(n[t]=[]);
    return r;
}
;
    t.flattenListeners=function(t) {
    var n=[], r;
    for(r=0;
    r<t.length;
    r+=1)n.push(t[r].listener);
    return n;
}
;
    t.getListenersAsObject=function(t) {
    var n=this.getListeners(t), r;
    if(n instanceof Array) {
    r= {
}
;
    r[t]=n;
}
return r||n;
};
    t.addListener=function(t, n) {
    var r=this.getListenersAsObject(t), s=typeof n=="object", o;
    for(o in r)r.hasOwnProperty(o)&&i(r[o], n)===-1&&r[o].push(s?n:  {
    listener: n, once:!1;
}
);
    return this;
}
;
    t.on=s("addListener");
    t.addOnceListener=function(t, n) {
    return this.addListener(t,  {
    listener: n, once:!0;
}
);
};
    t.once=s("addOnceListener");
    t.defineEvent=function(t) {
    this.getListeners(t);
    return this;
}
;
    t.defineEvents=function(t) {
    for(var n=0;
    n<t.length;
    n+=1)this.defineEvent(t[n]);
    return this;
}
;
    t.removeListener=function(t, n) {
    var r=this.getListenersAsObject(t), s, o;
    for(o in r)if(r.hasOwnProperty(o)) {
    s=i(r[o], n);
    s!==-1&&r[o].splice(s, 1);
}
return this;
};
    t.off=s("removeListener");
    t.addListeners=function(t, n) {
    return this.manipulateListeners(!1, t, n);
}
;
    t.removeListeners=function(t, n) {
    return this.manipulateListeners(!0, t, n);
}
;
    t.manipulateListeners=function(t, n, r) {
    var i, s, o=t?this.removeListener: this.addListener, u=t?this.removeListeners:this.addListeners;
    if(typeof n!="object"||n instanceof RegExp) {
    i=r.length;
    while(i--)o.call(this, n, r[i]);
}
else for(i in n)n.hasOwnProperty(i)&&(s=n[i])&&(typeof s=="function"?o.call(this, i, s): u.call(this, i, s));
    return this;
}
;
    t.removeEvent=function(t) {
    var n=typeof t, r=this._getEvents(), i;
    if(n==="string")delete r[t];
    else if(n==="object")for(i in r)r.hasOwnProperty(i)&&t.test(i)&&delete r[i];
    else delete this._events;
    return this;
}
;
    t.removeAllListeners=s("removeEvent");
    t.emitEvent=function(t, n) {
    var r=this.getListenersAsObject(t), i, s, o, u;
    for(o in r)if(r.hasOwnProperty(o)) {
    s=r[o].length;
    while(s--) {
    i=r[o][s];
    i.once===!0&&this.removeListener(t, i.listener);
    u=i.listener.apply(this, n||[]);
    u===this._getOnceReturnValue()&&this.removeListener(t, i.listener);
}
}return this;
};
    t.trigger=s("emitEvent");
    t.emit=function(t) {
    var n=Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(t, n);
}
;
    t.setOnceReturnValue=function(t) {
    this._onceReturnValue=t;
    return this;
}
;
    t._getOnceReturnValue=function() {
    return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue: !0;
}
;
    t._getEvents=function() {
    return this._events||(this._events= {
}
);
}
;
    e.noConflict=function() {
    n.EventEmitter=r;
    return e;
}
;
    typeof define=="function"&&define.amd?define("eventEmitter/EventEmitter", [], function() {
    return e;
}
): typeof module=="object"&&module.exports?module.exports=e:this.EventEmitter=e;
}).call(this);
    (function(e) {
    function r(t) {
    var n=e.event;
    n.target=n.target||n.srcElement||t;
    return n;
}
var t=document.documentElement, n=function() {
}
;
    t.addEventListener?n=function(e, t, n) {
    e.addEventListener(t, n, !1);
}
: t.attachEvent&&(n=function(e, t, n) {
    e[t+n]=n.handleEvent?function() {
    var t=r(e);
    n.handleEvent.call(n, t);
}
: function() {
    var t=r(e);
    n.call(e, t);
}
;
    e.attachEvent("on"+t, e[t+n]);
}
);
    var i=function() {
}
;
    t.removeEventListener?i=function(e, t, n) {
    e.removeEventListener(t, n, !1);
}
: t.detachEvent&&(i=function(e, t, n) {
    e.detachEvent("on"+t, e[t+n]);
    try {
    delete e[t+n];
}
catch(r) {
    e[t+n]=undefined;
}
});
    var s= {
    bind: n, unbind:i;
}
;
    typeof define=="function"&&define.amd?define("eventie/eventie", s): e.eventie=s;
}
)(this);
    (function(e, t) {
    typeof define=="function"&&define.amd?define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, r) {
    return t(e, n, r);
}
): typeof exports=="object"?module.exports=t(e, require("eventEmitter"), require("eventie")):e.imagesLoaded=t(e, e.EventEmitter, e.eventie);
})(this, function(t, n, r) {
    function u(e, t) {
    for(var n in t)e[n]=t[n];
    return e;
}
function f(e) {
    return a.call(e)==="[object Array]"}
function l(e) {
    var t=[];
    if(f(e))t=e;
    else if(typeof e.length=="number")for(var n=0, r=e.length;
    n<r;
    n++)t.push(e[n]);
    else t.push(e);
    return t;
}
function c(e, t, n) {
    if(!(this instanceof c))return new c(e, t);
    typeof e=="string"&&(e=document.querySelectorAll(e));
    this.elements=l(e);
    this.options=u( {
}
, this.options);
    typeof t=="function"?n=t: u(this.options, t);
    n&&this.on("always", n);
    this.getImages();
    i&&(this.jqDeferred=new i.Deferred);
    var r=this;
    setTimeout(function() {
    r.check();
}
);
}function h(e) {
    this.img=e;
}
function d(e) {
    this.src=e;
    p[e]=this;
}
var i=t.jQuery, s=t.console, o=typeof s!="undefined", a=Object.prototype.toString;
    c.prototype=new n;
    c.prototype.options= {
}
;
    c.prototype.getImages=function() {
    this.images=[];
    for(var e=0, t=this.elements.length;
    e<t;
    e++) {
    var n=this.elements[e];
    n.nodeName==="IMG"&&this.addImage(n);
    var r=n.querySelectorAll("img");
    for(var i=0, s=r.length;
    i<s;
    i++) {
    var o=r[i];
    this.addImage(o);
}
}};
    c.prototype.addImage=function(e) {
    var t=new h(e);
    this.images.push(t);
}
;
    c.prototype.check=function() {
    function r(r, i) {
    e.options.debug&&o&&s.log("confirm", r, i);
    e.progress(r);
    t++;
    t===n&&e.complete();
    return!0;
}
var e=this, t=0, n=this.images.length;
    this.hasAnyBroken=!1;
    if(!n) {
    this.complete();
    return;
}
for(var i=0;
    i<n;
    i++) {
    var u=this.images[i];
    u.on("confirm", r);
    u.check();
}
};
    c.prototype.progress=function(e) {
    this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;
    var t=this;
    setTimeout(function() {
    t.emit("progress", t, e);
    t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t, e);
}
);
};
    c.prototype.complete=function() {
    var e=this.hasAnyBroken?"fail": "done";
    this.isComplete=!0;
    var t=this;
    setTimeout(function() {
    t.emit(e, t);
    t.emit("always", t);
    if(t.jqDeferred) {
    var n=t.hasAnyBroken?"reject": "resolve";
    t.jqDeferred[n](t);
}
});
};
    i&&(i.fn.imagesLoaded=function(e, t) {
    var n=new c(this, e, t);
    return n.jqDeferred.promise(i(this));
}
);
    h.prototype=new n;
    h.prototype.check=function() {
    var e=p[this.img.src]||new d(this.img.src);
    if(e.isConfirmed) {
    this.confirm(e.isLoaded, "cached was confirmed");
    return;
}
if(this.img.complete&&this.img.naturalWidth!==undefined) {
    this.confirm(this.img.naturalWidth!==0, "naturalWidth");
    return;
}
var t=this;
    e.on("confirm", function(e, n) {
    t.confirm(e.isLoaded, n);
    return!0;
}
);
    e.check();
}
;
    h.prototype.confirm=function(e, t) {
    this.isLoaded=e;
    this.emit("confirm", this, t);
}
;
    var p= {
}
;
    d.prototype=new n;
    d.prototype.check=function() {
    if(this.isChecked)return;
    var e=new Image;
    r.bind(e, "load", this);
    r.bind(e, "error", this);
    e.src=this.src;
    this.isChecked=!0;
}
;
    d.prototype.handleEvent=function(e) {
    var t="on"+e.type;
    this[t]&&this[t](e);
}
;
    d.prototype.onload=function(e) {
    this.confirm(!0, "onload");
    this.unbindProxyEvents(e);
}
;
    d.prototype.onerror=function(e) {
    this.confirm(!1, "onerror");
    this.unbindProxyEvents(e);
}
;
    d.prototype.confirm=function(e, t) {
    this.isConfirmed=!0;
    this.isLoaded=e;
    this.emit("confirm", this, t);
}
;
    d.prototype.unbindProxyEvents=function(e) {
    r.unbind(e.target, "load", this);
    r.unbind(e.target, "error", this);
}
;
    return c;
}
);
    if(!window.__twttrlr) {
    (function(e, t) {
    function n(e) {
    for(var t=1, n;
    n=arguments[t];
    t++)for(var r in n)e[r]=n[r];
    return e;
}
function r(e) {
    return Array.prototype.slice.call(e);
}
function i(e, t) {
    for(var n=0, r;
    r=e[n];
    n++)if(t==r)return n;
    return-1;
}
function s() {
    var e=r(arguments), t=[];
    for(var n=0, i=e.length;
    n<i;
    n++)e[n].length>0&&t.push(e[n].replace(/\/$/, ""));
    return t.join("/");
}
function o(e, t, n) {
    var r=t.split("/"), i=e;
    while(r.length>1) {
    var s=r.shift();
    i=i[s]=i[s]|| {
}
}
i[r[0]]=n;
}function u() {
}
function a(e, t) {
    this.id=this.path=e, this.force=!!t;
}
function f(e, t) {
    this.id=e, this.body=t, typeof t=="undefined"&&(this.path=this.resolvePath(e));
}
function l(e, t) {
    this.deps=e, this.collectResults=t, this.deps.length==0&&this.complete();
}
function c(e, t) {
    this.deps=e, this.collectResults=t;
}
function h() {
    for(var e in T)if(T[e].readyState=="interactive")return _[T[e].id];
}
function p(e, t) {
    var n;
    return!e&&x&&(n=M||h()), n?(delete _[n.scriptId], n.body=t, n.execute()): (O=n=new f(e, t), A[n.id]=n), n;
}
function d() {
    var e=r(arguments), t, n;
    return typeof e[0]=="string"&&(t=e.shift()), n=e.shift(), p(t, n);
}
function v(e, t) {
    var n=t.id||"", r=n.split("/");
    r.pop();
    var i=r.join("/");
    return e.replace(/^\./, i);
}
function m(e, t) {
    function n(e) {
    return f.exports[v(e, t)];
}
var r=[];
    for(var i=0, s=e.length;
    i<s;
    i++) {
    if(e[i]=="require") {
    r.push(n);
    continue;
}
if(e[i]=="exports") {
    t.exports=t.exports|| {
}
, r.push(t.exports);
    continue;
}
r.push(n(e[i]));
}return r;
}function g() {
    var e=r(arguments), t=[], n, s;
    return typeof e[0]=="string"&&(n=e.shift()), I(e[0])&&(t=e.shift()), s=e.shift(), p(n, function(e) {
    function n() {
    var n=m(r(t), o), i;
    typeof s=="function"?i=s.apply(o, n): i=s, typeof i=="undefined"&&(i=o.exports), e(i);
}
var o=this, u=[];
    for(var a=0, f=t.length;
    a<f;
    a++) {
    var l=t[a];
    i(["require", "exports"], l)==-1&&u.push(v(l, o));
}
u.length>0?y.apply(this, u.concat(n)): n();
});
}function y() {
    var e=r(arguments), t, n;
    typeof e[e.length-1]=="function"&&(t=e.pop()), typeof e[e.length-1]=="boolean"&&(n=e.pop());
    var i=new l(b(e, n), n);
    return t&&i.then(t), i;
}
function b(e, t) {
    var n=[];
    for(var r=0, i;
    i=e[r];
    r++)typeof i=="string"&&(i=w(i)), I(i)&&(i=new c(b(i, t), t)), n.push(i);
    return n;
}
function w(e) {
    var t, n;
    for(var r=0, i;
    i=y.matchers[r];
    r++) {
    var s=i[0], o=i[1];
    if(t=e.match(s))return o(e);
}
throw new Error(e+" was not recognised by loader");
}function E() {
    return e.using=D, e.provide=P, e.define=H, e.loadrunner=B, q;
}
function S(e) {
    for(var t=0;
    t<y.bundles.length;
    t++)for(var n in y.bundles[t])if(n!=e&&i(y.bundles[t][n], e)>-1)return n;
}
var x=e.attachEvent&&!e.opera, T=t.getElementsByTagName("script"), N=0, C, k=t.createElement("script"), L= {
}
, A= {
}
, O, M, _= {
}
, D=e.using, P=e.provide, H=e.define, B=e.loadrunner;
    for(var j=0, F;
    F=T[j];
    j++)if(F.src.match(/loadrunner\.js(\?|#|$)/)) {
    C=F;
    break;
}
var I=Array.isArray||function(e) {
    return e.constructor==Array;
}
;
    u.prototype.then=function(t) {
    var n=this;
    return this.started||(this.started=!0, this.start()), this.completed?t.apply(e, this.results): (this.callbacks=this.callbacks||[], this.callbacks.push(t)), this;
}
, u.prototype.start=function() {
}
, u.prototype.complete=function() {
    if(!this.completed) {
    this.results=r(arguments), this.completed=!0;
    if(this.callbacks)for(var t=0, n;
    n=this.callbacks[t];
    t++)n.apply(e, this.results);
}
}, a.loaded=[], a.prototype=new u, a.prototype.start=function() {
    var e=this, t, n, r;
    return(r=A[this.id])?(r.then(function() {
    e.complete();
}
), this): ((t=L[this.id])?t.then(function() {
    e.loaded();
}
): !this.force&&i(a.loaded, this.id)>-1?this.loaded():(n=S(this.id))?y(n, function() {
    e.loaded();
}
): this.load(), this);
}, a.prototype.load=function() {
    var t=this;
    L[this.id]=t;
    var n=k.cloneNode(!1);
    this.scriptId=n.id="LR"+ ++N, n.type="text/javascript", n.async=!0, n.onerror=function() {
    throw new Error(t.path+" not loaded");
}
, n.onreadystatechange=n.onload=function(n) {
    n=e.event||n;
    if(n.type=="load"||i(["loaded", "complete"], this.readyState)>-1)this.onreadystatechange=null, t.loaded();
}
, n.src=this.path, M=this, T[0].parentNode.insertBefore(n, T[0]), M=null, _[n.id]=this;
}, a.prototype.loaded=function() {
    this.complete();
}
, a.prototype.complete=function() {
    i(a.loaded, this.id)==-1&&a.loaded.push(this.id), delete L[this.id], u.prototype.complete.apply(this, arguments);
}
, f.exports= {
}
, f.prototype=new a, f.prototype.resolvePath=function(e) {
    return s(y.path, e+".js");
}
, f.prototype.start=function() {
    var e, t, n=this, r;
    this.body?this.execute(): (e=f.exports[this.id])?this.exp(e):(t=A[this.id])?t.then(function(e) {
    n.exp(e);
}
): (bundle=S(this.id))?y(bundle, function() {
    n.start();
}
): (A[this.id]=this, this.load());
}, f.prototype.loaded=function() {
    var e, t, n=this;
    x?(t=f.exports[this.id])?this.exp(t): (e=A[this.id])&&e.then(function(e) {
    n.exp(e);
}
): (e=O, O=null, e.id=e.id||this.id, e.then(function(e) {
    n.exp(e);
}
));
}, f.prototype.complete=function() {
    delete A[this.id], a.prototype.complete.apply(this, arguments);
}
, f.prototype.execute=function() {
    var e=this;
    typeof this.body=="object"?this.exp(this.body): typeof this.body=="function"&&this.body.apply(window, [function(t) {
    e.exp(t);
}
]);
}, f.prototype.exp=function(e) {
    this.complete(this.exports=f.exports[this.id]=e|| {
}
);
}
, l.prototype=new u, l.prototype.start=function() {
    function e() {
    var e=[];
    t.collectResults&&(e[0]= {
}
);
    for(var r=0, i;
    i=t.deps[r];
    r++) {
    if(!i.completed)return;
    i.results.length>0&&(t.collectResults?i instanceof c?n(e[0], i.results[0]): o(e[0], i.id, i.results[0]):e=e.concat(i.results));
}
t.complete.apply(t, e);
}var t=this;
    for(var r=0, i;
    i=this.deps[r];
    r++)i.then(e);
    return this;
}
, c.prototype=new u, c.prototype.start=function() {
    var e=this, t=0, r=[];
    return e.collectResults&&(r[0]= {
}
), function i() {
    var s=e.deps[t++];
    s?s.then(function(t) {
    s.results.length>0&&(e.collectResults?s instanceof c?n(r[0], s.results[0]): o(r[0], s.id, s.results[0]):r.push(s.results[0])), i();
}
):e.complete.apply(e, r);
}(), this;
}, g.amd= {
}
;
    var q=function(e) {
    return e(y, d, q, define);
}
;
    q.Script=a, q.Module=f, q.Collection=l, q.Sequence=c, q.Dependency=u, q.noConflict=E, e.loadrunner=q, e.using=y, e.provide=d, e.define=g, y.path="", y.matchers=[], y.matchers.add=function(e, t) {
    this.unshift([e, t]);
}
, y.matchers.add(/(^script!|\.js$)/, function(e) {
    var t=new a(e.replace(/^\$/, y.path.replace(/\/$/, "")+"/").replace(/^script!/, ""), !1);
    return t.id=e, t;
}
), y.matchers.add(/^[a-zA-Z0-9_\-\/]+$/, function(e) {
    return new f(e);
}
), y.bundles=[], C&&(y.path=window.__twttrLoadRunnerPath||C.getAttribute("data-path")||C.src.split(/loadrunner\.js/)[0]||"", (main=C.getAttribute("data-main"))&&y.apply(e, main.split(/\s*, \s*/)).then(function() {
}
));
}
)(this, document);
    window.__twttrlr=loadrunner.noConflict();
}
__twttrlr(function(using, provide, loadrunner, define) {
    provide("util/util", function(e) {
    function t(e) {
    return e&&String(e).toLowerCase().indexOf("[native code]")>-1;
}
function n(e) {
    return c(arguments, function(t) {
    i(t, function(t, n) {
    e[t]=n;
}
);
}), e;
}function r(e) {
    return i(e, function(t, n) {
    a(n)&&(r(n), f(n)&&delete e[t]), (n===undefined||n===null||n==="")&&delete e[t];
}
), e;
}function i(e, t) {
    for(var n in e)(!e.hasOwnProperty||e.hasOwnProperty(n))&&t(n, e[n]);
    return e;
}
function s(e) {
    return {
}
.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
function o(e, t) {
    return e==s(t);
}
function u(e, t, n) {
    return n=n||[], function() {
    var r=p(arguments, function(e) {
    return e;
}
);
    return e.apply(t, n.concat(r));
}
}function a(e) {
    return e===Object(e);
}
function f(e) {
    if(!a(e))return!1;
    if(Object.keys)return!Object.keys(e).length;
    for(var t in e)if(e.hasOwnProperty(t))return!1;
    return!0;
}
var l=function() {
    var e=Array.prototype.indexOf;
    return t(e)?function(t, n) {
    return t?e.apply(t, [n]): -1;
}
:function(e, t) {
    if(!e)return-1;
    for(var n=0, r=e.length;
    n<r;
    n++)if(t==e[n])return n;
    return-1;
}
}(), c=function() {
    var e=Array.prototype.forEach;
    return t(e)?function(t, n) {
    if(!t)return;
    if(!n)return;
    e.apply(t, [n]);
}
: function(e, t) {
    if(!e)return;
    if(!t)return;
    for(var n=0, r=e.length;
    n<r;
    n++)t(e[n], n);
}
}(), h=function() {
    var e=Array.prototype.filter;
    return t(e)?function(t, n) {
    return t?n?e.apply(t, [n]): t:null;
}
:function(e, t) {
    if(!e)return null;
    if(!t)return e;
    var n=[], r=0, i=e.length;
    for(;
    r<i;
    r++)t(e[r])&&n.push(e[r]);
    return n;
}
}(), p=function() {
    var e=Array.prototype.map;
    return t(e)?function(t, n) {
    return t?n?e.apply(t, [n]): t:null;
}
:function(e, t) {
    if(!e)return null;
    if(!t)return e;
    var n=[], r=0, i=e.length;
    for(;
    r<i;
    r++)n.push(t(e[r]));
    return n;
}
}(), d=function() {
    var e=String.prototype.trim;
    return t(e)?function(t) {
    return t&&e.apply(t);
}
: function(e) {
    return e&&e.replace(/(^\s+|\s+$)/g, "");
}
}(), v=t(Object.create)?Object.create: function(e) {
    function t() {
}
return t.prototype=e, new t;
}
;
    e( {
    aug: n, compact:r, forIn:i, forEach:c, filter:h, map:p, trim:d, indexOf:l, isNative:t, isObject:a, isEmptyObject:f, createObject:v, bind:u, toType:s, isType:o;
}
);
});
    provide("util/events", function(e) {
    using("util/util", function(t) {
    function n() {
    this.completed=!1, this.callbacks=[];
}
var r= {
    bind: function(e, t) {
    return this._handlers=this._handlers|| {
}
, this._handlers[e]=this._handlers[e]||[], this._handlers[e].push(t);
}
, unbind: function(e, n) {
    if(!this._handlers[e])return;
    if(n) {
    var r=t.indexOf(this._handlers[e], n);
    r>=0&&this._handlers[e].splice(r, 1);
}
else this._handlers[e]=[];
}, trigger: function(e, t) {
    var n=this._handlers&&this._handlers[e];
    t.type=e;
    if(n)for(var r=0, i;
    i=n[r];
    r++)i.call(this, t);
}
};
    n.prototype.addCallback=function(e) {
    this.completed?e.apply(this, this.results): this.callbacks.push(e);
}
, n.prototype.complete=function() {
    this.results=makeArray(arguments), this.completed=!0;
    for(var e=0, t;
    t=this.callbacks[e];
    e++)t.apply(this, this.results);
}
, e( {
    Emitter: r, Promise:n;
}
);
});
});
    provide("$xd/json2.js", function(exports) {
    window.JSON||(window.JSON= {
}
), function() {
    function f(e) {
    return e<10?"0"+e: e;
}
function quote(e) {
    return escapable.lastIndex=0, escapable.test(e)?'"'+e.replace(escapable, function(e) {
    var t=meta[e];
    return typeof t=="string"?t: "\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4);
}
)+'"':'"'+e+'"'}function str(e, t) {
    var n, r, i, s, o=gap, u, a=t[e];
    a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)), typeof rep=="function"&&(a=rep.call(t, e, a));
    switch(typeof a) {
    case"string": return quote(a);
    case"number": return isFinite(a)?String(a):"null";
    case"boolean": case"null":return String(a);
    case"object": if(!a)return"null";
    gap+=indent, u=[];
    if(Object.prototype.toString.apply(a)==="[object Array]") {
    s=a.length;
    for(n=0;
    n<s;
    n+=1)u[n]=str(n, a)||"null";
    return i=u.length===0?"[]": gap?"[\n"+gap+u.join(", \n"+gap)+"\n"+o+"]":"["+u.join(", ")+"]", gap=o, i;
}
if(rep&&typeof rep=="object") {
    s=rep.length;
    for(n=0;
    n<s;
    n+=1)r=rep[n], typeof r=="string"&&(i=str(r, a), i&&u.push(quote(r)+(gap?":  ":":")+i));
}
else for(r in a)Object.hasOwnProperty.call(a, r)&&(i=str(r, a), i&&u.push(quote(r)+(gap?": ":":")+i));
    return i=u.length===0?" {
}
": gap?" {
    \n"+gap+u.join(", \n"+gap)+"\n"+o+"}
": " {
    "+u.join(", ")+"}
", gap=o, i;
}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e) {
    return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+": "+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;
}
, String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e) {
    return this.valueOf();
}
);
    var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta= {
    "\b": "\\b", "	":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", '"':'\\"', "\\":"\\\\"}
, rep;
    typeof JSON.stringify!="function"&&(JSON.stringify=function(e, t, n) {
    var r;
    gap="", indent="";
    if(typeof n=="number")for(r=0;
    r<n;
    r+=1)indent+=" ";
    else typeof n=="string"&&(indent=n);
    rep=t;
    if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",  {
    "": e;
}
);
    throw new Error("JSON.stringify");
}
), typeof JSON.parse!="function"&&(JSON.parse=function(text, reviver) {
    function walk(e, t) {
    var n, r, i=e[t];
    if(i&&typeof i=="object")for(n in i)Object.hasOwnProperty.call(i, n)&&(r=walk(i, n), r!==undefined?i[n]=r: delete i[n]);
    return reviver.call(e, t, i);
}
var j;
    cx.lastIndex=0, cx.test(text)&&(text=text.replace(cx, function(e) {
    return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4);
}
));
    if(/^[\], :  {
}
\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F] {
    4;
}
)/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?: \.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|, )(?:\s*\[)+/g, "")))return j=eval("("+text+")"), typeof reviver=="function"?walk( {
    "": j;
}
, ""):j;
    throw new SyntaxError("JSON.parse");
}
);
}();
    exports();
    loadrunner.Script.loaded.push("$xd/json2.js");
}
);
    provide("util/querystring", function(e) {
    function t(e) {
    return encodeURIComponent(e).replace(/\+/g, "%2B");
}
function n(e) {
    return decodeURIComponent(e);
}
function r(e) {
    var n=[], r;
    for(r in e)e[r]!==null&&typeof e[r]!="undefined"&&n.push(t(r)+"="+t(e[r]));
    return n.sort().join("&");
}
function i(e) {
    var t= {
}
, r, i, s, o;
    if(e) {
    r=e.split("&");
    for(o=0;
    s=r[o];
    o++)i=s.split("="), i.length==2&&(t[n(i[0])]=n(i[1]));
}
return t;
}function s(e, t) {
    var n=r(t);
    return n.length>0?e.indexOf("?")>=0?e+"&"+r(t): e+"?"+r(t):e;
}
function o(e) {
    var t=e&&e.split("?");
    return t.length==2?i(t[1]):  {
}
}
e( {
    url: s, decodeURL:o, decode:i, encode:r, encodePart:t, decodePart:n;
}
);
});
    provide("util/twitter", function(e) {
    using("util/querystring", function(t) {
    function n(e) {
    return typeof e=="string"&&l.test(e)&&RegExp.$1.length<=20;
}
function r(e) {
    if(n(e))return RegExp.$1;
}
function i(e) {
    var n=t.decodeURL(e);
    n.screen_name=r(e);
    if(n.screen_name)return t.url("https: //twitter.com/intent/user", n);
}
function s(e) {
    return typeof e=="string"&&p.test(e);
}
function o(e, t) {
    t=t===undefined?!0: t;
    if(s(e))return(t?"#": "")+RegExp.$1;
}
function u(e) {
    return typeof e=="string"&&c.test(e);
}
function a(e) {
    return u(e)&&RegExp.$1;
}
function f(e) {
    return h.test(e);
}
var l=/(?: ^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?(?:\/intent\/(?:follow|user)\/?\?screen_name=|(?:\/#!)?\/))@?([\w]+)(?:\?|&|$)/i, c=/(?:^|(?:https?\:)?\/\/(?:www\.)?twitter\.com(?:\:\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i, h=/^http(s?):\/\/((www\.)?)twitter\.com\//, p=/^#?([^., <>!\s\/#\-\(\)\'\"]+)$/;
    e( {
    isHashTag: s, hashTag:o, isScreenName:n, screenName:r, isStatus:u, status:a, intentForProfileURL:i, isTwitterURL:f, regexen: {
    profile: l;
}
});
});
});
    provide("util/uri", function(e) {
    using("util/querystring", "util/util", "util/twitter", function(t, n, r) {
    function i(e, t) {
    var n, r;
    return t=t||location, /^https?: \/\//.test(e)?e:/^\/\//.test(e)?t.protocol+e:(n=t.host+(t.port.length?":"+t.port:""), e.indexOf("/")!==0&&(r=t.pathname.split("/"), r.pop(), r.push(e), e="/"+r.join("/")), [t.protocol, "//", n, e].join(""));
}
function s() {
    var e=document.getElementsByTagName("link"), t=0, n;
    for(;
    n=e[t];
    t++)if(n.rel=="canonical")return i(n.href);
}
function o() {
    var e=document.getElementsByTagName("a"), t=document.getElementsByTagName("link"), n=[e, t], i, s, o=0, u=0, a=/\bme\b/, f;
    for(;
    i=n[o];
    o++)for(u=0;
    s=i[u];
    u++)if(a.test(s.rel)&&(f=r.screenName(s.href)))return f;
}
e( {
    absolutize: i, getCanonicalURL:s, getScreenNameFromPage:o;
}
);
});
});
    provide("util/typevalidator", function(e) {
    using("util/util", function(t) {
    function n(e) {
    return e!==undefined&&e!==null&&e!==""}
function r(e) {
    return s(e)&&e%1===0;
}
function i(e) {
    return s(e)&&!r(e);
}
function s(e) {
    return n(e)&&!isNaN(e);
}
function o(e) {
    return n(e)&&t.toType(e)=="array"}
function u(e) {
    if(!n(e))return!1;
    switch(e) {
    case"on": case"ON":case"true":case"TRUE":return!0;
    case"off": case"OFF":case"false":case"FALSE":return!1;
    default: return!!e;
}
}function a(e) {
    if(s(e))return e;
}
function f(e) {
    if(i(e))return e;
}
function l(e) {
    if(r(e))return e;
}
e( {
    hasValue
: n, isInt:r, isFloat:i, isNumber:s, isArray:o, asInt:l, asFloat:f, asNumber:a, asBoolean:u;
}
);
});
});
    provide("tfw/util/globals", function(e) {
    using("util/typevalidator", function(t) {
    function n() {
    var e=document.getElementsByTagName("meta"), t, n, r=0;
    s= {
}
;
    for(;
    t=e[r];
    r++) {
    if(!/^twitter: /.test(t.name))continue;
    n=t.name.replace(/^twitter: /, ""), s[n]=t.content;
}
}function r(e) {
    return s[e];
}
function i(e) {
    return t.asBoolean(e)&&(s.dnt=!0), t.asBoolean(s.dnt);
}
var s;
    n(), e( {
    init: n, val:r, dnt:i;
}
);
});
});
    provide("util/logger", function(e) {
    function t(e, t, n, r, s) {
    window[i]&&window[i].log&&window[i].log(e, t, n, r, s);
}
function n(e, t, n, r, s) {
    window[i]&&window[i].warn&&window[i].warn(e, t, n, r, s);
}
function r(e, t, n, r, s) {
    window[i]&&window[i].error&&window[i].error(e, t, n, r, s);
}
var i=["con", "sole"].join("");
    e( {
    info: t, warn:n, error:r;
}
);
});
    provide("util/domready", function(e) {
    function t() {
    n=1;
    for(var e=0, t=r.length;
    e<t;
    e++)r[e]();
}
var n=0, r=[], i, s, o=!1, u=document.createElement("a"), a="DOMContentLoaded", f="addEventListener", l="onreadystatechange";
    /^loade|c/.test(document.readyState)&&(n=1), document[f]&&document[f](a, s=function() {
    document.removeEventListener(a, s, o), t();
}
, o), u.doScroll&&document.attachEvent(l, i=function() {
    /^c/.test(document.readyState)&&(document.detachEvent(l, i), t());
}
);
    var c=u.doScroll?function(e) {
    self!=top?n?e(): r.push(e):!function() {
    try {
    u.doScroll("left");
}
catch(t) {
    return setTimeout(function() {
    c(e);
}
, 50);
}e();
}();
}: function(e) {
    n?e(): r.push(e);
}
;
    e(c);
}
);
    provide("util/env", function(e) {
    using("util/domready", "util/typevalidator", "util/logger", "tfw/util/globals", function(t, n, r, i) {
    function s() {
    return window.devicePixelRatio?window.devicePixelRatio>=1.5: window.matchMedia?window.matchMedia("only screen and (min-resolution: 144dpi)").matches:!1;
}
function o() {
    return/MSIE \d/.test(p);
}
function u() {
    return/MSIE 6/.test(p);
}
function a() {
    return/MSIE 7/.test(p);
}
function f() {
    return/MSIE 9/.test(p);
}
function l() {
    return d;
}
function c() {
    return"ontouchstart"in window||/Opera Mini/.test(p)||navigator.msMaxTouchPoints>0;
}
function h() {
    var e=document.body.style;
    return e.transition!==undefined||e.webkitTransition!==undefined||e.mozTransition!==undefined||e.oTransition!==undefined||e.msTransition!==undefined;
}
var p=window.navigator.userAgent, d=!1, v=!1, m="twitter-csp-test";
    window.twttr=window.twttr|| {
}
, twttr.verifyCSP=function(e) {
    var t=document.getElementById(m);
    v=!0, d=!!e, t&&t.parentNode.removeChild(t);
}
, t(function() {
    var e;
    if(u()||a())return d=!1;
    if(n.asBoolean(i.val("widgets: csp")))return d=!0;
    e=document.createElement("script"), e.id=m, e.text="twttr.verifyCSP(false);
    ", document.body.appendChild(e), window.setTimeout(function() {
    if(v)return;
    r.warn('TWITTER:  Content Security Policy restrictions may be applied to your site. Add <meta name="twitter:widgets:csp" content="on"> to supress this warning.'), r.warn("TWITTER: Please note: Not all embedded timeline and embedded Tweet functionality is supported when CSP is applied.");
}
, 5e3);
}), e( {
    retina: s, anyIE:o, ie6:u, ie7:a, ie9:f, cspEnabled:l, touch:c, cssTransitions:h;
}
);
});
});
    provide("dom/delegate", function(e) {
    using("util/env", function(t) {
    function n(e) {
    var t=e.getAttribute("data-twitter-event-id");
    return t?t: (e.setAttribute("data-twitter-event-id", ++p), p);
}
function r(e, t, n) {
    var r=0, i=e&&e.length||0;
    for(r=0;
    r<i;
    r++)e[r].call(t, n);
}
function i(e, t, n) {
    var s=n||e.target||e.srcElement, o=s.className.split(" "), u=0, a, f=o.length;
    for(;
    u<f;
    u++)r(t["."+o[u]], s, e);
    r(t[s.tagName], s, e);
    if(e.cease)return;
    s!==this&&i.call(this, e, t, s.parentElement||s.parentNode);
}
function s(e, t, n) {
    if(e.addEventListener) {
    e.addEventListener(t, function(r) {
    i.call(e, r, n[t]);
}
, !1);
    return;
}
e.attachEvent&&e.attachEvent("on"+t, function() {
    i.call(e, e.ownerDocument.parentWindow.event, n[t]);
}
);
}function o(e, t, r, i) {
    var o=n(e);
    h[o]=h[o]|| {
}
, h[o][t]||(h[o][t]= {
}
, s(e, t, h[o])), h[o][t][r]=h[o][t][r]||[], h[o][t][r].push(i);
}
function u(e, t, n) {
    e.addEventListener?e.addEventListener(t, n, !1): e.attachEvent("on"+t, function() {
    n(window.event);
}
);
}function a(e, t, r) {
    var s=n(t), o=h[s]&&h[s];
    i.call(t,  {
    target: r;
}
, o[e]);
}function f(e) {
    return c(e), l(e), !1;
}
function l(e) {
    e&&e.preventDefault?e.preventDefault(): e.returnValue=!1;
}
function c(e) {
    e&&(e.cease=!0)&&e.stopPropagation?e.stopPropagation(): e.cancelBubble=!0;
}
var h= {
}
, p=-1;
    e( {
    stop: f, stopPropagation:c, preventDefault:l, delegate:o, on:u, simulate:a;
}
);
});
});
    provide("tfw/util/article", function(e) {
    using("dom/delegate", "tfw/util/globals", "util/uri", "$xd/json2.js", function(t, n, r) {
    function i() {
    s=r.getCanonicalURL()||""+document.location;
    if(!window.top.postMessage)return;
    if(window==window.top) {
    t.on(window, "message", function(e) {
    var t;
    if(e.data&&e.data[0]!=" {
    ")return;
    try {
    t=JSON.parse(e.data);
}
catch(r) {
}
t&&t.name=="twttr: private:requestArticleUrl"&&e.source.postMessage(JSON.stringify( {
    name: "twttr:private:provideArticleUrl", data: {
    url: s, dnt:n.dnt();
}
}), "*");
});
    return;
}
t.on(window, "message", function(e) {
    var t;
    if(e.data&&e.data[0]!=" {
    ")return;
    try {
    t=JSON.parse(e.data);
}
catch(r) {
}
t&&t.name=="twttr: private:provideArticleUrl"&&(s=t.data&&t.data.url, n.dnt(t.data.dnt), o=document.location.href);
}
), window.top.postMessage(JSON.stringify( {
    name: "twttr:private:requestArticleUrl"}
), "*");
}var s, o="";
    i(), e( {
    url: function() {
    return s;
}
, frameUrl: function() {
    return o;
}
});
});
});
    provide("util/promise", function(e) {
    using("util/util", function(t) {
    var n=function(e, t) {
    setTimeout(function() {
    e.call(t);
}
, 1);
}, r=function(e) {
    try {
    var t=e.then;
    if(typeof t=="function")return!0;
}
catch(n) {
}
return!1;
}
, i=function(e) {
    Error.call(this, e);
}
;
    i.prototype=t.createObject(Error.prototype);
    var s=function() {
    var e=[];
    return e.pump=function(t) {
    n(function() {
    var n=e.length, r=0;
    while(r<n)r++, e.shift()(t);
}
);
}, e;
}, o=function(e, t, i, s, o, u) {
    var a=!1, f=this, l=function(e) {
    n(function() {
    u("fulfilled"), s(e), t.pump(e);
}
);
}, c=function(e) {
    n(function() {
    u("rejected"), o(e), i.pump(e);
}
);
}, h=function(e) {
    if(r(e)) {
    e.then(h, c);
    return;
}
l(e);
}, p=function(e, t) {
    return function(t) {
    a||(a=!0, e(t));
}
};
    this.resolve=p(h, "resolve"), this.fulfill=p(l, "fulfill"), this.reject=p(c, "reject"), this.cancel=function() {
    f.reject(new Error("Cancel"));
}
, this.timeout=function() {
    f.reject(new Error("Timeout"));
}
, u("pending");
}, u=function(e) {
    var t=new s, n=new s, r, i, u="pending";
    this._addAcceptCallback=function(e) {
    t.push(e), u=="fulfilled"&&t.pump(r);
}
, this._addRejectCallback=function(e) {
    n.push(e), u=="rejected"&&n.pump(i);
}
;
    var a=new o(this, t, n, function(e) {
    r=e;
}
, function(e) {
    i=e;
}
, function(e) {
    u=e;
}
);
    try {
    e&&e(a);
}
catch(f) {
    a.reject(f);
}
}, a=function(e) {
    return typeof e=="function"}
, f=function(e, n, r) {
    return a(e)?function() {
    try {
    var t=e.apply(null, arguments);
    n.resolve(t);
}
catch(r) {
    n.reject(r);
}
}: t.bind(n[r], n);
}, l=function(e, t, n) {
    return a(e)&&n._addAcceptCallback(e), a(t)&&n._addRejectCallback(t), n;
}
;
    t.aug(u.prototype,  {
    then: function(e, t) {
    var n=this;
    return new u(function(r) {
    l(f(e, r, "resolve"), f(t, r, "reject"), n);
}
);
}, "catch": function(e) {
    var t=this;
    return new u(function(n) {
    l(null, f(e, n, "reject"), t);
}
);
}}), u.isThenable=r;
    var c=function(e) {
    return t.map(e, u.resolve);
}
;
    u.any=function() {
    var e=c(arguments);
    return new u(function(n) {
    if(!e.length)n.reject("No futures passed to Promise.any()");
    else {
    var r=!1, i=function(e) {
    if(r)return;
    r=!0, n.resolve(e);
}
, s=function(e) {
    if(r)return;
    r=!0, n.reject(e);
}
;
    t.forEach(e, function(e, t) {
    e.then(i, s);
}
);
}});
}, u.every=function() {
    var e=c(arguments);
    return new u(function(n) {
    if(!e.length)n.reject("No futures passed to Promise.every()");
    else {
    var r=new Array(e.length), i=0, s=function(t, s) {
    i++, r[t]=s, i==e.length&&n.resolve(r);
}
;
    t.forEach(e, function(e, r) {
    e.then(t.bind(s, null, [r]), n.reject);
}
);
}});
}, u.some=function() {
    var e=c(arguments);
    return new u(function(n) {
    if(!e.length)n.reject("No futures passed to Promise.some()");
    else {
    var r=0, i=function(t) {
    r++, r==e.length&&n.reject();
}
;
    t.forEach(e, function(e, t) {
    e.then(n.resolve, i);
}
);
}});
}, u.fulfill=function(e) {
    return new u(function(t) {
    t.fulfill(e);
}
);
}, u.resolve=function(e) {
    return new u(function(t) {
    t.resolve(e);
}
);
}, u.reject=function(e) {
    return new u(function(t) {
    t.reject(e);
}
);
}, e(u);
});
});
    provide("util/layout", function(e) {
    using("util/promise", "util/logger", function(t, n) {
    function r() {
}
var i=[], s;
    r.prototype.enqueue=function(e, n) {
    return new t(function(t) {
    i.push( {
    action: e, resolver:t, note:n;
}
);
});
}, r.prototype.exec=function() {
    var e=i, t;
    if(!e.length)return;
    i=[];
    while(e.length)t=e.shift(), t&&t.action?t.resolver.fulfill(t.action()): t.resolver.reject();
}
, r.prototype.delayedExec=function() {
    s&&window.clearTimeout(s), s=window.setTimeout(this.exec, 100);
}
, e(r);
});
});
    provide("util/iframe", function(e) {
    using("util/util", function(t) {
    e(function(e, n, r) {
    var i;
    r=r||document, e=e|| {
}
, n=n|| {
}
;
    if(e.name) {
    try {
    i=r.createElement('<iframe name="'+e.name+'"></iframe>');
}
catch(s) {
    i=r.createElement("iframe"), i.name=e.name;
}
delete e.name;
}else i=r.createElement("iframe");
    return e.id&&(i.id=e.id, delete e.id), i.allowtransparency="true", i.scrolling="no", i.setAttribute("frameBorder", 0), i.setAttribute("allowTransparency", !0), t.forIn(e, function(e, t) {
    i.setAttribute(e, t);
}
), t.forIn(n, function(e, t) {
    i.style[e]=t;
}
), i;
});
});
});
    provide("dom/get", function(e) {
    using("util/util", function(t) {
    function n(e, t, n) {
    return i(e, t, n, 1)[0];
}
function r(e, n, i) {
    var s=n&&n.parentNode, o;
    if(!s||s===i)return;
    return s.tagName==e?s: (o=s.className.split(" "), 0===e.indexOf(".")&&~t.indexOf(o, e.slice(1))?s:r(e, s, i));
}
var i=function() {
    var e=document.getElementsByClassName;
    return t.isNative(e)?function(n, r, i, s) {
    var o=r?r.getElementsByClassName(n): e.call(document, n), u=t.filter(o, function(e) {
    return!i||e.tagName.toLowerCase()==i.toLowerCase();
}
);
    return[].slice.call(u, 0, s||u.length);
}
: function(e, n, r, i) {
    var s, o, u=[], a, f, l, c, h, p;
    n=n||document, a=e.split(" "), c=a.length, s=n.getElementsByTagName(r||"*"), p=s.length;
    for(l=0;
    l<c&&p>0;
    l++) {
    u=[], f=a[l];
    for(h=0;
    h<p;
    h++) {
    o=s[h], ~t.indexOf(o.className.split(" "), f)&&u.push(o);
    if(l+1==c&&u.length===i)break;
}
s=u, p=s.length;
}return u;
}}();
    e( {
    all: i, one:n, ancestor:r;
}
);
});
});
    provide("tfw/widget/base", function(e) {
    using("dom/get", "util/domready", "util/iframe", "util/layout", "util/promise", "util/querystring", "util/typevalidator", "util/util", "tfw/util/globals", function(t, n, r, i, s, o, u, a, f) {
    function l(e) {
    var t;
    if(!e)return;
    e.ownerDocument?(this.srcEl=e, this.classAttr=e.className.split(" ")): (this.srcOb=e, this.classAttr=[]), t=this.params(), this.id=this.generateId(), this.setLanguage(), this.related=t.related||this.dataAttr("related"), this.partner=t.partner||this.dataAttr("partner")||f.val("partner"), this.dnt=t.dnt||this.dataAttr("dnt")||f.dnt()||"", this.styleAttr=[], this.targetEl=e.targetEl, this.completePromise=new s(a.bind(function(e) {
    this.completeResolver=e;
}
, this)), this.completed().then(function(e) {
    if(!e||e==document.body)return;
    twttr.events.trigger("rendered",  {
    target: e;
}
);
});
}function c() {
    a.forEach(m, function(e) {
    e();
}
), l.doLayout();
}function h(e) {
    if(!e)return;
    return e.lang?e.lang: h(e.parentNode);
}
var p=0, d, v= {
    list: [], byId: {
}
}
, m=[], g=new i, y="data-twttr-rendered", b= {
    ar:  {
    "% {
    followers_count;
}
 followers": "عدد المتابعين % {
    followers_count;
}
", "100K+": "+100 ألف", "10k unit":"10 آلاف وحدة", Follow:"تابِع", "Follow % {
    screen_name;
}
": "تابِع % {
    screen_name;
}
", K: "ألف", M:"مليون", Tweet:"غرِّد", "Tweet % {
    hashtag;
}
": "غرِّد % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "غرِّد لـ % {
    name;
}
"}, da:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 følgere", "10k unit": "10k enhed", Follow:"Følg", "Follow % {
    screen_name;
}
": "Følg % {
    screen_name;
}
", "Tweet to % {
    name;
}
": "Tweet til % {
    name;
}
"}, de:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 Follower", "100K+": "100Tsd+", "10k unit":"10tsd-Einheit", Follow:"Folgen", "Follow % {
    screen_name;
}
": "% {
    screen_name;
}
 folgen", K: "Tsd", Tweet:"Twittern", "Tweet to % {
    name;
}
": "Tweet an % {
    name;
}
"}, es:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 seguidores", "10k unit": "10k unidad", Follow:"Seguir", "Follow % {
    screen_name;
}
": "Seguir a % {
    screen_name;
}
", Tweet: "Twittear", "Tweet % {
    hashtag;
}
": "Twittear % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "Twittear a % {
    name;
}
"}, fa:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 دنبال‌کننده", "100K+": ">۱۰۰هزار", "10k unit":"۱۰هزار واحد", Follow:"دنبال کردن", "Follow % {
    screen_name;
}
": "دنبال کردن % {
    screen_name;
}
", K: "هزار", M:"میلیون", Tweet:"توییت", "Tweet % {
    hashtag;
}
": "توییت کردن % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "به % {
    name;
}
 توییت کنید"}, fi:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 seuraajaa", "100K+": "100 000+", "10k unit":"10 000 yksikköä", Follow:"Seuraa", "Follow % {
    screen_name;
}
": "Seuraa käyttäjää % {
    screen_name;
}
", K: "tuhatta", M:"milj.", Tweet:"Twiittaa", "Tweet % {
    hashtag;
}
": "Twiittaa % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "Twiittaa käyttäjälle % {
    name;
}
"}, fil:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 mga tagasunod", "10k unit": "10k yunit", Follow:"Sundan", "Follow % {
    screen_name;
}
": "Sundan si % {
    screen_name;
}
", Tweet: "I-tweet", "Tweet % {
    hashtag;
}
": "I-tweet ang % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "Mag-Tweet kay % {
    name;
}
"}, fr:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 abonnés", "10k unit": "unité de 10k", Follow:"Suivre", "Follow % {
    screen_name;
}
": "Suivre % {
    screen_name;
}
", Tweet: "Tweeter", "Tweet % {
    hashtag;
}
": "Tweeter % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "Tweeter à % {
    name;
}
"}, he:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 עוקבים", "100K+": "מאות אלפים", "10k unit":"עשרות אלפים", Follow:"מעקב", "Follow % {
    screen_name;
}
": "לעקוב אחר % {
    screen_name;
}
", K: "אלף", M:"מיליון", Tweet:"ציוץ", "Tweet % {
    hashtag;
}
": "צייצו % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "ציוץ אל % {
    name;
}
"}, hi:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 फ़ॉलोअर्स", "100K+": "1 लाख+", "10k unit":"10 हजार इकाईयां", Follow:"फ़ॉलो", "Follow % {
    screen_name;
}
": "% {
    screen_name;
}
 को फ़ॉलो करें", K: "हजार", M:"मिलियन", Tweet:"ट्वीट", "Tweet % {
    hashtag;
}
": "ट्वीट % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "% {
    name;
}
 को ट्वीट करें"}, hu:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 követő", "100K+": "100E+", "10k unit":"10E+", Follow:"Követés", "Follow % {
    screen_name;
}
": "% {
    screen_name;
}
 követése", K: "E", "Tweet % {
    hashtag;
}
": "% {
    hashtag;
}
 tweetelése", "Tweet to % {
    name;
}
": "Tweet küldése neki: % {
    name;
}
"}, id:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 pengikut", "100K+": "100 ribu+", "10k unit":"10 ribu unit", Follow:"Ikuti", "Follow % {
    screen_name;
}
": "Ikuti % {
    screen_name;
}
", K: "&nbsp;
    ribu", M: "&nbsp;
    juta", "Tweet to % {
    name;
}
": "Tweet ke % {
    name;
}
"}, it:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 follower", "10k unit": "10k unità", Follow:"Segui", "Follow % {
    screen_name;
}
": "Segui % {
    screen_name;
}
", "Tweet % {
    hashtag;
}
": "Twitta % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "Twitta a % {
    name;
}
"}, ja:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
人のフォロワー", "100K+": "100K以上", "10k unit":"万", Follow:"フォローする", "Follow % {
    screen_name;
}
": "% {
    screen_name;
}
さんをフォロー", Tweet: "ツイート", "Tweet % {
    hashtag;
}
": "% {
    hashtag;
}
 をツイートする", "Tweet to % {
    name;
}
": "% {
    name;
}
さんへツイートする"}, ko:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
명의 팔로워", "100K+": "100만 이상", "10k unit":"만 단위", Follow:"팔로우", "Follow % {
    screen_name;
}
": "% {
    screen_name;
}
 님 팔로우하기", K: "천", M:"백만", Tweet:"트윗", "Tweet % {
    hashtag;
}
": "% {
    hashtag;
}
 관련 트윗하기", "Tweet to % {
    name;
}
": "% {
    name;
}
님에게 트윗하기"}, msa:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 pengikut", "100K+": "100 ribu+", "10k unit":"10 ribu unit", Follow:"Ikut", "Follow % {
    screen_name;
}
": "Ikut % {
    screen_name;
}
", K: "ribu", M:"juta", "Tweet to % {
    name;
}
": "Tweet kepada % {
    name;
}
"}, nl:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 volgers", "100K+": "100k+", "10k unit":"10k-eenheid", Follow:"Volgen", "Follow % {
    screen_name;
}
": "% {
    screen_name;
}
 volgen", K: "k", M:" mln.", Tweet:"Tweeten", "Tweet % {
    hashtag;
}
": "% {
    hashtag;
}
 tweeten", "Tweet to % {
    name;
}
": "Tweeten naar % {
    name;
}
"}, no:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 følgere", "100K+": "100 K+", "10k unit":"10-K-enhet", Follow:"Følg", "Follow % {
    screen_name;
}
": "Følg % {
    screen_name;
}
", "Tweet to % {
    name;
}
": "Send en tweet til % {
    name;
}
"}, pl:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 obserwujących", "100K+": "100 tys.+", "10k unit":"10 tys.", Follow:"Obserwuj", "Follow % {
    screen_name;
}
": "Obserwuj % {
    screen_name;
}
", K: "tys.", M:"mln", Tweet:"Tweetnij", "Tweet % {
    hashtag;
}
": "Tweetnij % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "Tweetnij do % {
    name;
}
"}, pt:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 seguidores", "100K+": "+100 mil", "10k unit":"10 mil unidades", Follow:"Seguir", "Follow % {
    screen_name;
}
": "Seguir % {
    screen_name;
}
", K: "Mil", Tweet:"Tweetar", "Tweet % {
    hashtag;
}
": "Tweetar % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "Tweetar para % {
    name;
}
"}, ru:  {
    "% {
    followers_count;
}
 followers": "Читатели: % {
    followers_count;
}
 ", "100K+": "100 тыс.+", "10k unit":"блок 10k", Follow:"Читать", "Follow % {
    screen_name;
}
": "Читать % {
    screen_name;
}
", K: "тыс.", M:"млн.", Tweet:"Твитнуть", "Tweet % {
    hashtag;
}
": "Твитнуть % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "Твитнуть % {
    name;
}
"}, sv:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 följare", "10k unit": "10k", Follow:"Följ", "Follow % {
    screen_name;
}
": "Följ % {
    screen_name;
}
", Tweet: "Tweeta", "Tweet % {
    hashtag;
}
": "Tweeta % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "Tweeta till % {
    name;
}
"}, th:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 ผู้ติดตาม", "100K+": "100พัน+", "10k unit":"หน่วย 10พัน", Follow:"ติดตาม", "Follow % {
    screen_name;
}
": "ติดตาม % {
    screen_name;
}
", K: "พัน", M:"ล้าน", Tweet:"ทวีต", "Tweet % {
    hashtag;
}
": "ทวีต % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "ทวีตถึง % {
    name;
}
"}, tr:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 takipçi", "100K+": "+100 bin", "10k unit":"10 bin birim", Follow:"Takip et", "Follow % {
    screen_name;
}
": "Takip et: % {
    screen_name;
}
", K: "bin", M:"milyon", Tweet:"Tweetle", "Tweet % {
    hashtag;
}
": "Tweetle: % {
    hashtag;
}
", "Tweet to % {
    name;
}
": "Tweetle: % {
    name;
}
"}, ur:  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 فالورز", "100K+": "ایک لاکھ سے زیادہ", "10k unit":"دس ہزار یونٹ", Follow:"فالو کریں", "Follow % {
    screen_name;
}
": "% {
    screen_name;
}
 کو فالو کریں", K: "ہزار", M:"ملین", Tweet:"ٹویٹ کریں", "Tweet % {
    hashtag;
}
": "% {
    hashtag;
}
 ٹویٹ کریں", "Tweet to % {
    name;
}
": "% {
    name;
}
 کو ٹویٹ کریں"}, "zh-cn":  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 关注者", "100K+": "10万+", "10k unit":"1万单元", Follow:"关注", "Follow % {
    screen_name;
}
": "关注 % {
    screen_name;
}
", K: "千", M:"百万", Tweet:"发推", "Tweet % {
    hashtag;
}
": "以 % {
    hashtag;
}
 发推", "Tweet to % {
    name;
}
": "发推给 % {
    name;
}
"}, "zh-tw":  {
    "% {
    followers_count;
}
 followers": "% {
    followers_count;
}
 位跟隨者", "100K+": "超過十萬", "10k unit":"1萬 單位", Follow:"跟隨", "Follow % {
    screen_name;
}
": "跟隨 % {
    screen_name;
}
", K: "千", M:"百萬", Tweet:"推文", "Tweet % {
    hashtag;
}
": "推文% {
    hashtag;
}
", "Tweet to % {
    name;
}
": "推文給% {
    name;
}
"}};
    a.aug(l.prototype,  {
    setLanguage: function(e) {
    var t;
    e||(e=this.params().lang||this.dataAttr("lang")||h(this.srcEl)), e=e&&e.toLowerCase();
    if(!e)return this.lang="en";
    if(b[e])return this.lang=e;
    t=e.replace(/[\-_].*/, "");
    if(b[t])return this.lang=t;
    this.lang="en"}
, _: function(e, t) {
    var n=this.lang;
    t=t|| {
}
;
    if(!n||!b.hasOwnProperty(n))n=this.lang="en";
    return e=b[n]&&b[n][e]||e, this.ringo(e, t, /%\ {
    ([\w_]+)\;
}
/g);
}, ringo: function(e, t, n) {
    return n=n||/\ {
    \ {
    ([\w_]+)\;
}
\;
}/g, e.replace(n, function(e, n) {
    return t[n]!==undefined?t[n]: e;
}
);
}, add:function(e) {
    v.list.push(this), v.byId[this.id]=e;
}
, create: function(e, t, n) {
    var i=this, o;
    return n[y]=!0, o=r(a.aug( {
    id: this.id, src:e, "class":this.classAttr.join(" ");
}
, n), t, this.targetEl&&this.targetEl.ownerDocument), this.srcEl?this.layout(function() {
    return i.srcEl.parentNode.replaceChild(o, i.srcEl), i.completeResolver.fulfill(o), o;
}
): this.targetEl?this.layout(function() {
    return i.targetEl.appendChild(o), i.completeResolver.fulfill(o), o;
}
): s.reject("Did not append widget");
}, params:function() {
    var e, t;
    return this.srcOb?t=this.srcOb: (e=this.srcEl&&this.srcEl.href&&this.srcEl.href.split("?")[1], t=e?o.decode(e): {
}
), this.params=function() {
    return t;
}
, t;
}, dataAttr: function(e) {
    return this.srcEl&&this.srcEl.getAttribute("data-"+e);
}
, attr: function(e) {
    return this.srcEl&&this.srcEl.getAttribute(e);
}
, layout: function(e) {
    return g.enqueue(e);
}
, styles:  {
    base: [["font", "normal normal normal 11px/18px 'Helvetica Neue',  Arial,  sans-serif"], ["margin", "0"], ["padding", "0"], ["whiteSpace", "nowrap"]], button:[["fontWeight", "bold"], ["textShadow", "0 1px 0 rgba(255, 255, 255, .5)"]], large:[["fontSize", "13px"], ["lineHeight", "26px"]], vbubble:[["fontSize", "16px"]];
}
, width:function() {
    throw new Error(name+" not implemented");
}
, height: function() {
    return this.size=="m"?20: 28;
}
, minWidth:function() {
}
, maxWidth:function() {
}
, minHeight:function() {
}
, maxHeight:function() {
}
, dimensions:function() {
    function e(e) {
    switch(typeof e) {
    case"string": return e;
    case"undefined": return;
    default: return e+"px"}
}var t= {
    width: this.width(), height:this.height();
}
;
    return this.minWidth()&&(t["min-width"]=this.minWidth()), this.maxWidth()&&(t["max-width"]=this.maxWidth()), this.minHeight()&&(t["min-height"]=this.minHeight()), this.maxHeight()&&(t["max-height"]=this.maxHeight()), a.forIn(t, function(n, r) {
    t[n]=e(r);
}
), t;
}, generateId: function() {
    return this.srcEl&&this.srcEl.id||"twitter-widget-"+p++}
, completed: function() {
    return this.completePromise;
}
}), l.afterLoad=function(e) {
    m.push(e);
}
, l.doLayout=function() {
    g.exec();
}
, l.doLayoutAsync=function() {
    g.delayedExec();
}
, l.init=function(e) {
    d=e;
}
, l.find=function(e) {
    return e&&v.byId[e]?v.byId[e].element: null;
}
, l.embed=function(e) {
    var n=d.widgets, r=[], i=[];
    u.isArray(e)||(e=[e||document]), a.forEach(e, function(e) {
    a.forIn(n, function(n, i) {
    var s, o;
    n.match(/\./)?(s=n.split("."), o=t.all(s[1], e, s[0])): o=e.getElementsByTagName(n), a.forEach(o, function(e) {
    if(e.getAttribute(y))return;
    e.setAttribute(y, "true"), r.push(new i(e));
}
);
});
}), l.doLayout(), a.forEach(r, function(e) {
    v.byId[e.id]=e, v.list.push(e), i.push(e.completed()), e.render(d);
}
), s.every.apply(null, i).then(function(e) {
    e=a.filter(e, function(e) {
    return e;
}
);
    if(!e.length)return;
    twttr.events.trigger("loaded",  {
    widgets: e;
}
);
}), l.doLayoutAsync(), c();
}, window.setInterval(function() {
    l.doLayout();
}
, 500), e(l);
});
});
    provide("tfw/widget/intent", function(e) {
    using("tfw/widget/base", "util/util", "util/querystring", "util/uri", "util/promise", function(t, n, r, i, s) {
    function o(e) {
    var t=Math.round(y/2-v/2), n=0;
    g>m&&(n=Math.round(g/2-m/2)), window.open(e, undefined, [d, "width="+v, "height="+m, "left="+t, "top="+n].join(", "));
}
function u(e, t) {
    using("tfw/hub/client", function(n) {
    n.openIntent(e, t);
}
);
}function a(e) {
    var t="original_referer="+location.href;
    return[e, t].join(e.indexOf("?")==-1?"?": "&");
}
function f(e) {
    var t, r, i, s;
    e=e||window.event, t=e.target||e.srcElement;
    if(e.altKey||e.metaKey||e.shiftKey)return;
    while(t) {
    if(~n.indexOf(["A", "AREA"], t.nodeName))break;
    t=t.parentNode;
}
t&&t.href&&(r=t.href.match(p), r&&(s=a(t.href), s=s.replace(/^http[: ]/, "https:"), s=s.replace(/^\/\//, "https://"), l(s, t), e.returnValue=!1, e.preventDefault&&e.preventDefault()));
}function l(e, t) {
    if(twttr.events.hub&&t) {
    var n=new c(b.generateId(), t);
    b.add(n), u(e, t), twttr.events.trigger("click",  {
    target: t, region:"intent", type:"click", data: {
}
}
);
}else o(e);
}function c(e, t) {
    this.id=e, this.element=this.srcEl=t;
}
function h(e) {
    this.srcEl=[], this.element=e;
}
var p=/twitter\.com(\: \d {
    2, 4;
}
)?\/intent\/(\w+)/, d="scrollbars=yes, resizable=yes, toolbar=no, location=yes", v=550, m=520, g=screen.height, y=screen.width, b;
    h.prototype=new t, n.aug(h.prototype,  {
    render: function(e) {
    return b=this, window.__twitterIntentHandler||(document.addEventListener?document.addEventListener("click", f, !1): document.attachEvent&&document.attachEvent("onclick", f), window.__twitterIntentHandler=!0), s.fulfill(document.body);
}
}), h.open=l, e(h);
});
});
    provide("dom/classname", function(e) {
    function t(e) {
    return new RegExp("\\b"+e+"\\b", "g");
}
function n(e, n) {
    if(e.classList) {
    e.classList.add(n);
    return;
}
t(n).test(e.className)||(e.className+=" "+n);
}function r(e, n) {
    if(e.classList) {
    e.classList.remove(n);
    return;
}
e.className=e.className.replace(t(n), " ");
}function i(e, t, i) {
    return e.classList&&e.classList.toggle?e.classList.toggle(t, i): (i?n(e, t):r(e, t), i);
}
function s(e, i, s) {
    if(e.classList&&o(e, i)) {
    r(e, i), n(e, s);
    return;
}
e.className=e.className.replace(t(i), s);
}function o(e, n) {
    return e.classList?e.classList.contains(n): t(n).test(e.className);
}
e( {
    add: n, remove:r, replace:s, toggle:i, present:o;
}
);
});
    provide("util/throttle", function(e) {
    function t(e, t, n) {
    function r() {
    var n=+(new Date);
    window.clearTimeout(o);
    if(n-s>t) {
    s=n, e.call(i);
    return;
}
o=window.setTimeout(r, t);
}var i=n||this, s=0, o;
    return r;
}
e(t);
});
    provide("util/css", function(e) {
    using("util/util", function(t) {
    e( {
    sanitize: function(e, n, r) {
    var i=/^[\w , %\/"'\-_#]+$/, s=e&&t.map(e.split(";
    "), function(e) {
    return t.map(e.split(": ").slice(0, 2), function(e) {
    return t.trim(e);
}
);
}), o=0, u, a=[], f=r?"!important": "";
    n=n||/^(font|text\-|letter\-|color|line\-)[\w\-]*$/;
    for(;
    s&&(u=s[o]);
    o++)u[0].match(n)&&u[1].match(i)&&a.push(u.join(": ")+f);
    return a.join(";
    ");
}
});
});
});
    provide("tfw/util/params", function(e) {
    using("util/querystring", "util/twitter", function(t, n) {
    e(function(e, r) {
    return function(i) {
    var s, o="data-tw-params", u, a=i.innerHTML;
    if(!i)return;
    if(!n.isTwitterURL(i.href))return;
    if(i.getAttribute(o))return;
    i.setAttribute(o, !0);
    if(typeof r=="function") {
    s=r.call(this, i);
    for(u in s)s.hasOwnProperty(u)&&(e[u]=s[u]);
}
i.href=t.url(i.href, e);
}});
});
});
    provide("util/params", function(e) {
    using("util/querystring", function(t) {
    var n=function(e) {
    var n=e.search.substr(1);
    return t.decode(n);
}
, r=function(e) {
    var n=e.href, r=n.indexOf("#"), i=r<0?"": n.substring(r+1);
    return t.decode(i);
}
, i=function(e) {
    var t= {
}
, i=n(e), s=r(e);
    for(var o in i)i.hasOwnProperty(o)&&(t[o]=i[o]);
    for(var o in s)s.hasOwnProperty(o)&&(t[o]=s[o]);
    return t;
}
;
    e( {
    combined: i, fromQuery:n, fromFragment:r;
}
);
});
});
    provide("tfw/util/env", function(e) {
    using("util/params", function(t) {
    function n() {
    var e=36e5, n=t.combined(document.location)._;
    return r!==undefined?r: (r=!1, n&&/^\d+$/.test(n)&&(r=+(new Date)-parseInt(n)<e), r);
}
var r;
    e( {
    isDynamicWidget: n;
}
);
});
});
    provide("util/decider", function(e) {
    function t(e) {
    var t=n[e]||!1;
    if(!t)return!1;
    if(t===!0||t===100)return!0;
    var r=Math.random()*100, i=t>=r;
    return n[e]=i, i;
}
var n= {
    force_new_cookie: 100, rufous_pixel:100, decider_fixture:12.34;
}
;
    e( {
    isAvailable: t;
}
);
});
    provide("dom/cookie", function(e) {
    using("util/util", function(t) {
    e(function(e, n, r) {
    var i=t.aug( {
}
, r);
    if(arguments.length>1&&String(n)!=="[object Object]") {
    if(n===null||n===undefined)i.expires=-1;
    if(typeof i.expires=="number") {
    var s=i.expires, o=new Date((new Date).getTime()+s*60*1e3);
    i.expires=o;
}
return n=String(n), document.cookie=[encodeURIComponent(e), "=", i.raw?n: encodeURIComponent(n), i.expires?";
     expires="+i.expires.toUTCString(): "", i.path?";
     path="+i.path: "", i.domain?";
     domain="+i.domain: "", i.secure?";
     secure": ""].join("");
}
i=n|| {
}
;
    var u, a=i.raw?function(e) {
    return e;
}
: decodeURIComponent;
    return(u=(new RegExp("(?: ^|;
     )"+encodeURIComponent(e)+"=([^;
    ]*)")).exec(document.cookie))?a(u[1]): null;
}
);
});
});
    provide("util/donottrack", function(e) {
    using("dom/cookie", function(t) {
    e(function(e, n) {
    var r=/\.(gov|mil)(: \d+)?$/i, i=/https?:\/\/([^\/]+).*/i;
    return e=e||document.referrer, e=i.test(e)&&i.exec(e)[1], n=n||document.location.host, t("dnt")?!0: r.test(n)?!0:e&&r.test(e)?!0:document.navigator?document.navigator["doNotTrack"]==1:navigator?navigator["doNotTrack"]==1||navigator["msDoNotTrack"]==1:!1;
}
);
});
});
    provide("tfw/util/guest_cookie", function(e) {
    using("dom/cookie", "util/donottrack", "util/decider", function(t, n, r) {
    function i() {
    var e=t(u)||!1;
    if(!e)return;
    e.match(/^v3\: /)||s();
}
function s() {
    t(u)&&t(u, null,  {
    domain: ".twitter.com", path:"/"}
);
}function o() {
    n()&&s();
}
var u="pid";
    e( {
    set: o, destroy:s, forceNewCookie:i, guest_id_cookie:u;
}
);
});
});
    provide("sandbox/baseframe", function(e) {
    using("util/domready", "util/env", "util/iframe", "util/promise", "util/util", function(t, n, r, i, s) {
    function o(e, t, n, o) {
    var u;
    this.readyPromise=new i(s.bind(function(e) {
    this.resolver=e;
}
, this)), this.attrs=e|| {
}
, this.styles=t|| {
}
, this.appender=n||function(e) {
    document.body.appendChild(e);
}
, this.layout=o||function(e) {
    return new i(function(t) {
    return t.fulfill(e());
}
);
}, this.frame=u=r(this.attrs, this.styles), u.onreadystatechange=u.onload=this.getCallback(this.onLoad), this.layout(s.bind(function() {
    this.appender(u);
}
, this));
}var u=0;
    window.twttr=window.twttr|| {
}
, window.twttr.sandbox=window.twttr.sandbox|| {
}
, o.prototype.getCallback=function(e) {
    var t=this, n=!1;
    return function() {
    n||(n=!0, e.call(t));
}
}, o.prototype.registerCallback=function(e) {
    var t="cb"+u++;
    return window.twttr.sandbox[t]=e, t;
}
, o.prototype.onLoad=function() {
    try {
    this.document=this.frame.contentWindow.document;
}
catch(e) {
    this.setDocDomain();
    return;
}
this.writeStandardsDoc(), this.resolver.fulfill(this);
}, o.prototype.ready=function() {
    return this.readyPromise;
}
, o.prototype.setDocDomain=function() {
    var e=r(this.attrs, this.styles), t=this.registerCallback(this.getCallback(this.onLoad));
    e.src=["javascript: ", 'document.write("");
    ', "try  {
     window.parent.document;
 }
", "catch (e)  {
    ", 'document.domain="'+document.domain+'";
    ', "}
", 'window.parent.twttr.sandbox["'+t+'"]();
    '].join(""), this.layout(s.bind(function() {
    this.frame.parentNode.removeChild(this.frame), this.frame=null, this.appender?this.appender(e): document.body.appendChild(e), this.frame=e;
}
, this));
}, o.prototype.writeStandardsDoc=function() {
    if(!n.anyIE()||n.cspEnabled())return;
    var e=["<!DOCTYPE html>", "<html>", "<head>", "<scr", "ipt>", "try  {
     window.parent.document;
 }
", 'catch (e)  {
    document.domain="'+document.domain+'";
}
', "</scr", "ipt>", "</head>", "<body></body>", "</html>"].join("");
    this.document.write(e), this.document.close();
}
, e(o);
});
});
    provide("sandbox/minimal", function(e) {
    using("sandbox/baseframe", "util/env", "util/promise", "util/util", function(t, n, r, i) {
    function s(e, t) {
    if(!e)return;
    this._frame=e, this._win=e.contentWindow, this._doc=this._win.document, this._body=this._doc.body, this._head=this._body.parentNode.children[0], this.layout=t;
}
i.aug(s.prototype,  {
    createElement: function(e) {
    return this._doc.createElement(e);
}
, createDocumentFragment: function() {
    return this._doc.createDocumentFragment();
}
, appendChild: function(e) {
    return this.layout(i.bind(function() {
    return this._body.appendChild(e);
}
, this));
}, setBaseTarget: function(e) {
    var t=this._doc.createElement("base");
    return t.target=e, this.layout(i.bind(function() {
    return this._head.appendChild(t);
}
, this));
}, setTitle: function(e) {
    if(!e)return;
    this._frame.title=e;
}
, element: function() {
    return this._frame;
}
, document: function() {
    return this._doc;
}
}), s.createSandbox=function(e, n, r, i) {
    var o=new t(e, n, r, i);
    return o.ready().then(function(e) {
    return new s(e.frame, e.layout);
}
);
}, e(s);
});
});
    provide("tfw/util/tracking", function(e) {
    using("dom/cookie", "dom/delegate", "sandbox/minimal", "util/donottrack", "util/promise", "tfw/util/guest_cookie", "tfw/util/env", "util/iframe", "util/util", "$xd/json2.js", function(t, n, r, i, s, o, u, a, f) {
    function l() {
    return j?j: j=r.createSandbox( {
    id: "rufous-sandbox"}
,  {
    display: "none"}
).then(f.bind(function(e) {
    B=e, _=x(), D=T();
    while(P[0])g.apply(this, P.shift());
    return H?y(): [_, D];
}
, this));
}function c(e, t, n, r) {
    var i=!f.isObject(e), s=t?!f.isObject(t): !1, o, u;
    if(i||s)return;
    o=w(e), u=E(t, !!n, !!r), m(o, u, !0);
}
function h(e, n, r, s) {
    var a=A[n], l, c, h=o.guest_id_cookie;
    if(!a)return;
    e=e|| {
}
, s=!!s, r=!!r, c=e.original_redirect_referrer||document.referrer, s=s||i(c), l=f.aug( {
}
, e), r||(v(l, "referrer", c), v(l, "widget", +u.isDynamicWidget()), v(l, "hask", +!!t("k")), v(l, "li", +!!t("twid")), v(l, h, t(h)||"")), s&&(v(l, "dnt", 1), C(l)), N(a+"?"+S(l));
}
function p(e, t, n, r, i) {
    var s=d(e.target||e.srcElement);
    s.action=i||"click", c(s, t, n, r);
}
function d(e, t) {
    var n;
    return t=t|| {
}
, !e||e.nodeType!==1?t: ((n=e.getAttribute("data-scribe"))&&f.forEach(n.split(" "), function(e) {
    var n=f.trim(e).split(": "), r=n[0], i=n[1];
    r&&i&&!t[r]&&(t[r]=i);
}
), d(e.parentNode, t));
}function v(e, t, n) {
    var r=L+t;
    if(!e)return;
    return e[r]=n, e;
}
function m(e, t, n) {
    var r, i, s, o, u=F+"?";
    if(!f.isObject(e)||!f.isObject(t))return;
    s=f.aug( {
}
, t,  {
    event_namespace: e;
}
), n?(u+=S( {
    l: k(s);
}
), N(u)):(r=_.firstChild, r.value=+r.value||+s.dnt, o=k(s), i=B.createElement("input"), i.type="hidden", i.name="l", i.value=o, _.appendChild(i));
}function g(e, t, n, r) {
    var i=!f.isObject(e), s=t?!f.isObject(t): !1, o, u;
    if(i||s)return;
    if(!B||!_) {
    P.push([e, t, n, r]);
    return;
}
o=w(e), u=E(t, !!n, !!r), m(o, u);
}function y() {
    if(!_)return H=!0, j||s.reject();
    if(_.children.length<=2)return s.reject();
    var e=s.every(B.appendChild(_), B.appendChild(D)).then(function(e) {
    var t=e[0], r=e[1];
    return n.on(r, "load", function() {
    window.setTimeout(b(t, r), 0);
}
), t.submit(), e;
});
    return _=x(), D=T(), e;
}
function b(e, t) {
    return function() {
    var n=e.parentNode;
    if(!n)return;
    n.removeChild(e), n.removeChild(t);
}
}function w(e) {
    return f.aug( {
    client: "tfw"}
, e|| {
}
);
}
function E(e, t, n) {
    var r= {
    _category_: "tfw_client_event"}
, s, o;
    return t=!!t, n=!!n, s=f.aug(r, e|| {
}
), o=s.widget_origin||document.referrer, s.format_version=1, s.dnt=n=n||i(o), s.triggered_on=s.triggered_on||+(new Date), t||(s.widget_origin=o), n&&C(s), s;
}
function S(e) {
    var t=[], n, r, i;
    for(n in e)e.hasOwnProperty(n)&&(r=encodeURIComponent(n), i=encodeURIComponent(e[n]), i=i.replace(/'/g, "%27"), t.push(r+"="+i));
    return t.join("&");
}
function x() {
    var e=B.createElement("form"), t=B.createElement("input"), n=B.createElement("input");
    return M++, e.action=F, e.method="POST", e.target="rufous-frame-"+M, e.id="rufous-form-"+M, t.type="hidden", t.name="dnt", t.value=0, n.type="hidden", n.name="tfw_redirect", n.value=I, e.appendChild(t), e.appendChild(n), e;
}
function T() {
    var e="rufous-frame-"+M;
    return a( {
    id: e, name:e, width:0, height:0, border:0;
}
,  {
    display: "none"}
, B.document());
}function N(e) {
    var t=new Image;
    t.src=e;
}
function C(e) {
    f.forIn(e, function(t) {
    ~f.indexOf(O, t)&&delete e[t];
}
);
}function k(e) {
    var t=Array.prototype.toJSON, n;
    return delete Array.prototype.toJSON, n=JSON.stringify(e), t&&(Array.prototype.toJSON=t), n;
}
var L="twttr_", A= {
    tweetbutton: "//p.twitter.com/t.gif", followbutton:"//p.twitter.com/f.gif", tweetembed:"//p.twitter.com/e.gif"}
, O=["hask", "li", "logged_in", "pid", "user_id", o.guest_id_cookie, L+"hask", L+"li", L+o.guest_id_cookie], M=0, _, D, P=[], H, B, j, F="https://twitter.com/i/jot", I="https://platform.twitter.com/jot.html"
;
    o.forceNewCookie(), e( {
    enqueue: g, flush:y, initPostLogging:l, scribeInteraction:p, extractTermsFromDOM:d, addPixel:c, addLegacyPixel:h, addVar:v;
}
);
});
});
    provide("tfw/util/data", function(e) {
    using("util/logger", "util/util", "util/querystring", function(t, n, r) {
    function i(e) {
    return function(n) {
    n.error?e.error&&e.error(n): n.headers&&n.headers.status!=200?(e.error&&e.error(n), t.warn(n.headers.message)):e.success&&e.success(n), e.complete&&e.complete(n), s(e);
}
}function s(e) {
    var t=e.script;
    t&&(t.onload=t.onreadystatechange=null, t.parentNode&&t.parentNode.removeChild(t), e.script=undefined, t=undefined), e.callbackName&&twttr.tfw.callbacks[e.callbackName]&&delete twttr.tfw.callbacks[e.callbackName];
}
function o(e) {
    var t= {
}
;
    return e.success&&n.isType("function", e.success)&&(t.success=e.success), e.error&&n.isType("function", e.error)&&(t.error=e.error), e.complete&&n.isType("function", e.complete)&&(t.complete=e.complete), t;
}
window.twttr=window.twttr|| {
}
, twttr.tfw=twttr.tfw|| {
}
, twttr.tfw.callbacks=twttr.tfw.callbacks|| {
}
;
    var u="twttr.tfw.callbacks", a=twttr.tfw.callbacks, f="cb", l=0, c=!1, h= {
}
, p= {
    tweets: "https://syndication.twitter.com/tweets.json", timeline:"https://cdn.syndication.twimg.com/widgets/timelines/", timelinePoll:"https://syndication.twitter.com/widgets/timelines/paged/", timelinePreview:"https://syndication.twitter.com/widgets/timelines/preview/"}
;
    twttr.widgets&&twttr.widgets.endpoints&&n.aug(p, twttr.widgets.endpoints), h.jsonp=function(e, t, n) {
    var s=n||f+l, o=u+"."+s, h=document.createElement("script"), p= {
    callback: o, suppress_response_codes:!0;
}
;
    a[s]=i(t);
    if(c||!/^https?\: $/.test(window.location.protocol))e=e.replace(/^\/\//, "https://");
    h.src=r.url(e, p), h.async="async", document.body.appendChild(h), t.script=h, t.callbackName=s, n||l++}
, h.config=function(e) {
    if(e.forceSSL===!0||e.forceSSL===!1)c=e.forceSSL;
}
, h.tweets=function(e) {
    var t=arguments[0], n=o(t), i= {
    ids: e.ids.join(", "), lang:e.lang;
}
, s=r.url(p.tweets, i);
    this.jsonp(s, n);
}
, h.timeline=function(e) {
    var t=arguments[0], i=o(t), s, u=9e5, a=Math.floor(+(new Date)/u), f= {
    lang: e.lang, t:a, domain:window.location.host, dnt:e.dnt, override_type:e.overrideType, override_id:e.overrideId, override_name:e.overrideName, override_owner_id:e.overrideOwnerId, override_owner_name:e.overrideOwnerName, with_replies:e.withReplies;
}
;
    n.compact(f), s=r.url(p.timeline+e.id, f), this.jsonp(s, i, "tl_"+e.id+"_"+e.instanceId);
}
, h.timelinePoll=function(e) {
    var t=arguments[0], i=o(t), s= {
    lang: e.lang, since_id:e.sinceId, max_id:e.maxId, min_position:e.minPosition, max_position:e.maxPosition, domain:window.location.host, dnt:e.dnt, override_type:e.overrideType, override_id:e.overrideId, override_name:e.overrideName, override_owner_id:e.overrideOwnerId, override_owner_name:e.overrideOwnerName, with_replies:e.withReplies;
}
, u;
    n.compact(s), u=r.url(p.timelinePoll+e.id, s), this.jsonp(u, i, "tlPoll_"+e.id+"_"+e.instanceId+"_"+(e.sinceId||e.maxId||e.maxPosition||e.minPosition));
}
, h.timelinePreview=function(e) {
    var t=arguments[0], n=o(t), i=e.params, s=r.url(p.timelinePreview, i);
    this.jsonp(s, n);
}
, e(h);
});
});
    provide("anim/transition", function(e) {
    function t(e, t) {
    var n;
    return t=t||window, n=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||t.oRequestAnimationFrame||function(n) {
    t.setTimeout(function() {
    e(+(new Date));
}
, 1e3/60);
}, n(e);
}function n(e, t) {
    return Math.sin(Math.PI/2*t)*e;
}
function r(e, n, r, i, s) {
    function o() {
    var a=+(new Date), f=a-u, l=Math.min(f/r, 1), c=i?i(n, l): n*l;
    e(c);
    if(l==1)return;
    t(o, s);
}
var u=+(new Date), a;
    t(o);
}
e( {
    animate: r, requestAnimationFrame:t, easeOut:n;
}
);
});
    provide("util/datetime", function(e) {
    using("util/util", function(t) {
    function n(e) {
    return e<10?"0"+e: e;
}
function r(e) {
    function t(e, t) {
    return i&&i[e]&&(e=i[e]), e.replace(/%\ {
    ([\w_]+)\;
}
/g, function(e, n) {
    return t[n]!==undefined?t[n]: e;
}
);
}var i=e&&e.phrases, s=e&&e.months||u, o=e&&e.formats||a;
    this.timeAgo=function(e) {
    var n=r.parseDate(e), i=+(new Date), u=i-n, a;
    return n?isNaN(u)||u<f*2?t("now"): u<l?(a=Math.floor(u/f), t(o.abbr,  {
    number: a, symbol:t(p,  {
    abbr: t("s"), expanded:a>1?t("seconds"):t("second");
}
);
})):u<c?(a=Math.floor(u/l), t(o.abbr,  {
    number: a, symbol:t(p,  {
    abbr: t("m"), expanded:a>1?t("minutes"):t("minute");
}
);
})):u<h?(a=Math.floor(u/c), t(o.abbr,  {
    number: a, symbol:t(p,  {
    abbr: t("h"), expanded:a>1?t("hours"):t("hour");
}
);
})):u<h*365?t(o.shortdate,  {
    day: n.getDate(), month:t(s[n.getMonth()]);
}
):t(o.longdate,  {
    day: n.getDate(), month:t(s[n.getMonth()]), year:n.getFullYear().toString().slice(2);
}
):""}, this.localTimeStamp=function(e) {
    var i=r.parseDate(e), u=i&&i.getHours();
    return i?t(o.full,  {
    day: i.getDate(), month:t(s[i.getMonth()]), year:i.getFullYear(), hours24:n(u), hours12:u<13?u?u:"12":u-12, minutes:n(i.getMinutes()), seconds:n(i.getSeconds()), amPm:u<12?t("AM"):t("PM");
}
):""}}var i=/(\d {
    4;
}
)-?(\d {
    2;
}
)-?(\d {
    2;
}
)T(\d {
    2;
}
): ?(\d {
    2;
}
): ?(\d {
    2;
}
)(Z|[\+\-]\d {
    2;
}
: ?\d {
    2;
}
)/, s=/[a-z] {
    3, 4;
}
 ([a-z] {
    3;
}
) (\d {
    1, 2;
}
) (\d {
    1, 2;
}
): (\d {
    2;
}
): (\d {
    2;
}
) ([\+\-]\d {
    2;
}
: ?\d {
    2;
}
) (\d {
    4;
}
)/i, o=/^\d+$/, u=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], a= {
    abbr: "% {
    number;
}
% {
    symbol;
}
", shortdate: "% {
    day;
}
 % {
    month;
}
", longdate: "% {
    day;
}
 % {
    month;
}
 % {
    year;
}
", full: "% {
    hours12;
}
: % {
    minutes;
}
 % {
    amPm;
}
 - % {
    day;
}
 % {
    month;
}
 % {
    year;
}
"}, f=1e3, l=f*60, c=l*60, h=c*24, p='<abbr title="% {
    expanded;
}
">% {
    abbr;
}
</abbr>';
    r.parseDate=function(e) {
    var n=e||"", r=n.toString(), a, f;
    return a=function() {
    var e;
    if(o.test(r))return parseInt(r, 10);
    if(e=r.match(s))return Date.UTC(e[7], t.indexOf(u, e[1]), e[2], e[3], e[4], e[5]);
    if(e=r.match(i))return Date.UTC(e[1], e[2]-1, e[3], e[4], e[5], e[6]);
}
(), a?(f=new Date(a), !isNaN(f.getTime())&&f): !1;
}, e(r);
});
});
    provide("sandbox/frame", function(e) {
    using("sandbox/baseframe", "sandbox/minimal", "util/env", "util/promise", "util/util", function(t, n, r, i, s) {
    function o() {
    var e, t;
    c= {
}
;
    if(h)return;
    e=document.body.offsetHeight, t=document.body.offsetWidth;
    if(e==d&&t==p)return;
    s.forEach(l, function(e) {
    e.dispatchFrameResize(p, d);
}
), d=e, p=t;
}function u(e) {
    var t;
    return e.id?e.id: (t=e.getAttribute("data-twttr-id"))?t:(t="twttr-sandbox-"+f++, e.setAttribute("data-twttr-id", t), t);
}
function a(e, t) {
    n.apply(this, [e, t]), this._resizeHandlers=[], l.push(this), this._win.addEventListener?this._win.addEventListener("resize", s.bind(function() {
    this.dispatchFrameResize();
}
, this), !0): this._win.attachEvent("onresize", s.bind(function() {
    this.dispatchFrameResize(this._win.event);
}
, this));
}var f=0, l=[], c= {
}
, h, p=0, d=0;
    window.addEventListener?window.addEventListener("resize", o, !0): document.body.attachEvent("onresize", function() {
    o(window.event);
}
), a.prototype=new n, s.aug(a.prototype,  {
    dispatchFrameResize: function() {
    var e=this._frame.parentNode, t=u(e), n=c[t];
    h=!0;
    if(!this._resizeHandlers.length)return;
    n||(n=c[t]= {
    w: this._frame.offsetWidth, h:this._frame.offsetHeight;
}
);
    if(this._frameWidth==n.w&&this._frameHeight==n.h)return;
    this._frameWidth=n.w, this._frameHeight=n.h, s.forEach(this._resizeHandlers, function(e) {
    e(n.w, n.h);
}
), window.setTimeout(function() {
    c= {
}
}
, 50);
}, appendStyleSheet: function(e) {
    var t=this._doc.createElement("link");
    return t.type="text/css", t.rel="stylesheet", t.href=e, this.layout(s.bind(function() {
    return this._head.appendChild(t);
}
, this));
}, appendCss: function(e) {
    var t;
    return r.cspEnabled()?i.reject("CSP enabled;
     cannot embed inline styles."): (t=this._doc.createElement("style"), t.type="text/css", t.styleSheet?t.styleSheet.cssText=e:t.appendChild(this._doc.createTextNode(e)), this.layout(s.bind(function() {
    return this._head.appendChild(t);
}
, this)));
}, style: function(e) {
    return this.layout(s.bind(function() {
    s.forIn(e, s.bind(function(e, t) {
    this._frame.style[e]=t;
}
, this));
}, this));
}, onresize: function(e) {
    this._resizeHandlers.push(e);
}
, width: function(e) {
    return e!==undefined&&(this._frame.width=e), this._frame.offsetWidth;
}
, height: function(e) {
    return e!==undefined&&(this._frame.height=e), this._frame.offsetHeight;
}
}), a.createSandbox=function(e, n, r, i) {
    var s=new t(e, n, r, i);
    return s.ready().then(function(e) {
    return new a(e.frame, e.layout);
}
);
}, e(a);
});
});
    provide("tfw/util/assets", function(e) {
    using("util/env", function(t) {
    function n(e, n) {
    var i=r[e], s;
    return t.retina()?s="2x": t.ie6()||t.ie7()?s="gif":s="default", n&&(s+=".rtl"), i[s];
}
var r= {
    "embed/timeline.css":  {
    "default": "embed/timeline.037a0cac0aa5abbe2c1b5c5cd368d398.default.css", "2x":"embed/timeline.037a0cac0aa5abbe2c1b5c5cd368d398.2x.css", gif:"embed/timeline.037a0cac0aa5abbe2c1b5c5cd368d398.gif.css", "default.rtl":"embed/timeline.037a0cac0aa5abbe2c1b5c5cd368d398.default.rtl.css", "2x.rtl":"embed/timeline.037a0cac0aa5abbe2c1b5c5cd368d398.2x.rtl.css", "gif.rtl":"embed/timeline.037a0cac0aa5abbe2c1b5c5cd368d398.gif.rtl.css"}
};
    e(n);
}
);
});
    provide("tfw/widget/syndicatedbase", function(e) {
    using("tfw/widget/base", "tfw/widget/intent", "tfw/util/assets", "tfw/util/globals", "tfw/util/tracking", "dom/classname", "dom/get", "dom/delegate", "sandbox/frame", "util/env", "util/promise", "util/twitter", "util/util", function(t, n, r, i, s, o, u, a, f, l, c, h, p) {
    function d() {
    w=v.VALID_COLOR.test(i.val("widgets: link-color"))&&RegExp.$1, S=v.VALID_COLOR.test(i.val("widgets:border-color"))&&RegExp.$1, E=i.val("widgets:theme");
}
function v(e) {
    if(!e)return;
    var n;
    this.readyPromise=new c(p.bind(function(e) {
    this.readyResolver=e;
}
, this)), this.renderedPromise=new c(p.bind(function(e) {
    this.renderResolver=e;
}
, this)), t.apply(this, [e]), n=this.params(), this.targetEl=this.srcEl&&this.srcEl.parentNode||n.targetEl||document.body, this.predefinedWidth=v.VALID_UNIT.test(n.width||this.attr("width"))&&RegExp.$1, this.layout(p.bind(function() {
    return this.containerWidth=this.targetEl&&this.targetEl.offsetWidth;
}
, this)).then(p.bind(function(e) {
    var t=this.predefinedWidth||e||this.dimensions.DEFAULT_WIDTH;
    this.height=v.VALID_UNIT.test(n.height||this.attr("height"))&&RegExp.$1, this.width=Math.max(this.dimensions.MIN_WIDTH, Math.min(t, this.dimensions.DEFAULT_WIDTH));
}
, this)), v.VALID_COLOR.test(n.linkColor||this.dataAttr("link-color"))?this.linkColor=RegExp.$1: this.linkColor=w, v.VALID_COLOR.test(n.borderColor||this.dataAttr("border-color"))?this.borderColor=RegExp.$1:this.borderColor=S, this.theme=n.theme||this.attr("data-theme")||E, this.theme=/(dark|light)/.test(this.theme)?this.theme:"", this.classAttr.push(l.touch()?"is-touch":"not-touch"), l.ie9()&&this.classAttr.push("ie9"), f.createSandbox( {
    "class": this.renderedClassNames, id:this.id;
}
,  {
    width: "1px", height:"0px", border:"none", position:"absolute", visibility:"hidden"}
, p.bind(function(e) {
    this.srcEl?this.targetEl.insertBefore(e, this.srcEl): this.targetEl.appendChild(e);
}
, this), this.layout).then(p.bind(function(e) {
    this.setupSandbox(e);
}
, this));
}var m=[".customisable", ".customisable: link", ".customisable:visited", ".customisable:hover", ".customisable:focus", ".customisable:active", ".customisable-highlight:hover", ".customisable-highlight:focus", "a:hover .customisable-highlight", "a:focus .customisable-highlight"], g=["a:hover .ic-mask", "a:focus .ic-mask"], y=[".customisable-border"], b=[".timeline-header h1.summary", ".timeline-header h1.summary a:link", ".timeline-header h1.summary a:visited"], w, E, S, x= {
    TWEET: 0, RETWEET:10;
}
;
    v.prototype=new t, p.aug(v.prototype,  {
    setupSandbox: function(e) {
    this.sandbox=e, c.some(e.appendCss("body {
    display: none;
}
"), e.setBaseTarget("_blank"), e.appendStyleSheet(twttr.widgets.config.assetUrl()+"/"+r("embed/timeline.css"))).then(p.bind(function() {
    this.readyResolver.fulfill(e);
}
, this));
}, ready: function() {
    return this.readyPromise;
}
, rendered: function() {
    return this.renderedPromise;
}
, contentWidth: function(e) {
    var t=this.dimensions, n=this.fullBleedPhoto?0: this.chromeless&&this.narrow?t.NARROW_MEDIA_PADDING_CL:this.chromeless?t.WIDE_MEDIA_PADDING_CL:this.narrow?t.NARROW_MEDIA_PADDING:t.WIDE_MEDIA_PADDING;
    return(e||this.width)-n;
}
, addSiteStyles: function() {
    var e=p.bind(function(e) {
    return(this.theme=="dark"?".thm-dark ": "")+e;
}
, this), t=[];
    this.headingStyle&&t.push(p.map(b, e).join(", ")+" {
    "+this.headingStyle+"}
"), this.linkColor&&(t.push(p.map(m, e).join(", ")+" {
    color: "+this.linkColor+"}
"), t.push(p.map(g, e).join(", ")+" {
    background-color: "+this.linkColor+"}
")), this.borderColor&&t.push(p.map(y, e).concat(this.theme=="dark"?[".thm-dark.customisable-border"]:[]).join(", ")+" {
    border-color: "+this.borderColor+"}
");
    if(!t.length)return;
    return this.sandbox.appendCss(t.join(""));
}
, setNarrow: function() {
    var e=this.narrow;
    return this.narrow=this.width<this.dimensions.NARROW_WIDTH, e!=this.narrow?this.layout(p.bind(function() {
    return o.toggle(this.element, "var-narrow", this.narrow);
}
, this)): c.fulfill(this.narrow);
}, bindIntentHandlers:function() {
    function e(e) {
    var n=u.ancestor(".tweet", this, r), i=p.aug( {
}
, t.baseScribeData(), t.extractTweetScribeDetails(n));
    s.scribeInteraction(e, i, !0, t.dnt);
}
var t=this, r=this.element;
    a.delegate(r, "click", "A", e), a.delegate(r, "click", "BUTTON", e), a.delegate(r, "click", ".profile", function() {
    t.addUrlParams(this);
}
), a.delegate(r, "click", ".follow-button", function(e) {
    var r;
    if(e.altKey||e.metaKey||e.shiftKey)return;
    t.addUrlParams(this), r=h.intentForProfileURL(this.href), r&&(n.open(r, t.sandbox.element()), a.preventDefault(e));
}
), a.delegate(r, "click", ".web-intent", function(e) {
    t.addUrlParams(this);
    if(e.altKey||e.metaKey||e.shiftKey)return;
    n.open(this.href, t.sandbox.element()), a.preventDefault(e);
}
);
}, baseScribeData: function() {
    return {
}
}
, extractTweetScribeDetails: function(e) {
    var t, n, r= {
}
;
    return e?(t=e.getAttribute("data-tweet-id"), n=e.getAttribute("data-rendered-tweet-id")||t, n==t?r[n]= {
    item_type: x.TWEET;
}
:t&&(r[n]= {
    item_type: x.RETWEET, target_type:x.TWEET, target_id:t;
}
), r):r;
}, constrainMedia:function(e, t) {
    var n=0, r=this.fullBleedPhoto?500: 375;
    e=e||this.element, t=t||this.contentWidth();
    if(!e)return;
    return p.forEach(u.all("autosized-media", e), p.bind(function(e) {
    var i=v.scaleDimensions(e.getAttribute("data-width"), e.getAttribute("data-height"), t, r);
    this.layout(function() {
    i.width>0&&(e.width=i.width), i.height>0&&(e.height=i.height);
}
), n=i.height>n?i.height: n;
}, this)), n;
}}), v.VALID_UNIT=/^([0-9]+)( ?px)?$/, v.VALID_COLOR=/^(#(?:[0-9a-f] {
    3;
}
|[0-9a-f] {
    6;
}
))$/i, v.retinize=function(e) {
    if(!l.retina())return;
    p.forEach(e.getElementsByTagName("IMG"), function(e) {
    var t=e.getAttribute("data-src-2x");
    t&&(e.src=t);
}
);
}, v.scaleDimensions=function(e, t, n, r) {
    return t>e&&t>r&&(e*=r/t, t=r), e>n&&(t*=n/e, e=n, t>r&&(e*=r/t, t=r)),  {
    width: Math.ceil(e), height:Math.ceil(t);
}
}, d(), e(v);
});
});
    provide("tfw/widget/timeline", function(e) {
    using("tfw/widget/base", "tfw/widget/syndicatedbase", "util/datetime", "util/promise", "anim/transition", "tfw/util/article", "tfw/util/data", "tfw/util/tracking", "tfw/util/params", "util/css", "util/env", "util/throttle", "util/twitter", "util/querystring", "util/typevalidator", "util/util", "dom/delegate", "dom/classname", "dom/get", function(t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b) {
    function w(e) {
    if(!e)return;
    var t, r, i, s, o, u, a, f;
    n.apply(this, [e]), t=this.params(), r=(t.chrome||this.dataAttr("chrome")||"").split(" "), this.preview=t.previewParams, this.widgetId=t.widgetId||this.dataAttr("widget-id"), this.instanceId=++I, this.cursors= {
    maxPosition: 0, minPosition:0;
}
, (s=t.screenName||this.dataAttr("screen-name"))||(o=t.userId||this.dataAttr("user-id"))?this.override= {
    overrideType: "user", overrideId:o, overrideName:s, withReplies:v.asBoolean(t.showReplies||this.dataAttr("show-replies"))?"true":"false"}
:(s=t.favoritesScreenName||this.dataAttr("favorites-screen-name"))||(o=t.favoritesUserId||this.dataAttr("favorites-user-id"))?this.override= {
    overrideType: "favorites", overrideId:o, overrideName:s;
}
:((s=t.listOwnerScreenName||this.dataAttr("list-owner-screen-name"))||(o=t.listOwnerId||this.dataAttr("list-owner-id")))&&((u=t.listId||this.dataAttr("list-id"))||(a=t.listSlug||this.dataAttr("list-slug")))?this.override= {
    overrideType: "list", overrideOwnerId:o, overrideOwnerName:s, overrideId:u, overrideName:a;
}
:(f=t.customTimelineId||this.dataAttr("custom-timeline-id"))?this.override= {
    overrideType: "custom", overrideId:f;
}
:this.override= {
}
, this.tweetLimit=v.asInt(t.tweetLimit||this.dataAttr("tweet-limit")), this.staticTimeline=this.tweetLimit>0, r.length&&(i=~m.indexOf(r, "none"), this.chromeless=i||~m.indexOf(r, "transparent"), this.headerless=i||~m.indexOf(r, "noheader"), this.footerless=i||~m.indexOf(r, "nofooter"), this.borderless=i||~m.indexOf(r, "noborders"), this.noscrollbar=~m.indexOf(r, "noscrollbar")), this.headingStyle=l.sanitize(t.headingStyle||this.dataAttr("heading-style"), undefined, !0), this.classAttr.push("twitter-timeline-rendered"), this.ariaPolite=t.ariaPolite||this.dataAttr("aria-polite");
}
var E="1.0", S= {
    CLIENT_SIDE_USER: 0, CLIENT_SIDE_APP:2;
}
, x="timeline", T="new-tweets-bar", N="timeline-header", C="timeline-footer", k="stream", L="h-feed", A="tweet", O="expanded", M="detail-expander", _="expand", D="permalink", P="twitter-follow-button", H="no-more-pane", B="pending-scroll-in", j="pending-new-tweet", F="pending-new-tweet-display", I=0;
    w.prototype=new n, m.aug(w.prototype,  {
    renderedClassNames: "twitter-timeline twitter-timeline-rendered", dimensions: {
    DEFAULT_HEIGHT: "600", DEFAULT_WIDTH:"520", NARROW_WIDTH:"320", MIN_WIDTH:"180", MIN_HEIGHT:"200", WIDE_MEDIA_PADDING:81, NARROW_MEDIA_PADDING:16, WIDE_MEDIA_PADDING_CL:60, NARROW_MEDIA_PADDING_CL:12;
}
, create:function(e) {
    var r=this.sandbox.createElement("div"), i, s, o, u=[], f;
    r.innerHTML=e.body, i=r.children[0]||!1;
    if(!i)return;
    return this.reconfigure(e.config), this.discardStaticOverflow(i), this.sandbox.setTitle(i.getAttribute("data-iframe-title")||"Timeline"), n.retinize(i), this.constrainMedia(i), this.searchQuery=i.getAttribute("data-search-query"), this.profileId=i.getAttribute("data-profile-id"), this.timelineType=i.getAttribute("data-timeline-type"), f=this.getTweetDetails(r), m.forIn(f, function(e) {
    u.push(e);
}
), o=this.baseScribeData(), o.item_ids=u, o.item_details=f, this.timelineType&&a.enqueue( {
    page: this.timelineType+"_timeline", component:"timeline", element:"initial", action:u.length?"results":"no_results"}
, o, !0, this.dnt), a.enqueue( {
    page: "timeline", component:"timeline", element:"initial", action:u.length?"results":"no_results"}
, o, !0, this.dnt), a.flush(), this.ariaPolite=="assertive"&&(s=b.one(T, i, "DIV"), s.setAttribute("aria-polite", "assertive")), i.id=this.id, i.className+=" "+this.classAttr.join(" "), i.lang=this.lang, this.augmentWidgets(i), this.ready().then(m.bind(function(e) {
    e.appendChild(i).then(m.bind(function() {
    this.renderResolver.fulfill(this.sandbox);
}
, this)), e.style( {
    cssText: "", border:"none", maxWidth:"100%", minWidth:this.dimensions.MIN_WIDTH+"px"}
), this.layout(m.bind(function() {
    this.srcEl&&this.srcEl.parentNode&&this.srcEl.parentNode.removeChild(this.srcEl), this.predefinedWidth=this.width, this.predefinedHeight=this.height, this.width=e.width(this.width), this.height=e.height(this.height);
}
, this)).then(m.bind(function() {
    this.completeResolver.fulfill(this.sandbox.element()), this.width<this.predefinedWidth&&(this.layout(m.bind(function() {
    this.width=e.width(this.predefinedWidth);
}
, this)), t.doLayoutAsync()), this.height<this.predefinedHeight&&(this.layout(m.bind(function() {
    this.height=e.height(this.predefinedHeight), this.recalculateStreamHeight();
}
, this)), t.doLayoutAsync());
}, this)), this.setNarrow().then(m.bind(function() {
    this.sandbox.onresize(m.bind(this.handleResize, this));
}
, this));
}, this)), i;
}, render: function(e, n) {
    return!this.preview&&!this.widgetId?(this.completeResolver.reject(400), this.completed()): (this.staticTimeline?this.rendered().then(m.bind(function(e) {
    this.layout(m.bind(function() {
    e.height(this.height=this.element.offsetHeight);
}
, this)), t.doLayoutAsync();
}, this)): this.rendered().then(m.bind(function() {
    this.recalculateStreamHeight(), t.doLayoutAsync();
}
, this)), this.preview?this.getPreviewTimeline(): this.getTimeline(), n&&this.completed().then(n), this.completed());
}, getPreviewTimeline:function() {
    u.timelinePreview( {
    success: m.bind(function(e) {
    this.ready().then(m.bind(function() {
    this.element=this.create(e), this.readTranslations(), this.bindInteractions(), this.updateCursors(e.headers,  {
    initial: !0;
}
), t.doLayoutAsync();
}, this));
}, this), error:function(e) {
    if(!e||!e.headers) {
    this.completeResolver.fulfill(this.srcEl);
    return;
}
this.completeResolver.reject(e.headers.status);
}, params: this.preview;
});
}, getTimeline:function() {
    a.initPostLogging(), u.timeline(m.aug( {
    id: this.widgetId, instanceId:this.instanceId, dnt:this.dnt, lang:this.lang, success:m.bind(function(e) {
    this.ready().then(m.bind(function() {
    this.element=this.create(e), this.readTranslations(), this.bindInteractions(), this.updateTimeStamps(), this.updateCursors(e.headers,  {
    initial: !0;
}
), e.headers.xPolling&&/\d/.test(e.headers.xPolling)&&(this.pollInterval=e.headers.xPolling*1e3), this.staticTimeline||this.schedulePolling(), t.doLayoutAsync();
}, this));
}, this), error:function(e) {
    if(!e||!e.headers) {
    this.completeResolver.fulfill(this.srcEl);
    return;
}
this.completeResolver.reject(e.headers.status);
}}, this.override));
}, reconfigure: function(e) {
    this.lang=e.lang, this.theme||(this.theme=e.theme), this.theme=="dark"&&this.classAttr.push("thm-dark"), this.chromeless&&this.classAttr.push("var-chromeless"), this.borderless&&this.classAttr.push("var-borderless"), this.headerless&&this.classAttr.push("var-headerless"), this.footerless&&this.classAttr.push("var-footerless"), this.staticTimeline&&this.classAttr.push("var-static"), !this.linkColor&&e.linkColor&&n.VALID_COLOR.test(e.linkColor)&&(this.linkColor=RegExp.$1), !this.height&&n.VALID_UNIT.test(e.height)&&(this.height=RegExp.$1), this.height=Math.max(this.dimensions.MIN_HEIGHT, this.height?this.height: this.dimensions.DEFAULT_HEIGHT), this.preview&&this.classAttr.push("var-preview"), this.narrow=this.width<=this.dimensions.NARROW_WIDTH, this.narrow&&this.classAttr.push("var-narrow"), this.addSiteStyles();
}
, getTweetDetails:function(e) {
    var t=b.one(L, e), n, r= {
}
, i, s, o=0;
    n=t&&t.children||[];
    for(;
    i=n[o];
    o++)s=b.one(D, i, "A"), m.aug(r, this.extractTweetScribeDetails(i));
    return r;
}
, baseScribeData: function() {
    return {
    widget_id: this.widgetId, widget_origin:o.url(), client_version:E, message:this.partner, query:this.searchQuery, profile_id:this.profileId;
}
}, bindInteractions:function() {
    var e=this, t=this.element, n=!0;
    this.bindIntentHandlers(), g.delegate(t, "click", ".load-tweets", function(t) {
    n&&(n=!1, e.forceLoad(), g.stop(t));
}
), g.delegate(t, "click", ".display-sensitive-image", function(n) {
    e.showNSFW(b.ancestor("."+A, this, t)), g.stop(n);
}
), g.delegate(t, "mouseover", "."+x, function() {
    e.mouseOver=!0;
}
), g.delegate(t, "mouseout", "."+x, function() {
    e.mouseOver=!1;
}
), g.delegate(t, "mouseover", "."+T, function() {
    e.mouseOverNotifier=!0;
}
), g.delegate(t, "mouseout", "."+T, function() {
    e.mouseOverNotifier=!1, window.setTimeout(function() {
    e.hideNewTweetNotifier();
}
, 3e3);
});
    if(this.staticTimeline)return;
    g.delegate(t, "click", "."+_, function(n) {
    if(n.altKey||n.metaKey||n.shiftKey)return;
    e.toggleExpando(b.ancestor("."+A, this, t)), g.stop(n);
}
), g.delegate(t, "click", "A", function(e) {
    g.stopPropagation(e);
}
), g.delegate(t, "click", ".with-expansion", function(t) {
    e.toggleExpando(this), g.stop(t);
}
), g.delegate(t, "click", ".load-more", function() {
    e.loadMore();
}
), g.delegate(t, "click", "."+T, function() {
    e.scrollToTop(), e.hideNewTweetNotifier(!0);
}
);
}, scrollToTop: function() {
    var e=b.one(k, this.element, "DIV");
    e.scrollTop=0, e.focus();
}
, update: function() {
    var e=this, t=b.one(L, this.element), n=t&&t.children[0], r=n&&n.getAttribute("data-tweet-id");
    this.updateTimeStamps(), this.requestTweets(r, !0, function(t) {
    t.childNodes.length>0&&e.insertNewTweets(t);
}
);
}, loadMore: function() {
    var e=this, t=b.all(A, this.element, "LI").pop(), n=t&&t.getAttribute("data-tweet-id");
    this.requestTweets(n, !1, function(t) {
    var r=b.one(H, e.element, "P"), i=t.childNodes[0];
    r.style.cssText="", i&&i.getAttribute("data-tweet-id")==n&&t.removeChild(i);
    if(t.childNodes.length>0) {
    e.appendTweets(t);
    return;
}
y.add(e.element, "no-more"), r.focus();
});
}, forceLoad: function() {
    var e=this, t=!!b.all(L, this.element, "OL").length;
    this.requestTweets(1, !0, function(n) {
    n.childNodes.length&&(e[t?"insertNewTweets": "appendTweets"](n), y.add(e.element, "has-tweets"));
}
);
}, schedulePolling:function(e) {
    var t=this;
    if(this.pollInterval===null)return;
    e=twttr.widgets.poll||e||this.pollInterval||1e4, e>-1&&window.setTimeout(function() {
    this.isUpdating||t.update(), t.schedulePolling();
}
, e);
}, updateCursors: function(e, t) {
    (t|| {
}
).initial?(this.cursors.maxPosition=e.maxPosition, this.cursors.minPosition=e.minPosition): (t|| {
}
).newer?this.cursors.maxPosition=e.maxPosition||this.cursors.maxPosition:this.cursors.minPosition=e.minPosition||this.cursors.minPosition;
}
, requestTweets:function(e, t, r) {
    var i=this, s= {
    id: this.widgetId, instanceId:this.instanceId, screenName:this.widgetScreenName, userId:this.widgetUserId, withReplies:this.widgetShowReplies, dnt:this.dnt, lang:this.lang;
}
;
    t&&this.cursors.maxPosition?s.minPosition=this.cursors.maxPosition: !t&&this.cursors.minPosition?s.maxPosition=this.cursors.minPosition:t?s.sinceId=e:s.maxId=e, s.complete=function() {
    this.isUpdating=!1;
}
, s.error=function(e) {
    if(e&&e.headers) {
    if(e.headers.status=="404") {
    i.pollInterval=null;
    return;
}
if(e.headers.status=="503") {
    i.pollInterval*=1.5;
    return;
}
}}, s.success=function(e) {
    var s=i.sandbox.createDocumentFragment(), o=i.sandbox.createElement("div"), u, f=[], l, c;
    i.updateCursors(e.headers,  {
    newer: t;
}
), e&&e.headers&&e.headers.xPolling&&/\d+/.test(e.headers.xPolling)&&(i.pollInterval=e.headers.xPolling*1e3);
    if(e&&e.body!==undefined) {
    o.innerHTML=e.body;
    if(o.children[0]&&o.children[0].tagName!="LI")return;
    l=i.getTweetDetails(o);
    for(c in l)l.hasOwnProperty(c)&&f.push(c);
    f.length&&(u=i.baseScribeData(), u.item_ids=f, u.item_details=l, u.event_initiator=t?S.CLIENT_SIDE_APP: S.CLIENT_SIDE_USER, this.timelineType&&a.enqueue( {
    page: this.timelineType+"_timeline", component:"timeline", element:"initial", action:f.length?"results":"no_results"}
, u, !0, this.dnt), a.enqueue( {
    page: "timeline", component:"timeline", element:t?"newer":"older", action:"results"}
, u, !0, i.dnt), a.flush()), n.retinize(o), i.constrainMedia(o);
    while(o.children[0])s.appendChild(o.children[0]);
    r(s);
}
}, u.timelinePoll(m.aug(s, this.override));
}, insertNewTweets: function(e) {
    var t=this, n=b.one(k, this.element, "DIV"), r=b.one(L, n, "OL"), i=r.offsetHeight, o;
    r.insertBefore(e, r.firstChild), o=r.offsetHeight-i;
    if(n.scrollTop>40||this.mouseIsOver()) {
    n.scrollTop=n.scrollTop+o, this.updateTimeStamps(), this.showNewTweetNotifier();
    return;
}
y.remove(this.element, B), r.style.cssText="margin-top:  -"+o+"px", window.setTimeout(function() {
    n.scrollTop=0, y.add(t.element, B), c.cssTransitions()?r.style.cssText="": s.animate(function(e) {
    e<o?r.style.cssText="margin-top:  -"+(o-e)+"px":r.style.cssText=""}
, o, 500, s.easeOut);
}, 500), this.updateTimeStamps(), this.timelineType!="custom"&&this.gcTweets(50);
}, appendTweets:function(e) {
    var t=b.one(k, this.element, "DIV"), n=b.one(L, t, "OL");
    n.appendChild(e), this.updateTimeStamps();
}
, gcTweets: function(e) {
    var t=b.one(L, this.element, "OL"), n=t.children.length, r;
    e=e||50;
    for(;
    n>e&&(r=t.children[n-1]);
    n--)t.removeChild(r);
}
, showNewTweetNotifier: function() {
    var e=this, t=b.one(T, this.element, "DIV"), n=t.children[0];
    t.style.cssText="", t.removeChild(n), t.appendChild(n), y.add(this.element, F), window.setTimeout(function() {
    y.add(e.element, j);
}
, 10), this.newNoticeDisplayTime=+(new Date), window.setTimeout(function() {
    e.hideNewTweetNotifier();
}
, 5e3);
}, hideNewTweetNotifier: function(e) {
    var t=this;
    if(!e&&this.mouseOverNotifier)return;
    y.remove(this.element, j), window.setTimeout(function() {
    y.remove(t.element, F);
}
, 500);
}, augmentWidgets: function(e) {
    var t=b.one(P, e, "A");
    if(!t)return;
    t.setAttribute("data-related", this.related), t.setAttribute("data-partner", this.partner), t.setAttribute("data-dnt", this.dnt), t.setAttribute("data-search-query", this.searchQuery), t.setAttribute("data-profile-id", this.profileId), this.width<250&&t.setAttribute("data-show-screen-name", "false"), twttr.widgets.load(t.parentNode);
}
, discardStaticOverflow: function(e) {
    var t=b.one(L, e, "OL"), n;
    if(this.staticTimeline) {
    this.height=0;
    while(n=t.children[this.tweetLimit])t.removeChild(n);
}
}, hideStreamScrollBar: function() {
    var e=b.one(k, this.element, "DIV"), t=b.one(L, this.element, "OL"), n;
    e.style.width="", n=this.element.offsetWidth-t.offsetWidth, n>0&&(e.style.width=this.element.offsetWidth+n+"px");
}
, readTranslations: function() {
    var e=this.element, t="data-dt-";
    this.datetime=new r(m.compact( {
    phrases:  {
    now: e.getAttribute(t+"now"), s:e.getAttribute(t+"s"), m:e.getAttribute(t+"m"), h:e.getAttribute(t+"h"), second:e.getAttribute(t+"second"), seconds:e.getAttribute(t+"seconds"), minute:e.getAttribute(t+"minute"), minutes:e.getAttribute(t+"minutes"), hour:e.getAttribute(t+"hour"), hours:e.getAttribute(t+"hours");
}
, months:e.getAttribute(t+"months").split("|"), formats: {
    abbr: e.getAttribute(t+"abbr"), shortdate:e.getAttribute(t+"short"), longdate:e.getAttribute(t+"long");
}
}));
}, updateTimeStamps:function() {
    var e=b.all(D, this.element, "A"), t, n, r=0, i, s;
    for(;
    t=e[r];
    r++) {
    i=t.getAttribute("data-datetime"), s=i&&this.datetime.timeAgo(i, this.i18n), n=t.getElementsByTagName("TIME")[0];
    if(!s)continue;
    if(n&&n.innerHTML) {
    n.innerHTML=s;
    continue;
}
t.innerHTML=s;
}}, mouseIsOver: function() {
    return this.mouseOver;
}
, addUrlParams: function(e) {
    var t=this, n= {
    tw_w: this.widgetId, related:this.related, partner:this.partner, query:this.searchQuery, profile_id:this.profileId, original_referer:o.url(), tw_p:"embeddedtimeline"}
;
    return this.addUrlParams=f(n, function(e) {
    var n=b.ancestor("."+A, e, t.element);
    return n&& {
    tw_i: n.getAttribute("data-tweet-id");
}
}), this.addUrlParams(e);
}, showNSFW:function(e) {
    var t=b.one("nsfw", e, "DIV"), r, i, s=0, o, u, a, f;
    if(!t)return;
    i=n.scaleDimensions(t.getAttribute("data-width"), t.getAttribute("data-height"), this.contentWidth(), t.getAttribute("data-height")), r=!!(u=t.getAttribute("data-player")), r?a=this.sandbox.createElement("iframe"): (a=this.sandbox.createElement("img"), u=t.getAttribute(c.retina()?"data-image-2x":"data-image"), a.alt=t.getAttribute("data-alt"), f=this.sandbox.createElement("a"), f.href=t.getAttribute("data-href"), f.appendChild(a)), a.title=t.getAttribute("data-title"), a.src=u, a.width=i.width, a.height=i.height, o=b.ancestor("."+M, t, e), s=i.height-t.offsetHeight, t.parentNode.replaceChild(r?a:f, t), o.style.cssText="height:"+(o.offsetHeight+s)+"px"}
, toggleExpando:function(e) {
    var r=b.one(M, e, "DIV"), i=r&&r.children[0], s=i&&i.getAttribute("data-expanded-media"), o, u=0, a=b.one(_, e, "A"), f=a&&a.getElementsByTagName("B")[0], l=f&&(f.innerText||f.textContent), c;
    if(!f)return;
    this.layout(function() {
    f.innerHTML=a.getAttribute("data-toggled-text"), a.setAttribute("data-toggled-text", l);
}
);
    if(y.present(e, O)) {
    this.layout(function() {
    y.remove(e, O);
}
);
    if(!r) {
    t.doLayout();
    return;
}
this.layout(function() {
    r.style.cssText="", i.innerHTML=""}
), t.doLayout();
    return;
}
s&&(o=this.sandbox.createElement("DIV"), o.innerHTML=s, n.retinize(o), u=this.constrainMedia(o), this.layout(function() {
    i.appendChild(o);
}
)), r&&this.layout(function() {
    c=Math.max(i.offsetHeight, u), r.style.cssText="height: "+c+"px"}
), this.layout(function() {
    y.add(e, O);
}
), t.doLayout();
}, recalculateStreamHeight: function(e) {
    var t=b.one(N, this.element, "DIV"), n=b.one(C, this.element, "DIV"), r=b.one(k, this.element, "DIV");
    this.layout(m.bind(function() {
    var i=t.offsetHeight+(n?n.offsetHeight: 0), s=e||this.sandbox.height();
    r.style.cssText="height: "+(s-i-2)+"px", this.noscrollbar&&this.hideStreamScrollBar();
}
, this));
}, handleResize:function(e, n) {
    var r=Math.min(this.dimensions.DEFAULT_WIDTH, Math.max(this.dimensions.MIN_WIDTH, Math.min(this.predefinedWidth||this.dimensions.DEFAULT_WIDTH, e)));
    if(r==this.width&&n==this.height)return;
    this.width=r, this.height=n, this.setNarrow(), this.constrainMedia(this.element, this.contentWidth(r)), this.staticTimeline?this.layout(m.bind(function() {
    this.height=this.element.offsetHeight, this.sandbox.height(this.height);
}
, this)): this.recalculateStreamHeight(n), t.doLayoutAsync();
}}), e(w);
});
});
    provide("tfw/widget/embed", function(e) {
    using("tfw/widget/base", "tfw/widget/syndicatedbase", "util/datetime", "tfw/util/params", "dom/classname", "dom/get", "util/env", "util/promise", "util/util", "util/throttle", "util/twitter", "tfw/util/article", "tfw/util/data", "tfw/util/tracking", function(t, n, r, i, s, o, u, a, f, l, c, h, p, d) {
    function v(e, t, n, r) {
    var i=o.one("subject", e, "BLOCKQUOTE"), s=o.one("reply", e, "BLOCKQUOTE"), u=i&&i.getAttribute("data-tweet-id"), a=s&&s.getAttribute("data-tweet-id"), l= {
}
, c= {
}
;
    if(!u)return;
    l[u]= {
    item_type: 0;
}
, d.enqueue( {
    page: "tweet", section:"subject", component:"tweet", action:"results"}
, f.aug( {
}
, t,  {
    item_ids: [u], item_details:l;
}
), !0, r);
    if(!a)return;
    c[a]= {
    item_type: 0;
}
, d.enqueue( {
    page: "tweet", section:"conversation", component:"tweet", action:"results"}
, f.aug( {
}
, t,  {
    item_ids: [a], item_details:c, associations: {
    4:  {
    association_id: u, association_type:4;
}
}}), !0, r);
}function m(e, t, n) {
    var r= {
}
;
    if(!e)return;
    r[e]= {
    item_type: 0;
}
, d.enqueue( {
    page: "tweet", section:"subject", component:"rawembedcode", action:"no_results"}
,  {
    client_version: w, widget_origin:h.url(), widget_frame:h.frameUrl(), message:t, item_ids:[e], item_details:r;
}
, !0, n);
}function g(e, t, n, r) {
    S[e]=S[e]||[], S[e].push( {
    s: n, f:r, lang:t;
}
);
}function y() {
    T.length&&twttr.widgets.load(T);
}
function b(e) {
    if(!e)return;
    var t, r, i;
    n.apply(this, [e]), t=this.params(), r=this.srcEl&&this.srcEl.getElementsByTagName("A"), i=r&&r[r.length-1], this.hideThread=(t.conversation||this.dataAttr("conversation"))=="none"||~f.indexOf(this.classAttr, "tw-hide-thread"), this.hideCard=(t.cards||this.dataAttr("cards"))=="hidden"||~f.indexOf(this.classAttr, "tw-hide-media");
    if((t.align||this.attr("align"))=="left"||~f.indexOf(this.classAttr, "tw-align-left"))this.align="left";
    else if((t.align||this.attr("align"))=="right"||~f.indexOf(this.classAttr, "tw-align-right"
))this.align="right";
    else if((t.align||this.attr("align"))=="center"||~f.indexOf(this.classAttr, "tw-align-center"))this.align="center", this.containerWidth>this.dimensions.MIN_WIDTH*(1/.7)&&this.width>this.containerWidth*.7&&(this.width=this.containerWidth*.7);
    this.narrow=t.narrow||this.width<=this.dimensions.NARROW_WIDTH, this.narrow&&this.classAttr.push("var-narrow"), this.tweetId=t.tweetId||i&&c.status(i.href);
}
var w="2.0", E="tweetembed", S= {
}
, x=[], T=[];
    b.prototype=new n, f.aug(b.prototype,  {
    renderedClassNames: "twitter-tweet twitter-tweet-rendered", dimensions: {
    DEFAULT_HEIGHT: "0", DEFAULT_WIDTH:"500", NARROW_WIDTH:"350", MIN_WIDTH:"220", MIN_HEIGHT:"0", WIDE_MEDIA_PADDING:32, NARROW_MEDIA_PADDING:32;
}
, create:function(e) {
    var t=this.sandbox.createElement("div"), r;
    t.innerHTML=e, r=t.children[0]||!1;
    if(!r)return;
    return this.theme=="dark"&&this.classAttr.push("thm-dark"), this.linkColor&&this.addSiteStyles(), s.present(r, "media-forward")&&(this.fullBleedPhoto=!0), this.augmentWidgets(r), n.retinize(r), r.id=this.id, r.className+=" "+this.classAttr.join(" "), r.lang=this.lang, this.sandbox.setTitle(r.getAttribute("data-iframe-title")||"Tweet"), this.sandbox.appendChild(r).then(f.bind(function() {
    this.renderResolver.fulfill(this.sandbox);
}
, this)), this.sandbox.style( {
    cssText: "", display:"block", maxWidth:"99%", minWidth:this.dimensions.MIN_WIDTH+"px", padding:"0", borderRadius:"5px", margin:"10px 0", border:"#ddd 1px solid", borderTopColor:"#eee", borderBottomColor:"#bbb", boxShadow:"0 1px 3px rgba(0, 0, 0, 0.15)", position:"absolute", visibility:"hidden"}
), this.layout(f.bind(function() {
    this.predefinedWidth=this.width, this.width=this.sandbox.width(this.width);
}
, this), "Insert Sandbox"), this.setNarrow().then(f.bind(function() {
    this.constrainMedia(r, this.contentWidth(this.width)), this.layout(f.bind(function() {
    this.completeResolver.fulfill(this.sandbox.element());
}
, this));
}, this)), v(r, this.baseScribeData(), this.partner, this.dnt), r;
}, render: function(e, n) {
    var r="", i=this.tweetId;
    return i?(this.hideCard&&(r+="c"), this.hideThread&&(r+="t"), r&&(i+="-"+r), this.rendered().then(f.bind(function(e) {
    this.srcEl&&this.srcEl.parentNode&&this.layout(f.bind(function() {
    this.srcEl&&this.srcEl.parentNode&&this.srcEl.parentNode.removeChild(this.srcEl);
}
, this), "Remove Embed Code"), this.align=="center"?e.style( {
    margin: "7px auto", cssFloat:"none"}
):this.align&&(this.width==this.dimensions.DEFAULT_WIDTH&&(this.predefinedWidth=this.width=this.dimensions.NARROW_WIDTH), e.style( {
    cssFloat: this.align;
}
)), this.layout(f.bind(function() {
    this.height=this.sandbox.height(this.element.offsetHeight);
}
, this)).then(f.bind(function() {
    return t.doLayoutAsync(), this.layout(f.bind(function() {
    this.height=this.sandbox.height(this.element.offsetHeight);
}
, this));
}, this)).then(f.bind(function() {
    e.onresize(f.bind(this.handleResize, this));
}
, this)), e.style( {
    position: "static", visibility:"visible"}
), t.doLayoutAsync();
}, this)), g(i, this.lang, f.bind(function(e) {
    this.ready().then(f.bind(function() {
    this.element=this.create(e), this.readTimestampTranslations(), this.updateTimeStamps(), this.bindIntentHandlers(), t.doLayoutAsync();
}
, this));
}, this), f.bind(function() {
    m(this.tweetId, this.partner, this.dnt), this.completeResolver.fulfill(this.srcEl);
}
, this)), x.push(this.rendered()), n&&this.completed().then(n), this.completed()): (this.completeResolver.fulfill(this.srcEl), this.completed());
}, augmentWidgets:function(e) {
    var t=o.one("twitter-follow-button", e, "A");
    if(!t)return;
    t.setAttribute("data-related", this.related), t.setAttribute("data-partner", this.partner), t.setAttribute("data-dnt", this.dnt), t.setAttribute("data-show-screen-name", "false"), T.push(t.parentNode);
}
, addUrlParams: function(e) {
    var t=this, n= {
    related: this.related, partner:this.partner, original_referer:h.url(), tw_p:E;
}
;
    return this.addUrlParams=i(n, function(e) {
    var n=o.ancestor(".tweet", e, t.element);
    return {
    tw_i: n.getAttribute("data-tweet-id");
}
}), this.addUrlParams(e);
}, baseScribeData:function() {
    return {
    client_version: w, widget_origin:h.url(), widget_frame:h.frameUrl(), message:this.partner;
}
}, handleResize:function(e) {
    var n=Math.min(this.dimensions.DEFAULT_WIDTH, Math.max(this.dimensions.MIN_WIDTH, Math.min(this.predefinedWidth||this.dimensions.DEFAULT_WIDTH, e)));
    if(n==this.width)return;
    this.width=n, this.setNarrow(), this.constrainMedia(this.element, this.contentWidth(n)), this.layout(f.bind(function() {
    this.height=this.element.offsetHeight, this.sandbox.height(this.height);
}
, this), "Embed Resize"), t.doLayoutAsync();
}, readTimestampTranslations: function() {
    var e=this.element, t="data-dt-", n=e.getAttribute(t+"months")||"";
    this.datetime=new r(f.compact( {
    phrases:  {
    AM: e.getAttribute(t+"am"), PM:e.getAttribute(t+"pm");
}
, months:n.split("|"), formats: {
    full: e.getAttribute(t+"full");
}
}));
}, updateTimeStamps:function() {
    var e=o.one("long-permalink", this.element, "A"), n=e.getAttribute("data-datetime"), r=n&&this.datetime.localTimeStamp(n), i=e.getElementsByTagName("TIME")[0];
    if(!r)return;
    this.layout(function() {
    if(i&&i.innerHTML) {
    i.innerHTML=r;
    return;
}
e.innerHTML=r;
}, "Update Timestamp"), t.doLayoutAsync();
}}), b.fetchAndRender=function() {
    var e=S, n=[], r, i;
    S= {
}
;
    if(e.keys)n=e.keys();
    else for(r in e)e.hasOwnProperty(r)&&n.push(r);
    if(!n.length)return;
    d.initPostLogging(), i=e[n[0]][0].lang, p.tweets( {
    ids: n.sort(), lang:i, complete:function(n) {
    f.forIn(n, function(t, n) {
    var r=e[t];
    f.forEach(r, function(e) {
    e.s&&e.s.call(this, n);
}
), delete e[t];
}), t.doLayout(), f.forIn(e, function(e, t) {
    f.forEach(t, function(t) {
    t.f&&t.f.call(this, e);
}
);
}), t.doLayout();
}}), a.every.apply(null, x).then(function() {
    y(), d.flush();
}
);
}, t.afterLoad(b.fetchAndRender), e(b);
});
});
    provide("dom/textsize", function(e) {
    function t(e, t, n) {
    var r=[], i=0, s;
    for(;
    s=n[i];
    i++)r.push(s[0]), r.push(s[1]);
    return e+t+r.join(": ");
}
function n(e) {
    var t=e||"";
    return t.replace(/([A-Z])/g, function(e) {
    return"-"+e.toLowerCase();
}
);
}var r= {
}
;
    e(function(e, i, s) {
    var o=document.createElement("span"), u= {
}
, a="", f, l=0, c=0, h=[];
    s=s||[], i=i||"", a=t(e, i, s);
    if(r[a])return r[a];
    o.className=i+" twitter-measurement";
    try {
    for(;
    f=s[l];
    l++)o.style[f[0]]=f[1];
}
catch(p) {
    for(;
    f=s[c];
    c++)h.push(n(f[0])+": "+f[1]);
    o.setAttribute("style", h.join(";
    ")+";
    ");
}
return o.innerHTML=e, document.body.appendChild(o), u.width=o.clientWidth||o.offsetWidth, u.height=o.clientHeight||o.offsetHeight, document.body.removeChild(o), delete o, r[a]=u;
});
});
    provide("tfw/widget/tweetbase", function(e) {
    using("util/util", "tfw/widget/base", "util/querystring", "util/twitter", function(t, n, r, i) {
    function s(e) {
    if(!e)return;
    var t;
    n.apply(this, [e]), t=this.params(), this.text=t.text||this.dataAttr("text"), this.text&&/\+/.test(this.text)&&!/ /.test(this.text)&&(this.text=this.text.replace(/\+/g, " ")), this.align=t.align||this.dataAttr("align")||"", this.via=t.via||this.dataAttr("via"), this.placeid=t.placeid||this.dataAttr("placeid"), this.hashtags=t.hashtags||this.dataAttr("hashtags"), this.screen_name=i.screenName(t.screen_name||t.screenName||this.dataAttr("button-screen-name")), this.url=t.url||this.dataAttr("url");
}
s.prototype=new n, t.aug(s.prototype,  {
    parameters: function() {
    var e= {
    text: this.text, url:this.url, related:this.related, lang:this.lang, placeid:this.placeid, original_referer:location.href, id:this.id, screen_name:this.screen_name, hashtags:this.hashtags, partner:this.partner, dnt:this.dnt, _:+(new Date);
}
;
    return t.compact(e), r.encode(e);
}
}), e(s);
});
});
    provide("tfw/widget/tweetbutton", function(e) {
    using("tfw/widget/tweetbase", "util/util", "util/querystring", "util/uri", "util/twitter", "dom/textsize", function(t, n, r, i, s, o) {
    function u(e) {
    t.apply(this, [e]);
    var r=this.params(), o=r.count||this.dataAttr("count"), u=r.size||this.dataAttr("size"), c=i.getScreenNameFromPage();
    this.classAttr.push("twitter-tweet-button");
    if(r.type=="hashtag"||~n.indexOf(this.classAttr, "twitter-hashtag-button"))this.type="hashtag", this.classAttr.push("twitter-hashtag-button");
    else if(r.type=="mention"||~n.indexOf(this.classAttr, "twitter-mention-button"))this.type="mention", this.classAttr.push("twitter-mention-button");
    this.counturl=r.counturl||this.dataAttr("counturl"), this.searchlink=r.searchlink||this.dataAttr("searchlink"), this.button_hashtag=s.hashTag(r.button_hashtag||r.hashtag||this.dataAttr("button-hashtag"), !1), this.size=u=="large"?"l": "m", this.type?(this.count="none", c&&(this.related=this.related?c+", "+this.related:c)):(this.text=this.text||a, this.url=this.url||i.getCanonicalURL()||f, this.count=~n.indexOf(l, o)?o:"horizontal", this.count=this.count=="vertical"&&this.size=="l"?"none":this.count, this.via=this.via||c);
}
var a=document.title, f=encodeURI(location.href), l=["vertical", "horizontal", "none"];
    u.prototype=new t, n.aug(u.prototype,  {
    parameters: function() {
    var e= {
    text: this.text, url:this.url, via:this.via, related:this.related, count:this.count, lang:this.lang, counturl:this.counturl, searchlink:this.searchlink, placeid:this.placeid, original_referer:location.href, id:this.id, size:this.size, type:this.type, screen_name:this.screen_name, button_hashtag:this.button_hashtag, hashtags:this.hashtags, align:this.align, partner:this.partner, dnt:this.dnt, _:+(new Date);
}
;
    return n.compact(e), r.encode(e);
}
, height: function() {
    return this.count=="vertical"?62: this.size=="m"?20:28;
}
, width:function() {
    var e= {
    ver: 8, cnt:14, btn:24, xlcnt:18, xlbtn:38;
}
, t=this.count=="vertical", r=this.type=="hashtag"&&this.button_hashtag?"Tweet % {
    hashtag;
}
": this.type=="mention"&&this.screen_name?"Tweet to % {
    name;
}
": "Tweet", i=this._(r,  {
    name: "@"+this.screen_name, hashtag:"#"+this.button_hashtag;
}
), s=this._("K"), u=this._("100K+"), a=(t?"8888":"88888")+s, f=0, l=0, c=0, h=0, p=this.styles.base, d=p;
    return~n.indexOf(["ja", "ko"], this.lang)?a+=this._("10k unit"): a=a.length>u.length?a:u, t?(d=p.concat(this.styles.vbubble), h=e.ver, c=e.btn):this.size=="l"?(p=d=p.concat(this.styles.large), c=e.xlbtn, h=e.xlcnt):(c=e.btn, h=e.cnt), this.count!="none"&&(l=o(a, "", d).width+h), f=o(i, "", p.concat(this.styles.button)).width+c, t?f>l?f:l:this.calculatedWidth=f+l;
}
, render:function(e, t) {
    var r=twttr.widgets.config.assetUrl()+"/widgets/tweet_button.1390956745.html#"+this.parameters(), i;
    return this.count&&this.classAttr.push("twitter-count-"+this.count), i=this.create(r, this.dimensions(),  {
    title: this._("Twitter Tweet Button");
}
).then(n.bind(function(e) {
    return this.element=e;
}
, this)), t&&i.then(t), i;
}}), e(u);
});
});
    provide("tfw/widget/follow", function(e) {
    using("util/util", "tfw/widget/base", "util/querystring", "util/uri", "util/twitter", "util/promise", "dom/textsize", function(t, n, r, i, s, o, u) {
    function a(e) {
    if(!e)return;
    var t, r, i, o;
    n.apply(this, [e]), t=this.params(), r=t.size||this.dataAttr("size"), i=t.showScreenName||this.dataAttr("show-screen-name"), o=t.count||this.dataAttr("count"), this.classAttr.push("twitter-follow-button"), this.showScreenName=i!="false", this.showCount=t.showCount!==!1&&this.dataAttr("show-count")!="false", o=="none"&&(this.showCount=!1), this.explicitWidth=t.width||this.dataAttr("width")||"", this.screenName=t.screen_name||t.screenName||s.screenName(this.attr("href")), this.preview=t.preview||this.dataAttr("preview")||"", this.align=t.align||this.dataAttr("align")||"", this.size=r=="large"?"l": "m"}
a.prototype=new n, t.aug(a.prototype,  {
    parameters: function() {
    var e= {
    screen_name: this.screenName, lang:this.lang, show_count:this.showCount, show_screen_name:this.showScreenName, align:this.align, id:this.id, preview:this.preview, size:this.size, partner:this.partner, dnt:this.dnt, _:+(new Date);
}
;
    return t.compact(e), r.encode(e);
}
, width: function() {
    if(this.calculatedWidth)return this.calculatedWidth;
    if(this.explicitWidth)return this.explicitWidth;
    var e= {
    cnt: 13, btn:24, xlcnt:22, xlbtn:38;
}
, n=this.showScreenName?"Follow % {
    screen_name;
}
": "Follow", r=this._(n,  {
    screen_name: "@"+this.screenName;
}
), i=~t.indexOf(["ja", "ko"], this.lang)?this._("10k unit"):this._("M"), s=this._("% {
    followers_count;
}
 followers",  {
    followers_count: "88888"+i;
}
), o=0, a=0, f, l, c=this.styles.base;
    return this.size=="l"?(c=c.concat(this.styles.large), f=e.xlbtn, l=e.xlcnt): (f=e.btn, l=e.cnt), this.showCount&&(a=u(s, "", c).width+l), o=u(r, "", c.concat(this.styles.button)).width+f, this.calculatedWidth=o+a;
}
, render:function(e, n) {
    if(!this.screenName)return o.reject("Missing Screen Name").then(n);
    var r=twttr.widgets.config.assetUrl()+"/widgets/follow_button.1390956745.html#"+this.parameters(), i=this.create(r, this.dimensions(),  {
    title: this._("Twitter Follow Button");
}
).then(t.bind(function(e) {
    return this.element=e;
}
, this));
    return n&&i.then(n), i;
}
}), e(a);
});
});
    !function() {
    window.twttr=window.twttr|| {
}
, twttr.host=twttr.host||"platform.twitter.com", using("util/domready", "util/env", function(e, t) {
    function n(e) {
    return(e||!/^http\: $/.test(window.location.protocol))&&!twttr.ignoreSSL?"https":"http"}
if(t.ie6())return;
    if(twttr.widgets&&twttr.widgets.loaded)return twttr.widgets.load(), !1;
    if(twttr.init)return!1;
    twttr.init=!0, twttr._e=twttr._e||[], twttr.ready=twttr.ready||function(e) {
    twttr.widgets&&twttr.widgets.loaded?e(twttr): twttr._e.push(e);
}
, using.path.length||(using.path=n()+"://"+twttr.host+"/js"), twttr.ignoreSSL=twttr.ignoreSSL||!1;
    var r=[];
    twttr.events= {
    bind: function(e, t) {
    return r.push([e, t]);
}
}, e(function() {
    using("tfw/widget/base", "tfw/widget/follow", "tfw/widget/tweetbutton", "tfw/widget/embed", "tfw/widget/timeline", "tfw/widget/intent", "tfw/util/article", "util/events", "util/util", function(e, t, i, s, o, u, a, f, l) {
    function c(e) {
    var t=twttr.host;
    return n(e)=="https"&&twttr.secureHost&&(t=twttr.secureHost), n(e)+": //"+t;
}
function h() {
    using("tfw/hub/client", function(e) {
    twttr.events.hub=e.init(v), e.init(v, !0);
}
);
}var p, d, v= {
    widgets:  {
    "a.twitter-share-button": i, "a.twitter-mention-button":i, "a.twitter-hashtag-button":i, "a.twitter-follow-button":t, "blockquote.twitter-tweet":s, "a.twitter-timeline":o, "div.twitter-timeline":o, body:u;
}
}, m=twttr.events&&twttr.events.hub?twttr.events: {
}
, g;
    v.assetUrl=c, twttr.widgets=twttr.widgets|| {
}
, l.aug(twttr.widgets,  {
    config:  {
    assetUrl: c;
}
, load:function(t) {
    e.init(v), e.embed(t), twttr.widgets.loaded=!0;
}
, createShareButton: function(t, n, r, s) {
    if(!t||!n)return r&&r(!1);
    s=l.aug( {
}
, s|| {
}
,  {
    url: t, targetEl:n;
}
);
    var o=new i(s);
    return e.doLayout(), o.render(v, r), o.completed();
}
, createHashtagButton: function(t, n, r, s) {
    if(!t||!n)return r&&r(!1);
    s=l.aug( {
}
, s|| {
}
,  {
    hashtag: t, targetEl:n, type:"hashtag"}
);
    var o=new i(s);
    return e.doLayout(), o.render(v, r), o.completed();
}
, createMentionButton: function(t, n, r, s) {
    if(!t||!n)return r&&r(!1);
    s=l.aug( {
}
, s|| {
}
,  {
    screenName: t, targetEl:n, type:"mention"}
);
    var o=new i(s);
    return e.doLayout(), o.render(v, r), o.completed();
}
, createFollowButton: function(n, r, i, s) {
    if(!n||!r)return i&&i(!1);
    s=l.aug( {
}
, s|| {
}
,  {
    screenName: n, targetEl:r;
}
);
    var o=new t(s);
    return e.doLayout(), o.render(v, i), o.completed();
}
, createTweet: function(t, n, r, i) {
    if(!t||!n)return r&&r(!1);
    i=l.aug( {
}
, i|| {
}
,  {
    tweetId: t, targetEl:n;
}
);
    var o=new s(i);
    return e.doLayout(), o.render(v, r), s.fetchAndRender(), o.completed();
}
, createTimeline: function(t, n, r, i) {
    if(!t||!n)return r&&r(!1);
    i=l.aug( {
}
, i|| {
}
,  {
    widgetId: t, targetEl:n;
}
);
    var s=new o(i);
    return e.doLayout(), s.render(v, r), s.completed();
}
}), l.aug(twttr.events, m, f.Emitter), g=twttr.events.bind, twttr.events.bind=function(e, t) {
    h(), this.bind=g, this.bind(e, t);
}
;
    for(p=0;
    d=r[p];
    p++)twttr.events.bind(d[0], d[1]);
    for(p=0;
    d=twttr._e[p];
    p++)d(twttr);
    twttr.ready=function(e) {
    e(twttr);
}
, /twitter\.com(\: \d+)?$/.test(document.location.host)&&(twttr.widgets.createTimelinePreview=function(t, n, r) {
    if(!v||!n)return r&&r(!1);
    var i=new o( {
    previewParams: t, targetEl:n, linkColor:t.link_color, theme:t.theme, height:t.height;
}
);
    return e.doLayout(), i.render(v, r), i.completed();
}
), twttr.widgets.createTweetEmbed=twttr.widgets.createTweet, twttr.widgets.load();
});
});
});
}();
});
    (function() {
    function e(t, n, r) {
    var i=e.resolve(t);
    if(null==i) {
    r=r||t;
    n=n||"root";
    var s=new Error('Failed to require "'+r+'" from "'+n+'"');
    s.path=r;
    s.parent=n;
    s.require=!0;
    throw s;
}
var o=e.modules[i];
    if(!o._resolving&&!o.exports) {
    var u= {
}
;
    u.exports= {
}
;
    u.client=u.component=!0;
    o._resolving=!0;
    o.call(this, u.exports, e.relative(i), u);
    delete o._resolving;
    o.exports=u.exports;
}
return o.exports;
}e.modules= {
}
;
    e.aliases= {
}
;
    e.resolve=function(t) {
    t.charAt(0)==="/"&&(t=t.slice(1));
    var n=[t, t+".js", t+".json", t+"/index.js", t+"/index.json"];
    for(var r=0;
    r<n.length;
    r++) {
    var t=n[r];
    if(e.modules.hasOwnProperty(t))return t;
    if(e.aliases.hasOwnProperty(t))return e.aliases[t];
}
};
    e.normalize=function(e, t) {
    var n=[];
    if("."!=t.charAt(0))return t;
    e=e.split("/");
    t=t.split("/");
    for(var r=0;
    r<t.length;
    ++r)".."==t[r]?e.pop(): "."!=t[r]&&""!=t[r]&&n.push(t[r]);
    return e.concat(n).join("/");
}
;
    e.register=function(t, n) {
    e.modules[t]=n;
}
;
    e.alias=function(t, n) {
    if(!e.modules.hasOwnProperty(t))throw new Error('Failed to alias "'+t+'",  it does not exist');
    e.aliases[n]=t;
}
;
    e.relative=function(t) {
    function r(e, t) {
    var n=e.length;
    while(n--)if(e[n]===t)return n;
    return-1;
}
function i(n) {
    var r=i.resolve(n);
    return e(r, t, n);
}
var n=e.normalize(t, "..");
    i.resolve=function(i) {
    var s=i.charAt(0);
    if("/"==s)return i.slice(1);
    if("."==s)return e.normalize(n, i);
    var o=t.split("/"), u=r(o, "deps")+1;
    u||(u=0);
    i=o.slice(0, u+1).join("/")+"/deps/"+i;
    return i;
}
;
    i.exists=function(t) {
    return e.modules.hasOwnProperty(i.resolve(t));
}
;
    return i;
}
;
    e.register("component-classes/index.js", function(e, t, n) {
    function o(e) {
    if(!e)throw new Error("A DOM element reference is required");
    this.el=e;
    this.list=e.classList;
}
var r=t("indexof"), i=/\s+/, s=Object.prototype.toString;
    n.exports=function(e) {
    return new o(e);
}
;
    o.prototype.add=function(e) {
    if(this.list) {
    this.list.add(e);
    return this;
}
var t=this.array(), n=r(t, e);
    ~n||t.push(e);
    this.el.className=t.join(" ");
    return this;
}
;
    o.prototype.remove=function(e) {
    if("[object RegExp]"==s.call(e))return this.removeMatching(e);
    if(this.list) {
    this.list.remove(e);
    return this;
}
var t=this.array(), n=r(t, e);
    ~n&&t.splice(n, 1);
    this.el.className=t.join(" ");
    return this;
}
;
    o.prototype.removeMatching=function(e) {
    var t=this.array();
    for(var n=0;
    n<t.length;
    n++)e.test(t[n])&&this.remove(t[n]);
    return this;
}
;
    o.prototype.toggle=function(e, t) {
    if(this.list) {
    "undefined"!=typeof t?t!==this.list.toggle(e, t)&&this.list.toggle(e): this.list.toggle(e);
    return this;
}
"undefined"!=typeof t?t?this.add(e): this.remove(e):this.has(e)?this.remove(e):this.add(e);
    return this;
}
;
    o.prototype.array=function() {
    var e=this.el.className.replace(/^\s+|\s+$/g, ""), t=e.split(i);
    ""===t[0]&&t.shift();
    return t;
}
;
    o.prototype.has=o.prototype.contains=function(e) {
    return this.list?this.list.contains(e): !!~r(this.array(), e);
}
});
    e.register("segmentio-extend/index.js", function(e, t, n) {
    n.exports=function(t) {
    var n=Array.prototype.slice.call(arguments, 1);
    for(var r=0, i;
    i=n[r];
    r++) {
    if(!i)continue;
    for(var s in i)t[s]=i[s];
}
return t;
}});
    e.register("component-indexof/index.js", function(e, t, n) {
    n.exports=function(e, t) {
    if(e.indexOf)return e.indexOf(t);
    for(var n=0;
    n<e.length;
    ++n)if(e[n]===t)return n;
    return-1;
}
});
    e.register("component-event/index.js", function(e, t, n) {
    var r=window.addEventListener?"addEventListener": "attachEvent", i=window.removeEventListener?"removeEventListener":"detachEvent", s=r!=="addEventListener"?"on":"";
    e.bind=function(e, t, n, i) {
    e[r](s+t, n, i||!1);
    return n;
}
;
    e.unbind=function(e, t, n, r) {
    e[i](s+t, n, r||!1);
    return n;
}
});
    e.register("javve-to-array/index.js", function(e, t, n) {
    n.exports=function(t) {
    if(typeof t=="undefined")return[];
    if(t===null)return[null];
    if(t===window)return[window];
    if(typeof t=="string")return[t];
    if(t instanceof Array)return t;
    if(typeof t.length!="number")return[t];
    if(typeof t=="function")return[t];
    var n=[];
    for(var r=0;
    r<t.length;
    r++)(Object.prototype.hasOwnProperty.call(t, r)||r in t)&&n.push(t[r]);
    return n.length?n: [];
}
});
    e.register("javve-events/index.js", function(e, t, n) {
    var r=t("event"), i=t("to-array");
    e.bind=function(e, t, n, s) {
    e=i(e);
    for(var o=0;
    o<e.length;
    o++)r.bind(e[o], t, n, s);
}
;
    e.unbind=function(e, t, n, s) {
    e=i(e);
    for(var o=0;
    o<e.length;
    o++)r.unbind(e[o], t, n, s);
}
});
    e.register("javve-get-by-class/index.js", function(e, t, n) {
    n.exports=function() {
    return document.getElementsByClassName?function(e, t, n) {
    return n?e.getElementsByClassName(t)[0]: e.getElementsByClassName(t);
}
:document.querySelector?function(e, t, n) {
    t="."+t;
    return n?e.querySelector(t): e.querySelectorAll(t);
}
:function(e, t, n) {
    var r=[], i="*";
    e==null&&(e=document);
    var s=e.getElementsByTagName(i), o=s.length, u=new RegExp("(^|\\s)"+t+"(\\s|$)");
    for(var a=0, f=0;
    a<o;
    a++)if(u.test(s[a].className)) {
    if(n)return s[a];
    r[f]=s[a];
    f++}
return r;
}}();
});
    e.register("javve-get-attribute/index.js", function(e, t, n) {
    n.exports=function(e, t) {
    var n=e.getAttribute&&e.getAttribute(t)||null;
    if(!n) {
    var r=e.attributes, i=r.length;
    for(var s=0;
    s<i;
    s++)t[s]!==undefined&&t[s].nodeName===t&&(n=t[s].nodeValue);
}
return n;
}});
    e.register("javve-natural-sort/index.js", function(e, t, n) {
    n.exports=function(e, t, n) {
    var r=/(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi, i=/(^[ ]*|[ ]*$)/g, s=/(^([\w ]+, ?[\w ]+)?[\w ]+, ?[\w ]+\d+: \d+(:\d+)?[\w ]?|^\d {
    1, 4;
}
[\/\-]\d {
    1, 4;
}
[\/\-]\d {
    1, 4;
}
|^\w+,  \w+ \d+,  \d {
    4;
}
)/, o=/^0x[0-9a-f]+$/i, u=/^0/, n=n|| {
}
, a=function(e) {
    return n.insensitive&&(""+e).toLowerCase()||""+e;
}
, f=a(e).replace(i, "")||"", l=a(t).replace(i, "")||"", c=f.replace(r, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), h=l.replace(r, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"), p=parseInt(f.match(o))||c.length!=1&&f.match(s)&&Date.parse(f), d=parseInt(l.match(o))||p&&l.match(s)&&Date.parse(l)||null, v, m, g=n.desc?-1: 1;
    if(d) {
    if(p<d)return-1*g;
    if(p>d)return 1*g;
}
for(var y=0, b=Math.max(c.length, h.length);
    y<b;
    y++) {
    v=!(c[y]||"").match(u)&&parseFloat(c[y])||c[y]||0;
    m=!(h[y]||"").match(u)&&parseFloat(h[y])||h[y]||0;
    if(isNaN(v)!==isNaN(m))return isNaN(v)?1: -1;
    if(typeof v!=typeof m) {
    v+="";
    m+=""}
if(v<m)return-1*g;
    if(v>m)return 1*g;
}
return 0;
}});
    e.register("javve-to-string/index.js", function(e, t, n) {
    n.exports=function(e) {
    e=e===undefined?"": e;
    e=e===null?"": e;
    e=e.toString();
    return e;
}
});
    e.register("component-type/index.js", function(e, t, n) {
    var r=Object.prototype.toString;
    n.exports=function(e) {
    switch(r.call(e)) {
    case"[object Date]": return"date";
    case"[object RegExp]": return"regexp";
    case"[object Arguments]": return"arguments";
    case"[object Array]": return"array";
    case"[object Error]": return"error"}
return e===null?"null":e===undefined?"undefined":e!==e?"nan":e&&e.nodeType===1?"element":typeof e.valueOf();
}});
    e.register("list.js/index.js", function(e, t, n) {
    (function(e, r) {
    "use strict";
    var i=e.document, s=t("get-by-class"), o=t("extend"), u=t("indexof"), a=function(e, n, a) {
    var f=this, l, c=t("./src/item")(f), h=t("./src/add-async")(f), p=t("./src/parse")(f);
    l= {
    start: function() {
    f.listClass="list";
    f.searchClass="search";
    f.sortClass="sort";
    f.page=200;
    f.i=1;
    f.items=[];
    f.visibleItems=[];
    f.matchingItems=[];
    f.searched=!1;
    f.filtered=!1;
    f.handlers= {
    updated: [];
}
;
    f.plugins= {
}
;
    f.helpers= {
    getByClass: s, extend:o, indexOf:u;
}
;
    o(f, n);
    f.listContainer=typeof e=="string"?i.getElementById(e): e;
    if(!f.listContainer)return;
    f.list=s(f.listContainer, f.listClass, !0);
    f.templater=t("./src/templater")(f);
    f.search=t("./src/search")(f);
    f.filter=t("./src/filter")(f);
    f.sort=t("./src/sort")(f);
    this.items();
    f.update();
    this.plugins();
}
, items: function() {
    p(f.list);
    a!==r&&f.add(a);
}
, plugins: function() {
    for(var e=0;
    e<f.plugins.length;
    e++) {
    var t=f.plugins[e];
    f[t.name]=t;
    t.init(f);
}
}};
    this.add=function(e, t) {
    if(t) {
    h(e, t);
    return;
}
var n=[], i=!1;
    e[0]===r&&(e=[e]);
    for(var s=0, o=e.length;
    s<o;
    s++) {
    var u=null;
    if(e[s]instanceof c) {
    u=e[s];
    u.reload();
}
else {
    i=f.items.length>f.page?!0: !1;
    u=new c(e[s], r, i);
}
f.items.push(u);
    n.push(u);
}
f.update();
    return n;
}
;
    this.show=function(e, t) {
    this.i=e;
    this.page=t;
    f.update();
    return f;
}
;
    this.remove=function(e, t, n) {
    var r=0;
    for(var i=0, s=f.items.length;
    i<s;
    i++)if(f.items[i].values()[e]==t) {
    f.templater.remove(f.items[i], n);
    f.items.splice(i, 1);
    s--;
    i--;
    r++}
f.update();
    return r;
}
;
    this.get=function(e, t) {
    var n=[];
    for(var r=0, i=f.items.length;
    r<i;
    r++) {
    var s=f.items[r];
    s.values()[e]==t&&n.push(s);
}
return n;
};
    this.size=function() {
    return f.items.length;
}
;
    this.clear=function() {
    f.templater.clear();
    f.items=[];
    return f;
}
;
    this.on=function(e, t) {
    f.handlers[e].push(t);
    return f;
}
;
    this.off=function(e, t) {
    var n=f.handlers[e], r=u(n, t);
    r>-1&&n.splice(r, 1);
    return f;
}
;
    this.trigger=function(e) {
    var t=f.handlers[e].length;
    while(t--)f.handlers[e][t](f);
    return f;
}
;
    this.reset= {
    filter: function() {
    var e=f.items, t=e.length;
    while(t--)e[t].filtered=!1;
    return f;
}
, search: function() {
    var e=f.items, t=e.length;
    while(t--)e[t].found=!1;
    return f;
}
};
    this.update=function() {
    var e=f.items, t=e.length;
    f.visibleItems=[];
    f.matchingItems=[];
    f.templater.clear();
    for(var n=0;
    n<t;
    n++)if(e[n].matching()&&f.matchingItems.length+1>=f.i&&f.visibleItems.length<f.page) {
    e[n].show();
    f.visibleItems.push(e[n]);
    f.matchingItems.push(e[n]);
}
else if(e[n].matching()) {
    f.matchingItems.push(e[n]);
    e[n].hide();
}
else e[n].hide();
    f.trigger("updated");
    return f;
}
;
    l.start();
}
;
    n.exports=a;
}
)(window);
});
    e.register("list.js/src/search.js", function(e, t, n) {
    var r=t("events"), i=t("get-by-class"), s=t("to-string");
    n.exports=function(e) {
    var t, n, o, u, a, f= {
    resetList: function() {
    e.i=1;
    e.templater.clear();
    a=undefined;
}
, setOptions: function(e) {
    if(e.length==2&&e[1]instanceof Array)o=e[1];
    else if(e.length==2&&typeof e[1]=="function")a=e[1];
    else if(e.length==3) {
    o=e[1];
    a=e[2];
}
}, setColumns: function() {
    o=o===undefined?f.toArray(e.items[0].values()): o;
}
, setSearchString:function(e) {
    e=s(e).toLowerCase();
    e=e.replace(/[-[\] {
}
()*+?., \\^$|#]/g, "\\$&");
    u=e;
}
, toArray: function(e) {
    var t=[];
    for(var n in e)t.push(n);
    return t;
}
}, l= {
    list: function() {
    for(var t=0, n=e.items.length;
    t<n;
    t++)l.item(e.items[t]);
}
, item: function(e) {
    e.found=!1;
    for(var t=0, n=o.length;
    t<n;
    t++)if(l.values(e.values(), o[t])) {
    e.found=!0;
    return;
}
}, values: function(e, t) {
    if(e.hasOwnProperty(t)) {
    n=s(e[t]).toLowerCase();
    if(u!==""&&n.search(u)>-1)return!0;
}
return!1;
}, reset: function() {
    e.reset.search();
    e.searched=!1;
}
}, c=function(t) {
    e.trigger("searchStart");
    f.resetList();
    f.setSearchString(t);
    f.setOptions(arguments);
    f.setColumns();
    if(u==="")l.reset();
    else {
    e.searched=!0;
    a?a(u, o): l.list();
}
e.update();
    e.trigger("searchComplete");
    return e.visibleItems;
}
;
    e.handlers.searchStart=e.handlers.searchStart||[];
    e.handlers.searchComplete=e.handlers.searchComplete||[];
    r.bind(i(e.listContainer, e.searchClass), "keyup", function(e) {
    var t=e.target||e.srcElement;
    c(t.value);
}
);
    e.helpers.toString=s;
    return c;
}
});
    e.register("list.js/src/sort.js", function(e, t, n) {
    var r=t("natural-sort"), i=t("classes"), s=t("events"), o=t("get-by-class"), u=t("get-attribute");
    n.exports=function(e) {
    e.sortFunction=e.sortFunction||function(e, t, n) {
    n.desc=n.order=="desc"?!0: !1;
    return r(e.values()[n.valueName], t.values()[n.valueName], n);
}
;
    var t= {
    els: undefined, clear:function() {
    for(var e=0, n=t.els.length;
    e<n;
    e++) {
    i(t.els[e]).remove("asc");
    i(t.els[e]).remove("desc");
}
}, getOrder: function(e) {
    var t=u(e, "data-order");
    return t=="asc"||t=="desc"?t: i(e).has("desc")?"asc":i(e).has("asc")?"desc":"asc"}
, getInSensitive:function(e, t) {
    var n=u(e, "data-insensitive");
    n==="true"?t.insensitive=!0: t.insensitive=!1;
}
, setOrder:function(e) {
    for(var n=0, r=t.els.length;
    n<r;
    n++) {
    var s=t.els[n];
    if(u(s, "data-sort")!==e.valueName)continue;
    var o=u(s, "data-order");
    o=="asc"||o=="desc"?o==e.order&&i(s).add(e.order): i(s).add(e.order);
}
}}, n=function() {
    e.trigger("sortStart");
    options= {
}
;
    var n=arguments[0].currentTarget||arguments[0].srcElement||undefined;
    if(n) {
    options.valueName=u(n, "data-sort");
    t.getInSensitive(n, options);
    options.order=t.getOrder(n);
}
else {
    options=arguments[1]||options;
    options.valueName=arguments[0];
    options.order=options.order||"asc";
    options.insensitive=typeof options.insensitive=="undefined"?!0: options.insensitive;
}
t.clear();
    t.setOrder(options);
    options.sortFunction=options.sortFunction||e.sortFunction;
    e.items.sort(function(e, t) {
    return options.sortFunction(e, t, options);
}
);
    e.update();
    e.trigger("sortComplete");
}
;
    e.handlers.sortStart=e.handlers.sortStart||[];
    e.handlers.sortComplete=e.handlers.sortComplete||[];
    t.els=o(e.listContainer, e.sortClass);
    s.bind(t.els, "click", n);
    e.on("searchStart", t.clear);
    e.on("filterStart", t.clear);
    e.helpers.classes=i;
    e.helpers.naturalSort=r;
    e.helpers.events=s;
    e.helpers.getAttribute=u;
    return n;
}
});
    e.register("list.js/src/item.js", function(e, t, n) {
    n.exports=function(e) {
    return function(t, n, r) {
    var i=this;
    this._values= {
}
;
    this.found=!1;
    this.filtered=!1;
    var s=function(t, n, r) {
    if(n===undefined)r?i.values(t, r): i.values(t);
    else {
    i.elm=n;
    var s=e.templater.get(i, t);
    i.values(s);
}
};
    this.values=function(t, n) {
    if(t===undefined)return i._values;
    for(var r in t)i._values[r]=t[r];
    n!==!0&&e.templater.set(i, i.values());
}
;
    this.show=function() {
    e.templater.show(i);
}
;
    this.hide=function() {
    e.templater.hide(i);
}
;
    this.matching=function() {
    return e.filtered&&e.searched&&i.found&&i.filtered||e.filtered&&!e.searched&&i.filtered||!e.filtered&&e.searched&&i.found||!e.filtered&&!e.searched;
}
;
    this.visible=function() {
    return i.elm.parentNode==e.list?!0: !1;
}
;
    s(t, n, r);
}
}});
    e.register("list.js/src/templater.js", function(e, t, n) {
    var r=t("get-by-class"), i=function(e) {
    function i(t) {
    if(t===undefined) {
    var n=e.list.childNodes, r=[];
    for(var i=0, s=n.length;
    i<s;
    i++)if(n[i].data===undefined)return n[i];
    return null;
}
if(t.indexOf("<")!==-1) {
    var o=document.createElement("div");
    o.innerHTML=t;
    return o.firstChild;
}
return document.getElementById(e.item);
}var t=i(e.item), n=this;
    this.get=function(e, t) {
    n.create(e);
    var i= {
}
;
    for(var s=0, o=t.length;
    s<o;
    s++) {
    var u=r(e.elm, t[s], !0);
    i[t[s]]=u?u.innerHTML: ""}
return i;
};
    this.set=function(e, t) {
    if(!n.create(e))for(var i in t)if(t.hasOwnProperty(i)) {
    var s=r(e.elm, i, !0);
    s&&(s.tagName==="IMG"&&t[i]!==""?s.src=t[i]: s.innerHTML=t[i]);
}
};
    this.create=function(e) {
    if(e.elm!==undefined)return!1;
    var r=t.cloneNode(!0);
    r.removeAttribute("id");
    e.elm=r;
    n.set(e, e.values());
    return!0;
}
;
    this.remove=function(t) {
    e.list.removeChild(t.elm);
}
;
    this.show=function(t) {
    n.create(t);
    e.list.appendChild(t.elm);
}
;
    this.hide=function(t) {
    t.elm!==undefined&&t.elm.parentNode===e.list&&e.list.removeChild(t.elm);
}
;
    this.clear=function() {
    if(e.list.hasChildNodes())while(e.list.childNodes.length>=1)e.list.removeChild(e.list.firstChild);
}
};
    n.exports=function(e) {
    return new i(e);
}
});
    e.register("list.js/src/filter.js", function(e, t, n) {
    n.exports=function(e) {
    e.handlers.filterStart=e.handlers.filterStart||[];
    e.handlers.filterComplete=e.handlers.filterComplete||[];
    return function(t) {
    e.trigger("filterStart");
    e.i=1;
    e.reset.filter();
    if(t===undefined)e.filtered=!1;
    else {
    e.filtered=!0;
    var n=e.items;
    for(var r=0, i=n.length;
    r<i;
    r++) {
    var s=n[r];
    t(s)?s.filtered=!0: s.filtered=!1;
}
}e.update();
    e.trigger("filterComplete");
    return e.visibleItems;
}
}});
    e.register("list.js/src/add-async.js", function(e, t, n) {
    n.exports=function(e) {
    return function(t, n, r) {
    var i=t.splice(0, 100);
    r=r||[];
    r=r.concat(e.add(i));
    if(t.length>0)setTimeout(function() {
    addAsync(t, n, r);
}
, 10);
    else {
    e.update();
    n(r);
}
}}});
    e.register("list.js/src/parse.js", function(e, t, n) {
    n.exports=function(e) {
    var n=t("./item")(e), r=function(e) {
    var t=e.childNodes, n=[];
    for(var r=0, i=t.length;
    r<i;
    r++)t[r].data===undefined&&n.push(t[r]);
    return n;
}
, i=function(t, r) {
    for(var i=0, s=t.length;
    i<s;
    i++)e.items.push(new n(r, t[i]));
}
, s=function(t, n) {
    var r=t.splice(0, 100);
    i(r, n);
    t.length>0?setTimeout(function() {
    init.items.indexAsync(t, n);
}
, 10): e.update();
};
    return function() {
    var t=r(e.list), n=e.valueNames;
    e.indexAsync?s(t, n): i(t, n);
}
}});
    e.alias("component-classes/index.js", "list.js/deps/classes/index.js");
    e.alias("component-classes/index.js", "classes/index.js");
    e.alias("component-indexof/index.js", "component-classes/deps/indexof/index.js");
    e.alias("segmentio-extend/index.js", "list.js/deps/extend/index.js");
    e.alias("segmentio-extend/index.js", "extend/index.js");
    e.alias("component-indexof/index.js", "list.js/deps/indexof/index.js");
    e.alias("component-indexof/index.js", "indexof/index.js");
    e.alias("javve-events/index.js", "list.js/deps/events/index.js");
    e.alias("javve-events/index.js", "events/index.js");
    e.alias("component-event/index.js", "javve-events/deps/event/index.js");
    e.alias("javve-to-array/index.js", "javve-events/deps/to-array/index.js");
    e.alias("javve-get-by-class/index.js", "list.js/deps/get-by-class/index.js");
    e.alias("javve-get-by-class/index.js", "get-by-class/index.js");
    e.alias("javve-get-attribute/index.js", "list.js/deps/get-attribute/index.js");
    e.alias("javve-get-attribute/index.js", "get-attribute/index.js");
    e.alias("javve-natural-sort/index.js", "list.js/deps/natural-sort/index.js");
    e.alias("javve-natural-sort/index.js", "natural-sort/index.js");
    e.alias("javve-to-string/index.js", "list.js/deps/to-string/index.js");
    e.alias("javve-to-string/index.js", "list.js/deps/to-string/index.js");
    e.alias("javve-to-string/index.js", "to-string/index.js");
    e.alias("javve-to-string/index.js", "javve-to-string/index.js");
    e.alias("component-type/index.js", "list.js/deps/type/index.js");
    e.alias("component-type/index.js", "type/index.js");
    typeof exports=="object"?module.exports=e("list.js"): typeof define=="function"&&define.amd?define(function() {
    return e("list.js");
}
): this.List=e("list.js");
})();
    var Froogaloop=function() {
    function e(t) {
    return new e.fn.init(t);
}
function o(e, t, n) {
    if(!n.contentWindow.postMessage)return!1;
    var r=n.getAttribute("src").split("?")[0], i=JSON.stringify( {
    method: e, value:t;
}
);
    r.substr(0, 2)==="//"&&(r=window.location.protocol+r);
    n.contentWindow.postMessage(i, r);
}
function u(e) {
    var t, n;
    try {
    t=JSON.parse(e.data);
    n=t.event||t.method;
}
catch(i) {
}
n=="ready"&&!r&&(r=!0);
    if(e.origin!=s)return!1;
    var o=t.value, u=t.data, a=a===""?null: t.player_id, l=f(n, a), c=[];
    if(!l)return!1;
    o!==undefined&&c.push(o);
    u&&c.push(u);
    a&&c.
push(a);
    return c.length>0?l.apply(null, c): l.call();
}
function a(e, n, r) {
    if(r) {
    t[r]||(t[r]= {
}
);
    t[r][e]=n;
}
else t[e]=n;
}function f(e, n) {
    return n?t[n][e]: t[e];
}
function l(e, n) {
    if(n&&t[n]) {
    if(!t[n][e])return!1;
    t[n][e]=null;
}
else {
    if(!t[e])return!1;
    t[e]=null;
}
return!0;
}function c(e) {
    e.substr(0, 2)==="//"&&(e=window.location.protocol+e);
    var t=e.split("/"), n="";
    for(var r=0, i=t.length;
    r<i;
    r++) {
    if(!(r<3))break;
    n+=t[r];
    r<2&&(n+="/");
}
return n;
}function h(e) {
    return!!(e&&e.constructor&&e.call&&e.apply);
}
function p(e) {
    return toString.call(e)==="[object Array]"}
var t= {
}
, n=!1, r=!1, i=Array.prototype.slice, s="";
    e.fn=e.prototype= {
    element: null, init:function(e) {
    typeof e=="string"&&(e=document.getElementById(e));
    this.element=e;
    s=c(this.element.getAttribute("src"));
    return this;
}
, api: function(e, t) {
    if(!this.element||!e)return!1;
    var n=this, r=n.element, i=r.id!==""?r.id: null, s=h(t)?null:t, u=h(t)?t:null;
    u&&a(e, u, i);
    o(e, s, r);
    return n;
}
, addEvent: function(e, t) {
    if(!this.element)return!1;
    var n=this, i=n.element, s=i.id!==""?i.id: null;
    a(e, t, s);
    e!="ready"?o("addEventListener", e, i): e=="ready"&&r&&t.call(null, s);
    return n;
}
, removeEvent: function(e) {
    if(!this.element)return!1;
    var t=this, n=t.element, r=n.id!==""?n.id: null, i=l(e, r);
    e!="ready"&&i&&o("removeEventListener", e, n);
}
};
    e.fn.init.prototype=e.fn;
    window.addEventListener?window.addEventListener("message", u, !1): window.attachEvent("onmessage", u);
    return window.Froogaloop=window.$f=e;
}
();
    if(!window.YT)var YT= {
    loading: 0, loaded:0;
}
;
    if(!window.YTConfig)var YTConfig= {
}
;
    if(!YT.loading) {
    YT.loading=1;
    (function() {
    var e=[];
    YT.ready=function(t) {
    YT.loaded?t(): e.push(t);
}
;
    window.onYTReady=function() {
    YT.loaded=1;
    for(var t=0;
    t<e.length;
    t++)try {
    e[t]();
}
catch(n) {
}
}
;
    YT.setConfig=function(e) {
    for(var t in e)e.hasOwnProperty(t)&&(YTConfig[t]=e[t]);
}
;
    var t=document.createElement("script");
    t.src="http: //s.ytimg.com/yts/jsbin/www-widgetapi-vfl5O9lF3.js";
    t.async=!0;
    var n=document.getElementsByTagName("script")[0];
    n.parentNode.insertBefore(t, n);
}
)();
}var $body, $footer, $header, $html, $loadingPanel, $main, $nav, $navButton, $pageTitle, $wrapper, AjaxCall, Clients, Slider, blockRatio, cssColumnsCalls, customPlayVideo, init, onResize, onScroll, scrollTop, swapVectorImages, winH, winRatio, winW;
    winW=$(window).width();
    winH=$(window).width();
    scrollTop=$(window).scrollTop();
    winRatio=winW/winH;
    blockRatio=1.5;
    cssColumnsCalls=0;
    $html=$("html");
    $body=$("body");
    $loadingPanel=$(".loading-panel");
    $wrapper=$("#wrapper");
    $header=$(".main-header");
    $pageTitle=$(".page-title");
    $nav=$(".navigation");
    $navButton=$nav.find("button");
    $main=$("main");
    $footer=$(".main-footer");
    onResize=function() {
    var e, t, n, r, i, s;
    winW=$(window).width();
    winH=$(window).height();
    winRatio=Math.floor(winW/winH*100)/100;
    $nav.hasClass("open")&&$nav.find("> div").css( {
    height: winH;
}
);
    $nav.find("> div > div").css( {
    height: winH;
}
);
    if($(".page-slider").length) {
    n=$(".page-slider");
    i=winW<=980?Math.floor(winW/blockRatio, 10): winH-$header.height();
    s=Math.floor(winW/i*100)/100;
    n.css( {
    height: i;
}
);
    s<blockRatio?n.removeClass("horizontal").addClass("vertical"): n.removeClass("vertical").addClass("horizontal");
}
$(".next-prev").css( {
    height: Math.floor((winW<=480?winW:winW/2)/blockRatio, 10);
}
);
    if($(".grid").length) {
    e=$(".grid");
    r=Math.floor((winW<=980&&!e.hasClass("case-grid")||winW<=480?winW: winW/2)/blockRatio, 10);
    e.imagesLoaded(function() {
    e.find("> li").each(function(t) {
    var n, i, s;
    i=$(this);
    s=t>0?e.find("> li").eq(t-1): null;
    n=i.find("img").first();
    if(!$body.hasClass("single-post")) {
    n.hasClass("portrait")?i.addClass(i.offset().left===0?"tall left": "tall right").css( {
    height: r*2;
}
):i.css( {
    height: r;
}
);
    s!==null&&s.hasClass("tall")&&s.hasClass("right")&&winW>980?i.css( {
    marginTop: -r;
}
):i.css( {
    marginTop: ""}
);
}else i.find(".video").length&&i.css( {
    height: r;
}
);
});
});
}if($(".news-list").length) {
    t=$(".news-list");
    t.find(".slider").css( {
    height: Math.floor((winW<=980?winW:winW/2)/blockRatio, 10);
}
);
}($body.hasClass("page")||$body.hasClass("single-casestudy"))&&$("main .content").css( {
    minHeight: Math.floor(winW/2/blockRatio, 10)-92;
}
);
};
    onScroll=function() {
    var e;
    scrollTop=$(window).scrollTop();
    e=scrollTop+winH;
}
;
    AjaxCall= {
    loadPage: function(e) {
    $body.addClass("loading");
    $pageTitle.removeClass("nav-open");
    $nav.removeClass("open").find("> div").css( {
    height: ""}
);
    $("html, body").delay(1e3).animate( {
    scrollTop: 0;
}
, 0);
    $.ajax( {
    url: e, method:"GET", dataType:"html", success:function(e) {
    var t, n, r, i, s, o, u, a;
    a=document.createElement("div");
    a.innerHTML=e;
    $(a).find("script: not([data-type])").remove();
    t=$(a);
    u=t.find("title");
    o=t.find("meta");
    s=t.find("#wrapper").data("class");
    i=t.find(".page-title");
    n=t.find(".main-footer .col").last();
    r=t.find("main");
    $("title").html(u.text());
    $.each(o, function(e, t) {
    var n, r, i, s, o, u;
    n=$(t);
    s=n.attr("name");
    u=n.attr("rel");
    o=n.attr("property");
    i=n.attr("href");
    r=n.attr("content");
    typeof s!="undefined"&&s!==!1&&s!=="viewport"&&$('meta[name="'+s+'"]').attr("content", r);
    typeof u!="undefined"&&u!==!1&&$('meta[rel="'+u+'"]').attr("href", i);
    typeof o!="undefined"&&o!==!1&&$('meta[property="'+o+'"]').attr("content", r);
}
);
    setTimeout(function() {
    $(".page-title").html(i.html());
    $footer.find(".col").last().html(n.html());
    $("main").html(r.html());
    $body.attr("class", s);
    init(!0);
    $("#map").length&&initMap();
    $("div.video.youtube").length&&onYouTubeIframeAPIReady();
}
, 1e3);
}});
    history.pushState( {
    path: e;
}
, "", e);
}, loadMore:function(e) {
    var t;
    t=$body.hasClass("home")?".home-grid": ".news-list";
    $.ajax( {
    url: e, method:"GET", dataType:"html", success:function(e) {
    var n, r, i, s;
    s=document.createElement("div");
    s.innerHTML=e;
    $(s).find("script").remove();
    n=$(s);
    r=n.find(t).find("> li");
    i=n.find(".bottom-navigation.load-more > a");
    r.addClass("hidden");
    $(t).append(r);
    init();
    r.imagesLoaded(function() {
    r.removeClass("hidden");
    i.length?$(".bottom-navigation.load-more > a").attr("href", i.attr("href")): $(".bottom-navigation.load-more").remove();
}
);
}});
}};
    Slider= {
    init: function(e) {
    var t;
    t=this;
    $(".slider: not(.init)").each(function(n) {
    var r, i, s, o;
    o=$(this);
    s=null;
    i=$body.attr("class").split(" ");
    switch(i[0]) {
    case"home": s=i[0]+"-slider-"+(n+1);
    break;
    case"page": s=i[1]+"-slider-"+(n+1);
    break;
    case"single": s=i[2]+"-slider-"+(n+1);
}
o.attr("id", s).find("ol").addClass("images");
    if(o.find("img").length>1) {
    if(o.hasClass("controls")) {
    r=$('<ol class="controls looper-nav"></ol>');
    o.find(".images li").each(function(e) {
    var t, n, i, o, u;
    i=$(this);
    if($html.hasClass("touch")&&i.find("a").length) {
    o=i.find("img");
    u=i.find("a").attr("href");
    n=$('<div class="tap-link" data-href="'+u+'"></div>').append(o);
    i.find("a").replaceWith(n);
}
t=$('<li><a href="#'+s+'" data-looper="to" data-args="'+(e+1)+'"></a></li>');
    t.addClass(e===0?"active": void 0);
    r.append(t);
}
);
    o.addClass("init").append(r);
}
if(e===!1)$(window).on("load.slider-"+n, function() {
    o.looper( {
    interval: 3e3, pause:!1;
}
);
    if(o.hasClass("controls")) {
    o.on("shown", function(e) {
    o.find(".looper-nav > li").removeClass("active").eq(e.relatedIndex).addClass("active");
}
);
    t.touchEvents(o);
}
});
    else {
    o.looper( {
    interval: 3e3, pause:!1;
}
);
    if(o.hasClass("controls")) {
    o.on("shown", function(e) {
    o.find(".looper-nav > li").removeClass("active").eq(e.relatedIndex).addClass("active");
}
);
    t.touchEvents(o);
}
}}});
}, touchEvents: function(e) {
    e.swipe( {
    swipeLeft: function(t, n, r, i, s) {
    var o, u, a;
    u=e.find(".controls");
    o=u.find(".active");
    console.log(n, r, i, s);
    a=o.next("li").length?o.next("li"): u.find("li:first-child");
    a.find("a").trigger("click");
    e.looper("loop");
}
, swipeRight: function(t, n, r, i, s) {
    var o, u, a;
    u=e.find(".controls");
    o=u.find(".active");
    console.log(n, r, i, s);
    a=o.prev("li").length?o.prev("li"): u.find("li:last-child");
    a.find("a").trigger("click");
    e.looper("loop");
}
, tap: function(e, t) {
    var n, r;
    n=$(t).parent(".tap-link");
    r=n.attr("data-href");
    AjaxCall.loadPage(r);
}
, threshold: 0;
});
}};
    Clients= {
    clients_json: null, toggleClientList:function(e) {
    var t;
    t=$(".client-list");
    e&&t.toggleClass("open");
    t.hasClass("open")?t.css( {
    height: t.find("h1").height()+t.find("button").outerHeight()+t.find("> ul").outerHeight();
}
):t.css( {
    height: ""}
);
}, retrieveClients:function() {
    var e;
    e=this;
    $.ajax( {
    dataType: "json", url:basepath+"/?p=71&json=1", success:function(t) {
    e.clients_json=t.page.custom_fields.cl_cat;
    e.sortClientList();
}
});
}, sortClientList: function() {
    var e, t, n, r, i;
    i=this;
    t=$(".client-list");
    e=t.find(".list");
    if(e.hasClass("alphabetical")) {
    t.addClass("sorting");
    setTimeout(function() {
    e.html("");
    $.each(i.clients_json, function(t, n) {
    var r, i, s;
    s=n.cl_cat_title;
    r=$("<li/>");
    i=$("<ul/>");
    r.append("<h2>"+s+"</h2>");
    $.each(n.cl_clients, function(e, t) {
    t.cl_client_link.length?i.append('<li><a href="'+t.cl_client_link+'" target="_blank">'+t.cl_client+"</a></li>"): i.append("<li>"+t.cl_client+"</li>");
}
);
    r.append(i);
    e.append(r);
}
);
    e.removeClass("alphabetical");
    t.find("button").text("Order alphabetically");
    i.cssColumns();
    setTimeout(function() {
    i.toggleClientList();
    t.removeClass("sorting");
}
, 300);
}, 300);
}else {
    t.addClass("sorting");
    if(this.clients_json===null)this.retrieveClients();
    else {
    n= {
}
;
    r=[];
    $.each(this.clients_json, function(e, t) {
    $.each(t.cl_clients, function(e, t) {
    n[t.cl_client]=t;
    r.push(t.cl_client);
}
);
});
    r.sort();
    setTimeout(function() {
    e.html("");
    $.each(r, function(t, r) {
    var i, s;
    i=n[r];
    i.cl_client_link.length?s='<li><a href="'+i.cl_client_link+'" target="_blank">'+i.cl_client+"</a></li>": s="<li>"+i.cl_client+"</li>";
    e.append(s);
}
);
    e.addClass("alphabetical");
    t.find("button").text("Order by category");
    i.cssColumns();
    setTimeout(function() {
    i.toggleClientList();
    t.removeClass("sorting");
}
, 300);
}, 300);
}}}, cssColumns: function() {
    var e, t, n, r;
    e=$(".client-list");
    t=e.find("> ul > li");
    n=0;
    r=null;
    e.addClass("customized");
    t.each(function() {
    var e;
    e=$(this).offset().left;
    if(r===null||e>r*1.5) {
    r=e;
    n++}
$(this).attr( {
    "class": "col col-"+n;
}
);
});
}};
    swapVectorImages=function() {
    if(Modernizr.svg) {
    $body.find(".svg").each(function() {
    var e, t, n, r;
    e=$(this);
    n=e.attr("id");
    t=e.attr("class");
    r=e.attr("src");
    $.get(r, function(r) {
    var i;
    i=$(r).find("svg");
    n!==null&&(i=i.attr("id", n));
    t!==null&&(i=i.attr("class", t+" replaced-svg"));
    i=i.removeAttr("xmlns: a");
    e.replaceWith(i);
}
, "xml");
});
    return;
}
$body.find(".svg").each(function() {
    $(this).attr("src", $(this).data("fallback"));
}
);
    return;
}
;
    customPlayVideo=function(e, t) {
    var n, r, i, s;
    n=e.parent(".video");
    r=n.parents(".slider").length?n.parents(".slider"): null;
    s=n.data("vid");
    i=null;
    n.hasClass("vimeo")?i=vimeoVideos[s]: i=youtubeVideos[s];
    if(t==="play") {
    $("html").hasClass("mobile")||(n.hasClass("vimeo")?i.api("play"): i.playVideo());
    r!==null&&r.looper("pause");
}
else {
    n.hasClass("vimeo")?i.api("pause"): i.pauseVideo();
    r!==null&&r.looper("loop");
}
n.toggleClass("playing");
    r!==null&&r.toggleClass("playing");
}
;
    init=function(e) {
    onResize();
    onScroll();
    swapVectorImages();
    Slider.init(e);
    Clients.cssColumns();
    setTimeout(Clients.cssColumns, 250);
    youtubeVideosIDs.length=0;
    $("div.video").each(function() {
    var e, t, n, r, i, s;
    s=$(this).attr("data-vid");
    if($(this).hasClass("vimeo")) {
    t=$("#"+s);
    e=t.parent(".video");
    n=e.parents(".slider").length?e.parents(".slider"): null;
    r=t[0];
    i=$f(r);
    i.addEvent("ready", function() {
    i.addEvent("finish", function() {
    e.removeClass("playing");
    n!==null&&n.removeClass("playing").looper("loop");
}
);
});
    vimeoVideos[s]=i;
}
else youtubeVideosIDs.push(s);
});
};
    $(function() {
    init(!1);
    $("#map").length&&google.maps.event.addDomListener(window, "load", initMap);
    $navButton.on("click", function() {
    $nav.toggleClass("open");
    $pageTitle.toggleClass("nav-open");
    $nav.hasClass("open")?$nav.find("> div").css( {
    height: winH;
}
):$nav.find("> div").css( {
    height: ""}
);
});
    $(document).on("click", 'a[href^="http: //essen"]', function(e) {
    var t;
    e.preventDefault();
    t=$(this).attr("href");
    $(this).parent(".bottom-navigation.load-more").length?AjaxCall.loadMore(t): AjaxCall.loadPage(t);
}
);
    $(document).on("click", ".video-thumb", function() {
    customPlayVideo($(this), "play");
}
);
    $(document).on("click", ".close-button", function() {
    customPlayVideo($(this), "pause");
}
);
    $(document).on("click", ".client-list h1", function() {
    Clients.toggleClientList(!0);
}
);
    $(document).on("click", ".client-list button", function() {
    Clients.sortClientList();
}
);
    $(window).on("resize", onResize).on("debouncedresize", function() {
    setTimeout(function() {
    Clients.cssColumns();
    Clients.toggleClientList();
}
, 250);
    setTimeout(Clients.cssColumns, 500);
}
).on("load", function() {
    var e;
    if(winW<=320) {
    $nav.find(".menu li: first-child").clone().removeAttr("id").find("a").attr("href", $pageTitle.attr("href")).text("Home").prependTo($nav.find(".menu"));
    $pageTitle.addClass("nav-open");
    $nav.addClass("open").find("> div").css( {
    height: winH;
}
);
}if($html.hasClass("safari")&&$html.hasClass("mobile")&&$html.hasClass("iphone")) {
    window.scrollTo(0, 1);
    $nav.find("> div").css( {
    height: window.innerHeight;
}
);
}e=$body.hasClass("under-construction")?2e3:300;
    setTimeout(function() {
    $body.removeClass("loading");
}
, e);
}).bind("popstate", function(e) {
    var t;
    t=e.originalEvent.state;
    t&&AjaxCall.loadPage(t.path);
}
);
    history.replaceState( {
    path: document.URL;
}
, "");
});
    