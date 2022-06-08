/**
 * 工具类
 */
// import Vue from 'vue'
import CryptoJS from 'crypto-js'
const Base64 = require('js-base64').Base64
    // 电话参数加密 解密   （这个需要和后端约定加密解密参数）
var aesvikey = "2qwUpcH1uLPPHe9o";
var aeskey = CryptoJS.enc.Utf8.parse(aesvikey);
var aesiv = CryptoJS.enc.Utf8.parse(aesvikey);
//解密
export function decrypt(word) {
    word = Base64.decode(word);
    var decryptStr = CryptoJS.AES.decrypt(word, aeskey, {
        iv: aesiv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding,
    });
    return decryptStr.toString(CryptoJS.enc.Utf8);
}
//加密
export function encrypt(word) {
    var encryptStr = CryptoJS.AES.encrypt(word, aeskey, {
        iv: aesiv,
        mode: CryptoJS.mode.CBC
    });
    return encryptStr;
}