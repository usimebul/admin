"use strict";
/**
 * @constructor
 */
var html5Api = {
    cipher: undefined,
    key: undefined,
    /**
     * 인증서 정보를 가져온다. 인증서 비밀번호를 필요치 않음
     * @param {function} [callback] (Result, Error) 완료 시 호출될 콜백, Result: 인증서 정보 객체  Error: 에러미시지
     * @return {Object} 인증서 정보 객체
     */
    getWNCertInfo: function(callback) {
        var wnCertInfo = _getSelectedCertificateJSON();

        if (!wnCertInfo) {
            KICA_ALERT.error("SELECT_CERT", KICA_ERROR_MSG.get("SELECT_CERT"))
            if (callback) callback(undefined, KICA_ERROR_MSG.get("SELECT_CERT"));
            return;
        }

        if (callback !== undefined) callback(wnCertInfo);
        return wnCertInfo;
    },

    /**
     * 개인키 Random 값을 가져온다.    
     * @param {Object} [options] 선택적 파라미터 전달 객체 
     * @param {String} [options.outputEncoding='base64'] 결과 값 인코딩 형식, 'hex' | 'base64' | 'pem'
     * @param {function} callback (Result, Error) 완료 시 호출될 콜백, Result: 인코딩된 개인키 Random 값  Error: 에러미시지
     * @returns {Promise} (Result, Error), Result: 인코딩된 개인키 Random 값  Error: 에러미시지
     */
    getVIDRandom: function(options, callback) {
        var certificate = _getSelectedCertificate();
        var qlalfqjsgh = _getCertificateQlalfqjsgh();

        if (!certificate) {
            KICA_ALERT.error("SELECT_CERT", KICA_ERROR_MSG.get("SELECT_CERT"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("SELECT_CERT"));
            return;
        }

        if (!qlalfqjsgh) {
            KICA_ALERT.error("EMPTY_PASSWORD", KICA_ERROR_MSG.get("EMPTY_PASSWORD"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("EMPTY_PASSWORD"));
            return;
        }

        var op = webnpki.getVidRandom(certificate, qlalfqjsgh, options);
        if (callback) op.then(function(result) {
            KICA_ALERT.success("getVIDRandom", result);

            callback(result);
        }).catch(function(error) {
            KICA_ALERT.error(error.code, error.message);

            callback(null, error.message);
        });
        else return op;
    },

    /**
     * 신원 정보를 검증한다.
     * @param {String}} idn 신원 정보
     * @param {function} callback (Result, Error) 완료 시 호출될 콜백, Result: 검증 결과 true or false  Error: 에러미시지
     * @returns {Promise} (Result, Error), Result: 인코딩된 개인키 Random 값  Error: 에러미시지
     */
    verifyVid: function(idn, callback) {
        var certificate = _getSelectedCertificate();
        var qlalfqjsgh = _getCertificateQlalfqjsgh();

        if (!certificate) {
            KICA_ALERT.error("SELECT_CERT", KICA_ERROR_MSG.get("SELECT_CERT"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("SELECT_CERT"));
            return;
        }

        if (!qlalfqjsgh) {
            KICA_ALERT.error("EMPTY_PASSWORD", KICA_ERROR_MSG.get("EMPTY_PASSWORD"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("EMPTY_PASSWORD"));
            return;
        }

        var op = webnpki.verifyVid(certificate, idn, qlalfqjsgh);

        if (callback) op.then(function(result) {
            KICA_ALERT.success("verifyVid", result);

            callback(result);
        }).catch(function(error) {
            KICA_ALERT.error(error.code, error.message);

            callback(null, error.message);
        });
        else return op;
    },

    /**
     * PKCS#1 전자서명 
     * @param {String} message 원문
     * @param {Object} [options] 선택적 파라미터 전달 객체
     * @param {String} [options.outputEncoding='base64'] 결과 값 인코딩 형식, 'hex' | 'base64' | 'pem'
     * @param {String} [options.charset='euckr'] 문자열 인코딩 형식, 'euckr' | 'utf8'
     * @param {String} [options.digestAlg='sha256'] 해시 알고리즘, 'sha1' | 'sha256' | 'sha512'     
     * @param {function} callback (Result, Error) 완료 시 호출될 콜백, Result: PKCS#1 전자서명 값  Error: 에러미시지
     * @returns {Promise} (Result, Error), Result: PKCS#1 전자서명 값  Error: 에러미시지
     */
    p1sign: function(message, options, callback) {
        var certificate = _getSelectedCertificate();
        var qlalfqjsgh = _getCertificateQlalfqjsgh();

        if (!certificate) {
            KICA_ALERT.error("SELECT_CERT", KICA_ERROR_MSG.get("SELECT_CERT"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("SELECT_CERT"));
            return;
        }

        if (!qlalfqjsgh) {
            KICA_ALERT.error("EMPTY_PASSWORD", KICA_ERROR_MSG.get("EMPTY_PASSWORD"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("EMPTY_PASSWORD"));
            return;
        }

        var op = webnpki.signPkcs1(certificate, qlalfqjsgh, message, options);

        if (callback) op.then(function(result) {
            KICA_ALERT.success("p1sign", result);

            callback(result);
        }).catch(function(error) {
            KICA_ALERT.error(error.code, error.message);

            callback(null, error.message);
        });
        else return op;

    },

    /**
     * PKCS#7 전자서명 
     * @param {String} message 원문
     * @param {Object} [options] 선택적 파라미터 전달 객체
     * @param {String} [options.outputEncoding='base64'] 결과 값 인코딩 형식, 'hex' | 'base64' | 'pem'
     * @param {String} [options.charset='euckr'] 문자열 인코딩 형식, 'euckr' | 'utf8'
     * @param {String} [options.digestAlg='sha256'] 해시 알고리즘, 'sha1' | 'sha256' | 'sha512'     
     * @param {String} [options.authAttrs='smimesigncertv2'] Authentication Attribute 현재는 AdES S/MIME 서명만 지원, 'smimesigncertv2'
     * @param {function} callback (Result, Error) 완료 시 호출될 콜백, Result: PKCS#7 전자서명 값  Error: 에러미시지
     * @returns {Promise} (Result, Error), Result: PKCS#7 전자서명 값  Error: 에러미시지
     */
    p7sign: function(message, options, callback) {
        var certificate = _getSelectedCertificate();
        var qlalfqjsgh = _getCertificateQlalfqjsgh();

        if (!certificate) {
            KICA_ALERT.error("SELECT_CERT", KICA_ERROR_MSG.get("SELECT_CERT"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("SELECT_CERT"));
            return;
        }

        if (!qlalfqjsgh) {
            KICA_ALERT.error("EMPTY_PASSWORD", KICA_ERROR_MSG.get("EMPTY_PASSWORD"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("EMPTY_PASSWORD"));
            return;
        }

        var op = webnpki.sign(certificate, qlalfqjsgh, message, options);

        if (callback) op.then(function(result) {
            KICA_ALERT.success("p7sign", result);

            callback(result);
        }).catch(function(error) {
            KICA_ALERT.error(error.code, error.message);

            callback(null, error.message);
        });
        else return op;
    },

    /**
     * PKCS#7 서명 후 전자봉투 한다.
     * @param {String|String[]} serverCert 수신자 인증서 문자열 혹은 문자열의 배열. (Hex or Base64 or PEM 문자열)     
     * @param {String} message 원문
     * @param {Object} [options] 선택적 파라미터 전달 객체
     * @param {String} [options.outputEncoding='base64'] 결과 값 인코딩 형식, 'hex' | 'base64' | 'pem'
     * @param {String} [options.charset='euckr'] 문자열 인코딩 형식, 'euckr' | 'utf8'
     * @param {String} [options.digestAlg='sha256'] 해시 알고리즘, 'sha1' | 'sha256' | 'sha512'     
     * @param {String} [options.cipherAlg='seedCBC'] 암호화 알고리즘, 'aes128-CBC' | 'aes192-CBC' | 'aes256-CBC' | 'seedCBC'
     * @param {String} [options.authAttrs='smimesigncertv2'] Authentication Attribute 현재는 AdES S/MIME 서명만 지원, 'smimesigncertv2'
     * @param {function} callback (Result, Error) 완료 시 호출될 콜백, Result: 전자봉투된 PKCS#7 전자서명 값  Error: 에러미시지
     * @returns {Promise} (Result, Error), Result: 전자봉투된 PKCS#7 전자서명 값  Error: 에러미시지
     */
    signedAndEnvelop: function(serverCert, message, options, callback) {
        var certificate = _getSelectedCertificate();
        var qlalfqjsgh = _getCertificateQlalfqjsgh();

        if (!certificate) {
            KICA_ALERT.error("SELECT_CERT", KICA_ERROR_MSG.get("SELECT_CERT"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("SELECT_CERT"));
            return;
        }

        if (!qlalfqjsgh) {
            KICA_ALERT.error("EMPTY_PASSWORD", KICA_ERROR_MSG.get("EMPTY_PASSWORD"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("EMPTY_PASSWORD"));
            return;
        }

        var op = webnpki.signAndEnvelop(serverCert, certificate, qlalfqjsgh, message, options);

        if (callback) op.then(function(result) {
            KICA_ALERT.success("signedAndEnvelop", result);

            callback(result);
        }).catch(function(error) {
            KICA_ALERT.error(error.code, error.message);

            callback(null, error.message);
        });
        else return op;
    },

    /**
     * PKCS#7 전자봉투 한다.
     * @param {String|String[]} serverCert 수신자 인증서 문자열 혹은 문자열의 배열. (Hex or Base64 or PEM 문자열)     
     * @param {String} message 원문
     * @param {Object} [options] 선택적 파라미터 전달 객체
     * @param {String} [options.outputEncoding='base64'] 결과 값 인코딩 형식, 'hex' | 'base64' | 'pem'
     * @param {String} [options.charset='euckr'] 문자열 인코딩 형식, 'euckr' | 'utf8'
     * @param {String} [options.cipherAlg='seedCBC'] 암호화 알고리즘, 'aes128-CBC' | 'aes192-CBC' | 'aes256-CBC' | 'seedCBC'     
     * @param {function} callback (Result, Error) 완료 시 호출될 콜백, Result: 전자봉투된 PKCS#7 메시지  Error: 에러미시지
     * @returns {Promise} (Result, Error), Result: 전자봉투된 PKCS#7 메시지  Error: 에러미시지
     */
    envelop: function(serverCert, message, options, callback) {
        var op = webnpki.envelop(serverCert, message, options);

        if (callback) op.then(function(result) {
            KICA_ALERT.success("envelop", result);

            callback(result);
        }).catch(function(error) {
            KICA_ALERT.error(error.code, error.message);

            callback(null, error.message);
        });
        else return op;
    },

    /**
     * PKCS#7 추가 서명
     * @param {String} signedData PKCS#7 전자서명문 
     * @param {Object} [options] 선택적 파라미터 전달 객체
     * @param {String} [options.outputEncoding='base64'] 결과 값 인코딩 형식, 'hex' | 'base64' | 'pem'
     * @param {String} [options.charset='euckr'] 문자열 인코딩 형식, 'euckr' | 'utf8'     
     * @param {String} [options.digestAlg='sha256'] 해시 알고리즘, 'sha1' | 'sha256' | 'sha512'     
     * @param {String} [options.authAttrs='smimesigncertv2'] Authentication Attribute 현재는 AdES S/MIME 서명만 지원, 'smimesigncertv2'
     * @param {function} callback (Result, Error) 완료 시 호출될 콜백, Result: PKCS#7 전자서명 값  Error: 에러미시지
     * @returns {Promise} (Result, Error), Result: PKCS#7 전자서명 값  Error: 에러미시지
     */
    addSign: function(signedData, options, callback) {
        var certificate = _getSelectedCertificate();
        var qlalfqjsgh = _getCertificateQlalfqjsgh();

        if (!certificate) {
            KICA_ALERT.error("SELECT_CERT", KICA_ERROR_MSG.get("SELECT_CERT"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("SELECT_CERT"));
            return;
        }

        if (!qlalfqjsgh) {
            KICA_ALERT.error("EMPTY_PASSWORD", KICA_ERROR_MSG.get("EMPTY_PASSWORD"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("EMPTY_PASSWORD"));
            return;
        }

        var op;
        // 내부에서 예외 처리 안되어 있어서, 
        try {
            op = webnpki.addSign(certificate, qlalfqjsgh, signedData, options);
        } catch (error) {
            KICA_ALERT.error(error.code, error.message);
            callback(null, error.message);
            return
        }

        if (callback) op.then(function(result) {
            KICA_ALERT.success("addSign", result);

            callback(result);
        }).catch(function(error) {
            KICA_ALERT.error(error.code, error.message);

            callback(null, error.message);
        });
        else return op;
    },

    /**
     * PKCS#7 Detached 전자서명 값에 원문 추가
     * @param {String} detachedData PKCS#7 Detached 전자서명 값 (Hex or Base64 or PEM)
     * @param {String} message 원문
     * @param {Object} [options] 선택적 파라미터 전달 객체
     * @param {String} [options.outputEncoding='base64'] 결과 값 인코딩 형식, 'hex' | 'base64' | 'pem'
     * @param {String} [options.charset='euckr'] 문자열 인코딩 형식, 'euckr' | 'utf8'     
     * @param {String} [options.digestAlg='sha256'] 해시 알고리즘, 'sha1' | 'sha256' | 'sha512'     
     * @param {String} [options.authAttrs='smimesigncertv2'] Authentication Attribute 현재는 AdES S/MIME 서명만 지원, 'smimesigncertv2'
     * @param {function} callback (Result, Error) 완료 시 호출될 콜백, Result: PKCS#7 전자서명 값  Error: 에러미시지
     * @returns {Promise} (Result, Error), Result: PKCS#7 전자서명 값  Error: 에러미시지
     */
    addSignDetached: function(signedData, message, options, callback) {
        var certificate = _getSelectedCertificate();
        var qlalfqjsgh = _getCertificateQlalfqjsgh();

        if (!certificate) {
            KICA_ALERT.error("SELECT_CERT", KICA_ERROR_MSG.get("SELECT_CERT"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("SELECT_CERT"));
            return;
        }

        if (!qlalfqjsgh) {
            KICA_ALERT.error("EMPTY_PASSWORD", KICA_ERROR_MSG.get("EMPTY_PASSWORD"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("EMPTY_PASSWORD"));
            return;
        }

        var op;

        try {
            op = webnpki.addSignDetached(certificate, qlalfqjsgh, signedData, message, options);
        } catch (error) {
            KICA_ALERT.error(error.code, error.message);
            callback(null, error.message);
            return
        }

        if (callback) op.then(function(result) {
            KICA_ALERT.success("addSignDetached", result);

            callback(result);
        }).catch(function(error) {
            KICA_ALERT.error(error.code, error.message);

            callback(null, error.message);
        });
        else return op;
    },

    /**
     * PKCS#7 Detached 전자서명 값 생성     
     * @param {String} message 원문
     * @param {Object} [options] 선택적 파라미터 전달 객체
     * @param {String} [options.outputEncoding='base64'] 결과 값 인코딩 형식, 'hex' | 'base64' | 'pem'
     * @param {String} [options.charset='euckr'] 문자열 인코딩 형식, 'euckr' | 'utf8'     
     * @param {String} [options.digestAlg='sha256'] 해시 알고리즘, 'sha1' | 'sha256' | 'sha512'     
     * @param {String} [options.authAttrs='smimesigncertv2'] Authentication Attribute 현재는 AdES S/MIME 서명만 지원, 'smimesigncertv2'
     * @param {function} callback (Result, Error) 완료 시 호출될 콜백, Result: PKCS#7 Detached 전자서명 값  Error: 에러미시지
     * @returns {Promise} (Result, Error), Result: PKCS#7 Detached 전자서명 값  Error: 에러미시지
     */
    signDetached: function(message, options, callback) {
        var certificate = _getSelectedCertificate();
        var qlalfqjsgh = _getCertificateQlalfqjsgh();

        if (!certificate) {
            KICA_ALERT.error("SELECT_CERT", KICA_ERROR_MSG.get("SELECT_CERT"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("SELECT_CERT"));
            return;
        }

        if (!qlalfqjsgh) {
            KICA_ALERT.error("EMPTY_PASSWORD", KICA_ERROR_MSG.get("EMPTY_PASSWORD"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("EMPTY_PASSWORD"));
            return;
        }

        var op = webnpki.signDetached(certificate, qlalfqjsgh, message, options);

        if (callback) op.then(function(result) {
            KICA_ALERT.success("signDetached", result);

            callback(result);
        }).catch(function(error) {
            KICA_ALERT.error(error.code, error.message);

            callback(null, error.message);
        });
        else return op;
    },



    /**
     * 암호화된 개인키를 가져온다.
     * @param {function} callback (Result, Error) 완료 시 호출될 콜백, Result: 암호화된 개인키 Error: 에러미시지
     * @returns {Promise} (Result, Error), Result: 암호화된 개인키  Error: 에러미시지
     */
    getEncryptedPrivateKeyInfo: function(callback) {
        var certificate = _getSelectedCertificate();

        if (!certificate) {
            KICA_ALERT.error("SELECT_CERT", KICA_ERROR_MSG.get("SELECT_CERT"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("SELECT_CERT"));
            return;
        }

        var op = webnpki.getEncryptedPrivateKeyInfo(certificate);

        if (callback) op.then(function(result) {
            KICA_ALERT.success("verifyVid", result);

            callback(result);
        }).catch(function(error) {
            KICA_ALERT.error(error.code, error.message);

            callback(null, error.message);
        });
        else return op;
    },


    /**
     * 개인키의 Random 값을 공개키로 암호화하여 가져온다.     
     * @param {WNCertificate|String} serverCert 공개키  
     * @param {Object} [options] 선택적 파라미터 전달 객체
     * @param {String} [options.outputEncoding='base64'] 결과 값 인코딩 형식, 'hex' | 'base64' | 'pem'
     * @param {String} [options.paddingAlg='RSAES-PKCS1-V1_5'] 패딩 알고리즘, 'RSAES-OAEP'|'RSAES-PKCS1-V1_5'     
     * @param {function} callback (Result, Error) 완료 시 호출될 콜백, Result: 암호화된 개인키 Random 값 Error: 에러미시지
     * @returns {Promise} (Result, Error), Result: 암호화된 개인키 Random 값  Error: 에러미시지
     */
    getEncryptedVidRandom: function(serverCert, options, callback) {
        var certificate = _getSelectedCertificate();
        var qlalfqjsgh = _getCertificateQlalfqjsgh();

        if (!certificate) {
            KICA_ALERT.error("SELECT_CERT", KICA_ERROR_MSG.get("SELECT_CERT"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("SELECT_CERT"));
            return;
        }

        if (!qlalfqjsgh) {
            KICA_ALERT.error("EMPTY_PASSWORD", KICA_ERROR_MSG.get("EMPTY_PASSWORD"))

            if (callback) callback(undefined, KICA_ERROR_MSG.get("EMPTY_PASSWORD"));
            return;
        }

        var paddingAlg = options.paddingAlg || "RSAES-PKCS1-V1_5";

        var op = webnpki.getEncryptedVidRandom(certificate, qlalfqjsgh, serverCert, paddingAlg, options);

        if (callback) op.then(function(result) {
            KICA_ALERT.success("verifyVid", result);

            callback(result);
        }).catch(function(error) {
            KICA_ALERT.error(error.code, error.message);

            callback(null, error.message);
        });
        else return op;
    },



    /**
     * 해시를 생성한다.
     * @param {String} hashAlg 해시 알고리즘, "SHA1" | "SHA256" | "SHA384" | "SHA512" | "MD5"
     * @param {String|Uint8Array} message 원문, 문자열 혹은 바이트 배열     
     * @param {String} [outputEncoding='base64'] 결과 값의 인코딩 형식, 'hex' | 'base64'
     * @return {String} 해시 값
     */
    digest: function(hashAlg, message, outputEncoding) {
        if (!hashAlg && !message) {
            console.error("Some reqruied arguments are not passed.");
            return "Some reqruied arguments are not passed.";
        }

        // get hash value.
        var hashValue = webnpki.crypto.digest(hashAlg, message);

        // encode hash value. default is 'base64'
        if (outputEncoding === 'hex') {
            hashValue = webnpki.bin.encodeHex(hashValue);
        } else {
            hashValue = webnpki.bin.encodeBase64(hashValue);
        }

        return hashValue;
    },

    /**
     * 대칭키 암호화
     * @param {String} alg 대칭키 알고리즘, "SEED" | "AES" | "AES256"
     * @param {String} mode 블록 암호화 모드, "CBC" | "ECB"
     * @param {String} message 원문
     * @param {Object} [options] 선택적 파라미터 전달 객체
     * @param {String} [options.key] 대칭키 설정 값
     * @param {String} [options.iv]  Initial Vector 설정 값
     * @param {String} [options.outputEncoding] 결과 값 인코딩 형식, 'hex' | 'base64'   
     * @param {String} [options.charset=euckr] 문자열 인코딩 형식, 'utf8' | 'euckr'
     * @return {String} 대칭키 암호문
     */
    symmetricEncrypt: function(alg, mode, message, options) {
        if (!alg && !mode && !message) {
            console.error("Some reqruied arguments are not passed.");
            return;
        }

        // create cipher object
        html5Api.cipher = webnpki.crypto.createCipher(alg, mode);

        if (options.key) {
            html5Api.cipher.init(true, webnpki.bin.decodeHex(options.key), webnpki.bin.decodeHex(options.iv));
        } else if (html5Api.key) {
            html5Api.cipher.init(true, html5Api.key);
        } else {
            html5Api.cipher.init(true);
        }

        message = webnpki.bin.decodeString(message, options.charset);

        // encrypt message
        var encryptedMessage = html5Api.cipher.final(message);

        // get the key to reuse it.
        html5Api.key = html5Api.cipher.getKey();

        // encoding the result, default is base64.
        if (options.outputEncoding === 'hex') {
            encryptedMessage = webnpki.bin.encodeHex(encryptedMessage);
        } else {
            encryptedMessage = webnpki.bin.encodeBase64(encryptedMessage);
        }

        return encryptedMessage;
    },

    /**
     * 대칭키 복호화
     * @param {String} alg 대칭키 알고리즘, "SEED" | "AES" | "AES256"
     * @param {String} mode 블록 암호화 모드, "CBC" | "ECB"
     * @param {String} cipherMessage 대칭키 암호문
     * @param {Object} [options] 선택적 파라미터 전달 객체
     * @param {String} [options.key] 대칭키 설정 값
     * @param {String} [options.iv]  Initial Vector 설정 값
     * @param {String} [options.outputEncoding] 결과 값 인코딩 형식, 'hex' | 'base64'   
     * @param {String} [options.charset=euckr] 문자열 인코딩 형식, 'utf8' | 'euckr'
     * @return {String} 원문
     */
    symmetricDecrypt: function(alg, mode, cipherMessage, options) {
        if (!alg && !mode && !cipherMessage) {
            console.error("Some reqruied arguments are not passed.");
            return "Some reqruied arguments are not passed.";
        }

        // create cipher object.
        html5Api.cipher = webnpki.crypto.createCipher(alg, mode);

        if (options.key) {
            var iv = undefined;
            if (options.iv)
                iv = webnpki.bin.decodeHex(options.iv);


            html5Api.cipher.init(false, webnpki.bin.decodeHex(options.key), iv);
        } else if (html5Api.key) {
            var iv = undefined;
            if (options.iv)
                iv = webnpki.bin.decodeHex(options.iv);

            html5Api.cipher.init(false, html5Api.key, iv);
        } else {
            console.error('대칭키 암호화를 먼저 진행하거나, 대칭키를 정의해주세요.');
            return;
        }

        // decode the cipherMessage
        if (options.outputEncoding === 'hex') {
            cipherMessage = webnpki.bin.decodeHex(cipherMessage);
        } else {
            cipherMessage = webnpki.bin.decodeBase64(cipherMessage);
        }

        // decrypt cipherMessage.
        var decryptedMessage = html5Api.cipher.final(cipherMessage);

        // encode decryptedMessage to String format.
        decryptedMessage = webnpki.bin.encodeString(decryptedMessage, options.charset);

        return decryptedMessage;
    },

    /**
     * 대칭키 암호화에 사용되었던 KEY를 RSA 암호화해서 가져온다.     
     * @param {String} serverCert 공개키
     * @param {String} [outputEncoding='base64'] 결과 값의 인코딩 형식, 'hex' | 'base64'
     * @return 인코딩된 암호화 대칭키
     */
    getEncryptedKey: function(serverCert, outputEncoding) {
        var encryptedKey = html5Api.cipher.getEncryptedKey(serverCert);
        if (outputEncoding === 'hex') {
            encryptedKey = webnpki.bin.encodeHex(encryptedKey)
        } else {
            encryptedKey = webnpki.bin.encodeBase64(encryptedKey);
        }

        return encryptedKey
    },

    /**
     * RSA 암호화를 수행한다.
     * @param {WNCertificate|String} key 공개키 혹은 인증서 객체. String의 경우 Hex or Base64 or PEM
     * @param {String} message 원문
     * @param {String} paddingAlg 패딩 알고리즘, 'RSAES-OAEP'| 'RSAES-PKCS1-V1_5'
     * @param {String} [outputEncoding='base64'] 결과 값 인코딩 형식, 'hex' | 'base64'
     * @return {String} 암호화 결과값.
     */
    rsaEncrypt: function(key, message, paddingAlg, outputEncoding) {
        if (!key && !message && !paddingAlg) {
            console.error("Some reqruied arguments are not passed.");
            return "Some reqruied arguments are not passed.";
        }

        // decode Message
        message = webnpki.bin.decodeHex(message);

        // encrypt message
        var encryptedMessage = webnpki.crypto.rsaEncrypt(key, message, paddingAlg)

        // encode encryptedMessage
        if (outputEncoding === 'hex') {
            encryptedMessage = webnpki.bin.encodeHex(encryptedMessage);
        } else {
            encryptedMessage = webnpki.bin.encodeBase64(encryptedMessage);
        }

        return encryptedMessage
    },

    /**
     * RSA 복호화를 수행한다.
     * @param {WNCertificate|String} key 개인키 혹은 인증서 객체. String의 경우 Hex or Base64 or PEM
     * @param {String} cipherMessage 암호문
     * @param {String} paddingAlg 패딩 알고리즘, 'RSAES-OAEP'| 'RSAES-PKCS1-V1_5'
     * @param {String} [outputEncoding='base64'] 결과 값 인코딩 형식, 'hex' | 'base64'
     * @return {String} 원문
     */
    rsaDecrypt: function(key, cipherMessage, paddingAlg, encode) {
        if (!key && !cipherMessage && !paddingAlg) {
            console.error("Some reqruied arguments are not passed.");
            return "Some reqruied arguments are not passed.";
        }

        // decode cipherMessage
        if (encode === 'hex') {
            cipherMessage = webnpki.bin.decodeHex(cipherMessage);
        } else {
            cipherMessage = webnpki.bin.decodeBase64(cipherMessage);
        }

        // decrypt message
        var decryptedMessage = webnpki.crypto.rsaDecrypt(key, cipherMessage, paddingAlg)

        // encode cipherMessage
        decryptedMessage = webnpki.bin.encodeString(decryptedMessage);

        return decryptedMessage
    },

    /**
     * Hexadecimal 문자열로 인코딩한다.
     * @param {Uint8Array} arr 인코딩 할 배열
     * @returns {String} Hexadecimal 문자열
     */
    encodeHex: function(arr) {
        if (arr === undefined) {
            console.error("The parametor 'arr' is undefined.");
            return;
        }

        return webnpki.bin.encodeHex(arr)
    },

    /**
     * Hexadecimal 문자열을 디코딩한다.
     * @param {String} str 디코딩할 문자열
     * @returns {Uint8Array} 디코딩 된 배열
     */
    decodeHex: function(str) {
        if (str === undefined) {
            console.error("The parametor 'str' is undefined.");
            return;
        }

        return webnpki.bin.decodeHex(str)
    },

    /**
     * Base64 문자열로 인코딩한다.
     * @param {Uint8Array} arr 인코딩 할 배열
     * @returns {String} Base64 문자열
     */
    encodeBase64: function(arr) {
        if (arr === undefined) {
            console.error("The parametor 'arr' is undefined.");
            return;
        }

        return webnpki.bin.encodeBase64(arr)
    },

    /**
     * Base64 문자열을 디코딩한다.
     * @param {String} str Base64 문자열
     * @returns {Uint8Array} 디코딩 된 배열
     */
    decodeBase64: function(str) {
        if (str === undefined) {
            console.error("The parametor 'str' is undefined.");
            return;
        }

        return webnpki.bin.decodeBase64(str)
    },

    /**
     * 문자열을 디코딩한다.
     * @param {String} str Base64 문자열
     * @param {String} charset 문자열 인코딩 형식
     * @returns {Uint8Array} 디코딩 된 배열
     */
    encodeString: function(arr, charset) {
        if (arr === undefined) {
            console.error("The parametor 'arr' is undefined.");
            return;
        }

        if (charset === undefined) {
            console.error("The parametor 'charset' is undefined.");
            return;
        }

        return webnpki.bin.encodeString(arr, charset)
    },

    /**
     * 문자열을 디코딩한다.
     * @param {String} str Base64 문자열
     * @param {String} charset 문자열 인코딩 형식
     * @returns {Uint8Array} 디코딩 된 배열
     */
    decodeString: function(str, charset) {
        if (str === undefined) {
            console.error("The parametor 'arr' is undefined.");
            return;
        }

        if (charset === undefined) {
            console.error("The parametor 'charset' is undefined.");
            return;
        }

        return webnpki.bin.decodeString(str, charset)
    }
}

var html5DialogApi = {
    getWNCertInfo: function(callback) {
        $('#select-certificate-confirm').on('click', function() {
            html5Api.getWNCertInfo(callback);
        });

        KICA_DIALOG.openSelectCertificateDialog();

        _disableQlalfqjsghInput();
    },

    getVIDRandom: function(options, callback) {
        $('#select-certificate-confirm').on('click', function() {
            html5Api.getVIDRandom(options, callback);
        });

        KICA_DIALOG.openSelectCertificateDialog();
    },

    verifyVid: function(idn, callback) {
        $('#select-certificate-confirm').on('click', function() {
            html5Api.verifyVid(idn, callback);
        });

        KICA_DIALOG.openSelectCertificateDialog();
    },

    p1sign: function(message, options, callback) {
        $('#select-certificate-confirm').on('click', function() {
            html5Api.p1sign(message, options, callback);
        });

        KICA_DIALOG.openSelectCertificateDialog();
    },

    p7sign: function(message, options, callback) {
        $('#select-certificate-confirm').on('click', function() {
            html5Api.p7sign(message, options, callback);
        });

        KICA_DIALOG.openSelectCertificateDialog();
    },

    signedAndEnvelop: function(serverCert, message, options, callback) {
        $('#select-certificate-confirm').on('click', function() {
            html5Api.signedAndEnvelop(serverCert, message, options, callback);
        });

        KICA_DIALOG.openSelectCertificateDialog();
    },

    addSign: function(signedData, options, callback) {
        $('#select-certificate-confirm').on('click', function() {
            html5Api.addSign(signedData, options, callback);
        });

        KICA_DIALOG.openSelectCertificateDialog();
    },

    addSignDetached: function(signedData, message, options, callback) {
        $('#select-certificate-confirm').on('click', function() {
            html5Api.addSignDetached(signedData, message, options, callback);
        });

        KICA_DIALOG.openSelectCertificateDialog();
    },

    getEncryptedPrivateKeyInfo: function(callback) {
        $('#select-certificate-confirm').on('click', function() {
            html5Api.getEncryptedPrivateKeyInfo(callback);
        });

        KICA_DIALOG.openSelectCertificateDialog();

        _disableQlalfqjsghInput();
    },

    getEncryptedVidRandom: function(serverCert, algorithm, options, callback) {
        $('#select-certificate-confirm').on('click', function() {
            html5Api.getEncryptedVidRandom(serverCert, algorithm, options, callback);
        });

        KICA_DIALOG.openSelectCertificateDialog();
    },

    signDetached: function(message, options, callback) {
        $('#select-certificate-confirm').on('click', function() {
            html5Api.signDetached(message, options, callback);
        });

        KICA_DIALOG.openSelectCertificateDialog();
    }
}

var KICA_MANAGEMENT_API = {
    /**
     * PKCS#12 비밀번호 변경
     * @param {Uint8Array} pkcs12Buffer 원문
     * @param {String} password 기존 PKCS#12의 비밀번호.
     * @param {String} newPassword 새로 사용할 비밀번호
     * @param {function} callback (Result, Error) 완료 시 호출될 콜백, Result: PKCS#12  Error: 에러미시지
     * @returns {Promise} (Result, Error), Result: PKCS#12  Error: 에러미시지
     */
    changePKCS12Password: function(pkcs12Buffer, password, newPassword, callback) {
        webnpki.changePKCS12Password(pkcs12Buffer, password, newPassword, callback);
    },    
}

function _getSelectedCertificate() {
    return $('#cert-list .active').data('certificate');
}


function _getCertificateQlalfqjsgh() {
    if (webnpki_config.keyboardSecurity === "kings") {
        return $('#qlalfqjsgh').data('kings');
    } else {
        return $('#qlalfqjsgh').val();
    }
}

function _getSelectedCertificateJSON() {
    return $('#cert-list .active').data('certificateJSON');
}

function _disableQlalfqjsghInput() {
    var qlalfqjsgh = $('#qlalfqjsgh');
    qlalfqjsgh.prop('disabled', true);
    qlalfqjsgh.prop('placeholder', KICA_CORPUS.CERT_PWD_DISABLED_PLACEHOLDER);
}