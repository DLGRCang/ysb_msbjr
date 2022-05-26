function ObjToForm(obj) {
    var formStr;
    for (var name in obj) {
        if (formStr == undefined || formStr == null) {
            formStr = name + '=' + obj[name];
        } else {
            formStr += '&' + name + '=' + obj[name];
        }
    }
    return formStr;
}

/**
 * 发起get请求，普通form表单格式
 * @param url 地址
 * @param dataObj 请求对象
 * @param successCallback 请求成功回调
 * @param errorCallback 请求失败回调
 * @param beforeSendCallback 发送前执行
 * @param completeCallback 发送后执行
 */
function doGetForm(url, dataObj, args, successCallback, errorCallback, beforeCallback, completeCallback) {
    dataObj.tm = new Date().getTime();
    $.ajax({
        url: url,
        type: 'GET',
        contentType: "application/json;charset=utf-8",
        data: (dataObj == undefined || dataObj == null) ? {} : ObjToForm(dataObj),
        success: function (data, status, XMLHttpRequest) {
            var responseCode = XMLHttpRequest.status;
            successCallback(responseCode, data, args);
        },
        error: function (XMLHttpRequest) {
            var responseCode = XMLHttpRequest.status;
            if (errorCallback != undefined && errorCallback != null && typeof (errorCallback) == 'function') {
                errorCallback(responseCode);
            }
        },
        beforeSend: function (XMLHttpRequest) {
            if (beforeCallback != undefined && beforeCallback != null && typeof (beforeCallback) == 'function') {
                beforeCallback(XMLHttpRequest);
            }
        },
        complete: function (XMLHttpRequest, status) {
            if (completeCallback != undefined && completeCallback != null && typeof (completeCallback) == 'function') {
                completeCallback(XMLHttpRequest, status);
            }
        }
    });
};

function doGetFormToken(url, dataObj, token,  successCallback, errorCallback) {
    $.ajax({
        url: url,
        type: 'GET',
        headers: {
            "token": token
        },
        contentType: "application/json;charset=utf-8",
        data: (dataObj == undefined || dataObj == null) ? {} : ObjToForm(dataObj),
        success: function(data, status, XMLHttpRequest) {
            var responseCode = XMLHttpRequest.status;
            successCallback(responseCode, data);
        },
        error: function(XMLHttpRequest) {
            if (errorCallback != undefined && errorCallback != null && typeof(errorCallback) ==
                'function') {
                errorCallback(XMLHttpRequest);
            }
        }
    });
};

/**
 * 发起post请求
 * @param url 请求地址
 * @param dataObj 请求对象
 * @param successCallback 请求成功回调
 * @param errorCallback 请求失败回调
 * @param beforeSendCallback 发送前执行
 * @param completeCallback 发送后执行
 */
function doPostJson(url, dataObj, args, successCallback, errorCallback, beforeCallback, completeCallback, isJson) {
    $.ajax({
        url: url,
        type: 'POST',
        contentType: "application/json;charset=utf-8",
        data: (dataObj == undefined || dataObj == null) ? {} : JSON.stringify(dataObj),
        success: function (data, status, XMLHttpRequest) {
            var responseCode = XMLHttpRequest.status;
            successCallback(responseCode, data, args);
        },
        error: function (XMLHttpRequest) {
            var responseCode = XMLHttpRequest.status;
            if (errorCallback != undefined && errorCallback != null && typeof (errorCallback) == 'function') {
                errorCallback(responseCode);
            }
        },
        beforeSend: function (XMLHttpRequest) {
            if (beforeCallback != undefined && beforeCallback != null && typeof (beforeCallback) == 'function') {
                beforeCallback(XMLHttpRequest);
            }
        },
        complete: function (XMLHttpRequest, status) {
            if (completeCallback != undefined && completeCallback != null && typeof (completeCallback) == 'function') {
                completeCallback(XMLHttpRequest, status);
            }
        }
    });
};

/**
 * 发起post请求固定请求头
 * @param url 请求地址
 * @param dataObj 请求对象
 * @param successCallback 请求成功回调
 * @param errorCallback 请求失败回调
 */
function postJson(url, dataObj,token,successCallback, errorCallback) {

    $.ajax({
        url: url,
        type: 'POST',
		headers:{"token":token},
        contentType: "application/json;charset=utf-8",
        data: (dataObj == undefined || dataObj == null) ? {} : JSON.stringify(dataObj),
        success: function (data, status, XMLHttpRequest) {
			console.log("--------------")
			console.log(data)
			console.log(XMLHttpRequest)
            var responseCode = XMLHttpRequest.status;
            successCallback(responseCode, data);
        },
        error: function (XMLHttpRequest) {
            if (errorCallback != undefined && errorCallback != null && typeof (errorCallback) == 'function') {
                errorCallback(XMLHttpRequest);
            }
        }
    });
};

