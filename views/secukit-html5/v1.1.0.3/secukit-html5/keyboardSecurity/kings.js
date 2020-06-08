// submit callback 함수
var submitCallBack = function(status) {
    if (status) {
        vKeypadGetValue("knc_flag_1", decryptCallback);
    } else {
        console.error("Kings keyboard security error.");
    }
}

// decrypt callback 함수
var decryptCallback = function(data) {
	if(data === null || data === undefined){
		 console.error("kings keyboardsecurity descryption error.")
	}
    $('#qlalfqjsgh').data('kings', data);
    kings.callback();
}

var kings = {
    callback: undefined,

    isInstalled: false,

    init: function() {
        vKeypadGlobal.setDefaultServletURL('servlets/vKeypad.do');
        vKeypadGlobal.newInstance(formPasswordE2EMax8, formPasswordE2EMax8.PasswordE2EMax8, null, 'KEYBOARD', 20, null);
        KOS.registerElement($("#qlalfqjsgh")[0], "none");
        vKeypadGlobal.setOptionAll('submitCallBack', submitCallBack);
        vKeypadGlobal.setOptionAll('submitCallBackUrl', 'DecryptCallBack.jsp');
        vKeypadGlobal.setOptionAll('autoStart', true);
    },

    decryptData: function() {
        if ($('#vkeyboard-toggle').hasClass('active')) {            
            vKeypadGlobal.submitData(formPasswordE2EMax8.PasswordE2EMax8);
        } else {            
            getOrgCallback($("#qlalfqjsgh")[0], decryptCallback);
        }        
    },

    openDialog: function() {
        $('#select-certificate-confirm').on('click', function() {
            kings.decryptData();
        });
        KICA_DIALOG.openSelectCertificateDialog();
    },
    eventHandlers: {
        INITIALIZING: function() {},
        READY: function() {
            // 보안 모듈 준비 완료
            kings.isInstalled = true;
        },
        NOT_INSTALLED: function() {
            kings.isInstalled = false;
        },
        NEED_UPDATE: function() {},
        ERROR: function(errorCode) {}
    }
}