try {
(function (w, d) {
	var uid = '{{.}}';
	function inArray(e, t) {
		var n;
		if (e.indexOf) {
			n = e.indexOf(t);
			if (n || n == 0) return n;
		} else {
			for (n = 0; n < e.length; ++n) {
				if (e[n] == t) {
					return n;
				}
			}
		}
		return -1;
	};
var symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
	randStrs = [""];

function randomStr(e) {
	var t = symbols.length,
		n = t - 10,
		i, r;
	e = e || 9;
	while (!r || inArray(randStrs, r) !== -1) {
		r = symbols.charAt(Math.floor(Math.random() * n)), ++e;
		for (i = 1; i < e; i++) {
			r += symbols.charAt(Math.floor(Math.random() * t));
		}
	}
	randStrs.push(r);
	return r;
};
	var JSONP=function(){function e(a,c){var e=document.createElement("script"),f=!1;e.src=a,e.async=!0;var g=c||d.error;"function"==typeof g&&(e.onerror=function(b){g({url:a,event:b})}),e.onload=e.onreadystatechange=function(){f||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(f=!0,e.onload=e.onreadystatechange=null,e&&e.parentNode&&e.parentNode.removeChild(e))},b||(b=document.getElementsByTagName("head")[0]),b.appendChild(e)}function f(a){return encodeURIComponent(a)}function g(b,g,h,i){var k,j=-1===(b||"").indexOf("?")?"?":"&";i=i||d.callbackName||"callback";var random = randomStr(); var l='adwisy_'+i+"_json_"+random+"_"+ ++a;g=g||{};for(k in g)g.hasOwnProperty(k)&&(j+=f(k)+"="+f(g[k])+"&");return c[l]=function(a){h(a);try{delete c[l]}catch(b){}c[l]=null},e(b+j+i+"="+l),l}function h(a){d=a}var b,a=0,c=this,d={};return{get:g,init:h}}();
    !function(){function a(a,h){a=a||"",h=h||{};for(var i in b)b.hasOwnProperty(i)&&(h.autoFix&&(h["fix_"+i]=!0),h.fix=h.fix||h["fix_"+i]);var j=[],k=document.createElement("div"),l=function(a){return"string"==typeof a&&-1!==a.indexOf("&")?(k.innerHTML=a,k.textContent||k.innerText||a):a},m=function(b){a+=b},n=function(b){a=b+a},o={comment:/^<!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var b=a.indexOf("-->");return b>=0?{content:a.substr(4,b),length:b+3}:void 0},endTag:function(){var b=a.match(d);return b?{tagName:b[1],length:b[0].length}:void 0},atomicTag:function(){var b=p.startTag();if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,attrs:b.attrs,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.indexOf(">");if(-1===b)return null;var d=a.match(c);if(d){var g={},h={},i=d[2];return d[2].replace(e,function(a,b){if(arguments[2]||arguments[3]||arguments[4]||arguments[5])if(arguments[5])g[arguments[5]]="",h[b]=!0;else{var c=arguments[2]||arguments[3]||arguments[4]||f.test(b)&&b||"";g[b]=l(c)}else g[b]=null;i=i.replace(a,"")}),{tagName:d[1],attrs:g,booleanAttrs:h,rest:i,unary:!!d[3],length:d[0].length}}},chars:function(){var b=a.indexOf("<");return{length:b>=0?b:a.length}}},q=function(){for(var b in o)if(o[b].test(a)){g&&console.log("suspected "+b);var c=p[b]();return c?(g&&console.log("parsed "+b,c),c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}},r=function(a){for(var b;b=q();)if(a[b.type]&&a[b.type](b)===!1)return},s=function(){var b=a;return a="",b},t=function(){return a};return h.fix&&!function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.last=function(){return this[this.length-1]},d.lastTagNameEq=function(a){var b=this.last();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()},d.containsTagName=function(a){for(var b,c=0;b=this[c];c++)if(b.tagName===a)return!0;return!1};var e=function(a){return a&&"startTag"===a.type&&(a.unary=b.test(a.tagName)||a.unary,a.html5Unary=!/\/>$/.test(a.text)),a},f=q,g=function(){var b=a,c=e(f());return a=b,c},i=function(){var a=d.pop();n("</"+a.tagName+">")},j={startTag:function(a){var b=a.tagName;"TR"===b.toUpperCase()&&d.lastTagNameEq("TABLE")?(n("<TBODY>"),l()):h.fix_selfClose&&c.test(b)&&d.containsTagName(b)?d.lastTagNameEq(b)?i():(n("</"+a.tagName+">"),l()):a.unary||d.push(a)},endTag:function(a){var b=d.last();b?h.fix_tagSoup&&!d.lastTagNameEq(a.tagName)?i():d.pop():h.fix_tagSoup&&k()}},k=function(){f(),l()},l=function(){var a=g();a&&j[a.type]&&j[a.type](a)};q=function(){return l(),e(f())}}(),{append:m,readToken:q,readTokens:r,clear:s,rest:t,stack:j}}var b=function(){var a,b={},c=this.document.createElement("div");return a="<P><I></P></I>",c.innerHTML=a,b.tagSoup=c.innerHTML!==a,c.innerHTML="<P><i><P></P></i></P>",b.selfClose=2===c.childNodes.length,b}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i,g=!1;a.supports=b,a.tokenToString=function(a){var b={comment:function(a){return"<!--"+a.content},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return g&&console.log(a),b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName;for(var c in a.attrs){b+=" "+c;var d=a.attrs[c];("undefined"==typeof a.booleanAttrs||"undefined"==typeof a.booleanAttrs[c])&&(b+='="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"')}return a.rest&&(b+=a.rest),b+(a.unary&&!a.html5Unary?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)},a.escapeAttributes=function(a){var b={};for(var c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.browserHasFlaw=a.browserHasFlaw||!b[h]&&h;this.htmlParser=a}(),function(){function a(){}function b(a){return a!==m&&null!==a}function c(a){return"function"==typeof a}function d(a,b,c){var d,e=a&&a.length||0;for(d=0;e>d;d++)b.call(c,a[d],d)}function e(a,b,c){var d;for(d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function f(a,b){return e(b,function(b,c){a[b]=c}),a}function g(a,c){return a=a||{},e(c,function(c,d){b(a[c])||(a[c]=d)}),a}function h(a){try{return o.call(a)}catch(b){var c=[];return d(a,function(a){c.push(a)}),c}}function i(a){return a&&"tagName"in a?!!~a.tagName.toLowerCase().indexOf("script"):!1}function j(a){return a&&"tagName"in a?!!~a.tagName.toLowerCase().indexOf("style"):!1}var k={afterAsync:a,afterDequeue:a,afterStreamStart:a,afterWrite:a,autoFix:!0,beforeEnqueue:a,beforeWriteToken:function(a){return a},beforeWrite:function(a){return a},done:a,error:function(a){throw a},releaseAsync:!1},l=this,m=void 0;if(!l.postscribe){var n=!1,o=Array.prototype.slice,p=function(a){return a[a.length-1]},q=function(){function a(a,c,d){var e=k+c;if(2===arguments.length){var f=a.getAttribute(e);return b(f)?String(f):f}b(d)&&""!==d?a.setAttribute(e,d):a.removeAttribute(e)}function g(b,c){var d=b.ownerDocument;f(this,{root:b,options:c,win:d.defaultView||d.parentWindow,doc:d,parser:htmlParser("",{autoFix:c.autoFix}),actuals:[b],proxyHistory:"",proxyRoot:d.createElement(b.nodeName),scriptStack:[],writeQueue:[]}),a(this.proxyRoot,"proxyof",0)}var k="data-ps-";return g.prototype.write=function(){[].push.apply(this.writeQueue,arguments);for(var a;!this.deferredRemote&&this.writeQueue.length;)a=this.writeQueue.shift(),c(a)?this.callFunction(a):this.writeImpl(a)},g.prototype.callFunction=function(a){var b={type:"function",value:a.name||a.toString()};this.onScriptStart(b),a.call(this.win,this.doc),this.onScriptDone(b)},g.prototype.writeImpl=function(a){this.parser.append(a);for(var b,c,d,e=[];(b=this.parser.readToken())&&!(c=i(b))&&!(d=j(b));)b=this.options.beforeWriteToken(b),b&&e.push(b);this.writeStaticTokens(e),c&&this.handleScriptToken(b),d&&this.handleStyleToken(b)},g.prototype.writeStaticTokens=function(a){var b=this.buildChunk(a);if(b.actual)return b.html=this.proxyHistory+b.actual,this.proxyHistory+=b.proxy,this.proxyRoot.innerHTML=b.html,n&&(b.proxyInnerHTML=this.proxyRoot.innerHTML),this.walkChunk(),n&&(b.actualInnerHTML=this.root.innerHTML),b},g.prototype.buildChunk=function(a){var b=this.actuals.length,c=[],e=[],f=[];return d(a,function(a){var d=htmlParser.tokenToString(a);if(c.push(d),a.attrs){if(!/^noscript$/i.test(a.tagName)){var g=b++;e.push(d.replace(/(\/?>)/," "+k+"id="+g+" $1")),"ps-script"!==a.attrs.id&&"ps-style"!==a.attrs.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" "+k+"proxyof="+g+(a.unary?" />":">"))}}else e.push(d),f.push("endTag"===a.type?d:"")}),{tokens:a,raw:c.join(""),actual:e.join(""),proxy:f.join("")}},g.prototype.walkChunk=function(){for(var c,d=[this.proxyRoot];b(c=d.shift());){var e=1===c.nodeType,f=e&&a(c,"proxyof");if(!f){e&&(this.actuals[a(c,"id")]=c,a(c,"id",null));var g=c.parentNode&&a(c.parentNode,"proxyof");g&&this.actuals[g].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}},g.prototype.handleScriptToken=function(a){var b=this.parser.clear();if(b&&this.writeQueue.unshift(b),a.src=a.attrs.src||a.attrs.SRC,a=this.options.beforeWriteToken(a)){a.src&&this.scriptStack.length?this.deferredRemote=a:this.onScriptStart(a);var c=this;this.writeScriptToken(a,function(){c.onScriptDone(a)})}},g.prototype.handleStyleToken=function(a){var b=this.parser.clear();b&&this.writeQueue.unshift(b),a.type=a.attrs.type||a.attrs.TYPE||"text/css",a=this.options.beforeWriteToken(a),a&&this.writeStyleToken(a),b&&this.write()},g.prototype.writeStyleToken=function(a){var b=this.buildStyle(a);this.insertStyle(b),a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:b.appendChild(this.doc.createTextNode(a.content)))},g.prototype.buildStyle=function(a){var b=this.doc.createElement(a.tagName);return b.setAttribute("type",a.type),e(a.attrs,function(a,c){b.setAttribute(a,c)}),b},g.prototype.insertStyle=function(a){this.writeImpl('<span id="ps-style"/>');var b=this.doc.getElementById("ps-style");b.parentNode.replaceChild(a,b)},g.prototype.onScriptStart=function(a){a.outerWrites=this.writeQueue,this.writeQueue=[],this.scriptStack.unshift(a)},g.prototype.onScriptDone=function(a){return a!==this.scriptStack[0]?void this.options.error({message:"Bad script nesting or script finished twice"}):(this.scriptStack.shift(),this.write.apply(this,a.outerWrites),void(!this.scriptStack.length&&this.deferredRemote&&(this.onScriptStart(this.deferredRemote),this.deferredRemote=null)))},g.prototype.writeScriptToken=function(a,b){var c=this.buildScript(a),d=this.shouldRelease(c),e=this.options.afterAsync;a.src&&(c.src=a.src,this.scriptLoadHandler(c,d?e:function(){b(),e()}));try{this.insertScript(c),(!a.src||d)&&b()}catch(f){this.options.error(f),b()}},g.prototype.buildScript=function(a){var b=this.doc.createElement(a.tagName);return e(a.attrs,function(a,c){b.setAttribute(a,c)}),a.content&&(b.text=a.content),b},g.prototype.insertScript=function(a){this.writeImpl('<span id="ps-script"/>');var b=this.doc.getElementById("ps-script");b.parentNode.replaceChild(a,b)},g.prototype.scriptLoadHandler=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}function d(){c(),b()}function e(a){c(),g(a),b()}var g=this.options.error;f(a,{onload:function(){d()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&d()},onerror:function(){e({message:"remote script failed "+a.src})}})},g.prototype.shouldRelease=function(a){var b=/^script$/i.test(a.nodeName);return!b||!!(this.options.releaseAsync&&a.src&&a.hasAttribute("async"))},g}();l.postscribe=function(){function b(){var a,b=j.shift();b&&(a=p(b),a.afterDequeue(),b.stream=d.apply(null,b),a.afterStreamStart())}function d(c,d,g){function j(a){a=g.beforeWrite(a),m.write(a),g.afterWrite(a)}m=new q(c,g),m.id=i++,m.name=g.name||m.id,e.streams[m.name]=m;var k=c.ownerDocument,l={close:k.close,open:k.open,write:k.write,writeln:k.writeln};f(k,{close:a,open:a,write:function(){return j(h(arguments).join(""))},writeln:function(){return j(h(arguments).join("")+"\n")}});var n=m.win.onerror||a;return m.win.onerror=function(a,b,c){g.error({msg:a+" - "+b+":"+c}),n.apply(m.win,arguments)},m.write(d,function(){f(k,l),m.win.onerror=n,g.done(),m=null,b()}),m}function e(d,e,f){c(f)&&(f={done:f}),f=g(f,k),d=/^#/.test(d)?l.document.getElementById(d.substr(1)):d.jquery?d[0]:d;var h=[d,e,f];return d.postscribe={cancel:function(){h.stream?h.stream.abort():h[1]=a}},f.beforeEnqueue(h),j.push(h),m||b(),d.postscribe}var i=0,j=[],m=null;return f(e,{streams:{},queue:j,WriteStream:q})}()}}();
    var BASE_URL = '//and07-ssp.herokuapp.com';
	
	function get_meta_content(name){
		var data = '';
		var metas = document.getElementsByTagName('meta');
		for (var x=0,y=metas.length; x<y; x++) {
            if (metas[x].name.toLowerCase() == name) {
                data += metas[x].content;
            }
		}
		return data != '' ? data : '';
	};
	
	function trim(s) {
		if (typeof s === "string") {
		s = s.replace(/^\s+|\s+$/g, "");
		}
		return s;
	};

	function get_teg_content(tag){
		var el = document.getElementsByTagName(tag);
		var data = [];
		var text = '';
		for (var x=0,y=el.length; x<y; x++) {
		text = "textContent" in el[x] ? "textContent" : "innerText";
		data.push(trim(el[x][text]));
		}
		return data != '' ? data.join(' ') : '';
	};
    
   function getImage(fn){
        var imgs = document.querySelectorAll('img');
        var cnt = 1;
        var data = []
        for(var i in imgs){
            if (imgs[i] && imgs[i].getAttribute){
                var image = new Image();
                image.src = imgs[i].getAttribute('src');
                image.onload = function() {
                    var size = {};
                    size[this.height +'x'+this.width] = this.src;
                    data.push(size);
                    cnt ++;
                    if(cnt == imgs.length ){
                        fn(data);
                    }
                };
            }
        }
    };

var QueryString = function () {
  /* This function is anonymous, is executed immediately and 
     the return value is assigned to QueryString! */
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
        /* If first entry with this name*/
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
        /* If second entry with this name*/
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
      query_string[pair[0]] = arr;
        /* If third or later entry with this name*/
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  } 
    return query_string;
}();
/*
h1 = get_teg_content('h1');
t = get_teg_content('title');
k = get_meta_content('keywords');
*/
    var params ='?event=hit' +
		'&page=' + encodeURIComponent(w.location.href) +
		'&referrer=' + encodeURIComponent(d.referrer) +
		'&keywords='+encodeURIComponent(get_meta_content('keywords'))+
		'&descriptions='+encodeURIComponent(get_meta_content('descriptions'))+
		'&title='+encodeURIComponent(get_teg_content('title'))+
		'&h1='+encodeURIComponent(get_teg_content('h1'))+
		'&token='+encodeURIComponent(uid)+
		'&ua='+w.navigator.userAgent+
		'&ip='+''+
		'&domain='+encodeURIComponent(document.domain);
	
	if (!w.StatGathered) {
		w.StatGathered = true;
		var img = new Image();
        var url = BASE_URL+'/static/api/pixel.gif' +params;
		img.src = url;
	}
function addLink(el,url){
    var ss = el.createElement("link");
    ss.type = "text/css";
    ss.rel = "stylesheet";
    ss.href = url;
    el.getElementsByTagName("head")[0].appendChild(ss);
};

function addScript(el,url,param){
    param = param || "";
	var script = el.createElement("script");
	var rand = randomStr();
	script.src = url+rand+'/'+param;
	script.id = rand;
	script.async = true;
	el.getElementsByTagName("head")[0].appendChild(script);
};
function addEventListener(element, name, observer, capture) {

	if(element){
		if (element.addEventListener) {
			element.addEventListener(name, observer, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + name, observer);
		}
	}
};

var callback = {};
var ln = '';
	JSONP.get(  BASE_URL+'/api/content'+params, {}, function(data){
        if(data.widgets){
            addLink(document,BASE_URL+'/static/widgets/css/style.min.css');
                var type_w = [
                    'standard',
                    'side',
                    //'footer',
                    //'drawer',
                    'toaster',
                    //'scroll'
                ];
                var type_text = ['bl', 'ul'];
            for(var widget in data.widgets){
                var type = type_w[data.widgets[widget]['type']];
                var selectors = 'js_adwisy_widget_'+type ;
                var el = document.querySelector('.'+selectors);
                console.log(widget, data.widgets, data.widgets[widget])
                console.log(selectors, el)
                if(el){
                    var block_page = [];
                    var t = type_text[data.widgets[widget]['option']['widget_cnfg']['text_position']];
                    var wrapper = '<div class="rel_'+type+'-'+t+'-wrap"><div class="rel_'+type+'-'+t+'">';
                    var wrapper_end = '</div></div>';
                    var header = '<div class="rel_'+type+'-'+t+'-title"><p>'+data.widgets[widget]['name']+'</p></div>';
                    var widget_id = el.getAttribute('data-widget-id');
                    var id = selectors+'__'+widget_id;
                    el.id = id;
                    var sponsor_id = selectors+'__'+widget_id+'__sponsor';
                    var html = wrapper+header+'<div  id = "'+sponsor_id+'" ></div>';
                    
                    JSONP.get( BASE_URL+'/api/code/'+data.widgets[widget]['type']+'/', {}, function(res){
                        /*console.log(res.code);*/
                        if(res.code){
                            var html = '<div class="adwisy_t-'+data.widgets[widget]['type']+' rel_'+type+'-'+t+'-content">'+res.code+'</div>';
                            window.postscribe('#'+sponsor_id, html);
                        }
                    });
                    
                    if(widget_id){
                        var url =  BASE_URL+ln+'/stat/screenings/'+ widget_id+ '/'+encodeURIComponent(document.location.href)+'/';
                        addScript(document, url, '?url='+encodeURIComponent(document.location.href));
                    }
                    /*addLink(document,BASE_URL+'/static/widgets/css/style-'+type_w[data.widgets[widget]['type']]+'.css');*/
                    /*html += el.innerHTML;*/
                    var cnt = data.widgets[widget]['option']['widget_cnfg']['widget_cell'];
					var font_size = data.widgets[widget]['option']['widget_cnfg']['text_size'] || 14;
                    for(var i = 0; i < cnt ;i++){

                        if(data.block[i] && data.block[i]['page'] && inArray(block_page, data.block[i]['page']) == -1){
                            var block_id = data.block[i]['id'];
                            html += '<a id="block_'+block_id+'" href="'+data.block[i]['page']+'" class="adwisy_t-'+data.widgets[widget]['type']+' rel_'+type+'-'+t+'-content">'+
							'<div class="w-'+t+'"><div class="w-'+t+'-img"><img src="'+data.block[i]['image']+'" ></div>'+
							'<div class="w-'+t+'-text" style="font-size:'+font_size+'px;" >'+data.block[i]['title']+'</div></div></a>';
                            block_page.push(data.block[i]['page']);
                        }
                    }
                    var footer ='';/* '<div class="recommeded"><a href="'+BASE_URL+'" target="_blank">recommended by <span>localhost:8080</span></a></div>';*/
                    el.innerHTML = html+footer+wrapper_end;
                     
                    setTimeout(function(){
                        var els = document.querySelectorAll('#'+id+' a');
						var maxHeight = 0;
                        for(var i =0 ; i < els.length ;i++){
                            var block_id = els[i].id;
                            block_id = block_id.replace(/block_/g, '');
                            if(block_id && block_id > 0){
								
								if(maxHeight < els[i].offsetHeight){
									maxHeight = els[i].offsetHeight;
								}
                                var url =  BASE_URL+ln+'/stat/blockscreenings/'+ block_id+ '/';
                                addScript(document,url,'?url='+encodeURIComponent(document.location.href));
                                var c = function(elem, block_id){
									addEventListener( elem, 'click', function(e){
										/*e.preventDefault();
										e.stopPropagation();*/
										e = e || event;
										var target = e.target || e.srcElement; 
										var url =  BASE_URL+ln+'/stat/clicks/'+ widget_id+ '/'+encodeURIComponent(document.location.href)+'/';
										var param = '?block_id='+block_id+'&url='+encodeURIComponent(document.location.href);
										addScript(document,url,param);
										/*window.location = target.getAttribute('href');*/
									});
								}(els[i], block_id);
                            }
                        }
						for(var i =0 ; i < els.length ;i++){
							els[i].style.height = maxHeight+ 'px';
							//console.log(maxHeight);
						}
						
                    },1000);
                }
            }
            
        }else{
        
        }
    });

function getMetaPropertyContent(property) { 
   var metas = document.getElementsByTagName('meta'); 

   for (var i=0; i<metas.length; i++) { 
      if (metas[i].getAttribute("property") == property) { 
         return metas[i].getAttribute("content"); 
      } 
   } 

    return null;
};
	
})(window, document);
} catch (e) {
	if (window.console && window.console.log && typeof(window.console.log) == 'function') {window.console.log(e);}
}
