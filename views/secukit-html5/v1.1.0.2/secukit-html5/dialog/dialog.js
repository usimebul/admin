/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "localhost:9000/secukit-html5/dialog/";
/******/ 	// WebpackRequireFrom
/******/ 	Object.defineProperty(__webpack_require__, "p", {
/******/ 	  get: function () {
/******/ 	try {
/******/ 	  if (typeof webnpki_config.ui !== "string") {
/******/ 	    throw new Error("WebpackRequireFrom: 'webnpki_config.ui' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");
/******/ 	  }
/******/ 	  return webnpki_config.ui;
/******/ 	} catch (e) {
/******/ 	  if (!false) {
/******/ 	    console.error(e);
/******/ 	  }
/******/ 	  return "localhost:9000/secukit-html5/dialog/";
/******/ 	}
/******/ 	 }
/******/ 	})
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
    PDFObject v2.1.1
    https://github.com/pipwerks/PDFObject
    Copyright (c) 2008-2018 Philip Hutchison
    MIT-style license: http://pipwerks.mit-license.org/
    UMD module pattern from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
*/

(function(root,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else {}}(this,function(){"use strict";if(typeof window==="undefined"||typeof navigator==="undefined"){return false;}
var pdfobjectversion="2.1.1",ua=window.navigator.userAgent,supportsPDFs,isIE,supportsPdfMimeType=(typeof navigator.mimeTypes['application/pdf']!=="undefined"),supportsPdfActiveX,isModernBrowser=(function(){return(typeof window.Promise!=="undefined");})(),isFirefox=(function(){return(ua.indexOf("irefox")!==-1);})(),isFirefoxWithPDFJS=(function(){if(!isFirefox){return false;}
return(parseInt(ua.split("rv:")[1].split(".")[0],10)>18);})(),isIOS=(function(){return(/iphone|ipad|ipod/i.test(ua.toLowerCase()));})(),createAXO,buildFragmentString,log,embedError,embed,getTargetElement,generatePDFJSiframe,generateEmbedElement;createAXO=function(type){var ax;try{ax=new ActiveXObject(type);}catch(e){ax=null;}
return ax;};isIE=function(){return!!(window.ActiveXObject||"ActiveXObject"in window);};supportsPdfActiveX=function(){return!!(createAXO("AcroPDF.PDF")||createAXO("PDF.PdfCtrl"));};supportsPDFs=(!isIOS&&(isFirefoxWithPDFJS||supportsPdfMimeType||(isIE()&&supportsPdfActiveX())));buildFragmentString=function(pdfParams){var string="",prop;if(pdfParams){for(prop in pdfParams){if(pdfParams.hasOwnProperty(prop)){string+=encodeURIComponent(prop)+"="+encodeURIComponent(pdfParams[prop])+"&";}}
if(string){string="#"+string;string=string.slice(0,string.length-1);}}
return string;};log=function(msg){if(typeof console!=="undefined"&&console.log){console.log("[PDFObject] "+msg);}};embedError=function(msg){log(msg);return false;};getTargetElement=function(targetSelector){var targetNode=document.body;if(typeof targetSelector==="string"){targetNode=document.querySelector(targetSelector);}else if(typeof jQuery!=="undefined"&&targetSelector instanceof jQuery&&targetSelector.length){targetNode=targetSelector.get(0);}else if(typeof targetSelector.nodeType!=="undefined"&&targetSelector.nodeType===1){targetNode=targetSelector;}
return targetNode;};generatePDFJSiframe=function(targetNode,url,pdfOpenFragment,PDFJS_URL,id){var fullURL=PDFJS_URL+"?file="+encodeURIComponent(url)+pdfOpenFragment;var scrollfix=(isIOS)?"-webkit-overflow-scrolling: touch; overflow-y: scroll; ":"overflow: hidden; ";var iframe="<div style='"+scrollfix+"position: absolute; top: 0; right: 0; bottom: 0; left: 0;'><iframe  "+id+" src='"+fullURL+"' style='border: none; width: 100%; height: 100%;' frameborder='0'></iframe></div>";targetNode.className+=" pdfobject-container";targetNode.style.position="relative";targetNode.style.overflow="auto";targetNode.innerHTML=iframe;return targetNode.getElementsByTagName("iframe")[0];};generateEmbedElement=function(targetNode,targetSelector,url,pdfOpenFragment,width,height,id){var style="";if(targetSelector&&targetSelector!==document.body){style="width: "+width+"; height: "+height+";";}else{style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100%; height: 100%;";}
targetNode.className+=" pdfobject-container";targetNode.innerHTML="<embed "+id+" class='pdfobject' src='"+url+pdfOpenFragment+"' type='application/pdf' style='overflow: auto; "+style+"'/>";return targetNode.getElementsByTagName("embed")[0];};embed=function(url,targetSelector,options){if(typeof url!=="string"){return embedError("URL is not valid");}
targetSelector=(typeof targetSelector!=="undefined")?targetSelector:false;options=(typeof options!=="undefined")?options:{};var id=(options.id&&typeof options.id==="string")?"id='"+options.id+"'":"",page=(options.page)?options.page:false,pdfOpenParams=(options.pdfOpenParams)?options.pdfOpenParams:{},fallbackLink=(typeof options.fallbackLink!=="undefined")?options.fallbackLink:true,width=(options.width)?options.width:"100%",height=(options.height)?options.height:"100%",assumptionMode=(typeof options.assumptionMode==="boolean")?options.assumptionMode:true,forcePDFJS=(typeof options.forcePDFJS==="boolean")?options.forcePDFJS:false,PDFJS_URL=(options.PDFJS_URL)?options.PDFJS_URL:false,targetNode=getTargetElement(targetSelector),fallbackHTML="",pdfOpenFragment="",fallbackHTML_default="<p>This browser does not support inline PDFs. Please download the PDF to view it: <a href='[url]'>Download PDF</a></p>";if(!targetNode){return embedError("Target element cannot be determined");}
if(page){pdfOpenParams.page=page;}
pdfOpenFragment=buildFragmentString(pdfOpenParams);if(forcePDFJS&&PDFJS_URL){return generatePDFJSiframe(targetNode,url,pdfOpenFragment,PDFJS_URL,id);}else if(supportsPDFs||(assumptionMode&&isModernBrowser&&!isIOS)){return generateEmbedElement(targetNode,targetSelector,url,pdfOpenFragment,width,height,id);}else if(PDFJS_URL){return generatePDFJSiframe(targetNode,url,pdfOpenFragment,PDFJS_URL,id);}else{if(fallbackLink){fallbackHTML=(typeof fallbackLink==="string")?fallbackLink:fallbackHTML_default;targetNode.innerHTML=fallbackHTML.replace(/\[url\]/g,url);}
return embedError("This browser does not support embedded PDFs");}};return{embed:function(a,b,c){return embed(a,b,c);},pdfobjectversion:(function(){return pdfobjectversion;})(),supportsPDFs:(function(){return supportsPDFs;})()};}));

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery UI Virtual Keyboard v1.30.1 *//*
Author: Jeremy Satterfield
Maintained: Rob Garrison (Mottie on github)
Licensed under the MIT License

An on-screen virtual keyboard embedded within the browser window which
will popup when a specified entry field is focused. The user can then
type and preview their input before Accepting or Canceling.

This plugin adds default class names to match jQuery UI theme styling.
Bootstrap & custom themes may also be applied - See
https://github.com/Mottie/Keyboard#themes

Requires:
	jQuery v1.4.3+
	Caret plugin (included)
Optional:
	jQuery UI (position utility only) & CSS theme
	jQuery mousewheel

Setup/Usage:
	Please refer to https://github.com/Mottie/Keyboard/wiki

-----------------------------------------
Caret code modified from jquery.caret.1.02.js
Licensed under the MIT License:
http://www.opensource.org/licenses/mit-license.php
-----------------------------------------
*/
/*jshint browser:true, jquery:true, unused:false */
/*global require:false, define:false, module:false */
;(function (factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(function ($) {
	'use strict';
	var $keyboard = $.keyboard = function (el, options) {
	var o, base = this;

	base.version = '1.30.1';

	// Access to jQuery and DOM versions of element
	base.$el = $(el);
	base.el = el;

	// Add a reverse reference to the DOM object
	base.$el.data('keyboard', base);

	base.init = function () {
		base.initialized = false;
		var k, position, tmp,
			kbcss = $keyboard.css,
			kbevents = $keyboard.events;
		base.settings = options || {};
		// shallow copy position to prevent performance issues; see #357
		if (options && options.position) {
			position = $.extend({}, options.position);
			options.position = null;
		}
		base.options = o = $.extend(true, {}, $keyboard.defaultOptions, options);
		if (position) {
			o.position = position;
			options.position = position;
		}

		// keyboard is active (not destroyed);
		base.el.active = true;
		// unique keyboard namespace
		base.namespace = '.keyboard' + Math.random().toString(16).slice(2);
		// extension namespaces added here (to unbind listeners on base.$el upon destroy)
		base.extensionNamespace = [];
		// Shift and Alt key toggles, sets is true if a layout has more than one keyset
		// used for mousewheel message
		base.shiftActive = base.altActive = base.metaActive = base.sets = base.capsLock = false;
		// Class names of the basic key set - meta keysets are handled by the keyname
		base.rows = ['', '-shift', '-alt', '-alt-shift'];

		base.inPlaceholder = base.$el.attr('placeholder') || '';
		// html 5 placeholder/watermark
		base.watermark = $keyboard.watermark && base.inPlaceholder !== '';
		// convert mouse repeater rate (characters per second) into a time in milliseconds.
		base.repeatTime = 1000 / (o.repeatRate || 20);
		// delay in ms to prevent mousedown & touchstart from both firing events at the same time
		o.preventDoubleEventTime = o.preventDoubleEventTime || 100;
		// flag indication that a keyboard is open
		base.isOpen = false;
		// is mousewheel plugin loaded?
		base.wheel = typeof $.fn.mousewheel === 'function';
		// special character in regex that need to be escaped
		base.escapeRegex = /[-\/\\^$*+?.()|[\]{}]/g;
		base.isTextArea = base.el.nodeName.toLowerCase() === 'textarea';
		base.isInput = base.el.nodeName.toLowerCase() === 'input';
		// detect contenteditable
		base.isContentEditable = !base.isTextArea &&
			!base.isInput &&
			base.el.isContentEditable;

		// keyCode of keys always allowed to be typed
		k = $keyboard.keyCodes;
		// base.alwaysAllowed = [20,33,34,35,36,37,38,39,40,45,46];
		base.alwaysAllowed = [
			k.capsLock,
			k.pageUp,
			k.pageDown,
			k.end,
			k.home,
			k.left,
			k.up,
			k.right,
			k.down,
			k.insert,
			k.delete
		];
		base.$keyboard = [];
		// keyboard enabled; set to false on destroy
		base.enabled = true;

		base.checkCaret = (o.lockInput || $keyboard.checkCaretSupport());

		// disable problematic usePreview for contenteditable
		if (base.isContentEditable) {
			o.usePreview = false;
		}

		base.last = {
			start: 0,
			end: 0,
			key: '',
			val: '',
			preVal: '',
			layout: '',
			virtual: true,
			keyset: [false, false, false], // [shift, alt, meta]
			wheel_$Keys: [],
			wheelIndex: 0,
			wheelLayers: []
		};
		// used when building the keyboard - [keyset element, row, index]
		base.temp = ['', 0, 0];

		// Callbacks
		$.each([
			kbevents.kbInit,
			kbevents.kbBeforeVisible,
			kbevents.kbVisible,
			kbevents.kbHidden,
			kbevents.inputCanceled,
			kbevents.inputAccepted,
			kbevents.kbBeforeClose,
			kbevents.inputRestricted
		], function (i, callback) {
			if (typeof o[callback] === 'function') {
				// bind callback functions within options to triggered events
				base.$el.bind(callback + base.namespace + 'callbacks', o[callback]);
			}
		});

		// Close with esc key & clicking outside
		if (o.alwaysOpen) {
			o.stayOpen = true;
		}

		tmp = $(document);
		if (base.el.ownerDocument !== document) {
			tmp = tmp.add(base.el.ownerDocument);
		}

		var bindings = 'keyup checkkeyboard mousedown touchstart ';
		if (o.closeByClickEvent) {
			bindings += 'click ';
		}
		// debounce bindings... see #542
		tmp.bind(bindings.split(' ').join(base.namespace + ' '), function(e) {
			clearTimeout(base.timer3);
			base.timer3 = setTimeout(function() {
				base.checkClose(e);
			}, 1);
		});

		// Display keyboard on focus
		base.$el
			.addClass(kbcss.input + ' ' + o.css.input)
			.attr({
				'aria-haspopup': 'true',
				'role': 'textbox'
			});

		// set lockInput if the element is readonly; or make the element readonly if lockInput is set
		if (o.lockInput || base.el.readOnly) {
			o.lockInput = true;
			base.$el
				.addClass(kbcss.locked)
				.attr({
					'readonly': 'readonly'
				});
		}
		// add disabled/readonly class - dynamically updated on reveal
		if (base.isUnavailable()) {
			base.$el.addClass(kbcss.noKeyboard);
		}
		if (o.openOn) {
			base.bindFocus();
		}

		// Add placeholder if not supported by the browser
		if (
			!base.watermark &&
			base.getValue(base.$el) === '' &&
			base.inPlaceholder !== '' &&
			base.$el.attr('placeholder') !== ''
		) {
			// css watermark style (darker text)
			base.$el.addClass(kbcss.placeholder);
			base.setValue(base.inPlaceholder, base.$el);
		}

		base.$el.trigger(kbevents.kbInit, [base, base.el]);

		// initialized with keyboard open
		if (o.alwaysOpen) {
			base.reveal();
		}
		base.initialized = true;
	};

	base.toggle = function () {
		if (!base.hasKeyboard()) { return; }
		var $toggle = base.$keyboard.find('.' + $keyboard.css.keyToggle),
			locked = !base.enabled;
		// prevent physical keyboard from working
		base.preview.readonly = locked || base.options.lockInput;
		// disable all buttons
		base.$keyboard
			.toggleClass($keyboard.css.keyDisabled, locked)
			.find('.' + $keyboard.css.keyButton)
			.not($toggle)
			.attr('aria-disabled', locked)
			.each(function() {
				this.disabled = locked;
			});
		$toggle.toggleClass($keyboard.css.keyDisabled, locked);
		// stop auto typing
		if (locked && base.typing_options) {
			base.typing_options.text = '';
		}
		// allow chaining
		return base;
	};

	base.setCurrent = function () {
		var kbcss = $keyboard.css,
			// close any "isCurrent" keyboard (just in case they are always open)
			$current = $('.' + kbcss.isCurrent),
			kb = $current.data('keyboard');
		// close keyboard, if not self
		if (!$.isEmptyObject(kb) && kb.el !== base.el) {
			kb.close(kb.options.autoAccept ? 'true' : false);
		}
		$current.removeClass(kbcss.isCurrent);
		// ui-keyboard-has-focus is applied in case multiple keyboards have
		// alwaysOpen = true and are stacked
		$('.' + kbcss.hasFocus).removeClass(kbcss.hasFocus);

		base.$el.addClass(kbcss.isCurrent);
		base.$preview.focus();
		base.$keyboard.addClass(kbcss.hasFocus);
		base.isCurrent(true);
		base.isOpen = true;
	};

	base.isUnavailable = function() {
		return (
			base.$el.is(':disabled') || (
				!base.options.activeOnReadonly &&
				base.$el.attr('readonly') &&
				!base.$el.hasClass($keyboard.css.locked)
			)
		);
	};

	base.isCurrent = function (set) {
		var cur = $keyboard.currentKeyboard || false;
		if (set) {
			cur = $keyboard.currentKeyboard = base.el;
		} else if (set === false && cur === base.el) {
			cur = $keyboard.currentKeyboard = '';
		}
		return cur === base.el;
	};

	base.hasKeyboard = function () {
		return base.$keyboard && base.$keyboard.length > 0;
	};

	base.isVisible = function () {
		return base.hasKeyboard() ? base.$keyboard.is(':visible') : false;
	};

	base.setFocus = function () {
		var $el = base.$preview || base.$el;
		if (!o.noFocus) {
			$el.focus();
		}
		if (base.isContentEditable) {
			$keyboard.setEditableCaret($el, base.last.start, base.last.end);
		} else {
			$keyboard.caret($el, base.last);
		}
	};

	base.focusOn = function () {
		if (!base && base.el.active) {
			// keyboard was destroyed
			return;
		}
		if (!base.isVisible()) {
			clearTimeout(base.timer);
			base.reveal();
		} else {
			// keyboard already open, make it the current keyboard
			base.setCurrent();
		}
	};

	// add redraw method to make API more clear
	base.redraw = function (layout) {
		if (layout) {
			// allow updating the layout by calling redraw
			base.options.layout = layout;
		}
		// update keyboard after a layout change
		if (base.$keyboard.length) {

			base.last.preVal = '' + base.last.val;
			base.saveLastChange();
			base.setValue(base.last.val, base.$el);

			base.removeKeyboard();
			base.shiftActive = base.altActive = base.metaActive = false;
		}
		base.isOpen = o.alwaysOpen;
		base.reveal(true);
		return base;
	};

	base.reveal = function (redraw) {
		var temp,
			alreadyOpen = base.isOpen,
			kbcss = $keyboard.css;
		base.opening = !alreadyOpen;
		// remove all 'extra' keyboards by calling close function
		$('.' + kbcss.keyboard).not('.' + kbcss.alwaysOpen).each(function(){
			var kb = $(this).data('keyboard');
			if (!$.isEmptyObject(kb)) {
				// this closes previous keyboard when clicking another input - see #515
				kb.close(kb.options.autoAccept ? 'true' : false);
			}
		});

		// Don't open if disabled
		if (base.isUnavailable()) {
			return;
		}
		base.$el.removeClass(kbcss.noKeyboard);

		// Unbind focus to prevent recursion - openOn may be empty if keyboard is opened externally
		if (o.openOn) {
			base.$el.unbind($.trim((o.openOn + ' ').split(/\s+/).join(base.namespace + ' ')));
		}

		// build keyboard if it doesn't exist; or attach keyboard if it was removed, but not cleared
		if (!base.$keyboard || base.$keyboard &&
			(!base.$keyboard.length || $.contains(base.el.ownerDocument.body, base.$keyboard[0]))) {
			base.startup();
		}

		// clear watermark
		if (!base.watermark && base.getValue() === base.inPlaceholder) {
			base.$el.removeClass(kbcss.placeholder);
			base.setValue('', base.$el);
		}
		// save starting content, in case we cancel
		base.originalContent = base.isContentEditable ?
			base.$el.html() :
			base.getValue(base.$el);
		if (base.el !== base.preview && !base.isContentEditable) {
			base.setValue(base.originalContent);
		}

		// disable/enable accept button
		if (o.acceptValid && o.checkValidOnInit) {
			base.checkValid();
		}

		if (o.resetDefault) {
			base.shiftActive = base.altActive = base.metaActive = false;
		}
		base.showSet();

		// beforeVisible event
		if (!base.isVisible()) {
			base.$el.trigger($keyboard.events.kbBeforeVisible, [base, base.el]);
		}
		if (
			base.initialized ||
			o.initialFocus ||
			( !o.initialFocus && base.$el.hasClass($keyboard.css.initialFocus) )
		) {
			base.setCurrent();
		}
		// update keyboard - enabled or disabled?
		base.toggle();

		// show keyboard
		base.$keyboard.show();

		// adjust keyboard preview window width - save width so IE won't keep expanding (fix issue #6)
		if (o.usePreview && $keyboard.msie) {
			if (typeof base.width === 'undefined') {
				base.$preview.hide(); // preview is 100% browser width in IE7, so hide the damn thing
				base.width = Math.ceil(base.$keyboard.width()); // set input width to match the widest keyboard row
				base.$preview.show();
			}
			base.$preview.width(base.width);
		}

		base.reposition();

		base.checkDecimal();

		// get preview area line height
		// add roughly 4px to get line height from font height, works well for font-sizes from 14-36px
		// needed for textareas
		base.lineHeight = parseInt(base.$preview.css('lineHeight'), 10) ||
			parseInt(base.$preview.css('font-size'), 10) + 4;

		if (o.caretToEnd) {
			temp = base.isContentEditable ? $keyboard.getEditableLength(base.el) : base.originalContent.length;
			base.saveCaret(temp, temp);
		}

		// IE caret haxx0rs
		if ($keyboard.allie) {
			// sometimes end = 0 while start is > 0
			if (base.last.end === 0 && base.last.start > 0) {
				base.last.end = base.last.start;
			}
			// IE will have start -1, end of 0 when not focused (see demo: https://jsfiddle.net/Mottie/fgryQ/3/)
			if (base.last.start < 0) {
				// ensure caret is at the end of the text (needed for IE)
				base.last.start = base.last.end = base.originalContent.length;
			}
		}

		if (alreadyOpen || redraw) {
			// restore caret position (userClosed)
			$keyboard.caret(base.$preview, base.last);
			base.opening = false;
			return base;
		}

		// opening keyboard flag; delay allows switching between keyboards without immediately closing
		// the keyboard
		base.timer2 = setTimeout(function () {
			var undef;
			base.opening = false;
			// Number inputs don't support selectionStart and selectionEnd
			// Number/email inputs don't support selectionStart and selectionEnd
			if (!/(number|email)/i.test(base.el.type) && !o.caretToEnd) {
				// caret position is always 0,0 in webkit; and nothing is focused at this point... odd
				// save caret position in the input to transfer it to the preview
				// inside delay to get correct caret position
				base.saveCaret(undef, undef, base.$el);
			}
			if (o.initialFocus || base.$el.hasClass($keyboard.css.initialFocus)) {
				$keyboard.caret(base.$preview, base.last);
			}
			// save event time for keyboards with stayOpen: true
			base.last.eventTime = new Date().getTime();
			base.$el.trigger($keyboard.events.kbVisible, [base, base.el]);
			base.timer = setTimeout(function () {
				// get updated caret information after visible event - fixes #331
				if (base) { // Check if base exists, this is a case when destroy is called, before timers fire
					base.saveCaret();
				}
			}, 200);
		}, 10);
		// return base to allow chaining in typing extension
		return base;
	};

	base.updateLanguage = function () {
		// change language if layout is named something like 'french-azerty-1'
		var layouts = $keyboard.layouts,
			lang = o.language || layouts[o.layout] && layouts[o.layout].lang &&
				layouts[o.layout].lang || [o.language || 'en'],
			kblang = $keyboard.language;

		// some languages include a dash, e.g. 'en-gb' or 'fr-ca'
		// allow o.language to be a string or array...
		// array is for future expansion where a layout can be set for multiple languages
		lang = (Object.prototype.toString.call(lang) === '[object Array]' ? lang[0] : lang);
		base.language = lang;
		lang = lang.split('-')[0];

		// set keyboard language
		o.display = $.extend(true, {},
			kblang.en.display,
			kblang[lang] && kblang[lang].display || {},
			base.settings.display
		);
		o.combos = $.extend(true, {},
			kblang.en.combos,
			kblang[lang] && kblang[lang].combos || {},
			base.settings.combos
		);
		o.wheelMessage = kblang[lang] && kblang[lang].wheelMessage || kblang.en.wheelMessage;
		// rtl can be in the layout or in the language definition; defaults to false
		o.rtl = layouts[o.layout] && layouts[o.layout].rtl || kblang[lang] && kblang[lang].rtl || false;

		// save default regex (in case loading another layout changes it)
		if (kblang[lang] && kblang[lang].comboRegex) {
			base.regex = kblang[lang].comboRegex;
		}
		// determine if US '.' or European ',' system being used
		base.decimal = /^\./.test(o.display.dec);
		base.$el
			.toggleClass('rtl', o.rtl)
			.css('direction', o.rtl ? 'rtl' : '');
	};

	base.startup = function () {
		var kbcss = $keyboard.css;
		// ensure base.$preview is defined; but don't overwrite it if keyboard is always visible
		if (!((o.alwaysOpen || o.userClosed) && base.$preview)) {
			base.makePreview();
		}
		if (!base.hasKeyboard()) {
			// custom layout - create a unique layout name based on the hash
			if (o.layout === 'custom') {
				o.layoutHash = 'custom' + base.customHash();
			}
			base.layout = o.layout === 'custom' ? o.layoutHash : o.layout;
			base.last.layout = base.layout;

			base.updateLanguage();
			if (typeof $keyboard.builtLayouts[base.layout] === 'undefined') {
				if (typeof o.create === 'function') {
					// create must call buildKeyboard() function; or create it's own keyboard
					base.$keyboard = o.create(base);
				} else if (!base.$keyboard.length) {
					base.buildKeyboard(base.layout, true);
				}
			}
			base.$keyboard = $keyboard.builtLayouts[base.layout].$keyboard.clone();
			base.$keyboard.data('keyboard', base);
			if ((base.el.id || '') !== '') {
				// add ID to keyboard for styling purposes
				base.$keyboard.attr('id', base.el.id + $keyboard.css.idSuffix);
			}

			base.makePreview();
		}

		// Add layout and laguage data-attibutes
		base.$keyboard
			.attr('data-' + kbcss.keyboard + '-layout', o.layout)
			.attr('data-' + kbcss.keyboard + '-language', base.language);

		base.$decBtn = base.$keyboard.find('.' + kbcss.keyPrefix + 'dec');
		// add enter to allowed keys; fixes #190
		if (o.enterNavigation || base.isTextArea) {
			base.alwaysAllowed.push($keyboard.keyCodes.enter);
		}

		base.bindKeyboard();

		base.$keyboard.appendTo(o.appendLocally ? base.$el.parent() : o.appendTo || 'body');

		base.bindKeys();

		// reposition keyboard on window resize
		if (o.reposition && $.ui && $.ui.position && o.appendTo === 'body') {
			$(window).bind('resize' + base.namespace, function () {
				base.reposition();
			});
		}

	};

	base.reposition = function () {
		base.position = $.isEmptyObject(o.position) ? false : o.position;
		// position after keyboard is visible (required for UI position utility)
		// and appropriately sized
		if ($.ui && $.ui.position && base.position) {
			base.position.of =
				// get single target position
				base.position.of ||
				// OR target stored in element data (multiple targets)
				base.$el.data('keyboardPosition') ||
				// OR default @ element
				base.$el;
			base.position.collision = base.position.collision || 'flipfit flipfit';
			base.position.at = o.usePreview ? o.position.at : o.position.at2;
			if (base.isVisible()) {
				base.$keyboard.position(base.position);
			}
		}
		// make chainable
		return base;
	};

	base.makePreview = function () {
		if (o.usePreview) {
			var indx, attrs, attr, removedAttr,
				kbcss = $keyboard.css;
			base.$preview = base.$el.clone(false)
				.data('keyboard', base)
				.removeClass(kbcss.placeholder + ' ' + kbcss.input)
				.addClass(kbcss.preview + ' ' + o.css.input)
				.attr('tabindex', '-1')
				.show(); // for hidden inputs
			base.preview = base.$preview[0];

			// Switch the number input field to text so the caret positioning will work again
			if (base.preview.type === 'number') {
				base.preview.type = 'text';
			}

			// remove extraneous attributes.
			removedAttr = /^(data-|id|aria-haspopup)/i;
			attrs = base.$preview.get(0).attributes;
			for (indx = attrs.length - 1; indx >= 0; indx--) {
				attr = attrs[indx] && attrs[indx].name;
				if (removedAttr.test(attr)) {
					// remove data-attributes - see #351
					base.preview.removeAttribute(attr);
				}
			}
			// build preview container and append preview display
			$('<div />')
				.addClass(kbcss.wrapper)
				.append(base.$preview)
				.prependTo(base.$keyboard);
		} else {
			base.$preview = base.$el;
			base.preview = base.el;
		}
	};

	// Added in v1.26.8 to allow chaining of the caret function, e.g.
	// keyboard.reveal().caret(4,5).insertText('test').caret('end');
	base.caret = function(param1, param2) {
		var result = $keyboard.caret(base.$preview, param1, param2),
			wasSetCaret = result instanceof $;
		// Caret was set, save last position & make chainable
		if (wasSetCaret) {
			base.saveCaret(result.start, result.end);
			return base;
		}
		// return caret position if using .caret()
		return result;
	};

	base.saveCaret = function (start, end, $el) {
		if (base.isCurrent()) {
			var p;
			if (typeof start === 'undefined') {
				// grab & save current caret position
				p = $keyboard.caret($el || base.$preview);
			} else {
				p = $keyboard.caret($el || base.$preview, start, end);
			}
			base.last.start = typeof start === 'undefined' ? p.start : start;
			base.last.end = typeof end === 'undefined' ? p.end : end;
		}
	};

	base.saveLastChange = function (val) {
		base.last.val = val || base.getValue(base.$preview || base.$el);
		if (base.isContentEditable) {
			base.last.elms = base.el.cloneNode(true);
		}
	};

	base.setScroll = function () {
		// Set scroll so caret & current text is in view
		// needed for virtual keyboard typing, NOT manual typing - fixes #23
		if (!base.isContentEditable && base.last.virtual) {

			var scrollWidth, clientWidth, adjustment, direction,
				value = base.last.val.substring(0, Math.max(base.last.start, base.last.end));

			if (!base.$previewCopy) {
				// clone preview
				base.$previewCopy = base.$preview.clone()
					.removeAttr('id') // fixes #334
					.css({
						position: 'absolute',
						left: 0,
						zIndex: -10,
						visibility: 'hidden'
					})
					.addClass($keyboard.css.inputClone);
				// prevent submitting content on form submission
				base.$previewCopy[0].disabled = true;
				if (!base.isTextArea) {
					// make input zero-width because we need an accurate scrollWidth
					base.$previewCopy.css({
						'white-space': 'pre',
						'width': 0
					});
				}
				if (o.usePreview) {
					// add clone inside of preview wrapper
					base.$preview.after(base.$previewCopy);
				} else {
					// just slap that thing in there somewhere
					base.$keyboard.prepend(base.$previewCopy);
				}
			}

			if (base.isTextArea) {
				// need the textarea scrollHeight, so set the clone textarea height to be the line height
				base.$previewCopy
					.height(base.lineHeight)
					.val(value);
				// set scrollTop for Textarea
				base.preview.scrollTop = base.lineHeight *
					(Math.floor(base.$previewCopy[0].scrollHeight / base.lineHeight) - 1);
			} else {
				// add non-breaking spaces
				base.$previewCopy.val(value.replace(/\s/g, '\xa0'));

				// if scrollAdjustment option is set to "c" or "center" then center the caret
				adjustment = /c/i.test(o.scrollAdjustment) ? base.preview.clientWidth / 2 : o.scrollAdjustment;
				scrollWidth = base.$previewCopy[0].scrollWidth - 1;

				// set initial state as moving right
				if (typeof base.last.scrollWidth === 'undefined') {
					base.last.scrollWidth = scrollWidth;
					base.last.direction = true;
				}
				// if direction = true; we're scrolling to the right
				direction = base.last.scrollWidth === scrollWidth ?
					base.last.direction :
					base.last.scrollWidth < scrollWidth;
				clientWidth = base.preview.clientWidth - adjustment;

				// set scrollLeft for inputs; try to mimic the inherit caret positioning + scrolling:
				// hug right while scrolling right...
				if (direction) {
					if (scrollWidth < clientWidth) {
						base.preview.scrollLeft = 0;
					} else {
						base.preview.scrollLeft = scrollWidth - clientWidth;
					}
				} else {
					// hug left while scrolling left...
					if (scrollWidth >= base.preview.scrollWidth - clientWidth) {
						base.preview.scrollLeft = base.preview.scrollWidth - adjustment;
					} else if (scrollWidth - adjustment > 0) {
						base.preview.scrollLeft = scrollWidth - adjustment;
					} else {
						base.preview.scrollLeft = 0;
					}
				}

				base.last.scrollWidth = scrollWidth;
				base.last.direction = direction;
			}
		}
	};

	base.bindFocus = function () {
		if (o.openOn) {
			// make sure keyboard isn't destroyed
			// Check if base exists, this is a case when destroy is called, before timers have fired
			if (base && base.el.active) {
				base.$el.bind(o.openOn + base.namespace, function () {
					base.focusOn();
				});
				// remove focus from element (needed for IE since blur doesn't seem to work)
				if ($(':focus')[0] === base.el) {
					base.$el.blur();
				}
			}
		}
	};

	base.bindKeyboard = function () {
		var evt,
			keyCodes = $keyboard.keyCodes,
			layout = $keyboard.builtLayouts[base.layout],
			namespace = base.namespace + 'keybindings';
		base.$preview
			.unbind(base.namespace)
			.bind('click' + namespace + ' touchstart' + namespace, function () {
				if (o.alwaysOpen && !base.isCurrent()) {
					base.reveal();
				}
				// update last caret position after user click, use at least 150ms or it doesn't work in IE
				base.timer2 = setTimeout(function () {
					if (base){
						base.saveCaret();
					}
				}, 150);

			})
			.bind('keypress' + namespace, function (e) {
				if (o.lockInput) {
					return false;
				}
				if (!base.isCurrent()) {
					return;
				}

				var k = e.charCode || e.which,
					// capsLock can only be checked while typing a-z
					k1 = k >= keyCodes.A && k <= keyCodes.Z,
					k2 = k >= keyCodes.a && k <= keyCodes.z,
					str = base.last.key = String.fromCharCode(k);
				// check, that keypress wasn't rise by functional key
				// space is first typing symbol in UTF8 table
				if (k < keyCodes.space) { //see #549
					return;
				}
				base.last.virtual = false;
				base.last.event = e;
				base.last.$key = []; // not a virtual keyboard key
				if (base.checkCaret) {
					base.saveCaret();
				}

				// update capsLock
				if (k !== keyCodes.capsLock && (k1 || k2)) {
					base.capsLock = (k1 && !e.shiftKey) || (k2 && e.shiftKey);
					// if shifted keyset not visible, then show it
					if (base.capsLock && !base.shiftActive) {
						base.shiftActive = true;
						base.showSet();
					}
				}

				// restrict input - keyCode in keypress special keys:
				// see http://www.asquare.net/javascript/tests/KeyCode.html
				if (o.restrictInput) {
					// allow navigation keys to work - Chrome doesn't fire a keypress event (8 = bksp)
					if ((e.which === keyCodes.backSpace || e.which === 0) &&
						$.inArray(e.keyCode, base.alwaysAllowed)) {
						return;
					}
					// quick key check
					if ($.inArray(str, layout.acceptedKeys) === -1) {
						e.preventDefault();
						// copy event object in case e.preventDefault() breaks when changing the type
						evt = $.extend({}, e);
						evt.type = $keyboard.events.inputRestricted;
						base.$el.trigger(evt, [base, base.el]);
					}
				} else if ((e.ctrlKey || e.metaKey) &&
					(e.which === keyCodes.A || e.which === keyCodes.C || e.which === keyCodes.V ||
						(e.which >= keyCodes.X && e.which <= keyCodes.Z))) {
					// Allow select all (ctrl-a), copy (ctrl-c), paste (ctrl-v) & cut (ctrl-x) &
					// redo (ctrl-y)& undo (ctrl-z); meta key for mac
					return;
				}
				// Mapped Keys - allows typing on a regular keyboard and the mapped key is entered
				// Set up a key in the layout as follows: 'm(a):label'; m = key to map, (a) = actual keyboard key
				// to map to (optional), ':label' = title/tooltip (optional)
				// example: \u0391 or \u0391(A) or \u0391:alpha or \u0391(A):alpha
				if (layout.hasMappedKeys && layout.mappedKeys.hasOwnProperty(str)) {
					base.last.key = layout.mappedKeys[str];
					base.insertText(base.last.key);
					e.preventDefault();
				}
				if (typeof o.beforeInsert === 'function') {
					base.insertText(base.last.key);
					e.preventDefault();
				}
				base.checkMaxLength();

			})
			.bind('keyup' + namespace, function (e) {
				if (!base.isCurrent()) { return; }
				base.last.virtual = false;
				switch (e.which) {
					// Insert tab key
				case keyCodes.tab:
					// Added a flag to prevent from tabbing into an input, keyboard opening, then adding the tab
					// to the keyboard preview area on keyup. Sadly it still happens if you don't release the tab
					// key immediately because keydown event auto-repeats
					if (base.tab && !o.lockInput) {
						base.shiftActive = e.shiftKey;
						// when switching inputs, the tab keyaction returns false
						var notSwitching = $keyboard.keyaction.tab(base);
						base.tab = false;
						if (!notSwitching) {
							return false;
						}
					} else {
						e.preventDefault();
					}
					break;

					// Escape will hide the keyboard
				case keyCodes.escape:
					if (!o.ignoreEsc) {
						base.close(o.autoAccept && o.autoAcceptOnEsc ? 'true' : false);
					}
					return false;
				}

				// throttle the check combo function because fast typers will have an incorrectly positioned caret
				clearTimeout(base.throttled);
				base.throttled = setTimeout(function () {
					// fix error in OSX? see issue #102
					if (base && base.isVisible()) {
						base.checkCombos();
					}
				}, 100);

				base.checkMaxLength();

				base.last.preVal = '' + base.last.val;
				base.saveLastChange();

				// don't alter "e" or the "keyup" event never finishes processing; fixes #552
				var event = $.Event( $keyboard.events.kbChange );
				// base.last.key may be empty string (shift, enter, tab, etc) when keyboard is first visible
				// use e.key instead, if browser supports it
				event.action = base.last.key;
				base.$el.trigger(event, [base, base.el]);

				// change callback is no longer bound to the input element as the callback could be
				// called during an external change event with all the necessary parameters (issue #157)
				if (typeof o.change === 'function') {
					event.type = $keyboard.events.inputChange;
					o.change(event, base, base.el);
					return false;
				}
				if (o.acceptValid && o.autoAcceptOnValid) {
					if (
						typeof o.validate === 'function' &&
						o.validate(base, base.getValue(base.$preview))
					) {
						base.$preview.blur();
						base.accept();
					}
				}
			})
			.bind('keydown' + namespace, function (e) {
				base.last.keyPress = e.which;
				// ensure alwaysOpen keyboards are made active
				if (o.alwaysOpen && !base.isCurrent()) {
					base.reveal();
				}
				// prevent tab key from leaving the preview window
				if (e.which === keyCodes.tab) {
					// allow tab to pass through - tab to next input/shift-tab for prev
					base.tab = true;
					return false;
				}
				if (o.lockInput || e.timeStamp === base.last.timeStamp) {
					return !o.lockInput;
				}

				base.last.timeStamp = e.timeStamp; // fixes #659
				base.last.virtual = false;
				switch (e.which) {

				case keyCodes.backSpace:
					$keyboard.keyaction.bksp(base, null, e);
					e.preventDefault();
					break;

				case keyCodes.enter:
					$keyboard.keyaction.enter(base, null, e);
					break;

					// Show capsLock
				case keyCodes.capsLock:
					base.shiftActive = base.capsLock = !base.capsLock;
					base.showSet();
					break;

				case keyCodes.V:
					// prevent ctrl-v/cmd-v
					if (e.ctrlKey || e.metaKey) {
						if (o.preventPaste) {
							e.preventDefault();
							return;
						}
						base.checkCombos(); // check pasted content
					}
					break;
				}
			})
			.bind('mouseup touchend '.split(' ').join(namespace + ' '), function () {
				base.last.virtual = true;
				base.saveCaret();
			});

		// prevent keyboard event bubbling
		base.$keyboard.bind('mousedown click touchstart '.split(' ').join(base.namespace + ' '), function (e) {
			e.stopPropagation();
			if (!base.isCurrent()) {
				base.reveal();
				$(base.el.ownerDocument).trigger('checkkeyboard' + base.namespace);
			}
			base.setFocus();
		});

		// If preventing paste, block context menu (right click)
		if (o.preventPaste) {
			base.$preview.bind('contextmenu' + base.namespace, function (e) {
				e.preventDefault();
			});
			base.$el.bind('contextmenu' + base.namespace, function (e) {
				e.preventDefault();
			});
		}

	};

	base.bindButton = function(events, handler) {
		var button = '.' + $keyboard.css.keyButton,
			callback = function(e) {
				e.stopPropagation();
				// save closest keyboard wrapper/input to check in checkClose function
				e.$target = $(this).closest('.' + $keyboard.css.keyboard + ', .' + $keyboard.css.input);
				handler.call(this, e);
			};
		if ($.fn.on) {
			// jQuery v1.7+
			base.$keyboard.on(events, button, callback);
		} else if ($.fn.delegate) {
			// jQuery v1.4.2 - 3.0.0
			base.$keyboard.delegate(button, events, callback);
		}
		return base;
	};

	base.unbindButton = function(namespace) {
		if ($.fn.off) {
			// jQuery v1.7+
			base.$keyboard.off(namespace);
		} else if ($.fn.undelegate) {
			// jQuery v1.4.2 - 3.0.0 (namespace only added in v1.6)
			base.$keyboard.undelegate('.' + $keyboard.css.keyButton, namespace);
		}
		return base;
	};

	base.bindKeys = function () {
		var kbcss = $keyboard.css;
		base
			.unbindButton(base.namespace + ' ' + base.namespace + 'kb')
			// Change hover class and tooltip - moved this touchstart before option.keyBinding touchstart
			// to prevent mousewheel lag/duplication - Fixes #379 & #411
			.bindButton('mouseenter mouseleave touchstart '.split(' ').join(base.namespace + ' '), function (e) {
				if ((o.alwaysOpen || o.userClosed) && e.type !== 'mouseleave' && !base.isCurrent()) {
					base.reveal();
					base.setFocus();
				}
				if (!base.isCurrent() || this.disabled) {
					return;
				}
				var $keys, txt,
					last = base.last,
					$this = $(this),
					type = e.type;

				if (o.useWheel && base.wheel) {
					$keys = base.getLayers($this);
					txt = ($keys.length ? $keys.map(function () {
							return $(this).attr('data-value') || '';
						})
						.get() : '') || [$this.text()];
					last.wheel_$Keys = $keys;
					last.wheelLayers = txt;
					last.wheelIndex = $.inArray($this.attr('data-value'), txt);
				}

				if ((type === 'mouseenter' || type === 'touchstart') && base.el.type !== 'password' &&
					!$this.hasClass(o.css.buttonDisabled)) {
					$this.addClass(o.css.buttonHover);
					if (o.useWheel && base.wheel) {
						$this.attr('title', function (i, t) {
							// show mouse wheel message
							return (base.wheel && t === '' && base.sets && txt.length > 1 && type !== 'touchstart') ?
								o.wheelMessage : t;
						});
					}
				}
				if (type === 'mouseleave') {
					// needed or IE flickers really bad
					$this.removeClass((base.el.type === 'password') ? '' : o.css.buttonHover);
					if (o.useWheel && base.wheel) {
						last.wheelIndex = 0;
						last.wheelLayers = [];
						last.wheel_$Keys = [];
						$this
							.attr('title', function (i, t) {
								return (t === o.wheelMessage) ? '' : t;
							})
							.html($this.attr('data-html')); // restore original button text
					}
				}
			})
			// keyBinding = 'mousedown touchstart' by default
			.bindButton(o.keyBinding.split(' ').join(base.namespace + ' ') + base.namespace + ' ' +
				$keyboard.events.kbRepeater, function (e) {
				e.preventDefault();
				// prevent errors when external triggers attempt to 'type' - see issue #158
				if (!base.$keyboard.is(':visible') || this.disabled) {
					return false;
				}
				var action,
					last = base.last,
					$key = $(this),
					// prevent mousedown & touchstart from both firing events at the same time - see #184
					timer = new Date().getTime();

				if (o.useWheel && base.wheel) {
					// get keys from other layers/keysets (shift, alt, meta, etc) that line up by data-position
					// target mousewheel selected key
					$key = last.wheel_$Keys.length && last.wheelIndex > -1 ? last.wheel_$Keys.eq(last.wheelIndex) : $key;
				}
				action = $key.attr('data-action');
				if (timer - (last.eventTime || 0) < o.preventDoubleEventTime) {
					return;
				}
				last.eventTime = timer;
				last.event = e;
				last.virtual = true;
				last.$key = $key;
				last.key = $key.attr('data-value');
				last.keyPress = '';
				// Start caret in IE when not focused (happens with each virtual keyboard button click
				base.setFocus();
				if (/^meta/.test(action)) {
					action = 'meta';
				}
				// keyaction is added as a string, override original action & text
				if (action === last.key && typeof $keyboard.keyaction[action] === 'string') {
					last.key = action = $keyboard.keyaction[action];
				} else if (action in $keyboard.keyaction && typeof $keyboard.keyaction[action] === 'function') {
					// stop processing if action returns false (close & cancel)
					if ($keyboard.keyaction[action](base, this, e) === false) {
						return false;
					}
					action = null; // prevent inserting action name
				}
				// stop processing if keyboard closed and keyaction did not return false - see #536
				if (!base.hasKeyboard()) {
					return false;
				}
				if (typeof action !== 'undefined' && action !== null) {
					last.key = $(this).hasClass(kbcss.keyAction) ? action : last.key;
					base.insertText(last.key);
					if (!base.capsLock && !o.stickyShift && !e.shiftKey) {
						base.shiftActive = false;
						base.showSet($key.attr('data-name'));
					}
				}
				// set caret if caret moved by action function; also, attempt to fix issue #131
				$keyboard.caret(base.$preview, last);
				base.checkCombos();
				e = $.extend({}, e, $.Event($keyboard.events.kbChange));
				e.target = base.el;
				e.action = last.key;
				base.$el.trigger(e, [base, base.el]);
				last.preVal = '' + last.val;
				base.saveLastChange();

				if (typeof o.change === 'function') {
					e.type = $keyboard.events.inputChange;
					o.change(e, base, base.el);
					// return false to prevent reopening keyboard if base.accept() was called
					return false;
				}

			})
			// using 'kb' namespace for mouse repeat functionality to keep it separate
			// I need to trigger a 'repeater.keyboard' to make it work
			.bindButton('mouseup' + base.namespace + ' ' + 'mouseleave touchend touchmove touchcancel '.split(' ')
				.join(base.namespace + 'kb '), function (e) {
				base.last.virtual = true;
				var offset,
					$this = $(this);
				if (e.type === 'touchmove') {
					// if moving within the same key, don't stop repeating
					offset = $this.offset();
					offset.right = offset.left + $this.outerWidth();
					offset.bottom = offset.top + $this.outerHeight();
					if (e.originalEvent.touches[0].pageX >= offset.left &&
						e.originalEvent.touches[0].pageX < offset.right &&
						e.originalEvent.touches[0].pageY >= offset.top &&
						e.originalEvent.touches[0].pageY < offset.bottom) {
						return true;
					}
				} else if (/(mouseleave|touchend|touchcancel)/i.test(e.type)) {
					$this.removeClass(o.css.buttonHover); // needed for touch devices
				} else {
					if (!o.noFocus && base.isCurrent() && base.isVisible()) {
						base.$preview.focus();
					}
					if (base.checkCaret) {
						$keyboard.caret(base.$preview, base.last);
					}
				}
				base.mouseRepeat = [false, ''];
				clearTimeout(base.repeater); // make sure key repeat stops!
				if (o.acceptValid && o.autoAcceptOnValid) {
					if (
						typeof o.validate === 'function' &&
						o.validate(base, base.getValue())
					) {
						base.$preview.blur();
						base.accept();
					}
				}
				return false;
			})
			// prevent form submits when keyboard is bound locally - issue #64
			.bindButton('click' + base.namespace, function () {
				return false;
			})
			// Allow mousewheel to scroll through other keysets of the same (non-action) key
			.bindButton('mousewheel' + base.namespace, base.throttleEvent(function (e, delta) {
				var $btn = $(this);
				// no mouse repeat for action keys (shift, ctrl, alt, meta, etc)
				if (!$btn || $btn.hasClass(kbcss.keyAction) || base.last.wheel_$Keys[0] !== this) {
					return;
				}
				if (o.useWheel && base.wheel) {
					// deltaY used by newer versions of mousewheel plugin
					delta = delta || e.deltaY;
					var n,
						txt = base.last.wheelLayers || [];
					if (txt.length > 1) {
						n = base.last.wheelIndex + (delta > 0 ? -1 : 1);
						if (n > txt.length - 1) {
							n = 0;
						}
						if (n < 0) {
							n = txt.length - 1;
						}
					} else {
						n = 0;
					}
					base.last.wheelIndex = n;
					$btn.html(txt[n]);
					return false;
				}
			}, 30))
			.bindButton('mousedown touchstart '.split(' ').join(base.namespace + 'kb '), function () {
				var $btn = $(this);
				// no mouse repeat for action keys (shift, ctrl, alt, meta, etc)
				if (
					!$btn || (
						$btn.hasClass(kbcss.keyAction) &&
						// mouse repeated action key exceptions
						!$btn.is('.' + kbcss.keyPrefix + ('tab bksp space enter'.split(' ').join(',.' + kbcss.keyPrefix)))
					)
				) {
					return;
				}
				if (o.repeatRate !== 0) {
					// save the key, make sure we are repeating the right one (fast typers)
					base.mouseRepeat = [true, $btn];
					setTimeout(function () {
						// don't repeat keys if it is disabled - see #431
						if (base && base.mouseRepeat[0] && base.mouseRepeat[1] === $btn && !$btn[0].disabled) {
							base.repeatKey($btn);
						}
					}, o.repeatDelay);
				}
				return false;
			});
	};

	// No call on tailing event
	base.throttleEvent = function(cb, time) {
		var interm;
		return function() {
			if (!interm) {
				cb.apply(this, arguments);
				interm = true;
				setTimeout(function() {
					interm = false;
				}, time);
			}
		};
	};

	base.execCommand = function(cmd, str) {
		base.el.ownerDocument.execCommand(cmd, false, str);
		base.el.normalize();
		if (o.reposition) {
			base.reposition();
		}
	};

	base.getValue = function ($el) {
		$el = $el || base.$preview;
		return $el[base.isContentEditable ? 'text' : 'val']();
	};

	base.setValue = function (txt, $el) {
		$el = $el || base.$preview;
		if (base.isContentEditable) {
			if (txt !== $el.text()) {
				$keyboard.replaceContent($el, txt);
				base.saveCaret();
			}
		} else {
			$el.val(txt);
		}
		return base;
	};

	// Insert text at caret/selection - thanks to Derek Wickwire for fixing this up!
	base.insertText = function (txt) {
		if (!base.$preview) { return base; }
		if (typeof o.beforeInsert === 'function') {
			txt = o.beforeInsert(base.last.event, base, base.el, txt);
		}
		if (typeof txt === 'undefined' || txt === false) {
			base.last.key = '';
			return base;
		}
		if (base.isContentEditable) {
			return base.insertContentEditable(txt);
		}
		var t,
			bksp = false,
			isBksp = txt === '\b',
			// use base.$preview.val() instead of base.preview.value (val.length includes carriage returns in IE).
			val = base.getValue(),
			pos = $keyboard.caret(base.$preview),
			len = val.length; // save original content length

		// silly IE caret hacks... it should work correctly, but navigating using arrow keys in a textarea
		// is still difficult
		// in IE, pos.end can be zero after input loses focus
		if (pos.end < pos.start) {
			pos.end = pos.start;
		}
		if (pos.start > len) {
			pos.end = pos.start = len;
		}

		if (base.isTextArea) {
			// This makes sure the caret moves to the next line after clicking on enter (manual typing works fine)
			if ($keyboard.msie && val.substring(pos.start, pos.start + 1) === '\n') {
				pos.start += 1;
				pos.end += 1;
			}
		}

		t = pos.start;
		if (txt === '{d}') {
			txt = '';
			pos.end += 1;
		}

		if (isBksp) {
			txt = '';
			bksp = isBksp && t === pos.end && t > 0;
		}
		val = val.substring(0, t - (bksp ? 1 : 0)) + txt + val.substring(pos.end);
		t += bksp ? -1 : txt.length;

		base.setValue(val);
		base.saveCaret(t, t); // save caret in case of bksp
		base.setScroll();
		// see #506.. allow chaining of insertText
		return base;
	};

	base.insertContentEditable = function (txt) {
		base.$preview.focus();
		base.execCommand('insertText', txt);
		base.saveCaret();
		return base;
	};

	// check max length
	base.checkMaxLength = function () {
		if (!base.$preview) { return; }
		var start, caret,
			val = base.getValue(),
			len = base.isContentEditable ? $keyboard.getEditableLength(base.el) : val.length;
		if (o.maxLength !== false && len > o.maxLength) {
			start = $keyboard.caret(base.$preview).start;
			caret = Math.min(start, o.maxLength);

			// prevent inserting new characters when maxed #289
			if (!o.maxInsert) {
				val = base.last.val;
				caret = start - 1; // move caret back one
			}
			base.setValue(val.substring(0, o.maxLength));
			// restore caret on change, otherwise it ends up at the end.
			base.saveCaret(caret, caret);
		}
		if (base.$decBtn.length) {
			base.checkDecimal();
		}
		// allow chaining
		return base;
	};

	// mousedown repeater
	base.repeatKey = function (key) {
		key.trigger($keyboard.events.kbRepeater);
		if (base.mouseRepeat[0]) {
			base.repeater = setTimeout(function () {
				if (base){
					base.repeatKey(key);
				}
			}, base.repeatTime);
		}
	};

	base.getKeySet = function () {
		var sets = [];
		if (base.altActive) {
			sets.push('alt');
		}
		if (base.shiftActive) {
			sets.push('shift');
		}
		if (base.metaActive) {
			// base.metaActive contains the string name of the
			// current meta keyset
			sets.push(base.metaActive);
		}
		return sets.length ? sets.join('+') : 'normal';
	};

	// make it easier to switch keysets via API
	// showKeySet('shift+alt+meta1')
	base.showKeySet = function (str) {
		if (typeof str === 'string') {
			base.last.keyset = [base.shiftActive, base.altActive, base.metaActive];
			base.shiftActive = /shift/i.test(str);
			base.altActive = /alt/i.test(str);
			if (/\bmeta/.test(str)) {
				base.metaActive = true;
				base.showSet(str.match(/\bmeta[\w-]+/i)[0]);
			} else {
				base.metaActive = false;
				base.showSet();
			}
		} else {
			base.showSet(str);
		}
		// allow chaining
		return base;
	};

	base.showSet = function (name) {
		if (!base.hasKeyboard()) { return; }
		o = base.options; // refresh options
		var kbcss = $keyboard.css,
			prefix = '.' + kbcss.keyPrefix,
			active = o.css.buttonActive,
			key = '',
			toShow = (base.shiftActive ? 1 : 0) + (base.altActive ? 2 : 0);
		if (!base.shiftActive) {
			base.capsLock = false;
		}
		// check meta key set
		if (base.metaActive) {
			// remove "-shift" and "-alt" from meta name if it exists
			if (base.shiftActive) {
				name = (name || '').replace('-shift', '');
			}
			if (base.altActive) {
				name = (name || '').replace('-alt', '');
			}
			// the name attribute contains the meta set name 'meta99'
			key = (/^meta/i.test(name)) ? name : '';
			// save active meta keyset name
			if (key === '') {
				key = (base.metaActive === true) ? '' : base.metaActive;
			} else {
				base.metaActive = key;
			}
			// if meta keyset doesn't have a shift or alt keyset, then show just the meta key set
			if ((!o.stickyShift && base.last.keyset[2] !== base.metaActive) ||
				((base.shiftActive || base.altActive) &&
				!base.$keyboard.find('.' + kbcss.keySet + '-' + key + base.rows[toShow]).length)) {
				base.shiftActive = base.altActive = false;
			}
		} else if (!o.stickyShift && base.last.keyset[2] !== base.metaActive && base.shiftActive) {
			// switching from meta key set back to default, reset shift & alt if using stickyShift
			base.shiftActive = base.altActive = false;
		}
		toShow = (base.shiftActive ? 1 : 0) + (base.altActive ? 2 : 0);
		key = (toShow === 0 && !base.metaActive) ? '-normal' : (key === '') ? '' : '-' + key;
		if (!base.$keyboard.find('.' + kbcss.keySet + key + base.rows[toShow]).length) {
			// keyset doesn't exist, so restore last keyset settings
			base.shiftActive = base.last.keyset[0];
			base.altActive = base.last.keyset[1];
			base.metaActive = base.last.keyset[2];
			return;
		}
		base.$keyboard
			.find(prefix + 'alt,' + prefix + 'shift,.' + kbcss.keyAction + '[class*=meta]')
			.removeClass(active)
			.end()
			.find(prefix + 'alt')
			.toggleClass(active, base.altActive)
			.end()
			.find(prefix + 'shift')
			.toggleClass(active, base.shiftActive)
			.end()
			.find(prefix + 'lock')
			.toggleClass(active, base.capsLock)
			.end()
			.find('.' + kbcss.keySet)
			.hide()
			.end()
			.find('.' + (kbcss.keyAction + prefix + key).replace('--', '-'))
			.addClass(active);

		// show keyset using inline-block ( extender layout will then line up )
		base.$keyboard.find('.' + kbcss.keySet + key + base.rows[toShow])[0].style.display = 'inline-block';
		if (base.metaActive) {
			base.$keyboard.find(prefix + base.metaActive)
				// base.metaActive contains the string "meta#" or false
				// without the !== false, jQuery UI tries to transition the classes
				.toggleClass(active, base.metaActive !== false);
		}
		base.last.keyset = [base.shiftActive, base.altActive, base.metaActive];
		base.$el.trigger($keyboard.events.kbKeysetChange, [base, base.el]);
		if (o.reposition) {
			base.reposition();
		}
	};

	// check for key combos (dead keys)
	base.checkCombos = function () {
		// return val for close function
		if ( !(
			base.isVisible() || (
				base.hasKeyboard() &&
				base.$keyboard.hasClass( $keyboard.css.hasFocus )
			)
		) ) {
			return base.getValue(base.$preview || base.$el);
		}
		var r, t, t2, repl,
			// use base.$preview.val() instead of base.preview.value
			// (val.length includes carriage returns in IE).
			val = base.getValue(),
			pos = $keyboard.caret(base.$preview),
			layout = $keyboard.builtLayouts[base.layout],
			max = base.isContentEditable ? $keyboard.getEditableLength(base.el) : val.length,
			// save original content length
			len = max;
		// return if val is empty; fixes #352
		if (val === '') {
			// check valid on empty string - see #429
			if (o.acceptValid) {
				base.checkValid();
			}
			return val;
		}

		// silly IE caret hacks... it should work correctly, but navigating using arrow keys in a textarea
		// is still difficult
		// in IE, pos.end can be zero after input loses focus
		if (pos.end < pos.start) {
			pos.end = pos.start;
		}
		if (pos.start > len) {
			pos.end = pos.start = len;
		}
		// This makes sure the caret moves to the next line after clicking on enter (manual typing works fine)
		if ($keyboard.msie && val.substring(pos.start, pos.start + 1) === '\n') {
			pos.start += 1;
			pos.end += 1;
		}

		if (o.useCombos) {
			// keep 'a' and 'o' in the regex for ae and oe ligature (æ,œ)
			// thanks to KennyTM: http://stackoverflow.com/q/4275077
			// original regex /([`\'~\^\"ao])([a-z])/mig moved to $.keyboard.comboRegex
			if ($keyboard.msie) {
				// old IE may not have the caret positioned correctly, so just check the whole thing
				val = val.replace(base.regex, function (s, accent, letter) {
					return (o.combos.hasOwnProperty(accent)) ? o.combos[accent][letter] || s : s;
				});
				// prevent combo replace error, in case the keyboard closes - see issue #116
			} else if (base.$preview.length) {
				// Modern browsers - check for combos from last two characters left of the caret
				t = pos.start - (pos.start - 2 >= 0 ? 2 : 0);
				// target last two characters
				$keyboard.caret(base.$preview, t, pos.end);
				// do combo replace
				t = $keyboard.caret(base.$preview);
				repl = function (txt) {
					return (txt || '').replace(base.regex, function (s, accent, letter) {
						return (o.combos.hasOwnProperty(accent)) ? o.combos[accent][letter] || s : s;
					});
				};
				t2 = repl(t.text);
				// add combo back
				// prevent error if caret doesn't return a function
				if (t && t.replaceStr && t2 !== t.text) {
					if (base.isContentEditable) {
						$keyboard.replaceContent(el, repl);
					} else {
						base.setValue(t.replaceStr(t2));
					}
				}
				val = base.getValue();
			}
		}

		// check input restrictions - in case content was pasted
		if (o.restrictInput && val !== '') {
			t = layout.acceptedKeys.length;

			r = layout.acceptedKeysRegex;
			if (!r) {
				t2 = $.map(layout.acceptedKeys, function (v) {
					// escape any special characters
					return v.replace(base.escapeRegex, '\\$&');
				});
				if (base.alwaysAllowed.indexOf($keyboard.keyCodes.enter) > -1) {
					t2.push('\\n'); // Fixes #686
				}
				r = layout.acceptedKeysRegex = new RegExp('(' + t2.join('|') + ')', 'g');
			}
			// only save matching keys
			t2 = val.match(r);
			if (t2) {
				val = t2.join('');
			} else {
				// no valid characters
				val = '';
				len = 0;
			}
		}

		// save changes, then reposition caret
		pos.start += max - len;
		pos.end += max - len;

		base.setValue(val);
		base.saveCaret(pos.start, pos.end);
		// set scroll to keep caret in view
		base.setScroll();
		base.checkMaxLength();

		if (o.acceptValid) {
			base.checkValid();
		}
		return val; // return text, used for keyboard closing section
	};

	// Toggle accept button classes, if validating
	base.checkValid = function () {
		var kbcss = $keyboard.css,
			$accept = base.$keyboard.find('.' + kbcss.keyPrefix + 'accept'),
			valid = true;
		if (typeof o.validate === 'function') {
			valid = o.validate(base, base.getValue(), false);
		}
		// toggle accept button classes; defined in the css
		$accept
			.toggleClass(kbcss.inputInvalid, !valid)
			.toggleClass(kbcss.inputValid, valid)
			// update title to indicate that the entry is valid or invalid
			.attr('title', $accept.attr('data-title') + ' (' + o.display[valid ? 'valid' : 'invalid'] + ')');
	};

	// Decimal button for num pad - only allow one (not used by default)
	base.checkDecimal = function () {
		// Check US '.' or European ',' format
		if ((base.decimal && /\./g.test(base.preview.value)) ||
			(!base.decimal && /\,/g.test(base.preview.value))) {
			base.$decBtn
				.attr({
					'disabled': 'disabled',
					'aria-disabled': 'true'
				})
				.removeClass(o.css.buttonHover)
				.addClass(o.css.buttonDisabled);
		} else {
			base.$decBtn
				.removeAttr('disabled')
				.attr({
					'aria-disabled': 'false'
				})
				.addClass(o.css.buttonDefault)
				.removeClass(o.css.buttonDisabled);
		}
	};

	// get other layer values for a specific key
	base.getLayers = function ($el) {
		var kbcss = $keyboard.css,
			key = $el.attr('data-pos'),
			$keys = $el.closest('.' + kbcss.keyboard)
			.find('button[data-pos="' + key + '"]');
		return $keys.filter(function () {
			return $(this)
				.find('.' + kbcss.keyText)
				.text() !== '';
		})
		.add($el);
	};

	// Go to next or prev inputs
	// goToNext = true, then go to next input; if false go to prev
	// isAccepted is from autoAccept option or true if user presses shift+enter
	base.switchInput = function (goToNext, isAccepted) {
		if (typeof o.switchInput === 'function') {
			o.switchInput(base, goToNext, isAccepted);
		} else {
			// base.$keyboard may be an empty array - see #275 (apod42)
			if (base.$keyboard.length) {
				base.$keyboard.hide();
			}
			var kb,
				stopped = false,
				all = $('button, input, select, textarea, a, [contenteditable]')
					.filter(':visible')
					.not(':disabled'),
				indx = all.index(base.$el) + (goToNext ? 1 : -1);
			if (base.$keyboard.length) {
				base.$keyboard.show();
			}
			if (indx > all.length - 1) {
				stopped = o.stopAtEnd;
				indx = 0; // go to first input
			}
			if (indx < 0) {
				stopped = o.stopAtEnd;
				indx = all.length - 1; // stop or go to last
			}
			if (!stopped) {
				isAccepted = base.close(isAccepted);
				if (!isAccepted) {
					return;
				}
				kb = all.eq(indx).data('keyboard');
				if (kb && kb.options.openOn.length) {
					kb.focusOn();
				} else {
					all.eq(indx).focus();
				}
			}
		}
		return false;
	};

	// Close the keyboard, if visible. Pass a status of true, if the content was accepted
	// (for the event trigger).
	base.close = function (accepted) {
		if (base.isOpen && base.$keyboard.length) {
			clearTimeout(base.throttled);
			var kbcss = $keyboard.css,
				kbevents = $keyboard.events,
				val = accepted ? base.checkCombos() : base.originalContent;
			// validate input if accepted
			if (accepted && typeof o.validate === 'function' && !o.validate(base, val, true)) {
				val = base.originalContent;
				accepted = false;
				if (o.cancelClose) {
					return;
				}
			}
			base.isCurrent(false);
			base.isOpen = o.alwaysOpen || o.userClosed;
			if (base.isContentEditable && !accepted) {
				// base.originalContent stores the HTML
				base.$el.html(val);
			} else {
				base.setValue(val, base.$el);
			}
			base.$el
				.removeClass(kbcss.isCurrent + ' ' + kbcss.inputAutoAccepted)
				// add 'ui-keyboard-autoaccepted' to inputs - see issue #66
				.addClass((accepted || false) ? accepted === true ? '' : kbcss.inputAutoAccepted : '')
				// trigger default change event - see issue #146
				.trigger(kbevents.inputChange);
			// don't trigger an empty event - see issue #463
			if (!o.alwaysOpen) {
				// don't trigger beforeClose if keyboard is always open
				base.$el.trigger(kbevents.kbBeforeClose, [base, base.el, (accepted || false)]);
			}
			// save caret after updating value (fixes userClosed issue with changing focus)
			$keyboard.caret(base.$preview, base.last);

			base.$el
				.trigger(((accepted || false) ? kbevents.inputAccepted : kbevents.inputCanceled), [base, base.el])
				.trigger((o.alwaysOpen) ? kbevents.kbInactive : kbevents.kbHidden, [base, base.el])
				.blur();

			// base is undefined if keyboard was destroyed - fixes #358
			if (base) {
				// add close event time
				base.last.eventTime = new Date().getTime();
				if (!(o.alwaysOpen || o.userClosed && accepted === 'true') && base.$keyboard.length) {
					// free up memory
					base.removeKeyboard();
					// rebind input focus - delayed to fix IE issue #72
					base.timer = setTimeout(function () {
						if (base) {
							base.bindFocus();
						}
					}, 200);
				}
				if (!base.watermark && base.el.value === '' && base.inPlaceholder !== '') {
					base.$el.addClass(kbcss.placeholder);
					base.setValue(base.inPlaceholder, base.$el);
				}
			}
		}
		return !!accepted;
	};

	base.accept = function () {
		return base.close(true);
	};

	base.checkClose = function (e) {
		if (base.opening) {
			return;
		}
		var kbcss = $.keyboard.css,
			$target = e.$target || $(e.target).closest('.' + $keyboard.css.keyboard + ', .' + $keyboard.css.input);
		if (!$target.length) {
			$target = $(e.target);
		}
		// needed for IE to allow switching between keyboards smoothly
		if ($target.length && $target.hasClass(kbcss.keyboard)) {
			var kb = $target.data('keyboard');
			// only trigger on self
			if (
				kb !== base &&
				!kb.$el.hasClass(kbcss.isCurrent) &&
				kb.options.openOn &&
				e.type === o.openOn
			) {
				kb.focusOn();
			}
		} else {
			base.escClose(e, $target);
		}
	};

	// callback functions called to check if the keyboard needs to be closed
	// e.g. on escape or clicking outside the keyboard
	base.escCloseCallback = {
		// keep keyboard open if alwaysOpen or stayOpen is true - fixes mutliple
		// always open keyboards or single stay open keyboard
		keepOpen: function() {
			return !base.isOpen;
		}
	};

	base.escClose = function (e, $el) {
		if (!base.isOpen) {
			return;
		}
		if (e && e.type === 'keyup') {
			return (e.which === $keyboard.keyCodes.escape && !o.ignoreEsc) ?
				base.close(o.autoAccept && o.autoAcceptOnEsc ? 'true' : false) :
				'';
		}
		var shouldStayOpen = false,
			$target = $el.length && $el || $(e.target);
		$.each(base.escCloseCallback, function(i, callback) {
			if (typeof callback === 'function') {
				shouldStayOpen = shouldStayOpen || callback($target);
			}
		});
		if (shouldStayOpen) {
			return;
		}
		// ignore autoaccept if using escape - good idea?
		if (!base.isCurrent() && base.isOpen || base.isOpen && $target[0] !== base.el) {
			// don't close if stayOpen is set; but close if a different keyboard is being opened
			if ((o.stayOpen || o.userClosed) && !$target.hasClass($keyboard.css.input)) {
				return;
			}
			// stop propogation in IE - an input getting focus doesn't open a keyboard if one is already open
			if ($keyboard.allie) {
				e.preventDefault();
			}
			if (o.closeByClickEvent) {
				// only close the keyboard if the user is clicking on an input or if they cause a click
				// event (touchstart/mousedown will not force the close with this setting)
				var name = $target[0] && $target[0].nodeName.toLowerCase();
				if (name === 'input' || name === 'textarea' || e.type === 'click') {
					base.close(o.autoAccept ? 'true' : false);
				}
			} else {
				// send 'true' instead of a true (boolean), the input won't get a 'ui-keyboard-autoaccepted'
				// class name - see issue #66
				base.close(o.autoAccept ? 'true' : false);
			}
		}
	};

	// Build default button
	base.keyBtn = $('<button />')
		.attr({
			'role': 'button',
			'type': 'button',
			'aria-disabled': 'false',
			'tabindex': '-1'
		})
		.addClass($keyboard.css.keyButton);

	// convert key names into a class name
	base.processName = function (name) {
		var index, n,
			process = (name || '').replace(/[^a-z0-9-_]/gi, ''),
			len = process.length,
			newName = [];
		if (len > 1 && name === process) {
			// return name if basic text
			return name;
		}
		// return character code sequence
		len = name.length;
		if (len) {
			for (index = 0; index < len; index++) {
				n = name[index];
				// keep '-' and '_'... so for dash, we get two dashes in a row
				newName.push(/[a-z0-9-_]/i.test(n) ?
					(/[-_]/.test(n) && index !== 0 ? '' : n) :
					(index === 0 ? '' : '-') + n.charCodeAt(0)
				);
			}
			return newName.join('');
		}
		return name;
	};

	base.processKeys = function (name) {
		var tmp, parts,
			htmlIndex = name.indexOf('</'),
			data = {
				name: name,
				map: '',
				title: ''
			};
		if (htmlIndex > -1) {
			// If it looks like HTML, skip processing; see #743
			// html may include colons; see #701
			return data;
		}
		// Don't split colons followed by //, e.g. https://; Fixes #555
		parts = name.split(/:(?!\/\/)/);

		/* map defined keys
		format 'key(A):Label_for_key_(ignore_parentheses_here)'
			'key' = key that is seen (can any character(s); but it might need to be escaped using '\'
			or entered as unicode '\u####'
			'(A)' = the actual key on the real keyboard to remap
			':Label_for_key' ends up in the title/tooltip
		Examples:
			'\u0391(A):alpha', 'x(y):this_(might)_cause_problems
			or edge cases of ':(x)', 'x(:)', 'x(()' or 'x())'
		Enhancement (if I can get alt keys to work):
			A mapped key will include the mod key, e.g. 'x(alt-x)' or 'x(alt-shift-x)'
		*/
		if (/\(.+\)/.test(parts[0]) || /^:\(.+\)/.test(name) || /\([(:)]\)/.test(name)) {
			// edge cases 'x(:)', 'x(()' or 'x())'
			if (/\([(:)]\)/.test(name)) {
				tmp = parts[0].match(/([^(]+)\((.+)\)/);
				if (tmp && tmp.length) {
					data.name = tmp[1];
					data.map = tmp[2];
					data.title = parts.length > 1 ? parts.slice(1).join(':') : '';
				} else {
					// edge cases 'x(:)', ':(x)' or ':(:)'
					data.name = name.match(/([^(]+)/)[0];
					if (data.name === ':') {
						// ':(:):test' => parts = [ '', '(', ')', 'title' ] need to slice 1
						parts = parts.slice(1);
					}
					if (tmp === null) {
						// 'x(:):test' => parts = [ 'x(', ')', 'title' ] need to slice 2
						data.map = ':';
						parts = parts.slice(2);
					}
					data.title = parts.length ? parts.join(':') : '';
				}
			} else {
				// example: \u0391(A):alpha; extract 'A' from '(A)'
				data.map = name.match(/\(([^()]+?)\)/)[1];
				// remove '(A)', left with '\u0391:alpha'
				name = name.replace(/\(([^()]+)\)/, '');
				tmp = name.split(':');
				// get '\u0391' from '\u0391:alpha'
				if (tmp[0] === '') {
					data.name = ':';
					parts = parts.slice(1);
				} else {
					data.name = tmp[0];
				}
				data.title = parts.length > 1 ? parts.slice(1).join(':') : '';
			}
		} else {
			// find key label
			// corner case of '::;' reduced to ':;', split as ['', ';']
			if (name !== '' && parts[0] === '') {
				data.name = ':';
				parts = parts.slice(1);
			} else {
				data.name = parts[0];
			}
			data.title = parts.length > 1 ? parts.slice(1).join(':') : '';
		}
		data.title = $.trim(data.title).replace(/_/g, ' ');
		return data;
	};

	// Add key function
	// keyName = the name of the function called in $.keyboard.keyaction when the button is clicked
	// name = name added to key, or cross-referenced in the display options
	// base.temp[0] = keyset to attach the new button
	// regKey = true when it is not an action key
	base.addKey = function (keyName, action, regKey) {
		var keyClass, tmp, keys,
			data = {},
			txt = base.processKeys(regKey ? keyName : action),
			kbcss = $keyboard.css;

		if (!regKey && o.display[txt.name]) {
			keys = base.processKeys(o.display[txt.name]);
			// action contained in "keyName" (e.g. keyName = "accept",
			// action = "a" (use checkmark instead of text))
			keys.action = base.processKeys(keyName).name;
		} else {
			// when regKey is true, keyName is the same as action
			keys = txt;
			keys.action = txt.name;
		}

		data.name = base.processName(txt.name);
		if (keys.name !== '') {
			if (keys.map !== '') {
				$keyboard.builtLayouts[base.layout].mappedKeys[keys.map] = keys.name;
				$keyboard.builtLayouts[base.layout].acceptedKeys.push(keys.name);
			} else if (regKey) {
				$keyboard.builtLayouts[base.layout].acceptedKeys.push(keys.name);
			}
		}

		if (regKey) {
			keyClass = data.name === '' ? '' : kbcss.keyPrefix + data.name;
		} else {
			// Action keys will have the 'ui-keyboard-actionkey' class
			keyClass = kbcss.keyAction + ' ' + kbcss.keyPrefix + keys.action;
		}
		// '\u2190'.length = 1 because the unicode is converted, so if more than one character,
		// add the wide class
		keyClass += (keys.name.length > 2 ? ' ' + kbcss.keyWide : '') + ' ' + o.css.buttonDefault;

		// Allow HTML in the key.name
		data.html = '<span class="' + kbcss.keyText + '">' + keys.name + '</span>';

		data.$key = base.keyBtn
			.clone()
			.attr({
				'data-value': regKey ? keys.name : keys.action, // value
				'data-name': keys.action,
				'data-pos': base.temp[1] + ',' + base.temp[2],
				'data-action': keys.action,
				'data-html': data.html
			})
			// add 'ui-keyboard-' + data.name for all keys
			//  (e.g. 'Bksp' will have 'ui-keyboard-bskp' class)
			// any non-alphanumeric characters will be replaced with
			//  their decimal unicode value
			//  (e.g. '~' is a regular key, class = 'ui-keyboard-126'
			//  (126 is the unicode decimal value - same as &#126;)
			//  See https://en.wikipedia.org/wiki/List_of_Unicode_characters#Control_codes
			.addClass(keyClass)
			.html(data.html)
			.appendTo(base.temp[0]);

		if (keys.map) {
			data.$key.attr('data-mapped', keys.map);
		}
		if (keys.title || txt.title) {
			data.$key.attr({
				'data-title': txt.title || keys.title, // used to allow adding content to title
				'title': txt.title || keys.title
			});
		}

		if (typeof o.buildKey === 'function') {
			data = o.buildKey(base, data);
			// copy html back to attributes
			tmp = data.$key.html();
			data.$key.attr('data-html', tmp);
		}
		return data.$key;
	};

	base.customHash = function (layout) {
		/*jshint bitwise:false */
		var i, array, hash, character, len,
			arrays = [],
			merged = [];
		// pass layout to allow for testing
		layout = typeof layout === 'undefined' ? o.customLayout : layout;
		// get all layout arrays
		for (array in layout) {
			if (layout.hasOwnProperty(array)) {
				arrays.push(layout[array]);
			}
		}
		// flatten array
		merged = merged.concat.apply(merged, arrays).join(' ');
		// produce hash name - http://stackoverflow.com/a/7616484/145346
		hash = 0;
		len = merged.length;
		if (len === 0) {
			return hash;
		}
		for (i = 0; i < len; i++) {
			character = merged.charCodeAt(i);
			hash = ((hash << 5) - hash) + character;
			hash = hash & hash; // Convert to 32bit integer
		}
		return hash;
	};

	base.buildKeyboard = function (name, internal) {
		// o.display is empty when this is called from the scramble extension (when alwaysOpen:true)
		if ($.isEmptyObject(o.display)) {
			// set keyboard language
			base.updateLanguage();
		}
		var index, row, $row, currentSet,
			kbcss = $keyboard.css,
			sets = 0,
			layout = $keyboard.builtLayouts[name || base.layout || o.layout] = {
				mappedKeys: {},
				acceptedKeys: []
			},
			acceptedKeys = layout.acceptedKeys = o.restrictInclude ?
				('' + o.restrictInclude).split(/\s+/) || [] :
				[],
			// using $layout temporarily to hold keyboard popup classnames
			$layout = kbcss.keyboard + ' ' + o.css.popup + ' ' + o.css.container +
				(o.alwaysOpen || o.userClosed ? ' ' + kbcss.alwaysOpen : ''),

			container = $('<div />')
				.addClass($layout)
				.attr({
					'role': 'textbox'
				})
				.hide();

		// allow adding "{space}" as an accepted key - Fixes #627
		index = $.inArray('{space}', acceptedKeys);
		if (index > -1) {
			acceptedKeys[index] = ' ';
		}

		// verify layout or setup custom keyboard
		if ((internal && o.layout === 'custom') || !$keyboard.layouts.hasOwnProperty(o.layout)) {
			o.layout = 'custom';
			$layout = $keyboard.layouts.custom = o.customLayout || {
				'normal': ['{cancel}']
			};
		} else {
			$layout = $keyboard.layouts[internal ? o.layout : name || base.layout || o.layout];
		}

		// Main keyboard building loop
		$.each($layout, function (set, keySet) {
			// skip layout name & lang settings
			if (set !== '' && !/^(name|lang|rtl)$/i.test(set)) {
				// keep backwards compatibility for change from default to normal naming
				if (set === 'default') {
					set = 'normal';
				}
				sets++;
				$row = $('<div />')
					.attr('name', set) // added for typing extension
					.addClass(kbcss.keySet + ' ' + kbcss.keySet + '-' + set)
					.appendTo(container)
					.toggle(set === 'normal');

				for (row = 0; row < keySet.length; row++) {
					// remove extra spaces before spliting (regex probably could be improved)
					currentSet = $.trim(keySet[row]).replace(/\{(\.?)[\s+]?:[\s+]?(\.?)\}/g, '{$1:$2}');
					base.buildRow($row, row, currentSet.split(/\s+/), acceptedKeys);
					$row.find('.' + kbcss.keyButton + ',.' + kbcss.keySpacer)
						.filter(':last')
						.after('<br class="' + kbcss.endRow + '"/>');
				}
			}
		});

		if (sets > 1) {
			base.sets = true;
		}
		layout.hasMappedKeys = !($.isEmptyObject(layout.mappedKeys));
		layout.$keyboard = container;
		return container;
	};

	base.buildRow = function ($row, row, keys, acceptedKeys) {
		var t, txt, key, isAction, action, margin,
			kbcss = $keyboard.css;
		for (key = 0; key < keys.length; key++) {
			// used by addKey function
			base.temp = [$row, row, key];
			isAction = false;

			// ignore empty keys
			if (keys[key].length === 0) {
				continue;
			}

			// process here if it's an action key
			if (/^\{\S+\}$/.test(keys[key])) {
				action = keys[key].match(/^\{(\S+)\}$/)[1];
				// add active class if there are double exclamation points in the name
				if (/\!\!/.test(action)) {
					action = action.replace('!!', '');
					isAction = true;
				}

				// add empty space
				if (/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/i.test(action)) {
					// not perfect globalization, but allows you to use {sp:1,1em}, {sp:1.2em} or {sp:15px}
					margin = parseFloat(action
						.replace(/,/, '.')
						.match(/^sp:((\d+)?([\.|,]\d+)?)(em|px)?$/i)[1] || 0
					);
					$('<span class="' + kbcss.keyText + '"></span>')
						// previously {sp:1} would add 1em margin to each side of a 0 width span
						// now Firefox doesn't seem to render 0px dimensions, so now we set the
						// 1em margin x 2 for the width
						.width((action.match(/px/i) ? margin + 'px' : (margin * 2) + 'em'))
						.addClass(kbcss.keySpacer)
						.appendTo($row);
				}

				// add empty button
				if (/^empty(:((\d+)?([\.|,]\d+)?)(em|px)?)?$/i.test(action)) {
					margin = (/:/.test(action)) ? parseFloat(action
						.replace(/,/, '.')
						.match(/^empty:((\d+)?([\.|,]\d+)?)(em|px)?$/i)[1] || 0
					) : '';
					base
						.addKey('', ' ', true)
						.addClass(o.css.buttonDisabled + ' ' + o.css.buttonEmpty)
						.attr('aria-disabled', true)
						.width(margin ? (action.match('px') ? margin + 'px' : (margin * 2) + 'em') : '');
					continue;
				}

				// meta keys
				if (/^meta[\w-]+\:?(\w+)?/i.test(action)) {
					base
						.addKey(action.split(':')[0], action)
						.addClass(kbcss.keyHasActive);
					continue;
				}

				// switch needed for action keys with multiple names/shortcuts or
				// default will catch all others
				txt = action.split(':');
				switch (txt[0].toLowerCase()) {

				case 'a':
				case 'accept':
					base
						.addKey('accept', action)
						.addClass(o.css.buttonAction + ' ' + kbcss.keyAction);
					break;

				case 'alt':
				case 'altgr':
					base
						.addKey('alt', action)
						.addClass(kbcss.keyHasActive);
					break;

				case 'b':
				case 'bksp':
					base.addKey('bksp', action);
					break;

				case 'c':
				case 'cancel':
					base
						.addKey('cancel', action)
						.addClass(o.css.buttonAction + ' ' + kbcss.keyAction);
					break;

					// toggle combo/diacritic key
					/*jshint -W083 */
				case 'combo':
					base
						.addKey('combo', action)
						.addClass(kbcss.keyHasActive)
						.attr('title', function (indx, title) {
							// add combo key state to title
							return title + ' ' + o.display[o.useCombos ? 'active' : 'disabled'];
						})
						.toggleClass(o.css.buttonActive, o.useCombos);
					break;

					// Decimal - unique decimal point (num pad layout)
				case 'dec':
					acceptedKeys.push((base.decimal) ? '.' : ',');
					base.addKey('dec', action);
					break;

				case 'e':
				case 'enter':
					base
						.addKey('enter', action)
						.addClass(o.css.buttonAction + ' ' + kbcss.keyAction);
					break;

				case 'lock':
					base
						.addKey('lock', action)
						.addClass(kbcss.keyHasActive);
					break;

				case 's':
				case 'shift':
					base
						.addKey('shift', action)
						.addClass(kbcss.keyHasActive);
					break;

					// Change sign (for num pad layout)
				case 'sign':
					acceptedKeys.push('-');
					base.addKey('sign', action);
					break;

				case 'space':
					acceptedKeys.push(' ');
					base.addKey('space', action);
					break;

				case 't':
				case 'tab':
					base.addKey('tab', action);
					break;

				default:
					if ($keyboard.keyaction.hasOwnProperty(txt[0])) {
						base
							.addKey(txt[0], action)
							.toggleClass(o.css.buttonAction + ' ' + kbcss.keyAction, isAction);
					}

				}

			} else {

				// regular button (not an action key)
				t = keys[key];
				base.addKey(t, t, true);
			}
		}
	};

	base.removeBindings = function (namespace) {
		$(document).unbind(namespace);
		if (base.el.ownerDocument !== document) {
			$(base.el.ownerDocument).unbind(namespace);
		}
		$(window).unbind(namespace);
		base.$el.unbind(namespace);
	};

	base.removeKeyboard = function () {
		base.$decBtn = [];
		// base.$preview === base.$el when o.usePreview is false - fixes #442
		if (o.usePreview) {
			base.$preview.removeData('keyboard');
		}
		base.$preview.unbind(base.namespace + 'keybindings');
		base.preview = null;
		base.$preview = null;
		base.$previewCopy = null;
		base.$keyboard.removeData('keyboard');
		base.$keyboard.remove();
		base.$keyboard = [];
		base.isOpen = false;
		base.isCurrent(false);
	};

	base.destroy = function (callback) {
		var index,
			kbcss = $keyboard.css,
			len = base.extensionNamespace.length,
			tmp = [
				kbcss.input,
				kbcss.locked,
				kbcss.placeholder,
				kbcss.noKeyboard,
				kbcss.alwaysOpen,
				o.css.input,
				kbcss.isCurrent
			].join(' ');
		clearTimeout(base.timer);
		clearTimeout(base.timer2);
		clearTimeout(base.timer3);
		if (base.$keyboard.length) {
			base.removeKeyboard();
		}
		if (base.options.openOn) {
			base.removeBindings(base.options.openOn);
		}
		base.removeBindings(base.namespace);
		base.removeBindings(base.namespace + 'callbacks');
		for (index = 0; index < len; index++) {
			base.removeBindings(base.extensionNamespace[index]);
		}
		base.el.active = false;

		base.$el
			.removeClass(tmp)
			.removeAttr('aria-haspopup')
			.removeAttr('role')
			.removeAttr('readonly')
			.removeData('keyboard');
		base = null;

		if (typeof callback === 'function') {
			callback();
		}
	};

	// Run initializer
	base.init();

	}; // end $.keyboard definition

	// event.which & ASCII values
	$keyboard.keyCodes = {
		backSpace: 8,
		tab: 9,
		enter: 13,
		capsLock: 20,
		escape: 27,
		space: 32,
		pageUp: 33,
		pageDown: 34,
		end: 35,
		home: 36,
		left: 37,
		up: 38,
		right: 39,
		down: 40,
		insert: 45,
		delete: 46,
		// event.which keyCodes (uppercase letters)
		A: 65,
		Z: 90,
		V: 86,
		C: 67,
		X: 88,

		// ASCII lowercase a & z
		a: 97,
		z: 122
	};

	$keyboard.css = {
		// keyboard id suffix
		idSuffix: '_keyboard',
		// class name to set initial focus
		initialFocus: 'keyboard-init-focus',
		// element class names
		input: 'ui-keyboard-input',
		inputClone: 'ui-keyboard-preview-clone',
		wrapper: 'ui-keyboard-preview-wrapper',
		preview: 'ui-keyboard-preview',
		keyboard: 'ui-keyboard',
		keySet: 'ui-keyboard-keyset',
		keyButton: 'ui-keyboard-button',
		keyWide: 'ui-keyboard-widekey',
		keyPrefix: 'ui-keyboard-',
		keyText: 'ui-keyboard-text', // span with button text
		keyHasActive: 'ui-keyboard-hasactivestate',
		keyAction: 'ui-keyboard-actionkey',
		keySpacer: 'ui-keyboard-spacer', // empty keys
		keyToggle: 'ui-keyboard-toggle',
		keyDisabled: 'ui-keyboard-disabled',
		// Class for BRs with a div wrapper inside of contenteditable
		divWrapperCE: 'ui-keyboard-div-wrapper',
		// states
		locked: 'ui-keyboard-lockedinput',
		alwaysOpen: 'ui-keyboard-always-open',
		noKeyboard: 'ui-keyboard-nokeyboard',
		placeholder: 'ui-keyboard-placeholder',
		hasFocus: 'ui-keyboard-has-focus',
		isCurrent: 'ui-keyboard-input-current',
		// validation & autoaccept
		inputValid: 'ui-keyboard-valid-input',
		inputInvalid: 'ui-keyboard-invalid-input',
		inputAutoAccepted: 'ui-keyboard-autoaccepted',
		endRow: 'ui-keyboard-button-endrow' // class added to <br>
	};

	$keyboard.events = {
		// keyboard events
		kbChange: 'keyboardChange',
		kbBeforeClose: 'beforeClose',
		kbBeforeVisible: 'beforeVisible',
		kbVisible: 'visible',
		kbInit: 'initialized',
		kbInactive: 'inactive',
		kbHidden: 'hidden',
		kbRepeater: 'repeater',
		kbKeysetChange: 'keysetChange',
		// input events
		inputAccepted: 'accepted',
		inputCanceled: 'canceled',
		inputChange: 'change',
		inputRestricted: 'restricted'
	};

	// Action key function list
	$keyboard.keyaction = {
		accept: function (base) {
			base.close(true); // same as base.accept();
			return false; // return false prevents further processing
		},
		alt: function (base) {
			base.altActive = !base.altActive;
			base.showSet();
		},
		bksp: function (base) {
			if (base.isContentEditable) {
				base.execCommand('delete');
				// save new caret position
				base.saveCaret();
			} else {
				// the script looks for the '\b' string and initiates a backspace
				base.insertText('\b');
			}
		},
		cancel: function (base) {
			base.close();
			return false; // return false prevents further processing
		},
		clear: function (base) {
			base.$preview[base.isContentEditable ? 'text' : 'val']('');
			if (base.$decBtn.length) {
				base.checkDecimal();
			}
		},
		combo: function (base) {
			var o = base.options,
				c = !o.useCombos,
				$combo = base.$keyboard.find('.' + $keyboard.css.keyPrefix + 'combo');
			o.useCombos = c;
			$combo
				.toggleClass(o.css.buttonActive, c)
				// update combo key state
				.attr('title', $combo.attr('data-title') + ' (' + o.display[c ? 'active' : 'disabled'] + ')');
			if (c) {
				base.checkCombos();
			}
			return false;
		},
		dec: function (base) {
			base.insertText((base.decimal) ? '.' : ',');
		},
		del: function (base) {
			if (base.isContentEditable) {
				base.execCommand('forwardDelete');
			} else {
				// the script looks for the '{d}' string and initiates a delete
				base.insertText('{d}');
			}
		},
		// resets to base keyset (deprecated because "default" is a reserved word)
		'default': function (base) {
			base.shiftActive = base.altActive = base.metaActive = false;
			base.showSet();
		},
		// el is the pressed key (button) object; it is null when the real keyboard enter is pressed
		enter: function (base, el, e) {
			var o = base.options;
			// shift+enter in textareas
			if (e.shiftKey) {
				// textarea, input & contenteditable - enterMod + shift + enter = accept,
				//  then go to prev; base.switchInput(goToNext, autoAccept)
				// textarea & input - shift + enter = accept (no navigation)
				return (o.enterNavigation) ? base.switchInput(!e[o.enterMod], true) : base.close(true);
			}
			// input only - enterMod + enter to navigate
			if (o.enterNavigation && (!base.isTextArea || e[o.enterMod])) {
				return base.switchInput(!e[o.enterMod], o.autoAccept ? 'true' : false);
			}
			// pressing virtual enter button inside of a textarea - add a carriage return
			// e.target is span when clicking on text and button at other times
			if (base.isTextArea && $(e.target).closest('button').length) {
				// IE8 fix (space + \n) - fixes #71 thanks Blookie!
				base.insertText(($keyboard.msie ? ' ' : '') + '\n');
			}
			if (base.isContentEditable && !o.enterNavigation) {
				base.execCommand('insertHTML', '<div><br class="' + $keyboard.css.divWrapperCE + '"></div>');
				// Using backspace on wrapped BRs will now shift the textnode inside of the wrapped BR
				// Although not ideal, the caret is moved after the block - see the wiki page for
				// more details: https://github.com/Mottie/Keyboard/wiki/Contenteditable#limitations
				// move caret after a delay to allow rendering of HTML
				setTimeout(function() {
					$keyboard.keyaction.right(base);
					base.saveCaret();
				}, 0);
			}
		},
		// caps lock key
		lock: function (base) {
			base.last.keyset[0] = base.shiftActive = base.capsLock = !base.capsLock;
			base.showSet();
		},
		left: function (base) {
			var p = $keyboard.caret(base.$preview);
			if (p.start - 1 >= 0) {
				// move both start and end of caret (prevents text selection) & save caret position
				base.last.start = base.last.end = p.start - 1;
				$keyboard.caret(base.$preview, base.last);
				base.setScroll();
			}
		},
		meta: function (base, el) {
			var $el = $(el);
			base.metaActive = !$el.hasClass(base.options.css.buttonActive);
			base.showSet($el.attr('data-name'));
		},
		next: function (base) {
			base.switchInput(true, base.options.autoAccept);
			return false;
		},
		// same as 'default' - resets to base keyset
		normal: function (base) {
			base.shiftActive = base.altActive = base.metaActive = false;
			base.showSet();
		},
		prev: function (base) {
			base.switchInput(false, base.options.autoAccept);
			return false;
		},
		right: function (base) {
			var p = $keyboard.caret(base.$preview),
				len = base.isContentEditable ? $keyboard.getEditableLength(base.el) : base.getValue().length;
			if (p.end + 1 <= len) {
				// move both start and end of caret to end position
				// (prevents text selection) && save caret position
				base.last.start = base.last.end = p.end + 1;
				$keyboard.caret(base.$preview, base.last);
				base.setScroll();
			}
		},
		shift: function (base) {
			base.last.keyset[0] = base.shiftActive = !base.shiftActive;
			base.showSet();
		},
		sign: function (base) {
			if (/^[+-]?\d*\.?\d*$/.test(base.getValue())) {
				var caret,
					p = $keyboard.caret(base.$preview),
					val = base.getValue(),
					len = base.isContentEditable ? $keyboard.getEditableLength(base.el) : val.length;
				base.setValue(val * -1);
				caret = len - val.length;
				base.last.start = p.start + caret;
				base.last.end = p.end + caret;
				$keyboard.caret(base.$preview, base.last);
				base.setScroll();
			}
		},
		space: function (base) {
			base.insertText(' ');
		},
		tab: function (base) {
			var o = base.options;
			if (!base.isTextArea) {
				if (o.tabNavigation) {
					return base.switchInput(!base.shiftActive, true);
				} else if (base.isInput) {
					// ignore tab key in input
					return false;
				}
			}
			base.insertText('\t');
		},
		toggle: function (base) {
			base.enabled = !base.enabled;
			base.toggle();
		},
		// *** Special action keys: NBSP & zero-width characters ***
		// Non-breaking space
		NBSP: '\u00a0',
		// zero width space
		ZWSP: '\u200b',
		// Zero width non-joiner
		ZWNJ: '\u200c',
		// Zero width joiner
		ZWJ: '\u200d',
		// Left-to-right Mark
		LRM: '\u200e',
		// Right-to-left Mark
		RLM: '\u200f'
	};

	// Default keyboard layouts
	$keyboard.builtLayouts = {};
	$keyboard.layouts = {
		'alpha': {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} a b c d e f g h i j [ ] \\',
				'k l m n o p q r s ; \' {enter}',
				'{shift} t u v w x y z , . / {shift}',
				'{accept} {space} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} A B C D E F G H I J { } |',
				'K L M N O P Q R S : " {enter}',
				'{shift} T U V W X Y Z < > ? {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'qwerty': {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w e r t y u i o p [ ] \\',
				'a s d f g h j k l ; \' {enter}',
				'{shift} z x c v b n m , . / {shift}',
				'{accept} {space} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'international': {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w e r t y u i o p [ ] \\',
				'a s d f g h j k l ; \' {enter}',
				'{shift} z x c v b n m , . / {shift}',
				'{accept} {alt} {space} {alt} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W E R T Y U I O P { } |',
				'A S D F G H J K L : " {enter}',
				'{shift} Z X C V B N M < > ? {shift}',
				'{accept} {alt} {space} {alt} {cancel}'
			],
			'alt': [
				'~ \u00a1 \u00b2 \u00b3 \u00a4 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00d7 {bksp}',
				'{tab} \u00e4 \u00e5 \u00e9 \u00ae \u00fe \u00fc \u00fa \u00ed \u00f3 \u00f6 \u00ab \u00bb \u00ac',
				'\u00e1 \u00df \u00f0 f g h j k \u00f8 \u00b6 \u00b4 {enter}',
				'{shift} \u00e6 x \u00a9 v b \u00f1 \u00b5 \u00e7 > \u00bf {shift}',
				'{accept} {alt} {space} {alt} {cancel}'
			],
			'alt-shift': [
				'~ \u00b9 \u00b2 \u00b3 \u00a3 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00f7 {bksp}',
				'{tab} \u00c4 \u00c5 \u00c9 \u00ae \u00de \u00dc \u00da \u00cd \u00d3 \u00d6 \u00ab \u00bb \u00a6',
				'\u00c4 \u00a7 \u00d0 F G H J K \u00d8 \u00b0 \u00a8 {enter}',
				'{shift} \u00c6 X \u00a2 V B \u00d1 \u00b5 \u00c7 . \u00bf {shift}',
				'{accept} {alt} {space} {alt} {cancel}'
			]
		},
		'colemak': {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
				'{tab} q w f p g j l u y ; [ ] \\',
				'{bksp} a r s t d h n e i o \' {enter}',
				'{shift} z x c v b k m , . / {shift}',
				'{accept} {space} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) _ + {bksp}',
				'{tab} Q W F P G J L U Y : { } |',
				'{bksp} A R S T D H N E I O " {enter}',
				'{shift} Z X C V B K M < > ? {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'dvorak': {
			'normal': [
				'` 1 2 3 4 5 6 7 8 9 0 [ ] {bksp}',
				'{tab} \' , . p y f g c r l / = \\',
				'a o e u i d h t n s - {enter}',
				'{shift} ; q j k x b m w v z {shift}',
				'{accept} {space} {cancel}'
			],
			'shift': [
				'~ ! @ # $ % ^ & * ( ) { } {bksp}',
				'{tab} " < > P Y F G C R L ? + |',
				'A O E U I D H T N S _ {enter}',
				'{shift} : Q J K X B M W V Z {shift}',
				'{accept} {space} {cancel}'
			]
		},
		'num': {
			'normal': [
				'= ( ) {b}',
				'{clear} / * -',
				'7 8 9 +',
				'4 5 6 {sign}',
				'1 2 3 %',
				'0 {dec} {a} {c}'
			]
		}
	};

	$keyboard.language = {
		en: {
			display: {
				// check mark - same action as accept
				'a': '\u2714:Accept (Shift+Enter)',
				'accept': 'Accept:Accept (Shift+Enter)',
				// other alternatives \u2311
				'alt': 'Alt:\u2325 AltGr',
				// Left arrow (same as &larr;)
				'b': '\u232b:Backspace',
				'bksp': 'Bksp:Backspace',
				// big X, close - same action as cancel
				'c': '\u2716:Cancel (Esc)',
				'cancel': 'Cancel:Cancel (Esc)',
				// clear num pad
				'clear': 'C:Clear',
				'combo': '\u00f6:Toggle Combo Keys',
				// decimal point for num pad (optional), change '.' to ',' for European format
				'dec': '.:Decimal',
				// down, then left arrow - enter symbol
				'e': '\u23ce:Enter',
				'empty': '\u00a0',
				'enter': 'Enter:Enter \u23ce',
				// left arrow (move caret)
				'left': '\u2190',
				// caps lock
				'lock': 'Lock:\u21ea Caps Lock',
				'next': 'Next \u21e8',
				'prev': '\u21e6 Prev',
				// right arrow (move caret)
				'right': '\u2192',
				// thick hollow up arrow
				's': '\u21e7:Shift',
				'shift': 'Shift:Shift',
				// +/- sign for num pad
				'sign': '\u00b1:Change Sign',
				'space': '\u00a0:Space',
				// right arrow to bar (used since this virtual keyboard works with one directional tabs)
				't': '\u21e5:Tab',
				// \u21b9 is the true tab symbol (left & right arrows)
				'tab': '\u21e5 Tab:Tab',
				// replaced by an image
				'toggle': ' ',

				// added to titles of keys
				// accept key status when acceptValid:true
				'valid': 'valid',
				'invalid': 'invalid',
				// combo key states
				'active': 'active',
				'disabled': 'disabled'
			},

			// Message added to the key title while hovering, if the mousewheel plugin exists
			wheelMessage: 'Use mousewheel to see other keys',

			comboRegex: /([`\'~\^\"ao])([a-z])/mig,
			combos: {
				// grave
				'`': { a: '\u00e0', A: '\u00c0', e: '\u00e8', E: '\u00c8', i: '\u00ec', I: '\u00cc', o: '\u00f2',
						O: '\u00d2', u: '\u00f9', U: '\u00d9', y: '\u1ef3', Y: '\u1ef2' },
				// acute & cedilla
				"'": { a: '\u00e1', A: '\u00c1', e: '\u00e9', E: '\u00c9', i: '\u00ed', I: '\u00cd', o: '\u00f3',
						O: '\u00d3', u: '\u00fa', U: '\u00da', y: '\u00fd', Y: '\u00dd' },
				// umlaut/trema
				'"': { a: '\u00e4', A: '\u00c4', e: '\u00eb', E: '\u00cb', i: '\u00ef', I: '\u00cf', o: '\u00f6',
						O: '\u00d6', u: '\u00fc', U: '\u00dc', y: '\u00ff', Y: '\u0178' },
				// circumflex
				'^': { a: '\u00e2', A: '\u00c2', e: '\u00ea', E: '\u00ca', i: '\u00ee', I: '\u00ce', o: '\u00f4',
						O: '\u00d4', u: '\u00fb', U: '\u00db', y: '\u0177', Y: '\u0176' },
				// tilde
				'~': { a: '\u00e3', A: '\u00c3', e: '\u1ebd', E: '\u1ebc', i: '\u0129', I: '\u0128', o: '\u00f5',
						O: '\u00d5', u: '\u0169', U: '\u0168', y: '\u1ef9', Y: '\u1ef8', n: '\u00f1', N: '\u00d1' }
			}
		}
	};

	$keyboard.defaultOptions = {
		// set this to ISO 639-1 language code to override language set by the layout
		// http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
		// language defaults to 'en' if not found
		language: null,
		rtl: false,

		// *** choose layout & positioning ***
		layout: 'qwerty',
		customLayout: null,

		position: {
			// optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
			of: null,
			my: 'center top',
			at: 'center top',
			// used when 'usePreview' is false (centers the keyboard at the bottom of the input/textarea)
			at2: 'center bottom'
		},

		// allow jQuery position utility to reposition the keyboard on window resize
		reposition: true,

		// preview added above keyboard if true, original input/textarea used if false
		usePreview: true,

		// if true, the keyboard will always be visible
		alwaysOpen: false,

		// give the preview initial focus when the keyboard becomes visible
		initialFocus: true,

		// avoid changing the focus (hardware keyboard probably won't work)
		noFocus: false,

		// if true, keyboard will remain open even if the input loses focus, but closes on escape
		// or when another keyboard opens.
		stayOpen: false,

		// Prevents the keyboard from closing when the user clicks or presses outside the keyboard
		// the `autoAccept` option must also be set to true when this option is true or changes are lost
		userClosed: false,

		// if true, keyboard will not close if you press escape.
		ignoreEsc: false,

		// if true, keyboard will only closed on click event instead of mousedown and touchstart
		closeByClickEvent: false,

		css: {
			// input & preview
			input: 'ui-widget-content ui-corner-all',
			// keyboard container
			container: 'ui-widget-content ui-widget ui-corner-all ui-helper-clearfix',
			// keyboard container extra class (same as container, but separate)
			popup: '',
			// default state
			buttonDefault: 'ui-state-default ui-corner-all',
			// hovered button
			buttonHover: 'ui-state-hover',
			// Action keys (e.g. Accept, Cancel, Tab, etc); this replaces 'actionClass' option
			buttonAction: 'ui-state-active',
			// Active keys (e.g. shift down, meta keyset active, combo keys active)
			buttonActive: 'ui-state-active',
			// used when disabling the decimal button {dec} when a decimal exists in the input area
			buttonDisabled: 'ui-state-disabled',
			buttonEmpty: 'ui-keyboard-empty'
		},

		// *** Useability ***
		// Auto-accept content when clicking outside the keyboard (popup will close)
		autoAccept: false,
		// Auto-accept content even if the user presses escape (only works if `autoAccept` is `true`)
		autoAcceptOnEsc: false,

		// Prevents direct input in the preview window when true
		lockInput: false,

		// Prevent keys not in the displayed keyboard from being typed in
		restrictInput: false,
		// Additional allowed characters while restrictInput is true
		restrictInclude: '', // e.g. 'a b foo \ud83d\ude38'

		// Check input against validate function, if valid the accept button gets a class name of
		// 'ui-keyboard-valid-input'. If invalid, the accept button gets a class name of
		// 'ui-keyboard-invalid-input'
		acceptValid: false,
		// Auto-accept when input is valid; requires `acceptValid` set `true` & validate callback
		autoAcceptOnValid: false,
		// Check validation on keyboard initialization. If false, the "Accept" key state (color)
		// will not change to show if the content is valid, or not
		checkValidOnInit: true,

		// if acceptValid is true & the validate function returns a false, this option will cancel
		// a keyboard close only after the accept button is pressed
		cancelClose: true,

		// tab to go to next, shift-tab for previous (default behavior)
		tabNavigation: false,

		// enter for next input; shift+enter accepts content & goes to next
		// shift + 'enterMod' + enter ('enterMod' is the alt as set below) will accept content and go
		// to previous in a textarea
		enterNavigation: false,
		// mod key options: 'ctrlKey', 'shiftKey', 'altKey', 'metaKey' (MAC only)
		enterMod: 'altKey', // alt-enter to go to previous; shift-alt-enter to accept & go to previous

		// if true, the next button will stop on the last keyboard input/textarea; prev button stops at first
		// if false, the next button will wrap to target the first input/textarea; prev will go to the last
		stopAtEnd: true,

		// Set this to append the keyboard after the input/textarea (appended to the input/textarea parent).
		// This option works best when the input container doesn't have a set width & when the 'tabNavigation'
		// option is true.
		appendLocally: false,
		// When appendLocally is false, the keyboard will be appended to this object
		appendTo: 'body',

		// Wrap all <br>s inside of a contenteditable in a div; without wrapping, the caret
		// position will not be accurate
		wrapBRs: true,

		// If false, the shift key will remain active until the next key is (mouse) clicked on; if true it will
		// stay active until pressed again
		stickyShift: true,

		// Prevent pasting content into the area
		preventPaste: false,

		// caret placed at the end of any text when keyboard becomes visible
		caretToEnd: false,

		// caret stays this many pixels from the edge of the input while scrolling left/right;
		// use "c" or "center" to center the caret while scrolling
		scrollAdjustment: 10,

		// Set the max number of characters allowed in the input, setting it to false disables this option
		maxLength: false,
		// allow inserting characters @ caret when maxLength is set
		maxInsert: true,

		// Mouse repeat delay - when clicking/touching a virtual keyboard key, after this delay the key will
		// start repeating
		repeatDelay: 500,

		// Mouse repeat rate - after the repeatDelay, this is the rate (characters per second) at which the
		// key is repeated Added to simulate holding down a real keyboard key and having it repeat. I haven't
		// calculated the upper limit of this rate, but it is limited to how fast the javascript can process
		// the keys. And for me, in Firefox, it's around 20.
		repeatRate: 20,

		// resets the keyboard to the default keyset when visible
		resetDefault: true,

		// Event (namespaced) on the input to reveal the keyboard. To disable it, just set it to ''.
		openOn: 'focus',

		// enable the keyboard on readonly inputs
		activeOnReadonly: false,

		// Event (namepaced) for when the character is added to the input (clicking on the keyboard)
		keyBinding: 'mousedown touchstart',

		// enable/disable mousewheel functionality
		// enabling still depends on the mousewheel plugin
		useWheel: true,

		// combos (emulate dead keys : http://en.wikipedia.org/wiki/Keyboard_layout#US-International)
		// if user inputs `a the script converts it to à, ^o becomes ô, etc.
		useCombos: true,

		/*
			// *** Methods ***
			// commenting these out to reduce the size of the minified version
			// Callbacks - attach a function to any of these callbacks as desired
			initialized   : function(e, keyboard, el) {},
			beforeVisible : function(e, keyboard, el) {},
			visible       : function(e, keyboard, el) {},
			beforeInsert  : function(e, keyboard, el, textToAdd) { return textToAdd; },
			change        : function(e, keyboard, el) {},
			beforeClose   : function(e, keyboard, el, accepted) {},
			accepted      : function(e, keyboard, el) {},
			canceled      : function(e, keyboard, el) {},
			restricted    : function(e, keyboard, el) {},
			hidden        : function(e, keyboard, el) {},
			// called instead of base.switchInput
			switchInput   : function(keyboard, goToNext, isAccepted) {},
			// used if you want to create a custom layout or modify the built-in keyboard
			create        : function(keyboard) { return keyboard.buildKeyboard(); },

			// build key callback
			buildKey : function( keyboard, data ) {
				/ *
				data = {
				// READ ONLY
				isAction : [boolean] true if key is an action key
				name     : [string]  key class name suffix ( prefix = 'ui-keyboard-' );
														 may include decimal ascii value of character
				value    : [string]  text inserted (non-action keys)
				title    : [string]  title attribute of key
				action   : [string]  keyaction name
				html     : [string]  HTML of the key; it includes a <span> wrapping the text
				// use to modify key HTML
				$key     : [object]  jQuery selector of key which is already appended to keyboard
				}
				* /
				return data;
			},
		*/

		// this callback is called, if the acceptValid is true, and just before the 'beforeClose' to check
		// the value if the value is valid, return true and the keyboard will continue as it should
		// (close if not always open, etc). If the value is not valid, return false and clear the keyboard
		// value ( like this "keyboard.$preview.val('');" ), if desired. The validate function is called after
		// each input, the 'isClosing' value will be false; when the accept button is clicked,
		// 'isClosing' is true
		validate: function (/* keyboard, value, isClosing */) {
			return true;
		}

	};

	// for checking combos
	$keyboard.comboRegex = /([`\'~\^\"ao])([a-z])/mig;

	// store current keyboard element; used by base.isCurrent()
	$keyboard.currentKeyboard = '';

	$('<!--[if lte IE 8]><script>jQuery("body").addClass("oldie");</script><![endif]--><!--[if IE]>' +
			'<script>jQuery("body").addClass("ie");</script><![endif]-->')
		.appendTo('body')
		.remove();
	$keyboard.msie = $('body').hasClass('oldie'); // Old IE flag, used for caret positioning
	$keyboard.allie = $('body').hasClass('ie');

	$keyboard.watermark = (typeof (document.createElement('input').placeholder) !== 'undefined');

	$keyboard.checkCaretSupport = function () {
		if (typeof $keyboard.checkCaret !== 'boolean') {
			// Check if caret position is saved when input is hidden or loses focus
			// (*cough* all versions of IE and I think Opera has/had an issue as well
			var $temp = $('<div style="height:0px;width:0px;overflow:hidden;position:fixed;top:0;left:-100px;">' +
				'<input type="text" value="testing"/></div>').prependTo('body'); // stop page scrolling
			$keyboard.caret($temp.find('input'), 3, 3);
			// Also save caret position of the input if it is locked
			$keyboard.checkCaret = $keyboard.caret($temp.find('input').hide().show()).start !== 3;
			$temp.remove();
		}
		return $keyboard.checkCaret;
	};

	$keyboard.caret = function($el, param1, param2) {
		if (!$el || !$el.length || $el.is(':hidden') || $el.css('visibility') === 'hidden') {
			return {};
		}
		var start, end, txt, pos,
			kb = $el.data( 'keyboard' ),
			noFocus = kb && kb.options.noFocus,
			formEl = /(textarea|input)/i.test($el[0].nodeName);
		if (!noFocus) { $el.focus(); }
		// set caret position
		if (typeof param1 !== 'undefined') {
			// allow setting caret using ( $el, { start: x, end: y } )
			if (typeof param1 === 'object' && 'start' in param1 && 'end' in param1) {
				start = param1.start;
				end = param1.end;
			} else if (typeof param2 === 'undefined') {
				param2 = param1; // set caret using start position
			}
			// set caret using ( $el, start, end );
			if (typeof param1 === 'number' && typeof param2 === 'number') {
				start = param1;
				end = param2;
			} else if ( param1 === 'start' ) {
				start = end = 0;
			} else if ( typeof param1 === 'string' ) {
				// unknown string setting, move caret to end
				start = end = 'end';
			}

			// *** SET CARET POSITION ***
			// modify the line below to adapt to other caret plugins
			return formEl ?
				$el.caret( start, end, noFocus ) :
				$keyboard.setEditableCaret( $el, start, end );
		}
		// *** GET CARET POSITION ***
		// modify the line below to adapt to other caret plugins
		if (formEl) {
			// modify the line below to adapt to other caret plugins
			pos = $el.caret();
		} else {
			// contenteditable
			pos = $keyboard.getEditableCaret($el[0]);
		}
		start = pos.start;
		end = pos.end;

		// *** utilities ***
		txt = formEl && $el[0].value || $el.text() || '';
		return {
			start : start,
			end : end,
			// return selected text
			text : txt.substring( start, end ),
			// return a replace selected string method
			replaceStr : function( str ) {
				return txt.substring( 0, start ) + str + txt.substring( end, txt.length );
			}
		};
	};

	$keyboard.isTextNode = function(el) {
		return el && el.nodeType === 3;
	};

	$keyboard.isBlock = function(el, node) {
		var win = el.ownerDocument.defaultView;
		if (
			node && node.nodeType === 1 && node !== el &&
			win.getComputedStyle(node).display === 'block'
		) {
			return 1;
		}
		return 0;
	};

	// Wrap all BR's inside of contenteditable
	$keyboard.wrapBRs = function(container) {
		var $el = $(container).find('br:not(.' + $keyboard.css.divWrapperCE + ')');
		if ($el.length) {
			$.each($el, function(i, el) {
				var len = el.parentNode.childNodes.length;
				if (
					// wrap BRs if not solo child
					len !== 1 ||
					// Or if BR is wrapped by a span
					len === 1 && !$keyboard.isBlock(container, el.parentNode)
				) {
					$(el).addClass($keyboard.css.divWrapperCE).wrap('<div>');
				}
			});
		}
	};

	$keyboard.getEditableCaret = function(container) {
		container = $(container)[0];
		if (!container.isContentEditable) { return {}; }
		var end, text,
			options = ($(container).data('keyboard') || {}).options,
			doc = container.ownerDocument,
			range = doc.getSelection().getRangeAt(0),
			result = pathToNode(range.startContainer, range.startOffset),
			start = result.position;
		if (options.wrapBRs !== false) {
			$keyboard.wrapBRs(container);
		}
		function pathToNode(endNode, offset) {
			var node, adjust,
				txt = '',
				done = false,
				position = 0,
				nodes = $.makeArray(container.childNodes);

			function checkBlock(val) {
				if (val) {
					position += val;
					txt += options && options.replaceCR || '\n';
				}
			}

			while (!done && nodes.length) {
				node = nodes.shift();
				if (node === endNode) {
					done = true;
				}

				// Add one if previous sibling was a block node (div, p, etc)
				adjust = $keyboard.isBlock(container, node.previousSibling);
				checkBlock(adjust);

				if ($keyboard.isTextNode(node)) {
					position += done ? offset : node.length;
					txt += node.textContent;
					if (done) {
						return {position: position, text: txt};
					}
				} else if (!done && node.childNodes) {
					nodes = $.makeArray(node.childNodes).concat(nodes);
				}
				// Add one if we're inside a block node (div, p, etc)
				// and previous sibling was a text node
				adjust = $keyboard.isTextNode(node.previousSibling) && $keyboard.isBlock(container, node);
				checkBlock(adjust);
			}
			return {position: position, text: txt};
		}
		// check of start and end are the same
		if (range.endContainer === range.startContainer && range.endOffset === range.startOffset) {
			end = start;
			text = '';
		} else {
			result = pathToNode(range.endContainer, range.endOffset);
			end = result.position;
			text = result.text.substring(start, end);
		}
		return {
			start: start,
			end: end,
			text: text
		};
	};

	$keyboard.getEditableLength = function(container) {
		var result = $keyboard.setEditableCaret(container, 'getMax');
		// if not a number, the container is not a contenteditable element
		return typeof result === 'number' ? result : null;
	};

	$keyboard.setEditableCaret = function(container, start, end) {
		container = $(container)[0];
		if (!container.isContentEditable) { return {}; }
		var doc = container.ownerDocument,
			range = doc.createRange(),
			sel = doc.getSelection(),
			options = ($(container).data('keyboard') || {}).options,
			s = start,
			e = end,
			text = '',
			result = findNode(start === 'getMax' ? 'end' : start);
		function findNode(offset) {
			if (offset === 'end') {
				// Set some value > content length; but return max
				offset = container.innerHTML.length;
			} else if (offset < 0) {
				offset = 0;
			}
			var node, check,
				txt = '',
				done = false,
				position = 0,
				last = 0,
				max = 0,
				nodes = $.makeArray(container.childNodes);
			function updateText(val) {
				txt += val ? options && options.replaceCR || '\n' : '';
				return val > 0;
			}
			function checkDone(adj) {
				var val = position + adj;
				last = max;
				max += adj;
				if (offset - val >= 0) {
					position = val;
					return offset - position <= 0;
				}
				return offset - val <= 0;
			}
			while (!done && nodes.length) {
				node = nodes.shift();
				// Add one if the previous sibling was a block node (div, p, etc)
				check = $keyboard.isBlock(container, node.previousSibling);
				if (updateText(check) && checkDone(check)) {
					done = true;
				}
				// Add one if we're inside a block node (div, p, etc)
				check = $keyboard.isTextNode(node.previousSibling) && $keyboard.isBlock(container, node);
				if (updateText(check) && checkDone(check)) {
					done = true;
				}
				if ($keyboard.isTextNode(node)) {
					txt += node.textContent;
					if (checkDone(node.length)) {
						check = offset - position === 0 && position - last >= 1 ? node.length : offset - position;
						return {
							node: node,
							offset: check,
							position: offset,
							text: txt
						};
					}
				} else if (!done && node.childNodes) {
					nodes = $.makeArray(node.childNodes).concat(nodes);
				}
			}
			return nodes.length ?
				{node: node, offset: offset - position, position: offset, text: txt} :
				// Offset is larger than content, return max
				{node: node, offset: node && node.length || 0, position: max, text: txt};
		}
		if (result.node) {
			s = result.position; // Adjust if start > content length
			if (start === 'getMax') {
				return s;
			}
			range.setStart(result.node, result.offset);
			// Only find end if > start and is defined... this allows passing
			// setEditableCaret(el, 'end') or setEditableCaret(el, 10, 'end');
			if (typeof end !== 'undefined' && end !== start) {
				result = findNode(end);
			}
			if (result.node) {
				e = result.position; // Adjust if end > content length
				range.setEnd(result.node, result.offset);
				text = s === e ? '' : result.text.substring(s, e);
			}
			sel.removeAllRanges();
			sel.addRange(range);
		}
		return {
			start: s,
			end: e,
			text: text
		};
	};

	$keyboard.replaceContent = function (el, param) {
		el = $(el)[0];
		var node, i, str,
			type = typeof param,
			caret = $keyboard.getEditableCaret(el).start,
			charIndex = 0,
			nodeStack = [el];
		while ((node = nodeStack.pop())) {
			if ($keyboard.isTextNode(node)) {
				if (type === 'function') {
					if (caret >= charIndex && caret <= charIndex + node.length) {
						node.textContent = param(node.textContent);
					}
				} else if (type === 'string') {
					// maybe not the best method, but it works for simple changes
					str = param.substring(charIndex, charIndex + node.length);
					if (str !== node.textContent) {
						node.textContent = str;
					}
				}
				charIndex += node.length;
			} else if (node && node.childNodes) {
				i = node.childNodes.length;
				while (i--) {
					nodeStack.push(node.childNodes[i]);
				}
			}
		}
		i = $keyboard.getEditableCaret(el);
		$keyboard.setEditableCaret(el, i.start, i.start);
	};

	$.fn.keyboard = function (options) {
		return this.each(function () {
			if (!$(this).data('keyboard')) {
				/*jshint nonew:false */
				(new $.keyboard(this, options));
			}
		});
	};

	$.fn.getkeyboard = function () {
		return this.data('keyboard');
	};

	/* Copyright (c) 2010 C. F., Wong (<a href="http://cloudgen.w0ng.hk">Cloudgen Examplet Store</a>)
	 * Licensed under the MIT License:
	 * http://www.opensource.org/licenses/mit-license.php
	 * Highly modified from the original
	 */

	$.fn.caret = function (start, end, noFocus) {
		if (
			typeof this[0] === 'undefined' ||
			this.is(':hidden') ||
			this.css('visibility') === 'hidden' ||
			!/(INPUT|TEXTAREA)/i.test(this[0].nodeName)
		) {
			return this;
		}
		var selRange, range, stored_range, txt, val,
			$el = this,
			el = $el[0],
			selection = el.ownerDocument.selection,
			sTop = el.scrollTop,
			ss = false,
			supportCaret = true;
		try {
			ss = 'selectionStart' in el;
		} catch (err) {
			supportCaret = false;
		}
		if (supportCaret && typeof start !== 'undefined') {
			if (!/(email|number)/i.test(el.type)) {
				if (ss) {
					el.selectionStart = start;
					el.selectionEnd = end;
				} else {
					selRange = el.createTextRange();
					selRange.collapse(true);
					selRange.moveStart('character', start);
					selRange.moveEnd('character', end - start);
					selRange.select();
				}
			}
			// must be visible or IE8 crashes; IE9 in compatibility mode works fine - issue #56
			if (!noFocus && ($el.is(':visible') || $el.css('visibility') !== 'hidden')) {
				el.focus();
			}
			el.scrollTop = sTop;
			return this;
		}
		if (/(email|number)/i.test(el.type)) {
			// fix suggested by raduanastase (https://github.com/Mottie/Keyboard/issues/105#issuecomment-40456535)
			start = end = $el.val().length;
		} else if (ss) {
			start = el.selectionStart;
			end = el.selectionEnd;
		} else if (selection) {
			if (el.nodeName.toUpperCase() === 'TEXTAREA') {
				val = $el.val();
				range = selection.createRange();
				stored_range = range.duplicate();
				stored_range.moveToElementText(el);
				stored_range.setEndPoint('EndToEnd', range);
				// thanks to the awesome comments in the rangy plugin
				start = stored_range.text.replace(/\r/g, '\n').length;
				end = start + range.text.replace(/\r/g, '\n').length;
			} else {
				val = $el.val().replace(/\r/g, '\n');
				range = selection.createRange().duplicate();
				range.moveEnd('character', val.length);
				start = (range.text === '' ? val.length : val.lastIndexOf(range.text));
				range = selection.createRange().duplicate();
				range.moveStart('character', -val.length);
				end = range.text.length;
			}
		} else {
			// caret positioning not supported
			start = end = (el.value || '').length;
		}
		txt = (el.value || '');
		return {
			start: start,
			end: end,
			text: txt.substring(start, end),
			replace: function (str) {
				return txt.substring(0, start) + str + txt.substring(end, txt.length);
			}
		};
	};

	return $keyboard;

}));


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
               _ _____           _          _     _      
              | |  __ \         (_)        | |   | |     
      ___ ___ | | |__) |___  ___ _ ______ _| |__ | | ___ 
     / __/ _ \| |  _  // _ \/ __| |_  / _` | '_ \| |/ _ \
    | (_| (_) | | | \ \  __/\__ \ |/ / (_| | |_) | |  __/
     \___\___/|_|_|  \_\___||___/_/___\__,_|_.__/|_|\___|
	 
	v1.7 - jQuery plugin created by Alvaro Prieto Lauroba
	
	Licences: MIT & GPL
	Feel free to use or modify this plugin as far as my full name is kept	
*/

(function($){ 	
	
	//IE8 Polyfill
	if(!Array.indexOf) { Array.prototype.indexOf = function(obj) { for(var i=0; i<this.length;i++){if(this[i]==obj){return i;}} return -1; }}
	
	var d = $(document); 		//window object
	var h = $("head");			//head object
	var drag = null;			//reference to the current grip that is being dragged
	var tables = {};			//object of the already processed tables (table.id as key)
	var	count = 0;				//internal count to create unique IDs when needed.	
	
	//common strings for packing
	var ID = "id";	
	var PX = "px";
	var SIGNATURE ="JColResizer";
    var FLEX = "JCLRFlex";
	
	//short-cuts
	var I = parseInt;
	var M = Math;
	var ie = navigator.userAgent.indexOf('Trident/4.0')>0;
	var S;
    var pad = ""
	try{S = sessionStorage;}catch(e){}	//Firefox crashes when executed as local file system
    
	
	//append required CSS rules  
    h.append("<style type='text/css'>  .JColResizer{table-layout:fixed;} .JColResizer > tbody > tr > td, .JColResizer > tbody > tr > th{overflow:hidden}  .JPadding > tbody > tr > td, .JPadding > tbody > tr > th{padding-left:0!important; padding-right:0!important;} .JCLRgrips{ height:0px; position:relative;} .JCLRgrip{margin-left:-5px; position:absolute; z-index:5; } .JCLRgrip .JColResizer{position:absolute;background-color:red;filter:alpha(opacity=1);opacity:0;width:10px;height:100%;cursor: col-resize;top:0px} .JCLRLastGrip{position:absolute; width:1px; } .JCLRgripDrag{ border-left:1px dotted black;	} .JCLRFlex{width:auto!important;} .JCLRgrip.JCLRdisabledGrip .JColResizer{cursor:default; display:none;}</style>");

	
	/**
	 * Function to allow column resizing for table objects. It is the starting point to apply the plugin.
	 * @param {DOM node} tb - reference to the DOM table object to be enhanced
	 * @param {Object} options	- some customization values
	 */
	var init = function( tb, options){	
		var t = $(tb);				    //the table object is wrapped
        t.opt = options;                //each table has its own options available at anytime
        t.mode = options.resizeMode;    //shortcuts
        t.dc = t.opt.disabledColumns;
        if(t.opt.removePadding) t.addClass("JPadding");
		if(t.opt.disable) return destroy(t);				//the user is asking to destroy a previously colResized table
		var	id = t.id = t.attr(ID) || SIGNATURE+count++;	//its id is obtained, if null new one is generated		
		t.p = t.opt.postbackSafe; 							//short-cut to detect postback safe 		
		if(!t.is("table") || tables[id] && !t.opt.partialRefresh) return; 		//if the object is not a table or if it was already processed then it is ignored.
		if (t.opt.hoverCursor !== 'col-resize') h.append("<style type='text/css'>.JCLRgrip .JColResizer:hover{cursor:"+ t.opt.hoverCursor +"!important}</style>");  //if hoverCursor has been set, append the style
        t.addClass(SIGNATURE).attr(ID, id).before('<div class="JCLRgrips"/>');	//the grips container object is added. Signature class forces table rendering in fixed-layout mode to prevent column's min-width
		t.g = []; t.c = []; t.w = t.width(); t.gc = t.prev(); t.f=t.opt.fixed;	//t.c and t.g are arrays of columns and grips respectively				
		if(options.marginLeft) t.gc.css("marginLeft", options.marginLeft);  	//if the table contains margins, it must be specified
		if(options.marginRight) t.gc.css("marginRight", options.marginRight);  	//since there is no (direct) way to obtain margin values in its original units (%, em, ...)
		t.cs = I(ie? tb.cellSpacing || tb.currentStyle.borderSpacing :t.css('border-spacing'))||2;	//table cellspacing (not even jQuery is fully cross-browser)
		t.b  = I(ie? tb.border || tb.currentStyle.borderLeftWidth :t.css('border-left-width'))||1;	//outer border width (again cross-browser issues)
		// if(!(tb.style.width || tb.width)) t.width(t.width()); //I am not an IE fan at all, but it is a pity that only IE has the currentStyle attribute working as expected. For this reason I can not check easily if the table has an explicit width or if it is rendered as "auto"
		tables[id] = t; 	//the table object is stored using its id as key	
		createGrips(t);		//grips are created 
	
	};


	/**
	 * This function allows to remove any enhancements performed by this plugin on a previously processed table.
	 * @param {jQuery ref} t - table object
	 */
	var destroy = function(t){
		var id=t.attr(ID), t=tables[id];		//its table object is found
		if(!t||!t.is("table")) return;			//if none, then it wasn't processed	 
		t.removeClass(SIGNATURE+" "+FLEX).gc.remove();	//class and grips are removed
		delete tables[id];						//clean up data
	};


	/**
	 * Function to create all the grips associated with the table given by parameters 
	 * @param {jQuery ref} t - table object
	 */
	var createGrips = function(t){	
	
        var th = t.find(">thead>tr:first>th,>thead>tr:first>td"); //table headers are obtained
		if(!th.length) th = t.find(">tbody>tr:first>th,>tr:first>th,>tbody>tr:first>td, >tr:first>td");	 //but headers can also be included in different ways
		th = th.filter(":visible");					//filter invisible columns
		t.cg = t.find("col"); 						//a table can also contain a colgroup with col elements		
		t.ln = th.length;							//table length is stored	
		if(t.p && S && S[t.id])memento(t,th);		//if 'postbackSafe' is enabled and there is data for the current table, its coloumn layout is restored
		th.each(function(i){						//iterate through the table column headers			
			var c = $(this); 						//jquery wrap for the current column		
            var dc = t.dc.indexOf(i)!=-1;           //is this a disabled column?
			var g = $(t.gc.append('<div class="JCLRgrip"></div>')[0].lastChild); //add the visual node to be used as grip
            g.append(dc ? "": t.opt.gripInnerHtml).append('<div class="'+SIGNATURE+'"></div>');
            if(i == t.ln-1){                        //if the current grip is the las one 
                g.addClass("JCLRLastGrip");         //add a different css class to stlye it in a different way if needed
                if(t.f) g.html("");                 //if the table resizing mode is set to fixed, the last grip is removed since table with can not change
            }
            g.bind('touchstart mousedown', onGripMouseDown); //bind the mousedown event to start dragging 
            
            if (!dc){ 
                //if normal column bind the mousedown event to start dragging, if disabled then apply its css class
                g.removeClass('JCLRdisabledGrip').bind('touchstart mousedown', onGripMouseDown);      
            }else{
                g.addClass('JCLRdisabledGrip'); 
            }

			g.t = t; g.i = i; g.c = c;	c.w =c.width();		//some values are stored in the grip's node data as shortcut
			t.g.push(g); t.c.push(c);						//the current grip and column are added to its table object
			c.width(c.w).removeAttr("width");				//the width of the column is converted into pixel-based measurements
			g.data(SIGNATURE, {i:i, t:t.attr(ID), last: i == t.ln-1});	 //grip index and its table name are stored in the HTML 												
		}); 	
		t.cg.removeAttr("width");	//remove the width attribute from elements in the colgroup 

		t.find('td, th').not(th).not('table th, table td').each(function(){  
			$(this).removeAttr('width');	//the width attribute is removed from all table cells which are not nested in other tables and dont belong to the header
		});		
        if(!t.f){
            t.removeAttr('width').addClass(FLEX); //if not fixed, let the table grow as needed
        }
        syncGrips(t); 				//the grips are positioned according to the current table layout			
        //there is a small problem, some cells in the table could contain dimension values interfering with the 
        //width value set by this plugin. Those values are removed
		
	};
	
    
	/**
	 * Function to allow the persistence of columns dimensions after a browser postback. It is based in
	 * the HTML5 sessionStorage object, which can be emulated for older browsers using sessionstorage.js
	 * @param {jQuery ref} t - table object
	 * @param {jQuery ref} th - reference to the first row elements (only set in deserialization)
	 */
	var memento = function(t, th){ 
		var w,m=0,i=0,aux =[],tw;
		if(th){										//in deserialization mode (after a postback)
			t.cg.removeAttr("width");
			if(t.opt.flush){ S[t.id] =""; return;} 	//if flush is activated, stored data is removed
			w = S[t.id].split(";");					//column widths is obtained
			tw = w[t.ln+1];
            if(!t.f && tw){							//if not fixed and table width data available its size is restored
                t.width(tw*=1);
                if(t.opt.overflow) {				//if overfolw flag is set, restore table width also as table min-width
                    t.css('min-width', tw + PX);
                    t.w = tw;
                }
            }
			for(;i<t.ln;i++){						//for each column
				aux.push(100*w[i]/w[t.ln]+"%"); 	//width is stored in an array since it will be required again a couple of lines ahead
				th.eq(i).css("width", aux[i] ); 	//each column width in % is restored
			}			
			for(i=0;i<t.ln;i++)
				t.cg.eq(i).css("width", aux[i]);	//this code is required in order to create an inline CSS rule with higher precedence than an existing CSS class in the "col" elements
		}else{							//in serialization mode (after resizing a column)
			S[t.id] ="";				//clean up previous data
			for(;i < t.c.length; i++){	//iterate through columns
				w = t.c[i].width();		//width is obtained
				S[t.id] += w+";";		//width is appended to the sessionStorage object using ID as key
				m+=w;					//carriage is updated to obtain the full size used by columns
			}
			S[t.id]+=m;							//the last item of the serialized string is the table's active area (width), 
												//to be able to obtain % width value of each columns while deserializing
			if(!t.f) S[t.id] += ";"+t.width(); 	//if not fixed, table width is stored
		}	
	};
	
	
	/**
	 * Function that places each grip in the correct position according to the current table layout	 
	 * @param {jQuery ref} t - table object
	 */
	var syncGrips = function (t){	
		t.gc.width(t.w);			//the grip's container width is updated				
		for(var i=0; i<t.ln; i++){	//for each column
			var c = t.c[i]; 			
			t.g[i].css({			//height and position of the grip is updated according to the table layout
				left: c.offset().left - t.offset().left + c.outerWidth(false) + t.cs / 2 + PX,
				height: t.opt.headerOnly? t.c[0].outerHeight(false) : t.outerHeight(false)				
			});			
		} 	
	};
	
	
	
	/**
	* This function updates column's width according to the horizontal position increment of the grip being
	* dragged. The function can be called while dragging if liveDragging is enabled and also from the onGripDragOver
	* event handler to synchronize grip's position with their related columns.
	* @param {jQuery ref} t - table object
	* @param {number} i - index of the grip being dragged
	* @param {bool} isOver - to identify when the function is being called from the onGripDragOver event	
	*/
	var syncCols = function(t,i,isOver){
		var inc = drag.x-drag.l, c = t.c[i], c2 = t.c[i+1]; 			
		var w = c.w + inc;	var w2= c2.w- inc;	//their new width is obtained					
		c.width( w + PX);			
		t.cg.eq(i).width( w + PX); 
        if(t.f){ //if fixed mode
            c2.width(w2 + PX);
            t.cg.eq(i+1).width( w2 + PX);
        }else if(t.opt.overflow) {				//if overflow is set, incriment min-width to force overflow
            t.css('min-width', t.w + inc);
        }
		if(isOver){
            c.w=w; 
            c2.w= t.f ? w2 : c2.w;
        }
	};

	
	/**
	* This function updates all columns width according to its real width. It must be taken into account that the 
	* sum of all columns can exceed the table width in some cases (if fixed is set to false and table has some kind 
	* of max-width).
	* @param {jQuery ref} t - table object	
	*/
	var applyBounds = function(t){
        var w = $.map(t.c, function(c){			//obtain real widths
            return c.width();
        });
        t.width(t.w = t.width()).removeClass(FLEX);	//prevent table width changes
        $.each(t.c, function(i,c){
            c.width(w[i]).w = w[i];				//set column widths applying bounds (table's max-width)
        });
		t.addClass(FLEX);						//allow table width changes
	};
	
	
	/**
	 * Event handler used while dragging a grip. It checks if the next grip's position is valid and updates it. 
	 * @param {event} e - mousemove event binded to the window object
	 */
	var onGripDrag = function(e){	
		if(!drag) return; 
        var t = drag.t;		//table object reference 
        var oe = e.originalEvent.touches;
        var ox = oe ? oe[0].pageX : e.pageX;    //original position (touch or mouse)
        var x =  ox - drag.ox + drag.l;	        //next position according to horizontal mouse position increment
		var mw = t.opt.minWidth, i = drag.i ;	//cell's min width
		var l = t.cs*1.5 + mw + t.b;
        var last = i == t.ln-1;                 			//check if it is the last column's grip (usually hidden)
        var min = i? t.g[i-1].position().left+t.cs+mw: l;	//min position according to the contiguous cells
		var max = t.f ? 	//fixed mode?
			i == t.ln-1? 
				t.w-l: 
				t.g[i+1].position().left-t.cs-mw:
			Infinity; 								//max position according to the contiguous cells 
		x = M.max(min, M.min(max, x));				//apply bounding		
		drag.x = x;	 drag.css("left",  x + PX); 	//apply position increment	
        if(last){									//if it is the last grip
            var c = t.c[drag.i];					//width of the last column is obtained
			drag.w = c.w + x- drag.l;         
        }              
		if(t.opt.liveDrag){ 			//if liveDrag is enabled
			if(last){
			    c.width(drag.w);
                if(!t.f && t.opt.overflow){			//if overflow is set, incriment min-width to force overflow
                   t.css('min-width', t.w + x - drag.l);
                }else {
                    t.w = t.width();
                }
			}else{
				syncCols(t,i); 			//columns are synchronized
			}
			syncGrips(t);
			var cb = t.opt.onDrag;							//check if there is an onDrag callback
			if (cb) { e.currentTarget = t[0]; cb(e); }		//if any, it is fired			
		}
		return false; 	//prevent text selection while dragging				
	};
	

	/**
	 * Event handler fired when the dragging is over, updating table layout
     * @param {event} e - grip's drag over event
	 */
	var onGripDragOver = function(e){	
		
		d.unbind('touchend.'+SIGNATURE+' mouseup.'+SIGNATURE).unbind('touchmove.'+SIGNATURE+' mousemove.'+SIGNATURE);
		$("head :last-child").remove(); 				//remove the dragging cursor style	
		if(!drag) return;
		drag.removeClass(drag.t.opt.draggingClass);		//remove the grip's dragging css-class
        if (!(drag.x - drag.l == 0)) {
            var t = drag.t;
            var cb = t.opt.onResize; 	    //get some values	
            var i = drag.i;                 //column index
            var last = i == t.ln-1;         //check if it is the last column's grip (usually hidden)
            var c = t.g[i].c;               //the column being dragged
            if(last){
                c.width(drag.w);
                c.w = drag.w;
            }else{
                syncCols(t, i, true);	//the columns are updated
            }
            if(!t.f) applyBounds(t);	//if not fixed mode, then apply bounds to obtain real width values
            syncGrips(t);				//the grips are updated
            if (cb) { e.currentTarget = t[0]; cb(e); }	//if there is a callback function, it is fired
            if(t.p && S) memento(t); 	//if postbackSafe is enabled and there is sessionStorage support, the new layout is serialized and stored
        }
		drag = null;   //since the grip's dragging is over									
	};	
	
	
	/**
	 * Event handler fired when the grip's dragging is about to start. Its main goal is to set up events 
	 * and store some values used while dragging.
     * @param {event} e - grip's mousedown event
	 */
	var onGripMouseDown = function(e){
		var o = $(this).data(SIGNATURE);			//retrieve grip's data
		var t = tables[o.t],  g = t.g[o.i];			//shortcuts for the table and grip objects
        var oe = e.originalEvent.touches;           //touch or mouse event?
        g.ox = oe? oe[0].pageX: e.pageX;            //the initial position is kept
		g.l = g.position().left;
        g.x = g.l;
        
		d.bind('touchmove.'+SIGNATURE+' mousemove.'+SIGNATURE, onGripDrag ).bind('touchend.'+SIGNATURE+' mouseup.'+SIGNATURE, onGripDragOver);	//mousemove and mouseup events are bound
		h.append("<style type='text/css'>*{cursor:"+ t.opt.dragCursor +"!important}</style>"); 	//change the mouse cursor
		g.addClass(t.opt.draggingClass); 	//add the dragging class (to allow some visual feedback)				
		drag = g;							//the current grip is stored as the current dragging object
		if(t.c[o.i].l) for(var i=0,c; i<t.ln; i++){ c=t.c[i]; c.l = false; c.w= c.width(); } 	//if the colum is locked (after browser resize), then c.w must be updated		
		return false; 	//prevent text selection
	};
    
    
	/**
	 * Event handler fired when the browser is resized. The main purpose of this function is to update
	 * table layout according to the browser's size synchronizing related grips 
	 */
	var onResize = function(){
		for(var t in tables){
            if( tables.hasOwnProperty( t ) ) {
                t = tables[t];
                var i, mw=0;
                t.removeClass(SIGNATURE);   //firefox doesn't like layout-fixed in some cases
                if (t.f) {                  //in fixed mode
                    t.w = t.width();        //its new width is kept
                    for(i=0; i<t.ln; i++) mw+= t.c[i].w;		
                    //cell rendering is not as trivial as it might seem, and it is slightly different for
                    //each browser. In the beginning i had a big switch for each browser, but since the code
                    //was extremely ugly now I use a different approach with several re-flows. This works 
                    //pretty well but it's a bit slower. For now, lets keep things simple...   
                    for(i=0; i<t.ln; i++) t.c[i].css("width", M.round(1000*t.c[i].w/mw)/10 + "%").l=true; 
                    //c.l locks the column, telling us that its c.w is outdated									
                }else{     //in non fixed-sized tables
                    applyBounds(t);         //apply the new bounds 
                    if(t.mode == 'flex' && t.p && S){   //if postbackSafe is enabled and there is sessionStorage support,
                        memento(t);                     //the new layout is serialized and stored for 'flex' tables
                    }
                }
                syncGrips(t.addClass(SIGNATURE));
            }
		} 
		
	};		


	//bind resize event, to update grips position 
	$(window).bind('resize.'+SIGNATURE, onResize); 


	/**
	 * The plugin is added to the jQuery library
	 * @param {Object} options -  an object that holds some basic customization values 
	 */
    $.fn.extend({  
        colResizable: function(options) {           
            var defaults = {
			
				//attributes:
                
                resizeMode: 'fit',                    //mode can be 'fit', 'flex' or 'overflow'
                draggingClass: 'JCLRgripDrag',	//css-class used when a grip is being dragged (for visual feedback purposes)
				gripInnerHtml: '',				//if it is required to use a custom grip it can be done using some custom HTML				
				liveDrag: false,				//enables table-layout updating while dragging	
				minWidth: 15, 					//minimum width value in pixels allowed for a column 
				headerOnly: false,				//specifies that the size of the the column resizing anchors will be bounded to the size of the first row 
				hoverCursor: "col-resize",  		//cursor to be used on grip hover
				dragCursor: "col-resize",  		//cursor to be used while dragging
				postbackSafe: false, 			//when it is enabled, table layout can persist after postback or page refresh. It requires browsers with sessionStorage support (it can be emulated with sessionStorage.js). 
				flush: false, 					//when postbakSafe is enabled, and it is required to prevent layout restoration after postback, 'flush' will remove its associated layout data 
				marginLeft: null,				//in case the table contains any margins, colResizable needs to know the values used, e.g. "10%", "15em", "5px" ...
				marginRight: null, 				//in case the table contains any margins, colResizable needs to know the values used, e.g. "10%", "15em", "5px" ...
				disable: false,					//disables all the enhancements performed in a previously colResized table	
				partialRefresh: false,			//can be used in combination with postbackSafe when the table is inside of an updatePanel,
                disabledColumns: [],            //column indexes to be excluded
                removePadding: true,           //for some uses (such as multiple range slider), it is advised to set this modifier to true, it will remove padding from the header cells.

				//events:
				onDrag: null, 					//callback function to be fired during the column resizing process if liveDrag is enabled
				onResize: null					//callback function fired when the dragging process is over
            }			
			var options =  $.extend(defaults, options);		
            
            //since now there are 3 different ways of resizing columns, I changed the external interface to make it clear
            //calling it 'resizeMode' but also to remove the "fixed" attribute which was confusing for many people
            options.fixed = true;
            options.overflow = false;
            switch(options.resizeMode){
                case 'flex': options.fixed = false; break;
                case 'overflow': options.fixed = false; options.overflow = true; break;
            }

            return this.each(function() {				
             	init( this, options);             
            });
        }
    });
})(jQuery);



/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(8);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(1)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Imports
var getUrl = __webpack_require__(9);
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(10));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(11));
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(12));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(13));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(14));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(15));
var ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(16));
var ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(17));
var ___CSS_LOADER_URL___8___ = getUrl(__webpack_require__(18));
var ___CSS_LOADER_URL___9___ = getUrl(__webpack_require__(19));
var ___CSS_LOADER_URL___10___ = getUrl(__webpack_require__(20));
// Module
exports.push([module.i, "/* cyrillic-ext */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(" + ___CSS_LOADER_URL___0___ + ") format('truetype');\r\n    unicode-range: U+0000-007F;\r\n}\r\n\r\n#secukit-wrapper {\r\n    --blue: #007bff;\r\n    --indigo: #6610f2;\r\n    --purple: #6f42c1;\r\n    --pink: #e83e8c;\r\n    --red: #dc3545;\r\n    --orange: #fd7e14;\r\n    --yellow: #ffc107;\r\n    --green: #28a745;\r\n    --teal: #20c997;\r\n    --cyan: #17a2b8;\r\n    --white: #fff;\r\n    --gray: #6c757d;\r\n    --gray-dark: #343a40;\r\n    --primary: #007bff;\r\n    --secondary: #6c757d;\r\n    --success: #28a745;\r\n    --info: #17a2b8;\r\n    --warning: #ffc107;\r\n    --danger: #dc3545;\r\n    --light: #f8f9fa;\r\n    --dark: #343a40;\r\n    --breakpoint-xs: 0;\r\n    --breakpoint-sm: 576px;\r\n    --breakpoint-md: 768px;\r\n    --breakpoint-lg: 992px;\r\n    --breakpoint-xl: 1200px;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 12px;\r\n    line-height: 1;\r\n    color: black;\r\n    z-index: 9998;\r\n    font-family: 'Roboto', sans-serif;\r\n    letter-spacing: 0px;\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n#secukit-wrapper *,\r\n#secukit-wrapper *::before,\r\n#secukit-wrapper *::after {\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n#secukit-wrapper hr {\r\n    box-sizing: content-box;\r\n    height: 0;\r\n    overflow: visible;\r\n    visibility: visible;\r\n    width: inherit;\r\n    height: 0;\r\n}\r\n\r\n#secukit-wrapper h1,\r\n#secukit-wrapper h2,\r\n#secukit-wrapper h3,\r\n#secukit-wrapper h4,\r\n#secukit-wrapper h5,\r\n#secukit-wrapper h6 {\r\n    font-weight: 500;\r\n    margin-top: 0;\r\n    margin-bottom: 0.83em;\r\n}\r\n\r\n#secukit-wrapper p {\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n#secukit-wrapper a:hover {\r\n    color: #0056b3 !important;\r\n    text-decoration: none;\r\n}\r\n\r\n#secukit-wrapper a:not([href]):not([tabindex]) {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n#secukit-wrapper a:not([href]):not([tabindex]):hover,\r\na:not([href]):not([tabindex]):focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n#secukit-wrapper a:not([href]):not([tabindex]):focus {\r\n    outline: 0;\r\n}\r\n\r\n#secukit-wrapper table {\r\n    border-collapse: collapse;\r\n}\r\n\r\n#secukit-wrapper th {\r\n    text-align: inherit-center;\r\n}\r\n\r\n#secukit-wrapper label {\r\n    display: inline-block;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#secukit-wrapper button:focus {\r\n    outline: 1px dotted;\r\n    outline: 5px auto -webkit-focus-ring-color;\r\n}\r\n\r\n#secukit-wrapper input,\r\n#secukit-wrapper button,\r\n#secukit-wrapper select,\r\n#secukit-wrapper optgroup,\r\n#secukit-wrapper textarea {\r\n    margin: 0;\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n    line-height: inherit;\r\n}\r\n\r\n#secukit-wrapper button,\r\n#secukit-wrapper input {\r\n    overflow: visible;\r\n}\r\n\r\n#secukit-wrapper button,\r\n#secukit-wrapper select {\r\n    text-transform: none;\r\n}\r\n\r\n#secukit-wrapper select {\r\n    word-wrap: normal;\r\n}\r\n\r\n#secukit-wrapper button,\r\n[type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n    -webkit-appearance: button;\r\n}\r\n\r\n#secukit-wrapper button:not(:disabled),\r\n[type=\"button\"]:not(:disabled),\r\n[type=\"reset\"]:not(:disabled),\r\n[type=\"submit\"]:not(:disabled) {\r\n    cursor: pointer;\r\n}\r\n\r\n#secukit-wrapper button::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n    padding: 0;\r\n    border-style: none;\r\n}\r\n\r\n.secukit-dialog {\r\n    position: fixed;\r\n    top: 40%;\r\n    left: 50%;\r\n    z-index: 9999;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    margin-top: -280px;\r\n    margin-right: -15px;\r\n    margin-left: -230px;\r\n}\r\n\r\n\r\n/* Select Certificate */\r\n\r\n.secukit-dialog .select-certificate-wrapper {\r\n    width: 460px;\r\n    height: 560px;\r\n    background-color: #F7F7F8;\r\n    border-radius: 4px;\r\n    box-shadow: 0 0 1px #111111;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .select-certificate-header {\r\n    height: 50px;\r\n    background-color: #266ab7;\r\n    border-top-left-radius: 4px;\r\n    border-top-right-radius: 4px;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .select-certificate-header h1 {\r\n    padding-top: 17px;\r\n    padding-left: 40px;\r\n    font-weight: 500 !important;\r\n    margin-top: 0;\r\n    font-size: 16px;\r\n    color: white;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .banner-wrapper {\r\n    height: 100px;\r\n    margin-bottom: 36px;\r\n    background-color: #333333;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper {\r\n    padding: 0 40px;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .kica-button {\r\n    background-color: white;\r\n    border: 1px solid #406BB2;\r\n    padding: 7px 9px 7px 3px;\r\n    border-radius: 4px;\r\n    float: right;\r\n    text-decoration: blink;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .kica-button i {\r\n    display: inline-block;\r\n    background-size: cover;\r\n    vertical-align: middle;\r\n    margin: 0 6px;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .kica-button span {\r\n    line-height: 20px;\r\n    vertical-align: middle;\r\n    letter-spacing: -0.25px;\r\n    color: #222222;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper h2 {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n    letter-spacing: -0.25px;\r\n    color: #333333;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list-label {\r\n    padding-top: 28px;\r\n    letter-spacing: -0.4px;\r\n    margin-top: 11.620px;\r\n    margin-bottom: 11.620px;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .cert-password-label {\r\n    margin-top: 68px !important;\r\n    letter-spacing: -0.25px;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list {\r\n    border: 1px solid #406BB2;\r\n    border-radius: 2px;\r\n    height: 100px;\r\n    overflow-y: auto;\r\n    background: #fff;\r\n    width: 100%;\r\n    margin-bottom: 11px;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list table {\r\n    table-layout: fixed;\r\n    width: 100%;\r\n    border-width: 0;\r\n    border-spacing: 0;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list table th {\r\n    background: #fff;\r\n    border-bottom: 1px solid #406BB2;\r\n    border-left: 1px solid #406BB2;\r\n    height: 24px;\r\n    padding: 0 5px;\r\n    text-align: center;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list table th span {\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list table th:first-child {\r\n    border-left: none;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list table td {\r\n    background: #fff;\r\n    height: 24px;\r\n    padding: 0 5px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list table td span {\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    margin: 0;\r\n    width: 100%;\r\n    padding-bottom: 1px;\r\n    white-space: nowrap;\r\n    -o-text-overflow: ellipsis;\r\n    -ms-text-overflow: ellipsis;\r\n    text-overflow: ellipsis;\r\n    word-wrap: normal;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list table td i {\r\n    vertical-align: middle;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list table tr[class=\"active\"] td {\r\n    background-color: #406BB2;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list table tr[class=\"active\"] td span {\r\n    color: white;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .input-password-form .cert-qlalfqjsgh {\r\n    width: 100%;\r\n    background-color: white;\r\n    padding-bottom: 4px;\r\n    padding-left: 7px;\r\n    border: 1px solid #b0b0b0;\r\n    border-color: #406BB2;\r\n    padding: 0 5px;\r\n    height: 30px;\r\n    line-height: 1.2;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .input-password-form .cert-qlalfqjsgh:disabled {\r\n    background-color: #e9ecef;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .input-password-form .cert-qlalfqjsgh:disabled::placeholder {\r\n    color: dimgray;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .content-wrapper .input-password-form .cert-qlalfqjsgh::placeholder {\r\n    color: lightgrey;\r\n    padding-left: 10px;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .button-wrapper {\r\n    text-align: center;\r\n    padding-top: 5px;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper button {\r\n    border-radius: 3px;\r\n    border: none;\r\n    height: 28px;\r\n    color: #fff;\r\n    width: 83px !important;\r\n    margin: 10px 6.5px 5px 10px !important;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .confirm-button {\r\n    background-color: #266ab7 !important;\r\n    margin-right: 5px !important;\r\n}\r\n\r\n.secukit-dialog .select-certificate-wrapper .cancel-button {\r\n    background-color: #F7F7F8 !important;\r\n    border: solid 1px #266ab7 !important;\r\n    color: #000 !important;\r\n    margin-left: 5px !important;\r\n}\r\n\r\n\r\n/* End Select Certificate */\r\n\r\n\r\n/* Browser Certificate Guide */\r\n\r\n.secukit-dialog .browser-guide-wrapper {\r\n    height: 560px;\r\n    width: 337px;\r\n    background-color: white;\r\n    box-shadow: 0 0 0.45px #444040;\r\n    border-radius: 4px;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-header {\r\n    height: 135px;\r\n    background-color: #266ab7;\r\n    padding: 0 30px;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-header .close {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    float: none;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-header .close a {\r\n    margin: 14px 0 7px auto;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-header h1 {\r\n    text-align: center;\r\n    letter-spacing: -1px;\r\n    font-size: 19px;\r\n    font-weight: 400 !important;\r\n    width: 100%;\r\n    color: #F2FFED;\r\n    margin-bottom: 18px !important;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-header .text {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-header .text h2 {\r\n    margin: 0;\r\n    text-align: left;\r\n    font-weight: 400 !important;\r\n    font-size: 12px;\r\n    margin-top: 2px !important;\r\n    width: 212px;\r\n    line-height: 15px;\r\n    color: white;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-contents {\r\n    padding: 0 30px;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-contents hr {\r\n    margin: 25px -25px 15px -25px;\r\n    border: 0;\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-contents h2 {\r\n    text-align: left;\r\n    font-weight: bold;\r\n    font-size: 13px;\r\n    letter-spacing: -0.25px;\r\n    line-height: 19px;\r\n    width: 100%;\r\n    color: #333333;\r\n    display: block;\r\n    margin: 11px 0 !important;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-contents .browser-guide-steps-wrapper {\r\n    padding: 0;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-contents .browser-guide-steps-wrapper .step-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    margin-bottom: 2px\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-contents .browser-guide-steps-wrapper .step-wrapper .step-number {\r\n    display: inline-block;\r\n    border-radius: 0.35rem;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: baseline;\r\n    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\r\n    background-color: #406BB2;\r\n    color: white;\r\n    font-size: 7px;\r\n    width: 12px;\r\n    height: 12px;\r\n    margin: 3px 13px 0 0;\r\n    padding-top: 1.7px;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-contents .browser-guide-steps-wrapper .step-wrapper .step-text {\r\n    font-size: 11px;\r\n    line-height: 17px;\r\n    width: 252px;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-contents .browser-guide-steps-wrapper .step-wrapper .step-text.sub {\r\n    margin: 6px 0 0 26px;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-contents .browser-guide-steps-wrapper .step-wrapper .step-text.w-100 {\r\n    font-weight: 100;\r\n    width: 100%;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-contents .detail-guide-wrapper {\r\n    margin-top: 9px;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-contents .detail-guide-wrapper a {\r\n    text-decoration: blink;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-contents .detail-guide-wrapper .open-detail-guide-wrapper .badge {\r\n    display: inline-block;\r\n    border-radius: 0.35rem;\r\n    font-weight: 600;\r\n    line-height: 1;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: baseline;\r\n    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\r\n    background-color: #bcbec0;\r\n    color: white;\r\n    font-size: 8px;\r\n    width: 12px;\r\n    height: 12px;\r\n    margin: 3px 13px 0 0;\r\n    padding-top: 1.7px;\r\n    padding-left: 1.1px;\r\n}\r\n\r\n.secukit-dialog .browser-guide-wrapper .browser-guide-contents .detail-guide-wrapper .open-detail-guide-wrapper .text {\r\n    color: #406BB2;\r\n    font-size: 11px;\r\n    font-weight: 600;\r\n}\r\n\r\n.webnpki-wrapper .pfx-password-wrapper {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    margin-left: -138px;\r\n    margin-top: -238px;\r\n    z-index: 12001;\r\n    width: 267px;\r\n    height: 235px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    background-color: white;\r\n    opacity: 1;\r\n    border: 1px solid #d3d3d3;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 5px rgba(12, 11, 11, 0.25);\r\n}\r\n\r\n.webnpki-wrapper .pfx-password-wrapper .pfx-password-header {\r\n    margin-top: 25px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.webnpki-wrapper .pfx-password-wrapper .pfx-password-header span {\r\n    display: inline-block;\r\n    width: 100%;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\n.webnpki-wrapper .pfx-password-wrapper .pfx-password-body {\r\n    background: #f3f6fa;\r\n    border: 1px solid #e2e2e2;\r\n    padding: 12px 12px;\r\n}\r\n\r\n.webnpki-wrapper .pfx-password-wrapper .pfx-password-body span {\r\n    display: inline-block;\r\n    width: 100%;\r\n    font-size: 13px;\r\n    letter-spacing: -0.25px;\r\n    text-align: center;\r\n}\r\n\r\n.webnpki-wrapper .pfx-password-wrapper .pfx-password-body .pfx-password-input {\r\n    margin-top: 16px;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.webnpki-wrapper .pfx-password-wrapper .pfx-password-body .pfx-password-input .pfx-qlalfqjsgh {\r\n    width: 100%;\r\n    background-color: white;\r\n    border: 1px solid #b0b0b0;\r\n    border-color: #406BB2;\r\n    padding: 0 5px;\r\n    height: 30px;\r\n    line-height: 1.2;\r\n    box-sizing: border-box;\r\n    border-radius: 5px;\r\n}\r\n\r\n.webnpki-wrapper .pfx-password-wrapper .pfx-password-footer {\r\n    margin-top: 8px;\r\n    margin-bottom: 8px;\r\n    text-align: center\r\n}\r\n\r\n.webnpki-wrapper .pfx-password-wrapper .pfx-password-footer button {\r\n    border-radius: 3px;\r\n    border: none;\r\n    height: 28px;\r\n    color: #fff;\r\n    width: 83px !important;\r\n    margin: 10px;\r\n    margin-bottom: 5px;\r\n    margin-right: 6.5px !important;\r\n}\r\n\r\n.webnpki-wrapper .pfx-password-wrapper .pfx-password-footer .confirm-button {\r\n    background-color: #266ab7 !important;\r\n}\r\n\r\n.webnpki-wrapper .pfx-password-wrapper .pfx-password-footer .cancel-button {\r\n    background-color: #F7F7F8 !important;\r\n    border: solid 1px #266ab7 !important;\r\n    color: #000 !important;\r\n}\r\n\r\n.webnpki-wrapper .dim {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 12000;\r\n    background-color: black;\r\n    opacity: .6;\r\n    filter: alpha(opacity=50);\r\n}\r\n\r\n\r\n/* find certificate */\r\n\r\n.find-pfx-wrapper .dim {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 10000;\r\n    background-color: black;\r\n    opacity: .5;\r\n    filter: alpha(opacity=50);\r\n}\r\n\r\n.find-pfx-wrapper .find-pfx-container {\r\n    width: 394px;\r\n    height: 400px;\r\n    background: #F7F7F8;\r\n    z-index: 10001;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-left: -197px;\r\n    margin-top: -254px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.find-pfx-wrapper .find-pfx-header {\r\n    height: 46px;\r\n    background-color: #266ab7;\r\n    border-top-left-radius: 4px;\r\n    border-top-right-radius: 4px;\r\n}\r\n\r\n.find-pfx-wrapper .find-pfx-header span {\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    padding-top: 17px;\r\n    padding-left: 43px;\r\n    color: white;\r\n}\r\n\r\n.find-pfx-wrapper .convert-pfx-wrapper {\r\n    padding: 25px 25px 12px 25px;\r\n    margin: 28px 28px 16px 28px;\r\n    background-color: inherit;\r\n    border: solid;\r\n    border-width: 1px;\r\n    border-color: #266AB7;\r\n}\r\n\r\n.find-pfx-wrapper .convert-pfx-wrapper .convert-pfx-header {\r\n    margin: 0 5px 15px 0px;\r\n    padding-left: 11px;\r\n}\r\n\r\n.find-pfx-wrapper .convert-pfx-wrapper .convert-pfx-header span {\r\n    vertical-align: middle;\r\n    font-size: 13px;\r\n    margin-left: 14px;\r\n}\r\n\r\n.find-pfx-wrapper .convert-pfx-wrapper .convert-pfx-download {\r\n    text-align: center;\r\n    margin-bottom: 22px;\r\n}\r\n\r\n.find-pfx-wrapper .convert-pfx-wrapper .convert-pfx-download a {\r\n    text-decoration: none;\r\n    background-color: #F0F3F9;\r\n    width: 218px;\r\n    height: 32px;\r\n    display: inline-block;\r\n    padding-top: 9px;\r\n}\r\n\r\n.find-pfx-wrapper .convert-pfx-wrapper .convert-pfx-download span {\r\n    vertical-align: middle;\r\n    font-weight: bold;\r\n    color: #266ab7;\r\n    margin-left: 7px;\r\n}\r\n\r\n.find-pfx-wrapper .convert-pfx-wrapper .convert-pfx-step-wrapper {\r\n    padding: 0 7px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    margin-bottom: 15px\r\n}\r\n\r\n.find-pfx-wrapper .convert-pfx-wrapper .convert-pfx-step-wrapper .step-text {\r\n    width: 242px;\r\n    font-size: 11px;\r\n    line-height: 13px;\r\n    letter-spacing: -0.7px;\r\n}\r\n\r\n.find-pfx-wrapper .convert-pfx-wrapper .convert-pfx-step-wrapper .step-text span {\r\n    color: #266ab7;\r\n}\r\n\r\n.find-pfx-wrapper .convert-pfx-wrapper .step-number {\r\n    display: inline-block;\r\n    border-radius: 0.35rem;\r\n    font-weight: 700;\r\n    line-height: 1;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: baseline;\r\n    -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\r\n    background-color: #406BB2;\r\n    color: white;\r\n    font-size: 7px;\r\n    width: 12px;\r\n    height: 12px;\r\n    margin: 0 12px 0 0;\r\n    padding-top: 1.7px;\r\n}\r\n\r\n.find-pfx-wrapper .find-pfx-footer {\r\n    text-align: center;\r\n}\r\n\r\n.find-pfx-wrapper .find-pfx-footer button {\r\n    border-radius: 3px;\r\n    border: none;\r\n    height: 26px;\r\n    color: #fff;\r\n    width: 93px !important;\r\n    margin: 0 5px !important;\r\n}\r\n\r\n.find-pfx-wrapper .find-pfx-footer .confirm-button {\r\n    background-color: #266ab7 !important;\r\n}\r\n\r\n.find-pfx-wrapper .find-pfx-footer .cancel-button {\r\n    background-color: #F7F7F8 !important;\r\n    border: solid 1px #266ab7 !important;\r\n    color: #000 !important;\r\n}\r\n\r\n\r\n/* Customise CSS */\r\n\r\n.kica-d-none {\r\n    display: none !important;\r\n}\r\n\r\n#secukit-wrapper .browser-detail-guide {\r\n    width: 100%;\r\n    height: 650px;\r\n}\r\n\r\n#secukit-wrapper .icon-vkeyboard {\r\n    display: inline-block;\r\n    background-size: cover;\r\n    vertical-align: middle;\r\n    margin-left: -36px;\r\n    background-image: url(" + ___CSS_LOADER_URL___1___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 29px;\r\n    height: 18px;\r\n}\r\n\r\n#secukit-wrapper .icon-down {\r\n    background-image: url(" + ___CSS_LOADER_URL___2___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 15px;\r\n    height: 15px;\r\n}\r\n\r\n#secukit-wrapper .icon-vkeyboard.active {\r\n    background-image: url(" + ___CSS_LOADER_URL___3___ + ");\r\n}\r\n\r\n#secukit-wrapper .icon-cert {\r\n    background-image: url(" + ___CSS_LOADER_URL___4___ + ");\r\n    background-repeat: no-r epeat;\r\n    display: inline-block;\r\n    float: left;\r\n    margin-left: 7px;\r\n    width: 16px;\r\n    height: 13px;\r\n}\r\n\r\n#secukit-wrapper .icon-question {\r\n    background-image: url(" + ___CSS_LOADER_URL___5___ + ");\r\n    background-repeat: no-repeat;\r\n    display: inline-block;\r\n    width: 17px;\r\n    height: 17px;\r\n}\r\n\r\n#secukit-wrapper .icon-faq {\r\n    background-image: url(" + ___CSS_LOADER_URL___6___ + ");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 18px;\r\n    height: 18px;\r\n}\r\n\r\n#secukit-wrapper .icon-find-cert {\r\n    background-image: url(" + ___CSS_LOADER_URL___7___ + ");\r\n    background-repeat: no-repeat;\r\n    width: 24px;\r\n    height: 18px;\r\n}\r\n\r\n#secukit-wrapper .icon-close {\r\n    background-image: url(" + ___CSS_LOADER_URL___8___ + ");\r\n    background-repeat: no-repeat;\r\n    width: 15px;\r\n    height: 15px;\r\n    float: right;\r\n}\r\n\r\n#secukit-wrapper .icon-browser {\r\n    background-image: url(" + ___CSS_LOADER_URL___9___ + ");\r\n    background-size: cover;\r\n    vertical-align: middle;\r\n    height: 35px;\r\n    width: 35px;\r\n    display: inline-block;\r\n    margin-right: 16px;\r\n}\r\n\r\n#secukit-wrapper .bg-light-blue {\r\n    background-color: #F0F5FF !important;\r\n}\r\n\r\n#secukit-wrapper .open-guide {\r\n    margin-left: -400px;\r\n}\r\n\r\n#secukit-wrapper .dropzone-wrapper {\r\n    position: absolute;\r\n    margin-top: 25px;\r\n    width: 380px;\r\n    height: 74px;\r\n}\r\n\r\n#secukit-wrapper .dropzone-wrapper .dropzone-icon {\r\n    width: 80px;\r\n    height: 62px;\r\n    float: left;\r\n    background-image: url(" + ___CSS_LOADER_URL___10___ + ");\r\n    background-size: cover;\r\n    margin-left: 15px;\r\n    margin-right: 12px;\r\n}\r\n\r\n#secukit-wrapper .dropzone-wrapper .dropzone-comment {\r\n    margin-left: auto;\r\n    width: 300px;\r\n    height: 100%;\r\n    padding-top: 5px;\r\n}\r\n\r\n#secukit-wrapper .dropzone-wrapper .dropzone-comment span {\r\n    display: block;\r\n    margin: 7px 0;\r\n    font-size: 11px;\r\n    color: #919191;\r\n}\r\n\r\n#secukit-wrapper .detail-guide {\r\n    position: fixed;\r\n    z-index: 10003;\r\n    left: 0;\r\n    top: 0;\r\n    display: initial;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgb(0, 0, 0);\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n#secukit-wrapper .detail-guide-content {\r\n    display: block;\r\n    background-color: none;\r\n    border: none;\r\n    width: 797px;\r\n    height: 100vh;\r\n    position: fixed;\r\n    top: 45%;\r\n    left: 50%;\r\n    margin-left: -400px;\r\n    margin-top: -400px;\r\n}\r\n\r\n#secukit-wrapper .close-detail-guide {\r\n    color: #fff;\r\n    float: right;\r\n    font-size: 50px;\r\n    font-weight: bold;\r\n    margin-right: -5px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n#secukit-wrapper .close-detail-guide:hover,\r\n#secukit-wrapper .close-detail-guide:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.vk-container {\r\n    padding: 0.7rem 0.5rem 0.5rem 0.5rem !important;\r\n}\r\n\r\n.vk-button {\r\n    height: 2rem !important;\r\n    line-height: 2rem !important;\r\n    min-width: 2rem !important;\r\n    margin: 0.1rem!important;\r\n    background: #444 !important;\r\n    color: white !important;\r\n}\r\n\r\n.vk-button-enter {\r\n    background: #266ab7 !important;\r\n    color: white !important;\r\n}\r\n\r\n.vk-button-shift-down {\r\n    background: darkgray !important;\r\n    color: white !important;\r\n}\r\n\r\n.vk-button span {\r\n    font-size: 1rem !important;\r\n}\r\n\r\n\r\n/* FR */\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .select-certificate-wrapper {\r\n    height: 594px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list-label {\r\n    padding-top: 56px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .select-certificate-wrapper .content-wrapper .cert-password-label {\r\n    margin-top: 71px !important;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list table th {\r\n    padding: 0 4px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .select-certificate-wrapper .content-wrapper .cert-list table th span {\r\n    font-size: 11px;\r\n    font-weight: 500;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .select-certificate-wrapper .content-wrapper .input-password-form .cert-qlalfqjsgh {\r\n    padding: 0 0 0 7px;\r\n    font-size: 11px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .select-certificate-wrapper button {\r\n    margin: 10px 4.5px 5px 8px !important\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .browser-guide-wrapper {\r\n    height: 594px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .browser-guide-wrapper .browser-guide-header {\r\n    height: 130px;\r\n    padding: 0 25px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .browser-guide-wrapper .browser-guide-header h1 {\r\n    font-size: 16px;\r\n    margin-bottom: 16px !important;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .browser-guide-wrapper .browser-guide-header .text h2 {\r\n    margin-top: 0 !important;\r\n    width: 236px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .browser-guide-wrapper .browser-guide-contents {\r\n    padding: 0 25px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .browser-guide-wrapper .browser-guide-contents hr {\r\n    margin: 5px -25px 5px -25px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .browser-guide-wrapper .browser-guide-contents h2 {\r\n    font-weight: 500;\r\n    line-height: 16px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .browser-guide-wrapper .browser-guide-contents .browser-guide-steps-wrapper {\r\n    padding: 0;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .browser-guide-wrapper .browser-guide-contents .browser-guide-steps-wrapper .step-wrapper .step-text {\r\n    line-height: 14px;\r\n    width: 262px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .browser-guide-wrapper .browser-guide-contents .detail-guide-wrapper {\r\n    margin-top: 14px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .browser-guide-wrapper .browser-guide-contents .detail-guide-wrapper a {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .secukit-dialog .browser-guide-wrapper .browser-guide-contents .detail-guide-wrapper .open-detail-guide-wrapper .text {\r\n    font-weight: 500;\r\n    width: 262px;\r\n    display: inline-block;\r\n    font-size: 11px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .webnpki-wrapper .pfx-password-wrapper .pfx-password-header span {\r\n    font-weight: 500;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .browser-detail-guide {\r\n    height: 797px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"fr\"] .icon-browser {\r\n    margin-top: 4px;\r\n}\r\n\r\n\r\n/* ko */\r\n\r\n#secukit-wrapper[lang=\"ko\"] .secukit-dialog .browser-guide-wrapper .browser-guide-contents .browser-guide-steps-wrapper .step-wrapper {\r\n    margin-bottom: 7px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"ko\"] h1,\r\n#secukit-wrapper[lang=\"ko\"] h2,\r\n#secukit-wrapper[lang=\"ko\"] h3,\r\n#secukit-wrapper[lang=\"ko\"] h4,\r\n#secukit-wrapper[lang=\"ko\"] h5,\r\n#secukit-wrapper[lang=\"ko\"] h6 {\r\n    font-weight: bold;\r\n    margin-top: 0;\r\n    margin-bottom: 0.83em;\r\n}\r\n\r\n#secukit-wrapper[lang=\"ko\"] .secukit-dialog .select-certificate-wrapper .select-certificate-header h1 {\r\n    font-weight: bold !important;\r\n}\r\n\r\n#secukit-wrapper[lang=\"ko\"] .secukit-dialog .browser-guide-wrapper .browser-guide-header h1 {\r\n    clear: both;\r\n    font-weight: bold !important;\r\n}\r\n\r\n#secukit-wrapper[lang=\"ko\"] .webnpki-wrapper .pfx-password-wrapper {\r\n    margin-left: -150px;\r\n    width: 300px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"ko\"] .webnpki-wrapper .pfx-password-wrapper .pfx-password-body {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"ko\"] .secukit-dialog .browser-guide-wrapper .browser-guide-header .text h2 {\r\n    width: 226px !important;\r\n}\r\n\r\n#secukit-wrapper[lang=\"ko\"] .secukit-dialog .browser-guide-wrapper .browser-guide-contents hr {\r\n    margin: 13px -25px 5px -25px;\r\n}\r\n\r\n#secukit-wrapper[lang=\"ko\"] .secukit-dialog .browser-guide-wrapper .browser-guide-contents .browser-guide-steps-wrapper .step-wrapper {    \r\n    margin-bottom: 10px\r\n}\r\n\r\n.swal2-container {\r\n    z-index: 10000 !important;\r\n}\r\n\r\n.swal2-title {\r\n    font-size: 1.225em !important;\r\n    margin: 0 0 1em !important;\r\n}\r\n\r\n.swal2-content {\r\n    font-size: 0.875em !important;\r\n    font-weight: 600 !important;\r\n    letter-spacing: 0.0125em !important;\r\n}\r\n\r\n.swal2-popup {\r\n    width: 26em !important;\r\n}\r\n\r\n", ""]);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "11eabca2251325cfc5589c9c6fb57b46.ttf";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cbedd50fcc13f92405d450af385d7c5b.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9f33144426873b1db0d352b1adb044d2.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aa2aacc9a840bb9388662a58f794278d.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "392061a298938cb08a4c1585f1d4bc36.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "739ca19062b3ae0a95dc48ba762e3f72.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c69cd8375a2dae7fc8641e42f115c030.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a524ca3c0342a188a1ad339683070fea.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4ba4b716d43f5933dce79502a423b1aa.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "49336b971a5bf4225312b176fb117664.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "575f40fee0f637ff0cdba9a3fd683ed8.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(22);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(1)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "/* *** keyboard light theme ***\r\n  for when jQuery UI themes are not being used\r\n  See https://jsfiddle.net/Mottie/jsh0377k/\r\n */\r\n.ui-keyboard {\r\n    background: #FFF;\r\n    border: 1px solid #292929;\r\n    border-radius: 10px;\r\n    box-shadow: 2px 2px 2px gray;\r\n    text-align: center;\r\n    font-size:18px;\r\n    padding: .3em;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 86000;\r\n    /* see issue #484 */\r\n    -ms-touch-action: manipulation;\r\n    touch-action: manipulation;\r\n}\r\n\r\n.ui-keyboard2 {\r\n\t/* adjust overall keyboard size using \"font-size\" */\r\n\tfont-size: 14px;\r\n\ttext-align: center;\r\n\tbackground: #fefefe;\r\n\tborder: 1px solid #aaa;\r\n\tpadding: 4px;\r\n\r\n\t/* include the following setting to place the\r\n\tkeyboard at the bottom of the browser window */\r\n\twidth: 100%;\r\n\theight: auto;\r\n\tleft: 0px;\r\n\ttop: auto;\r\n\tbottom: 0px;\r\n\tposition: fixed;\r\n\twhite-space: nowrap;\r\n\toverflow-x: auto;\r\n\t/* see issue #484 */\r\n\t-ms-touch-action: manipulation;\r\n\ttouch-action: manipulation;\r\n}\r\n.ui-keyboard-has-focus {\r\n\tz-index: 86001;\r\n}\r\n.ui-keyboard-button {\r\n\tborder: 1px solid #aaa;\r\n\tpadding: 0 0.5em;\r\n\tmargin: 1px;\r\n\tmin-width: 3em;\r\n\theight: 3em;\r\n\tline-height: 3em;\r\n\tvertical-align: top;\r\n\tfont-family: Helvetica, Arial, sans-serif;\r\n\tcolor: #333;\r\n\ttext-align: center;\r\n\tborder-radius: 5px;\r\n\t-webkit-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.5);\r\n\tbox-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.5);\r\n\tbackground: white;\r\n\tbackground-image: -webkit-linear-gradient(-90deg, white 0%, #e3e3e3 100%);\r\n\tbackground-image:         linear-gradient(-90deg, white 0%, #e3e3e3 100%);\r\n\tcursor: pointer;\r\n\toverflow: hidden;\r\n\t-moz-user-focus: ignore;\r\n}\r\n.ui-keyboard-button:not([disabled]):hover {\r\n\tbackground: #eee;\r\n\tbackground-image: -webkit-linear-gradient(-90deg, #f2f2f2 0%, #d3d3d3 100%);\r\n\tbackground-image:         linear-gradient(-90deg, #f2f2f2 0%, #d3d3d3 100%);\r\n}\r\n.ui-keyboard-button:not([disabled]):active {\r\n\tbackground: #ddd;\r\n\tbackground-image: -webkit-linear-gradient(-90deg, #e5e5e5 0%, #d3d3d3 100%);\r\n\tbackground-image:         linear-gradient(-90deg, #e5e5e5 0%, #d3d3d3 100%);\r\n}\r\n.ui-keyboard-button span {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\tfont-size: 1.2em;\r\n\ttext-align: center;\r\n}\r\n/* make action keys extra-wide */\r\n.ui-keyboard-actionkey:not(.ui-keyboard-dec):not(.ui-keyboard-combo) {\r\n\tmin-width: 6em;\r\n}\r\n.ui-keyboard-space {\r\n\twidth: 15em;\r\n}\r\n.ui-keyboard-actionkey:not(.ui-keyboard-dec):not(.ui-keyboard-combo) span {\r\n\tposition: relative;\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n}\r\n.ui-keyboard-placeholder {\r\n\tcolor: #888;\r\n}\r\n/* disabled or readonly inputs, or use input[disabled='disabled'] { color: #f00; } */\r\n.ui-keyboard-nokeyboard {\r\n\tcolor: #888;\r\n\tborder-color: #888;\r\n}\r\n.ui-keyboard-spacer {\r\n\tdisplay: inline-block;\r\n\twidth: 1px;\r\n\theight: 0;\r\n\tcursor: default;\r\n}\r\n.ui-keyboard-NBSP span, .ui-keyboard-ZWSP span, .ui-keyboard-ZWNJ span, .ui-keyboard-ZWJ span,\r\n.ui-keyboard-LRM span, .ui-keyboard-RLM span {\r\n\tfont-size: 0.5em;\r\n\tline-height: 1.5em;\r\n\twhite-space: normal;\r\n}\r\n\r\n/* combo key styling - toggles diacritics on/off */\r\n.ui-keyboard-button.ui-keyboard-combo.ui-state-default {\r\n\t-webkit-box-shadow: 1px 1px 3px 0 rgba(213, 133, 18, 0.5);\r\n\t        box-shadow: 1px 1px 3px 0 rgba(213, 133, 18, 0.5);\r\n\tborder-color: #d58512;\r\n}\r\n.ui-keyboard-button.ui-keyboard-combo.ui-state-active {\r\n\t-webkit-box-shadow: 1px 1px 3px 0 rgba(38, 154, 188, 0.5);\r\n\t        box-shadow: 1px 1px 3px 0 rgba(38, 154, 188, 0.5);\r\n\tborder-color: #269abc;\r\n}\r\n/* (in)valid inputs */\r\nbutton.ui-keyboard-accept.ui-keyboard-valid-input {\r\n\t-webkit-box-shadow: 1px 1px 3px 0 rgba(57, 132, 57, 0.5);\r\n\t        box-shadow: 1px 1px 3px 0 rgba(57, 132, 57, 0.5);\r\n\tborder-color: #398439;\r\n}\r\nbutton.ui-keyboard-accept.ui-keyboard-valid-input:not([disabled]):hover {\r\n\tborder-color: #4cae4c;\r\n}\r\nbutton.ui-keyboard-accept.ui-keyboard-invalid-input {\r\n\t-webkit-box-shadow: 1px 1px 3px 0 rgba(172, 41, 37, 0.5);\r\n\t        box-shadow: 1px 1px 3px 0 rgba(172, 41, 37, 0.5);\r\n\tborder-color: #ac2925;\r\n}\r\nbutton.ui-keyboard-accept.ui-keyboard-invalid-input:not([disabled]):hover {\r\n\tborder-color: #d43f3a;\r\n}\r\n/* unlocked icon (keyboard enabled) */\r\nbutton.ui-keyboard-toggle span {\r\n\twidth: .9em;\r\n\theight: .9em;\r\n\tdisplay: inline-block;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center center;\r\n\tbackground-size: contain;\r\n\t/* light theme unlocked icon - fill: #111 */\r\n\tbackground-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzExMSI+PHBhdGggZD0iTTguNyw0LjRINy41SDUuMHYtMS45YzAtMS40LTEuMS0yLjUtMi41LTIuNWMtMS40LDAtMi41LDEuMS0yLjUsMi41djEuOWgxLjIgdi0xLjljMC0wLjcsMC42LTEuMiwxLjItMS4yczEuMiwwLjYsMS4yLDEuMnYxLjljLTAuNywwLTEuMiwwLjYtMS4yLDEuMlY4LjggYzAsMC43LDAuNiwxLjIsMS4yLDEuMmg1LjBDOS40LDEwLDEwLDkuNCwxMCw4LjhWNS42QzEwLDUuMCw5LjQsNC40LDguOCw0LjR6IE02LjYsNy40djEuMCBjMCwwLjItMC4xLDAuMy0wLjMsMC4zUzYuMCw4LjYsNi4wLDguNFY3LjRjLTAuMi0wLjEtMC4zLTAuMy0wLjMtMC41YzAtMC4zLDAuMy0wLjYsMC42LTAuNiBTNi45LDYuNiw2LjksNi45QzYuOSw3LjEsNi44LDcuMyw2LjYsNy40eiIvPjwvc3ZnPg==');\r\n}\r\n/* locked icon (keyboard disabled) */\r\nbutton.ui-keyboard-toggle.ui-keyboard-disabled span {\r\n\t/* light theme locked icon - fill: #111 */\r\n\tbackground-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzExMSI+PHBhdGggZD0iTTcuNCA0LjRWMi41YzAtMS40LTEuMS0yLjUtMi41LTIuNWMtMS40IDAtMi41IDEuMS0yLjUgMi41djEuOSBjLTAuNyAwLTEuMiAwLjUtMS4yIDEuMnYzLjFDMS4zIDkuNCAxLjggMTAgMi41IDEwaDQuOWMwLjcgMCAxLjItMC42IDEuMi0xLjJWNS42IEM4LjcgNC45IDguMSA0LjQgNy40IDQuNHogTTUuMyA3LjR2MS4wYzAgMC4yLTAuMSAwLjMtMC4zIDAuM2MtMC4yIDAtMC4zLTAuMS0wLjMtMC4zVjcuNCBjLTAuMi0wLjEtMC4zLTAuMy0wLjMtMC41YzAtMC4zIDAuMy0wLjYgMC42LTAuNmMwLjMgMCAwLjYgMC4zIDAuNiAwLjYgQzUuNiA3LjEgNS41IDcuMyA1LjMgNy40eiBNNi4yIDQuNEgzLjdWMi41YzAtMC43IDAuNS0xLjIgMS4yLTEuMmMwLjcgMCAxLjIgMC42IDEuMiAxLjIgVjQuNHoiLz48L3N2Zz4=');\r\n}\r\n.ui-keyboard.ui-keyboard-disabled button:not(.ui-keyboard-toggle), .ui-keyboard.ui-keyboard-disabled input {\r\n\topacity: 0.5;\r\n}\r\n\r\n/*** Alt-Keys Popup extension ***/\r\n/* clickable overlay on top of keyboard to hide the popup */\r\n.ui-keyboard-overlay {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\tbackground: rgba(238, 238, 238, 0.5);\r\n}\r\n/* the actual popup styling, class names from the css.container option are also added */\r\n.ui-keyboard-popup {\r\n\tdisplay: inline-block;\r\n\t/* default buttons are 2em wide + .1em margin on either side (set in .ui-keyboard-button definition);\r\n\tso use multiples of 2.2em\tfor a max-width if you don't want any extra white space on the sides,\r\n\te.g. 5 buttons * 2.2em = 11em, 6 buttons * 2.2em = 13.2em, etc */\r\n\tmax-width: 22em;\r\n\t/* 10 buttons */\r\n}\r\n.ui-keyboard.ui-keyboard-popup-open .ui-keyboard-keyset .ui-keyboard-button {\r\n\t/* Disable keys under overlay while popup is open - see #654 */\r\n\tpointer-events: none;\r\n}\r\n\r\n/*** Caret extension definition ***/\r\n/* margin-top => is added to the caret height (top & bottom) */\r\n.ui-keyboard-caret {\r\n\tbackground: #c00;\r\n\twidth: 1px;\r\n\tmargin-top: 3px;\r\n}\r\n\r\n/*** Extender keyboard extension ***/\r\ndiv.ui-keyboard-extender {\r\n\tmargin-left: 5px;\r\n\tmargin-right: 10px;\r\n}\r\nbutton.ui-keyboard-extender span {\r\n\twidth: .9em;\r\n\theight: .9em;\r\n\tdisplay: inline-block;\r\n\tmargin-bottom: 3px;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: center center;\r\n\tbackground-size: contain;\r\n\t/* light theme extender icon - fill: #111 */\r\n\tbackground-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgc3R5bGU9ImZpbGw6IzExMSI+PGc+PHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzExMSIgZD0iTSAwLjUsNC41IDE1LjUsNC41IDE1LjUsMTUuNSAwLjUsMTUuNSBaIj48L3BhdGg+PHJlY3Qgd2lkdGg9IjIiIGhlaWdodD0iMiIgeD0iMiIgeT0iNiI+PC9yZWN0PjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjUiIHk9IjYiPjwvcmVjdD48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiB4PSI4IiB5PSI2Ij48L3JlY3Q+PHBhdGggZD0ibSAxMSw2IDMsMCAwLDUgLTIsMCAwLC0zIC0xLDAgeiI+PC9wYXRoPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjEyIiB5PSIxMiI+PC9yZWN0PjxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjIiIHg9IjUiIHk9IjEyIj48L3JlY3Q+PHJlY3Qgd2lkdGg9IjIiIGhlaWdodD0iMiIgeD0iOSIgeT0iOSI+PC9yZWN0PjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjYiIHk9IjkiPjwvcmVjdD48cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIyIiB4PSIyIiB5PSIxMiI+PC9yZWN0PjxyZWN0IHdpZHRoPSIzIiBoZWlnaHQ9IjIiIHg9IjIiIHk9IjkiPjwvcmVjdD48L2c+PC9zdmc+');\r\n}\r\n", ""]);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

function boxes() {
    var object = {};

    object.main = '<div class="secukit-dialog" id="secukit-dialog">' +
        '<div class="select-certificate-wrapper">' +
        '<div class="select-certificate-header">' +
        '<h1>' + KICA_CORPUS.SELECT_CERT_HEADER + '</h1>' +
        '</div>' +
        '<div class="banner-wrapper">' +
        '<img src="' + webnpki_config.path + '/assets/banner/default_banner.png" alt="A World of Trust KICA">' +
        '</div>' +
        '<div class="content-wrapper">' +
        '<a class="kica-button" href="javascript:void(0)" onclick="KICA_DIALOG.openGuide()">' +
        '<i class="icon-question"></i>' +
        '<span>' + KICA_CORPUS.BUTTON_OPEN_GUIDE + '</span>' +
        '</a>' +
        '<h2 class="cert-list-label">' + KICA_CORPUS.CERT_TABLE_LABEL + '</h2>' +
        '<div class="cert-list" ondragover="KICA_DIALOG.onDragOverCert(event)" ondragleave="KICA_DIALOG.onDragLeaveCert(event)" ondrop="KICA_DIALOG.onDropCert(event)">' +
        '<div class="dropzone-wrapper kica-d-none" id="dropzone-wrapper">' +
        '<div class="dropzone-icon"></div>' +
        '<div class="dropzone-comment">' +
        '<span class=""dropzone-comment-text>' + KICA_CORPUS.DROPZONE_TEXT_1 + '</span>' +
        '<span class=""dropzone-comment-text>' + KICA_CORPUS.DROPZONE_TEXT_2 + '</span>' +
        '<span class=""dropzone-comment-text>' + KICA_CORPUS.DROPZONE_TEXT_3 + '</span>' +
        '</div>' +
        '</div>' +
        '<table id="cert-list-table">' +
        '<thead>' +
        '<tr>' +
        '<th scope="col">' +
        '<span>' + KICA_CORPUS.CERT_TABLE_THEAD1 + '</span>' +
        '</th>' +
        '<th scope="col">' +
        '<span>' + KICA_CORPUS.CERT_TABLE_THEAD2 + '</span>' +
        '</th>' +
        '<th scope="col">' +
        '<span>' + KICA_CORPUS.CERT_TABLE_THEAD3 + '</span>' +
        '</th>' +
        '<th scope="col">' +
        '<span>' + KICA_CORPUS.CERT_TABLE_THEAD4 + '</span>' +
        '</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody id="cert-list">' +
        '</tbody>' +
        '</table>' +
        '</div>' +
        '<a class="kica-button bg-light-blue" href="javascript:void(0)" onclick="KICA_DIALOG.openFindCert();">' +
        '<i class="icon-find-cert"></i>' +
        '<span>' + KICA_CORPUS.BUTTON_FIND_CERTIFICATE + '</span>' +
        '</a>' +
        '<h2 class="cert-password-label">' + KICA_CORPUS.CERT_PWD_LABEL + '</h2>' +
        '<form class="input-password-form" name="formPasswordE2EMax8" onkeydown="return event.key != \'Enter\';" autocomplete="off">' +
        '<input style="display:none" aria-hidden="true">' +
        '<input type="password" style="display:none" aria-hidden="true">' +
        '<input class="cert-qlalfqjsgh" type="password" id="qlalfqjsgh" name="PasswordE2EMax8" placeholder="' + KICA_CORPUS.CERT_PWD_PLACEHOLDER + '" autocomplete="off">' +
        '<a class="icon-vkeyboard" id="vkeyboard-toggle" href="javascript:void(0);" onclick="KICA_DIALOG.toggleVirtualKeyboard()"></a>' +
        '</form>' +
        '<div class="button-wrapper">' +
        '<button class="confirm-button" id ="select-certificate-confirm">' + KICA_CORPUS.BUTTON_CONFIRM + '</button>' +
        '<button class="cancel-button" onclick="KICA_DIALOG.closeSelectCertificateDialog()">' + KICA_CORPUS.BUTTON_CANCEL + '</button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="browser-guide-wrapper kica-d-none" id="browser-guide-wrapper">' +
        '<div class="browser-guide-header">' +
        '<div class="close">' +
        '<a class="html5-guide-close" href="javascript:void(0)" onclick="KICA_DIALOG.closeGuide()">' +
        '<i class="icon-close"></i>' +
        '</a>' +
        '</div>' +
        '<h1>' + KICA_CORPUS.BROWSER_GUIDE_TITLE + '</h1>' +
        '<div class="text">' +
        '<i class="icon-browser"></i>' +
        '<h2>' + KICA_CORPUS.BROWSER_GUIDE_SUB_TITLE + '</h2>' +
        '</div>' +
        '</div>' +
        '<div class="browser-guide-contents">' +
        '<h2>' + KICA_CORPUS.BROWSER_GUIDE_STORE_CERT_LABEL + '</h2>' +
        '<div class="browser-guide-steps-wrapper">' +
        '<div class="step-wrapper">' +
        '<span class="step-number">1</span>' +
        '<span class="step-text">' + KICA_CORPUS.BROWSER_GUIDE_STORE_CERT_STEP1 + '</span>' +
        '<span class="step-text sub">' + KICA_CORPUS.BROWSER_GUIDE_STORE_CERT_STEP1_1 + '</span>' +
        '</div>' +
        '<div class="step-wrapper">' +
        '<span class="step-number">2</span>' +
        '<span class="step-text">' + KICA_CORPUS.BROWSER_GUIDE_STORE_CERT_STEP2 + '</span>' +
        '<span class="step-text sub">' + KICA_CORPUS.BROWSER_GUIDE_STORE_CERT_STEP2_1 + '</span>' +
        '</div>' +
        '<div class="step-wrapper">' +
        '<span class="step-text w-100">' + KICA_CORPUS.BROWSER_GUIDE_STORE_CERT_STEP3 + '</span>' +
        '</div>' +
        '</div>' +
        '' +
        '<h2>' + KICA_CORPUS.BROWSER_GUIDE_DELETE_CERT_LABEL + '</h2>' +
        '<div class="browser-guide-steps-wrapper">' +
        '<div class="step-wrapper">' +
        '<span class="step-number">1</span>' +
        '<span class="step-text">' + KICA_CORPUS.BROWSER_GUIDE_DELETE_CERT_STEP1 + '</span>' +
        '</div>' +
        '<div class="step-wrapper">' +
        '<span class="step-number">2</span>' + 
        '<span class="step-text">' + KICA_CORPUS.BROWSER_GUIDE_DELETE_CERT_STEP2 + '</span>' +
        '</div>' +
        '<div class="step-wrapper">' +
        '<span class="step-number">3</span>' +
        '<span class="step-text">' + KICA_CORPUS.BROWSER_GUIDE_DELETE_CERT_STEP3 + '</span>' +
        '</div>' +
        '</div>' +
        '' + 
        '<div class="detail-guide-wrapper">' +
        '<a class="open-detail-guide-wrapper" href="javascript:void(0)" onclick="KICA_DIALOG.openDetailGuide()">' +
        '<span class="badge">!</span>' +
        '<span class="text">' + KICA_CORPUS.BROWSER_DETAIL_MORE_BUTTON + '</span>' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';

    object.pdfViewer = '<div class="detail-guide kica-d-none" id="detail-guide">' +
        '<div class="detail-guide-content">' +
        '<span class="close-detail-guide" onclick="KICA_DIALOG.closeDetailGuide()">&times;</span>' +
        '<embed src="' + webnpki_config.path + 'assets/guide/browser_certificate_guide.pdf" type="application/pdf" class="browser-detail-guide">' +
        '</div>' +
        '</div>';

    object.importPFX = '<div class="webnpki-wrapper kica-d-none" id="webnpki-wrapper">' +
        '<div class="dim"></div>' +
        '<div class="pfx-password-wrapper">' +
        '<div class="pfx-password-header">' +
        '<span>' + KICA_CORPUS.IMPORT_CERT_TITLE + '</span>' +
        '</div>' +
        '<div class="pfx-password-body">' +
        '<span>' + KICA_CORPUS.IMPORT_CERT_PASSWORD_LABEL + '</span>' +
        '<div class="pfx-password-input">' +
        '<form name="form-pfx-qlalfqjsgh" onsubmit="$(\'#pfx-qlalfqjsgh-confirm\').trigger(\'click\'); return false;" onkeydown="return event.key != \'Enter\'";>' +
        '<input id="input-pfx-qlalfqjsgh" name="pfx-qlalfqjsgh" class="pfx-qlalfqjsgh" type="password" autocomplete="off">' +
        '<a class="icon-vkeyboard" id="pfx-vkeyboard-toggle" href="javascript:void(0);" onclick="KICA_DIALOG.togglePFXVirtualKeyboard()"></a>' +
        '</form>' +
        '</div>' +
        '<span>' + KICA_CORPUS.IMPORT_CERT_TEXT + '</span>' +
        '</div>' +
        '<div class="pfx-password-footer">' +
        '<button class="confirm-button" id="pfx-qlalfqjsgh-confirm">' + KICA_CORPUS.BUTTON_CONFIRM + '</button>' +
        '<button class="cancel-button" id="pfx-qlalfqjsgh-cancel">' + KICA_CORPUS.BUTTON_CANCEL + '</button>' +
        '</div>' +
        '</div>' +
        '<input id="inputCerts" type="file" style="display:none" accept=".p12, .pfx" onchange="KICA_DIALOG.onSelectCert(this);"/>' +
        '</div>';

    object.findPFX = '<div class="find-pfx-wrapper kica-d-none" id="find-pfx-wrapper">' +
        '<div class="dim"></div>' +
        '<div class="find-pfx-container">' +
        '<div class="find-pfx-header">' +
        '<span>' + KICA_CORPUS.IMPORT_PFX_TITLE + '</span>' +
        '</div>' +
        '<div class="convert-pfx-wrapper">' +
        '<div class="convert-pfx-header">' +
        '<i class="icon-faq"></i><span>' + KICA_CORPUS.IMPORT_PFX_CONVERT_PFX_LABEL + '</span>' +
        '</div>' +
        '<div class="convert-pfx-download">' +
        '<a href="javascript:void(0);" onclick="KICA_DIALOG.downloadConvertCert();"><i class="icon-down"></i><span>' + KICA_CORPUS.IMPORT_PFX_CONVERT_PFX_DOWNLOAD + '</span></a>' +
        '</div>' +
        '<div class="convert-pfx-step-wrapper">' +
        '<span class="step-number">1</span>' +
        '<span class="step-text"><span>' + KICA_CORPUS.IMPORT_PFX_CONVERT_PFX_DOWNLOAD + '</span>' + KICA_CORPUS.IMPORT_PFX_CONVERT_PFX_STEP1 + '</span>' +
        '</div>' +
        '<div class="convert-pfx-step-wrapper">' +
        '<span class="step-number">2</span>' +
        '<span class="step-text">' + KICA_CORPUS.IMPORT_PFX_CONVERT_PFX_STEP2 + '</span>' +
        '</div>' +
        '<div class="convert-pfx-step-wrapper">' +
        '<span class="step-number">3</span>' +
        '<span class="step-text">' + KICA_CORPUS.IMPORT_PFX_CONVERT_PFX_STEP3 + '</span>' +
        '</div>' +
        '</div>' +
        '<div class="find-pfx-footer">' +
        '<button class="confirm-button" id="find-pfx-button" onclick="KICA_DIALOG.searchCert();">' + KICA_CORPUS.IMPORT_PFX_FIND_BUTTON + '</button>' +
        '<button class="cancel-button" id="find-pfx-cancel" onclick="KICA_DIALOG.closeFindCert();">' + KICA_CORPUS.BUTTON_CANCEL + '</button>' +
        '</div>' +
        '</div>' +
        '</div>';

    return object;
}

module.exports = {
    boxes: boxes
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {/*!
* sweetalert2 v9.5.3
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Capitalize the first letter of a string
 * @param str
 */

var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Returns the array ob object values (Object.values isn't supported in IE11)
 * @param obj
 */

var objectValues = function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * Show a one-time console warning about deprecated params/methods
 */

var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
  warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isPromise = function isPromise(arg) {
  return arg && Promise.resolve(arg) === arg;
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var isJqueryElement = function isJqueryElement(elem) {
  return _typeof(elem) === 'object' && elem.jquery;
};

var isElement = function isElement(elem) {
  return elem instanceof Element || isJqueryElement(elem);
};

var argsToParams = function argsToParams(args) {
  var params = {};

  if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
    _extends(params, args[0]);
  } else {
    ['title', 'html', 'icon'].forEach(function (name, index) {
      var arg = args[index];

      if (typeof arg === 'string' || isElement(arg)) {
        params[name] = arg;
      } else if (arg !== undefined) {
        error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
      }
    });
  }

  return params;
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var getContainer = function getContainer() {
  return document.body.querySelector(".".concat(swalClasses.container));
};
var elementBySelector = function elementBySelector(selectorString) {
  var container = getContainer();
  return container ? container.querySelector(selectorString) : null;
};

var elementByClass = function elementByClass(className) {
  return elementBySelector(".".concat(className));
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
};
var getIcon = function getIcon() {
  var visibleIcon = getIcons().filter(function (icon) {
    return isVisible(icon);
  });
  return visibleIcon.length ? visibleIcon[0] : null;
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getHtmlContainer = function getHtmlContainer() {
  return elementByClass(swalClasses['html-container']);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses['progress-steps']);
};
var getValidationMessage = function getValidationMessage() {
  return elementByClass(swalClasses['validation-message']);
};
var getConfirmButton = function getConfirmButton() {
  return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
};
var getCancelButton = function getCancelButton() {
  return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getHeader = function getHeader() {
  return elementByClass(swalClasses.header);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getTimerProgressBar = function getTimerProgressBar() {
  return elementByClass(swalClasses['timer-progress-bar']);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
}; // https://github.com/jkup/focusable/blob/master/index.js

var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  });
  var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  if (!className) {
    return false;
  }

  var classList = className.split(/\s+/);

  for (var i = 0; i < classList.length; i++) {
    if (!elem.classList.contains(classList[i])) {
      return false;
    }
  }

  return true;
};

var removeCustomClasses = function removeCustomClasses(elem, params) {
  toArray(elem.classList).forEach(function (className) {
    if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
      elem.classList.remove(className);
    }
  });
};

var applyCustomClass = function applyCustomClass(elem, params, className) {
  removeCustomClasses(elem, params);

  if (params.customClass && params.customClass[className]) {
    if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
      return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
    }

    addClass(elem, params.customClass[className]);
  }
};
function getInput(content, inputType) {
  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(content, swalClasses[inputType]);

    case 'checkbox':
      return content.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return content.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(content, swalClasses.input);
  }
}
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};
var toggleClass = function toggleClass(target, classList, condition) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        condition ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};
var addClass = function addClass(target, classList) {
  toggleClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  toggleClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
  if (value || parseInt(value) === 0) {
    elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
  } else {
    elem.style.removeProperty(property);
  }
};
var show = function show(elem) {
  var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
  elem.style.opacity = '';
  elem.style.display = display;
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};
var toggle = function toggle(elem, condition, display) {
  condition ? show(elem, display) : hide(elem);
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
};
/* istanbul ignore next */

var isScrollable = function isScrollable(elem) {
  return !!(elem.scrollHeight > elem.clientHeight);
}; // borrowed from https://stackoverflow.com/a/46352119

var hasCssAnimation = function hasCssAnimation(elem) {
  var style = window.getComputedStyle(elem);
  var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
  var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
  return animDuration > 0 || transDuration > 0;
};
var contains = function contains(haystack, needle) {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle);
  }
};
var animateTimerProgressBar = function animateTimerProgressBar(timer) {
  var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var timerProgressBar = getTimerProgressBar();

  if (isVisible(timerProgressBar)) {
    if (reset) {
      timerProgressBar.style.transition = 'none';
      timerProgressBar.style.width = '100%';
    }

    setTimeout(function () {
      timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
      timerProgressBar.style.width = '0%';
    }, 10);
  }
};
var stopTimerProgressBar = function stopTimerProgressBar() {
  var timerProgressBar = getTimerProgressBar();
  var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  timerProgressBar.style.removeProperty('transition');
  timerProgressBar.style.width = '100%';
  var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
  timerProgressBar.style.removeProperty('transition');
  timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n </div>\n").replace(/(^|\n)\s*/g, '');

var resetOldContainer = function resetOldContainer() {
  var oldContainer = getContainer();

  if (!oldContainer) {
    return;
  }

  oldContainer.parentNode.removeChild(oldContainer);
  removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
};

var oldInputVal; // IE11 workaround, see #1109 for details

var resetValidationMessage = function resetValidationMessage(e) {
  if (Swal.isVisible() && oldInputVal !== e.target.value) {
    Swal.resetValidationMessage();
  }

  oldInputVal = e.target.value;
};

var addInputChangeListeners = function addInputChangeListeners() {
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea);
  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = function (e) {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };
};

var getTarget = function getTarget(target) {
  return typeof target === 'string' ? document.querySelector(target) : target;
};

var setupAccessibility = function setupAccessibility(params) {
  var popup = getPopup();
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }
};

var setupRTL = function setupRTL(targetElement) {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }
};
/*
 * Add modal + backdrop to DOM
 */


var init = function init(params) {
  // Clean up the old popup container if it exists
  resetOldContainer();
  /* istanbul ignore if */

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = getTarget(params.target);
  targetElement.appendChild(container);
  setupAccessibility(params);
  setupRTL(targetElement);
  addInputChangeListeners();
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param); // JQuery element(s)
  } else if (_typeof(param) === 'object') {
    handleJqueryElem(target, param); // Plain string
  } else if (param) {
    target.innerHTML = param;
  }
};

var handleJqueryElem = function handleJqueryElem(target, elem) {
  target.innerHTML = '';

  if (0 in elem) {
    for (var i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true));
    }
  } else {
    target.appendChild(elem.cloneNode(true));
  }
};

var animationEndEvent = function () {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    WebkitAnimation: 'webkitAnimationEnd',
    OAnimation: 'oAnimationEnd oanimationend',
    animation: 'animationend'
  };

  for (var i in transEndEventNames) {
    if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

var measureScrollbar = function measureScrollbar() {
  var scrollDiv = document.createElement('div');
  scrollDiv.className = swalClasses['scrollbar-measure'];
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

var renderActions = function renderActions(instance, params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } // Custom class


  applyCustomClass(actions, params, 'actions'); // Render confirm button

  renderButton(confirmButton, 'confirm', params); // render Cancel Button

  renderButton(cancelButton, 'cancel', params);

  if (params.buttonsStyling) {
    handleButtonsStyling(confirmButton, cancelButton, params);
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  if (params.reverseButtons) {
    confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
  }
};

function handleButtonsStyling(confirmButton, cancelButton, params) {
  addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
  }

  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  } // Loading state


  var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
  confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
  confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
}

function renderButton(button, buttonType, params) {
  toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
  button.innerHTML = params["".concat(buttonType, "ButtonText")]; // Set caption text

  button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
  // Add buttons custom classes

  button.className = swalClasses[buttonType];
  applyCustomClass(button, params, "".concat(buttonType, "Button"));
  addClass(button, params["".concat(buttonType, "ButtonClass")]);
}

function handleBackdropParam(container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop;
  } else if (!backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }
}

function handlePositionParam(container, position) {
  if (position in swalClasses) {
    addClass(container, swalClasses[position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }
}

function handleGrowParam(container, grow) {
  if (grow && typeof grow === 'string') {
    var growClass = "grow-".concat(grow);

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }
}

var renderContainer = function renderContainer(instance, params) {
  var container = getContainer();

  if (!container) {
    return;
  }

  handleBackdropParam(container, params.backdrop);

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  }

  handlePositionParam(container, params.position);
  handleGrowParam(container, params.grow); // Custom class

  applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

  var queueStep = document.body.getAttribute('data-swal2-queue-step');

  if (queueStep) {
    container.setAttribute('data-queue-step', queueStep);
    document.body.removeAttribute('data-swal2-queue-step');
  }
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};

var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
var renderInput = function renderInput(instance, params) {
  var content = getContent();
  var innerParams = privateProps.innerParams.get(instance);
  var rerender = !innerParams || params.input !== innerParams.input;
  inputTypes.forEach(function (inputType) {
    var inputClass = swalClasses[inputType];
    var inputContainer = getChildByClass(content, inputClass); // set attributes

    setAttributes(inputType, params.inputAttributes); // set class

    inputContainer.className = inputClass;

    if (rerender) {
      hide(inputContainer);
    }
  });

  if (params.input) {
    if (rerender) {
      showInput(params);
    } // set custom class


    setCustomClass(params);
  }
};

var showInput = function showInput(params) {
  if (!renderInputType[params.input]) {
    return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
  }

  var inputContainer = getInputContainer(params.input);
  var input = renderInputType[params.input](inputContainer, params);
  show(input); // input autofocus

  setTimeout(function () {
    focusInput(input);
  });
};

var removeAttributes = function removeAttributes(input) {
  for (var i = 0; i < input.attributes.length; i++) {
    var attrName = input.attributes[i].name;

    if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
      input.removeAttribute(attrName);
    }
  }
};

var setAttributes = function setAttributes(inputType, inputAttributes) {
  var input = getInput(getContent(), inputType);

  if (!input) {
    return;
  }

  removeAttributes(input);

  for (var attr in inputAttributes) {
    // Do not set a placeholder for <input type="range">
    // it'll crash Edge, #1298
    if (inputType === 'range' && attr === 'placeholder') {
      continue;
    }

    input.setAttribute(attr, inputAttributes[attr]);
  }
};

var setCustomClass = function setCustomClass(params) {
  var inputContainer = getInputContainer(params.input);

  if (params.customClass) {
    addClass(inputContainer, params.customClass.input);
  }
};

var setInputPlaceholder = function setInputPlaceholder(input, params) {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder;
  }
};

var getInputContainer = function getInputContainer(inputType) {
  var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
  return getChildByClass(getContent(), inputClass);
};

var renderInputType = {};

renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
  if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
    input.value = params.inputValue;
  } else if (!isPromise(params.inputValue)) {
    warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
  }

  setInputPlaceholder(input, params);
  input.type = params.input;
  return input;
};

renderInputType.file = function (input, params) {
  setInputPlaceholder(input, params);
  return input;
};

renderInputType.range = function (range, params) {
  var rangeInput = range.querySelector('input');
  var rangeOutput = range.querySelector('output');
  rangeInput.value = params.inputValue;
  rangeInput.type = params.input;
  rangeOutput.value = params.inputValue;
  return range;
};

renderInputType.select = function (select, params) {
  select.innerHTML = '';

  if (params.inputPlaceholder) {
    var placeholder = document.createElement('option');
    placeholder.innerHTML = params.inputPlaceholder;
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);
  }

  return select;
};

renderInputType.radio = function (radio) {
  radio.innerHTML = '';
  return radio;
};

renderInputType.checkbox = function (checkboxContainer, params) {
  var checkbox = getInput(getContent(), 'checkbox');
  checkbox.value = 1;
  checkbox.id = swalClasses.checkbox;
  checkbox.checked = Boolean(params.inputValue);
  var label = checkboxContainer.querySelector('span');
  label.innerHTML = params.inputPlaceholder;
  return checkboxContainer;
};

renderInputType.textarea = function (textarea, params) {
  textarea.value = params.inputValue;
  setInputPlaceholder(textarea, params);

  if ('MutationObserver' in window) {
    // #1699
    var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
    var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

    var outputsize = function outputsize() {
      var contentWidth = textarea.offsetWidth + popupPadding;

      if (contentWidth > initialPopupWidth) {
        getPopup().style.width = "".concat(contentWidth, "px");
      } else {
        getPopup().style.width = null;
      }
    };

    new MutationObserver(outputsize).observe(textarea, {
      attributes: true,
      attributeFilter: ['style']
    });
  }

  return textarea;
};

var renderContent = function renderContent(instance, params) {
  var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content);
    show(content, 'block'); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content, 'block'); // No content
  } else {
    hide(content);
  }

  renderInput(instance, params); // Custom class

  applyCustomClass(getContent(), params, 'content');
};

var renderFooter = function renderFooter(instance, params) {
  var footer = getFooter();
  toggle(footer, params.footer);

  if (params.footer) {
    parseHtmlToContainer(params.footer, footer);
  } // Custom class


  applyCustomClass(footer, params, 'footer');
};

var renderCloseButton = function renderCloseButton(instance, params) {
  var closeButton = getCloseButton();
  closeButton.innerHTML = params.closeButtonHtml; // Custom class

  applyCustomClass(closeButton, params, 'closeButton');
  toggle(closeButton, params.showCloseButton);
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
};

var renderIcon = function renderIcon(instance, params) {
  var innerParams = privateProps.innerParams.get(instance); // if the give icon already rendered, apply the custom class without re-rendering the icon

  if (innerParams && params.icon === innerParams.icon && getIcon()) {
    applyCustomClass(getIcon(), params, 'icon');
    return;
  }

  hideAllIcons();

  if (!params.icon) {
    return;
  }

  if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
    var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
    show(icon); // Custom or default content

    setContent(icon, params);
    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon'); // Animate icon

    addClass(icon, params.showClass.icon);
  } else {
    error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
  }
};

var hideAllIcons = function hideAllIcons() {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }
}; // Adjust success icon background color to match the popup background color


var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
  var popup = getPopup();
  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }
};

var setContent = function setContent(icon, params) {
  icon.innerHTML = '';

  if (params.iconHtml) {
    icon.innerHTML = iconContent(params.iconHtml);
  } else if (params.icon === 'success') {
    icon.innerHTML = "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ";
  } else if (params.icon === 'error') {
    icon.innerHTML = "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ";
  } else {
    var defaultIconHtml = {
      question: '?',
      warning: '!',
      info: 'i'
    };
    icon.innerHTML = iconContent(defaultIconHtml[params.icon]);
  }
};

var iconContent = function iconContent(content) {
  return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
};

var renderImage = function renderImage(instance, params) {
  var image = getImage();

  if (!params.imageUrl) {
    return hide(image);
  }

  show(image); // Src, alt

  image.setAttribute('src', params.imageUrl);
  image.setAttribute('alt', params.imageAlt); // Width, height

  applyNumericalStyle(image, 'width', params.imageWidth);
  applyNumericalStyle(image, 'height', params.imageHeight); // Class

  image.className = swalClasses.image;
  applyCustomClass(image, params, 'image');
};

var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var Swal = this;
  currentSteps = steps;

  var resetAndResolve = function resetAndResolve(resolve, value) {
    currentSteps = [];
    resolve(value);
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        Swal.fire(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetAndResolve(resolve, {
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetAndResolve(resolve, {
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return getContainer().getAttribute('data-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

var createStepElement = function createStepElement(step) {
  var stepEl = document.createElement('li');
  addClass(stepEl, swalClasses['progress-step']);
  stepEl.innerHTML = step;
  return stepEl;
};

var createLineElement = function createLineElement(params) {
  var lineEl = document.createElement('li');
  addClass(lineEl, swalClasses['progress-step-line']);

  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance;
  }

  return lineEl;
};

var renderProgressSteps = function renderProgressSteps(instance, params) {
  var progressStepsContainer = getProgressSteps();

  if (!params.progressSteps || params.progressSteps.length === 0) {
    return hide(progressStepsContainer);
  }

  show(progressStepsContainer);
  progressStepsContainer.innerHTML = '';
  var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

  if (currentProgressStep >= params.progressSteps.length) {
    warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
  }

  params.progressSteps.forEach(function (step, index) {
    var stepEl = createStepElement(step);
    progressStepsContainer.appendChild(stepEl);

    if (index === currentProgressStep) {
      addClass(stepEl, swalClasses['active-progress-step']);
    }

    if (index !== params.progressSteps.length - 1) {
      var lineEl = createLineElement(step);
      progressStepsContainer.appendChild(lineEl);
    }
  });
};

var renderTitle = function renderTitle(instance, params) {
  var title = getTitle();
  toggle(title, params.title || params.titleText);

  if (params.title) {
    parseHtmlToContainer(params.title, title);
  }

  if (params.titleText) {
    title.innerText = params.titleText;
  } // Custom class


  applyCustomClass(title, params, 'title');
};

var renderHeader = function renderHeader(instance, params) {
  var header = getHeader(); // Custom class

  applyCustomClass(header, params, 'header'); // Progress steps

  renderProgressSteps(instance, params); // Icon

  renderIcon(instance, params); // Image

  renderImage(instance, params); // Title

  renderTitle(instance, params); // Close button

  renderCloseButton(instance, params);
};

var renderPopup = function renderPopup(instance, params) {
  var popup = getPopup(); // Width

  applyNumericalStyle(popup, 'width', params.width); // Padding

  applyNumericalStyle(popup, 'padding', params.padding); // Background

  if (params.background) {
    popup.style.background = params.background;
  } // Classes


  addClasses(popup, params);
};

var addClasses = function addClasses(popup, params) {
  // Default Class + showClass when updating Swal.update({})
  popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom class


  applyCustomClass(popup, params, 'popup');

  if (typeof params.customClass === 'string') {
    addClass(popup, params.customClass);
  } // Icon class (#1842)


  if (params.icon) {
    addClass(popup, swalClasses["icon-".concat(params.icon)]);
  }
};

var render = function render(instance, params) {
  renderPopup(instance, params);
  renderContainer(instance, params);
  renderHeader(instance, params);
  renderContent(instance, params);
  renderActions(instance, params);
  renderFooter(instance, params);

  if (typeof params.onRender === 'function') {
    params.onRender(getPopup());
  }
};

/*
 * Global function to determine if SweetAlert2 popup is shown
 */

var isVisible$1 = function isVisible$$1() {
  return isVisible(getPopup());
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton() && getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton() && getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin(mixinParams) {
  var MixinSwal =
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this);

  return MixinSwal;
}

/**
 * Show spinner instead of Confirm button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal.fire();
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  show(actions);
  show(confirmButton, 'inline-block');
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var focusPreviousActiveElement = function focusPreviousActiveElement() {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus();
    globalState.previousActiveElement = null;
  } else if (document.body) {
    document.body.focus();
  }
}; // Restore previous active (focused) element


var restoreActiveElement = function restoreActiveElement() {
  return new Promise(function (resolve) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      focusPreviousActiveElement();
      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var stopTimer = function stopTimer() {
  if (globalState.timeout) {
    stopTimerProgressBar();
    return globalState.timeout.stop();
  }
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var resumeTimer = function resumeTimer() {
  if (globalState.timeout) {
    var remaining = globalState.timeout.start();
    animateTimerProgressBar(remaining);
    return remaining;
  }
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var toggleTimer = function toggleTimer() {
  var timer = globalState.timeout;
  return timer && (timer.running ? stopTimer() : resumeTimer());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */

var increaseTimer = function increaseTimer(n) {
  if (globalState.timeout) {
    var remaining = globalState.timeout.increase(n);
    animateTimerProgressBar(remaining, true);
    return remaining;
  }
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */

var isTimerRunning = function isTimerRunning() {
  return globalState.timeout && globalState.timeout.isRunning();
};

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  icon: undefined,
  iconHtml: undefined,
  toast: false,
  animation: true,
  showClass: {
    popup: 'swal2-show',
    backdrop: 'swal2-backdrop-show',
    icon: 'swal2-icon-show'
  },
  hideClass: {
    popup: 'swal2-hide',
    backdrop: 'swal2-backdrop-hide',
    icon: 'swal2-icon-hide'
  },
  customClass: undefined,
  target: 'body',
  backdrop: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: undefined,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: undefined,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: undefined,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonHtml: '&times;',
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: undefined,
  imageWidth: undefined,
  imageHeight: undefined,
  imageAlt: '',
  timer: undefined,
  timerProgressBar: false,
  width: undefined,
  padding: undefined,
  background: undefined,
  input: undefined,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputAttributes: {},
  inputValidator: undefined,
  validationMessage: undefined,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: undefined,
  progressStepsDistance: undefined,
  onBeforeOpen: undefined,
  onOpen: undefined,
  onRender: undefined,
  onClose: undefined,
  onAfterClose: undefined,
  scrollbarPadding: true
};
var updatableParams = ['title', 'titleText', 'text', 'html', 'icon', 'customClass', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeight', 'imageAlt', 'progressSteps', 'currentProgressStep'];
var deprecatedParams = {
  animation: 'showClass" and "hideClass'
};
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
};
/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */

var isUpdatableParameter = function isUpdatableParameter(paramName) {
  return updatableParams.indexOf(paramName) !== -1;
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams[paramName];
};

var checkIfParamIsValid = function checkIfParamIsValid(param) {
  if (!isValidParameter(param)) {
    warn("Unknown parameter \"".concat(param, "\""));
  }
};

var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
  if (toastIncompatibleParams.indexOf(param) !== -1) {
    warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
  }
};

var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
  if (isDeprecatedParameter(param)) {
    warnAboutDepreation(param, isDeprecatedParameter(param));
  }
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */


var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    checkIfParamIsValid(param);

    if (params.toast) {
      checkIfToastParamIsValid(param);
    }

    checkIfParamIsDeprecated(param);
  }
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isUpdatableParameter: isUpdatableParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getHtmlContainer: getHtmlContainer,
	getImage: getImage,
	getIcon: getIcon,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getHeader: getHeader,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	getValidationMessage: getValidationMessage,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft,
	stopTimer: stopTimer,
	resumeTimer: resumeTimer,
	toggleTimer: toggleTimer,
	increaseTimer: increaseTimer,
	isTimerRunning: isTimerRunning
});

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  // do nothing if popup is closed
  var innerParams = privateProps.innerParams.get(this);

  if (!innerParams) {
    return;
  }

  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput$1(instance) {
  var innerParams = privateProps.innerParams.get(instance || this);
  var domCache = privateProps.domCache.get(instance || this);

  if (!domCache) {
    return null;
  }

  return getInput(domCache.content, innerParams.input);
}

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = "".concat(offset * -1, "px");
    addClass(document.body, swalClasses.iosfix);
    lockBodyScroll();
  }
};
/* istanbul ignore next */

var lockBodyScroll = function lockBodyScroll() {
  // #1246
  var container = getContainer();
  var preventTouchMove;

  container.ontouchstart = function (e) {
    preventTouchMove = e.target === container || !isScrollable(container) && e.target.tagName !== 'INPUT' // #1603
    ;
  };

  container.ontouchmove = function (e) {
    if (preventTouchMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
};
/* istanbul ignore next */


var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}; // Fix IE11 centering sweetalert2/issues/933

/* istanbul ignore next */


var fixVerticalPositionIE = function fixVerticalPositionIE() {
  var container = getContainer();
  var popup = getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};
/* istanbul ignore next */


var IEfix = function IEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
/* istanbul ignore next */

var undoIEfix = function undoIEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || contains(el, getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateMethods = {
  swalPromiseResolve: new WeakMap()
};

/*
 * Instance method to close sweetAlert
 */

function removePopupAndResetState(instance, container, isToast, onAfterClose) {
  if (isToast) {
    triggerOnAfterCloseAndDispose(instance, onAfterClose);
  } else {
    restoreActiveElement().then(function () {
      return triggerOnAfterCloseAndDispose(instance, onAfterClose);
    });
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }

  if (container.parentNode) {
    container.parentNode.removeChild(container);
  }

  if (isModal()) {
    undoScrollbar();
    undoIOSfix();
    undoIEfix();
    unsetAriaHidden();
  }

  removeBodyClasses();
}

function removeBodyClasses() {
  removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
}

function disposeSwal(instance) {
  // Unset this.params so GC will dispose it (#1569)
  delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

  delete globalState.keydownHandler;
  delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

  unsetWeakMaps(privateProps);
  unsetWeakMaps(privateMethods);
}

function close(resolveValue) {
  var popup = getPopup();

  if (!popup) {
    return;
  }

  var innerParams = privateProps.innerParams.get(this);

  if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
    return;
  }

  var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
  removeClass(popup, innerParams.showClass.popup);
  addClass(popup, innerParams.hideClass.popup);
  var backdrop = getContainer();
  removeClass(backdrop, innerParams.showClass.backdrop);
  addClass(backdrop, innerParams.hideClass.backdrop);
  handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

  swalPromiseResolve(resolveValue || {});
}

var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
  var container = getContainer(); // If animation is supported, animate

  var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
  var onClose = innerParams.onClose,
      onAfterClose = innerParams.onAfterClose;

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  }

  if (animationIsSupported) {
    animatePopup(instance, popup, container, onAfterClose);
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState(instance, container, isToast(), onAfterClose);
  }
};

var animatePopup = function animatePopup(instance, popup, container, onAfterClose) {
  globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), onAfterClose);
  popup.addEventListener(animationEndEvent, function (e) {
    if (e.target === popup) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    }
  });
};

var unsetWeakMaps = function unsetWeakMaps(obj) {
  for (var i in obj) {
    obj[i] = new WeakMap();
  }
};

var triggerOnAfterCloseAndDispose = function triggerOnAfterCloseAndDispose(instance, onAfterClose) {
  setTimeout(function () {
    if (onAfterClose !== null && typeof onAfterClose === 'function') {
      onAfterClose();
    }

    if (!getPopup()) {
      disposeSwal(instance);
    }
  });
};

function setButtonsDisabled(instance, buttons, disabled) {
  var domCache = privateProps.domCache.get(instance);
  buttons.forEach(function (button) {
    domCache[button].disabled = disabled;
  });
}

function setInputDisabled(input, disabled) {
  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled;
    }
  } else {
    input.disabled = disabled;
  }
}

function enableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
}
function disableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
}
function enableInput() {
  return setInputDisabled(this.getInput(), false);
}
function disableInput() {
  return setInputDisabled(this.getInput(), true);
}

function showValidationMessage(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationMessage.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationMessage);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation message

function resetValidationMessage$1() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

function getProgressSteps$1() {
  var domCache = privateProps.domCache.get(this);
  return domCache.progressSteps;
}

var Timer =
/*#__PURE__*/
function () {
  function Timer(callback, delay) {
    _classCallCheck(this, Timer);

    this.callback = callback;
    this.remaining = delay;
    this.running = false;
    this.start();
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.started;
      }

      return this.remaining;
    }
  }, {
    key: "increase",
    value: function increase(n) {
      var running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "getTimerLeft",
    value: function getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.running;
    }
  }]);

  return Timer;
}();

var defaultInputValidators = {
  email: function email(string, validationMessage) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
  },
  url: function url(string, validationMessage) {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
  }
};

function setDefaultInputValidators(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = defaultInputValidators[key];
      }
    });
  }
}

function validateCustomTargetElement(params) {
  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }
}
/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */


function setParameters(params) {
  setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  } // params.animation will be actually used in renderPopup.js
  // but in case when params.animation is a function, we need to call that function
  // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
  // inside the params.animation function


  params.animation = callIfFunction(params.animation);
  validateCustomTargetElement(params); // Replace newlines with <br> in title

  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />');
  }

  init(params);
}

function swalOpenAnimationFinished(popup, container) {
  popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
  container.style.overflowY = 'auto';
}
/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */


var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

  setScrollingVisibility(container, popup);

  if (isModal()) {
    fixScrollContainer(container, params.scrollbarPadding);
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (typeof params.onOpen === 'function') {
    setTimeout(function () {
      return params.onOpen(popup);
    });
  }
};

var setScrollingVisibility = function setScrollingVisibility(container, popup) {
  if (animationEndEvent && hasCssAnimation(popup)) {
    container.style.overflowY = 'hidden';
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        swalOpenAnimationFinished.bind(null, popup, container);
      }
    });
  } else {
    container.style.overflowY = 'auto';
  }
};

var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding) {
  iOSfix();
  IEfix();
  setAriaHidden();

  if (scrollbarPadding) {
    fixScrollbar();
  } // sweetalert2/issues/1247


  setTimeout(function () {
    container.scrollTop = 0;
  });
};

var addClasses$1 = function addClasses(container, popup, params) {
  addClass(container, params.showClass.backdrop);
  show(popup); // Animate popup right after showing it

  addClass(popup, params.showClass.popup);
  addClass([document.documentElement, document.body], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }
};

var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
  if (params.input === 'select' || params.input === 'radio') {
    handleInputOptions(instance, params);
  } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && isPromise(params.inputValue)) {
    handleInputValue(instance, params);
  }
};
var getInputValue = function getInputValue(instance, innerParams) {
  var input = instance.getInput();

  if (!input) {
    return null;
  }

  switch (innerParams.input) {
    case 'checkbox':
      return getCheckboxValue(input);

    case 'radio':
      return getRadioValue(input);

    case 'file':
      return getFileValue(input);

    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value;
  }
};

var getCheckboxValue = function getCheckboxValue(input) {
  return input.checked ? 1 : 0;
};

var getRadioValue = function getRadioValue(input) {
  return input.checked ? input.value : null;
};

var getFileValue = function getFileValue(input) {
  return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
};

var handleInputOptions = function handleInputOptions(instance, params) {
  var content = getContent();

  var processInputOptions = function processInputOptions(inputOptions) {
    return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
  };

  if (isPromise(params.inputOptions)) {
    showLoading();
    params.inputOptions.then(function (inputOptions) {
      instance.hideLoading();
      processInputOptions(inputOptions);
    });
  } else if (_typeof(params.inputOptions) === 'object') {
    processInputOptions(params.inputOptions);
  } else {
    error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
  }
};

var handleInputValue = function handleInputValue(instance, params) {
  var input = instance.getInput();
  hide(input);
  params.inputValue.then(function (inputValue) {
    input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
    show(input);
    input.focus();
    instance.hideLoading();
  })["catch"](function (err) {
    error("Error in inputValue promise: ".concat(err));
    input.value = '';
    show(input);
    input.focus();
    instance.hideLoading();
  });
};

var populateInputOptions = {
  select: function select(content, inputOptions, params) {
    var select = getChildByClass(content, swalClasses.select);
    inputOptions.forEach(function (inputOption) {
      var optionValue = inputOption[0];
      var optionLabel = inputOption[1];
      var option = document.createElement('option');
      option.value = optionValue;
      option.innerHTML = optionLabel;

      if (params.inputValue.toString() === optionValue.toString()) {
        option.selected = true;
      }

      select.appendChild(option);
    });
    select.focus();
  },
  radio: function radio(content, inputOptions, params) {
    var radio = getChildByClass(content, swalClasses.radio);
    inputOptions.forEach(function (inputOption) {
      var radioValue = inputOption[0];
      var radioLabel = inputOption[1];
      var radioInput = document.createElement('input');
      var radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;

      if (params.inputValue.toString() === radioValue.toString()) {
        radioInput.checked = true;
      }

      var label = document.createElement('span');
      label.innerHTML = radioLabel;
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    var radios = radio.querySelectorAll('input');

    if (radios.length) {
      radios[0].focus();
    }
  }
};
/**
 * Converts `inputOptions` into an array of `[value, label]`s
 * @param inputOptions
 */

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};

var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
  instance.disableButtons();

  if (innerParams.input) {
    handleConfirmWithInput(instance, innerParams);
  } else {
    confirm(instance, innerParams, true);
  }
};
var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
  instance.disableButtons();
  dismissWith(DismissReason.cancel);
};

var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
  var inputValue = getInputValue(instance, innerParams);

  if (innerParams.inputValidator) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return innerParams.inputValidator(inputValue, innerParams.validationMessage);
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  } else if (!instance.getInput().checkValidity()) {
    instance.enableButtons();
    instance.showValidationMessage(innerParams.validationMessage);
  } else {
    confirm(instance, innerParams, inputValue);
  }
};

var succeedWith = function succeedWith(instance, value) {
  instance.closePopup({
    value: value
  });
};

var confirm = function confirm(instance, innerParams, value) {
  if (innerParams.showLoaderOnConfirm) {
    showLoading(); // TODO: make showLoading an *instance* method
  }

  if (innerParams.preConfirm) {
    instance.resetValidationMessage();
    var preConfirmPromise = Promise.resolve().then(function () {
      return innerParams.preConfirm(value, innerParams.validationMessage);
    });
    preConfirmPromise.then(function (preConfirmValue) {
      if (isVisible(getValidationMessage()) || preConfirmValue === false) {
        instance.hideLoading();
      } else {
        succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
      }
    });
  } else {
    succeedWith(instance, value);
  }
};

var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
  if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }

  if (!innerParams.toast) {
    globalState.keydownHandler = function (e) {
      return keydownHandler(instance, e, innerParams, dismissWith);
    };

    globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
    globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
    globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = true;
  }
}; // Focus handling

var setFocus = function setFocus(innerParams, index, increment) {
  var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

  for (var i = 0; i < focusableElements.length; i++) {
    index = index + increment; // rollover to first item

    if (index === focusableElements.length) {
      index = 0; // go to last item
    } else if (index === -1) {
      index = focusableElements.length - 1;
    }

    return focusableElements[index].focus();
  } // no visible focusable elements, focus the popup


  getPopup().focus();
};
var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
];
var escKeys = ['Escape', 'Esc' // IE11
];

var keydownHandler = function keydownHandler(instance, e, innerParams, dismissWith) {
  if (innerParams.stopKeydownPropagation) {
    e.stopPropagation();
  } // ENTER


  if (e.key === 'Enter') {
    handleEnter(instance, e, innerParams); // TAB
  } else if (e.key === 'Tab') {
    handleTab(e, innerParams); // ARROWS - switch focus between buttons
  } else if (arrowKeys.indexOf(e.key) !== -1) {
    handleArrows(); // ESC
  } else if (escKeys.indexOf(e.key) !== -1) {
    handleEsc(e, innerParams, dismissWith);
  }
};

var handleEnter = function handleEnter(instance, e, innerParams) {
  // #720 #721
  if (e.isComposing) {
    return;
  }

  if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
    if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
      return; // do not submit
    }

    clickConfirm();
    e.preventDefault();
  }
};

var handleTab = function handleTab(e, innerParams) {
  var targetElement = e.target;
  var focusableElements = getFocusableElements();
  var btnIndex = -1;

  for (var i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i;
      break;
    }
  }

  if (!e.shiftKey) {
    // Cycle to the next button
    setFocus(innerParams, btnIndex, 1);
  } else {
    // Cycle to the prev button
    setFocus(innerParams, btnIndex, -1);
  }

  e.stopPropagation();
  e.preventDefault();
};

var handleArrows = function handleArrows() {
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // focus Cancel button if Confirm button is currently focused

  if (document.activeElement === confirmButton && isVisible(cancelButton)) {
    cancelButton.focus(); // and vice versa
  } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
    confirmButton.focus();
  }
};

var handleEsc = function handleEsc(e, innerParams, dismissWith) {
  if (callIfFunction(innerParams.allowEscapeKey)) {
    e.preventDefault();
    dismissWith(DismissReason.esc);
  }
};

var handlePopupClick = function handlePopupClick(domCache, innerParams, dismissWith) {
  if (innerParams.toast) {
    handleToastClick(domCache, innerParams, dismissWith);
  } else {
    // Ignore click events that had mousedown on the popup but mouseup on the container
    // This can happen when the user drags a slider
    handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

    handleContainerMousedown(domCache);
    handleModalClick(domCache, innerParams, dismissWith);
  }
};

var handleToastClick = function handleToastClick(domCache, innerParams, dismissWith) {
  // Closing toast by internal click
  domCache.popup.onclick = function () {
    if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
      return;
    }

    dismissWith(DismissReason.close);
  };
};

var ignoreOutsideClick = false;

var handleModalMousedown = function handleModalMousedown(domCache) {
  domCache.popup.onmousedown = function () {
    domCache.container.onmouseup = function (e) {
      domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
      // have any other direct children aside of the popup

      if (e.target === domCache.container) {
        ignoreOutsideClick = true;
      }
    };
  };
};

var handleContainerMousedown = function handleContainerMousedown(domCache) {
  domCache.container.onmousedown = function () {
    domCache.popup.onmouseup = function (e) {
      domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

      if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true;
      }
    };
  };
};

var handleModalClick = function handleModalClick(domCache, innerParams, dismissWith) {
  domCache.container.onclick = function (e) {
    if (ignoreOutsideClick) {
      ignoreOutsideClick = false;
      return;
    }

    if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
      dismissWith(DismissReason.backdrop);
    }
  };
};

function _main(userParams) {
  showWarningsForParams(userParams); // Check if there is another Swal closing

  if (getPopup() && globalState.swalCloseEventFinishedCallback) {
    globalState.swalCloseEventFinishedCallback();
    delete globalState.swalCloseEventFinishedCallback;
  } // Check if there is a swal disposal defer timer


  if (globalState.deferDisposalTimer) {
    clearTimeout(globalState.deferDisposalTimer);
    delete globalState.deferDisposalTimer;
  }

  var innerParams = prepareParams(userParams);
  setParameters(innerParams);
  Object.freeze(innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = populateDomCache(this);
  render(this, innerParams);
  privateProps.innerParams.set(this, innerParams);
  return swalPromise(this, domCache, innerParams);
}

var prepareParams = function prepareParams(userParams) {
  var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

  var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

  var params = _extends({}, defaultParams, userParams);

  params.showClass = showClass;
  params.hideClass = hideClass; // @deprecated

  if (userParams.animation === false) {
    params.showClass = {
      popup: '',
      backdrop: 'swal2-backdrop-show swal2-noanimation'
    };
    params.hideClass = {};
  }

  return params;
};

var swalPromise = function swalPromise(instance, domCache, innerParams) {
  return new Promise(function (resolve) {
    // functions to handle all closings/dismissals
    var dismissWith = function dismissWith(dismiss) {
      instance.closePopup({
        dismiss: dismiss
      });
    };

    privateMethods.swalPromiseResolve.set(instance, resolve);
    setupTimer(globalState, innerParams, dismissWith);

    domCache.confirmButton.onclick = function () {
      return handleConfirmButtonClick(instance, innerParams);
    };

    domCache.cancelButton.onclick = function () {
      return handleCancelButtonClick(instance, dismissWith);
    };

    domCache.closeButton.onclick = function () {
      return dismissWith(DismissReason.close);
    };

    handlePopupClick(domCache, innerParams, dismissWith);
    addKeydownHandler(instance, globalState, innerParams, dismissWith);

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    }

    handleInputOptionsAndValue(instance, innerParams);
    openPopup(innerParams);
    initFocus(domCache, innerParams); // Scroll container to top on open (#1247)

    domCache.container.scrollTop = 0;
  });
};

var populateDomCache = function populateDomCache(instance) {
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(instance, domCache);
  return domCache;
};

var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
  var timerProgressBar = getTimerProgressBar();
  hide(timerProgressBar);

  if (innerParams.timer) {
    globalState$$1.timeout = new Timer(function () {
      dismissWith('timer');
      delete globalState$$1.timeout;
    }, innerParams.timer);

    if (innerParams.timerProgressBar) {
      show(timerProgressBar);
      setTimeout(function () {
        animateTimerProgressBar(innerParams.timer);
      });
    }
  }
};

var initFocus = function initFocus(domCache, innerParams) {
  if (innerParams.toast) {
    return;
  }

  if (!callIfFunction(innerParams.allowEnterKey)) {
    return blurActiveElement();
  }

  if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
    return domCache.cancelButton.focus();
  }

  if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
    return domCache.confirmButton.focus();
  }

  setFocus(innerParams, -1, 1);
};

var blurActiveElement = function blurActiveElement() {
  if (document.activeElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }
};

/**
 * Updates popup parameters.
 */

function update(params) {
  var popup = getPopup();
  var innerParams = privateProps.innerParams.get(this);

  if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
    return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
  }

  var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

  Object.keys(params).forEach(function (param) {
    if (Swal.isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param];
    } else {
      warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
    }
  });

  var updatedParams = _extends({}, innerParams, validUpdatableParams);

  render(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
  Object.defineProperties(this, {
    params: {
      value: _extends({}, this.params, params),
      writable: false,
      enumerable: true
    }
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput$1,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationMessage: showValidationMessage,
	resetValidationMessage: resetValidationMessage$1,
	getProgressSteps: getProgressSteps$1,
	_main: _main,
	update: update
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  currentInstance = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true,
      configurable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled);
};

SweetAlert.prototype["finally"] = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise["finally"](onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = '9.5.3';

var Swal = SweetAlert;
Swal["default"] = Swal;

return Swal;

})));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}.swal2-popup.swal2-toast .swal2-title{-webkit-box-flex:1;flex-grow:1;-webkit-box-pack:start;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{-webkit-box-pack:start;justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:-webkit-box;display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow-x:hidden;-webkit-transition:background-color .1s;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{-webkit-box-align:start;align-items:flex-start;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-center{-webkit-box-align:center;align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{-webkit-box-align:center;align-items:center;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{-webkit-box-align:center;align-items:center;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:start;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{-webkit-box-align:end;align-items:flex-end;-webkit-box-pack:end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-self:stretch;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container.swal2-grow-column{-webkit-box-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{-webkit-box-align:center;align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{-webkit-box-align:start;align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{-webkit-box-align:end;align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:-webkit-box!important;display:flex!important;-webkit-box-flex:1;flex:1;align-content:center;-webkit-box-pack:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:-webkit-box;display:flex;z-index:1;flex-wrap:wrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.1)),to(rgba(0,0,0,.1)));background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.2)),to(rgba(0,0,0,.2)));background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{-webkit-box-pack:center;justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar{position:absolute;bottom:0;left:0;width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;-webkit-box-pack:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;-webkit-transition:color .1s ease-out;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;-webkit-box-pack:center;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;-webkit-transition:border-color .3s,box-shadow .3s;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;-webkit-box-pack:center;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;-webkit-box-flex:1;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{-webkit-box-align:center;align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{-webkit-transition:none;transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:stretch;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{-webkit-box-flex:1;flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{-webkit-box-pack:center;justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(25)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26).Promise;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var require;/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   3.3.1
 */

(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  return typeof x === 'function' || typeof x === 'object' && x !== null;
}

function isFunction(x) {
  return typeof x === 'function';
}

var _isArray = undefined;
if (!Array.isArray) {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
} else {
  _isArray = Array.isArray;
}

var isArray = _isArray;

var len = 0;
var vertxNext = undefined;
var customSchedulerFn = undefined;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  return function () {
    vertxNext(flush);
  };
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var r = require;
    var vertx = __webpack_require__(28);
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = undefined;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var _arguments = arguments;

  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;

  if (_state) {
    (function () {
      var callback = _arguments[_state - 1];
      asap(function () {
        return invokeCallback(_state, child, callback, parent._result);
      });
    })();
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  _resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(16);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

var GET_THEN_ERROR = new ErrorObject();

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function getThen(promise) {
  try {
    return promise.then;
  } catch (error) {
    GET_THEN_ERROR.error = error;
    return GET_THEN_ERROR;
  }
}

function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
  try {
    then.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        _resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      _reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      _reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    _reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return _resolve(promise, value);
    }, function (reason) {
      return _reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$) {
  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$ === GET_THEN_ERROR) {
      _reject(promise, GET_THEN_ERROR.error);
    } else if (then$$ === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$)) {
      handleForeignThenable(promise, maybeThenable, then$$);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function _resolve(promise, value) {
  if (promise === value) {
    _reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    handleMaybeThenable(promise, value, getThen(value));
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function _reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;

  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = undefined,
      callback = undefined,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function ErrorObject() {
  this.error = null;
}

var TRY_CATCH_ERROR = new ErrorObject();

function tryCatch(callback, detail) {
  try {
    return callback(detail);
  } catch (e) {
    TRY_CATCH_ERROR.error = e;
    return TRY_CATCH_ERROR;
  }
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = undefined,
      error = undefined,
      succeeded = undefined,
      failed = undefined;

  if (hasCallback) {
    value = tryCatch(callback, detail);

    if (value === TRY_CATCH_ERROR) {
      failed = true;
      error = value.error;
      value = null;
    } else {
      succeeded = true;
    }

    if (promise === value) {
      _reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
    succeeded = true;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
      _resolve(promise, value);
    } else if (failed) {
      _reject(promise, error);
    } else if (settled === FULFILLED) {
      fulfill(promise, value);
    } else if (settled === REJECTED) {
      _reject(promise, value);
    }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      _resolve(promise, value);
    }, function rejectPromise(reason) {
      _reject(promise, reason);
    });
  } catch (e) {
    _reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function Enumerator(Constructor, input) {
  this._instanceConstructor = Constructor;
  this.promise = new Constructor(noop);

  if (!this.promise[PROMISE_ID]) {
    makePromise(this.promise);
  }

  if (isArray(input)) {
    this._input = input;
    this.length = input.length;
    this._remaining = input.length;

    this._result = new Array(this.length);

    if (this.length === 0) {
      fulfill(this.promise, this._result);
    } else {
      this.length = this.length || 0;
      this._enumerate();
      if (this._remaining === 0) {
        fulfill(this.promise, this._result);
      }
    }
  } else {
    _reject(this.promise, validationError());
  }
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
};

Enumerator.prototype._enumerate = function () {
  var length = this.length;
  var _input = this._input;

  for (var i = 0; this._state === PENDING && i < length; i++) {
    this._eachEntry(_input[i], i);
  }
};

Enumerator.prototype._eachEntry = function (entry, i) {
  var c = this._instanceConstructor;
  var resolve$$ = c.resolve;

  if (resolve$$ === resolve) {
    var _then = getThen(entry);

    if (_then === then && entry._state !== PENDING) {
      this._settledAt(entry._state, i, entry._result);
    } else if (typeof _then !== 'function') {
      this._remaining--;
      this._result[i] = entry;
    } else if (c === Promise) {
      var promise = new c(noop);
      handleMaybeThenable(promise, entry, _then);
      this._willSettleAt(promise, i);
    } else {
      this._willSettleAt(new c(function (resolve$$) {
        return resolve$$(entry);
      }), i);
    }
  } else {
    this._willSettleAt(resolve$$(entry), i);
  }
};

Enumerator.prototype._settledAt = function (state, i, value) {
  var promise = this.promise;

  if (promise._state === PENDING) {
    this._remaining--;

    if (state === REJECTED) {
      _reject(promise, value);
    } else {
      this._result[i] = value;
    }
  }

  if (this._remaining === 0) {
    fulfill(promise, this._result);
  }
};

Enumerator.prototype._willSettleAt = function (promise, i) {
  var enumerator = this;

  subscribe(promise, undefined, function (value) {
    return enumerator._settledAt(FULFILLED, i, value);
  }, function (reason) {
    return enumerator._settledAt(REJECTED, i, reason);
  });
};

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  _reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {function} resolver
  Useful for tooling.
  @constructor
*/
function Promise(resolver) {
  this[PROMISE_ID] = nextId();
  this._result = this._state = undefined;
  this._subscribers = [];

  if (noop !== resolver) {
    typeof resolver !== 'function' && needsResolver();
    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
  }
}

Promise.all = all;
Promise.race = race;
Promise.resolve = resolve;
Promise.reject = reject;
Promise._setScheduler = setScheduler;
Promise._setAsap = setAsap;
Promise._asap = asap;

Promise.prototype = {
  constructor: Promise,

  /**
    The primary way of interacting with a promise is through its `then` method,
    which registers callbacks to receive either a promise's eventual value or the
    reason why the promise cannot be fulfilled.
  
    ```js
    findUser().then(function(user){
      // user is available
    }, function(reason){
      // user is unavailable, and you are given the reason why
    });
    ```
  
    Chaining
    --------
  
    The return value of `then` is itself a promise.  This second, 'downstream'
    promise is resolved with the return value of the first promise's fulfillment
    or rejection handler, or rejected if the handler throws an exception.
  
    ```js
    findUser().then(function (user) {
      return user.name;
    }, function (reason) {
      return 'default name';
    }).then(function (userName) {
      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
      // will be `'default name'`
    });
  
    findUser().then(function (user) {
      throw new Error('Found user, but still unhappy');
    }, function (reason) {
      throw new Error('`findUser` rejected and we're unhappy');
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
    });
    ```
    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
  
    ```js
    findUser().then(function (user) {
      throw new PedagogicalException('Upstream error');
    }).then(function (value) {
      // never reached
    }).then(function (value) {
      // never reached
    }, function (reason) {
      // The `PedgagocialException` is propagated all the way down to here
    });
    ```
  
    Assimilation
    ------------
  
    Sometimes the value you want to propagate to a downstream promise can only be
    retrieved asynchronously. This can be achieved by returning a promise in the
    fulfillment or rejection handler. The downstream promise will then be pending
    until the returned promise is settled. This is called *assimilation*.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // The user's comments are now available
    });
    ```
  
    If the assimliated promise rejects, then the downstream promise will also reject.
  
    ```js
    findUser().then(function (user) {
      return findCommentsByAuthor(user);
    }).then(function (comments) {
      // If `findCommentsByAuthor` fulfills, we'll have the value here
    }, function (reason) {
      // If `findCommentsByAuthor` rejects, we'll have the reason here
    });
    ```
  
    Simple Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let result;
  
    try {
      result = findResult();
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
    findResult(function(result, err){
      if (err) {
        // failure
      } else {
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findResult().then(function(result){
      // success
    }, function(reason){
      // failure
    });
    ```
  
    Advanced Example
    --------------
  
    Synchronous Example
  
    ```javascript
    let author, books;
  
    try {
      author = findAuthor();
      books  = findBooksByAuthor(author);
      // success
    } catch(reason) {
      // failure
    }
    ```
  
    Errback Example
  
    ```js
  
    function foundBooks(books) {
  
    }
  
    function failure(reason) {
  
    }
  
    findAuthor(function(author, err){
      if (err) {
        failure(err);
        // failure
      } else {
        try {
          findBoooksByAuthor(author, function(books, err) {
            if (err) {
              failure(err);
            } else {
              try {
                foundBooks(books);
              } catch(reason) {
                failure(reason);
              }
            }
          });
        } catch(error) {
          failure(err);
        }
        // success
      }
    });
    ```
  
    Promise Example;
  
    ```javascript
    findAuthor().
      then(findBooksByAuthor).
      then(function(books){
        // found books
    }).catch(function(reason){
      // something went wrong
    });
    ```
  
    @method then
    @param {Function} onFulfilled
    @param {Function} onRejected
    Useful for tooling.
    @return {Promise}
  */
  then: then,

  /**
    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
    as the catch block of a try/catch statement.
  
    ```js
    function findAuthor(){
      throw new Error('couldn't find that author');
    }
  
    // synchronous
    try {
      findAuthor();
    } catch(reason) {
      // something went wrong
    }
  
    // async with promises
    findAuthor().catch(function(reason){
      // something went wrong
    });
    ```
  
    @method catch
    @param {Function} onRejection
    Useful for tooling.
    @return {Promise}
  */
  'catch': function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

function polyfill() {
    var local = undefined;

    if (typeof global !== 'undefined') {
        local = global;
    } else if (typeof self !== 'undefined') {
        local = self;
    } else {
        try {
            local = Function('return this')();
        } catch (e) {
            throw new Error('polyfill failed because global object is unavailable in this environment');
        }
    }

    var P = local.Promise;

    if (P) {
        var promiseToString = null;
        try {
            promiseToString = Object.prototype.toString.call(P.resolve());
        } catch (e) {
            // silently ignored
        }

        if (promiseToString === '[object Promise]' && !P.cast) {
            return;
        }
    }

    local.Promise = Promise;
}

polyfill();
// Strange compat..
Promise.polyfill = polyfill;
Promise.Promise = Promise;

return Promise;

})));
//# sourceMappingURL=es6-promise.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(27), __webpack_require__(2)))

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var xhr = __webpack_require__(30);

var _lang;

var _msg = {};

function getNavigatorLanguage() {
    var lang = navigator.language || navigator.userLanguage || navigator.systemLanguage;
    return lang.substr(0, 2);
}

function setLanguage(inputLang, callback) {
    _lang = inputLang;

    // 입력된 언어 설정 값이 없는 경우, 브라우저 언어 설정을 가져옴
    if (!_lang) {
        _lang = getNavigatorLanguage();
    }

    if (!_msg[inputLang]) {
        load(inputLang, callback);
    }
}

function load(inputLang, callback) {
    try {
        _msg = __webpack_require__(35)("./message." + inputLang + ".json");        
        window.KICA_CORPUS = _msg;
        callback();
        return;
    } catch (e) {
        console.log(e.message);
        callback("The language code: '" + _lang + "' is not supported.");
    }
}

function get(id) {
    if (arguments.length == 0) {
        return "Unknown error.";
    }

    var message = _msg ? _msg[id] : id;

    for (var i = 1; i < arguments.length; i++) {
        message = message.replace("{}", arguments[i]);
    }

    return message;
}

module.exports = {
    get: get,
    setLanguage: setLanguage
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(31)
var isFunction = __webpack_require__(32)
var parseHeaders = __webpack_require__(33)
var xtend = __webpack_require__(34)

module.exports = createXHR
// Allow use of default import syntax in TypeScript
module.exports.default = createXHR;
createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback)
        options.method = method.toUpperCase()
        return _createXHR(options)
    }
})

function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
        iterator(array[i])
    }
}

function isEmpty(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)) return false
    }
    return true
}

function initParams(uri, options, callback) {
    var params = uri

    if (isFunction(options)) {
        callback = options
        if (typeof uri === "string") {
            params = {uri:uri}
        }
    } else {
        params = xtend(options, {uri: uri})
    }

    params.callback = callback
    return params
}

function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback)
    return _createXHR(options)
}

function _createXHR(options) {
    if(typeof options.callback === "undefined"){
        throw new Error("callback argument missing")
    }

    var called = false
    var callback = function cbOnce(err, response, body){
        if(!called){
            called = true
            options.callback(err, response, body)
        }
    }

    function readystatechange() {
        if (xhr.readyState === 4) {
            setTimeout(loadFunc, 0)
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else {
            body = xhr.responseText || getXml(xhr)
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
        }
        evt.statusCode = 0
        return callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        if (aborted) return
        var status
        clearTimeout(timeoutTimer)
        if(options.useXDR && xhr.status===undefined) {
            //IE8 CORS GET successful response doesn't have a status field, but body is fine
            status = 200
        } else {
            status = (xhr.status === 1223 ? 204 : xhr.status)
        }
        var response = failureResponse
        var err = null

        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        return callback(err, response, response.body)
    }

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new createXHR.XDomainRequest()
        }else{
            xhr = new createXHR.XMLHttpRequest()
        }
    }

    var key
    var aborted
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer
    var failureResponse = {
        body: undefined,
        headers: {},
        statusCode: 0,
        method: method,
        url: uri,
        rawRequest: xhr
    }

    if ("json" in options && options.json !== false) {
        isJson = true
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
            body = JSON.stringify(options.json === true ? body : options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.onabort = function(){
        aborted = true;
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync, options.username, options.password)
    //has to be after open
    if(!sync) {
        xhr.withCredentials = !!options.withCredentials
    }
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            if (aborted) return
            aborted = true//IE9 may still call readystatechange
            xhr.abort("timeout")
            var e = new Error("XMLHttpRequest timeout")
            e.code = "ETIMEDOUT"
            errorFunc(e)
        }, options.timeout )
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }

    if ("beforeSend" in options &&
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    // Microsoft Edge browser sends "undefined" when send is called with undefined value.
    // XMLHttpRequest spec says to pass null as body to indicate no body
    // See https://github.com/naugtur/xhr/issues/100.
    xhr.send(body || null)

    return xhr


}

function getXml(xhr) {
    // xhr.responseXML will throw Exception "InvalidStateError" or "DOMException"
    // See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML.
    try {
        if (xhr.responseType === "document") {
            return xhr.responseXML
        }
        var firefoxBugTakenEffect = xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror"
        if (xhr.responseType === "" && !firefoxBugTakenEffect) {
            return xhr.responseXML
        }
    } catch (e) {}

    return null
}

function noop() {}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var trim = function(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  var headersArr = trim(headers).split('\n')

  for (var i = 0; i < headersArr.length; i++) {
    var row = headersArr[i]
    var index = row.indexOf(':')
    , key = trim(row.slice(0, index)).toLowerCase()
    , value = trim(row.slice(index + 1))

    if (typeof(result[key]) === 'undefined') {
      result[key] = value
    } else if (isArray(result[key])) {
      result[key].push(value)
    } else {
      result[key] = [ result[key], value ]
    }
  }

  return result
}


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./message.en.json": 36,
	"./message.ko.json": 37
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 35;

/***/ }),
/* 36 */
/***/ (function(module) {

module.exports = JSON.parse("{\"SELECT_CERT_HEADER\":\"Certificates Selection Dialog\",\"CERT_TABLE_LABEL\":\"Select a certificate.\",\"CERT_TABLE_THEAD1\":\"Category\",\"CERT_TABLE_THEAD2\":\"User\",\"CERT_TABLE_THEAD3\":\"Expiration\",\"CERT_TABLE_THEAD4\":\"Issuer\",\"CERT_PWD_LABEL\":\"Enter the password of the selected certificate.\",\"CERT_PWD_PLACEHOLDER\":\"The password of certificates is case-sensitive.\",\"CERT_PWD_DISABLED_PLACEHOLDER\":\"In this case, the password is not required.\",\"BUTTON_CONFIRM\":\"Confrim\",\"BUTTON_CANCEL\":\"Cancel\",\"BUTTON_OPEN_GUIDE\":\"Guide for browser certificates\",\"BUTTON_FIND_CERTIFICATE\":\"Add a certificate to browser\",\"IMPORT_CERT_TITLE\":\"Store the certificate\",\"IMPORT_CERT_PASSWORD_LABEL\":\"Enter the password of the certificate.\",\"IMPORT_CERT_TEXT\":\"The certificate will be stored in the browser storage.\",\"IMPORT_PFX_TITLE\":\"Add a certificate\",\"IMPORT_PFX_CONVERT_PFX_LABEL\":\"If can't find the certificate file\",\"IMPORT_PFX_CONVERT_PFX_DOWNLOAD\":\"Download Converting Program\",\"IMPORT_PFX_CONVERT_PFX_STEP1\":\", run this program.\",\"IMPORT_PFX_CONVERT_PFX_STEP2\":\"Select a certificate to use and enter the password. After that, press the button [Export]\",\"IMPORT_PFX_CONVERT_PFX_STEP3\":\"Save the file and note the path. After that, press the button [{}].\",\"IMPORT_PFX_FIND_BUTTON\":\"Find\",\"DROPZONE_TEXT_1\":\"To store and use a certificate\",\"DROPZONE_TEXT_2\":\"Drop the certificate file to here,\",\"DROPZONE_TEXT_3\":\"(bunch of signCert.der/signPri.key or *.pfx file)\",\"BROWSER_GUIDE_TITLE\":\"User Guide for Browser Certificates\",\"BROWSER_GUIDE_SUB_TITLE\":\"Browser certificates are stored in the browser storage used on the browser\",\"BROWSER_GUIDE_STORE_CERT_LABEL\":\"If there are no certificates, follow these steps.\",\"BROWSER_GUIDE_STORE_CERT_STEP1\":\"Drag & drop a certificate file\",\"BROWSER_GUIDE_STORE_CERT_STEP1_1\":\"Drag  the bunch of certificate files [signCert.der, signPri.key] or PKCS#12 file [.pfx or .p12]) and Drop it to the certificate table.\",\"BROWSER_GUIDE_STORE_CERT_STEP2\":\"Use [{}]\",\"BROWSER_GUIDE_STORE_CERT_STEP2_1\":\"Click the button [{}], and at the {} click the button [{}]. At the file explorer find PKCS#12 file [.pfx or.p12] and open it.\",\"BROWSER_GUIDE_STORE_CERT_STEP3\":\"In the case of PKCS#12 file, the password of the certificate is required.\",\"BROWSER_GUIDE_DELETE_CERT_LABEL\":\"Steps for clearing browser certificates\",\"BROWSER_GUIDE_DELETE_CERT_STEP1\":\"Open browser settings.\",\"BROWSER_GUIDE_DELETE_CERT_STEP2\":\"Find the options for browsing data.\",\"BROWSER_GUIDE_DELETE_CERT_STEP3\":\"Delete browser cookies and browsing data.\",\"BROWSER_DETAIL_MORE_BUTTON\":\"Here is more detials about browser certificates.\"}");

/***/ }),
/* 37 */
/***/ (function(module) {

module.exports = JSON.parse("{\"SELECT_CERT_HEADER\":\"인증서 선택\",\"CERT_TABLE_LABEL\":\"인증서 목록\",\"CERT_TABLE_THEAD1\":\"구분\",\"CERT_TABLE_THEAD2\":\"사용자\",\"CERT_TABLE_THEAD3\":\"만료일\",\"CERT_TABLE_THEAD4\":\"발급자\",\"CERT_PWD_LABEL\":\"인증서 비밀번호\",\"CERT_PWD_PLACEHOLDER\":\"인증서 비밀번호는 대소문자를 구분합니다.\",\"CERT_PWD_DISABLED_PLACEHOLDER\":\"해당 기능은 비밀번호를 필요로 하지 않습니다.\",\"BUTTON_CONFIRM\":\"확인\",\"BUTTON_CANCEL\":\"취소\",\"BUTTON_OPEN_GUIDE\":\"브라우저 인증서란?\",\"BUTTON_FIND_CERTIFICATE\":\"인증서 가져오기\",\"IMPORT_CERT_TITLE\":\"인증서 저장하기\",\"IMPORT_CERT_PASSWORD_LABEL\":\"인증서 비밀번호를 입력하세요.\",\"IMPORT_CERT_TEXT\":\"인증서가 브라우저 저장소에 저장됩니다.\",\"IMPORT_PFX_TITLE\":\"인증서 가져오기\",\"IMPORT_PFX_CONVERT_PFX_LABEL\":\"인증서가 저장된 위치를 모르는 경우\",\"IMPORT_PFX_CONVERT_PFX_DOWNLOAD\":\"인증서 변환 프로그램 다운로드\",\"IMPORT_PFX_CONVERT_PFX_STEP1\":\"를 눌러 인증서 변환\\n 프로그램을 다운로드하여 실행합니다.\",\"IMPORT_PFX_CONVERT_PFX_STEP2\":\"사용할 인증서를 선택한 후 인증서 암호를 입력하고 [내보내기] 버튼을 클릭합니다.\",\"IMPORT_PFX_CONVERT_PFX_STEP3\":\"인증서 파일(.pfx)을 찾기 쉬운 경로에 저장한 후 아래의 [인증서 가져오기]를 눌러 인증서 가져오기를 진행합니다.\",\"IMPORT_PFX_FIND_BUTTON\":\"인증서 찾기\",\"DROPZONE_TEXT_1\":\"인증서 파일 묶음을 끌어다 놓으면\",\"DROPZONE_TEXT_2\":\"인증서 저장 및 서명이 가능합니다.\",\"DROPZONE_TEXT_3\":\"(*.pfx, *.p12 또는 signCert.der/signPri.key 묶음)\",\"BROWSER_GUIDE_TITLE\":\"브라우저 인증서 이용 안내\",\"BROWSER_GUIDE_SUB_TITLE\":\"브라우저 인증서는 브라우저 저장소에 저장되며 사이트 데이터 삭제 시 삭제됩니다.\",\"BROWSER_GUIDE_STORE_CERT_LABEL\":\"브라우저에 인증서 저장하는 방법\",\"BROWSER_GUIDE_STORE_CERT_STEP1\":\"인증서 파일 끌어오기 (Drag & Drop)\",\"BROWSER_GUIDE_STORE_CERT_STEP1_1\":\"파일 탐색기에서 인증서 파일(인증서 묶음[signCert.der, signPri.key] 또는 PKCS#12 파일[.pfx 혹은 .p12])을 끌어다 인증서 선택 영역에 놓습니다.\",\"BROWSER_GUIDE_STORE_CERT_STEP2\":\"[인증서 가져오기]으로 가져오기\",\"BROWSER_GUIDE_STORE_CERT_STEP2_1\":\"[인증서 가져오기] 버튼을 누른 후 [인증서 찾기] 버튼을 누릅니다. 파일 탐색기에서 PKCS#12 [.pfx 혹은 .p12] 파일을 찾아 열기 버튼을 누릅니다.\",\"BROWSER_GUIDE_STORE_CERT_STEP3\":\"PKCS#12 파일의 경우 인증서 비밀번호를 입력하면 인증서가 브라우저에 저장됩니다.\",\"BROWSER_GUIDE_DELETE_CERT_LABEL\":\"브라우저 인증서 삭제하는 방법\",\"BROWSER_GUIDE_DELETE_CERT_STEP1\":\"브라우저 설정을 엽니다.\",\"BROWSER_GUIDE_DELETE_CERT_STEP2\":\"인터넷 사용 기록 옵션을 찾습니다.\",\"BROWSER_GUIDE_DELETE_CERT_STEP3\":\"브라우저 쿠키 및 사이트 데이터를 삭제합니다.\",\"BROWSER_DETAIL_MORE_BUTTON\":\"더 자세한 내용은 여기를 클릭하세요.\",\"BASE64_IMPORT_CERT_SUCCESS\":\"인증서를 성공적으로 브라우저에 저장하였습니다.\"}");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/dialog/vendor/jquery/jquery.keyboard.js
var jquery_keyboard = __webpack_require__(4);

// EXTERNAL MODULE: ./src/dialog/vendor/jquery/colResizable-1.6.js
var colResizable_1_6 = __webpack_require__(6);

// EXTERNAL MODULE: ./src/dialog/css/dialog.css
var dialog = __webpack_require__(7);

// EXTERNAL MODULE: ./src/dialog/css/keyboard-basic.css
var keyboard_basic = __webpack_require__(21);

// CONCATENATED MODULE: ./src/dialog/js/event.js
var boxes = __webpack_require__(23);
var _p12Buffer, _certBuffer, _keyBuffer;

var event_KICA_DIALOG = {
    createDialog: function() {
        if (document.getElementById('secukit-wrapper'))
            return;

        var _boxes = boxes.boxes();
        var SECUKIT_DIALOG = document.createElement("div");
        SECUKIT_DIALOG.id = "secukit-wrapper";
        SECUKIT_DIALOG.className = "kica-d-none";
        SECUKIT_DIALOG.lang = webnpki_config.language.toLocaleLowerCase();
        SECUKIT_DIALOG.innerHTML = _boxes.main + _boxes.pdfViewer + _boxes.importPFX + _boxes.findPFX

        KICA_LOGGER.info(SECUKIT_DIALOG);

        document.body.appendChild(SECUKIT_DIALOG);
    },

    enableKeyboardSecurity: function() {
        // 키보드 보안 적용
        if (webnpki_config.keyboardSecurity === 'default') {
            var _votmdnjem = $('#qlalfqjsgh, #input-pfx-qlalfqjsgh');
            _votmdnjem.off('keypress keydown');

            _votmdnjem.on('keypress', function(event) {
                event.preventDefault();
                var cursor = this.selectionStart;
                var temp = this.value;

                if (this.selectionStart !== this.selectionEnd) {
                    temp = temp.substring(0, this.selectionStart) + temp.substring(this.selectionEnd);
                    webnpki.modifyVotmdnjem(this.id, this.selectionStart, this.selectionEnd, 8, false);
                }

                this.value = temp + String.fromCharCode(Math.floor(Math.random(1, 10) * 110) % 83 + 33);

                if (this.setSelectionRange) {
                    this.setSelectionRange(cursor + 1, cursor + 1);
                } else {
                    var range = this.createTextRange();
                    range.collapse(true);
                    range.moveEnd('character', cursor + 1);
                    range.moveStart('character', cursor + 1);
                    range.select();
                }

                // 비밀번호 암호화 진행                       
                webnpki.setVotmdnjem(this.id, this.selectionStart, event.which || event.keyCode);
            })

            _votmdnjem.on('keydown', function(event) {
                if (event.altKey || event.shiftKey || event.metaKey) {
                    return;
                }

                var keycode = event.which || event.keyCode;
                if ((keycode === 46 || keycode === 8) && !$("#" + this.id).getkeyboard()) {
                    webnpki.modifyVotmdnjem(this.id, this.selectionStart, this.selectionEnd, keycode, event.ctrlKey);
                }
            });

        } else if (webnpki_config.keyboardSecurity === 'kings') {
            kings.init();
        }
    },

    openSelectCertificateDialog: function() {
        _initDialog();
        _showCertList();
        $('#secukit-wrapper').removeClass('kica-d-none');
    },

    closeSelectCertificateDialog: function() {
        _destroy_vk();
        $('#select-certificate-confirm').off('click');
        $('#secukit-wrapper').addClass('kica-d-none');

        if (webnpki_config.keyboardSecurity === 'kings') {
            vKeypadGlobal.unloadAll();
        }
    },

    openGuide: function() {
        if ($('#browser-guide-wrapper').hasClass('kica-d-none')) {
            $('#browser-guide-wrapper').removeClass('kica-d-none');
            $('#secukit-dialog').addClass('open-guide');
        } else {
            event_KICA_DIALOG.closeGuide();
        }
    },

    closeGuide: function() {
        $('#browser-guide-wrapper').addClass('kica-d-none');
        $('#secukit-dialog').removeClass('open-guide');
    },

    openDetailGuide: function() {
        if (!PDFObject.supportsPDFs) {
            _download(webnpki_config.path + 'assets/guide/browser_certificate_guide.pdf', 'Browser Certificate Detail guide.pdf');
            return;
        }
        var modal = $('#detail-guide');
        modal.removeClass('kica-d-none');
    },

    closeDetailGuide: function() {
        var modal = $('#detail-guide');
        modal.addClass('kica-d-none');
    },

    selectCert: function(index) {
        $('#cert-list tr').removeClass('active');
        $('#cert-list tr[id=' + index + ']').addClass('active');
    },

    onDragOverCert: function(event) {
        event.preventDefault();
        if (typeof event.target.classList !== 'undefined') {
            event.target.classList.add("dragover");
        }
    },

    onDragLeaveCert: function(event) {
        event.preventDefault();
        if (typeof event.target.classList !== 'undefined') {
            event.target.classList.remove("dragover");
        }
    },

    onDropCert: function(event) {
        event.preventDefault();

        event.target.classList.remove("dragover");
        if (!event.dataTransfer || event.dataTransfer.files.length == 0) {
            return;
        }

        event_KICA_DIALOG.onSelectCert(event.dataTransfer);
    },

    onSelectCert: function(target) {
        var files = target.files;
        if (files.length === 0) { return; }

        function onloadReader(file, callback) {
            return function(event) {
                var cName = file.name.toLowerCase();
                if (cName === "signcert.der") {
                    _certBuffer = event.target.result;
                    callback(false);
                } else if (cName === "signpri.key") {
                    _keyBuffer = event.target.result;
                    callback(false);
                } else if (/\.pfx$|\.p12$/.test(cName)) {
                    _p12Buffer = event.target.result;
                    callback(true);
                }
            };
        }

        function fileLoadCallback(p12) {
            if (p12) {
                _showAskPwdDialog(p12);
            } else {
                var crt, key;
                crt = typeof _certBuffer === "undefined" ? false : true;
                key = typeof _keyBuffer === "undefined" ? false : true;
                if (crt && key) {
                    webnpki_config.askPwd ? _showAskPwdDialog(p12) : _importCertAndKey();
                }
            }
        }

        var i, reader;
        for (i = 0; i < files.length; i += 1) {
            reader = new FileReader();
            reader.readAsArrayBuffer(files[i]);
            reader.onload = onloadReader(files[i], fileLoadCallback);
        }

        if (target.value) {
            target.value = "";
        }
    },

    openFindCert: function() {
        $('#find-pfx-wrapper').removeClass('kica-d-none');
    },

    closeFindCert: function() {
        _closeFindCert();
    },

    downloadConvertCert: function() {
        if (_getOS() === 'Windows') {
            _download(webnpki_config.path + 'assets/plugin/SecuKitCertExport.exe', 'SecuKitCertExport.exe');
        } else {
            KICA_ALERT.error("IS_NOT_WINDOWS", KICA_ERROR_MSG.get("IS_NOT_WINDOWS"));
        }
    },

    searchCert: function() {
        $('#inputCerts').click();
    },

    toggleVirtualKeyboard: function() {
        if (webnpki_config.keyboardSecurity === "default") {
            var vk = $('#qlalfqjsgh').getkeyboard();
            $('#qlalfqjsgh').val('');
            webnpki.setVotmdnjem('qlalfqjsgh');
            if (typeof vk === 'undefined') {
                $('#vkeyboard-toggle').addClass('active');
                _init_vk('#qlalfqjsgh');
            } else {
                $('#vkeyboard-toggle').removeClass('active');
                vk.destroy();
            }
        } else if (webnpki_config.keyboardSecurity === "kings") {
            if ($('#vkeyboard-toggle').hasClass('active')) {
                $('#vkeyboard-toggle').removeClass('active');
                vKeypadGlobal.unloadAll();

            } else {
                $('#vkeyboard-toggle').addClass('active');
                vKeypadGlobal.loadAll();
            }
        } else {
            var vk = $('#qlalfqjsgh').getkeyboard();
            if (typeof vk === 'undefined') {
                $('#vkeyboard-toggle').addClass('active');
                _init_vk('#qlalfqjsgh');
            } else {
                $('#vkeyboard-toggle').removeClass('active');
                vk.destroy();
            }
        }
    },

    togglePFXVirtualKeyboard: function() {
        var vk = $('#input-pfx-qlalfqjsgh').getkeyboard();
        $('#input-pfx-qlalfqjsgh').val("");
        if (typeof vk === 'undefined') {
            $('#pfx-vkeyboard-toggle').addClass('active');
            _init_vk('#input-pfx-qlalfqjsgh');
        } else {
            $('#pfx-vkeyboard-toggle').removeClass('active');
            vk.destroy();
        }
    },
    importBase64Cert: function(base64Cert) {
        event_KICA_DIALOG.openSelectCertificateDialog();
        $('#secukit-dialog').addClass('kica-d-none');
        _showAskPwdDialog(true, base64Cert);
    }
}

function _closeFindCert() {
    $('#find-pfx-wrapper').addClass('kica-d-none');
}

function _showAskPwdDialog(p12, base64Cert) {
    $('#webnpki-wrapper').removeClass('kica-d-none');
    $('#input-pfx-qlalfqjsgh').focus();

    $('#pfx-qlalfqjsgh-confirm').unbind('click');
    $('#pfx-qlalfqjsgh-confirm').click(function() { _askPwdOk(p12, base64Cert); });

    $('#pfx-qlalfqjsgh-cancel').unbind('click');
    $('#pfx-qlalfqjsgh-cancel').click(function() { _askPwdCancel(base64Cert); });
}

function _askPwdOk(p12, base64Cert) {
    var pwd = $('#input-pfx-qlalfqjsgh').val();
    if (pwd.length == 0) {
        KICA_ALERT.error("EMPTY_PASSWORD", KICA_ERROR_MSG.get("EMPTY_PASSWORD"), {
            onAfterClose: function() {
                $('#input-pfx-qlalfqjsgh').focus();
            }
        });

        return false;
    }

    function importError(e) {
        KICA_ALERT.error(e.code, e.message);

        if (webnpki_config.keyboardSecurity === 'default') {
            webnpki.setVotmdnjem('input-pfx-qlalfqjsgh');
        }
        $('#input-pfx-qlalfqjsgh').val('');
        $('#input-pfx-qlalfqjsgh').focus();
    }

    if (p12) {
        if (base64Cert) {
            _p12Buffer = webnpki.bin.decodeBase64(base64Cert);
        }

        webnpki.importPKCS12(_p12Buffer, pwd).then(function() {
            _showCertList();
            $('#webnpki-wrapper').addClass('kica-d-none');
            _closeFindCert();
            _clearCertBuffer();
            _close_vk();

            $('#input-pfx-qlalfqjsgh').val('');
            if (webnpki_config.keyboardSecurity === 'default') {
                webnpki.setVotmdnjem('input-pfx-qlalfqjsgh');
            }

            if (base64Cert) {
                KICA_ALERT.success("BASE64_IMPORT_CERT_SUCCESS", KICA_CORPUS.BASE64_IMPORT_CERT_SUCCESS);
                event_KICA_DIALOG.closeSelectCertificateDialog();
                $('#secukit-dialog').removeClass('kica-d-none');
            }

        }).catch(function(e) {
            importError(e);
            return false;
        });
    } else {
        webnpki.importCertAndKey(_certBuffer, _keyBuffer, pwd).then(function() {
            _showCertList();
            $('#webnpki-wrapper').addClass('kica-d-none');
            $('#input-pfx-qlalfqjsgh').val('');
            if (webnpki_config.keyboardSecurity === 'default') {
                webnpki.setVotmdnjem('input-pfx-qlalfqjsgh');
            }
            _closeFindCert();
            _clearCertBuffer();
            _close_vk();

        }).catch(function(e) {
            console.log(e);
            importError(e);
            return false;
        });
    }

    return false;
};


function _askPwdCancel(base64Cert) {
    $('#webnpki-wrapper').addClass('kica-d-none');
    _clearCertBuffer();
    _close_vk();
    $('#input-pfx-qlalfqjsgh').val('');
    if (webnpki_config.keyboardSecurity === 'default') {
        webnpki.setVotmdnjem('input-pfx-qlalfqjsgh');
    }

    if (base64Cert) {
        _closeFindCert();
        $('#secukit-dialog').removeClass('kica-d-none');
        event_KICA_DIALOG.closeSelectCertificateDialog();
    }

    return false;
};

function _importCertAndKey() {
    webnpki.importCertAndKey(_certBuffer, _keyBuffer).then(function() {
        _showCertList();
        _clearCertBuffer();
    }).catch(function(error) {
        KICA_ALERT.error(error.code, error.message);
        _clearCertBuffer();
    });
}

function _initDialog() {
    var qlalfqjsgh = $('#qlalfqjsgh');
    qlalfqjsgh.val("");
    qlalfqjsgh.data("kings", "");
    qlalfqjsgh.prop('disabled', false);
    qlalfqjsgh.prop('placeholder', KICA_CORPUS.CERT_PWD_PLACEHOLDER);

    webnpki.setVotmdnjem('qlalfqjsgh');
}

function _setCertInfoJson(certList) {
    function getDateFormat(d) {
        var yy = d.getFullYear();
        var mm = d.getMonth() + 1;
        var dd = d.getDate();
        return [yy, (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-');
    }

    function getIssuerName(id) {
        id = id.toLowerCase();
        var rslt = webnpki_config.issuers[id];

        return typeof rslt === "undefined" ? "unknown" : rslt;
    }

    var cnt = certList.length;

    var certInfoObj = {};
    certInfoObj.size = cnt;

    for (var i = 0; i < cnt; ++i) {
        var obj = {};
        var idx = (i + 1).toString();

        obj.cn = certList[i].getSubjectRDNs().CN;
        obj.username = certList[i].getSubjectRDNs().CN; // for cert Detail
        obj.index = idx;

        var tmp = certList[i].getIssuerRDNs().O;
        var issuerName = getIssuerName(tmp);

        obj.issuerToName = issuerName;
        obj.issuerToString = issuerName; // for cert Detail
        obj.oid = certList[i].getPolicyID();
        obj.policy = certList[i].getPolicyID(); // for cert Detail
        obj.todate = getDateFormat(certList[i].getNotAfter());
        obj.validateTo = getDateFormat(certList[i].getNotAfter()); // for cert Detail
        obj.validateFrom = getDateFormat(certList[i].getNotBefore()); // for cert Detail
        obj.usageToName = certList[i].getPolicyString();
        obj.policyToName = certList[i].getPolicyString(); // for cert Detail
        obj.userDN = certList[i].getSubjectDN();
        obj.issueDN = certList[i].getIssuerDN(); // for cert Detail
        obj.version = "Version " + certList[i]._fo.version; // for cert Detail
        obj.signatureAlgorithmID = certList[i].getSignAlgorithm(); // for cert Detail
        obj.keySize = certList[i].getKeySize(); // for cert Detail
        obj.certPem = certList[i].toPem();
        obj.certHex = certList[i].toHex();
        obj.certBase64 = certList[i].toBase64();
        obj.serial = certList[i]._fo.serialNumber;

        certInfoObj[idx] = obj;
    }

    return certInfoObj;
}

function _clearCertBuffer() {
    _certBuffer = undefined;
    _keyBuffer = undefined;
    _p12Buffer = undefined;
}

function _showCertList() {
    webnpki.getCertificateList(function(certificateList, error) {
        if (error) {
            KICA_ALERT.error(error.cdoe, error.message);
            return;
        }

        if (certificateList.length === 0) {
            $('#dropzone-wrapper').removeClass('kica-d-none');
            return;
        } else
            $('#dropzone-wrapper').addClass('kica-d-none');

        var certificateListJSON = _setCertInfoJson(certificateList);

        var certificateListRoot = $('#cert-list');
        certificateListRoot.html("");

        for (var i = 0; i < certificateListJSON.size; i++) {
            var certificate = certificateListJSON[i + 1];

            var rowClass = "";
            if (i == 0) {
                rowClass = 'class="active"';
            }

            var index = i + 1;
            var row = $('<tr ' + rowClass + ' id=' + index + ' onclick="KICA_DIALOG.selectCert(' + index + ')">')

            var html = '<td scope="col"><span><i class="icon-cert"></i>' + certificate.usageToName + '</span></td>' +
                '<td scope="col"><span>' + certificate.cn + '</span></td>' +
                '<td scope="col"><span style="text-align: center;">' + certificate.todate + '</span></td>' +
                '<td scope="col"><span>' + certificate.issuerToName + '</span></td>';

            row.html(html);
            row.data('certificate', certificateList[i]);
            row.data('certificateJSON', certificate);



            certificateListRoot.append(row);
        }

        $("#cert-list-table").colResizable({ liveDrag: true });
    });
}

// Virtaul Keyborad
function _init_vk(id) {
    var normal = [
        '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
        'q w e r t y u i o p [ ] \\',
        'a s d f g h j k l ; \' {a}',
        '{shift} z x c v b n m , . / {shift}',
    ];
    var shift = [
        '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
        'Q W E R T Y U I O P { } |',
        'A S D F G H J K L : " {a}',
        '{shift}  Z X C V B N M < > ? {shift} '
    ];

    var options = {
        layout: 'custom',
        customLayout: {
            'normal': normal,
            'shift': shift
        },
        display: {
            'a': '&nbsp;Enter&nbsp; ',
            'b': '\u232b:Backspace',
            'bksp': 'Bksp:Backspace',
            'c': '\u2716:Cancel (Esc)',
            'cancel': 'Cancel:Cancel (Esc)',
            'shift': '&nbsp;Shift&nbsp;'
        },
        css: {
            buttonDefault: "vk-button",
            buttonAction: "vk-button-enter",
            buttonActive: "vk-button-shift-down",
            container: "vk-container"
        },
        usePreview: false,
        reposition: true,
        restrictInput: false,
        autoAccept: true,
        userClosed: true,
        lockInput: true
    };

    if (webnpki_config.keyboardSecurity === "default") {
        options.beforeInsert = function(e, keyboard, el, txt) {
            if (txt.charCodeAt(0) === 8) {
                webnpki.modifyVotmdnjem(id.substring(1), el.selectionStart, el.selectionEnd, 8, false);

                return txt;
            }
            webnpki.setVotmdnjem(id.substring(1), el.selectionStart + 1, txt.charCodeAt(0));

            return String.fromCharCode(Math.floor(Math.random(1, 10) * 110) % 83 + 33);;
        };
        webnpki.setVotmdnjem(id.substring(1));
    }

    $(id).keyboard(options);
    $(id).val('');
    $(id).focus();
}


function _close_vk() {
    ['#qlalfqjsgh', '#input-pfx-qlalfqjsgh'].forEach(function(id) {
        var vk = $(id).getkeyboard();
        if (typeof vk !== 'undefined' && vk.isOpen) { vk.close(); }
    });
}

function _destroy_vk() {
    ['#qlalfqjsgh', '#input-pfx-qlalfqjsgh'].forEach(function(id) {
        var vk = $(id).getkeyboard();
        if (typeof vk !== 'undefined') {
            vk.destroy();
        }
    });
    $('#vkeyboard-toggle').removeClass('active');
}


function _download(href, fileName) {
    const a = document.createElement("a");
    a.style.display = "none";
    document.body.appendChild(a);

    // Set the HREF to a Blob representation of the data to be downloaded
    a.href = href;

    // Use download attribute to set set desired file name
    a.setAttribute("download", fileName);

    // Trigger the download by simulating click
    a.click();

    // Cleanup
    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
}

function _getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'Windows';
    } else if (/Android/.test(userAgent)) {
        os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
        os = 'Linux';
    }

    return os;
}




/* harmony default export */ var js_event = (event_KICA_DIALOG);
// CONCATENATED MODULE: ./src/dialog/js/alert.js
var Swal = __webpack_require__(24)

function alert_KICA_ALERT () {
    var object = {};

    object.alert = function(title, text, options){
        var alertOptions = {
            icon: 'info',
            title: title,
            text: text, 
        }        

        if(options !== undefined){
            var keys = Object.keys(options);            

            for(var i = 0; i < keys.length; i++){
                var key = keys[i];
                alertOptions[key] = options[key];
            }            
        }
        
        Swal.fire(alertOptions);        
    }

    object.error = function (title, text, options) {
        if(webnpki_config.alert < 1){
            return;
        }

        var alertOptions = {
            icon: 'error',
            title: title,
            text: text, 
        }        

        if(options !== undefined){
            var keys = Object.keys(options);            

            for(var i = 0; i < keys.length; i++){
                var key = keys[i];
                alertOptions[key] = options[key];
            }            
        }
        
        Swal.fire(alertOptions);
    }

    object.info = function (title, text, options) {
        if(webnpki_config.alert < 2){
            return;
        }

        var alertOptions = {
            icon: 'info',
            title: title,
            text: text, 
        }        

        if(options !== undefined){
            var keys = Object.keys(options);            

            for(var i = 0; i < keys.length; i++){
                var key = keys[i];
                alertOptions[key] = options[key];
            }            
        }
        
        Swal.fire(alertOptions);        
    }

    object.success = function (title, text, options) {
        if(webnpki_config.alert < 2){
            return;
        }

        var alertOptions = {
            icon: 'success',
            title: title,
            text: text, 
        }        

        if(options !== undefined){
            var keys = Object.keys(options);            

            for(var i = 0; i < keys.length; i++){
                var key = keys[i];
                alertOptions[key] = options[key];
            }            
        }
        
        Swal.fire(alertOptions);        
    }

    object.warn = function (title, text, options) {
        if(webnpki_config.alert < 3){
            return;
        }

        var alertOptions = {
            
            title: title,
            text: text, 
        }        

        if(options !== undefined){
            var keys = Object.keys(options);            

            for(var i = 0; i < keys.length; i++){
                var key = keys[i];
                alertOptions[key] = options[key];
            }            
        }
        
        Swal.fire(alertOptions);        
    }

    return object;
}

/* harmony default export */ var js_alert = (alert_KICA_ALERT());
// CONCATENATED MODULE: ./src/dialog/js/logger.js
function logger_KICA_LOGGER () {
    var object = {};

    object.debug = function(){
        if(webnpki_config.log < 3){
            return;
        }
        
        console.debug(arguments);
    }

    object.error = function(){
        if(webnpki_config.logger < 1){
            return;
        }
        
        console.error(arguments);
    }

    object.info = function(){
        if(webnpki_config.logger < 2){
            return;
        }
        
        console.info(arguments);
    }

    object.log = function(){
        if(webnpki_config.logger < 3){
            return;
        }
        
        console.log(arguments);
    }

    object.warn = function(){
        if(webnpki_config.logger < 3){
            return;
        }
        
        console.warn(arguments);
    }

    object.dir = function(object){
        if(webnpki_config.logger < 2){
            return;
        }
        
        console.dir(object);
    }

    object.group = function(message){
        if(webnpki_config.logger < 3){
            return;
        }
        
        console.group(message);
    }

    object.groupEnd = function(){
        if(webnpki_config.logger < 3){
            return;
        }
        
        console.groupEnd();
    }


    return object;
}

/* harmony default export */ var logger = (logger_KICA_LOGGER());
// EXTERNAL MODULE: ./src/dialog/vendor/pdfObject/pdfobject.min.js
var pdfobject_min = __webpack_require__(3);
var pdfobject_min_default = /*#__PURE__*/__webpack_require__.n(pdfobject_min);

// CONCATENATED MODULE: ./src/dialog/dialog.js



// CSS








var _i18n = __webpack_require__(29);

(function() {
    window.KICA_DIALOG = js_event;
    window.KICA_ALERT = js_alert;
    window.KICA_LOGGER = logger;
    window.PDFObject = pdfobject_min_default.a;

    _i18n.setLanguage(webnpki_config.language, function(error) {
        if (error) {
            KICA_LOGGER.error(error);
            KICA_ALERT.error("LANGUAGE_NOT_SUPPORTED", error, { 'footer': 'Supported language codes are [ <b> KO, EN, and FR</b>].' });

            return;
        }
        KICA_LOGGER.info(KICA_CORPUS);
        
        KICA_DIALOG.createDialog();
        KICA_DIALOG.enableKeyboardSecurity();        
    });
    KICA_LOGGER.groupEnd();
})();

/***/ })
/******/ ]);