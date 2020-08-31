(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webnpki"] = factory();
	else
		root["webnpki"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"0":"forge"}[chunkId]||chunkId) + "." + {"0":"85e84bc053bb0abc217d"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "dist/secukit-html5/core/wn/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ 	// WebpackRequireFrom
/******/ 	Object.defineProperty(__webpack_require__, "p", {
/******/ 	  get: function () {
/******/ 	try {
/******/ 	  if (typeof webnpki_config.core !== "string") {
/******/ 	    throw new Error("WebpackRequireFrom: 'webnpki_config.core' is not a string or not available at runtime. See https://github.com/agoldis/webpack-require-from#troubleshooting");
/******/ 	  }
/******/ 	  return webnpki_config.core;
/******/ 	} catch (e) {
/******/ 	  if (!false) {
/******/ 	    console.error(e);
/******/ 	  }
/******/ 	  return "dist/secukit-html5/core/wn/";
/******/ 	}
/******/ 	 }
/******/ 	})
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var forge;
__webpack_require__.e(/* require.ensure | forge */ 0).then((function(require) {
    forge = __webpack_require__(0);
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/**
 * 각 WN 클래스들에 대한 Abstract 클래스. 자료형 변환을 위하여 선언하였다.
 * 객체 생성 후 from~을 통해 parsing을 수행하며, to~를 통해 값을 출력한다.
 * 
 * 예제 (WNCertificate의 경우)
 * <pre>
 * WNCertificate cert = new WNCertificate(); // 객체 생성.
 * 
 * from~사용법.
 * cert.fromArrayBuffer(arrayBuffer); // ArrayBuffer로부터 해석.
 * cert.fromBase64(base64String); // Base64로부터 해석.
 * cert.fromPem(pemString); // PEM으로부터 해석. (지원되는 경우만.)
 * 
 * to~사용법
 * cert.toUint8Array(); // Uint8Array로 출력.
 * cert.toBase64(); // Base64로 출력.
 * cert.toPem(); // PEM으로 출력. (지원되는 경우만.)
 * </pre>
 * @classdesc 각 클래스들을 위한 Super
 * @class
 * @alias WNBase
 */
function WNBase() {
    // forge에서 별도의 클래스가 구현 되지 않은 경우 ASN.1 객체 그대로 사용하고 있다.
    function toAsn1(obj) {
        if(obj._fn.asn1) {
            return obj._fn.asn1.to(obj._fo);
        } else {
            return obj._fo;
        }
    }
    
    /**
     * 데이터를 Uint8Array 형태로 반환.
     * @function
     * @return {Uint8Array} Uint8Array 데이터
     */
    this.toUint8Array = function() {
        var asn1 = toAsn1(this);
        var der = forge.asn1.toDer(asn1);
        return forge.util.binary.raw.decode(der.data);
    };

    /**
     * 데이터를 Hexadecimal string 형태로 반환.
     * @function
     * @return {string} Hexadecimal string
     */
    this.toHex = function() {
        var asn1 = toAsn1(this);
        return forge.asn1.toDer(asn1).toHex();
    };

    /**
     * 데이터를 Base64 string 형태로 반환.
     * @function
     * @return {string} Base64 string
     */
    this.toBase64 = function() {
        var asn1 = toAsn1(this);
        var der = forge.asn1.toDer(asn1);
        return forge.util.encode64(der.getBytes());
    };

    /**
     * 데이터를 PEM 형태로 반환.
     * @function
     * @return {string} PEM string. 지원 되지 않는 경우 undefined.
     */
    this.toPem = function() {
        if(this._fn.pem && this._fn.pem.to) {
            return this._fn.pem.to(this._fo);
        }
    };

    /**
     * ArrayBuffer로부터 값을 해석.
     * 
     * @param {ArrayBuffer} buffer 입력으로 사용 할 ArrayBuffer. Uint8Array도 사용 가능.
     * @param {*} [o] _fn.asn1.from에 추가로 전달 될 parameter. 현재 PKCS12의 Password 전달에만 사용.
     * 
     * @return {Object} this
     */
    this.fromArrayBuffer = function (buffer, o) {
        try {
            buffer = forge.util.createBuffer(buffer);
            var asn1 = forge.asn1.fromDer(buffer);
            if(this._fn.asn1)
                this._fo = this._fn.asn1.from(asn1, o);
            else
                this._fo = asn1; // 클래스가 별도로 선언되지 않았으면 ASN.1 그대로 사용.
            return this;
        } catch(e) {
            var errId = (e.message && e.message.indexOf("password") > 0) ? "INVALID_PASSWORD" : "WRONG_DATA";
            throw { code: errId, message: KICA_ERROR_MSG.get(errId), error: new Error()};
        }
    }

    /**
     * Hexdecimal string으로부터 값을 해석.
     * 
     * @param {string} hex 입력으로 사용 할 Hexadecimal.
     * 
     * @return {Object} this
     */
    this.fromHex = function(hex) {
        var buffer = forge.util.binary.hex.decode(hex);
        this.fromArrayBuffer(buffer);
        return this;
    };

    /**
     * Base64 string으로부터 값을 해석.
     * 
     * @param {string} base64 입력으로 사용 할 Base64.
     * 
     * @return {Object} this
     */
    this.fromBase64 = function (base64) {
        var buffer = forge.util.binary.base64.decode(base64);
        this.fromArrayBuffer(buffer);
        return this;
    };


    /**
     * PEM string으로부터 값을 해석.
     * 
     * @param {string} pem 입력으로 사용 할 PEM.
     * 
     * @return {Object} this
     */
    this.fromPem = function(pem) {
        this._fo = this._fn.pem.from(pem);
        return this;
    };
}

module.exports = WNBase;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable node/no-deprecated-api */



var buffer = __webpack_require__(7)
var Buffer = buffer.Buffer

var safer = {}

var key

for (key in buffer) {
  if (!buffer.hasOwnProperty(key)) continue
  if (key === 'SlowBuffer' || key === 'Buffer') continue
  safer[key] = buffer[key]
}

var Safer = safer.Buffer = {}
for (key in Buffer) {
  if (!Buffer.hasOwnProperty(key)) continue
  if (key === 'allocUnsafe' || key === 'allocUnsafeSlow') continue
  Safer[key] = Buffer[key]
}

safer.Buffer.prototype = Buffer.prototype

if (!Safer.from || Safer.from === Uint8Array.from) {
  Safer.from = function (value, encodingOrOffset, length) {
    if (typeof value === 'number') {
      throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof value)
    }
    if (value && typeof value.length === 'undefined') {
      throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof value)
    }
    return Buffer(value, encodingOrOffset, length)
  }
}

if (!Safer.alloc) {
  Safer.alloc = function (size, fill, encoding) {
    if (typeof size !== 'number') {
      throw new TypeError('The "size" argument must be of type number. Received type ' + typeof size)
    }
    if (size < 0 || size >= 2 * (1 << 30)) {
      throw new RangeError('The value "' + size + '" is invalid for option "size"')
    }
    var buf = Buffer(size)
    if (!fill || fill.length === 0) {
      buf.fill(0)
    } else if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
    return buf
  }
}

if (!safer.kStringMaxLength) {
  try {
    safer.kStringMaxLength = process.binding('buffer').kStringMaxLength
  } catch (e) {
    // we can't determine kStringMaxLength in environments where process.binding
    // is unsupported, so let's not set it
  }
}

if (!safer.constants) {
  safer.constants = {
    MAX_LENGTH: safer.kMaxLength
  }
  if (safer.kStringMaxLength) {
    safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength
  }
}

module.exports = safer


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var forge;
__webpack_require__.e(/* require.ensure | forge */ 0).then((function(require) {forge = __webpack_require__(0);}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
var WNBase = __webpack_require__(1);
var CONSTANT = __webpack_require__(10);

var certPolicyTable = {
};


/**
 * 인증서 관련 기능을 제공하는 클래스.
 * 
 * Prototype chaining을 통해 WNBase를 상속 받는다.
 * 
 * @classdesc 인증서 클래스
 * @class
 * @alias WNCertificate
 * 
 * @param {*} [fo] 래핑 대상 Forge 객체. (internal usage only)
 */
function WNCertificate(fo) {
    this._fo = fo;
    /** ASN.1 및 PEM 변환 함수 */
    this._fn = {
        asn1: {
            from: forge.pki.certificateFromAsn1,
            to: forge.pki.certificateToAsn1,
        },
        pem: {
            from: forge.pki.certificateFromPem,
            to: forge.pki.certificateToPem
        }
    }
}

var __isBase64 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var __isHex = /^([0-9A-Fa-f]{2})*$/;
var __isPem = /^-----BEGIN ([A-Z0-9]*)-----[\s\S]*-----END ([A-Z0-9]*)-----\s*$/;

/**
 * 입력 문자열(Base64, Hex, PEM)을 WNCertificate 인스턴스로 반환한다.
 * 
 * @param {WNCertificate|string} certificate 인증서 데이터
 * 
 * @ignore
 */
WNCertificate.convert = function (certificate) {
    if(certificate instanceof WNCertificate) {
        return certificate;
    } else if(typeof certificate === "string") {
        if(__isPem.test(certificate)) {
            var type = __isPem.exec(certificate);
            if (type.length < 3 || type[1] !== type[2] || type[1] !== "CERTIFICATE") {
                throw { code: "INVALID_PEM_DATA", message: KICA_ERROR_MSG.get("INVALID_PEM_DATA", "CERTIFICATE", type[1]), error: new Error()};
            }
            
            return new WNCertificate().fromPem(certificate);
        } else if(__isHex.test(certificate)) {
            return new WNCertificate().fromHex(certificate);
        } else if(__isBase64.test(certificate)) {
            return new WNCertificate().fromBase64(certificate);
        }
    }
};


// WNBase 상속
WNCertificate.prototype = new WNBase();

/**
 * 저장소 조회용 키 획득.
 * 
 * "'WN_CERT_' + DName + '-' + serialNumber" 형태로 만들어진다.
 * 
 * @return {string} 저장소 조회용 Key
 * 
 * @ignore
 */
function _getStorageKey (DN, serialNumber) {
    return DN + "-" + serialNumber;
}

/**
 * 저장소 인증서 조회용 키 획득.
 * 
 * "'WN_CERT_' + issuerDN + '-' + serialNumber" 형태로 만들어진다.
 * 
 * @return {string} 저장소 인증서 조회용 Key
 * 
 * @ignore
 */
WNCertificate.prototype.getStorageCertKey = function () {
    return _getStorageKey(CONSTANT.WNCERT_PREFIX + this.getIssuerDN(), this.getSerialNumber());
};

/**
 * 저장소 개인키 조회용 키 획득.
 * 
 * "'WN_PRI_' + issuerDN + '-' + serialNumber" 형태로 만들어진다.
 * 
 * @return {string} 저장소 개인키 조회용 Key
 * 
 * @ignore
 */
WNCertificate.prototype.getStoragePriKey = function () {
    return _getStorageKey(CONSTANT.WNPRI_PREFIX + this.getIssuerDN(), this.getSerialNumber());
};

/**
 * 입력 RDN name-value pair 배열에 대한 DName 획득.
 * 
 * @param {Attributes} attributes RDN attributes pairs
 * @return {string} DName
 * 
 * @ignore
 */
function _getDN(attributes) {
    var dn = [];
    for (var i = 0; i < attributes.length; i++) {
        dn.push(attributes[i].shortName + "=" + attributes[i].value);
    }

    return dn.reverse().join(",");
}

/**
 * Subject DName 획득.
 * 
 * @return {string} Subject DName
 */
WNCertificate.prototype.getSubjectDN = function () {
    return _getDN(this._fo.subject.attributes);
};

/**
 * Issuer DName 획득.
 * 
 * @return {string} Issuer DName
 */
WNCertificate.prototype.getIssuerDN = function () {
    return _getDN(this._fo.issuer.attributes);
};

function _getRDNs(target) {
    var rdns = {};
    var shortName;;
    var attrs = target.attributes;
    var attr;
    for(var i = 0; i < attrs.length; i++) {
        attr = attrs[i];
        shortName = attr.shortName;
        if(!rdns[shortName]) {
            rdns[shortName] = attr.value;
        } else if(typeof rdns[shortName] === "string") {
            rdns[shortName] = [rdns[shortName]];
            rdns[shortName].push(attr.value);
        } else {
            rdns[shortName].push(attr.value);
        }
    }
    return rdns;
}

/**
 * Subject RDN 객체 획득.<br>
 * (shortName):(value) 형태로 반환 되며, Multi-valued인 값은 배열로 반환 됨.<br>
 * <pre>
 * certificate.getSubjectRDNS();
 * {
 *   "C":"KR",
 *   "O":"KICA",
 *   "OU":["licensedCA","TEST발급용","TEST인증서","RA센터"],
 *   "CN":"테스트(개인-A)"
 * }
 * </pre>
 * @return {object} RDN 객체
 */
WNCertificate.prototype.getSubjectRDNs = function () {
    return _getRDNs(this._fo.subject);
};

/**
 * Issuer RDN 객체 획득.<br>
 * (shortName):(value) 형태로 반환 되며, Multi-valued인 값은 배열로 반환 됨.<br>
 * <pre>
 * certificate.getIssuerRDNs();
 * {
 *   "C":"KR",
 *   "O":"KICA",
 *   "OU":"AccreditedCA",
 *   "CN":"signGATE CA5"
 * }
 * </pre>
 * @return {object} RDN 객체
 */
WNCertificate.prototype.getIssuerRDNs= function () {
    return _getRDNs(this._fo.issuer);
}

/**
 * 인증서 일련번호 획득.
 * 
 * @return {string} 인증서 일련번호 (Hexadecimal)
 */
WNCertificate.prototype.getSerialNumber = function () {
    return this._fo.serialNumber;
};

/**
 * 인증서 유효 시작일 획득.
 * 
 * @return {Date} 인증서 유효 시작일.
 */
WNCertificate.prototype.getNotBefore = function () {
    return this._fo.validity.notBefore;
};

/**
 * 인증서 유효 종료일 획득.
 * 
 * @return {Date} 인증서 유효 종료일.
 */
WNCertificate.prototype.getNotAfter = function () {
    return this._fo.validity.notAfter;
};

/**
 * 인증서의 CertPolicyID를 반환한다.
 * 
 * @return {string} CertPolicyID
 */
WNCertificate.prototype.getPolicyID = function() {
    var certificatePolicies = this._fo.getExtension('certificatePolicies');
    if(!certificatePolicies)
        return;

    var asn1 = forge.asn1.fromDer(certificatePolicies.value);
    if(asn1.value.length > 0) {
        return forge.asn1.derToOid(asn1.value[0].value[0].value);
    }
};


WNCertificate.prototype.verifyVid = function(idn, vidRandom) {
    // TODO: Too ugly code... refact it
    var subjectAltNames = this._fo.getExtension('subjectAltName');
    var altNames = subjectAltNames.altNames;
    var altName;
    var value;
    var result;
    for(var i = 0; i < altNames.length; i++) {
        altName = altNames[i];
        value =  altName && altName.value && altName.value[0].value;
        if(value === undefined)
            continue;

        // (KH) Rwanda VID OID = 2.16.646.200001.7.1.1 예외 처리 
        if(forge.oids[forge.asn1.derToOid(value)] === 'id-kisa-identifyData' || forge.asn1.derToOid(value) === '2.16.646.200001.7.1.1') {
            var vid = altName.value[1].value[0].value[1].value[0];
            var algDer = vid.value[1].value[0].value[0].value;
            var virtualId = vid.value[1].value[1].value[0].value;

            var asn1 = forge.asn1;
            var plain = asn1.create(asn1.Class.UNIVERSAL, asn1.Type.SEQUENCE, true, [
                asn1.create(asn1.Class.UNIVERSAL, asn1.Type.PRINTABLESTRING, false, idn),
                asn1.create(asn1.Class.UNIVERSAL, asn1.Type.BITSTRING, false, new forge.util.ByteBuffer(vidRandom).getBytes())
            ]);

            var der = asn1.toDer(plain);
            var md = forge.md[forge.oids[forge.asn1.derToOid(algDer)]];
            var digest = md.create();
            digest.start();
            digest.update(der.getBytes());
            result = digest.digest();
            digest.start();
            digest.update(result.getBytes());
            result = digest.digest();
            return result.data === virtualId;
        }
    }
};


/**
 * 인증서의 CertPolicyID에 따른 인증서 용도를 반환한다.<br>
 * webnpki_config.certPolicyTable을 우선 참조 후,<br>
 * 찾을 수 없는 경우 내부 테이블에서 검색한다.<br>
 * <br>
 * 내부 테이블은 다음과 같다.
 * <pre>
 * 한국정보인증
 * 1.2.410.200004.5.2.1.1: 법인 범용
 * 1.2.410.200004.5.2.1.2: 개인 범용
 * 1.2.410.200004.5.2.1.7.1: 은행거래용/보험용
 * 1.2.410.200004.5.2.1.7.2: 증권거래용/보험용
 * 1.2.410.200004.5.2.1.7.3: 신용카드용
 * 
 * 한국 증권 전산
 * 1.2.410.200004.5.1.1.7: 법인 범용
 * 1.2.410.200004.5.1.1.5: 개인 범용
 * 1.2.410.200004.5.1.1.9: 용도제한용
 * 
 * 금융결재원
 * 1.2.410.200005.1.1.5: 법인 범용
 * 1.2.410.200005.1.1.1: 개인 범용
 * 1.2.410.200005.1.1.4: 은행/보험용
 * 1.2.410.200005.1.1.6.2: 신용카드용
 * 
 * 한국전자인증
 * 1.2.410.200004.5.4.1.2: 법인 범용
 * 1.2.410.200004.5.4.1.1: 개인 범용
 * 1.2.410.200004.5.4.1.101: 인터넷뱅킹용
 * 1.2.410.200004.5.4.1.102: 증권거래용
 * 1.2.410.200004.5.4.1.103: 인터넷보험용
 * 1.2.410.200004.5.4.1.104: 신용카드용
 * 1.2.410.200004.5.4.1.105: 전자민원용
 * 1.2.410.200004.5.4.1.106: 인터넷뱅킹용/전자민원용
 * 1.2.410.200004.5.4.1.107: 증권거래용/전자민원용
 * 1.2.410.200004.5.4.1.108: 인터넷보험용/전자민원용
 * 1.2.410.200004.5.4.1.109: 신용카드용/전자민원용
 * 
 * 한국무역통신
 * 1.2.410.200012.1.1.3: 법인 범용
 * 1.2.410.200012.11.31: 은행거래용(서명용)
 * 1.2.410.200012.11.32: 은행거래용(암호용)
 * 1.2.410.200012.11.35: 증권거래용(서명용)
 * 1.2.410.200012.11.36: 증권거래용(암호용)
 * 1.2.410.200012.11.39: 보험거래용(서명용)
 * 1.2.410.200012.11.40: 보험거래용(암호용)
 * 1.2.410.200012.11.43: 신용카드용(서명용)
 * 1.2.410.200012.11.44: 신용카드용(암호용)
 * </pre>
 * 
 * @return {string} 인증서 용도 문자열. 알 수 없는 경우 'Unknown'
 */
WNCertificate.prototype.getPolicyString = function() {
    var result;
    var id = this.getPolicyID();

    if(id && webnpki_config && webnpki_config.certPolicyTable) {
        result = webnpki_config.certPolicyTable[id];
    }

    if(id && !result) {
        result = certPolicyTable[id];
    }
    
    return result ? result : 'Unknown';
};

/**
 * 인증서의 서명 알고리즘을 반환한다.
 * 
 * @return CA에 의해 서명 된 인증서의 서명 알고리즘.
 */
WNCertificate.prototype.getSignAlgorithm = function() {
    return forge.oids[this._fo.signatureOid];
};

/**
 * 키 길이를 반환한다.
 * 
 * @return 키 길이
 */
WNCertificate.prototype.getKeySize = function() {
    return this._fo.publicKey.n.bitLength();
};

module.exports = WNCertificate;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var forge;
__webpack_require__.e(/* require.ensure | forge */ 0).then((function(require) {forge = __webpack_require__(0);}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
var WNBase = __webpack_require__(1);
var WNPrivateKey = __webpack_require__(11);

/**
 * PKCS#8 PrivateKeyInfo 관련 기능을 제공하는 클래스.
 * 
 * Prototype chaining을 통해 WNBase를 상속 받는다.
 * 
 * @classdesc PKCS#8 PrivateKeyInfo 클래스
 * @class
 * @alias WNPrivateKeyInfo
 * 
 * @param {*} fo 래핑 대상 객체. (Internal usage only)
 */
function WNPrivateKeyInfo(fo) {
    this._fo = fo;
    this._fn = {
        pem: {
            to: forge.pki.privateKeyToPem
        }
    }
};

// WNBase 상속
WNPrivateKeyInfo.prototype = new WNBase();

/**
 * 개인키를 획득한다.
 * 
 * @return {WNPrivateKey} 개인키 클래스
 */
WNPrivateKeyInfo.prototype.getPrivateKey = function() {
    return new WNPrivateKey(forge.pki.privateKeyFromAsn1(this._fo));
};

/**
 * 개인키를 설정한다.
 * 
 * @param {WNPrivateKey} privateKey 개인키
 */
WNPrivateKeyInfo.prototype.setPrivateKey = function(privateKey){
    var asn1 = forge.pki.privateKeyToAsn1(privateKey._fo);
    this._fo = forge.pki.wrapRsaPrivateKey(asn1);
};

/**
 * EncryptedPrivateKeyInfo로 암호화 한다.
 * 
 * @param {string} password 암호화에 사용할 비밀번호
 */
WNPrivateKeyInfo.prototype.encrypt = function(password){
    var WNEncryptedPrivateKeyInfo = __webpack_require__(12);
    // SEED로 고정.
    return new WNEncryptedPrivateKeyInfo(forge.pki.encryptPrivateKeyInfo(this._fo, password, {algorithm:'seedCBCWithSHA1'}));
};

WNPrivateKeyInfo.prototype.getAttributes = function() {
    var result = {};
    var attributes = this._fo.value[3];
    var attr;
    var oid;
    var asn1Value;
    // find attribute by oid
    if(attributes !== undefined && attributes.value.length > 0) {
        for(var i = 0; i < attributes.value.length; i++) {
            attr = attributes.value[i];
            oid = forge.asn1.derToOid(attr.value[0].value);
            asn1Value = attr.value[1].value;
            result[forge.oids[oid]] = asn1Value;
        }
    }

    return result;
};

/**
 * 개인키의 R값을 반환한다.
 * 
 * @return {Uint8Array} randomNum
 */
WNPrivateKeyInfo.prototype.getVidRandom = function() {
    var attributes = this._fo.value[3];
    if(attributes === undefined || attributes.value.length === 0)
        return;

    var attr, oid;
    for(var i = 0; i < attributes.value.length; i++) {
        attr = attributes.value[i];
        oid = forge.asn1.derToOid(attr.value[0].value);
        // (KH) Rwanda Random Number OID = 2.16.646.200001.1.1.1.3 예외 처리 
        if (oid === forge.oids['id-randomNum'] || oid === "2.16.646.200001.1.1.1.3") {
            return forge.util.binary.raw.decode(attr.value[1].value[0].value);
        }
    }
};

module.exports = WNPrivateKeyInfo;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(23)
var ieee754 = __webpack_require__(24)
var isArray = __webpack_require__(25)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9).Promise;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;/*!
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
    var vertx = __webpack_require__(18);
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 10 */
/***/ (function(module, exports) {


module.exports = {
    WNCERT_PREFIX: "WN_CERT_",
    WNPRI_PREFIX: "WN_PRI_"
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var forge;
__webpack_require__.e(/* require.ensure | forge */ 0).then((function(require) {forge = __webpack_require__(0);}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
var WNBase = __webpack_require__(1);

/**
 * 개인키 클래스
 * 
 * @classdesc 개인키 클래스
 * @class
 * @alias WNPrivateKey
 * 
 * @param {*} fo 
 */
function WNPrivateKey(fo) {
    this._fo = fo;
    this._fn = {
        asn1: {
            from: forge.pki.privateKeyFromAsn1,
            to: forge.pki.privateKeyToAsn1
        },
        pem: {
            from: forge.pki.privateKeyFromPem,
            to: forge.pki.privateKeyToPem
        }
    }
}

// WNBase 상속
WNPrivateKey.prototype = new WNBase();

module.exports = WNPrivateKey;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var forge;
__webpack_require__.e(/* require.ensure | forge */ 0).then((function(require) { forge = __webpack_require__(0); }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
var WNBase = __webpack_require__(1);
/**
 * PKCS#8 EncryptedPrivateKeyInfo 관련 기능을 제공하는 클래스.
 * 
 * Prototype chaining을 통해 WNBase를 상속 받는다.
 * 
 * @classdesc PKCS#8 EncryptedPrivateKeyInfo 클래스
 * @class
 * @alias WNEncryptedPrivateKeyInfo
 * 
 * @param {*} [fo] 래핑 대상 객체. (Internal usage only)
 */
function WNEncryptedPrivateKeyInfo(fo) {
    this._fo = fo;
    this._fn = {
        pem: {
            from: forge.pki.encryptedPrivateKeyFromPem,
            to: forge.pki.encryptedPrivateKeyToPem
        }
    };
};

// WNBase 상속
WNEncryptedPrivateKeyInfo.prototype = new WNBase();

/**
 * PrivateKeyInfo로 복호화 한다.
 * 
 * @param {string} password 비밀번호
 * 
 * @return {WNPrivateKeyInfo} 복호화 된 개인키 정보
 */
WNEncryptedPrivateKeyInfo.prototype.decrypt = function(password) {
    if (webnpki_config.keyboardSecurity === 'default') {
        var temp = "";
        for (var i = _votmdnjem.length - 1; i >= 0; i--) {
            temp = String.fromCharCode(_votmdnjem[i] ^ _key) + temp;
        }

        password = temp;
    }

    var WNPrivateKeyInfo = __webpack_require__(6);
    var privateKeyInfo;
    try {
        privateKeyInfo = forge.pki.decryptPrivateKeyInfo(this._fo, password);
    } catch (e) {        
        throw { code: "INVALID_PASSWORD", message: KICA_ERROR_MSG.get("INVALID_PASSWORD"), error: new Error().caused = e};
    }
    return new WNPrivateKeyInfo(privateKeyInfo);
};

var _votmdnjem = [];
var _key;

WNEncryptedPrivateKeyInfo.setVotmdnjem = function(start, a) {
    if (!a) {
        _votmdnjem = [];
    } else {
        _votmdnjem.splice(start - 1, 0, a ^ _key);
    }
}

WNEncryptedPrivateKeyInfo.modifyVotmdnjem = function(start, end, type, ctrl) {
    if (ctrl) {
        // in the case of backspace
        if (type === 8) {
            _votmdnjem.splice(0, end);
            // in the case of backspace
        } else {
            _votmdnjem.splice(start, _votmdnjem.length - start);
        }
        return;
    }

    if (start === end) {
        // in the case of backspace
        if (type === 8) {
            if (start === 0) {
                return;
            }
            _votmdnjem.splice(start - 1, 1);
            // in the case of backspace
        } else {
            if (start === _votmdnjem.length) {
                return;
            }
            _votmdnjem.splice(start, 1);
        }
    } else {
        _votmdnjem.splice(start, end - start);
    }
}

window.addEventListener("load", function() {
    if (webnpki_config.keyboardSecurity === 'default') {
        _key = forge.util.binary.raw.decode(forge.random.getBytesSync(1))[0];        
    }
}, false);

module.exports = WNEncryptedPrivateKeyInfo;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var iconv = __webpack_require__(22);
var Buffer = __webpack_require__(2).Buffer;
var forge;
__webpack_require__.e(/* require.ensure | forge */ 0).then((function(require) {
    forge = __webpack_require__(0);
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

function _toBase64(buffer) {
    if (typeof buffer === "string") {
        buffer = new forge.util.ByteBuffer(buffer);
    }

    if (buffer instanceof forge.util.ByteBuffer) {
        return forge.util.encode64(buffer.data);
    } else if (buffer instanceof Uint8Array) {
        return forge.util.binary.base64.encode(buffer);
    }
}

function _toHex(buffer) {
    if(typeof buffer === "string" || buffer instanceof Uint8Array) {
        buffer = new forge.util.ByteBuffer(buffer);
    }

    if(buffer instanceof forge.util.ByteBuffer) {
        return buffer.toHex();
    }
}

function _toPem(buffer, name) {
    if(typeof buffer === "string" || buffer instanceof Uint8Array) {
        buffer = new forge.util.ByteBuffer(buffer);
    }

    return forge.pem.encode({type:name, body: buffer.getBytes()});
}

function convertOutput(buffer, type, pemType) {
    switch (type.toLowerCase()) {
    case "base64":
        return _toBase64(buffer);
    case "hex":
        return _toHex(buffer);
    case "pem":
        return _toPem(buffer, pemType);
    default:
        throw { code: "NO_SUCH_OUTPUT", message: KICA_ERROR_MSG.get("NO_SUCH_OUTPUT", type), error: new Error() };
    }
}

function convertMessage(message, charset) {
    if(charset !== "euckr" && charset !== "utf8") {
        throw { code: "NO_SUCH_CHARSET", message: KICA_ERROR_MSG.get("NO_SUCH_CHARSET", charset), error: new Error() };
    }

    var converted = iconv.encode(message, charset);

    // for IE10 (Safe-Buffer to Uint8Array)
    if(converted instanceof Uint8Array == false) {
        var buffer = converted;
        converted = new Uint8Array(buffer.length);
        for(var i = 0; i < buffer.length; i++) {
            converted[i] = buffer[i];
        }
    }

    return converted;
}

function convertArrayToString(arr, charset) {
    return iconv.decode(Buffer.from(arr), charset);
}

module.exports = {
    input: convertMessage,
    output: convertOutput,
    convertArrayToString: convertArrayToString
};



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (function(lc) {    
    var hhss = __webpack_require__(15);
    //var fgry = require('./SecureStorage/dist/xforgery.min.js');
    var fgry = __webpack_require__(16);
    var core = __webpack_require__(17);
    var _promise = __webpack_require__(9);

    var _i18n = __webpack_require__(37);
    _i18n.setLanguage(webnpki_config.language, function(error) {
        if (error) {
            console.error(error);            
            alert(error);
            return;
        }      
        window.KICA_ERROR_MSG = _i18n;  
    });

    hhss.hcl(webnpki_config.license,
        /* =================================================================================
        // Success Callback
        ====================================================================================*/
        function() {
            var _webnpki = new core(hhss);
            window.webnpki = _webnpki;

            var pf = [  'getWNCertInfo', 
                            'p1Sign', 
                            'p7Sign', 
                            'envelop', 
                            'signedEnvelop', 
                            'getVIDRandom', 
                            'verifyVid', 
                            'getCertListError'];

            // Don't delete this line.  이거 안하면 webnpki 객체가 undefined로 변경됨.
            new fgry(window, 'webnpki', pf);
            // Don't delete this line.  이거 안하면 webnpki 객체가 undefined로 변경됨.
        }, 
        /* =================================================================================
        // Alarm Callback
        // 정식 라이센스인 경우, 만료일이 30일 미만인 경우 호출되며, 
        // success callback도 호출되므로 30일 미만인 경우에도 정상적으로 기능은 동작함.
        ====================================================================================*/
        function(rl) { console.warn('in', new Date(rl.t*1000));  if(!webnpki_config.alert < 2) alert("SecuKit HTML5 license will be expired at: " +  new Date(rl.t*1000));},
        /* =================================================================================
        // Error Callback
        // 정식/개발 라이센스의 만료일이 지난 경우에 호출.
        // success callback은 호출되지 않으므로, 정상적인 기능 동작이 안됨.
        ====================================================================================*/
        function(rl) { console.error('out', new Date(rl.t*1000)); if(webnpki_config.alert) alert("SecuKit HTML5 license is expired at: " +  new Date(rl.t*1000))}
    );
})({});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _0x2e8c="cGFyc2U= Z3plSnU= YmlMSVY= WGJDTkY= TzQ0 ZVFCT00= aFJQZUs= ZzQ0 ekdMU28= WTQw QmNkeHI= VTIw VjIw WldjTlg= ZFNiRW4= cnNJVkk= QnJ5dlU= Yk9yUFY= Q3Vod0c= aEFPb0M= clpmT0I= U2RYTVM= UXZtaGo= MTB8MTN8MXwyfDN8NXwxMXw3fDR8MTJ8OXwxNHwwfDh8Ng== SG51bmY= b3ljS1A= a3l6Z3c= TU5LRVk= bU53UEo= ZElHU3U= QkZNZnQ= a1ptcnU= TkhYeHc= VUp4Y2E= S1duQkY= b0Fja1U= QU5xbGU= UXdVV1I= RXdBamw= Z1V3aU4= bGVuZ3Ro c3BsaXQ= ZnJvbUNoYXJDb2Rl dFpDR0o= Y2hhckNvZGVBdA== SXRBWnA= ZTZw dGp1WEw= bG1ZeVA= TDZw a2tLUmM= UlNYYmM= SzZw VUpCcXc= aGRLZHE= RjQ0 RW5Pa0c= eDZw ZXRkY3M= a0FEU0M= Ykh1akU= cmllbGw= a21wVmI= SmlIREU= SmxqYkY= Y2R4Qks= d3BEVXM= SVRGaVg= WFl1dGU= SE5ZYUE= Q2dzWmI= dFFmSVk= bENzcXM= akhLeUE= cGpnUmk= blNodUg= WmNDWng= OXwwfDZ8MTB8MTF8Mnw1fDF8M3wxMnw4fDR8Nw== R1JqTVU= elFweHQ= SXVXZmc= cVhEdnc= RVJCaFQ= bERsRGU= ZVBKdXo= b3VzZ3Y= S0tPb08= dnFtYnk= dHFMcFA= V3hxS3Y= c214dUI= bXhMU2Q= RmJlRXo= WmxIcmI= bWp3aW4= VVloRk4= c2dhZXA= V29IaXE= aGtJZkc= UlZMWWM= cDRU RDQ0 cVBSbmM= aDZw b0JteFA= S3ZVVkg= bWNxZGU= YjIw VDRU STQ0 cTRU NHwxfDJ8NXwwfDM= eFBkbWw= dHNlYVc= YVNJYWw= b2dHYVQ= d3RZTnY= aElUUnY= UUJIbEc= bnlrb1A= dG9TdHJpbmc= Nnw0fDV8MnwwfDN8MQ== SUp6WmI= bXJLZ1o= Wmp3Ykw= dnFaakg= SEl4b3g= QlNZcEE= Y1FkeEU= S1RFY0k= YnNEQXc= RlVGUkU= REd0QmE= REdvdnM= aURLTnk= U1JBQms= U1pDZ3Y= dnpneWI= RGRUaEk= cnlSc1M= cnVBU2E= Ym5FZ3g= dEdUaEU= dmVhaXk= b3hETmQ= dnNGcGo= TklCWXo= TFZjc0U= VnJvanA= cXVBQk4= S1ZUSGw= aE1EcUY= ZHJiQVk= ckZvRU0= RWdFY2M= b2tOd08= Y1FWeE4= a1N6alg= SU54WEo= amlsQko= bldJeVQ= WGtRVHc= aExNaXA= ZnFuS2w= V1hIcWo= RkpEZ0E= cU5tbEM= a01lSVo= bW1vY1k= a0tCR00= elNyS2Y= bHNzZFE= TUZMc3g= WXVLRUk= Z1J1Ukc= S2xPdnA= b2N0TUc= S3dCbXo= c1VpY0E= Wk9Jclk= TU1sV2Q= aGtIaGU= eWp3T2E= YXN1UHU= QnJueEU= RFBwbnM= bFJWSFQ= QUdNVnE= Q0pzcHA= ZUlTZXA= bU1nTGw= ckJjUlQ= SnptU3E= dmFQYUg= Q2J4bnE= SnFwZkg= TUJodHI= RmFjQVk= emxBWkk= Q2pFaEs= eVdxSVU= b1J4b0E= V0V2cWQ= Unlkc1E= VkhwTmM= VGhEcko= YkhaV1c= TlRDbmo= Wk1nb0Y= U2lldFk= R0F0amk= REF4c3A= SFRGaEk= YkVqeng= QXdKRVc= UFpRY1g= VUp6Rlc= akdzenk= RWljbmw= a2xxbUk= d01XTWg= alNBQWc= d0ZmcFo= dnZpREQ= SEROQ1U= c2xpY2U= bWF0Y2g= YmFZREk= SmNKdmE= TlpleU0= ZlRidVI= aG9zdG5hbWU= dEpUWkg= VGN4ZmE= aEpzVWw= S2Z4UGY= Rmx4Z3I= Zm9sR20= aFpoTlU= WXhmZk4= WnpyQVo= dHdTZ3g= aW5kZXhPZg== UVJsaWw= Z2V0VGltZQ== aUx6aFo= ekttZ2Q= c3RyaW5naWZ5 UG5HUWY= S1BoalE= Z2V0SXRlbQ== UWN6dWk= RGFJcHc= WEpTZnY= SndpQW4= Y2poSGw= cmpTTVI= ZEh3akk= VGJFZVE= ZkhjaG4= V3NqcGs= cWREeXU= dmtjR2E= YURjbHM= aXhiR0M= Q2hsR1c= WlBoZEE= VkxlRmY= bGVRUUM= RHpkaXc= a1RLSWk= a1RMZUo= Z3hadEg= ZXhwb3J0cw== ZnVuY3Rpb24= QkVKbUY= UlRHbWY= ekVic0Y= KkpVRlop Y0Z5WGw= cFdvYmo= MHwxfDJ8NHw1fDM= N3wwfDZ8M3w1fDExfDl8MXw0fDh8MnwxMA== NHwwfDN8Mnwx MXwwfDJ8M3w0 UHRYckw= VHlVZFc= aW5LWWY= MHw0fDJ8NXwxfDM= MTN8N3wxMHw1fDExfDE0fDF8OHwxMnwyfDN8NHw5fDB8Ng== NHw3fDB8M3w2fDl8MXwyfDV8OA== OHw0fDB8OXw2fDN8N3wxfDJ8NQ== N3w0fDh8MXwzfDJ8MHw2fDU= M3wwfDR8Mnwx Mnw2fDR8OHw3fDF8MHwzfDU= VXhuTUo= Yk5leFY= QWJjRGZHaDFKa0xtbjBwUXI1dHVWd1hZejAxMjM0NTc4OSFAIyQlXiYqKClbXXt9LC4vPw== THZnWHQ= b2JqZWN0 N3w2fDV8M3wxfDB8NHwy NHwyfDN8MXw1fDA= ejRU cEVxSVk= YXBwbHk= UTQ0 eTQ0 R091Y3g= ZTIw WnhVUmE= WjQw ZzZw cU1FZmw= SDZw WTRU UjRU YzIw c2l3VW8= eDRU QlB2a2o= STZw ZDQ0 ZDIw eTRU UzZw Q1VWdVY= YTIw STRU dDQw YmlReVA=".split(" ");
(function(e,A){for(A=++A;--A;)e.push(e.shift())})(_0x2e8c,273);
var _0x555e=function(e,A){e-=0;A=_0x2e8c[e];void 0===_0x555e.RYbDwo&&(function(){try{var d=Function('return (function() {}.constructor("return this")( ));')()}catch(J){d=window}d.atob||(d.atob=function(d){d=String(d).replace(/=+$/,"");for(var e=0,A,H,J=0,K="";H=d.charAt(J++);~H&&(A=e%4?64*A+H:H,e++%4)?K+=String.fromCharCode(255&A>>(-2*e&6)):0)H="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(H);return K})}(),_0x555e.OIRhNp=function(d){d=atob(d);for(var e=[],A=0,H=d.length;A<
H;A++)e+="%"+("00"+d.charCodeAt(A).toString(16)).slice(-2);return decodeURIComponent(e)},_0x555e.eoyHjp={},_0x555e.RYbDwo=!0);var d=_0x555e.eoyHjp[e];void 0===d?(A=_0x555e.OIRhNp(A),_0x555e.eoyHjp[e]=A):A=d;return A};
module[_0x555e("0x0")]=function(){function e(){}function A(){for(var a=d[_0x555e("0x113")](K),c="",e=0;d.HDNCU(e,a[_0x555e("0x61")]);e++){if(d[_0x555e("0xcc")](e,1)||d[_0x555e("0xcc")](e,2)||d[_0x555e("0xcc")](e,5))c+="o";if(d[_0x555e("0xcc")](e,1)||d[_0x555e("0x114")](e,4))c+="a";c+=a.substring(e,d[_0x555e("0x112")](e,1))}return d[_0x555e("0x115")](c,"r")}var d={pEqIY:function(a,c){return a===c},XOBmL:function(a,c){return a===c},GOucx:_0x555e("0x1"),ZxURa:function(a,c){return a===c},qMEfl:function(a,
c){return a===c},RMGID:function(a,c){return a===c},ezkRa:function(a,c){return a===c},siwUo:function(a,c){return a===c},BPvkj:function(a,c){return a===c},CUVuV:function(a,c){return a===c},gzeJu:function(a,c){return a(c)},biLIV:function(a,c,d){return a(c,d)},XbCNF:function(a,c){return a(c)},cEWvB:function(a,c){return a(c)},xOZKB:_0x555e("0x2"),biQyP:_0x555e("0x3"),eQBOM:function(a,c){return a===c},hRPeK:function(a,c){return a===c},zGLSo:function(a,c){return a===c},Bcdxr:function(a,c){return a===c},
ZWcNX:function(a,c){return a|c},dSbEn:function(a,c){return a-c},rsIVI:function(a,c){return a*c},BryvU:function(a,c){return a*c},bOrPV:function(a,c){return a-c},CuhwG:function(a,c){return a^c},hAOoC:function(a,c){return a>>>c},rZfOB:function(a,c){return a&c},SdXMS:function(a,c){return a>>c},ITFiX:function(a,c){return a*c},Qvmhj:function(a,c){return a!==c},Hnunf:function(a,c){return a&c},oycKP:function(a,c){return a==c},kyzgw:function(a,c){return a!==c},MNKEY:_0x555e("0x4"),mNwPJ:function(a,c){return a^
c},dIGSu:function(a,c){return a!==c},cjvRa:_0x555e("0x5"),hdKdq:function(a,c){return a%c},UJBqw:_0x555e("0x6"),EnOkG:function(a,c){return a===c},hKFKv:function(a,c){return a===c},kADSC:function(a,c){return a!==c},CsAFi:_0x555e("0x7"),JljbF:function(a,c){return a<c},cdxBK:function(a,c){return a+c},wpDUs:function(a,c){return a>=c},etdcs:function(a,c){return a>c},bHujE:function(a,c){return a(c)},HNYaA:function(a,c){return a|c},hPpKz:function(a,c){return a*c},XYute:function(a,c){return a%c},yGBUV:function(a,
c){return a&c},CgsZb:function(a,c){return a&c},tQfIY:"4|3|6|5|0|1|2",lCsqs:function(a,c){return a+c},jHKyA:function(a,c){return a*c},pjgRi:function(a,c){return a|c},nShuH:function(a,c){return a<<c},ZcCZx:function(a,c){return a&c},qPRnc:function(a,c){return a===c},mcqde:function(a,c,d){return a(c,d)},oBmxP:function(a,c){return a!==c},xPdml:function(a,c){return a&c},SRABk:function(a,c){return a>>c},tseaW:function(a,c){return a&c},aSIal:function(a,c){return a==c},ogGaT:function(a,c){return a==c},wtYNv:function(a,
c){return a%c},hITRv:function(a,c){return a%c},QBHlG:function(a,c){return a+c},nykoP:function(a,c){return a%c},IJzZb:_0x555e("0x8"),mrKgZ:_0x555e("0x9"),ZjwbL:function(a,c){return a==c},vqZjH:function(a,c){return a%c},HIxox:function(a,c){return a%c},BSYpA:function(a,c){return a==c},KTEcI:function(a,c){return a==c},myBPq:_0x555e("0xa"),cQdxE:function(a,c){return a+c},wBvkk:_0x555e("0xb"),FUFRE:function(a,c){return a!==c},bsDAw:"2|1|7|3|4|0|5|6",BWaQG:function(a,c){return a+c},DGtBa:function(a,c){return a!=
c},DGovs:function(a,c){return a<c},iDKNy:function(a,c){return a===c},AOEsd:_0x555e("0xc"),bwFIV:"WIwqn",rlyzx:function(a,c){return a>c},aPTxm:function(a,c){return a>c},SZCgv:function(a,c){return a>c},vzgyb:function(a,c){return a|c},qtbcZ:function(a,c){return a|c},DdThI:function(a,c){return a>>c},cJLDH:function(a,c){return a|c},ryRsS:function(a,c){return a&c},ruASa:function(a,c,d){return a(c,d)},bnEgx:function(a,c){return a<c},tGThE:function(a,c){return a&c},veaiy:function(a,c){return a+c},oxDNd:"8|4|1|9|7|0|3|2|5|6",
vsFpj:function(a,c){return a&c},NIBYz:function(a,c){return a&c},uxOrq:function(a,c){return a&c},rFoEM:function(a,c){return a&c},LVcsE:function(a,c){return a===c},Vrojp:_0x555e("0xd"),quABN:_0x555e("0xe"),drbAY:_0x555e("0xf"),okNwO:function(a,c){return a&c},EgEcc:_0x555e("0x10"),cQVxN:function(a,c){return a&c},kSzjX:function(a,c){return a==c},INxXJ:function(a,c){return a&c},hLMip:_0x555e("0x11"),fqnKl:function(a,c,d){return a(c,d)},WXHqj:function(a,c){return a%c},FJDgA:function(a,c){return a&c},qNmlC:function(a,
c){return a>>c},kMeIZ:function(a,c){return a&c},mmocY:function(a,c){return a>>c},zSrKf:function(a,c){return a&c},kKBGM:function(a,c){return a>c},lssdQ:function(a,c){return a&c},yjwOa:"6|5|4|1|0|3|2|7|8",BrnxE:function(a,c){return a==c},asuPu:function(a,c){return a(c)},DPpns:function(a,c){return a+c},lRVHT:function(a,c){return a>c},AGMVq:function(a,c){return a%c},jilBJ:_0x555e("0x12"),nWIyT:function(a,c){return a<<c},XkQTw:function(a,c){return a&c},CJspp:function(a,c,d){return a(c,d)},eISep:function(a,
c){return a(c)},JzmSq:_0x555e("0x13"),zlAZI:function(a,c){return a!==c},vaPaH:_0x555e("0x14"),Cbxnq:function(a,c){return a*c},JqpfH:function(a,c){return a==c},nVtvB:function(a,c){return a(c)},EksFD:function(a,c){return a==c},jgcXK:function(a,c){return a>c},MBhtr:function(a,c){return a==c},CjEhK:_0x555e("0x15"),yWqIU:function(a,c){return a*c},oRxoA:function(a,c){return a/c},WEvqd:_0x555e("0x16"),RydsQ:function(a,c){return a==c},VHpNc:function(a,c){return a&c},Hhlrr:function(a,c){return a-c},ThDrJ:function(a,
c){return a>c},bHZWW:function(a,c){return a-c},NTCnj:function(a,c){return a>=c},mMgLl:function(a,c){return a!==c},rBcRT:function(a,c,d){return a(c,d)},FacAY:function(a,c){return a(c)},dsXHe:_0x555e("0x17"),ZMgoF:_0x555e("0x18"),DAxsp:function(a,c){return a/c},WlHSj:function(a,c){return a+c},HTFhI:function(a,c){return a+c},bEjzx:function(a,c){return a+c},AwJEW:function(a,c){return a(c)},PZQcX:function(a,c){return a(c)},UJzFW:function(a,c){return a-c},jGszy:function(a,c){return a+c},Eicnl:function(a){return a()},
HDNCU:function(a,c){return a<c},klqmI:function(a,c){return a===c},wMWMh:function(a,c){return a+c},jSAAg:function(a,c){return a!==c},wFfpZ:_0x555e("0x19"),Tcxfa:_0x555e("0x1a"),hJsUl:function(a,c){return a(c)},KfxPf:function(a){return a()},twSgx:"0|2|4|3|1",QRlil:function(a,c){return a-c},iLzhZ:function(a,c){return a>c},zKmgd:function(a,c){return a!==c},cjhHl:function(a,c){return a===c},PnGQf:function(a){return a()},KPhjQ:function(a,c){return a(c)},Qczui:function(a,c){return a(c)},DaIpw:function(a,
c){return a(c)},XJSfv:function(a){return a()},xrEWW:_0x555e("0x1b"),baYDI:function(a,c){return a%c},JcJva:_0x555e("0x1c"),NZeyM:function(a,c){return a%c},RgGPE:function(a,c){return a&c},fTbuR:function(a,c){return a!==c},MQISp:"HSGor",tJTZH:function(a,c){return a(c)},JwiAn:function(a){return a()},rjSMR:function(a,c,d){return a(c,d)},dHwjI:function(a,c){return a(c)},ZPhdA:function(a,c,d,e,t){return a(c,d,e,t)},VLeFf:function(a,c,d,e){return a(c,d,e)},leQQC:function(a,c,d,e,t){return a(c,d,e,t)},Dzdiw:function(a,
c,d,e){return a(c,d,e)},gYBGM:"AmMpD",kTKIi:"nSxrd",kTLeJ:function(a,c){return a(c)},gxZtH:function(a,c,d){return a(c,d)}};e[_0x555e("0x1d")]=function(){return d[_0x555e("0x1e")](typeof e.R4T.n7,_0x555e("0x1"))?e.R4T.n7[_0x555e("0x1f")](e.R4T,arguments):e.R4T.n7};e[_0x555e("0x20")]=function(){return d.XOBmL(typeof e[_0x555e("0x21")].e6,d[_0x555e("0x22")])?e[_0x555e("0x21")].e6[_0x555e("0x1f")](e[_0x555e("0x21")],arguments):e.y44.e6};e[_0x555e("0x23")]=function(){return d[_0x555e("0x24")](typeof e[_0x555e("0x25")].i4,
_0x555e("0x1"))?e[_0x555e("0x25")].i4.apply(e[_0x555e("0x25")],arguments):e[_0x555e("0x25")].i4};e[_0x555e("0x26")]=function(){return d[_0x555e("0x27")](typeof e[_0x555e("0x28")].i4,_0x555e("0x1"))?e[_0x555e("0x28")].i4[_0x555e("0x1f")](e[_0x555e("0x28")],arguments):e[_0x555e("0x28")].i4};e[_0x555e("0x29")]=function(){return d.RMGID(typeof e[_0x555e("0x2a")].B2,d[_0x555e("0x22")])?e.R4T.B2[_0x555e("0x1f")](e.R4T,arguments):e[_0x555e("0x2a")].B2};e.U20=function(){return d.ezkRa(typeof e[_0x555e("0x25")].e6,
d[_0x555e("0x22")])?e[_0x555e("0x25")].e6.apply(e[_0x555e("0x25")],arguments):e[_0x555e("0x25")].e6};e[_0x555e("0x2b")]=function(){return typeof e[_0x555e("0x25")].p4===d[_0x555e("0x22")]?e[_0x555e("0x25")].p4[_0x555e("0x1f")](e[_0x555e("0x25")],arguments):e.Z40.p4};e.z44=function(){return d[_0x555e("0x2c")](typeof e[_0x555e("0x21")].p4,d.GOucx)?e[_0x555e("0x21")].p4.apply(e.y44,arguments):e[_0x555e("0x21")].p4};e.M44=function(){return d[_0x555e("0x2c")](typeof e[_0x555e("0x21")].p4,d.GOucx)?e[_0x555e("0x21")].p4.apply(e[_0x555e("0x21")],
arguments):e[_0x555e("0x21")].p4};e[_0x555e("0x2d")]=function(){return d[_0x555e("0x2e")](typeof e[_0x555e("0x2a")].e6,_0x555e("0x1"))?e[_0x555e("0x2a")].e6[_0x555e("0x1f")](e[_0x555e("0x2a")],arguments):e[_0x555e("0x2a")].e6};e[_0x555e("0x2f")]=function(){return d[_0x555e("0x2e")](typeof e[_0x555e("0x28")].B2,d[_0x555e("0x22")])?e[_0x555e("0x28")].B2[_0x555e("0x1f")](e.H6p,arguments):e[_0x555e("0x28")].B2};e[_0x555e("0x30")]=function(){return d.BPvkj(typeof e[_0x555e("0x21")].i4,d[_0x555e("0x22")])?
e[_0x555e("0x21")].i4[_0x555e("0x1f")](e[_0x555e("0x21")],arguments):e[_0x555e("0x21")].i4};e[_0x555e("0x31")]=function(){return d[_0x555e("0x2e")](typeof e[_0x555e("0x25")].p4,d[_0x555e("0x22")])?e[_0x555e("0x25")].p4[_0x555e("0x1f")](e[_0x555e("0x25")],arguments):e[_0x555e("0x25")].p4};e[_0x555e("0x32")]=function(){return typeof e[_0x555e("0x2a")].B2===d[_0x555e("0x22")]?e[_0x555e("0x2a")].B2[_0x555e("0x1f")](e.R4T,arguments):e[_0x555e("0x2a")].B2};e[_0x555e("0x33")]=function(){return d[_0x555e("0x34")](typeof e[_0x555e("0x28")].e6,
"function")?e[_0x555e("0x28")].e6[_0x555e("0x1f")](e.H6p,arguments):e[_0x555e("0x28")].e6};e[_0x555e("0x35")]=function(){return typeof e[_0x555e("0x25")].n7===d.GOucx?e[_0x555e("0x25")].n7[_0x555e("0x1f")](e.Z40,arguments):e[_0x555e("0x25")].n7};e.F4T=function(){return d.CUVuV(typeof e[_0x555e("0x2a")].i4,_0x555e("0x1"))?e.R4T.i4[_0x555e("0x1f")](e[_0x555e("0x2a")],arguments):e[_0x555e("0x2a")].i4};e[_0x555e("0x36")]=function(){return typeof e.R4T.n7===d[_0x555e("0x22")]?e[_0x555e("0x2a")].n7[_0x555e("0x1f")](e.R4T,
arguments):e[_0x555e("0x2a")].n7};e[_0x555e("0x37")]=function(){if(d.xOZKB===d[_0x555e("0x38")])try{return JSON[_0x555e("0x39")](d[_0x555e("0x3a")](L,d[_0x555e("0x3b")](M,d.gzeJu(J,d[_0x555e("0x3c")](N,__lic)),d.cEWvB(A,{a:0}))))}catch(a){return{}}else return d.eQBOM(typeof e[_0x555e("0x25")].B2,d[_0x555e("0x22")])?e[_0x555e("0x25")].B2[_0x555e("0x1f")](e[_0x555e("0x25")],arguments):e[_0x555e("0x25")].B2};e[_0x555e("0x3d")]=function(){return d[_0x555e("0x3e")](typeof e[_0x555e("0x21")].i4,_0x555e("0x1"))?
e[_0x555e("0x21")].i4[_0x555e("0x1f")](e[_0x555e("0x21")],arguments):e[_0x555e("0x21")].i4};e.F20=function(){return d.eQBOM(typeof e[_0x555e("0x25")].i4,d[_0x555e("0x22")])?e[_0x555e("0x25")].i4.apply(e.Z40,arguments):e[_0x555e("0x25")].i4};e.d6p=function(){return d[_0x555e("0x3f")](typeof e[_0x555e("0x28")].B2,_0x555e("0x1"))?e[_0x555e("0x28")].B2[_0x555e("0x1f")](e.H6p,arguments):e[_0x555e("0x28")].B2};e[_0x555e("0x40")]=function(){return d[_0x555e("0x41")](typeof e[_0x555e("0x21")].B2,d[_0x555e("0x22")])?
e.y44.B2.apply(e[_0x555e("0x21")],arguments):e[_0x555e("0x21")].B2};e[_0x555e("0x42")]=function(){return d[_0x555e("0x43")](typeof e.Z40.B2,d[_0x555e("0x22")])?e[_0x555e("0x25")].B2[_0x555e("0x1f")](e.Z40,arguments):e[_0x555e("0x25")].B2};e.H6p=function(a){return{p4:function(){var c=arguments;switch(a){case e[_0x555e("0x44")]()[14][1]:var m=c[0]/c[1];break;case e[_0x555e("0x45")]()[17][4]:m=d[_0x555e("0x46")](c[1]<<c[2],c[0]);break;case e.V20()[6][13]:m=d[_0x555e("0x47")](d[_0x555e("0x48")](c[1],
c[0]),c[2]);break;case e.U20()[4][10]:m=c[0]^c[1];break;case e[_0x555e("0x44")]()[5][6]:m=d[_0x555e("0x49")](d[_0x555e("0x4a")](c[1],c[3]),-c[0])/c[2];break;case e[_0x555e("0x45")]()[4][8]:m=d[_0x555e("0x4b")](d[_0x555e("0x4c")](c[0],c[2]),c[1]);break;case e.V20()[5][0][6]:m=c[1]-c[2]+c[0];break;case e[_0x555e("0x45")]()[9][11][5]:m=d[_0x555e("0x4d")](d[_0x555e("0x4e")](c[2],c[0]),c[1]);break;case e[_0x555e("0x45")]()[17][17]:m=d[_0x555e("0x4a")](d.ITFiX(c[1]*c[3],c[0]),c[2]);break;case e[_0x555e("0x45")]()[13][7]:m=
c[1]+c[0]}return m},i4:function(c){a=c}}}();e[_0x555e("0x2a")]=function(){for(var a={YeclV:function(c,a){return d[_0x555e("0x4f")](c,a)},BFMft:_0x555e("0x50"),kZmru:function(c,a){return d[_0x555e("0x4d")](c,a)},NHXxw:function(c,a){return d[_0x555e("0x51")](c,a)},OdRcG:function(c,a){return d[_0x555e("0x52")](c,a)},UJxca:function(c,a){return c<a},KWnBF:function(c,a){return c!==a},oAckU:function(c,a){return d[_0x555e("0x53")](c,a)},ANqle:d[_0x555e("0x54")],QwUWR:"Ztvxa",EwAjl:function(a,e){return d.cEWvB(a,
e)},gUwiN:"L&:)(%0DZ%25%25b6FI+!/5G%0E?;%22?OC$0%22~OX%258%052HX%09:%22?%0DF/;!.A%0E9!43GMn%2545%5DE):*~Y_9=b2FY%3E;'7L%0E)='(jE.0%07.%0D",tZCGJ:function(a,e){return d[_0x555e("0x55")](a,e)}};d[_0x555e("0x56")](2,1);)return{n7:function(c){for(var d={ItAZp:a[_0x555e("0x57")],tjuXL:function(c,d){return a[_0x555e("0x58")](c,d)},lmYyP:function(c,d){return a[_0x555e("0x59")](c,d)},EvwwS:function(c,d){return a.OdRcG(c,d)},kkKRc:function(a,c){return a&c},UtBca:function(c,d){return a[_0x555e("0x5a")](c,d)},
RSXbc:function(a,c){return a+c}},e=2;a[_0x555e("0x5b")](e,14);)if(a[_0x555e("0x5c")](a[_0x555e("0x5d")],a[_0x555e("0x5e")]))switch(e){case 2:var t="",x=a[_0x555e("0x5f")](decodeURI,a[_0x555e("0x60")]);e=1;break;case 3:q=0;e=9;break;case 5:e=D<x[_0x555e("0x61")]?4:7;break;case 7:return t=t[_0x555e("0x62")]("$"),function(c){for(;a.YeclV(2,1);)return t[c]};case 4:e=q===c[_0x555e("0x61")]?3:9;break;case 1:var D=0,q=0;e=5;break;case 8:D++;q++;e=5;break;case 9:t+=String[_0x555e("0x63")](a[_0x555e("0x64")](x[_0x555e("0x65")](D),
c[_0x555e("0x65")](q))),e=8}else for(var C=d[_0x555e("0x66")][_0x555e("0x62")]("|"),w=0;;){switch(C[w++]){case "0":G0f<<=6;continue;case "1":var B=N20[_0x555e("0x67")](14,2);continue;case "2":G0f=d.tjuXL(B,g0f[W0f++]);continue;case "3":G0f<<=6;continue;case "4":G0f<<=6;continue;case "5":N20.K6p(N20.V20()[3][5]);continue;case "6":V0f+=String[N20[_0x555e("0x1d")](4)](G0f);continue;case "7":G0f+=d[_0x555e("0x68")](z,g0f[W0f++]);continue;case "8":G0f+=d[_0x555e("0x69")](63,g0f[W0f++]);continue;case "9":var u=
N20[_0x555e("0x6a")](82,5,347);continue;case "10":if(!d.EvwwS(240,d[_0x555e("0x6b")](241,g0f[W0f]))||!d.UtBca(d[_0x555e("0x6c")](W0f,3),g0f[N20[_0x555e("0x1d")](5)]))return N20[_0x555e("0x36")](11);continue;case "11":var z=N20[_0x555e("0x67")](16,8,16065,126);continue;case "12":N20[_0x555e("0x26")](N20[_0x555e("0x44")]()[8][7]);continue;case "13":N20[_0x555e("0x26")](N20.V20()[6][7]);continue;case "14":G0f+=u&g0f[W0f++];continue}break}}(d.cjvRa)}}();e[_0x555e("0x6d")]=function(){if(d[_0x555e("0x56")](d[_0x555e("0x6e")],
d[_0x555e("0x6e")]))K0f<<=4,r20.g6p(r20[_0x555e("0x45")]()[4][17]),K0f|=r20.L6p(0,15,f0f),0==d[_0x555e("0x6f")](++l0f,2)&&(w0f[r20.I4T(8)](K0f),K0f=0,l0f=0),H74+=2;else return d[_0x555e("0x43")](typeof e.H6p.i4,d[_0x555e("0x22")])?e[_0x555e("0x28")].i4[_0x555e("0x1f")](e[_0x555e("0x28")],arguments):e.H6p.i4};e[_0x555e("0x70")]=function(){return d.EnOkG(typeof e[_0x555e("0x21")].e6,d[_0x555e("0x22")])?e[_0x555e("0x21")].e6[_0x555e("0x1f")](e[_0x555e("0x21")],arguments):e[_0x555e("0x21")].e6};e[_0x555e("0x45")]=
function(){return d[_0x555e("0x71")](typeof e[_0x555e("0x25")].e6,_0x555e("0x1"))?e.Z40.e6[_0x555e("0x1f")](e[_0x555e("0x25")],arguments):e[_0x555e("0x25")].e6};e[_0x555e("0x72")]=function(){return d.hKFKv(typeof e.H6p.n7,d[_0x555e("0x22")])?e[_0x555e("0x28")].n7.apply(e.H6p,arguments):e[_0x555e("0x28")].n7};e.Z40=function(){for(var a={riell:function(c,a){return d[_0x555e("0x73")](c,a)},kmpVb:function(a,e){return d[_0x555e("0x74")](a,e)},JiHDE:function(a,e){return d[_0x555e("0x75")](a,e)}};d[_0x555e("0x74")](2,
1);)return{e6:function(c,e){for(var k=2;d.dIGSu(k,10);)if(d[_0x555e("0x74")](d.CsAFi,d.CsAFi)){if(a[_0x555e("0x76")](l,0)){if(2592E3>l&&a[_0x555e("0x77")](o.d,"."))a[_0x555e("0x78")](b,o);rtn=!0}}else switch(k){case 12:q+=1;k=8;break;case 8:k=d[_0x555e("0x79")](q,c)?7:11;break;case 4:D[d[_0x555e("0x7a")](m,e)%c]=[];k=3;break;case 1:var m=0;k=5;break;case 13:--x;k=6;break;case 11:return D;case 6:k=d[_0x555e("0x7b")](x,0)?14:12;break;case 7:var x=d.bOrPV(c,1);k=6;break;case 2:var D=[];k=1;break;case 9:var q=
0;k=8;break;case 14:D[q][d[_0x555e("0x6f")](d[_0x555e("0x7a")](x,d[_0x555e("0x7c")](e,q)),c)]=D[x];k=13;break;case 5:k=d[_0x555e("0x79")](m,c)?4:9;break;case 3:m+=1,k=5}}(18,6)}}();e.e6p=function(){return typeof e[_0x555e("0x28")].p4===d[_0x555e("0x22")]?e[_0x555e("0x28")].p4.apply(e[_0x555e("0x28")],arguments):e[_0x555e("0x28")].p4};e[_0x555e("0x21")]=function(){var a={GRjMU:function(a,c){return a>>>c},zQpxt:function(a,c){return d[_0x555e("0x7d")](a,c)},IuWfg:function(a,c){return a<<c},qXDvw:function(a,
c){return d.yGBUV(a,c)},AbZec:function(a,c){return a+c},ERBhT:function(a,c,d){return a(c,d)},lDlDe:function(a,c){return d[_0x555e("0x7e")](a,c)},ePJuz:function(a,c){return d[_0x555e("0x7f")](a,c)},ousgv:function(a,c){return d.hAOoC(a,c)},KKOoO:function(a,c){return d[_0x555e("0x79")](a,c)},yVaqD:d[_0x555e("0x80")],vqmby:function(a,c){return d[_0x555e("0x4c")](a,c)},tqLpP:function(a,c){return d[_0x555e("0x7e")](a,c)},vziGo:function(a,c){return d[_0x555e("0x81")](a,c)},WxqKv:function(a,c){return d[_0x555e("0x82")](a,
c)},smxuB:function(a,c,e){return d[_0x555e("0x3b")](a,c,e)},mxLSd:function(a,c){return d[_0x555e("0x83")](a,c)},FbeEz:function(a,c){return a&c},ZlHrb:function(a,c){return d[_0x555e("0x84")](a,c)},mjwin:function(a,c){return d[_0x555e("0x85")](a,c)},UYhFN:function(a,c){return d[_0x555e("0x81")](a,c)},WoHiq:function(a,c){return d.ZcCZx(a,c)},sgaep:function(a,c){return d[_0x555e("0x81")](a,c)},hkIfG:function(a,c){return d.hAOoC(a,c)},RVLYc:function(a,c){return d[_0x555e("0x4c")](a,c)}},c=function(a,c){var e=
c&65535;c-=e;return d.HNYaA(d[_0x555e("0x7a")](d[_0x555e("0x7e")](d.hPpKz(c,a),0),d.HNYaA(e*a,0)),0)};return{B2:function(d,e,t){for(var k=_0x555e("0x86")[_0x555e("0x62")]("|"),m=0;;){switch(k[m++]){case "0":var q=t;continue;case "1":q^=a[_0x555e("0x87")](q,16);continue;case "2":switch(a[_0x555e("0x88")](e,4)){case 3:v=a[_0x555e("0x89")](a[_0x555e("0x8a")](d[_0x555e("0x65")](a.AbZec(C,2)),255),16);case 2:v|=a[_0x555e("0x89")](d[_0x555e("0x65")](C+1)&255,8);case 1:v|=a[_0x555e("0x8a")](d[_0x555e("0x65")](C),
255),v=a[_0x555e("0x8b")](c,v,w),v=a[_0x555e("0x8c")](a.IuWfg(a[_0x555e("0x8d")](v,131071),15),a.GRjMU(v,17)),v=c(v,B),q^=v}continue;case "3":q=a[_0x555e("0x8b")](c,q,2246822507);continue;case "4":q^=a[_0x555e("0x8e")](q,16);continue;case "5":q^=e;continue;case "6":var C=a[_0x555e("0x8d")](e,-4);continue;case "7":return q;case "8":q=c(q,3266489909);continue;case "9":var w=3432918353,B=461845907;continue;case "10":for(var u=0;a[_0x555e("0x8f")](u,C);u+=4)for(var z=a.yVaqD[_0x555e("0x62")]("|"),y=0;;){switch(z[y++]){case "0":q^=
v;continue;case "1":q=a[_0x555e("0x89")](a[_0x555e("0x8d")](q,524287),13)|a[_0x555e("0x90")](q,19);continue;case "2":q=a[_0x555e("0x91")](a.vziGo(a[_0x555e("0x92")](q,5),3864292196),0);continue;case "3":v=a[_0x555e("0x93")](c,v,w);continue;case "4":var v=a[_0x555e("0x94")](a.mxLSd(a[_0x555e("0x95")](d[_0x555e("0x65")](u),255),a[_0x555e("0x96")](a[_0x555e("0x97")](d.charCodeAt(a[_0x555e("0x98")](u,1)),255),8)),a.ZlHrb(a.WoHiq(d.charCodeAt(a[_0x555e("0x99")](u,2)),255),16))|(d.charCodeAt(a[_0x555e("0x99")](u,
3))&255)<<24;continue;case "5":v=c(v,B);continue;case "6":v=a.mxLSd(a[_0x555e("0x9a")](v,131071)<<15,a[_0x555e("0x9b")](v,17));continue}break}continue;case "11":v=0;continue;case "12":q^=a[_0x555e("0x9c")](q,13);continue}break}}}}();e[_0x555e("0x9d")]=function(){return d.qPRnc(typeof e[_0x555e("0x2a")].e6,_0x555e("0x1"))?e[_0x555e("0x2a")].e6[_0x555e("0x1f")](e[_0x555e("0x2a")],arguments):e[_0x555e("0x2a")].e6};e[_0x555e("0x9e")]=function(){return d[_0x555e("0x9f")](typeof e.y44.B2,d[_0x555e("0x22")])?
e.y44.B2[_0x555e("0x1f")](e[_0x555e("0x21")],arguments):e[_0x555e("0x21")].B2};e.k4T=function(){return d[_0x555e("0x9f")](typeof e[_0x555e("0x2a")].p4,d[_0x555e("0x22")])?e[_0x555e("0x2a")].p4.apply(e[_0x555e("0x2a")],arguments):e[_0x555e("0x2a")].p4};e.F6p=function(){return d[_0x555e("0x9f")](typeof e[_0x555e("0x28")].e6,d[_0x555e("0x22")])?e[_0x555e("0x28")].e6[_0x555e("0x1f")](e.H6p,arguments):e[_0x555e("0x28")].e6};e[_0x555e("0xa0")]=function(){return d[_0x555e("0x9f")](typeof e[_0x555e("0x28")].n7,
d[_0x555e("0x22")])?e[_0x555e("0x28")].n7.apply(e.H6p,arguments):e[_0x555e("0x28")].n7};e.L6p=function(){return typeof e[_0x555e("0x28")].p4===d[_0x555e("0x22")]?e[_0x555e("0x28")].p4[_0x555e("0x1f")](e.H6p,arguments):e.H6p.p4};e.n44=function(){if(d[_0x555e("0xa1")](_0x555e("0xa2"),_0x555e("0xa2")))M0f=d[_0x555e("0xa3")](q0f,x0f[w20[_0x555e("0x36")](5)],t0f),h0f=M0f[w20.I4T(5)],Z0f=j0f=8,y0f=2,o0f=6,a6f=x0f[w20.z4T(5)],c44+=2;else return d[_0x555e("0x9f")](typeof e[_0x555e("0x21")].n7,d[_0x555e("0x22")])?
e[_0x555e("0x21")].n7.apply(e[_0x555e("0x21")],arguments):e[_0x555e("0x21")].n7};e[_0x555e("0xa4")]=function(){return d[_0x555e("0x9f")](typeof e.Z40.n7,d.GOucx)?e[_0x555e("0x25")].n7[_0x555e("0x1f")](e[_0x555e("0x25")],arguments):e.Z40.n7};e[_0x555e("0xa5")]=function(){return d[_0x555e("0x9f")](typeof e[_0x555e("0x2a")].i4,d[_0x555e("0x22")])?e[_0x555e("0x2a")].i4[_0x555e("0x1f")](e[_0x555e("0x2a")],arguments):e[_0x555e("0x2a")].i4};e[_0x555e("0xa6")]=function(){return typeof e.y44.n7===d.GOucx?
e[_0x555e("0x21")].n7.apply(e[_0x555e("0x21")],arguments):e[_0x555e("0x21")].n7};e[_0x555e("0xa7")]=function(){return d[_0x555e("0x9f")](typeof e[_0x555e("0x2a")].p4,d.GOucx)?e[_0x555e("0x2a")].p4[_0x555e("0x1f")](e[_0x555e("0x2a")],arguments):e[_0x555e("0x2a")].p4};var H=function(a){var c,m;var k=m=0;var t=e.I4T(11);for(c=0;d[_0x555e("0x79")](c,a[e[_0x555e("0x36")](5)]);++c)for(var x=_0x555e("0xa8")[_0x555e("0x62")]("|"),D=0;;){switch(x[D++]){case "0":k|=d[_0x555e("0xa9")](d.SRABk(a[c],0),15);continue;
case "1":k|=d[_0x555e("0xaa")](a[c]>>4,15);continue;case "2":d[_0x555e("0xab")](d[_0x555e("0x7d")](++m,3),0)&&(t+=String[e[_0x555e("0x1d")](4)](d[_0x555e("0x81")](45056,k)),m=0,k=0);continue;case "3":d[_0x555e("0xac")](d[_0x555e("0xad")](++m,3),0)&&(t+=String[e.I4T(4)](45056+k),m=0,k=0);continue;case "4":k<<=4;continue;case "5":k<<=4;continue}break}return 0<d[_0x555e("0xae")](m,3)&&(t+=String[e[_0x555e("0x1d")](4)](d[_0x555e("0xaf")](45056+4096*d[_0x555e("0xb0")](m,3),k))),t};var J=function(a){var c=
2;for(var m=1;d.oBmxP(e[_0x555e("0x9e")](m[_0x555e("0xb1")](),m[_0x555e("0xb1")]().length,50274),-1573123184);m++)for(var k=_0x555e("0xb2").split("|"),t=0;;){switch(k[t++]){case "0":var x=[];continue;case "1":c+=2;continue;case "2":var D=4;continue;case "3":var q=1;continue;case "4":var C=3;continue;case "5":var w=5;continue;case "6":continue}break}if(d[_0x555e("0xa1")](e[_0x555e("0x9e")](c[_0x555e("0xb1")](),c[_0x555e("0xb1")]().length,44910),-1741515762))for(c=d[_0x555e("0xb3")][_0x555e("0x62")]("|"),
m=0;;){switch(c[m++]){case "0":continue;case "1":C=0;continue;case "2":w=0;continue;case "3":q=0;continue;case "4":D=0;continue;case "5":x=[];continue}break}for(c=0;d.JljbF(c,a[e[_0x555e("0x1d")](5)])&&(w=a[e[_0x555e("0x36")](10)](c),D=w>>>12,d.ogGaT(11,D));++c)for(m=d[_0x555e("0xb4")][_0x555e("0x62")]("|"),k=0;;){switch(m[k++]){case "0":e[_0x555e("0x26")](e[_0x555e("0x45")]()[3][11]);continue;case "1":d[_0x555e("0xb5")](d[_0x555e("0xb6")](++C,2),0)&&(x[e[_0x555e("0x1d")](8)](q),q=0,C=0);continue;
case "2":q|=e[_0x555e("0x6a")](0,15,w);continue;case "3":d[_0x555e("0xb5")](d[_0x555e("0xb7")](++C,2),0)&&(x[e[_0x555e("0x1d")](8)](q),q=0,C=0);continue;case "4":q<<=4;continue;case "5":q<<=4;continue;case "6":q|=e[_0x555e("0x67")](8,15,w);continue;case "7":q<<=4;continue;case "8":e[_0x555e("0x26")](e[_0x555e("0x44")]()[11][5]);continue;case "9":q|=e[_0x555e("0x6a")](4,15,w);continue;case "10":d[_0x555e("0xb8")](d[_0x555e("0xb7")](++C,2),0)&&(x[e.z4T(8)](q),q=0,C=0);continue;case "11":e[_0x555e("0x26")](e[_0x555e("0x45")]()[16][17]);
continue}break}if(d.KTEcI(12,D))for(a=d.myBPq.split("|"),D=0;;){switch(a[D++]){case "0":var B=113229380;continue;case "1":e.D44(u[_0x555e("0xb1")](),u[_0x555e("0xb1")]()[_0x555e("0x61")],30999)!==B&&(q>>=1,e[_0x555e("0x6d")](e[_0x555e("0x44")]()[9][2]),q&=e[_0x555e("0x6a")](w,32,9),7!==d[_0x555e("0xb9")](--C,6)||(x[e[_0x555e("0x1d")](11)](q),q=6,C=7));continue;case "2":for(c=1;d[_0x555e("0xa1")](e[_0x555e("0x9e")](c[_0x555e("0xb1")](),c.toString()[_0x555e("0x61")],19413),z);c++)for(m=d.wBvkk[_0x555e("0x62")]("|"),
k=0;;){switch(m[k++]){case "0":e.g6p(e[_0x555e("0x45")]()[4][17]);continue;case "1":q<<=4;continue;case "2":q|=e[_0x555e("0x6a")](0,15,w);continue;case "3":0==++C%2&&(x[e[_0x555e("0x36")](8)](q),q=0,C=0);continue;case "4":u+=2;continue}break}continue;case "3":var u=2;continue;case "4":var z=-1225934288;continue}break}else if(d[_0x555e("0xba")](13,D)){z=2;for(B=1;d.oBmxP(e[_0x555e("0x9e")](B[_0x555e("0xb1")](),B[_0x555e("0xb1")]().length,39378),-452410440);B++)q<<=4,e.g6p(e[_0x555e("0x45")]()[7][17]),
q|=e.e6p(4,15,w),0==d[_0x555e("0xb7")](++C,2)&&(x[e[_0x555e("0x1d")](8)](q),q=0,C=0),q<<=4,e[_0x555e("0x6d")](e[_0x555e("0x44")]()[1][17]),q|=e.e6p(0,15,w),0==++C%2&&(x[e[_0x555e("0x36")](8)](q),q=0,C=0),z+=2;if(d.FUFRE(e[_0x555e("0x40")](z.toString(),z[_0x555e("0xb1")]()[_0x555e("0x61")],15777),-852346927))for(z=d[_0x555e("0xbb")][_0x555e("0x62")]("|"),B=0;;){switch(z[B++]){case "0":e[_0x555e("0x6d")](e[_0x555e("0x45")]()[1][16]);continue;case "1":e.K6p(e.V20()[11][4]);continue;case "2":q>>>=3;continue;
case "3":d[_0x555e("0xbc")](d.jHKyA(--C,0),8)||(x[e[_0x555e("0x1d")](8)](q),q=4,C=6);continue;case "4":q>>>=9;continue;case "5":q&=e.e6p(66,w,7);continue;case "6":8!==d.BWaQG(--C,1)||(x[e.I4T(8)](q),q=4,C=9);continue;case "7":q^=e[_0x555e("0x67")](85,w,2);continue}break}}else if(d[_0x555e("0xbd")](11,D))return[];return x};var I=function(a){var c;var m=2;for(c=1;d[_0x555e("0xbc")](e[_0x555e("0x40")](c[_0x555e("0xb1")](),c[_0x555e("0xb1")]().length,36377),895901091);c++)m+=2;d[_0x555e("0xbc")](e[_0x555e("0x9e")](m[_0x555e("0xb1")](),
m[_0x555e("0xb1")]()[_0x555e("0x61")],43545),1486913612);var k=[];for(c=m=0;d[_0x555e("0xbe")](m,a[e.z4T(5)]);m++){if(d[_0x555e("0xbf")](d.AOEsd,d.bwFIV))return d.qPRnc(typeof e[_0x555e("0x25")].p4,"function")?e[_0x555e("0x25")].p4[_0x555e("0x1f")](e[_0x555e("0x25")],arguments):e[_0x555e("0x25")].p4;var t=a[e[_0x555e("0x36")](10)](m);d.rlyzx(128,t)?k[c++]=t:d.aPTxm(2048,t)?(k[c++]=d[_0x555e("0x83")](192,d.tseaW(d[_0x555e("0xc0")](t,6),31)),k[c++]=d[_0x555e("0x83")](128,d[_0x555e("0xaa")](d.SRABk(t,
0),63))):d[_0x555e("0xc1")](65536,t)?(k[c++]=d[_0x555e("0x83")](224,t>>12&15),k[c++]=128|d[_0x555e("0xaa")](d[_0x555e("0xc0")](t,6),63),k[c++]=d[_0x555e("0x83")](128,d[_0x555e("0xaa")](d[_0x555e("0xc0")](t,0),63))):(k[c++]=240|d[_0x555e("0xaa")](t>>18,7),k[c++]=d[_0x555e("0xc2")](128,d[_0x555e("0xaa")](t>>12,63)),k[c++]=d.qtbcZ(128,d[_0x555e("0xc3")](t,6)&63),k[c++]=d.cJLDH(128,d[_0x555e("0xc4")](t>>0,63)))}return k};var L=function(a){var c={JMGCe:function(a){return a()},KVTHl:function(a,c){return a===
c},PwWbw:function(a,c,e){return d[_0x555e("0xc5")](a,c,e)},hMDqF:function(a,c){return d[_0x555e("0x75")](a,c)}},m,k;var t=e[_0x555e("0x36")](11);for(m=k=m=0;d[_0x555e("0xc6")](m,a[e[_0x555e("0x36")](5)]);)if(d[_0x555e("0xc6")](a[m],128))t+=String[e[_0x555e("0x1d")](4)](a[m++]);else if(d[_0x555e("0xba")](224,d[_0x555e("0xc7")](240,a[m]))&&d[_0x555e("0xc6")](d[_0x555e("0xc8")](m,2),a[e[_0x555e("0x36")](5)]))for(var x=d[_0x555e("0xc9")][_0x555e("0x62")]("|"),D=0;;){switch(x[D++]){case "0":var q=e[_0x555e("0x67")](5,
70,12);continue;case "1":k=d[_0x555e("0xca")](C,a[m++]);continue;case "2":k<<=6;continue;case "3":k+=d[_0x555e("0xcb")](q,a[m++]);continue;case "4":var C=e[_0x555e("0x6a")](15,1,14,15);continue;case "5":k+=d.uxOrq(63,a[m++]);continue;case "6":t+=String[e.I4T(4)](k);continue;case "7":e.g6p(e[_0x555e("0x45")]()[1][12][3][6]);continue;case "8":e[_0x555e("0x6d")](e[_0x555e("0x44")]()[10][0]);continue;case "9":k<<=6;continue}break}else if(192==d.rFoEM(224,a[m])&&d[_0x555e("0xc6")](d.veaiy(m,1),a[e[_0x555e("0x36")](5)]))if(d[_0x555e("0xcc")](d[_0x555e("0xcd")],
d[_0x555e("0xce")]))x=c.JMGCe(p),c[_0x555e("0xcf")](x,null)?c.PwWbw(g,!0,f(n)):c[_0x555e("0xd0")](__v,x);else for(x=d[_0x555e("0xd1")][_0x555e("0x62")]("|"),D=0;;){switch(x[D++]){case "0":k=d[_0x555e("0xd2")](31,a[m++]);continue;case "1":k+=d.okNwO(w,a[m++]);continue;case "2":e[_0x555e("0x26")](e[_0x555e("0x44")]()[9][1]);continue;case "3":t+=String[e[_0x555e("0x36")](4)](k);continue;case "4":k<<=6;continue;case "5":var w=e[_0x555e("0x67")](5,58);continue}break}else for(x=d[_0x555e("0xd3")][_0x555e("0x62")]("|"),
D=0;;){switch(x[D++]){case "0":k+=63&a[m++];continue;case "1":var B=e.e6p(16,8,16065,126);continue;case "2":e.g6p(e[_0x555e("0x44")]()[8][7]);continue;case "3":var u=e[_0x555e("0x6a")](82,5,347);continue;case "4":k+=u&a[m++];continue;case "5":k=d[_0x555e("0xd4")](z,a[m++]);continue;case "6":t+=String[e.z4T(4)](k);continue;case "7":e[_0x555e("0x26")](e[_0x555e("0x45")]()[6][7]);continue;case "8":k+=d[_0x555e("0xd5")](B,a[m++]);continue;case "9":k<<=6;continue;case "10":var z=e[_0x555e("0x67")](14,
2);continue;case "11":k<<=6;continue;case "12":k<<=6;continue;case "13":if(!d[_0x555e("0xd6")](240,d[_0x555e("0xd7")](241,a[m]))||!d[_0x555e("0xc6")](m+3,a[e[_0x555e("0x1d")](5)]))return e[_0x555e("0x36")](11);continue;case "14":e.K6p(e.V20()[3][5]);continue}break}return t};var O=function(a,c){function m(a,c){for(var d=k[_0x555e("0xe5")][_0x555e("0x62")]("|"),t=0;;){switch(d[t++]){case "0":var m=[];continue;case "1":var x=2;continue;case "2":for(;k[_0x555e("0xe6")](y[_0x555e("0x9e")]((1).toString(),
1[_0x555e("0xb1")]()[_0x555e("0x61")],33497),B);)return m[y[_0x555e("0x1d")](8)](k[_0x555e("0xe7")](u,52)|157),m[y[_0x555e("0x36")](8)](k[_0x555e("0xe8")](k.jeJmK(u,84),419)),m[y[_0x555e("0x1d")](8)](k[_0x555e("0xe9")](u>>>2,231)),m[y[_0x555e("0x36")](8)](k.KlOvp(u<<4,161)),m;continue;case "3":var B=1726902306;continue;case "4":continue;case "5":if(k[_0x555e("0xe6")](y[_0x555e("0x40")](x.toString(),x[_0x555e("0xb1")]()[_0x555e("0x61")],88587),z))return m[y[_0x555e("0x36")](8)](k.KPabU(k[_0x555e("0xea")](u,
24),255)),m[y.I4T(8)](k[_0x555e("0xeb")](k[_0x555e("0xec")](u,16),255)),m[y.I4T(8)](k[_0x555e("0xed")](u>>8,255)),m[y[_0x555e("0x36")](8)](k.MMlWd(k[_0x555e("0xee")](u,0),255)),m;continue;case "6":var u=y.e6p(a,c);continue;case "7":var z=-1652219840;continue;case "8":var y=e;continue;case "9":y[_0x555e("0x6d")](y[_0x555e("0x44")]()[17][16]);continue}break}}var k={MFLsx:d[_0x555e("0xd8")],YuKEI:function(a,c){return d[_0x555e("0xbc")](a,c)},gRuRG:function(a,c){return a>>>c},KlOvp:function(a,c){return d[_0x555e("0x55")](a,
c)},jeJmK:function(a,c){return d[_0x555e("0xd9")](a,c)},octMG:function(a,c){return a|c},KPabU:function(a,c){return d.XkQTw(a,c)},KwBmz:function(a,c){return a>>c},sUicA:function(a,c){return d[_0x555e("0xda")](a,c)},ZOIrY:function(a,c){return d.mmocY(a,c)},MMlWd:function(a,c){return d[_0x555e("0xda")](a,c)},hkHhe:function(a,c){return a>>c}};return d[_0x555e("0xf5")](function(a,c){for(var k=d[_0x555e("0xdb")].split("|"),q=0;;){switch(k[q++]){case "0":var t=1250351844;continue;case "1":if(d[_0x555e("0xbc")](v.g44(F[_0x555e("0xb1")](),
F[_0x555e("0xb1")]()[_0x555e("0x61")],57963),y)){var w=d[_0x555e("0xdc")](m,a[v[_0x555e("0x36")](5)],c);var x=w[v.I4T(5)];var u=G=0;var z=a[v.z4T(5)]}continue;case "2":for(E=0;z>E;E++)G<<=8,G|=a[E],d.kSzjX(d[_0x555e("0xdd")](E,4),3)&&(u=d.mNwPJ(G,c),w[x++]=d[_0x555e("0xde")](d[_0x555e("0xdf")](u,24),255),w[x++]=d.FJDgA(u>>16,255),w[x++]=d[_0x555e("0xe0")](d.mmocY(u,8),255),w[x++]=d.zSrKf(d[_0x555e("0xe1")](u,0),255),G=0);continue;case "3":var y=-1159169825;continue;case "4":var v=e;continue;case "5":var A=
d.bOrPV(4,d[_0x555e("0xdd")](z,4));for(E=0;d[_0x555e("0xe2")](A,E);E++)G<<=8,G|=A;continue;case "6":var F=2;continue;case "7":var E,G;continue;case "8":return u=d.mNwPJ(G,c),w[x++]=d[_0x555e("0xe3")](d[_0x555e("0xe1")](u,24),255),w[x++]=d[_0x555e("0xe4")](d[_0x555e("0xe1")](u,16),255),w[x++]=d[_0x555e("0xe4")](u>>8,255),w[x++]=d[_0x555e("0xe4")](u>>0,255),w;case "9":for(E=1;d[_0x555e("0xbc")](v.D44(E[_0x555e("0xb1")](),E[_0x555e("0xb1")]()[_0x555e("0x61")],31836),t);E++)w=m(a[v[_0x555e("0x36")](5)],
c),x=w[v[_0x555e("0x36")](5)],G=2,u=6,z=a[v.z4T(5)],F+=2;continue}break}},a,d[_0x555e("0xf6")](function(a){for(var c=d[_0x555e("0xef")][_0x555e("0x62")]("|"),k=0;;){switch(c[k++]){case "0":var m=2;continue;case "1":var t=-675946782;continue;case "2":if(v.g44(m[_0x555e("0xb1")](),m[_0x555e("0xb1")]()[_0x555e("0x61")],40665)!==t)var w=y=z=0;continue;case "3":for(var B=1;v[_0x555e("0x9e")](B[_0x555e("0xb1")](),B[_0x555e("0xb1")]()[_0x555e("0x61")],52426)!==u;B++)z=3,y=5,w=1,m+=2;continue;case "4":var u=
-1314358760;continue;case "5":var z,y;continue;case "6":var v=e;continue;case "7":d.BrnxE(v[_0x555e("0x36")](6),typeof a)&&(a=d[_0x555e("0xf0")](I,a));d[_0x555e("0xf1")](v[_0x555e("0x36")](3),typeof a)&&(a=I(d[_0x555e("0xf2")](window[v[_0x555e("0x1d")](2)][v[_0x555e("0x36")](7)],window[v[_0x555e("0x1d")](2)][v.z4T(9)])));w=a[v[_0x555e("0x1d")](5)];for(B=0;d[_0x555e("0xf3")](w,B);++B)y<<=8,y|=a[B],3==B%4&&(z^=y);continue;case "8":return d[_0x555e("0xdd")](w,4)&&(y<<=8*(4-d[_0x555e("0xf4")](w,4)),z^=
y),z}break}},c))};var M=function(a,c){function m(a){for(var c=d[_0x555e("0xf9")][_0x555e("0x62")]("|"),k=0;;){switch(c[k++]){case "0":if(d.zlAZI(A[_0x555e("0x9e")](v[_0x555e("0xb1")](),v[_0x555e("0xb1")]()[_0x555e("0x61")],11803),B)){var m=3;var t=1;var w=9}continue;case "1":var B=2146370275;continue;case "2":for(var u=1;d.zlAZI(A.g44(u.toString(),u[_0x555e("0xb1")]().length,11420),F);u++)for(var z=d[_0x555e("0xfa")].split("|"),y=0;;){switch(z[y++]){case "0":m=0;continue;case "1":v+=2;continue;case "2":w=
0;continue;case "3":continue;case "4":t=0;continue}break}continue;case "3":var v=2;continue;case "4":continue;case "5":return w%4&&(t<<=d[_0x555e("0xfb")](8,d.bOrPV(4,w%4)),m^=t),m;case "6":d[_0x555e("0xfc")](A[_0x555e("0x36")](6),typeof a)&&(a=d.nVtvB(I,a));d.EksFD(A.z4T(3),typeof a)&&(a=d.nVtvB(I,window[A[_0x555e("0x36")](2)][A[_0x555e("0x1d")](7)]+window[A[_0x555e("0x36")](2)][A[_0x555e("0x1d")](9)]));w=a[A[_0x555e("0x1d")](5)];for(u=0;d.jgcXK(w,u);++u)t<<=8,t|=a[u],d[_0x555e("0xfd")](d[_0x555e("0xf4")](u,
4),3)&&(m^=t);continue;case "7":var A=e;continue;case "8":var F=1381553241;continue}break}}function k(a,c){var m=2;for(var k=1;d[_0x555e("0xff")](e[_0x555e("0x9e")](k[_0x555e("0xb1")](),k[_0x555e("0xb1")]()[_0x555e("0x61")],69956),-541540403);k++)for(var t=d[_0x555e("0x100")][_0x555e("0x62")]("|"),x=0;;){switch(t[x++]){case "0":var B=a[e[_0x555e("0x1d")](5)];continue;case "1":var u=0;continue;case "2":var z=[];continue;case "3":var y=0;continue;case "4":continue;case "5":m+=2;continue;case "6":var v=
0;continue;case "7":var A=0;continue;case "8":var F=0;continue}break}-2138481974!==e[_0x555e("0x9e")](m.toString(),m.toString()[_0x555e("0x61")],17251)&&(z=[],F=v=8,A=6,u=8,B=a[e.I4T(11)],y=7);if(8>B||d[_0x555e("0xf4")](B,4))return[];if(u<<=8,u|=a[0],u<<=8,u|=a[1],u<<=8,u|=a[2],u<<=8,u|=a[3],y=d[_0x555e("0x55")](u,c),u=0,d[_0x555e("0xbd")](d[_0x555e("0x101")](4,Math[e[_0x555e("0x1d")](0)](d[_0x555e("0x102")](y+4,4))),d[_0x555e("0x4a")](B,4)))return d[_0x555e("0xcc")](d[_0x555e("0x103")],d[_0x555e("0x103")])?
[]:typeof e[_0x555e("0x2a")].n7===_0x555e("0x1")?e[_0x555e("0x2a")].n7[_0x555e("0x1f")](e[_0x555e("0x2a")],arguments):e.R4T.n7;for(m=4;B>m;m++)u<<=8,u|=a[m],d[_0x555e("0x104")](d[_0x555e("0xf4")](m,4),3)&&(A=u^c,z[v++]=d[_0x555e("0xda")](d.mmocY(A,24),255),z[v++]=d[_0x555e("0xda")](A>>16,255),z[v++]=d[_0x555e("0x105")](A>>8,255),z[v++]=d[_0x555e("0xe1")](A,0)&255,u=0);if((F=d[_0x555e("0xf2")](0,z[d.Hhlrr(v,1)]),d[_0x555e("0x106")](0,F)&&d[_0x555e("0x106")](F,4))||d[_0x555e("0xbd")](y,d[_0x555e("0x107")](v,
F)))return[];for(m=1;d[_0x555e("0x108")](F,m);++m){if(d[_0x555e("0xbd")](F,z[v-m]))return[];z[e.I4T(1)]()}return z}for(;d[_0x555e("0xf7")](e[_0x555e("0x9e")]((1).toString(),1[_0x555e("0xb1")]()[_0x555e("0x61")],49468),-691370765);)return d[_0x555e("0xf8")](k,a,m(c));if(-682085189!==e[_0x555e("0x40")](2[_0x555e("0xb1")](),(2).toString()[_0x555e("0x61")],63929))return d[_0x555e("0xf8")](k,a,d[_0x555e("0xfe")](m,c))};var K=function(a){function c(c){return e.lvRbb(_0x555e("0x10a"),e.nzqYh)?[]:a.substring(c,
e[_0x555e("0x10b")](c,1))}var e={lvRbb:function(a,c){return d.LVcsE(a,c)},nzqYh:d.dsXHe,GAtji:function(a,c){return a+c}};a=d[_0x555e("0x109")];var k=d.DPpns(a[_0x555e("0x61")]/4,1),t=d[_0x555e("0x10c")](d.WlHSj(a[_0x555e("0x61")],3),5);return d.WlHSj(d.HTFhI(d[_0x555e("0x10d")](d[_0x555e("0x10e")](d[_0x555e("0x10e")](d[_0x555e("0xfe")](c,t),d[_0x555e("0x10f")](c,d[_0x555e("0x107")](d[_0x555e("0x10c")](k,2),1))),d.AwJEW(c,k)),d[_0x555e("0x10f")](c,d[_0x555e("0x107")](d[_0x555e("0x10e")](k,d[_0x555e("0x10c")](k,
2)),2))),d[_0x555e("0x110")](c,d[_0x555e("0x111")](d[_0x555e("0x10c")](k,2),1))),d.PZQcX(c,d[_0x555e("0x112")](t,d.DAxsp(k,2))-2))},P=function(a){var c={vviDD:_0x555e("0x1")};if(d[_0x555e("0x116")](d[_0x555e("0x117")],d[_0x555e("0x117")]))return typeof e.y44.n7===c[_0x555e("0x118")]?e[_0x555e("0x21")].n7.apply(e.y44,arguments):e[_0x555e("0x21")].n7;var m,k="";for(m=0;d[_0x555e("0x119")](m,a[_0x555e("0x61")]);m++)c=a[_0x555e("0x65")](m)[_0x555e("0xb1")](16),k+=("000"+c)[_0x555e("0x11a")](-4);return k},
N=function(a){var c="",e=a[_0x555e("0x11b")](/.{1,4}/g)||[];for(a=0;a<e[_0x555e("0x61")];a++)c+=String[_0x555e("0x63")](d[_0x555e("0xf8")](parseInt,e[a],16));return c},Q=function(a,c,m,k){var t={TbEeQ:d.xrEWW,fHchn:function(a,c){return d[_0x555e("0x11c")](a,c)},Wsjpk:function(a,c){return d.wMWMh(a,c)},qdDyu:function(a,c){return a+c},vkcGa:function(a,c){return d[_0x555e("0x119")](a,c)},cBjCM:d[_0x555e("0x11d")],aDcls:function(a,c){return d[_0x555e("0x104")](a,c)},ymMRk:function(a,c){return d[_0x555e("0x11e")](a,
c)},ixbGC:function(a,c){return d[_0x555e("0xe1")](a,c)},ChlGW:function(a,c){return d.RgGPE(a,c)}};if(d[_0x555e("0x11f")](d.MQISp,"EJkRo")){var x=d[_0x555e("0x115")](window.location[_0x555e("0x120")],"."),D=d[_0x555e("0x121")](H,I(d[_0x555e("0x115")](d[_0x555e("0x115")]("):",x),":("))),q=function(a){var e={folGm:function(a,c){return d[_0x555e("0x114")](a,c)},hZhNU:d[_0x555e("0x122")],YxffN:function(a,c){return d[_0x555e("0x110")](a,c)},PBvuf:function(a,c){return d[_0x555e("0x123")](a,c)},ZzrAZ:function(a){return d[_0x555e("0x124")](a)}};
if(d.jSAAg(_0x555e("0x125"),_0x555e("0x125"))){if(e[_0x555e("0x126")](typeof a,e[_0x555e("0x127")])&&(localStorage[D]=e[_0x555e("0x128")](H,e.PBvuf(I,JSON.stringify(a)))),r)e[_0x555e("0x129")](c)}else{e=d[_0x555e("0x12a")].split("|");for(var k=0;;){switch(e[k++]){case "0":var q=d.ThDrJ(x[_0x555e("0x12b")](a.d),-1);continue;case "1":return u;case "2":var t=d[_0x555e("0x12c")](a.t,(new Date)[_0x555e("0x12d")]()/1E3);continue;case "3":q&&d[_0x555e("0x12e")](t,0)&&(d[_0x555e("0x119")](t,2592E3)&&d[_0x555e("0x12f")](a.d,
".")&&d.hJsUl(m,a),u=!0);continue;case "4":var u=!1;continue}break}}},C=function(a,e){d.cjhHl(typeof e,d[_0x555e("0x122")])&&(localStorage[D]=d[_0x555e("0x123")](H,I(JSON[_0x555e("0x130")](e))));if(a)d[_0x555e("0x131")](c)},w=function(){try{return JSON[_0x555e("0x39")](d[_0x555e("0x132")](L,J(localStorage[_0x555e("0x133")](D))))}catch(R){return null}},B=function(a){try{return JSON[_0x555e("0x39")](d[_0x555e("0x134")](L,d[_0x555e("0xf8")](M,J(d[_0x555e("0x134")](N,a)),d[_0x555e("0x135")](A,{a:0}))))}catch(S){return{}}};
t=function(e){if(d.DaIpw(q,e))d[_0x555e("0x136")](c);else{var m=d[_0x555e("0x135")](B,a);q(m)?d.rBcRT(C,!0,m):k(e,m)}};window.localStorage&&(w=d[_0x555e("0x137")](w),d[_0x555e("0x138")](w,null)?d[_0x555e("0x139")](C,!0,d[_0x555e("0x13a")](B,a)):d[_0x555e("0x13a")](t,w))}else{w=t[_0x555e("0x13b")][_0x555e("0x62")]("|");for(var u=0;;){switch(w[u++]){case "0":var z=G[_0x555e("0x36")](11);continue;case "1":var y=0;continue;case "2":return 0<t[_0x555e("0x13c")](v,3)&&(z+=String[G[_0x555e("0x1d")](4)](t[_0x555e("0x13d")](t[_0x555e("0x13e")](45056,
v%3*4096),y))),z;case "3":var v=0;continue;case "4":for(E=0;t[_0x555e("0x13f")](E,O0f[G[_0x555e("0x36")](5)]);++E)for(var K=t.cBjCM.split("|"),F=0;;){switch(K[F++]){case "0":t[_0x555e("0x140")](t.ymMRk(++v,3),0)&&(z+=String[G[_0x555e("0x36")](4)](45056+y),v=0,y=0);continue;case "1":y<<=4;continue;case "2":y|=t[_0x555e("0x141")](O0f[E],4)&15;continue;case "3":0==t.ymMRk(++v,3)&&(z+=String[G[_0x555e("0x1d")](4)](45056+y),v=0,y=0);continue;case "4":y<<=4;continue;case "5":y|=t[_0x555e("0x142")](t.ixbGC(O0f[E],
0),15);continue}break}continue;case "5":E=0;continue;case "6":var E;continue;case "7":var G=e;continue}break}}};return{hen:function(a,c,d,e){return H(I(a,c),d,e)},hcl:function(a,c,e,k){return d[_0x555e("0x143")](Q,a,c,e,k)},hof:function(a,c,e,k){return H(d[_0x555e("0x144")](O,I(a,e),c,k))},hxe:function(a,c,e,k){return d[_0x555e("0x145")](P,a,c,e,k)},hde:function(a,c,e,k){return d[_0x555e("0x146")](L,d[_0x555e("0x139")](J,a,c),e,k)},hdf:function(a,c,e,k){if(d[_0x555e("0x11f")](d.gYBGM,d[_0x555e("0x147")]))return d[_0x555e("0x148")](L,
d.Dzdiw(M,d[_0x555e("0x149")](J,a,e),c,k));r+=String[_0x555e("0x63")](d[_0x555e("0x139")](parseInt,h[j],16))},hxd:function(a,c,e,k){return d[_0x555e("0x145")](N,a,c,e,k)}}}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _0xf5cd="dW5kZWZpbmVk Smlpb0M= ZXhwb3J0cw== bWlYaWM= YWRkRXZlbnRMaXN0ZW5lcg== ZGVmaW5lUHJvcGVydHk= aGFzT3duUHJvcGVydHk= ZnVuY3Rpb24= Yk1oclI= aGhOVHE= ZkRIY2Q= RmZBdWU= QkFWcU0=".split(" ");(function(d,c){for(c=++c;--c;)d.push(d.shift())})(_0xf5cd,262);
var _0x3fc0=function(d,c){d-=0;c=_0xf5cd[d];void 0===_0x3fc0.VoByRF&&(function(){var a=function(){try{var a=Function('return (function() {}.constructor("return this")( ));')()}catch(f){a=window}return a}();a.atob||(a.atob=function(a){a=String(a).replace(/=+$/,"");for(var c=0,d,b,e=0,g="";b=a.charAt(e++);~b&&(d=c%4?64*d+b:b,c++%4)?g+=String.fromCharCode(255&d>>(-2*c&6)):0)b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b);return g})}(),_0x3fc0.CWzeho=function(a){a=atob(a);
for(var c=[],b=0,d=a.length;b<d;b++)c+="%"+("00"+a.charCodeAt(b).toString(16)).slice(-2);return decodeURIComponent(c)},_0x3fc0.SQBgAT={},_0x3fc0.VoByRF=!0);var b=_0x3fc0.SQBgAT[d];void 0===b?(c=_0x3fc0.CWzeho(c),_0x3fc0.SQBgAT[d]=c):c=b;return c};
module[_0x3fc0("0x0")]=function(){var d={BAVqM:function(b,a){return b!==a},JiioC:"rHHIJ",bMhrR:function(b,a){return b!==a},fDHcd:_0x3fc0("0x1"),FfAue:"DOMContentLoaded"},c={writable:!1,configurable:!1};return function(b,a,e){if(document[_0x3fc0("0x2")]){Object[_0x3fc0("0x3")](b,a,c);for(var f in b[a])if(b[a][_0x3fc0("0x4")](f)&&typeof b[a][f]===_0x3fc0("0x5"))if(d[_0x3fc0("0x6")](_0x3fc0("0x7"),d[_0x3fc0("0x8")]))Object.defineProperty(b[a],f,c);else Object[_0x3fc0("0x3")](b[a],f,c);document.addEventListener(d[_0x3fc0("0x9")],
function(a){if(d[_0x3fc0("0xa")](typeof e,_0x3fc0("0xb")))if(d[_0x3fc0("0xc")]===d.JiioC)for(var b in e)Object[_0x3fc0("0x3")](window,e[b],c);else for(var f in e)Object[_0x3fc0("0x3")](window,e[f],c)})}}}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise) {/**
 * WebNPKI Module
 * @namespace webnpki
 */

module.exports = (function() {
    return function(hhss) {

        /**
         * 인증서 셀렉터. 다음과 같은 타입을 사용 가능.
         * <ul>
         * <li>{@link WNCertificate} 인스턴스</li>
         * <li>{ issuerDN:string, serialNumber:string }
         * <li>인증서의 저장소 조회 Key
         * </ul>
         * @global
         * @typedef {WNCertificate|Object|string} CertSelector
         */

        /**
         * 옵션 Object
         * @global
         * @typedef {Object} Options
         * @property {string} digestAlg 서명시 해쉬 알고리즘. 'sha1' | 'sha256' | 'sha512'
         * @property {boolean} signedDataOnly 서명시 금결원 스펙 사용. true | false
         * @property {string} charset 원문에 사용할 문자열 인코딩. 'utf8' | 'eurkr'
         * @property {string} cipherAlg 전자봉투에 사용할 암호화 알고리즘. 'aes128-CBC' | 'aes192-CBC' | 'aes256-CBC' | 'seedCBC'.
         * @property {string} outputEncoding 출력 데이터 형식. 'hex' | 'base64' | 'pem'
         */
        var webnpki = {};

        var loadingCount = 2,
            onLoaded;

        /**
         * 로딩이 완료 되었는지 여부를 반환한다.
         * @return {boolean} 로딩 완료시 true.
         */
        webnpki.isLoaded = function() {
            return loadingCount === 0;
        }

        /**
         * 로딩 완료시 호출 될 Callback 함수를 설정한다.<br>
         * 이미 로딩이 완료 되어 있으면 즉시 호출 된다.
         * @memberof webnpki
         * @param {function} callback 호출 될 Callback 함수.
         */
        webnpki.setOnLoaded = function(func) {
            if (typeof func === "function") {
                if (loadingCount == 0) {
                    setTimeout(func, 0);
                } else {
                    onLoaded = func;
                }
            } else {
                throw { code: "IS_NOT_A_FUNCTION", message: KICA_ERROR_MSG.get("IS_NOT_A_FUNCTION", 'setOnLoaded'), error: new Error() };
            }
        }

        function addLoadded() {
            loadingCount--;
            if (loadingCount === 0 && onLoaded) {
                setTimeout(onLoaded, 0);
            }
        }

        // load secure storage
        var SecureStorage = __webpack_require__(19);
        var secureStorage = new SecureStorage(undefined, undefined, hhss);
        secureStorage.init().then(function() {
            addLoadded();
        });

        // Additional
        webnpki.crypto = __webpack_require__(20);
        webnpki.bin = __webpack_require__(21);

        // load forge
        var forge;
        __webpack_require__.e(/* require.ensure | forge */ 0).then((function(require) {
            forge = __webpack_require__(0);
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe).then(function() {
            addLoadded();
        });

        var converter = __webpack_require__(13);
        var CONSTANT = __webpack_require__(10);
        var WNEncryptedPrivateKeyInfo = __webpack_require__(12);
        var WNCertificate = __webpack_require__(5);
        var WNPKCS12 = __webpack_require__(36);

        /**
         * 인증서와 암호화 된 개인키를 저장소에 저장한다.
         *
         * @memberof webnpki
         * @param {WNCertificate} certificate 인증서 인스턴스
         * @param {string} signCert Base64로 인코딩 된 인증서 파일 내용
         * @param {string} signPri Base64로 인코딩 된 암호화 된 개인키 파일 내용
         * 
         * @ignore
         */
        function _storeCertAndKey(certificate, signCert, signPri) {
            // OID 정책에 없는 경우 인증서를 저장하지 않음
            if (webnpki_config.allowedPolicyOIDs.length > 0 && webnpki_config.allowedPolicyOIDs.indexOf(certificate.getPolicyID()) === -1) {
                function getIssuerName(id) {
                    id = id.toLowerCase();
                    var rslt = webnpki_config.issuers[id];

                    return typeof rslt === "undefined" ? "unknown" : rslt;
                }

                throw { code: "NOT_ALLOWED_POLICY", message: KICA_ERROR_MSG.get("NOT_ALLOWED_POLICY", getIssuerName(certificate.getIssuerRDNs().O), certificate.getPolicyString()), error: new Error() };
            }

            var key = certificate.getStorageCertKey();
            return secureStorage.setItem(key, signCert).then(function() {
                var key = certificate.getStoragePriKey();
                return secureStorage.setItem(key, signPri);
            });
        }

        /**
         * 인증서 셀렉터로부터 암호화 된 개인키를 획득한다.
         * 
         * @memberof webnpki
         * @param {CertSelector} certSelector 인증서 셀렉터.
         * 
         * @return WNEncryptedPrivateKeyInfo 암호화 된 개인키 인스턴스.
         * 
         * @ignore
         */
        webnpki.getEncryptedPrivateKeyInfo = function(certSelector) {
            var op = webnpki.getCertificate(certSelector);
            op = op.then(function(certificate) {
                if (certificate instanceof WNCertificate) {
                    return secureStorage.getItem(certificate.getStoragePriKey());
                }
            });

            op = op.then(function(pri) {
                if (!pri)
                    return;

                return new WNEncryptedPrivateKeyInfo().fromBase64(pri);
            });

            return op;
        }

        /**
         * 인증서 셀렉터로부터 저장소에 저장 되어 있는 인증서를 획득한다.
         * 
         * @memberof webnpki
         * @param {CertSelector} certSelector 
         * @param {function} callback (WNCertificate, Error) 완료시 호출 될 콜백. 찾지 못했을 경우 undefined, 에러시 Error가 인자로 호출 됨.
         * @return {Promise} (WNCertificate) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.getCertificate = function(certSelector, callback) {
            var op = Promise.resolve();

            op = op.then(function() {
                if (certSelector instanceof WNCertificate)
                    return certSelector.getStorageCertKey();

                var targetKey;
                if (typeof certSelector === "string") {
                    targetKey = certSelector;
                }
                // Get certificate by issuerDN & serialNumber;
                else if (certSelector.issuerDN && certSelector.serialNumber) {
                    targetKey = _getStorageKey(certSelector.issuerDN, certSelector.serialNumber);
                }

                return targetKey;
            });

            op = op.then(function(targetKey) {
                return secureStorage.getItem(targetKey);
            });

            op = op.then(function(cert) {
                if (!cert) return;

                return new WNCertificate().fromBase64(cert);
            });

            if (callback) op.then(function(result) { callback(result); }).catch(function(error) { callback(null, error); });
            else return op;
        };

        /**
         * 인증서 셀렉터로부터 저장소에 저장 되어 있는 인증서를 삭제한다.
         * 
         * @memberof webnpki
         * @param {CertSelector} certSelector 
         * @param {function} callback (Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 호출 됨.
         * @return {Promise} () callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.deleteCertificate = function(certSelector, callback) {
            var op = Promise.resolve();

            op = op.then(function() {
                return webnpki.getCertificate(certSelector);
            });

            op = op.then(function(certificate) {
                return secureStorage.removeItem(certificate.getStorageCertKey()).then(function() {
                    return secureStorage.removeItem(certificate.getStoragePriKey());
                });
            });

            if (callback) op.then(function() { callback(); }).catch(function(error) { callback(error); });
            else return op;
        };

        /**
         * 인증서와 개인키를 저장소에 import 한다. (비동기)
         * 
         * @memberof webnpki
         * @param {Uint8Array} certBuffer 인증서 버퍼.
         * @param {Uint8Array} keyBuffer 암호화 된 개인키 버퍼.
         * @param {string} [password] 개인키 비밀번호. 입력이 없는 경우(undefined or null) 검증을 하지 않고 바로 import 한다.
         * @param {function} callback (Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 호출 됨.
         * @return {Promise} (없음) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.importCertAndKey = function(certBuffer, keyBuffer, password, callback) {
            var op = Promise.resolve();
            op = op.then(function() {
                var certificate = new WNCertificate().fromArrayBuffer(certBuffer);

                // 비밀번호를 입력 받지 않는다 하더라도, 올바른 키 파일인지 확인한다.
                var encryptedPrivateKeyInfo = new WNEncryptedPrivateKeyInfo().fromArrayBuffer(keyBuffer);
                if (password != undefined) {
                    if (webnpki_config.keyboardSecurity === "default") {
                        var temp = "";
                        for (var i = _votmdnjem.length - 1; i >= 0; i--) {
                            temp = String.fromCharCode(_votmdnjem[i] ^ _key) + temp;
                        }

                        password = temp;
                    }

                    var privateKeyInfo = encryptedPrivateKeyInfo.decrypt(password);
                    var privateKey = privateKeyInfo.getPrivateKey();

                    if (certificate._fo.publicKey.n.compareTo(privateKey._fo.n) !== 0) {
                        throw { code: "CERT_AND_KEY_MISMATCH", message: KICA_ERROR_MSG.get("CERT_AND_KEY_MISMATCH"), error: new Error() };
                    }
                }

                return _storeCertAndKey(certificate,
                    forge.util.binary.base64.encode(new Uint8Array(certBuffer)),
                    forge.util.binary.base64.encode(new Uint8Array(keyBuffer)));
            });

            if (callback) op.then(function() { callback(); }).catch(function(error) { callback(error); });
            else return op;
        };


        /**
         * PKCS#12에 담긴 인증서와 개인키를 저장소에 import한다. (PFX or P12, 비동기)
         * 
         * @memberof webnpki
         * @param {Uint8Array} pkcs12Buffer PKCS#12 데이터 버퍼
         * @param {string} password PKCS#12의 비밀번호.
         * @param {string} newPassword import시 새로 사용할 비밀번호. 입력이 없는 경우(undefined or null or "") password를 그대로 사용.
         * @param {function} callback (Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 입력 됨.
         * @return {Promise} (없음) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.importPKCS12 = function(pkcs12Buffer, password, newPassword, callback) {
            if (webnpki_config.keyboardSecurity === "default") {
                var temp = "";
                for (var i = _votmdnjem.length - 1; i >= 0; i--) {
                    temp = String.fromCharCode(_votmdnjem[i] ^ _key) + temp;
                }

                password = temp;
            }

            newPassword = newPassword || password;

            var op = Promise.resolve();

            op = op.then(function() {
                var p12 = new WNPKCS12().fromArrayBuffer(pkcs12Buffer, password);
                var certificate = p12.getCertificate();
                var privateKeyInfo = p12.getPrivateKeyInfo();
                var encryptedPrivateKeyInfo = privateKeyInfo.encrypt(newPassword, { algorithm: "seed" });

                return _storeCertAndKey(certificate,
                    certificate.toBase64(),
                    encryptedPrivateKeyInfo.toBase64());
            });

            if (callback) op.then(function() { callback(); }).catch(function(error) { callback(error); });
            else return op;
        };

        /**
         * PKCS#12의 비밀번호를 변경한다.<br>
         * 입력값과 반환값 모두 Uint8Array로 되어 있다.
         * 
         * @memberof webnpki
         * @param {Uint8Array} pkcs12Buffer PKCS#12 데이터
         * @param {string} password 기존 PKCS#12의 비밀번호.
         * @param {string} newPassword 새로 사용할 비밀번호
         * @param {function} callback (Uint8Array, Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 입력 됨.
         * @return {Promise} (없음) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.changePKCS12Password = function(pkcs12Buffer, password, newPassword, callback) {
            var op = Promise.resolve().then(function() {
                var buffer = forge.util.createBuffer(pkcs12Buffer);
                var asn1, pkcs12;
                //TODO move to wnpkcs12
                try {
                    asn1 = forge.asn1.fromDer(buffer);
                } catch (e) {
                    throw { code: "WRONG_DATA", message: KICA_ERROR_MSG.get("WRONG_DATA"), error: new Error() };
                }
                try {
                    pkcs12 = forge.pkcs12.pkcs12FromAsn1(asn1, password);
                } catch (e) {
                    throw { code: "INVALID_PASSWORD", message: KICA_ERROR_MSG.get("INVALID_PASSWORD"), error: new Error() };
                }
                asn1 = forge.pkcs12.toPfxAsn1(pkcs12, newPassword);

                var der = forge.asn1.toDer(asn1);

                return forge.util.binary.raw.decode(der.getBytes());
            });

            if (callback) op.then(function(result) { callback(result); }).catch(function(error) { callback(null, error); });
            else return op;
        }


        function _isAllowedCertPolicyID(oid) {
            if (webnpki_config && webnpki_config.allowedPolicyOIDs && webnpki_config.allowedPolicyOIDs.length > 0) {
                for (var i = 0; i < webnpki_config.allowedPolicyOIDs.length; i++) {
                    if (webnpki_config.allowedPolicyOIDs[i].indexOf(oid) === 0) {
                        return true;
                    }
                }
                return false;
            } else {
                return true;
            }
        }


        /**
         * 저장소에서 인증서 리스트를 조회한다.
         * 
         * @memberof webnpki
         * @param {function} callback (WNCertificate[], Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 호출 됨.
         * @return {Promise} (없음) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.getCertificateList = function(callback) {
            var key;
            var keyOpList = [];
            for (var i = 0; i < localStorage.length; i++) {
                keyOpList.push(secureStorage.key(i));
            }

            var certOpList = [];
            var op = Promise.all(keyOpList).then(function(keyList) {
                for (var i = 0; i < keyList.length; i++) {
                    if (keyList[i] && keyList[i].indexOf(CONSTANT.WNCERT_PREFIX) == 0) {
                        certOpList.push(secureStorage.getItem(keyList[i]));
                    }
                }

                return certOpList;
            });

            op = op.then(function(certOpList) {
                return Promise.all(certOpList).then(function(certList) {
                    var result = [];
                    var cert;
                    for (var i = 0; i < certList.length; i++) {
                        cert = new WNCertificate().fromBase64(certList[i]);
                        if (_isAllowedCertPolicyID(cert.getPolicyID())) {
                            result.push(cert);
                        }
                    }
                    return result;
                });
            });

            if (callback) op.then(function(result) { callback(result); }).catch(function(error) { callback(null, error); });
            else return op;
        };


        /**
         * PKCS#1 서명
         * 
         * @memberof webnpki
         * @param {CertSelector} certSelector 서명할 인증서
         * @param {string} password 개인키 비밀번호
         * @param {string} message 서명 대상 원문
         * @param {Options} options {@link Options|Options.digestAlg} : 'sha1' | 'sha256' | 'sha512' (default: 인증서 서명에 사용한 해쉬 알고리즘)<br>
         *                          {@link Options|Options.charset} : 'euckr' | 'utf8' (default: euckr)<br>
         *                          {@link Options|Options.outputEncoding} : 'hex' | 'base64' (default: base64)<br>
         * @param {function} callback (string, Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 호출 됨.
         * @return {Promise} (string) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.signPkcs1 = function(certSelector, password, message, options, callback) {
            options = options || {};
            var certificate;

            var op = webnpki.getCertificate(certSelector);
            op = op.then(function(certificate) {
                return webnpki.getEncryptedPrivateKeyInfo(certificate);
            });

            op = op.then(function(encPriKeyInfo) {
                return encPriKeyInfo.decrypt(password);
            });

            op = op.then(function(privateKeyInfo) {
                var privateKey = privateKeyInfo.getPrivateKey();

                message = converter.input(message, options.charset || "euckr");
                message = forge.util.binary.raw.encode(message);

                // If the message digest algorithm is not specified,
                // select the certificate's signature algorithm.
                var digestAlg = options.digestAlg;
                if (!digestAlg) {
                    var algName = forge.pki.oids[certificate._fo.signatureOid];
                    digestAlg = algName.substring(0, algName.indexOf("W"));
                }

                var md = forge.md[digestAlg].create();
                md.start();
                md.update(message);

                var signature = privateKey._fo.sign(md);
                return converter.output(signature, options.outputEncoding || 'base64');
            }); 

            if (callback) op.then(function(result) { callback(result); }).catch(function(error) { callback(null, error); });
            else return op;
        };


        function _sign(certSelector, password, signedData, options, callback) {
            options = options || {};
            var certificate;

            var op = webnpki.getCertificate(certSelector);
            op = op.then(function(cert) {
                certificate = cert;
                return webnpki.getEncryptedPrivateKeyInfo(certificate);
            });

            op = op.then(function(encPriKeyInfo) {
                return encPriKeyInfo.decrypt(password);
            });

            op = op.then(function(privateKeyInfo) {
                var privateKey = privateKeyInfo.getPrivateKey();

                // If the message digest algorithm is not specified,
                // select the certificate's signature algorithm.
                var digestAlg = options.digestAlg;
                if (!digestAlg) {
                    var algName = forge.pki.oids[certificate._fo.signatureOid];
                    digestAlg = algName.substring(0, algName.indexOf("W"));
                }

                var hashedContent;
                var detached = options.detached;
                if (options.hashedContent) {
                    // Use message as hash
                    detached = true;
                    hashedContent = true;
                }

                var attributes = [{
                    type: forge.pki.oids.contentType,
                    value: forge.pki.oids.data
                }, {
                    type: forge.pki.oids.messageDigest
                }, {
                    type: forge.pki.oids.signingTime
                }];

                if (options.authAttrs) {
                    var attr;
                    for (var i = 0; i < options.authAttrs.length; i++) {
                        attr = options.authAttrs[i].toLowerCase();

                        switch (attr) {
                            case 'smimesigncertv2':
                                attributes.push({
                                    type: forge.pki.oids.smimeSigningCertificateV2,
                                    value: certificate._fo
                                });
                        }
                    }
                }

                signedData.addCertificate(certificate._fo);
                signedData.addSigner({
                    key: privateKey._fo,
                    certificate: certificate._fo,
                    digestAlgorithm: forge.pki.oids[digestAlg],
                    authenticatedAttributes: attributes
                });
                signedData.sign({
                    detached: detached,
                    hashedContent: hashedContent
                });

                var asn1Obj = signedData.toAsn1();

                // Get signedData for yessign
                if (options.signedDataOnly) {
                    asn1Obj = asn1Obj.value[1].value[0];
                }

                var der = forge.asn1.toDer(asn1Obj);
                return converter.output(der, options.outputEncoding || 'pem', 'PKCS7');
            });


            if (callback) op.then(function(result) { callback(result); }).catch(function(error) { callback(null, error); });
            else return op;
        }


        /**
         * PKCS#7 서명<br>
         * <br>
         * Options.authAttrs는 현재 AdES S/MIME 서명의 SigningCertificateV2만 처리 가능 하다.<br>
         * smimesigncertv2 : SigningCertificateV2 (AdES S/MIME)<br>
         * <br>
         * 배열이므로 다음과 같이 입력값으로 사용한다.<br>
         * [{type:'smimesigncertv2'}]<br>
         * 
         * @memberof webnpki
         * @param {CertSelector} certSelector 서명할 인증서
         * @param {string} password 개인키 비밀번호
         * @param {string} message 서명 대상 원문
         * @param {Options} options {@link Options|Options.digestAlg} : 'sha1' | 'sha256' | 'sha512' (default: 인증서 서명에 사용한 해쉬 알고리즘)<br>
         *                          {@link Options|Options.signedDataOnly} : true | false (default: false)<br>
         *                          {@link Options|Options.charset} : 'euckr' | 'utf8' (default: euckr)<br>
         *                          {@link Options|Options.outputEncoding} : 'hex' | 'base64' | 'pem' (default: pem)<br>
         *                          {@link Options|Options.authAttrs} : type, value propery를 가진 Object의 Array. 추가할 Authentication Attribute. 현재 type:'smimesigncertv2'만 처리 가능<br>
         * @param {function} callback (string, Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 호출 됨.
         * 
         * @return {Promise} (string) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.sign = function(certSelector, password, message, options, callback) {
            var signedData = forge.pkcs7.createSignedData();
            if (typeof message === "string") {
                message = converter.input(message, options.charset || "euckr");
            }
            signedData.content = forge.util.createBuffer(message);

            if (options.hashedContent) {
                options.hashedContent = false;
            }

            return _sign(certSelector, password, signedData, options, callback);
        };

        /**
         * PKCS#7 Detached 서명<br>
         * <br>
         * Options.authAttrs는 현재 AdES S/MIME 서명의 SigningCertificateV2만 처리 가능 하다.<br>
         * smimesigncertv2 : SigningCertificateV2 (AdES S/MIME)<br>
         * <br>
         * 배열이므로 다음과 같이 입력값으로 사용한다.<br>
         * [{type:'smimesigncertv2'}]<br>
         * 
         * @param {CertSelector} certSelector 서명할 인증서
         * @param {string} password 개인키 비밀번호
         * @param {string} message 서명 대상 원문
         * @param {Options} options {@link Options|Options.digestAlg} : 'sha1' | 'sha256' | 'sha512' (default: 인증서 서명에 사용한 해쉬 알고리즘)<br>
         *                          {@link Options|Options.signedDataOnly} : true | false (default: false)<br>
         *                          {@link Options|Options.charset} : 'euckr' | 'utf8' (default: euckr)<br>
         *                          {@link Options|Options.outputEncoding} : 'hex' | 'base64' | 'pem' (default: pem)<br>
         *                          {@link Options|Options.authAttrs} : type, value propery를 가진 Object의 Array. 추가할 Authentication Attribute. 현재 type:'smimesigncertv2'만 처리 가능<br>
         * @param {function} callback (string, Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 호출 됨.
         * 
         * @return {Promise} (string) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.signDetached = function(certSelector, password, message, options, callback) {
            options = options || {};
            options.detached = true;

            var signedData = forge.pkcs7.createSignedData();
            if (typeof message === "string") {
                message = converter.input(message, options.charset || "euckr");
            }
            signedData.content = forge.util.createBuffer(message);

            return _sign(certSelector, password, signedData, options, callback);
        }


        function _parseSignedDataFromP7(signedInput, options) {
            options = options || {};
            var signedData = forge.pkcs7.createSignedData();

            var __isBase64 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
            var __isHex = /^([0-9A-Fa-f]{2})*$/;
            var __isPem = /^-----BEGIN ([A-Z0-9]*)-----[\s\S]*-----END ([A-Z0-9]*)-----\s*$/;
            var decoded;
            if (__isPem.test(signedInput)) {
                var type = __isPem.exec(signedInput);
                if (type.length < 3 || type[1] !== type[2] || type[1] !== "PKCS7") {
                    throw { code: "INVALID_PEM_DATA", message: KICA_ERROR_MSG.get("INVALID_PEM_DATA", "PKCS7", type[1]), error: new Error() };
                }

                decoded = forge.pem.decode(signedInput)[0].body;
            } else if (__isHex.test(signedInput)) {
                decoded = forge.util.hexToBytes(signedInput);
            } else if (__isBase64.test(signedInput)) {
                decoded = forge.util.decode64(signedInput);
            }


            try {
                var asn1Obj = forge.asn1.fromDer(decoded);

                // if input was not yessign
                if (!options.signedDataOnly) {
                    asn1Obj = asn1Obj.value[1].value[0];
                }

                signedData.fromAsn1(asn1Obj);

                return signedData;
            } catch (e) {
                throw { code: "WRONG_DATA", message: KICA_ERROR_MSG.get("WRONG_DATA"), error: new Error().caused = e };
            }
        }


        /**
         * PKCS#7 서명 추가<br>
         * <br>
         * 기존 서명문에 서명을 추가한다.<br>
         * 
         * @memberof webnpki
         * @param {CertSelector} certSelector 서명할 인증서
         * @param {string} password 개인키 비밀번호
         * @param {string} inputSignedData 서명 추가 대상 서명문 (Hex or Base64 or PEM)
         * @param {string} message 서명 대상 원문
         * @param {Options} options {@link Options|Options.digestAlg} : 'sha1' | 'sha256' | 'sha512' (default: 인증서 서명에 사용한 해쉬 알고리즘)<br>
         *                          {@link Options|Options.signedDataOnly} : true | false (default: false)<br>
         *                          {@link Options|Options.charset} : 'euckr' | 'utf8' (default: euckr)<br>
         *                          {@link Options|Options.outputEncoding} : 'hex' | 'base64' | 'pem' (default: pem)<br>
         *                          {@link Options|Options.authAttrs} : type, value propery를 가진 Object의 Array. 추가할 Authentication Attribute. 현재 type:'smimesigncertv2'만 처리 가능<br>
         * @param {function} callback (string, Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 호출 됨.
         * 
         * @return {Promise} (string) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.addSign = function(certSelector, password, inputSignedData, options, callback) {
            var signedData;
            try {
                signedData = _parseSignedDataFromP7(inputSignedData, options);
            } catch (error) {
                throw error;
            }

            // check detachded
            if (!signedData.content) {
                throw { code: "WRONG_DATA", message: KICA_ERROR_MSG.get("WRONG_DATA"), error: new Error() };
            }

            return _sign(certSelector, password, signedData, options, callback);
        };

        /**
         * PKCS#7 Detached 서명 추가<br>
         * <br>
         * 기존 Detached 서명문에 서명을 추가한다.<br>
         * 
         * @memberof webnpki
         * @param {CertSelector} certSelector 서명할 인증서
         * @param {string} password 개인키 비밀번호
         * @param {string} inputSignedData 서명 추가 대상 서명문 (Hex or Base64 or PEM)
         * @param {string} message 서명 대상 원문
         * @param {Options} options {@link Options|Options.digestAlg} : 'sha1' | 'sha256' | 'sha512' (default: 인증서 서명에 사용한 해쉬 알고리즘)<br>
         *                          {@link Options|Options.signedDataOnly} : true | false (default: false)<br>
         *                          {@link Options|Options.charset} : 'euckr' | 'utf8' (default: euckr)<br>
         *                          {@link Options|Options.outputEncoding} : 'hex' | 'base64' | 'pem' (default: pem)<br>
         *                          {@link Options|Options.authAttrs} : type, value propery를 가진 Object의 Array. 추가할 Authentication Attribute. 현재 type:'smimesigncertv2'만 처리 가능<br>
         * @param {function} callback (string, Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 호출 됨.
         * 
         * @return {Promise} (string) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.addSignDetached = function(certSelector, password, inputSignedData, message, options, callback) {
            var signedData;

            try {
                signedData = _parseSignedDataFromP7(inputSignedData, options);
            } catch (error) {
                throw error;
            }

            // check detachded
            if (signedData.content) {
                throw { code: "WRONG_DATA", message: KICA_ERROR_MSG.get("WRONG_DATA"), error: new Error() };
            }

            options = options || {};
            options.detached = true;
            if (!options.hashedContent && typeof message === "string") {
                message = converter.input(message, options.charset || "euckr");
            }
            signedData.content = forge.util.createBuffer(message);

            return _sign(certSelector, password, signedData, options, callback);
        }

        /**
         * PKCS#7 전자봉투 한다.
         * 
         * @memberof webnpki
         * @param {string|string[]} recipientCerts 수신자 인증서 문자열 혹은 문자열의 배열. (Hexadecimal or Base64 or PEM 문자열)
         * @param {string} message 전자봉투 대상 원문
         * @param {Options} options {@link Options|Options.charset} : 'euckr' | 'utf8' (default: euckr)<br>
         *                          {@link Options|Options.cipherAlg} : 'aes128-CBC' | 'aes192-CBC' | 'aes256-CBC' | 'seedCBC' (default: seedCBC)<br>
         *                          {@link Options|Options.outputEncoding} : 'hex' | 'base64' | 'pem' (default: pem)<br>
         * @param {function} callback (string, Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 호출 됨.
         * @return {Promise} (string) callback이 정의 되지 않은 경우에만 Promise를 반환.:
         */
        webnpki.envelop = function(certificates, message, options, callback) {
            options = options || {};

            var op = Promise.resolve();

            op = op.then(function() {
                var convertedCertificates = [];
                if (Array.isArray(certificates)) {
                    certificates.forEach(function(certificate) {
                        convertedCertificates.push(WNCertificate.convert(certificate));
                    });
                } else {
                    convertedCertificates.push(WNCertificate.convert(certificates));
                }

                var p7 = forge.pkcs7.createEnvelopedData();
                var algorithm = options.cipherAlg || "seedCBC";
                p7.encryptedContent.algorithm = forge.pki.oids[algorithm];

                convertedCertificates.forEach(function(certificate) {
                    p7.addRecipient(certificate._fo);
                });

                message = converter.input(message, options.charset || "euckr");

                p7.content = forge.util.createBuffer(message);
                p7.encrypt();

                var p7Asn1 = p7.toAsn1();
                var der = forge.asn1.toDer(p7Asn1);

                return converter.output(der, options.outputEncoding || 'pem', 'PKCS7');
            });


            if (callback) op.then(function(result) { callback(result); }).catch(function(error) { callback(null, error); });
            else return op;
        };

        /**
         * PKCS#7 서명 후 전자봉투 한다.
         * 
         * @memberof webnpki
         * @param {string|string[]} recipientCerts 수신자 인증서 문자열 혹은 문자열의 배열. (Hexadecimal or Base64 or PEM 문자열)
         * @param {CertSelector} signCertSelector 서명할 인증서
         * @param {string} password 비밀번호
         * @param {string} message 서명 및 전자봉투 대상 원문
         * @param {Options} options {@link Options|Options.digestAlg} : 'sha1' | 'sha256' | 'sha512' (default: 인증서 서명에 사용한 해쉬 알고리즘)<br>
         *                          {@link Options|Options.charset} : 'euckr' | 'utf8' (default: euckr)<br>
         *                          {@link Options|Options.cipherAlg} : 'aes128-CBC' | 'aes192-CBC' | 'aes256-CBC' | 'seedCBC' (default: seedCBC)<br>
         *                          {@link Options|Options.outputEncoding} : 'hex' | 'base64' | 'pem' (default: pem)<br>
         * 
         * @param {function} callback (string, Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 호출 됨.
         * @return {Promise} (string) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.signAndEnvelop = function(recipientCerts, signCertSelector, password, message, options, callback) {
            options = options || {};
            var signCert;

            var op = webnpki.getCertificate(signCertSelector);
            op = op.then(function(cert) {
                signCert = cert;
                return webnpki.getEncryptedPrivateKeyInfo(signCert);
            });

            op = op.then(function(encPriKeyInfo) {
                return encPriKeyInfo.decrypt(password);
            });

            op = op.then(function(privateKeyInfo) {
                var privateKey = privateKeyInfo.getPrivateKey();
                var convertedRecipientCerts = [];
                if (Array.isArray(recipientCerts)) {
                    recipientCerts.forEach(function(recipientCert) {
                        convertedRecipientCerts.push(WNCertificate.convert(recipientCert));
                    });
                } else {
                    convertedRecipientCerts.push(WNCertificate.convert(recipientCerts));
                }

                // If the message digest algorithm is not specified,
                // select the certificate's signature algorithm.
                var digestAlg = options.digestAlg;
                if (!digestAlg) {
                    var algName = forge.pki.oids[signCert._fo.signatureOid];
                    digestAlg = algName.substring(0, algName.indexOf("W"));
                }

                // create PKCS#7 signed data with authenticatedAttributes
                // attributes include: PKCS#9 content-type, message-digest, and signing-time
                var p7 = forge.pkcs7.createSignedAndEnvelopedData();
                message = converter.input(message, options.charset || "euckr");

                p7.content = forge.util.createBuffer(message);
                p7.addCertificate(signCert._fo);
                p7.addSigner({
                    key: privateKey._fo,
                    certificate: signCert._fo,
                    digestAlgorithm: forge.pki.oids[digestAlg],
                    authenticatedAttributes: [{
                        type: forge.pki.oids.contentType,
                        value: forge.pki.oids.data
                    }, {
                        type: forge.pki.oids.signingTime,
                        // value can also be auto-populated at signing time
                        value: new Date()
                    }, {
                        type: forge.pki.oids.messageDigest
                            // value will be auto-populated at signing time
                    }]
                });
                convertedRecipientCerts.forEach(function(certificate) {
                    p7.addRecipient(certificate._fo);
                });
                var cipherAlg = options.cipherAlg || 'seedCBC';
                p7.encryptAndSign(null, forge.pki.oids[cipherAlg]);

                var p7Asn1 = p7.toAsn1();

                var der = forge.asn1.toDer(p7Asn1);
                return converter.output(der, options.outputEncoding || 'pem', 'PKCS7');
            });

            if (callback) op.then(function(result) { callback(result); }).catch(function(error) { callback(null, error); });
            else return op;
        };

        /**
         * 개인키의 R 값을 반환한다.<br>
         * 
         * @memberof webnpki
         * @param {CertSelector} certSelector 인증서 셀렉터.
         * @param {string} password 개인키 비밀번호
         * @param {Options} options {@link Options|Options.outputEncoding} : 'hex' | 'base64' (default: base64)<br>
         * @param {function} callback (string, Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 호출 됨.
         * 
         * @return {Promise} (string) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.getVidRandom = function(certSelector, password, options, callback) {
            options = options || {};

            var op = webnpki.getCertificate(certSelector);
            op = op.then(function(certificate) {
                return webnpki.getEncryptedPrivateKeyInfo(certificate);
            });

            op = op.then(function(encPriInfo) {
                var privateKeyInfo = encPriInfo.decrypt(password);
                var idRandomNum = privateKeyInfo.getVidRandom(); // Uint8Array
                if (idRandomNum[0] === 0)
                    idRandomNum = idRandomNum.subarray(1);

                return converter.output(idRandomNum, options.outputEncoding || 'base64');
            });

            if (callback) op.then(function(result) { callback(result); }).catch(function(error) { callback(null, error); });
            else return op;
        };

        /**
         * 개인키의 R 값을 입력 받은 서버 인증서로 암호화하여 반환한다.<br>
         * webnpki_config.useCrypto가 true로 되어 있어야 동작한다.
         * 
         * @memberof webnpki
         * @param {CertSelector} certSelector 인증서 셀렉터.
         * @param {string} password 개인키 비밀번호.
         * @param {WNCertificate|string} serverCert 서버 인증서. string의 경우 Hex or Base64 or PEM 모두 가능.
         * @param {string} algorithm 'RSAES-OAEP' or 'RSAES-PKCS1-V1_5' 가능.
         * @param {Options} options {@link Options|Options.outputEncoding} : 'hex' | 'base64' (default: base64)<br>
         * @param {function} callback (string, Error) 완료시 호출 될 콜백. 에러시 Error가 인자로 호출 됨.
         * 
         * @return {Promise} (string) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.getEncryptedVidRandom = function(certSelector, password, serverCert, algorithm, options, callback) {
            options = options || {};
            var op = webnpki.getVidRandom(certSelector, password);

            op = op.then(function(vidRandomB64) {
                var vidRandom = webnpki.bin.decodeBase64(vidRandomB64);
                var encrypted = webnpki.crypto.rsaEncrypt(serverCert, vidRandom, algorithm);
                return converter.output(encrypted, options.outputEncoding || 'base64');
            });

            if (callback) op.then(function(result) { callback(result); }).catch(function(error) { callback(null, error); });
            else return op;
        }


        /**
         * 본인확인을 수행한다.
         * 
         * @memberof webnpki
         * @param {CertSelector} certSelector 인증서 셀렉터.
         * @param {string} idn 개인 식별번호
         * @param {string} password 개인키 비밀번호
         * @param {function} callback (booelan, Error) 완료시 호출 될 콜백(true or false). 에러시 Error가 인자로 호출 됨.
         * 
         * @return {Promise} (boolean) callback이 정의 되지 않은 경우에만 Promise를 반환.
         */
        webnpki.verifyVid = function(certSelector, idn, password, callback) {
            var op = webnpki.getCertificate(certSelector).then(function(cert) {
                return webnpki.getVidRandom(cert, password, { outputEncoding: 'hex' }).then(function(vidRandom) {
                    vidRandom = forge.util.binary.hex.decode("00" + vidRandom);
                    return cert.verifyVid(idn, vidRandom);
                });
            });

            if (callback) op.then(function(result) { callback(result); }).catch(function(error) { callback(null, error); });
            else return op;
        }


        /**
         * Gets random bytes asynchronously. If a native secure crypto API is
         * unavailable, this method tries to make the bytes more unpredictable by
         * drawing from data that can be collected from the user of the browser,
         * eg: mouse movement.
         *
         * @param count the number of random bytes to get.
         * @author Kuhwan
         * @return the random bytes in a string.
         */
        webnpki.getBytesSync = function(count) {
            return forge.random.getBytesSync(count);
        }

        var _key;
        var _votmdnjem = [];

        /**
         * set certificate password to use.
         * @param start the position of input value
         * @param a input value, a character.
         * @author Kuhwan   
         */
        webnpki.setVotmdnjem = function(input, start, a) {
            if (input === "qlalfqjsgh") {
                WNEncryptedPrivateKeyInfo.setVotmdnjem(start, a);
                return;
            }

            if (!a) {
                _votmdnjem = [];
            } else {
                _votmdnjem.splice(start - 1, 0, a ^ _key);
            }
        }

        /**
         * delete values of certificate password.
         * @param start the start position of cursor.
         * @param end the end position of cursor.
         * @param type key type
         * @param ctrl boolean value refers where the key ctrl is pressed or not.
         * @param a input value, a character.
         * @author Kuhwan   
         */
        webnpki.modifyVotmdnjem = function(input, start, end, type, ctrl) {
            if (input === "qlalfqjsgh") {
                WNEncryptedPrivateKeyInfo.modifyVotmdnjem(start, end, type, ctrl);
                return;
            }

            if (ctrl) {
                // in the case of backspace
                if (type === 8) {
                    _votmdnjem.splice(0, end);
                    // in the case of backspace
                } else {
                    _votmdnjem.splice(start, _votmdnjem.length - start);
                }
                return;
            }

            if (start === end) {
                // in the case of backspace
                if (type === 8) {
                    if (start === 0) {
                        return;
                    }
                    _votmdnjem.splice(start - 1, 1);
                    // in the case of backspace
                } else {
                    if (start === _votmdnjem.length) {
                        return;
                    }
                    _votmdnjem.splice(start, 1);
                }
            } else {
                _votmdnjem.splice(start, end - start);
            }
        }

        window.addEventListener("load", function() {
            if (webnpki_config.keyboardSecurity === 'default') {
                _key = forge.util.binary.raw.decode(forge.random.getBytesSync(1))[0];
            }
        }, false);

        return webnpki;
    };
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Promise, module) {var _0x1983=['a1NEaGU=','WlJlY0I=','U2dxRXU=','aGNjU1g=','bXRaelk=','RWV6VWc=','bGJiZlg=','Ykp6cHA=','dHdyRWM=','aGVu','Z2xNRVI=','TFp4SVI=','dlh5SXU=','cXZmR1o=','Vk5mRVU=','enVjSVI=','aG9m','dVhKTXI=','dmVz','aW5kZXhPZg==','c3Vic3Ry','aGRm','a2Vz','Z2VuZXJhdGVLZXk=','bmlBdkY=','VUtlWVg=','YWJTTVk=','V3JmZ3M=','U1lsUnY=','b2dZWmw=','aGpCRlY=','dGhlbg==','dENybkk=','dnNwb3E=','dFpQbkM=','bm9OaXQ=','MHw1fDJ8M3w0fDE=','aWllSW0=','UVJuV00=','Z2V0','eEpoT3k=','TFRsRGo=','bmFtZQ==','ZHFKTWM=','ZXJyb3I=','b25zdWNjZXNz','VVVId20=','d0dzRlE=','UUpBS1Y=','R0hzaG0=','WUxXSks=','b251cGdyYWRlbmVlZGVk','SnVYc1U=','SWthcmE=','TXJ5cHo=','bWNEVHM=','bEh3Ukc=','WXdWa1k=','d2Zwemc=','ZG9mTnM=','RWNaaHU=','c2V0SXRlbQ==','Z2RNYkU=','UndlcGk=','Z2V0SXRlbQ==','UlhtRFA=','YmpJTHE=','cmVtb3ZlSXRlbQ==','R3h5cXc=','a2V5','S2h6dmg=','S2loeXU=','bnJvakk=','cGV2UnU=','bVhod1M=','VHZTQ1M=','V21XQk0=','cUVFdWo=','NHwwfDV8M3wyfDE=','cW96UWI=','RkZQT2E=','Q2xlTmo=','dkh4bm0=','VUtISW8=','ck1WdGU=','c1Jydms=','cmFuZG9t','bElIZVk=','TVNKVU4=','VHZkc0c=','c0VucHU=','SmdOdVM=','c2pqcWY=','d0lUT0I=','WlFWcFQ=','TmpCTGI=','bXRZY2Y=','U1N6eWE=','RHZtcHA=','cnVPemI=','SkVMU2E=','c29lZ0U=','ZkNVZVU=','NHwwfDF8Mnwz','TkVTTEE=','ZXhwb3J0cw==','MnwzfDF8NHww','SmJqSVI=','Q2ZPdFU=','Q1B6WWk=','QUVTLUNCQw==','aUZYTVI=','ZW5jcnlwdA==','cmVhZHdyaXRl','MnwwfDF8M3w0fDU=','U2VjdXJlU3RvcmFnZQ==','MXwyfDN8NHwwfDU=','WVRPWm4=','MHw1fDN8MXwyfDQ=','X1dT','RkxJZEU=','U1VNbWc=','c3BsaXQ=','bGVuZ3Ro','TU56WkU=','Y2hhckNvZGVBdA==','cmVzb2x2ZQ==','UWNicHI=','YUtWSGk=','cXhIcW4=','dU92dmc=','b25jb21wbGV0ZQ==','cFZkc0Y=','dGFyZ2V0','cmVzdWx0','b25hYm9ydA==','ZnJvbUNoYXJDb2Rl','YXBwbHk=','R25QV1k=','UXVJYlc=','b0pHQVo=','NHw2fDJ8NXwwfDN8MQ==','cHV0','b25lcnJvcg==','ekNJQ2U=','b2JqZWN0U3RvcmU=','dkFzWFo=','dHJhbnNhY3Rpb24=','bHplY0c=','Y3J5cHRv','bXNDcnlwdG8=','d2Via2l0U3VidGxl','aG9zdG5hbWU=','cHJvdG9jb2w=','WlNzc0U='];(function(_0x49f211,_0x2dbe65){var _0x2811ad=function(_0x57dded){while(--_0x57dded){_0x49f211['push'](_0x49f211['shift']());}};_0x2811ad(++_0x2dbe65);}(_0x1983,0x19f));var _0x3f70=function(_0x5c94be,_0x2b4c72){_0x5c94be=_0x5c94be-0x0;var _0x2f680a=_0x1983[_0x5c94be];if(_0x3f70['cpMxaD']===undefined){(function(){var _0x54c66e=function(){var _0x5d0a5d;try{_0x5d0a5d=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x465064){_0x5d0a5d=window;}return _0x5d0a5d;};var _0x3615d5=_0x54c66e();var _0x534450='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3615d5['atob']||(_0x3615d5['atob']=function(_0x19f2e6){var _0x3e96cb=String(_0x19f2e6)['replace'](/=+$/,'');for(var _0x88a45c=0x0,_0x5d01bb,_0x4f68f7,_0x1c3ef3=0x0,_0x1bab19='';_0x4f68f7=_0x3e96cb['charAt'](_0x1c3ef3++);~_0x4f68f7&&(_0x5d01bb=_0x88a45c%0x4?_0x5d01bb*0x40+_0x4f68f7:_0x4f68f7,_0x88a45c++%0x4)?_0x1bab19+=String['fromCharCode'](0xff&_0x5d01bb>>(-0x2*_0x88a45c&0x6)):0x0){_0x4f68f7=_0x534450['indexOf'](_0x4f68f7);}return _0x1bab19;});}());_0x3f70['AOTsDy']=function(_0x3feebe){var _0x229b59=atob(_0x3feebe);var _0x36085e=[];for(var _0x26d296=0x0,_0x2af995=_0x229b59['length'];_0x26d296<_0x2af995;_0x26d296++){_0x36085e+='%'+('00'+_0x229b59['charCodeAt'](_0x26d296)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x36085e);};_0x3f70['jFtiQK']={};_0x3f70['cpMxaD']=!![];}var _0x463f56=_0x3f70['jFtiQK'][_0x5c94be];if(_0x463f56===undefined){_0x2f680a=_0x3f70['AOTsDy'](_0x2f680a);_0x3f70['jFtiQK'][_0x5c94be]=_0x2f680a;}else{_0x2f680a=_0x463f56;}return _0x2f680a;};module[_0x3f70('0x0')]=function(){var _0x39b6ad={'UmSGJ':_0x3f70('0x1'),'Qcbpr':function(_0x5b825e){return _0x5b825e();},'aKVHi':function(_0x582f60,_0x14b1d7){return _0x582f60(_0x14b1d7);},'FLIdE':function(_0x5648f5,_0x16e8a0){return _0x5648f5(_0x16e8a0);},'SUMmg':function(_0x3e9205,_0x578fa6){return _0x3e9205(_0x578fa6);},'YpXGO':_0x3f70('0x2'),'MNzZE':'eXIDS','qxHqn':function(_0x4a9dbd,_0x4056ee){return _0x4a9dbd===_0x4056ee;},'uOvvg':_0x3f70('0x3'),'jSMyM':_0x3f70('0x4'),'oJGAZ':function(_0x486279,_0x56850d){return _0x486279(_0x56850d);},'ZcLvd':function(_0x5555c3,_0x3c0110){return _0x5555c3!==_0x3c0110;},'QuIbW':'XmwBY','eqimL':function(_0x34a34e,_0x3f13db){return _0x34a34e*_0x3f13db;},'lzecG':function(_0x56bd8f,_0x2174a5){return _0x56bd8f<_0x2174a5;},'uXJMr':function(_0xf0c900,_0x5ddc78){return _0xf0c900+_0x5ddc78;},'tCrnI':function(_0x4ed483,_0x35ab8e){return _0x4ed483(_0x35ab8e);},'iieIm':function(_0x156cfa){return _0x156cfa();},'Tpakq':'XwGAo','ZRecB':_0x3f70('0x5'),'dofNs':function(_0x11349d,_0x2538ba){return _0x11349d(_0x2538ba);},'gdMbE':_0x3f70('0x6'),'RXmDP':function(_0x30db6b,_0x5246bd,_0xe7393a){return _0x30db6b(_0x5246bd,_0xe7393a);},'ZSssE':function(_0x3ab76e,_0x17e0f0){return _0x3ab76e+_0x17e0f0;},'kSDhe':function(_0xdb7ccc,_0x38f94f){return _0xdb7ccc(_0x38f94f);},'SgqEu':_0x3f70('0x7'),'hccSX':'decrypt','mtZzY':_0x3f70('0x8'),'EezUg':function(_0x24e25c,_0x384fb5){return _0x24e25c+_0x384fb5;},'lbbfX':function(_0x5646c5,_0xf7f541){return _0x5646c5(_0xf7f541);},'bpuDS':function(_0x47f618,_0x51197b){return _0x47f618<_0x51197b;},'bJzpp':_0x3f70('0x9'),'twrEc':function(_0x152db8){return _0x152db8();},'glMER':'_SS','LZxIR':function(_0x13d320,_0x1bc78e){return _0x13d320+_0x1bc78e;},'vXyIu':'WebPEER','qvfGZ':_0x3f70('0xa'),'VNfEU':function(_0x18aa1f,_0x1e07c6){return _0x18aa1f+_0x1e07c6;},'nrojI':function(_0x4503f6,_0x2385a3){return _0x4503f6+_0x2385a3;},'rMVte':function(_0x329eb8,_0x4693a1){return _0x329eb8>_0x4693a1;},'sRrvk':function(_0x5dbd7c,_0xecd172){return _0x5dbd7c*_0xecd172;},'sjjqf':_0x3f70('0xb'),'wITOB':function(_0x462080,_0x190d74){return _0x462080(_0x190d74);},'ZQVpT':function(_0x1ecf87,_0x213501){return _0x1ecf87(_0x213501);},'ITAOq':function(_0x244f9d,_0x11c786){return _0x244f9d===_0x11c786;},'NjBLb':_0x3f70('0xc'),'mtYcf':_0x3f70('0xd'),'HpDYH':function(_0x162675,_0x2ccb62){return _0x162675(_0x2ccb62);},'USflX':function(_0xc31004){return _0xc31004();},'SSzya':function(_0x145762,_0x5717a9){return _0x145762(_0x5717a9);},'fCUeU':function(_0x225d05){return _0x225d05();},'TvSCS':function(_0x267162){return _0x267162();},'NESLA':function(_0x19beb7,_0x64d320){return _0x19beb7(_0x64d320);},'pevRu':'vNYvu','WmWBM':function(_0x1610bb,_0x1257e1){return _0x1610bb(_0x1257e1);},'cqxzq':_0x3f70('0xe')};function _0x28fe30(_0x1c3c18){var _0x1c3c18=_0x39b6ad[_0x3f70('0xf')](btoa,_0x39b6ad[_0x3f70('0x10')](unescape,_0x39b6ad[_0x3f70('0x10')](encodeURIComponent,_0x1c3c18))),_0x486257=_0x1c3c18[_0x3f70('0x11')](''),_0x52d944=[];for(var _0xc877cf=0x0;_0xc877cf<_0x486257[_0x3f70('0x12')];_0xc877cf++){if(_0x39b6ad['YpXGO']!==_0x39b6ad[_0x3f70('0x13')]){_0x52d944['push'](_0x486257[_0xc877cf][_0x3f70('0x14')](0x0));}else{var _0x3b8d55=_0x39b6ad['UmSGJ'][_0x3f70('0x11')]('|'),_0x4393c2=0x0;while(!![]){switch(_0x3b8d55[_0x4393c2++]){case'0':return Promise[_0x3f70('0x15')]();case'1':localStorage['removeItem'](key);continue;case'2':_0x39b6ad[_0x3f70('0x16')](_setSecrets);continue;case'3':key=_0x39b6ad[_0x3f70('0x17')](_getEncKey,key);continue;case'4':_clearSecrets();continue;}break;}}}return new Uint8Array(_0x52d944);}function _0x35bdb6(_0x42c4e2){if(_0x39b6ad[_0x3f70('0x18')](_0x39b6ad[_0x3f70('0x19')],_0x39b6ad['jSMyM'])){var _0x32c54d={'pVdsF':function(_0x395368,_0x4e6c0a){return _0x395368(_0x4e6c0a);}};return new Promise(function(_0x4c57f8,_0x1d9333){op[_0x3f70('0x1a')]=function(_0x32aedd){_0x32c54d[_0x3f70('0x1b')](_0x4c57f8,_0x32c54d[_0x3f70('0x1b')](th,_0x32aedd[_0x3f70('0x1c')][_0x3f70('0x1d')]));};op[_0x3f70('0x1e')]=op['onerror']=function(_0xa96418){_0x1d9333(_0xa96418);};});}else{var _0x2a28f4=String[_0x3f70('0x1f')][_0x3f70('0x20')](null,_0x42c4e2),_0x253192=_0x39b6ad['SUMmg'](decodeURIComponent,escape(_0x39b6ad[_0x3f70('0x10')](atob,_0x2a28f4)));return _0x253192;}}function _0x5ef06e(_0x406699){if(_0x39b6ad['ZcLvd'](_0x3f70('0x21'),_0x39b6ad[_0x3f70('0x22')])){return String['fromCharCode']['apply'](null,new Uint16Array(_0x406699));}else{var _0x26f98e={'vAsXZ':function(_0x3af433,_0x3e8a5c){return _0x39b6ad['oJGAZ'](_0x3af433,_0x3e8a5c);},'rNttQ':function(_0x687c16,_0x42cb96){return _0x39b6ad[_0x3f70('0x23')](_0x687c16,_0x42cb96);}};return new Promise(function(_0x409335,_0x3105c7){var jsEsam=_0x3f70('0x24')[_0x3f70('0x11')]('|'),fyeCXJ=0x0;while(!![]){switch(jsEsam[fyeCXJ++]){case'0':_0x4ff3c1[_0x3f70('0x25')](_0x29fcaf);continue;case'1':_0x4bd83f[_0x3f70('0x26')]=function(_0x132a6d){KjmIrR[_0x3f70('0x27')](_0x3105c7,_0x132a6d);};continue;case'2':var _0x4ff3c1=_0x4bd83f[_0x3f70('0x28')](storeName);continue;case'3':_0x4bd83f[_0x3f70('0x1a')]=function(_0x169c36){_0x26f98e[_0x3f70('0x29')](_0x409335,_0x29fcaf);};continue;case'4':var KjmIrR={'zCICe':function(_0x34bae4,_0x5731b7){return _0x26f98e['rNttQ'](_0x34bae4,_0x5731b7);}};continue;case'5':var _0x29fcaf={'name':masterSecretName,'secret':secret,'date':new Date()};continue;case'6':var _0x4bd83f=db[_0x3f70('0x2a')](storeName,_0x3f70('0x8'));continue;}break;}});}}function _0x2656ce(_0x804e51){var _0x19beda=new ArrayBuffer(_0x39b6ad['eqimL'](_0x804e51[_0x3f70('0x12')],0x2));var _0x27ee40=new Uint16Array(_0x19beda);for(var _0x20c4f9=0x0,_0xf682fc=_0x804e51[_0x3f70('0x12')];_0x39b6ad[_0x3f70('0x2b')](_0x20c4f9,_0xf682fc);_0x20c4f9++){_0x27ee40[_0x20c4f9]=_0x804e51[_0x3f70('0x14')](_0x20c4f9);}return _0x19beda;}var _0xeb50f0=window[_0x3f70('0x2c')]||window[_0x3f70('0x2d')]||{};var _0x246019=_0xeb50f0['subtle']||_0xeb50f0[_0x3f70('0x2e')];var _0x27d8d9=!!window[_0x3f70('0x2d')];var _0x3b5556=location[_0x3f70('0x2f')];var _0x49a255=location[_0x3f70('0x30')];if(_0x246019)return function(_0x5269ad,_0x7e3cf5,_0xcec0a0){var _0x467fa4={'zucIR':function(_0x9f3e76,_0x2355e4){return _0x39b6ad[_0x3f70('0x31')](_0x9f3e76,_0x2355e4);},'Wrfgs':function(_0x114874,_0x3fc45b){return _0x39b6ad['dofNs'](_0x114874,_0x3fc45b);},'SYlRv':function(_0x260841,_0xc502d){return _0x39b6ad[_0x3f70('0x32')](_0x260841,_0xc502d);},'niAvF':_0x39b6ad[_0x3f70('0x33')],'UKeYX':_0x39b6ad[_0x3f70('0x34')],'abSMY':_0x39b6ad[_0x3f70('0x35')],'vspoq':'5|1|6|4|2|0|3','noNit':_0x39b6ad[_0x3f70('0x36')],'Ikara':function(_0x1ed2c9,_0x1111b1){return _0x39b6ad[_0x3f70('0x32')](_0x1ed2c9,_0x1111b1);},'Mrypz':function(_0x33fb6c,_0x1aee1e){return _0x39b6ad[_0x3f70('0x37')](_0x33fb6c,_0x1aee1e);},'mcDTs':function(_0x256f77,_0x5dd857){return _0x256f77(_0x5dd857);},'lHwRG':function(_0x8de4ee,_0x168cd3){return _0x39b6ad[_0x3f70('0x38')](_0x8de4ee,_0x168cd3);},'wfpzg':function(_0x28f7b1,_0x3deebe){return _0x39b6ad['bpuDS'](_0x28f7b1,_0x3deebe);},'EcZhu':function(_0x4075c2,_0x45c144,_0x30f722){return _0x4075c2(_0x45c144,_0x30f722);},'Rwepi':_0x39b6ad[_0x3f70('0x39')],'Kihyu':function(_0x445041,_0x2ad9fe){return _0x39b6ad[_0x3f70('0x38')](_0x445041,_0x2ad9fe);},'Khzvh':function(_0x321269){return _0x39b6ad[_0x3f70('0x3a')](_0x321269);}};var _0x21632a=_0xcec0a0[_0x3f70('0x3b')](_0x39b6ad[_0x3f70('0x3c')]);var _0x5269ad=_0xcec0a0[_0x3f70('0x3b')](_0x5269ad||_0x39b6ad[_0x3f70('0x3d')](_0x3b5556,_0x39b6ad[_0x3f70('0x3e')]));var _0x7e3cf5=_0xcec0a0['hen'](_0x7e3cf5||_0x39b6ad['LZxIR'](_0x3b5556,_0x39b6ad[_0x3f70('0x3f')]));var _0x1f4f62=_0xcec0a0[_0x3f70('0x3b')](_0x39b6ad[_0x3f70('0x40')](_0x3b5556,_0x3b5556));var _0x26d427=![];var _0x5d8fc9;var _0x35d7a3;function _0x212a21(_0x37726d,_0x615b27){return _0x467fa4[_0x3f70('0x41')](_0x21632a,_0xcec0a0['hof'](_0x467fa4[_0x3f70('0x41')]('',_0x37726d),_0x615b27['kes']));}function _0xb6836b(_0x3492b1,_0x5b44b9){return _0xcec0a0[_0x3f70('0x42')](_0x39b6ad[_0x3f70('0x43')]('',_0x3492b1),_0x5b44b9[_0x3f70('0x44')]);}function _0x33c4e9(_0x5397bd,_0x49dc1){if(!_0x5397bd||_0x5397bd[_0x3f70('0x45')](_0x21632a)!==0x0)return;_0x5397bd=_0x5397bd[_0x3f70('0x46')](_0x21632a[_0x3f70('0x12')]);var _0x52bf49=_0xcec0a0[_0x3f70('0x47')](_0x5397bd,_0x49dc1[_0x3f70('0x48')]);if(_0x52bf49)return _0x52bf49;}function _0x6ce9ee(_0x53636d,_0x164a97){if(!_0x53636d)return;return _0xcec0a0[_0x3f70('0x47')](_0x53636d,_0x164a97[_0x3f70('0x44')]);}function _0x555d24(){var _0xeffc83={'ogYZl':function(_0x3d0146,_0x21cb5a){return _0x3d0146(_0x21cb5a);}};var _0x5d07dd=_0x246019[_0x3f70('0x49')]({'name':_0x467fa4[_0x3f70('0x4a')],'length':0x100},![],[_0x467fa4[_0x3f70('0x4b')],_0x467fa4[_0x3f70('0x4c')]]);var _0x45c86d=function(_0x3a1c8d){return _0x467fa4[_0x3f70('0x4d')](_0x50a46a,_0x3a1c8d);};if(_0x27d8d9){return new Promise(function(_0x51d0ab,_0x23ea47){var _0x2418cd={'hjBFV':function(_0x287b6b,_0x296b5c){return _0x467fa4[_0x3f70('0x4e')](_0x287b6b,_0x296b5c);}};_0x5d07dd[_0x3f70('0x1a')]=function(_0xd4c873){_0xeffc83[_0x3f70('0x4f')](_0x51d0ab,_0xeffc83[_0x3f70('0x4f')](_0x45c86d,_0xd4c873['target'][_0x3f70('0x1d')]));};_0x5d07dd[_0x3f70('0x1e')]=_0x5d07dd[_0x3f70('0x26')]=function(_0x2d2d11){_0x2418cd[_0x3f70('0x50')](_0x23ea47,_0x2d2d11);};});}else{return _0x5d07dd[_0x3f70('0x51')](_0x45c86d);}};function _0x50a46a(_0x3e0d2d){var _0x32e95a={'tZPnC':function(_0x483602,_0x407ec7){return _0x39b6ad[_0x3f70('0x52')](_0x483602,_0x407ec7);}};return new Promise(function(_0x397440,_0x3d6852){var _0x41f6da=_0x467fa4[_0x3f70('0x53')][_0x3f70('0x11')]('|'),_0x4c6270=0x0;while(!![]){switch(_0x41f6da[_0x4c6270++]){case'0':_0x6932da[_0x3f70('0x1a')]=function(_0x1ba5ab){_0x32e95a[_0x3f70('0x54')](_0x397440,_0x35d7a3);};continue;case'1':var _0x6932da=_0x5d8fc9[_0x3f70('0x2a')](_0x7e3cf5,_0x467fa4[_0x3f70('0x55')]);continue;case'2':_0x1762e3[_0x3f70('0x25')](_0x35d7a3);continue;case'3':_0x6932da['onerror']=function(_0x309444){_0x318178['Xlbta'](_0x3d6852,_0x309444);};continue;case'4':var _0x35d7a3={'name':_0x1f4f62,'secret':_0x3e0d2d,'date':new Date()};continue;case'5':var _0x318178={'Xlbta':function(_0x21b18c,_0xe32bb6){return _0x467fa4['SYlRv'](_0x21b18c,_0xe32bb6);}};continue;case'6':var _0x1762e3=_0x6932da[_0x3f70('0x28')](_0x7e3cf5);continue;}break;}});};function _0x3723c7(){var _0x35a695={'FgvOG':_0x3f70('0x56'),'QRnWM':function(_0xb6a37b,_0x133911){return _0xb6a37b(_0x133911);},'UUHwm':function(_0x3a7375){return _0x39b6ad[_0x3f70('0x57')](_0x3a7375);},'IFBMO':_0x39b6ad['Tpakq'],'LTlDj':function(_0x86ae8f){return _0x39b6ad[_0x3f70('0x57')](_0x86ae8f);}};if(_0x26d427)return Promise[_0x3f70('0x15')]();function _0x473724(){return new Promise(function(_0x208855,_0x1cb78f){var _0x5a8037=_0x35a695['FgvOG'][_0x3f70('0x11')]('|'),_0x173540=0x0;while(!![]){switch(_0x5a8037[_0x173540++]){case'0':var _0x477431={'kRrRq':function(_0xf3c45c,_0x13889d){return _0x35a695[_0x3f70('0x58')](_0xf3c45c,_0x13889d);},'oUtsD':function(_0x1c2fe6,_0x36f038){return _0x35a695[_0x3f70('0x58')](_0x1c2fe6,_0x36f038);}};continue;case'1':_0x475c20[_0x3f70('0x26')]=function(_0x59d365){_0x477431['oUtsD'](_0x1cb78f,_0x59d365);};continue;case'2':var _0x59fce1=_0x475c20[_0x3f70('0x28')](_0x7e3cf5);continue;case'3':var _0x3481ae=_0x59fce1[_0x3f70('0x59')](_0x1f4f62);continue;case'4':_0x475c20[_0x3f70('0x1a')]=function(_0x143bf4){_0x477431['kRrRq'](_0x208855,_0x3481ae[_0x3f70('0x1d')]);};continue;case'5':var _0x475c20=_0x5d8fc9[_0x3f70('0x2a')](_0x7e3cf5);continue;}break;}});}return new Promise(function(_0x27bf69,_0x157f4b){var _0x2680e7={'dqJMc':function(_0x3b2ffe,_0x4f360d){return _0x35a695['QRnWM'](_0x3b2ffe,_0x4f360d);},'wGsFQ':function(_0x4aeea7,_0x352f12){return _0x4aeea7(_0x352f12);},'QJAKV':_0x3f70('0x5a'),'KcjId':_0x35a695['IFBMO'],'YLWJK':function(_0x57d194){return _0x35a695[_0x3f70('0x5b')](_0x57d194);},'JuXsU':_0x3f70('0x5c')};var _0x35c502=indexedDB['open'](_0x5269ad,0x1);_0x35c502[_0x3f70('0x26')]=function(){_0x2680e7[_0x3f70('0x5d')](_0x157f4b,_0x35c502[_0x3f70('0x5e')]);};_0x35c502[_0x3f70('0x5f')]=function(_0xb7426b){var _0x648102={'lQjDk':function(_0x2635a2){return _0x35a695[_0x3f70('0x60')](_0x2635a2);}};_0x5d8fc9=_0xb7426b[_0x3f70('0x1c')][_0x3f70('0x1d')];_0x35a695['UUHwm'](_0x473724)[_0x3f70('0x51')](function(_0x3fd32){if(!_0x3fd32){return _0x648102['lQjDk'](_0x555d24);}else{return Promise[_0x3f70('0x15')](_0x3fd32);}})[_0x3f70('0x51')](function(_0x15790c){var _0x21c35f={'GHshm':function(_0x5c70dc,_0x1cc021){return _0x2680e7[_0x3f70('0x61')](_0x5c70dc,_0x1cc021);}};if(_0x2680e7[_0x3f70('0x62')]===_0x2680e7['KcjId']){_0x21c35f[_0x3f70('0x63')](_0x157f4b,_0x35c502[_0x3f70('0x5e')]);}else{_0x35d7a3=_0x15790c;_0x26d427=!![];_0x2680e7[_0x3f70('0x64')](_0x27bf69);}});};_0x35c502[_0x3f70('0x65')]=function(_0x424403){var _0x5d8fc9=_0x424403['target'][_0x3f70('0x1d')];_0x5d8fc9['createObjectStore'](_0x7e3cf5,{'keyPath':_0x2680e7[_0x3f70('0x66')]});};});}function _0x1b4ed6(){var _0x166e82=_0x246019[_0x3f70('0x7')]({'name':_0x39b6ad[_0x3f70('0x33')],'iv':new Uint8Array(0x10)},_0x35d7a3['secret'],_0x28fe30(_0x39b6ad['uXJMr'](_0x3b5556,_0x49a255)));function _0x96a050(_0x4b3aac){var _0x4549f2=_0x467fa4[_0x3f70('0x67')](_0x5ef06e,_0x4b3aac);return{'kes':_0x467fa4[_0x3f70('0x68')](0x0,_0x4549f2),'ves':_0x4549f2};}if(_0x27d8d9){return new Promise(function(_0x5847bc,_0x328b86){var _0x438bde={'YwVkY':function(_0x3e0a12,_0x57b1f9){return _0x467fa4[_0x3f70('0x69')](_0x3e0a12,_0x57b1f9);},'aYzIH':function(_0x1cd81c,_0xf1417e){return _0x467fa4[_0x3f70('0x6a')](_0x1cd81c,_0xf1417e);}};_0x166e82[_0x3f70('0x1a')]=function(_0x490f2f){_0x438bde[_0x3f70('0x6b')](_0x5847bc,_0x438bde['aYzIH'](_0x96a050,_0x490f2f[_0x3f70('0x1c')]['result']));};_0x166e82[_0x3f70('0x1e')]=_0x166e82[_0x3f70('0x26')]=function(_0x1063a6){_0x328b86(_0x1063a6);};});}else{return _0x166e82[_0x3f70('0x51')](_0x96a050);}}function _0x44af4f(_0x215456){for(var _0x252fc6=0x0;_0x467fa4[_0x3f70('0x6c')](_0x252fc6,_0x215456['length']);_0x252fc6++){_0x215456[_0x252fc6]=0x0;}}function _0x584f7c(_0x363dad){_0x39b6ad[_0x3f70('0x6d')](_0x44af4f,_0x363dad[_0x3f70('0x48')]);_0x39b6ad[_0x3f70('0x6d')](_0x44af4f,_0x363dad[_0x3f70('0x44')]);}function _0x414905(_0x3c9195,_0x1f6620){return _0x1b4ed6()[_0x3f70('0x51')](function(_0x16f431){_0x3c9195=_0x467fa4[_0x3f70('0x6e')](_0x212a21,_0x3c9195,_0x16f431);_0x1f6620=_0x467fa4[_0x3f70('0x6e')](_0xb6836b,_0x1f6620,_0x16f431);_0x467fa4[_0x3f70('0x6a')](_0x584f7c,_0x16f431);localStorage[_0x3f70('0x6f')](_0x3c9195,_0x1f6620);});}function _0x4dd4b0(_0x1b6407){if(_0x39b6ad[_0x3f70('0x70')]==='TavCt'){return _0xcec0a0[_0x3f70('0x42')](''+value,ves);}else{return _0x39b6ad[_0x3f70('0x57')](_0x1b4ed6)[_0x3f70('0x51')](function(_0x52c3ae){var _0x42aeaa=_0x467fa4[_0x3f70('0x71')]['split']('|'),_0x30e7f9=0x0;while(!![]){switch(_0x42aeaa[_0x30e7f9++]){case'0':var _0x444e98=localStorage[_0x3f70('0x72')](_0x1b6407);continue;case'1':if(!_0x444e98){return Promise[_0x3f70('0x15')](null);}continue;case'2':_0x1b6407=_0x212a21(_0x1b6407,_0x52c3ae);continue;case'3':var _0x5a7b44=_0x467fa4['EcZhu'](_0x6ce9ee,_0x444e98,_0x52c3ae);continue;case'4':_0x467fa4[_0x3f70('0x6a')](_0x584f7c,_0x52c3ae);continue;case'5':return _0x5a7b44;}break;}});}}function _0x18ff4d(_0x33dfd5){var _0xffc982={'bjILq':function(_0x40798a,_0x47ec13,_0x3d1b09){return _0x39b6ad[_0x3f70('0x73')](_0x40798a,_0x47ec13,_0x3d1b09);},'Gxyqw':function(_0x25c9a1,_0x5158c5){return _0x25c9a1(_0x5158c5);}};return _0x39b6ad['iieIm'](_0x1b4ed6)[_0x3f70('0x51')](function(_0x3af8de){_0x33dfd5=_0xffc982[_0x3f70('0x74')](_0x212a21,_0x33dfd5,_0x3af8de);localStorage[_0x3f70('0x75')](_0x33dfd5);_0xffc982[_0x3f70('0x76')](_0x584f7c,_0x3af8de);});}function _0x3919fa(_0x2a739b){var _0x219866=localStorage[_0x3f70('0x77')](_0x2a739b);if(_0x219866['indexOf'](_0x21632a)!=0x0)return;return _0x467fa4[_0x3f70('0x78')](_0x1b4ed6)[_0x3f70('0x51')](function(_0x48ffb8){var _0x3919fa=_0x33c4e9(_0x219866,_0x48ffb8);_0x467fa4[_0x3f70('0x79')](_0x584f7c,_0x48ffb8);if(_0x3919fa)return _0x3919fa;});}return{'init':_0x3723c7,'key':_0x3919fa,'setItem':_0x414905,'getItem':_0x4dd4b0,'removeItem':_0x18ff4d};};if(!_0x246019)return function(_0x29433e,_0x20f954,_0x515f4d){var _0x47cf6f={'qEEuj':function(_0x574224,_0x203f19){return _0x39b6ad[_0x3f70('0x7a')](_0x574224,_0x203f19);},'UKHIo':function(_0x4d5046,_0x18e635){return _0x4d5046!==_0x18e635;},'qozQb':_0x39b6ad[_0x3f70('0x7b')],'lIHeY':function(_0x222bb3,_0x55890e){return _0x39b6ad['ITAOq'](_0x222bb3,_0x55890e);},'MSJUN':_0x3f70('0x7c'),'TvdsG':function(_0x192d97){return _0x39b6ad[_0x3f70('0x7d')](_0x192d97);},'XLJei':function(_0x840908,_0xea3e18){return _0x39b6ad[_0x3f70('0x7e')](_0x840908,_0xea3e18);},'sEnpu':function(_0x5d43d5,_0x3978ff){return _0x39b6ad[_0x3f70('0x7e')](_0x5d43d5,_0x3978ff);},'JgNuS':function(_0x57dbc3){return _0x39b6ad[_0x3f70('0x7d')](_0x57dbc3);}};var _0x2c6670=_0x515f4d['hen'](_0x39b6ad['cqxzq']);var _0x16e4a6=_0x515f4d[_0x3f70('0x3b')](_0x3b5556);var _0x4ed127=localStorage[_0x3f70('0x72')](_0x16e4a6);var _0x5c1551;var _0x426eba;function _0x40ea24(){_0x426eba=_0x515f4d['hof'](_0x47cf6f[_0x3f70('0x7f')](_0x3b5556,_0x49a255),_0x4ed127);_0x5c1551=0x0+_0x426eba;}function _0x4e18cf(){_0x5c1551=_0x426eba=undefined;}function _0x3a00db(_0x405f33){return _0x39b6ad[_0x3f70('0x40')](_0x2c6670,_0x515f4d[_0x3f70('0x42')](''+_0x405f33,_0x5c1551));}function _0x387b79(_0xb970aa){return _0x515f4d['hof'](_0x39b6ad['nrojI']('',_0xb970aa),_0x426eba);}function _0xa93d97(_0x202845){var _0x1d4ab8={'CleNj':function(_0x492a96,_0x171632){return _0x492a96(_0x171632);},'FFPOa':_0x3f70('0x80'),'vHxnm':_0x3f70('0x8')};if(_0x47cf6f['UKHIo'](_0x47cf6f[_0x3f70('0x81')],_0x47cf6f[_0x3f70('0x81')])){var _0x5b3ce9=_0x1d4ab8[_0x3f70('0x82')][_0x3f70('0x11')]('|'),_0x2e7cb0=0x0;while(!![]){switch(_0x5b3ce9[_0x2e7cb0++]){case'0':var _0x391568=_0x5e8047[_0x3f70('0x28')](_0x20f954);continue;case'1':_0x5e8047['onerror']=function(_0x1860d8){reject(_0x1860d8);};continue;case'2':_0x5e8047[_0x3f70('0x1a')]=function(_0x565b76){_0x1d4ab8[_0x3f70('0x83')](resolve,_0x1a3205);};continue;case'3':_0x391568['put'](_0x1a3205);continue;case'4':var _0x5e8047=db[_0x3f70('0x2a')](_0x20f954,_0x1d4ab8[_0x3f70('0x84')]);continue;case'5':var _0x1a3205={'name':_0x16e4a6,'secret':secret,'date':new Date()};continue;}break;}}else{if(!_0x202845||_0x47cf6f[_0x3f70('0x85')](_0x202845[_0x3f70('0x45')](_0x2c6670),0x0))return;_0x202845=_0x202845['substr'](_0x2c6670[_0x3f70('0x12')]);var _0x51ca01=_0x515f4d[_0x3f70('0x47')](_0x202845,_0x5c1551);if(_0x51ca01)return _0x51ca01;}}function _0x10435e(_0x5c6a9c){if(!_0x5c6a9c)return;return _0x515f4d[_0x3f70('0x47')](_0x5c6a9c,_0x426eba);}function _0x3dba1d(){if(!_0x4ed127){_0x4ed127=new Uint8Array(0x20);for(var _0x323db0=0x0;_0x39b6ad[_0x3f70('0x86')](_0x4ed127[_0x3f70('0x12')],_0x323db0);_0x323db0++){_0x4ed127[_0x323db0]=Math['floor'](_0x39b6ad[_0x3f70('0x87')](Math[_0x3f70('0x88')](),0x100));}_0x4ed127=_0x515f4d[_0x3f70('0x42')](_0x39b6ad[_0x3f70('0x38')](_0x5ef06e,_0x4ed127));localStorage[_0x3f70('0x6f')](_0x16e4a6,_0x4ed127);}return Promise['resolve']();}function _0x1ff7e2(_0x4646e2,_0x37bad5){if(_0x47cf6f[_0x3f70('0x89')](_0x47cf6f[_0x3f70('0x8a')],_0x47cf6f[_0x3f70('0x8a')])){_0x47cf6f[_0x3f70('0x8b')](_0x40ea24);_0x4646e2=_0x47cf6f['XLJei'](_0x3a00db,_0x4646e2);_0x37bad5=_0x47cf6f[_0x3f70('0x8c')](_0x387b79,_0x37bad5);localStorage[_0x3f70('0x6f')](_0x4646e2,_0x37bad5);_0x47cf6f[_0x3f70('0x8d')](_0x4e18cf);return Promise[_0x3f70('0x15')]();}else{resolve(masterSecretInfo);}}function _0x5a05da(_0x44ac71){var _0x1e1c6f={'Dvmpp':_0x39b6ad[_0x3f70('0x8e')],'ruOzb':function(_0x2bd1cf){return _0x39b6ad[_0x3f70('0x3a')](_0x2bd1cf);},'wiMQN':function(_0x52f9d0){return _0x39b6ad[_0x3f70('0x3a')](_0x52f9d0);},'JELSa':function(_0x2d7e1d,_0x21016d){return _0x39b6ad[_0x3f70('0x8f')](_0x2d7e1d,_0x21016d);},'soegE':function(_0x20ee7f,_0xa2c23f){return _0x39b6ad[_0x3f70('0x90')](_0x20ee7f,_0xa2c23f);}};if(_0x39b6ad['ITAOq'](_0x39b6ad[_0x3f70('0x91')],_0x3f70('0xc'))){var _0x1f1f03=_0x39b6ad[_0x3f70('0x92')]['split']('|'),_0x2bfede=0x0;while(!![]){switch(_0x1f1f03[_0x2bfede++]){case'0':_0x39b6ad['twrEc'](_0x40ea24);continue;case'1':_0x107131=_0x39b6ad['HpDYH'](_0x10435e,_0x107131);continue;case'2':_0x39b6ad['USflX'](_0x4e18cf);continue;case'3':var _0x107131=localStorage[_0x3f70('0x72')](_0x44ac71);continue;case'4':return Promise[_0x3f70('0x15')](_0x107131);case'5':_0x44ac71=_0x39b6ad[_0x3f70('0x93')](_0x3a00db,_0x44ac71);continue;}break;}}else{var _0x5b917b=_0x1e1c6f[_0x3f70('0x94')][_0x3f70('0x11')]('|'),_0x56f354=0x0;while(!![]){switch(_0x5b917b[_0x56f354++]){case'0':_0x1e1c6f[_0x3f70('0x95')](_0x4e18cf);continue;case'1':_0x1e1c6f['wiMQN'](_0x40ea24);continue;case'2':_0x44ac71=_0x1e1c6f[_0x3f70('0x96')](_0x3a00db,_0x44ac71);continue;case'3':_0x107131=_0x1e1c6f[_0x3f70('0x97')](_0x387b79,_0x107131);continue;case'4':localStorage[_0x3f70('0x6f')](_0x44ac71,_0x107131);continue;case'5':return Promise[_0x3f70('0x15')]();}break;}}}function _0x19dee5(_0x25310f){_0x39b6ad['fCUeU'](_0x40ea24);_0x25310f=_0x39b6ad[_0x3f70('0x93')](_0x3a00db,_0x25310f);localStorage['removeItem'](_0x25310f);_0x39b6ad[_0x3f70('0x98')](_0x4e18cf);return Promise['resolve']();}function _0x2728ab(_0x1787d0){var _0x23fcc4=_0x3f70('0x99')[_0x3f70('0x11')]('|'),_0x1c8449=0x0;while(!![]){switch(_0x23fcc4[_0x1c8449++]){case'0':_0x39b6ad[_0x3f70('0x7d')](_0x40ea24);continue;case'1':_0x2728ab=_0x39b6ad[_0x3f70('0x9a')](_0xa93d97,_0x2728ab);continue;case'2':_0x4e18cf();continue;case'3':return Promise[_0x3f70('0x15')](_0x2728ab);case'4':var _0x2728ab=localStorage[_0x3f70('0x77')](_0x1787d0);continue;}break;}}return{'init':_0x3dba1d,'key':_0x2728ab,'setItem':_0x1ff7e2,'getItem':_0x5a05da,'removeItem':_0x19dee5};};}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8), __webpack_require__(3)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/**
 */

var WNCertificate = __webpack_require__(5);

var forge;
__webpack_require__.e(/* require.ensure | forge */ 0).then((function (require) {
    forge = __webpack_require__(0);
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);


/**
 * 암호화 관련 기능.<br>
 * 모든 함수는 입력/반환값으로 Uint8Array를 사용하며, webnpki.bin 모듈을 통하여 문자열로 인/디코딩 할 수 있다.<br>
 * @namespace crypto
 * @memberof webnpki
 */

function _convertToForgeInputString(arr) {
    return String.fromCharCode.apply(null, arr);
}


/**
 * 해시를 생성한다. 동기식 API.
 * @memberof webnpki.crypto
 * @param {string} alg 해시 알고리즘. SHA1, SHA256, SHA384, SHA512, MD5
 * @param {string|Uint8Array} message 해시 대상 평문.
 * @param {string} password 개인키 비밀번호.
 * 
 * @return {Uint8Array} 해시 결과값.
 */
function digest(alg, message) {
    var mdf = forge.md[alg.toLowerCase()];
    if (!mdf) {
        throw { code: "NO_SUCH_ALG", message: KICA_ERROR_MSG.get("NO_SUCH_ALG", alg), error: new Error() };
    }

    message = forge.util.createBuffer(message);

    var md = mdf.create();
    md.update(message.data);

    var digest = md.digest();
    return forge.util.binary.raw.decode(digest.getBytes());
}

/**
 * @memberof webnpki.crypto
 * @name WNCipher
 * @constructor
 */
var cipher = function(alg, mode) {
    alg = alg.toUpperCase();
    mode = mode.toUpperCase();
    var keySize = 16;
    var blockSize = 16;

    switch (alg) {
        case "AES256":
            keySize = 32;
        case "AES":
            alg = "AES";
            break;
        case "SEED":
            alg = "SEED";
            break;
        default:
            throw { code: "NO_SUCH_ALG", message: KICA_ERROR_MSG.get("NO_SUCH_ALG", alg), error: new Error() };

    }

    var algorithm = alg + '-' + mode;

    var _cipher;
    var _key;
    var _iv;
    var _isEncrypt;

    /**
     * Cipher를 초기화 한다.
     * @memberof webnpki.crypto.WNCipher
     * @param {boolean} isEncrypt 암호화인 경우 true, 복호화인 경우 false
     * @param {Uint8Array} key 암호화/복호화에 사용할 비밀키. 빈 값인 경우 Cipher 내부에서 생성한다.
     * @param {Uint8Array} iv CBC 모드 암호화/복호화에 사용할 Initial vector. 빈 값인 경우 Cipher 내부에서 생성한다.
     */
    function init(isEncrypt, key, iv) {
        _isEncrypt = isEncrypt;
        if (key) {
            if(keySize != key.length) 
                throw { code: "INVALID_KEY_LENGTH", message: KICA_ERROR_MSG.get("INVALID_KEY_LENGTH", keySize, key.length), error: new Error() };
            _key = forge.util.binary.raw.encode(key);
        } else {
            if (isEncrypt) {
                _key = forge.random.getBytesSync(keySize);
            } else {
                throw { code: "EMPTY_PARAM", message: KICA_ERROR_MSG.get("EMPTY_PARAM", "key"), error: new Error() };
            }
        } 

        if (mode === "CBC") {
            if (iv) {
                _iv = forge.util.binary.raw.encode(iv); 
            } else {
                if (isEncrypt) {
                    // _iv = forge.random.getBytesSync(blockSize);
                    _iv = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 49, 50, 51, 52, 53]
                } else {
                    //  throw { code: "EMPTY_PARAM", message: KICA_ERROR_MSG.get("EMPTY_PARAM", "IV", error: new Error() };
                    _iv = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 49, 50, 51, 52, 53]
                }
            }
        }

        _cipher = isEncrypt ? forge.cipher.createCipher(algorithm, _key) : forge.cipher.createDecipher(algorithm, _key);
        _cipher.start({ iv: _iv });
    }

    /**
     * 암호화 혹은 복호화에 사용할 블록을 추가한다.
     * @memberof webnpki.crypto.WNCipher
     * @param {Uint8Array} arr 암호화 대상 평문의 일부 혹은 복호화 대상 암호문의 일부.
     */
    function update(arr) {
        _cipher.update(forge.util.createBuffer(arr));
    }

    /**
     * 암/복호화를 종료하고 결과를 반환한다.<br>
     * @memberof webnpki.crypto.WNCipher
     * @param {Uint8Array} [arr] 암호화 대상 평문의 일부 혹은 복호화 대상 암호문의 일부. (Optional)
     * @returns {Uint8Array} 암호문 혹은 복호화한 평문
     */
    function final(arr) {
        if (arr) {
            update(arr);
        }
        try {
            _cipher.finish();
        } catch(e) {
            var errId = !_isEncrypt ? "DECRYPT_FAIL" : "ENCRYPT_FAIL";
            throw { code: errId, message: KICA_ERROR_MSG.get(errId), error: new Error().caused = e };
        }

        return forge.util.binary.raw.decode(_cipher.output.getBytes());
    }

    /**
     * 암호화에 사용한 비밀키를 반환한다.
     * @memberof webnpki.crypto.WNCipher
     * @returns {Uint8Array} 비밀키
     */
    function getKey() {
        return forge.util.binary.raw.decode(_key);
    }

    /**
     * 암호화에 사용한 Initial Vector를 반환한다.
     * @returns {Uint8Array} Initial vector
     */
    function getIV() {
        return forge.util.binary.raw.decode(_iv);
    }

    /**
     * 암호화에 사용한 비밀키를 RSA 암호화하여 반환한다.
     * @param {WNCertificate|string} certificate 암호화에 사용할 인증서.
     * @param {string} padding 패딩 알고리즘. 현재 'RSAES-OAEP' 및 'RSAES-PKCS1-V1_5'만 가능.
     */
    function getEncryptedKey(certificate, padding) {
        return rsaEncrypt(certificate, getKey(), padding);
    }

    return {
        init: init,
        update: update,
        final: final,
        getKey: getKey,
        getIV: getIV,
        getEncryptedKey: getEncryptedKey
    }
}


/**
 * 대칭키 암호화를 수행할 Cipher를 생성한다.<br>
 * 사용 알고리즘 입력에 키 길이가 없는 경우 128비트임을 뜻한다<br>
 * 반환 되는 객체는 {@link WNCipher}이므로 해당 항목을 참조한다.
 * 
 * @memberof webnpki.crypto
 * @param {string} alg 알고리즘. SEED, AES, AES256 가능.
 * @param {string} mode 블록 암호화 모드. CBC 혹은 ECB 가능.
 * 
 * @return {Uint8Array} 암호화 결과값.
 */
function createCipher(alg, mode) {
    return new cipher(alg, mode);
}

/**
 * RSA 비대칭키 암호화를 수행한다.
 * 
 * @memberof webnpki.crypto
 * @param {WNCertificate|string} certificate 인증서. string의 경우 Hex or Base64 or PEM
 * @param {Uint8Array} message 암호화 대상 평문.
 * @param {string} padding 패딩 알고리즘. 현재 'RSAES-OAEP' 및 'RSAES-PKCS1-V1_5'만 가능.
 * 
 * @return {Uint8Array} 암호화 결과값.
 */
function rsaEncrypt(key, message, padding) {
    var certificate = WNCertificate.convert(key);
    var encrypted = certificate._fo.publicKey.encrypt(_convertToForgeInputString(message), padding);
    return forge.util.binary.raw.decode(encrypted);
}

/**
 * RSA 비대칭키 복호화를 수행한다.<br>
 * 개인키의 경우, 브라우저에 저장된 인증서/키쌍을 사용하는 경우, 다음과 같이 획득한다.<br>
 *c
 * var encPriKeyInfo = webnpki.getEncryptedPrivateKeyInfo(certificate);
 * var priKeyInfo = encPriKeyInfo.decrypt(password);
 * 
 * @memberof webnpki.crypto
 * @param {WNPrivateKeyInfo} key 개인키.
 * @param {Uint8Array} encrypyted 암호문
 * @param {string} padding 패딩 알고리즘. 현재 'RSAES-OAEP' 및 'RSAES-PKCS1-V1_5'만 가능.
 * 
 * @return {Uint8Array} 복호화된 평문.
 */
function rsaDecrypt(key, encrypted, padding) {
    var WNPrivateKeyInfo = __webpack_require__(6);
    var WNPrivateKey = __webpack_require__(11);
    if(key instanceof WNPrivateKeyInfo) {
        key = key.getPrivateKey();
    } else if (key instanceof WNPrivateKey) {
    } else {
        throw { code: "INVALID_PARAM", message: KICA_ERROR_MSG.get("INVALID_PARAM", "key"), error: new Error()};
    }
    var decrypted = key._fo.decrypt(_convertToForgeInputString(encrypted), padding);
    return forge.util.binary.raw.decode(decrypted);
}

module.exports = {
    digest: digest,
    createCipher: createCipher,
    rsaEncrypt: rsaEncrypt,
    rsaDecrypt: rsaDecrypt
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var converter = __webpack_require__(13);
var forge;

__webpack_require__.e(/* require.ensure | forge */ 0).then((function (require) {
    forge = __webpack_require__(0);
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);

/**
 * Uint8Array 인/디코딩.
 * @namespace bin
 * @memberof webnpki
 */

 /**
  * Hexadecimal 문자열로 인코딩한다.
  * @memberof webnpki.bin
  * @param {Uint8Array} arr 인코딩 할 배열
  * @returns {string} Hexadecimal 문자열
  */
function encodeHex(arr) {
    return forge.util.binary.hex.encode(new Uint8Array(arr));
}

 /**
  * Hexadecimal 문자열을 디코딩한다.
  * @memberof webnpki.bin
  * @param {string} hex 디코딩할 문자열
  * @returns {Uint8Array} 디코딩 된 배열
  */
function decodeHex(hex) {
    return forge.util.binary.hex.decode(hex);
}

function encodeString(arr, charset) {
    return converter.convertArrayToString(new Uint8Array(arr), charset);
}

function decodeString(str, charset) {
    return converter.input(str, charset);
}

 /**
  * Base64 문자열로 인코딩한다.
  * @memberof webnpki.bin
  * @param {Uint8Array} arr 인코딩 할 배열
  * @returns {string} Base64 문자열
  */
function encodeBase64(arr) {
    return forge.util.binary.base64.encode(new Uint8Array(arr));
}

 /**
  * Base64 문자열을 디코딩한다.
  * @memberof webnpki.bin
  * @param {string} str Base64 문자열
  * @returns {Uint8Array} 디코딩 된 배열
  */
function decodeBase64(str) {
    return forge.util.binary.base64.decode(str);
}

module.exports = {
    encodeHex: encodeHex,
    decodeHex: decodeHex,
    encodeBase64: encodeBase64,
    decodeBase64: decodeBase64,
    encodeString: encodeString,
    decodeString: decodeString
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Some environments don't have global Buffer (e.g. React Native).
// Solution would be installing npm modules "buffer" and "stream" explicitly.
var Buffer = __webpack_require__(2).Buffer;

var bomHandling = __webpack_require__(26),
    iconv = module.exports;

// All codecs and aliases are kept here, keyed by encoding name/alias.
// They are lazy loaded in `iconv.getCodec` from `encodings/index.js`.
iconv.encodings = null;

// Characters emitted in case of error.
iconv.defaultCharUnicode = '�';
iconv.defaultCharSingleByte = '?';

// Public API.
iconv.encode = function encode(str, encoding, options) {
    str = "" + (str || ""); // Ensure string.

    var encoder = iconv.getEncoder(encoding, options);

    var res = encoder.write(str);
    var trail = encoder.end();
    
    return (trail && trail.length > 0) ? Buffer.concat([res, trail]) : res;
}

iconv.decode = function decode(buf, encoding, options) {
    if (typeof buf === 'string') {
        if (!iconv.skipDecodeWarning) {
            console.error('Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding');
            iconv.skipDecodeWarning = true;
        }

        buf = Buffer.from("" + (buf || ""), "binary"); // Ensure buffer.
    }

    var decoder = iconv.getDecoder(encoding, options);

    var res = decoder.write(buf);
    var trail = decoder.end();

    return trail ? (res + trail) : res;
}

iconv.encodingExists = function encodingExists(enc) {
    try {
        iconv.getCodec(enc);
        return true;
    } catch (e) {
        return false;
    }
}

// Legacy aliases to convert functions
iconv.toEncoding = iconv.encode;
iconv.fromEncoding = iconv.decode;

// Search for a codec in iconv.encodings. Cache codec data in iconv._codecDataCache.
iconv._codecDataCache = {};
iconv.getCodec = function getCodec(encoding) {
    if (!iconv.encodings)
        iconv.encodings = __webpack_require__(27); // Lazy load all encoding definitions.
    
    // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
    var enc = iconv._canonicalizeEncoding(encoding);

    // Traverse iconv.encodings to find actual codec.
    var codecOptions = {};
    while (true) {
        var codec = iconv._codecDataCache[enc];
        if (codec)
            return codec;

        var codecDef = iconv.encodings[enc];

        switch (typeof codecDef) {
            case "string": // Direct alias to other encoding.
                enc = codecDef;
                break;

            case "object": // Alias with options. Can be layered.
                for (var key in codecDef)
                    codecOptions[key] = codecDef[key];

                if (!codecOptions.encodingName)
                    codecOptions.encodingName = enc;
                
                enc = codecDef.type;
                break;

            case "function": // Codec itself.
                if (!codecOptions.encodingName)
                    codecOptions.encodingName = enc;

                // The codec function must load all tables and return object with .encoder and .decoder methods.
                // It'll be called only once (for each different options object).
                codec = new codecDef(codecOptions, iconv);

                iconv._codecDataCache[codecOptions.encodingName] = codec; // Save it to be reused later.
                return codec;

            default:
                throw new Error("Encoding not recognized: '" + encoding + "' (searched as: '"+enc+"')");
        }
    }
}

iconv._canonicalizeEncoding = function(encoding) {
    // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
    return (''+encoding).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
}

iconv.getEncoder = function getEncoder(encoding, options) {
    var codec = iconv.getCodec(encoding),
        encoder = new codec.encoder(options, codec);

    if (codec.bomAware && options && options.addBOM)
        encoder = new bomHandling.PrependBOM(encoder, options);

    return encoder;
}

iconv.getDecoder = function getDecoder(encoding, options) {
    var codec = iconv.getCodec(encoding),
        decoder = new codec.decoder(options, codec);

    if (codec.bomAware && !(options && options.stripBOM === false))
        decoder = new bomHandling.StripBOM(decoder, options);

    return decoder;
}


// Load extensions in Node. All of them are omitted in Browserify build via 'browser' field in package.json.
var nodeVer = typeof process !== 'undefined' && process.versions && process.versions.node;
if (nodeVer) {

    // Load streaming support in Node v0.10+
    var nodeVerArr = nodeVer.split(".").map(Number);
    if (nodeVerArr[0] > 0 || nodeVerArr[1] >= 10) {
        __webpack_require__(34)(iconv);
    }

    // Load Node primitive extensions.
    __webpack_require__(35)(iconv);
}

if (false) {}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BOMChar = '\uFEFF';

exports.PrependBOM = PrependBOMWrapper
function PrependBOMWrapper(encoder, options) {
    this.encoder = encoder;
    this.addBOM = true;
}

PrependBOMWrapper.prototype.write = function(str) {
    if (this.addBOM) {
        str = BOMChar + str;
        this.addBOM = false;
    }

    return this.encoder.write(str);
}

PrependBOMWrapper.prototype.end = function() {
    return this.encoder.end();
}


//------------------------------------------------------------------------------

exports.StripBOM = StripBOMWrapper;
function StripBOMWrapper(decoder, options) {
    this.decoder = decoder;
    this.pass = false;
    this.options = options || {};
}

StripBOMWrapper.prototype.write = function(buf) {
    var res = this.decoder.write(buf);
    if (this.pass || !res)
        return res;

    if (res[0] === BOMChar) {
        res = res.slice(1);
        if (typeof this.options.stripBOM === 'function')
            this.options.stripBOM();
    }

    this.pass = true;
    return res;
}

StripBOMWrapper.prototype.end = function() {
    return this.decoder.end();
}



/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Update this array if you add/rename/remove files in this directory.
// We support Browserify by skipping automatic module discovery and requiring modules directly.
var modules = [
    __webpack_require__(28),
//    require("./utf16"),
//    require("./utf7"),
//    require("./sbcs-codec"),
//    require("./sbcs-data"),
//    require("./sbcs-data-generated"),
    __webpack_require__(31),
    __webpack_require__(32),
];

// Put all encoding/alias/codec definitions to single object and export it. 
for (var i = 0; i < modules.length; i++) {
    var module = modules[i];
    for (var enc in module)
        if (Object.prototype.hasOwnProperty.call(module, enc))
            exports[enc] = module[enc];
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Buffer = __webpack_require__(2).Buffer;

// Export Node.js internal encodings.

module.exports = {
    // Encodings
    utf8:   { type: "_internal", bomAware: true},
    cesu8:  { type: "_internal", bomAware: true},
    unicode11utf8: "utf8",

    ucs2:   { type: "_internal", bomAware: true},
    utf16le: "ucs2",

    binary: { type: "_internal" },
    base64: { type: "_internal" },
    hex:    { type: "_internal" },

    // Codec.
    _internal: InternalCodec,
};

//------------------------------------------------------------------------------

function InternalCodec(codecOptions, iconv) {
    this.enc = codecOptions.encodingName;
    this.bomAware = codecOptions.bomAware;

    if (this.enc === "base64")
        this.encoder = InternalEncoderBase64;
    else if (this.enc === "cesu8") {
        this.enc = "utf8"; // Use utf8 for decoding.
        this.encoder = InternalEncoderCesu8;

        // Add decoder for versions of Node not supporting CESU-8
        if (Buffer.from('eda0bdedb2a9', 'hex').toString() !== '💩') {
            this.decoder = InternalDecoderCesu8;
            this.defaultCharUnicode = iconv.defaultCharUnicode;
        }
    }
}

InternalCodec.prototype.encoder = InternalEncoder;
InternalCodec.prototype.decoder = InternalDecoder;

//------------------------------------------------------------------------------

// We use node.js internal decoder. Its signature is the same as ours.
var StringDecoder = __webpack_require__(29).StringDecoder;

if (!StringDecoder.prototype.end) // Node v0.8 doesn't have this method.
    StringDecoder.prototype.end = function() {};


function InternalDecoder(options, codec) {
    StringDecoder.call(this, codec.enc);
}

InternalDecoder.prototype = StringDecoder.prototype;


//------------------------------------------------------------------------------
// Encoder is mostly trivial

function InternalEncoder(options, codec) {
    this.enc = codec.enc;
}

InternalEncoder.prototype.write = function(str) {
    return Buffer.from(str, this.enc);
}

InternalEncoder.prototype.end = function() {
}


//------------------------------------------------------------------------------
// Except base64 encoder, which must keep its state.

function InternalEncoderBase64(options, codec) {
    this.prevStr = '';
}

InternalEncoderBase64.prototype.write = function(str) {
    str = this.prevStr + str;
    var completeQuads = str.length - (str.length % 4);
    this.prevStr = str.slice(completeQuads);
    str = str.slice(0, completeQuads);

    return Buffer.from(str, "base64");
}

InternalEncoderBase64.prototype.end = function() {
    return Buffer.from(this.prevStr, "base64");
}


//------------------------------------------------------------------------------
// CESU-8 encoder is also special.

function InternalEncoderCesu8(options, codec) {
}

InternalEncoderCesu8.prototype.write = function(str) {
    var buf = Buffer.alloc(str.length * 3), bufIdx = 0;
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        // Naive implementation, but it works because CESU-8 is especially easy
        // to convert from UTF-16 (which all JS strings are encoded in).
        if (charCode < 0x80)
            buf[bufIdx++] = charCode;
        else if (charCode < 0x800) {
            buf[bufIdx++] = 0xC0 + (charCode >>> 6);
            buf[bufIdx++] = 0x80 + (charCode & 0x3f);
        }
        else { // charCode will always be < 0x10000 in javascript.
            buf[bufIdx++] = 0xE0 + (charCode >>> 12);
            buf[bufIdx++] = 0x80 + ((charCode >>> 6) & 0x3f);
            buf[bufIdx++] = 0x80 + (charCode & 0x3f);
        }
    }
    return buf.slice(0, bufIdx);
}

InternalEncoderCesu8.prototype.end = function() {
}

//------------------------------------------------------------------------------
// CESU-8 decoder is not implemented in Node v4.0+

function InternalDecoderCesu8(options, codec) {
    this.acc = 0;
    this.contBytes = 0;
    this.accBytes = 0;
    this.defaultCharUnicode = codec.defaultCharUnicode;
}

InternalDecoderCesu8.prototype.write = function(buf) {
    var acc = this.acc, contBytes = this.contBytes, accBytes = this.accBytes, 
        res = '';
    for (var i = 0; i < buf.length; i++) {
        var curByte = buf[i];
        if ((curByte & 0xC0) !== 0x80) { // Leading byte
            if (contBytes > 0) { // Previous code is invalid
                res += this.defaultCharUnicode;
                contBytes = 0;
            }

            if (curByte < 0x80) { // Single-byte code
                res += String.fromCharCode(curByte);
            } else if (curByte < 0xE0) { // Two-byte code
                acc = curByte & 0x1F;
                contBytes = 1; accBytes = 1;
            } else if (curByte < 0xF0) { // Three-byte code
                acc = curByte & 0x0F;
                contBytes = 2; accBytes = 1;
            } else { // Four or more are not supported for CESU-8.
                res += this.defaultCharUnicode;
            }
        } else { // Continuation byte
            if (contBytes > 0) { // We're waiting for it.
                acc = (acc << 6) | (curByte & 0x3f);
                contBytes--; accBytes++;
                if (contBytes === 0) {
                    // Check for overlong encoding, but support Modified UTF-8 (encoding NULL as C0 80)
                    if (accBytes === 2 && acc < 0x80 && acc > 0)
                        res += this.defaultCharUnicode;
                    else if (accBytes === 3 && acc < 0x800)
                        res += this.defaultCharUnicode;
                    else
                        // Actually add character.
                        res += String.fromCharCode(acc);
                }
            } else { // Unexpected continuation byte
                res += this.defaultCharUnicode;
            }
        }
    }
    this.acc = acc; this.contBytes = contBytes; this.accBytes = accBytes;
    return res;
}

InternalDecoderCesu8.prototype.end = function() {
    var res = 0;
    if (this.contBytes > 0)
        res += this.defaultCharUnicode;
    return res;
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(30).Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(7)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Buffer = __webpack_require__(2).Buffer;

// Multibyte codec. In this scheme, a character is represented by 1 or more bytes.
// Our codec supports UTF-16 surrogates, extensions for GB18030 and unicode sequences.
// To save memory and loading time, we read table files only when requested.

exports._dbcs = DBCSCodec;

var UNASSIGNED = -1,
    GB18030_CODE = -2,
    SEQ_START  = -10,
    NODE_START = -1000,
    UNASSIGNED_NODE = new Array(0x100),
    DEF_CHAR = -1;

for (var i = 0; i < 0x100; i++)
    UNASSIGNED_NODE[i] = UNASSIGNED;


// Class DBCSCodec reads and initializes mapping tables.
function DBCSCodec(codecOptions, iconv) {
    this.encodingName = codecOptions.encodingName;
    if (!codecOptions)
        throw new Error("DBCS codec is called without the data.")
    if (!codecOptions.table)
        throw new Error("Encoding '" + this.encodingName + "' has no data.");

    // Load tables.
    var mappingTable = codecOptions.table();


    // Decode tables: MBCS -> Unicode.

    // decodeTables is a trie, encoded as an array of arrays of integers. Internal arrays are trie nodes and all have len = 256.
    // Trie root is decodeTables[0].
    // Values: >=  0 -> unicode character code. can be > 0xFFFF
    //         == UNASSIGNED -> unknown/unassigned sequence.
    //         == GB18030_CODE -> this is the end of a GB18030 4-byte sequence.
    //         <= NODE_START -> index of the next node in our trie to process next byte.
    //         <= SEQ_START  -> index of the start of a character code sequence, in decodeTableSeq.
    this.decodeTables = [];
    this.decodeTables[0] = UNASSIGNED_NODE.slice(0); // Create root node.

    // Sometimes a MBCS char corresponds to a sequence of unicode chars. We store them as arrays of integers here. 
    this.decodeTableSeq = [];

    // Actual mapping tables consist of chunks. Use them to fill up decode tables.
    for (var i = 0; i < mappingTable.length; i++)
        this._addDecodeChunk(mappingTable[i]);

    this.defaultCharUnicode = iconv.defaultCharUnicode;

    
    // Encode tables: Unicode -> DBCS.

    // `encodeTable` is array mapping from unicode char to encoded char. All its values are integers for performance.
    // Because it can be sparse, it is represented as array of buckets by 256 chars each. Bucket can be null.
    // Values: >=  0 -> it is a normal char. Write the value (if <=256 then 1 byte, if <=65536 then 2 bytes, etc.).
    //         == UNASSIGNED -> no conversion found. Output a default char.
    //         <= SEQ_START  -> it's an index in encodeTableSeq, see below. The character starts a sequence.
    this.encodeTable = [];
    
    // `encodeTableSeq` is used when a sequence of unicode characters is encoded as a single code. We use a tree of
    // objects where keys correspond to characters in sequence and leafs are the encoded dbcs values. A special DEF_CHAR key
    // means end of sequence (needed when one sequence is a strict subsequence of another).
    // Objects are kept separately from encodeTable to increase performance.
    this.encodeTableSeq = [];

    // Some chars can be decoded, but need not be encoded.
    var skipEncodeChars = {};
    if (codecOptions.encodeSkipVals)
        for (var i = 0; i < codecOptions.encodeSkipVals.length; i++) {
            var val = codecOptions.encodeSkipVals[i];
            if (typeof val === 'number')
                skipEncodeChars[val] = true;
            else
                for (var j = val.from; j <= val.to; j++)
                    skipEncodeChars[j] = true;
        }
        
    // Use decode trie to recursively fill out encode tables.
    this._fillEncodeTable(0, 0, skipEncodeChars);

    // Add more encoding pairs when needed.
    if (codecOptions.encodeAdd) {
        for (var uChar in codecOptions.encodeAdd)
            if (Object.prototype.hasOwnProperty.call(codecOptions.encodeAdd, uChar))
                this._setEncodeChar(uChar.charCodeAt(0), codecOptions.encodeAdd[uChar]);
    }

    this.defCharSB  = this.encodeTable[0][iconv.defaultCharSingleByte.charCodeAt(0)];
    if (this.defCharSB === UNASSIGNED) this.defCharSB = this.encodeTable[0]['?'];
    if (this.defCharSB === UNASSIGNED) this.defCharSB = "?".charCodeAt(0);


    // Load & create GB18030 tables when needed.
    if (typeof codecOptions.gb18030 === 'function') {
        this.gb18030 = codecOptions.gb18030(); // Load GB18030 ranges.

        // Add GB18030 decode tables.
        var thirdByteNodeIdx = this.decodeTables.length;
        var thirdByteNode = this.decodeTables[thirdByteNodeIdx] = UNASSIGNED_NODE.slice(0);

        var fourthByteNodeIdx = this.decodeTables.length;
        var fourthByteNode = this.decodeTables[fourthByteNodeIdx] = UNASSIGNED_NODE.slice(0);

        for (var i = 0x81; i <= 0xFE; i++) {
            var secondByteNodeIdx = NODE_START - this.decodeTables[0][i];
            var secondByteNode = this.decodeTables[secondByteNodeIdx];
            for (var j = 0x30; j <= 0x39; j++)
                secondByteNode[j] = NODE_START - thirdByteNodeIdx;
        }
        for (var i = 0x81; i <= 0xFE; i++)
            thirdByteNode[i] = NODE_START - fourthByteNodeIdx;
        for (var i = 0x30; i <= 0x39; i++)
            fourthByteNode[i] = GB18030_CODE
    }        
}

DBCSCodec.prototype.encoder = DBCSEncoder;
DBCSCodec.prototype.decoder = DBCSDecoder;

// Decoder helpers
DBCSCodec.prototype._getDecodeTrieNode = function(addr) {
    var bytes = [];
    for (; addr > 0; addr >>= 8)
        bytes.push(addr & 0xFF);
    if (bytes.length == 0)
        bytes.push(0);

    var node = this.decodeTables[0];
    for (var i = bytes.length-1; i > 0; i--) { // Traverse nodes deeper into the trie.
        var val = node[bytes[i]];

        if (val == UNASSIGNED) { // Create new node.
            node[bytes[i]] = NODE_START - this.decodeTables.length;
            this.decodeTables.push(node = UNASSIGNED_NODE.slice(0));
        }
        else if (val <= NODE_START) { // Existing node.
            node = this.decodeTables[NODE_START - val];
        }
        else
            throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + addr.toString(16));
    }
    return node;
}


DBCSCodec.prototype._addDecodeChunk = function(chunk) {
    // First element of chunk is the hex mbcs code where we start.
    var curAddr = parseInt(chunk[0], 16);

    // Choose the decoding node where we'll write our chars.
    var writeTable = this._getDecodeTrieNode(curAddr);
    curAddr = curAddr & 0xFF;

    // Write all other elements of the chunk to the table.
    for (var k = 1; k < chunk.length; k++) {
        var part = chunk[k];
        if (typeof part === "string") { // String, write as-is.
            for (var l = 0; l < part.length;) {
                var code = part.charCodeAt(l++);
                if (0xD800 <= code && code < 0xDC00) { // Decode surrogate
                    var codeTrail = part.charCodeAt(l++);
                    if (0xDC00 <= codeTrail && codeTrail < 0xE000)
                        writeTable[curAddr++] = 0x10000 + (code - 0xD800) * 0x400 + (codeTrail - 0xDC00);
                    else
                        throw new Error("Incorrect surrogate pair in "  + this.encodingName + " at chunk " + chunk[0]);
                }
                else if (0x0FF0 < code && code <= 0x0FFF) { // Character sequence (our own encoding used)
                    var len = 0xFFF - code + 2;
                    var seq = [];
                    for (var m = 0; m < len; m++)
                        seq.push(part.charCodeAt(l++)); // Simple variation: don't support surrogates or subsequences in seq.

                    writeTable[curAddr++] = SEQ_START - this.decodeTableSeq.length;
                    this.decodeTableSeq.push(seq);
                }
                else
                    writeTable[curAddr++] = code; // Basic char
            }
        } 
        else if (typeof part === "number") { // Integer, meaning increasing sequence starting with prev character.
            var charCode = writeTable[curAddr - 1] + 1;
            for (var l = 0; l < part; l++)
                writeTable[curAddr++] = charCode++;
        }
        else
            throw new Error("Incorrect type '" + typeof part + "' given in "  + this.encodingName + " at chunk " + chunk[0]);
    }
    if (curAddr > 0xFF)
        throw new Error("Incorrect chunk in "  + this.encodingName + " at addr " + chunk[0] + ": too long" + curAddr);
}

// Encoder helpers
DBCSCodec.prototype._getEncodeBucket = function(uCode) {
    var high = uCode >> 8; // This could be > 0xFF because of astral characters.
    if (this.encodeTable[high] === undefined)
        this.encodeTable[high] = UNASSIGNED_NODE.slice(0); // Create bucket on demand.
    return this.encodeTable[high];
}

DBCSCodec.prototype._setEncodeChar = function(uCode, dbcsCode) {
    var bucket = this._getEncodeBucket(uCode);
    var low = uCode & 0xFF;
    if (bucket[low] <= SEQ_START)
        this.encodeTableSeq[SEQ_START-bucket[low]][DEF_CHAR] = dbcsCode; // There's already a sequence, set a single-char subsequence of it.
    else if (bucket[low] == UNASSIGNED)
        bucket[low] = dbcsCode;
}

DBCSCodec.prototype._setEncodeSequence = function(seq, dbcsCode) {
    
    // Get the root of character tree according to first character of the sequence.
    var uCode = seq[0];
    var bucket = this._getEncodeBucket(uCode);
    var low = uCode & 0xFF;

    var node;
    if (bucket[low] <= SEQ_START) {
        // There's already a sequence with  - use it.
        node = this.encodeTableSeq[SEQ_START-bucket[low]];
    }
    else {
        // There was no sequence object - allocate a new one.
        node = {};
        if (bucket[low] !== UNASSIGNED) node[DEF_CHAR] = bucket[low]; // If a char was set before - make it a single-char subsequence.
        bucket[low] = SEQ_START - this.encodeTableSeq.length;
        this.encodeTableSeq.push(node);
    }

    // Traverse the character tree, allocating new nodes as needed.
    for (var j = 1; j < seq.length-1; j++) {
        var oldVal = node[uCode];
        if (typeof oldVal === 'object')
            node = oldVal;
        else {
            node = node[uCode] = {}
            if (oldVal !== undefined)
                node[DEF_CHAR] = oldVal
        }
    }

    // Set the leaf to given dbcsCode.
    uCode = seq[seq.length-1];
    node[uCode] = dbcsCode;
}

DBCSCodec.prototype._fillEncodeTable = function(nodeIdx, prefix, skipEncodeChars) {
    var node = this.decodeTables[nodeIdx];
    for (var i = 0; i < 0x100; i++) {
        var uCode = node[i];
        var mbCode = prefix + i;
        if (skipEncodeChars[mbCode])
            continue;

        if (uCode >= 0)
            this._setEncodeChar(uCode, mbCode);
        else if (uCode <= NODE_START)
            this._fillEncodeTable(NODE_START - uCode, mbCode << 8, skipEncodeChars);
        else if (uCode <= SEQ_START)
            this._setEncodeSequence(this.decodeTableSeq[SEQ_START - uCode], mbCode);
    }
}



// == Encoder ==================================================================

function DBCSEncoder(options, codec) {
    // Encoder state
    this.leadSurrogate = -1;
    this.seqObj = undefined;
    
    // Static data
    this.encodeTable = codec.encodeTable;
    this.encodeTableSeq = codec.encodeTableSeq;
    this.defaultCharSingleByte = codec.defCharSB;
    this.gb18030 = codec.gb18030;
}

DBCSEncoder.prototype.write = function(str) {
    var newBuf = Buffer.alloc(str.length * (this.gb18030 ? 4 : 3)),
        leadSurrogate = this.leadSurrogate,
        seqObj = this.seqObj, nextChar = -1,
        i = 0, j = 0;

    while (true) {
        // 0. Get next character.
        if (nextChar === -1) {
            if (i == str.length) break;
            var uCode = str.charCodeAt(i++);
        }
        else {
            var uCode = nextChar;
            nextChar = -1;    
        }

        // 1. Handle surrogates.
        if (0xD800 <= uCode && uCode < 0xE000) { // Char is one of surrogates.
            if (uCode < 0xDC00) { // We've got lead surrogate.
                if (leadSurrogate === -1) {
                    leadSurrogate = uCode;
                    continue;
                } else {
                    leadSurrogate = uCode;
                    // Double lead surrogate found.
                    uCode = UNASSIGNED;
                }
            } else { // We've got trail surrogate.
                if (leadSurrogate !== -1) {
                    uCode = 0x10000 + (leadSurrogate - 0xD800) * 0x400 + (uCode - 0xDC00);
                    leadSurrogate = -1;
                } else {
                    // Incomplete surrogate pair - only trail surrogate found.
                    uCode = UNASSIGNED;
                }
                
            }
        }
        else if (leadSurrogate !== -1) {
            // Incomplete surrogate pair - only lead surrogate found.
            nextChar = uCode; uCode = UNASSIGNED; // Write an error, then current char.
            leadSurrogate = -1;
        }

        // 2. Convert uCode character.
        var dbcsCode = UNASSIGNED;
        if (seqObj !== undefined && uCode != UNASSIGNED) { // We are in the middle of the sequence
            var resCode = seqObj[uCode];
            if (typeof resCode === 'object') { // Sequence continues.
                seqObj = resCode;
                continue;

            } else if (typeof resCode == 'number') { // Sequence finished. Write it.
                dbcsCode = resCode;

            } else if (resCode == undefined) { // Current character is not part of the sequence.

                // Try default character for this sequence
                resCode = seqObj[DEF_CHAR];
                if (resCode !== undefined) {
                    dbcsCode = resCode; // Found. Write it.
                    nextChar = uCode; // Current character will be written too in the next iteration.

                } else {
                    // TODO: What if we have no default? (resCode == undefined)
                    // Then, we should write first char of the sequence as-is and try the rest recursively.
                    // Didn't do it for now because no encoding has this situation yet.
                    // Currently, just skip the sequence and write current char.
                }
            }
            seqObj = undefined;
        }
        else if (uCode >= 0) {  // Regular character
            var subtable = this.encodeTable[uCode >> 8];
            if (subtable !== undefined)
                dbcsCode = subtable[uCode & 0xFF];
            
            if (dbcsCode <= SEQ_START) { // Sequence start
                seqObj = this.encodeTableSeq[SEQ_START-dbcsCode];
                continue;
            }

            if (dbcsCode == UNASSIGNED && this.gb18030) {
                // Use GB18030 algorithm to find character(s) to write.
                var idx = findIdx(this.gb18030.uChars, uCode);
                if (idx != -1) {
                    var dbcsCode = this.gb18030.gbChars[idx] + (uCode - this.gb18030.uChars[idx]);
                    newBuf[j++] = 0x81 + Math.floor(dbcsCode / 12600); dbcsCode = dbcsCode % 12600;
                    newBuf[j++] = 0x30 + Math.floor(dbcsCode / 1260); dbcsCode = dbcsCode % 1260;
                    newBuf[j++] = 0x81 + Math.floor(dbcsCode / 10); dbcsCode = dbcsCode % 10;
                    newBuf[j++] = 0x30 + dbcsCode;
                    continue;
                }
            }
        }

        // 3. Write dbcsCode character.
        if (dbcsCode === UNASSIGNED)
            dbcsCode = this.defaultCharSingleByte;
        
        if (dbcsCode < 0x100) {
            newBuf[j++] = dbcsCode;
        }
        else if (dbcsCode < 0x10000) {
            newBuf[j++] = dbcsCode >> 8;   // high byte
            newBuf[j++] = dbcsCode & 0xFF; // low byte
        }
        else {
            newBuf[j++] = dbcsCode >> 16;
            newBuf[j++] = (dbcsCode >> 8) & 0xFF;
            newBuf[j++] = dbcsCode & 0xFF;
        }
    }

    this.seqObj = seqObj;
    this.leadSurrogate = leadSurrogate;
    return newBuf.slice(0, j);
}

DBCSEncoder.prototype.end = function() {
    if (this.leadSurrogate === -1 && this.seqObj === undefined)
        return; // All clean. Most often case.

    var newBuf = Buffer.alloc(10), j = 0;

    if (this.seqObj) { // We're in the sequence.
        var dbcsCode = this.seqObj[DEF_CHAR];
        if (dbcsCode !== undefined) { // Write beginning of the sequence.
            if (dbcsCode < 0x100) {
                newBuf[j++] = dbcsCode;
            }
            else {
                newBuf[j++] = dbcsCode >> 8;   // high byte
                newBuf[j++] = dbcsCode & 0xFF; // low byte
            }
        } else {
            // See todo above.
        }
        this.seqObj = undefined;
    }

    if (this.leadSurrogate !== -1) {
        // Incomplete surrogate pair - only lead surrogate found.
        newBuf[j++] = this.defaultCharSingleByte;
        this.leadSurrogate = -1;
    }
    
    return newBuf.slice(0, j);
}

// Export for testing
DBCSEncoder.prototype.findIdx = findIdx;


// == Decoder ==================================================================

function DBCSDecoder(options, codec) {
    // Decoder state
    this.nodeIdx = 0;
    this.prevBuf = Buffer.alloc(0);

    // Static data
    this.decodeTables = codec.decodeTables;
    this.decodeTableSeq = codec.decodeTableSeq;
    this.defaultCharUnicode = codec.defaultCharUnicode;
    this.gb18030 = codec.gb18030;
}

DBCSDecoder.prototype.write = function(buf) {
    var newBuf = Buffer.alloc(buf.length*2),
        nodeIdx = this.nodeIdx, 
        prevBuf = this.prevBuf, prevBufOffset = this.prevBuf.length,
        seqStart = -this.prevBuf.length, // idx of the start of current parsed sequence.
        uCode;

    if (prevBufOffset > 0) // Make prev buf overlap a little to make it easier to slice later.
        prevBuf = Buffer.concat([prevBuf, buf.slice(0, 10)]);
    
    for (var i = 0, j = 0; i < buf.length; i++) {
        var curByte = (i >= 0) ? buf[i] : prevBuf[i + prevBufOffset];

        // Lookup in current trie node.
        var uCode = this.decodeTables[nodeIdx][curByte];

        if (uCode >= 0) { 
            // Normal character, just use it.
        }
        else if (uCode === UNASSIGNED) { // Unknown char.
            // TODO: Callback with seq.
            //var curSeq = (seqStart >= 0) ? buf.slice(seqStart, i+1) : prevBuf.slice(seqStart + prevBufOffset, i+1 + prevBufOffset);
            i = seqStart; // Try to parse again, after skipping first byte of the sequence ('i' will be incremented by 'for' cycle).
            uCode = this.defaultCharUnicode.charCodeAt(0);
        }
        else if (uCode === GB18030_CODE) {
            var curSeq = (seqStart >= 0) ? buf.slice(seqStart, i+1) : prevBuf.slice(seqStart + prevBufOffset, i+1 + prevBufOffset);
            var ptr = (curSeq[0]-0x81)*12600 + (curSeq[1]-0x30)*1260 + (curSeq[2]-0x81)*10 + (curSeq[3]-0x30);
            var idx = findIdx(this.gb18030.gbChars, ptr);
            uCode = this.gb18030.uChars[idx] + ptr - this.gb18030.gbChars[idx];
        }
        else if (uCode <= NODE_START) { // Go to next trie node.
            nodeIdx = NODE_START - uCode;
            continue;
        }
        else if (uCode <= SEQ_START) { // Output a sequence of chars.
            var seq = this.decodeTableSeq[SEQ_START - uCode];
            for (var k = 0; k < seq.length - 1; k++) {
                uCode = seq[k];
                newBuf[j++] = uCode & 0xFF;
                newBuf[j++] = uCode >> 8;
            }
            uCode = seq[seq.length-1];
        }
        else
            throw new Error("iconv-lite internal error: invalid decoding table value " + uCode + " at " + nodeIdx + "/" + curByte);

        // Write the character to buffer, handling higher planes using surrogate pair.
        if (uCode > 0xFFFF) { 
            uCode -= 0x10000;
            var uCodeLead = 0xD800 + Math.floor(uCode / 0x400);
            newBuf[j++] = uCodeLead & 0xFF;
            newBuf[j++] = uCodeLead >> 8;

            uCode = 0xDC00 + uCode % 0x400;
        }
        newBuf[j++] = uCode & 0xFF;
        newBuf[j++] = uCode >> 8;

        // Reset trie node.
        nodeIdx = 0; seqStart = i+1;
    }

    this.nodeIdx = nodeIdx;
    this.prevBuf = (seqStart >= 0) ? buf.slice(seqStart) : prevBuf.slice(seqStart + prevBufOffset);
    return newBuf.slice(0, j).toString('ucs2');
}

DBCSDecoder.prototype.end = function() {
    var ret = '';

    // Try to parse all remaining chars.
    while (this.prevBuf.length > 0) {
        // Skip 1 character in the buffer.
        ret += this.defaultCharUnicode;
        var buf = this.prevBuf.slice(1);

        // Parse remaining as usual.
        this.prevBuf = Buffer.alloc(0);
        this.nodeIdx = 0;
        if (buf.length > 0)
            ret += this.write(buf);
    }

    this.nodeIdx = 0;
    return ret;
}

// Binary search for GB18030. Returns largest i such that table[i] <= val.
function findIdx(table, val) {
    if (table[0] > val)
        return -1;

    var l = 0, r = table.length;
    while (l < r-1) { // always table[l] <= val < table[r]
        var mid = l + Math.floor((r-l+1)/2);
        if (table[mid] <= val)
            l = mid;
        else
            r = mid;
    }
    return l;
}



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Description of supported double byte encodings and aliases.
// Tables are not require()-d until they are needed to speed up library load.
// require()-s are direct to support Browserify.

module.exports = {
    
    // == Japanese/ShiftJIS ====================================================
    // All japanese encodings are based on JIS X set of standards:
    // JIS X 0201 - Single-byte encoding of ASCII + ￥ + Kana chars at 0xA1-0xDF.
    // JIS X 0208 - Main set of 6879 characters, placed in 94x94 plane, to be encoded by 2 bytes. 
    //              Has several variations in 1978, 1983, 1990 and 1997.
    // JIS X 0212 - Supplementary plane of 6067 chars in 94x94 plane. 1990. Effectively dead.
    // JIS X 0213 - Extension and modern replacement of 0208 and 0212. Total chars: 11233.
    //              2 planes, first is superset of 0208, second - revised 0212.
    //              Introduced in 2000, revised 2004. Some characters are in Unicode Plane 2 (0x2xxxx)

    // Byte encodings are:
    //  * Shift_JIS: Compatible with 0201, uses not defined chars in top half as lead bytes for double-byte
    //               encoding of 0208. Lead byte ranges: 0x81-0x9F, 0xE0-0xEF; Trail byte ranges: 0x40-0x7E, 0x80-0x9E, 0x9F-0xFC.
    //               Windows CP932 is a superset of Shift_JIS. Some companies added more chars, notably KDDI.
    //  * EUC-JP:    Up to 3 bytes per character. Used mostly on *nixes.
    //               0x00-0x7F       - lower part of 0201
    //               0x8E, 0xA1-0xDF - upper part of 0201
    //               (0xA1-0xFE)x2   - 0208 plane (94x94).
    //               0x8F, (0xA1-0xFE)x2 - 0212 plane (94x94).
    //  * JIS X 208: 7-bit, direct encoding of 0208. Byte ranges: 0x21-0x7E (94 values). Uncommon.
    //               Used as-is in ISO2022 family.
    //  * ISO2022-JP: Stateful encoding, with escape sequences to switch between ASCII, 
    //                0201-1976 Roman, 0208-1978, 0208-1983.
    //  * ISO2022-JP-1: Adds esc seq for 0212-1990.
    //  * ISO2022-JP-2: Adds esc seq for GB2313-1980, KSX1001-1992, ISO8859-1, ISO8859-7.
    //  * ISO2022-JP-3: Adds esc seq for 0201-1976 Kana set, 0213-2000 Planes 1, 2.
    //  * ISO2022-JP-2004: Adds 0213-2004 Plane 1.
    //
    // After JIS X 0213 appeared, Shift_JIS-2004, EUC-JISX0213 and ISO2022-JP-2004 followed, with just changing the planes.
    //
    // Overall, it seems that it's a mess :( http://www8.plala.or.jp/tkubota1/unicode-symbols-map2.html

    'shiftjis': {
        type: '_dbcs',
//        table: function() { return require('./tables/shiftjis.json') },
        encodeAdd: {'\u00a5': 0x5C, '\u203E': 0x7E},
        encodeSkipVals: [{from: 0xED40, to: 0xF940}],
    },
    'csshiftjis': 'shiftjis',
    'mskanji': 'shiftjis',
    'sjis': 'shiftjis',
    'windows31j': 'shiftjis',
    'ms31j': 'shiftjis',
    'xsjis': 'shiftjis',
    'windows932': 'shiftjis',
    'ms932': 'shiftjis',
    '932': 'shiftjis',
    'cp932': 'shiftjis',

    'eucjp': {
        type: '_dbcs',
//        table: function() { return require('./tables/eucjp.json') },
        encodeAdd: {'\u00a5': 0x5C, '\u203E': 0x7E},
    },

    // TODO: KDDI extension to Shift_JIS
    // TODO: IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
    // TODO: IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.


    // == Chinese/GBK ==========================================================
    // http://en.wikipedia.org/wiki/GBK
    // We mostly implement W3C recommendation: https://www.w3.org/TR/encoding/#gbk-encoder

    // Oldest GB2312 (1981, ~7600 chars) is a subset of CP936
    'gb2312': 'cp936',
    'gb231280': 'cp936',
    'gb23121980': 'cp936',
    'csgb2312': 'cp936',
    'csiso58gb231280': 'cp936',
    'euccn': 'cp936',

    // Microsoft's CP936 is a subset and approximation of GBK.
    'windows936': 'cp936',
    'ms936': 'cp936',
    '936': 'cp936',
    'cp936': {
        type: '_dbcs',
//        table: function() { return require('./tables/cp936.json') },
    },

    // GBK (~22000 chars) is an extension of CP936 that added user-mapped chars and some other.
    'gbk': {
        type: '_dbcs',
//        table: function() { return require('./tables/cp936.json').concat(require('./tables/gbk-added.json')) },
    },
    'xgbk': 'gbk',
    'isoir58': 'gbk',

    // GB18030 is an algorithmic extension of GBK.
    // Main source: https://www.w3.org/TR/encoding/#gbk-encoder
    // http://icu-project.org/docs/papers/gb18030.html
    // http://source.icu-project.org/repos/icu/data/trunk/charset/data/xml/gb-18030-2000.xml
    // http://www.khngai.com/chinese/charmap/tblgbk.php?page=0
    'gb18030': {
        type: '_dbcs',
//        table: function() { return require('./tables/cp936.json').concat(require('./tables/gbk-added.json')) },
//        gb18030: function() { return require('./tables/gb18030-ranges.json') },
        encodeSkipVals: [0x80],
        encodeAdd: {'€': 0xA2E3},
    },

    'chinese': 'gb18030',


    // == Korean ===============================================================
    // EUC-KR, KS_C_5601 and KS X 1001 are exactly the same.
    'windows949': 'cp949',
    'ms949': 'cp949',
    '949': 'cp949',
    'cp949': {
        type: '_dbcs',
        table: function() { return __webpack_require__(33) },
    },

    'cseuckr': 'cp949',
    'csksc56011987': 'cp949',
    'euckr': 'cp949',
    'isoir149': 'cp949',
    'korean': 'cp949',
    'ksc56011987': 'cp949',
    'ksc56011989': 'cp949',
    'ksc5601': 'cp949',


    // == Big5/Taiwan/Hong Kong ================================================
    // There are lots of tables for Big5 and cp950. Please see the following links for history:
    // http://moztw.org/docs/big5/  http://www.haible.de/bruno/charsets/conversion-tables/Big5.html
    // Variations, in roughly number of defined chars:
    //  * Windows CP 950: Microsoft variant of Big5. Canonical: http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT
    //  * Windows CP 951: Microsoft variant of Big5-HKSCS-2001. Seems to be never public. http://me.abelcheung.org/articles/research/what-is-cp951/
    //  * Big5-2003 (Taiwan standard) almost superset of cp950.
    //  * Unicode-at-on (UAO) / Mozilla 1.8. Falling out of use on the Web. Not supported by other browsers.
    //  * Big5-HKSCS (-2001, -2004, -2008). Hong Kong standard. 
    //    many unicode code points moved from PUA to Supplementary plane (U+2XXXX) over the years.
    //    Plus, it has 4 combining sequences.
    //    Seems that Mozilla refused to support it for 10 yrs. https://bugzilla.mozilla.org/show_bug.cgi?id=162431 https://bugzilla.mozilla.org/show_bug.cgi?id=310299
    //    because big5-hkscs is the only encoding to include astral characters in non-algorithmic way.
    //    Implementations are not consistent within browsers; sometimes labeled as just big5.
    //    MS Internet Explorer switches from big5 to big5-hkscs when a patch applied.
    //    Great discussion & recap of what's going on https://bugzilla.mozilla.org/show_bug.cgi?id=912470#c31
    //    In the encoder, it might make sense to support encoding old PUA mappings to Big5 bytes seq-s.
    //    Official spec: http://www.ogcio.gov.hk/en/business/tech_promotion/ccli/terms/doc/2003cmp_2008.txt
    //                   http://www.ogcio.gov.hk/tc/business/tech_promotion/ccli/terms/doc/hkscs-2008-big5-iso.txt
    // 
    // Current understanding of how to deal with Big5(-HKSCS) is in the Encoding Standard, http://encoding.spec.whatwg.org/#big5-encoder
    // Unicode mapping (http://www.unicode.org/Public/MAPPINGS/OBSOLETE/EASTASIA/OTHER/BIG5.TXT) is said to be wrong.

    'windows950': 'cp950',
    'ms950': 'cp950',
    '950': 'cp950',
    'cp950': {
        type: '_dbcs',
//        table: function() { return require('./tables/cp950.json') },
    },

    // Big5 has many variations and is an extension of cp950. We use Encoding Standard's as a consensus.
    'big5': 'big5hkscs',
    'big5hkscs': {
        type: '_dbcs',
//        table: function() { return require('./tables/cp950.json').concat(require('./tables/big5-added.json')) },
        encodeSkipVals: [0xa2cc],
    },

    'cnbig5': 'big5hkscs',
    'csbig5': 'big5hkscs',
    'xxbig5': 'big5hkscs',
};


/***/ }),
/* 33 */
/***/ (function(module) {

module.exports = JSON.parse("[[\"0\",\"\\u0000\",127],[\"8141\",\"갂갃갅갆갋\",4,\"갘갞갟갡갢갣갥\",6,\"갮갲갳갴\"],[\"8161\",\"갵갶갷갺갻갽갾갿걁\",9,\"걌걎\",5,\"걕\"],[\"8181\",\"걖걗걙걚걛걝\",18,\"걲걳걵걶걹걻\",4,\"겂겇겈겍겎겏겑겒겓겕\",6,\"겞겢\",5,\"겫겭겮겱\",6,\"겺겾겿곀곂곃곅곆곇곉곊곋곍\",7,\"곖곘\",7,\"곢곣곥곦곩곫곭곮곲곴곷\",4,\"곾곿괁괂괃괅괇\",4,\"괎괐괒괓\"],[\"8241\",\"괔괕괖괗괙괚괛괝괞괟괡\",7,\"괪괫괮\",5],[\"8261\",\"괶괷괹괺괻괽\",6,\"굆굈굊\",5,\"굑굒굓굕굖굗\"],[\"8281\",\"굙\",7,\"굢굤\",7,\"굮굯굱굲굷굸굹굺굾궀궃\",4,\"궊궋궍궎궏궑\",10,\"궞\",5,\"궥\",17,\"궸\",7,\"귂귃귅귆귇귉\",6,\"귒귔\",7,\"귝귞귟귡귢귣귥\",18],[\"8341\",\"귺귻귽귾긂\",5,\"긊긌긎\",5,\"긕\",7],[\"8361\",\"긝\",18,\"긲긳긵긶긹긻긼\"],[\"8381\",\"긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗\",4,\"깞깢깣깤깦깧깪깫깭깮깯깱\",6,\"깺깾\",5,\"꺆\",5,\"꺍\",46,\"꺿껁껂껃껅\",6,\"껎껒\",5,\"껚껛껝\",8],[\"8441\",\"껦껧껩껪껬껮\",5,\"껵껶껷껹껺껻껽\",8],[\"8461\",\"꼆꼉꼊꼋꼌꼎꼏꼑\",18],[\"8481\",\"꼤\",7,\"꼮꼯꼱꼳꼵\",6,\"꼾꽀꽄꽅꽆꽇꽊\",5,\"꽑\",10,\"꽞\",5,\"꽦\",18,\"꽺\",5,\"꾁꾂꾃꾅꾆꾇꾉\",6,\"꾒꾓꾔꾖\",5,\"꾝\",26,\"꾺꾻꾽꾾\"],[\"8541\",\"꾿꿁\",5,\"꿊꿌꿏\",4,\"꿕\",6,\"꿝\",4],[\"8561\",\"꿢\",5,\"꿪\",5,\"꿲꿳꿵꿶꿷꿹\",6,\"뀂뀃\"],[\"8581\",\"뀅\",6,\"뀍뀎뀏뀑뀒뀓뀕\",6,\"뀞\",9,\"뀩\",26,\"끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞\",29,\"끾끿낁낂낃낅\",6,\"낎낐낒\",5,\"낛낝낞낣낤\"],[\"8641\",\"낥낦낧낪낰낲낶낷낹낺낻낽\",6,\"냆냊\",5,\"냒\"],[\"8661\",\"냓냕냖냗냙\",6,\"냡냢냣냤냦\",10],[\"8681\",\"냱\",22,\"넊넍넎넏넑넔넕넖넗넚넞\",4,\"넦넧넩넪넫넭\",6,\"넶넺\",5,\"녂녃녅녆녇녉\",6,\"녒녓녖녗녙녚녛녝녞녟녡\",22,\"녺녻녽녾녿놁놃\",4,\"놊놌놎놏놐놑놕놖놗놙놚놛놝\"],[\"8741\",\"놞\",9,\"놩\",15],[\"8761\",\"놹\",18,\"뇍뇎뇏뇑뇒뇓뇕\"],[\"8781\",\"뇖\",5,\"뇞뇠\",7,\"뇪뇫뇭뇮뇯뇱\",7,\"뇺뇼뇾\",5,\"눆눇눉눊눍\",6,\"눖눘눚\",5,\"눡\",18,\"눵\",6,\"눽\",26,\"뉙뉚뉛뉝뉞뉟뉡\",6,\"뉪\",4],[\"8841\",\"뉯\",4,\"뉶\",5,\"뉽\",6,\"늆늇늈늊\",4],[\"8861\",\"늏늒늓늕늖늗늛\",4,\"늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷\"],[\"8881\",\"늸\",15,\"닊닋닍닎닏닑닓\",4,\"닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉\",6,\"댒댖\",5,\"댝\",54,\"덗덙덚덝덠덡덢덣\"],[\"8941\",\"덦덨덪덬덭덯덲덳덵덶덷덹\",6,\"뎂뎆\",5,\"뎍\"],[\"8961\",\"뎎뎏뎑뎒뎓뎕\",10,\"뎢\",5,\"뎩뎪뎫뎭\"],[\"8981\",\"뎮\",21,\"돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩\",18,\"돽\",18,\"됑\",6,\"됙됚됛됝됞됟됡\",6,\"됪됬\",7,\"됵\",15],[\"8a41\",\"둅\",10,\"둒둓둕둖둗둙\",6,\"둢둤둦\"],[\"8a61\",\"둧\",4,\"둭\",18,\"뒁뒂\"],[\"8a81\",\"뒃\",4,\"뒉\",19,\"뒞\",5,\"뒥뒦뒧뒩뒪뒫뒭\",7,\"뒶뒸뒺\",5,\"듁듂듃듅듆듇듉\",6,\"듑듒듓듔듖\",5,\"듞듟듡듢듥듧\",4,\"듮듰듲\",5,\"듹\",26,\"딖딗딙딚딝\"],[\"8b41\",\"딞\",5,\"딦딫\",4,\"딲딳딵딶딷딹\",6,\"땂땆\"],[\"8b61\",\"땇땈땉땊땎땏땑땒땓땕\",6,\"땞땢\",8],[\"8b81\",\"땫\",52,\"떢떣떥떦떧떩떬떭떮떯떲떶\",4,\"떾떿뗁뗂뗃뗅\",6,\"뗎뗒\",5,\"뗙\",18,\"뗭\",18],[\"8c41\",\"똀\",15,\"똒똓똕똖똗똙\",4],[\"8c61\",\"똞\",6,\"똦\",5,\"똭\",6,\"똵\",5],[\"8c81\",\"똻\",12,\"뙉\",26,\"뙥뙦뙧뙩\",50,\"뚞뚟뚡뚢뚣뚥\",5,\"뚭뚮뚯뚰뚲\",16],[\"8d41\",\"뛃\",16,\"뛕\",8],[\"8d61\",\"뛞\",17,\"뛱뛲뛳뛵뛶뛷뛹뛺\"],[\"8d81\",\"뛻\",4,\"뜂뜃뜄뜆\",33,\"뜪뜫뜭뜮뜱\",6,\"뜺뜼\",7,\"띅띆띇띉띊띋띍\",6,\"띖\",9,\"띡띢띣띥띦띧띩\",6,\"띲띴띶\",5,\"띾띿랁랂랃랅\",6,\"랎랓랔랕랚랛랝랞\"],[\"8e41\",\"랟랡\",6,\"랪랮\",5,\"랶랷랹\",8],[\"8e61\",\"럂\",4,\"럈럊\",19],[\"8e81\",\"럞\",13,\"럮럯럱럲럳럵\",6,\"럾렂\",4,\"렊렋렍렎렏렑\",6,\"렚렜렞\",5,\"렦렧렩렪렫렭\",6,\"렶렺\",5,\"롁롂롃롅\",11,\"롒롔\",7,\"롞롟롡롢롣롥\",6,\"롮롰롲\",5,\"롹롺롻롽\",7],[\"8f41\",\"뢅\",7,\"뢎\",17],[\"8f61\",\"뢠\",7,\"뢩\",6,\"뢱뢲뢳뢵뢶뢷뢹\",4],[\"8f81\",\"뢾뢿룂룄룆\",5,\"룍룎룏룑룒룓룕\",7,\"룞룠룢\",5,\"룪룫룭룮룯룱\",6,\"룺룼룾\",5,\"뤅\",18,\"뤙\",6,\"뤡\",26,\"뤾뤿륁륂륃륅\",6,\"륍륎륐륒\",5],[\"9041\",\"륚륛륝륞륟륡\",6,\"륪륬륮\",5,\"륶륷륹륺륻륽\"],[\"9061\",\"륾\",5,\"릆릈릋릌릏\",15],[\"9081\",\"릟\",12,\"릮릯릱릲릳릵\",6,\"릾맀맂\",5,\"맊맋맍맓\",4,\"맚맜맟맠맢맦맧맩맪맫맭\",6,\"맶맻\",4,\"먂\",5,\"먉\",11,\"먖\",33,\"먺먻먽먾먿멁멃멄멅멆\"],[\"9141\",\"멇멊멌멏멐멑멒멖멗멙멚멛멝\",6,\"멦멪\",5],[\"9161\",\"멲멳멵멶멷멹\",9,\"몆몈몉몊몋몍\",5],[\"9181\",\"몓\",20,\"몪몭몮몯몱몳\",4,\"몺몼몾\",5,\"뫅뫆뫇뫉\",14,\"뫚\",33,\"뫽뫾뫿묁묂묃묅\",7,\"묎묐묒\",5,\"묙묚묛묝묞묟묡\",6],[\"9241\",\"묨묪묬\",7,\"묷묹묺묿\",4,\"뭆뭈뭊뭋뭌뭎뭑뭒\"],[\"9261\",\"뭓뭕뭖뭗뭙\",7,\"뭢뭤\",7,\"뭭\",4],[\"9281\",\"뭲\",21,\"뮉뮊뮋뮍뮎뮏뮑\",18,\"뮥뮦뮧뮩뮪뮫뮭\",6,\"뮵뮶뮸\",7,\"믁믂믃믅믆믇믉\",6,\"믑믒믔\",35,\"믺믻믽믾밁\"],[\"9341\",\"밃\",4,\"밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵\"],[\"9361\",\"밶밷밹\",6,\"뱂뱆뱇뱈뱊뱋뱎뱏뱑\",8],[\"9381\",\"뱚뱛뱜뱞\",37,\"벆벇벉벊벍벏\",4,\"벖벘벛\",4,\"벢벣벥벦벩\",6,\"벲벶\",5,\"벾벿볁볂볃볅\",7,\"볎볒볓볔볖볗볙볚볛볝\",22,\"볷볹볺볻볽\"],[\"9441\",\"볾\",5,\"봆봈봊\",5,\"봑봒봓봕\",8],[\"9461\",\"봞\",5,\"봥\",6,\"봭\",12],[\"9481\",\"봺\",5,\"뵁\",6,\"뵊뵋뵍뵎뵏뵑\",6,\"뵚\",9,\"뵥뵦뵧뵩\",22,\"붂붃붅붆붋\",4,\"붒붔붖붗붘붛붝\",6,\"붥\",10,\"붱\",6,\"붹\",24],[\"9541\",\"뷒뷓뷖뷗뷙뷚뷛뷝\",11,\"뷪\",5,\"뷱\"],[\"9561\",\"뷲뷳뷵뷶뷷뷹\",6,\"븁븂븄븆\",5,\"븎븏븑븒븓\"],[\"9581\",\"븕\",6,\"븞븠\",35,\"빆빇빉빊빋빍빏\",4,\"빖빘빜빝빞빟빢빣빥빦빧빩빫\",4,\"빲빶\",4,\"빾빿뺁뺂뺃뺅\",6,\"뺎뺒\",5,\"뺚\",13,\"뺩\",14],[\"9641\",\"뺸\",23,\"뻒뻓\"],[\"9661\",\"뻕뻖뻙\",6,\"뻡뻢뻦\",5,\"뻭\",8],[\"9681\",\"뻶\",10,\"뼂\",5,\"뼊\",13,\"뼚뼞\",33,\"뽂뽃뽅뽆뽇뽉\",6,\"뽒뽓뽔뽖\",44],[\"9741\",\"뾃\",16,\"뾕\",8],[\"9761\",\"뾞\",17,\"뾱\",7],[\"9781\",\"뾹\",11,\"뿆\",5,\"뿎뿏뿑뿒뿓뿕\",6,\"뿝뿞뿠뿢\",89,\"쀽쀾쀿\"],[\"9841\",\"쁀\",16,\"쁒\",5,\"쁙쁚쁛\"],[\"9861\",\"쁝쁞쁟쁡\",6,\"쁪\",15],[\"9881\",\"쁺\",21,\"삒삓삕삖삗삙\",6,\"삢삤삦\",5,\"삮삱삲삷\",4,\"삾샂샃샄샆샇샊샋샍샎샏샑\",6,\"샚샞\",5,\"샦샧샩샪샫샭\",6,\"샶샸샺\",5,\"섁섂섃섅섆섇섉\",6,\"섑섒섓섔섖\",5,\"섡섢섥섨섩섪섫섮\"],[\"9941\",\"섲섳섴섵섷섺섻섽섾섿셁\",6,\"셊셎\",5,\"셖셗\"],[\"9961\",\"셙셚셛셝\",6,\"셦셪\",5,\"셱셲셳셵셶셷셹셺셻\"],[\"9981\",\"셼\",8,\"솆\",5,\"솏솑솒솓솕솗\",4,\"솞솠솢솣솤솦솧솪솫솭솮솯솱\",11,\"솾\",5,\"쇅쇆쇇쇉쇊쇋쇍\",6,\"쇕쇖쇙\",6,\"쇡쇢쇣쇥쇦쇧쇩\",6,\"쇲쇴\",7,\"쇾쇿숁숂숃숅\",6,\"숎숐숒\",5,\"숚숛숝숞숡숢숣\"],[\"9a41\",\"숤숥숦숧숪숬숮숰숳숵\",16],[\"9a61\",\"쉆쉇쉉\",6,\"쉒쉓쉕쉖쉗쉙\",6,\"쉡쉢쉣쉤쉦\"],[\"9a81\",\"쉧\",4,\"쉮쉯쉱쉲쉳쉵\",6,\"쉾슀슂\",5,\"슊\",5,\"슑\",6,\"슙슚슜슞\",5,\"슦슧슩슪슫슮\",5,\"슶슸슺\",33,\"싞싟싡싢싥\",5,\"싮싰싲싳싴싵싷싺싽싾싿쌁\",6,\"쌊쌋쌎쌏\"],[\"9b41\",\"쌐쌑쌒쌖쌗쌙쌚쌛쌝\",6,\"쌦쌧쌪\",8],[\"9b61\",\"쌳\",17,\"썆\",7],[\"9b81\",\"썎\",25,\"썪썫썭썮썯썱썳\",4,\"썺썻썾\",5,\"쎅쎆쎇쎉쎊쎋쎍\",50,\"쏁\",22,\"쏚\"],[\"9c41\",\"쏛쏝쏞쏡쏣\",4,\"쏪쏫쏬쏮\",5,\"쏶쏷쏹\",5],[\"9c61\",\"쏿\",8,\"쐉\",6,\"쐑\",9],[\"9c81\",\"쐛\",8,\"쐥\",6,\"쐭쐮쐯쐱쐲쐳쐵\",6,\"쐾\",9,\"쑉\",26,\"쑦쑧쑩쑪쑫쑭\",6,\"쑶쑷쑸쑺\",5,\"쒁\",18,\"쒕\",6,\"쒝\",12],[\"9d41\",\"쒪\",13,\"쒹쒺쒻쒽\",8],[\"9d61\",\"쓆\",25],[\"9d81\",\"쓠\",8,\"쓪\",5,\"쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂\",9,\"씍씎씏씑씒씓씕\",6,\"씝\",10,\"씪씫씭씮씯씱\",6,\"씺씼씾\",5,\"앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩\",6,\"앲앶\",5,\"앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔\"],[\"9e41\",\"얖얙얚얛얝얞얟얡\",7,\"얪\",9,\"얶\"],[\"9e61\",\"얷얺얿\",4,\"엋엍엏엒엓엕엖엗엙\",6,\"엢엤엦엧\"],[\"9e81\",\"엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑\",6,\"옚옝\",6,\"옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉\",6,\"왒왖\",5,\"왞왟왡\",10,\"왭왮왰왲\",5,\"왺왻왽왾왿욁\",6,\"욊욌욎\",5,\"욖욗욙욚욛욝\",6,\"욦\"],[\"9f41\",\"욨욪\",5,\"욲욳욵욶욷욻\",4,\"웂웄웆\",5,\"웎\"],[\"9f61\",\"웏웑웒웓웕\",6,\"웞웟웢\",5,\"웪웫웭웮웯웱웲\"],[\"9f81\",\"웳\",4,\"웺웻웼웾\",5,\"윆윇윉윊윋윍\",6,\"윖윘윚\",5,\"윢윣윥윦윧윩\",6,\"윲윴윶윸윹윺윻윾윿읁읂읃읅\",4,\"읋읎읐읙읚읛읝읞읟읡\",6,\"읩읪읬\",7,\"읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛\",4,\"잢잧\",4,\"잮잯잱잲잳잵잶잷\"],[\"a041\",\"잸잹잺잻잾쟂\",5,\"쟊쟋쟍쟏쟑\",6,\"쟙쟚쟛쟜\"],[\"a061\",\"쟞\",5,\"쟥쟦쟧쟩쟪쟫쟭\",13],[\"a081\",\"쟻\",4,\"젂젃젅젆젇젉젋\",4,\"젒젔젗\",4,\"젞젟젡젢젣젥\",6,\"젮젰젲\",5,\"젹젺젻젽젾젿졁\",6,\"졊졋졎\",5,\"졕\",26,\"졲졳졵졶졷졹졻\",4,\"좂좄좈좉좊좎\",5,\"좕\",7,\"좞좠좢좣좤\"],[\"a141\",\"좥좦좧좩\",18,\"좾좿죀죁\"],[\"a161\",\"죂죃죅죆죇죉죊죋죍\",6,\"죖죘죚\",5,\"죢죣죥\"],[\"a181\",\"죦\",14,\"죶\",5,\"죾죿줁줂줃줇\",4,\"줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈\",9,\"±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢\"],[\"a241\",\"줐줒\",5,\"줙\",18],[\"a261\",\"줭\",6,\"줵\",18],[\"a281\",\"쥈\",7,\"쥒쥓쥕쥖쥗쥙\",6,\"쥢쥤\",7,\"쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®\"],[\"a341\",\"쥱쥲쥳쥵\",6,\"쥽\",10,\"즊즋즍즎즏\"],[\"a361\",\"즑\",6,\"즚즜즞\",16],[\"a381\",\"즯\",16,\"짂짃짅짆짉짋\",4,\"짒짔짗짘짛！\",58,\"￦］\",32,\"￣\"],[\"a441\",\"짞짟짡짣짥짦짨짩짪짫짮짲\",5,\"짺짻짽짾짿쨁쨂쨃쨄\"],[\"a461\",\"쨅쨆쨇쨊쨎\",5,\"쨕쨖쨗쨙\",12],[\"a481\",\"쨦쨧쨨쨪\",28,\"ㄱ\",93],[\"a541\",\"쩇\",4,\"쩎쩏쩑쩒쩓쩕\",6,\"쩞쩢\",5,\"쩩쩪\"],[\"a561\",\"쩫\",17,\"쩾\",5,\"쪅쪆\"],[\"a581\",\"쪇\",16,\"쪙\",14,\"ⅰ\",9],[\"a5b0\",\"Ⅰ\",9],[\"a5c1\",\"Α\",16,\"Σ\",6],[\"a5e1\",\"α\",16,\"σ\",6],[\"a641\",\"쪨\",19,\"쪾쪿쫁쫂쫃쫅\"],[\"a661\",\"쫆\",5,\"쫎쫐쫒쫔쫕쫖쫗쫚\",5,\"쫡\",6],[\"a681\",\"쫨쫩쫪쫫쫭\",6,\"쫵\",18,\"쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃\",7],[\"a741\",\"쬋\",4,\"쬑쬒쬓쬕쬖쬗쬙\",6,\"쬢\",7],[\"a761\",\"쬪\",22,\"쭂쭃쭄\"],[\"a781\",\"쭅쭆쭇쭊쭋쭍쭎쭏쭑\",6,\"쭚쭛쭜쭞\",5,\"쭥\",7,\"㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙\",9,\"㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰\",9,\"㎀\",4,\"㎺\",5,\"㎐\",4,\"Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆\"],[\"a841\",\"쭭\",10,\"쭺\",14],[\"a861\",\"쮉\",18,\"쮝\",6],[\"a881\",\"쮤\",19,\"쮹\",11,\"ÆÐªĦ\"],[\"a8a6\",\"Ĳ\"],[\"a8a8\",\"ĿŁØŒºÞŦŊ\"],[\"a8b1\",\"㉠\",27,\"ⓐ\",25,\"①\",14,\"½⅓⅔¼¾⅛⅜⅝⅞\"],[\"a941\",\"쯅\",14,\"쯕\",10],[\"a961\",\"쯠쯡쯢쯣쯥쯦쯨쯪\",18],[\"a981\",\"쯽\",14,\"찎찏찑찒찓찕\",6,\"찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀\",27,\"⒜\",25,\"⑴\",14,\"¹²³⁴ⁿ₁₂₃₄\"],[\"aa41\",\"찥찦찪찫찭찯찱\",6,\"찺찿\",4,\"챆챇챉챊챋챍챎\"],[\"aa61\",\"챏\",4,\"챖챚\",5,\"챡챢챣챥챧챩\",6,\"챱챲\"],[\"aa81\",\"챳챴챶\",29,\"ぁ\",82],[\"ab41\",\"첔첕첖첗첚첛첝첞첟첡\",6,\"첪첮\",5,\"첶첷첹\"],[\"ab61\",\"첺첻첽\",6,\"쳆쳈쳊\",5,\"쳑쳒쳓쳕\",5],[\"ab81\",\"쳛\",8,\"쳥\",6,\"쳭쳮쳯쳱\",12,\"ァ\",85],[\"ac41\",\"쳾쳿촀촂\",5,\"촊촋촍촎촏촑\",6,\"촚촜촞촟촠\"],[\"ac61\",\"촡촢촣촥촦촧촩촪촫촭\",11,\"촺\",4],[\"ac81\",\"촿\",28,\"쵝쵞쵟А\",5,\"ЁЖ\",25],[\"acd1\",\"а\",5,\"ёж\",25],[\"ad41\",\"쵡쵢쵣쵥\",6,\"쵮쵰쵲\",5,\"쵹\",7],[\"ad61\",\"춁\",6,\"춉\",10,\"춖춗춙춚춛춝춞춟\"],[\"ad81\",\"춠춡춢춣춦춨춪\",5,\"춱\",18,\"췅\"],[\"ae41\",\"췆\",5,\"췍췎췏췑\",16],[\"ae61\",\"췢\",5,\"췩췪췫췭췮췯췱\",6,\"췺췼췾\",4],[\"ae81\",\"츃츅츆츇츉츊츋츍\",6,\"츕츖츗츘츚\",5,\"츢츣츥츦츧츩츪츫\"],[\"af41\",\"츬츭츮츯츲츴츶\",19],[\"af61\",\"칊\",13,\"칚칛칝칞칢\",5,\"칪칬\"],[\"af81\",\"칮\",5,\"칶칷칹칺칻칽\",6,\"캆캈캊\",5,\"캒캓캕캖캗캙\"],[\"b041\",\"캚\",5,\"캢캦\",5,\"캮\",12],[\"b061\",\"캻\",5,\"컂\",19],[\"b081\",\"컖\",13,\"컦컧컩컪컭\",6,\"컶컺\",5,\"가각간갇갈갉갊감\",7,\"같\",4,\"갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆\"],[\"b141\",\"켂켃켅켆켇켉\",6,\"켒켔켖\",5,\"켝켞켟켡켢켣\"],[\"b161\",\"켥\",6,\"켮켲\",5,\"켹\",11],[\"b181\",\"콅\",14,\"콖콗콙콚콛콝\",6,\"콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸\"],[\"b241\",\"콭콮콯콲콳콵콶콷콹\",6,\"쾁쾂쾃쾄쾆\",5,\"쾍\"],[\"b261\",\"쾎\",18,\"쾢\",5,\"쾩\"],[\"b281\",\"쾪\",5,\"쾱\",18,\"쿅\",6,\"깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙\"],[\"b341\",\"쿌\",19,\"쿢쿣쿥쿦쿧쿩\"],[\"b361\",\"쿪\",5,\"쿲쿴쿶\",5,\"쿽쿾쿿퀁퀂퀃퀅\",5],[\"b381\",\"퀋\",5,\"퀒\",5,\"퀙\",19,\"끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫\",4,\"낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝\"],[\"b441\",\"퀮\",5,\"퀶퀷퀹퀺퀻퀽\",6,\"큆큈큊\",5],[\"b461\",\"큑큒큓큕큖큗큙\",6,\"큡\",10,\"큮큯\"],[\"b481\",\"큱큲큳큵\",6,\"큾큿킀킂\",18,\"뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫\",4,\"닳담답닷\",4,\"닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥\"],[\"b541\",\"킕\",14,\"킦킧킩킪킫킭\",5],[\"b561\",\"킳킶킸킺\",5,\"탂탃탅탆탇탊\",5,\"탒탖\",4],[\"b581\",\"탛탞탟탡탢탣탥\",6,\"탮탲\",5,\"탹\",11,\"덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸\"],[\"b641\",\"턅\",7,\"턎\",17],[\"b661\",\"턠\",15,\"턲턳턵턶턷턹턻턼턽턾\"],[\"b681\",\"턿텂텆\",5,\"텎텏텑텒텓텕\",6,\"텞텠텢\",5,\"텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗\"],[\"b741\",\"텮\",13,\"텽\",6,\"톅톆톇톉톊\"],[\"b761\",\"톋\",20,\"톢톣톥톦톧\"],[\"b781\",\"톩\",6,\"톲톴톶톷톸톹톻톽톾톿퇁\",14,\"래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩\"],[\"b841\",\"퇐\",7,\"퇙\",17],[\"b861\",\"퇫\",8,\"퇵퇶퇷퇹\",13],[\"b881\",\"툈툊\",5,\"툑\",24,\"륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많\",4,\"맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼\"],[\"b941\",\"툪툫툮툯툱툲툳툵\",6,\"툾퉀퉂\",5,\"퉉퉊퉋퉌\"],[\"b961\",\"퉍\",14,\"퉝\",6,\"퉥퉦퉧퉨\"],[\"b981\",\"퉩\",22,\"튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바\",4,\"받\",4,\"밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗\"],[\"ba41\",\"튍튎튏튒튓튔튖\",5,\"튝튞튟튡튢튣튥\",6,\"튭\"],[\"ba61\",\"튮튯튰튲\",5,\"튺튻튽튾틁틃\",4,\"틊틌\",5],[\"ba81\",\"틒틓틕틖틗틙틚틛틝\",6,\"틦\",9,\"틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤\"],[\"bb41\",\"틻\",4,\"팂팄팆\",5,\"팏팑팒팓팕팗\",4,\"팞팢팣\"],[\"bb61\",\"팤팦팧팪팫팭팮팯팱\",6,\"팺팾\",5,\"퍆퍇퍈퍉\"],[\"bb81\",\"퍊\",31,\"빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤\"],[\"bc41\",\"퍪\",17,\"퍾퍿펁펂펃펅펆펇\"],[\"bc61\",\"펈펉펊펋펎펒\",5,\"펚펛펝펞펟펡\",6,\"펪펬펮\"],[\"bc81\",\"펯\",4,\"펵펶펷펹펺펻펽\",6,\"폆폇폊\",5,\"폑\",5,\"샥샨샬샴샵샷샹섀섄섈섐섕서\",4,\"섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭\"],[\"bd41\",\"폗폙\",7,\"폢폤\",7,\"폮폯폱폲폳폵폶폷\"],[\"bd61\",\"폸폹폺폻폾퐀퐂\",5,\"퐉\",13],[\"bd81\",\"퐗\",5,\"퐞\",25,\"숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰\"],[\"be41\",\"퐸\",7,\"푁푂푃푅\",14],[\"be61\",\"푔\",7,\"푝푞푟푡푢푣푥\",7,\"푮푰푱푲\"],[\"be81\",\"푳\",4,\"푺푻푽푾풁풃\",4,\"풊풌풎\",5,\"풕\",8,\"쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄\",6,\"엌엎\"],[\"bf41\",\"풞\",10,\"풪\",14],[\"bf61\",\"풹\",18,\"퓍퓎퓏퓑퓒퓓퓕\"],[\"bf81\",\"퓖\",5,\"퓝퓞퓠\",7,\"퓩퓪퓫퓭퓮퓯퓱\",6,\"퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염\",5,\"옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨\"],[\"c041\",\"퓾\",5,\"픅픆픇픉픊픋픍\",6,\"픖픘\",5],[\"c061\",\"픞\",25],[\"c081\",\"픸픹픺픻픾픿핁핂핃핅\",6,\"핎핐핒\",5,\"핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응\",7,\"읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊\"],[\"c141\",\"핤핦핧핪핬핮\",5,\"핶핷핹핺핻핽\",6,\"햆햊햋\"],[\"c161\",\"햌햍햎햏햑\",19,\"햦햧\"],[\"c181\",\"햨\",31,\"점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓\"],[\"c241\",\"헊헋헍헎헏헑헓\",4,\"헚헜헞\",5,\"헦헧헩헪헫헭헮\"],[\"c261\",\"헯\",4,\"헶헸헺\",5,\"혂혃혅혆혇혉\",6,\"혒\"],[\"c281\",\"혖\",5,\"혝혞혟혡혢혣혥\",7,\"혮\",9,\"혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻\"],[\"c341\",\"혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝\",4],[\"c361\",\"홢\",4,\"홨홪\",5,\"홲홳홵\",11],[\"c381\",\"횁횂횄횆\",5,\"횎횏횑횒횓횕\",7,\"횞횠횢\",5,\"횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층\"],[\"c441\",\"횫횭횮횯횱\",7,\"횺횼\",7,\"훆훇훉훊훋\"],[\"c461\",\"훍훎훏훐훒훓훕훖훘훚\",5,\"훡훢훣훥훦훧훩\",4],[\"c481\",\"훮훯훱훲훳훴훶\",5,\"훾훿휁휂휃휅\",11,\"휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼\"],[\"c541\",\"휕휖휗휚휛휝휞휟휡\",6,\"휪휬휮\",5,\"휶휷휹\"],[\"c561\",\"휺휻휽\",6,\"흅흆흈흊\",5,\"흒흓흕흚\",4],[\"c581\",\"흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵\",6,\"흾흿힀힂\",5,\"힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜\"],[\"c641\",\"힍힎힏힑\",6,\"힚힜힞\",5],[\"c6a1\",\"퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁\"],[\"c7a1\",\"퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠\"],[\"c8a1\",\"혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝\"],[\"caa1\",\"伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕\"],[\"cba1\",\"匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢\"],[\"cca1\",\"瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械\"],[\"cda1\",\"棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜\"],[\"cea1\",\"科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾\"],[\"cfa1\",\"區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴\"],[\"d0a1\",\"鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣\"],[\"d1a1\",\"朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩\",5,\"那樂\",4,\"諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉\"],[\"d2a1\",\"納臘蠟衲囊娘廊\",4,\"乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧\",5,\"駑魯\",10,\"濃籠聾膿農惱牢磊腦賂雷尿壘\",7,\"嫩訥杻紐勒\",5,\"能菱陵尼泥匿溺多茶\"],[\"d3a1\",\"丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃\"],[\"d4a1\",\"棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅\"],[\"d5a1\",\"蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣\"],[\"d6a1\",\"煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼\"],[\"d7a1\",\"遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬\"],[\"d8a1\",\"立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅\"],[\"d9a1\",\"蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文\"],[\"daa1\",\"汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑\"],[\"dba1\",\"發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖\"],[\"dca1\",\"碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦\"],[\"dda1\",\"孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥\"],[\"dea1\",\"脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索\"],[\"dfa1\",\"傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署\"],[\"e0a1\",\"胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬\"],[\"e1a1\",\"聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁\"],[\"e2a1\",\"戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧\"],[\"e3a1\",\"嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁\"],[\"e4a1\",\"沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額\"],[\"e5a1\",\"櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬\"],[\"e6a1\",\"旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒\"],[\"e7a1\",\"簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳\"],[\"e8a1\",\"烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療\"],[\"e9a1\",\"窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓\"],[\"eaa1\",\"運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜\"],[\"eba1\",\"濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼\"],[\"eca1\",\"議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄\"],[\"eda1\",\"立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長\"],[\"eea1\",\"障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱\"],[\"efa1\",\"煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖\"],[\"f0a1\",\"靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫\"],[\"f1a1\",\"踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只\"],[\"f2a1\",\"咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯\"],[\"f3a1\",\"鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策\"],[\"f4a1\",\"責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢\"],[\"f5a1\",\"椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃\"],[\"f6a1\",\"贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託\"],[\"f7a1\",\"鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑\"],[\"f8a1\",\"阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃\"],[\"f9a1\",\"品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航\"],[\"faa1\",\"行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型\"],[\"fba1\",\"形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵\"],[\"fca1\",\"禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆\"],[\"fda1\",\"爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰\"]]");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 35 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var forge;
__webpack_require__.e(/* require.ensure | forge */ 0).then((function(require) {forge = __webpack_require__(0);}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
var WNBase = __webpack_require__(1);
var WNCertificate = __webpack_require__(5);
var WNPrivateKeyInfo = __webpack_require__(6);

function WNPKCS12(fo) {
    this._fo = fo;
    this._fn = {
        asn1: {
            from: forge.pkcs12.pkcs12FromAsn1,
            to: forge.pkcs12.toPkcs12Asn1
        }
    };
}

// WNBase 상속
WNPKCS12.prototype = new WNBase();

/**
 * PKCS#12에서 인증서를 획득한다.
 * 
 * @return {WNCertificate} 획득한 인증서.
 */
WNPKCS12.prototype.getCertificate = function() {
    // get cert bags
    var bags = this._fo.getBags({bagType: forge.pki.oids.certBag});

    // find cert
    var certBag = bags[forge.pki.oids.certBag][0];
    // find next if not exists.
    if (!certBag.cert) {
        certBag = bags[forge.pki.oids.certBag][1];
    }
    return new WNCertificate(certBag.cert);
};

/**
 * PKCS#12에서 개인키 정보를 획득한다.
 * 
 * @return {WNPrivateKeyInfo} 획득한 개인키 정보.
 */
WNPKCS12.prototype.getPrivateKeyInfo = function() {
    // get key bags
    var keyBags = this._fo.getBags({bagType: forge.pki.oids.pkcs8ShroudedKeyBag});

    // find encrypted keyBag
    var keyBag = keyBags[forge.pki.oids.pkcs8ShroudedKeyBag][0];

    // If there was no encrypted key, find plain key
    if (!keyBag) {
        keyBags = this._fo.getBags({bagType: forge.pki.oids.keyBag});
        keyBag = keyBags[forge.pki.oids.keyBag][0];
    }

    // find next bag if key does not exist.
    if (!keyBag.keyInfo) {
        keyBag = keyBags[forge.pki.oids.keyBag][1];
    }
    return new WNPrivateKeyInfo(keyBag.keyInfo);
};

module.exports = WNPKCS12;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var xhr = __webpack_require__(38);

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
        _msg = __webpack_require__(43)("./error-message." + inputLang + ".json");  
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(39)
var isFunction = __webpack_require__(40)
var parseHeaders = __webpack_require__(41)
var xtend = __webpack_require__(42)

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
/* 39 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 40 */
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
/* 41 */
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
/* 42 */
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./error-message.en.json": 44,
	"./error-message.ko.json": 45
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
webpackContext.id = 43;

/***/ }),
/* 44 */
/***/ (function(module) {

module.exports = JSON.parse("{\"SELECT_CERT\":\"Please select a certificate first.\",\"INVALID_PASSWORD\":\"The password of the certificate is wrong.\",\"EMPTY_PASSWORD\":\"Please enter the password of selected certificate.\",\"WRONG_DATA\":\"The input data is invalid.\",\"CERT_AND_KEY_MISMATCH\":\"The bunch of the certificate and the private key are not matched.\",\"INVALID_PEM_DATA\":\"The input PEM data is invalid, expected: {} but found: {}.\",\"NO_SUCH_ALG\":\"The algorithm {} is not supported.\",\"INVALID_KEY_LENGTH\":\"The length of the key is invalid, expected: {} but :{}\",\"EMPTY_PARAM\":\"A parameter {} was empty.\",\"INVALID_PARAM\":\"A parameter {} was invalid.\",\"ENCRYPT_FAIL\":\"The encryption is failed.\",\"DECRYPT_FAIL\":\"The decryption is failed, the secret key may be wrong.\",\"NOT_SUPPORT_PDF_VIEWER\":\"This browser do not support PDF viewer, the guide will be downloaded.\",\"IS_NOT_WINDOWS\":\"This function is only avaliable on Windows Operating System.\",\"NOT_ALLOWED_POLICY\":\"{} {} Certificate is not allowed for this webstie.\",\"UNKNOWN\":\"Unknown Error\"}");

/***/ }),
/* 45 */
/***/ (function(module) {

module.exports = JSON.parse("{\"SELECT_CERT\":\"인증서를 먼저 선택해주세요.\",\"INVALID_PASSWORD\":\"인증서 비밀번호가 틀렸습니다.\",\"EMPTY_PASSWORD\":\"인증서 비밀번호를 입력하세요\",\"WRONG_DATA\":\"입력 데이터가 잘못 되었습니다.\",\"CERT_AND_KEY_MISMATCH\":\"인증서와 개인키가 일치하지 않습니다.\",\"INVALID_PEM_DATA\":\"입력 PEM 데이터가 잘못 되었습니다. 예상:{} 입력됨:{}\",\"NO_SUCH_ALG\":\"지원 되지 않는 알고리즘입니다. {}\",\"NO_SUCH_OUTPUT\":\"지원 되지 않는 인코딩 형식입니다. {}\",\"NO_SUCH_CHARSET\":\"지원 되지 않는 문자열 형식입니다. {}\",\"INVALID_KEY_LENGTH\":\"키 길이 오류. 예상:{} 입력됨:{}\",\"EMPTY_PARAM\":\"입력값이 없습니다 : {}\",\"INVALID_PARAM\":\"입력값이 잘못 되었습니다 : {}\",\"ENCRYPT_FAIL\":\"암호화에 실패하였습니다.\",\"DECRYPT_FAIL\":\"복호화에 실패하였습니다. 비밀키가 잘못 되었을 수 있습니다.\",\"NOT_SUPPORT_PDF_VIEWER\":\"해당 브라우저는 PDF 뷰어를 지원하지 않습니다. 브라우저 인증서 사용 가이드를 다운로드합니다.\",\"IS_NOT_WINDOWS\":\"해당 기능은 윈도우 운영체제에서만 사용할 수 있습니다.\",\"IS_NOT_A_FUNCTION\":\"{}에 설정된 핸들러가 'Function'이 아닙니다. \",\"NOT_ALLOWED_POLICY\":\"{}의 {} 인증서는 이 사이트에서 허용되지 않은 정책의 인증서 입니다.\",\"UNKNOWN\":\"알 수 없는 오류.\"}");

/***/ })
/******/ ]);
});