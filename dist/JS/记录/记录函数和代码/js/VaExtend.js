
/*// 身份证号码验证
jQuery.validator.addMethod("isIdCardNo", function(value, element) {
    return this.optional(element) || isIdCardNo(value);
}, "请正确输入您的身份证号码");*/

 // 身份证号码验证
jQuery.validator.addMethod("isIdCardNo", function(value, element) { 
  //var idCard = /^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/;   
  return this.optional(element) || isIdCardNo(value);    
}, "请输入正确的身份证号码。"); 

// 手机号码验证
jQuery.validator.addMethod("isMobile", function(value, element) {
    var length = value.length;
    var mobile = /^((\+?86)|(\(\+86\)))?(13[0123456789][0-9]{8}|15[012356789][0-9]{8}|18[0123456789][0-9]{8}|147[0-9]{8}|1349[0-9]{7}|17[0123456789][0-9]{8})$/
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请正确填写您的手机号码");

// 电话号码验证
jQuery.validator.addMethod("isTel", function(value, element) {
    var tel = /^d{3,4}-?d{7,9}$/; //电话号码格式010-12345678
    return this.optional(element) || (tel.test(value));
}, "请正确填写您的电话号码");

// 联系电话(手机/电话皆可)验证
jQuery.validator.addMethod("isPhone", function(value,element) {
    var length = value.length;
    var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+d{8})$/;
    var tel = /^d{3,4}-?d{7,9}$/;
    return this.optional(element) || (tel.test(value) || mobile.test(value));

}, "请正确填写您的联系电话");
// 汉字
jQuery.validator.addMethod("chcharacter", function(value, element) {
    var tel = /^[u4e00-u9fa5]+$/;
    return this.optional(element) || (tel.test(value));
}, "请输入汉字");

// 请输入正确的统一社会信用代码
jQuery.validator.addMethod("isCode18", function(value, element) {
    var tel = /^[0-9A-Za-z]{18}$/; 
    return this.optional(element) || (tel.test(value));
}, "请输入正确的18位统一社会信用代码");

// 请输入正确的统一社会信用代码
jQuery.validator.addMethod("isCode15", function(value, element) {
    var tel = /^[0-9A-Za-z]{15}$/; 
    return this.optional(element) || (tel.test(value));
}, "请输入正确的15位统一社会信用代码");

// 字段唯一性处理
jQuery.validator.addMethod("reCheck", function(value, element) {
    var deferred = $.Deferred();//创建一个延迟对象
    $.ajax({
        url:server_url + '/crm/user/user/check.json',
        data:{'upm':value},
        async:false,    
        dataType:"json",
        success:function(res) {
            if (res.data==1) {
                deferred.reject();//不通过
            } else {
                deferred.resolve();//通过
            }
        }
    });
    //deferred.state()有3个状态:pending:还未结束,rejected:失败,resolved:成功
    return deferred.state() == "resolved" ? true : false;
}, "该字段已被占用，请重新输入！");



var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"} 
function isIdCardNo(num) {
    var factorArr = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1);
    var parityBit=new Array('1','0','X','9','8','7','6','5','4','3','2');
    var varArray = new Array();
    var intValue;
    var lngProduct = 0;
    var intCheckDigit;
    var intStrLen = num.length;
    var idNumber = num;
    // initialize
        if ((intStrLen != 15) && (intStrLen != 18)) {
            return false;
        }
        if(aCity[parseInt(num.substr(0,2))]==null) return false;
        // check and set value
        for(i=0;i<intStrLen;i++) {
            varArray[i] = idNumber.charAt(i);
            if ((varArray[i] < '0' || varArray[i] > '9') && (i != 17)) {
                return false;
            } else if (i < 17) {
                varArray[i] = varArray[i] * factorArr[i];
            
        }
        if(intStrLen == 18) {
            var date8 = idNumber.substring(6,14);
            if (isDate8(date8) == false) {
                return false;
            }
            for(i=0;i<17;i++) {
                lngProduct = lngProduct + varArray[i];
            }
            intCheckDigit = parityBit[lngProduct % 11];
            if (varArray[17] != intCheckDigit) {
                return false;
            }
        }
        else{ 
            var date6 = idNumber.substring(6,12);
            if (isDate6(date6) == false) {
                return false;
                }
            }
            return true;
        }
}

function isDate6(sDate) {
    if(!/^[0-9]{6}$/.test(sDate)) {
        return false;
    }
    var year, month, day;
    year = sDate.substring(0, 4);
    month = sDate.substring(4, 6);
    if (year < 1000 || year > 2500) return false
    if (month < 1 || month > 12) return false
    return true
}

function isDate8(sDate) {
    if(!/^[0-9]{8}$/.test(sDate)) {
    return false;
    }
    var year, month, day;
    year = sDate.substring(0, 4);
    month = sDate.substring(4, 6);
    day = sDate.substring(6, 8);
    var iaMonthDays = [31,28,31,30,31,30,31,31,30,31,30,31]
    if (year < 1700 || year > 2500) return false
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) iaMonthDays[1]=29;
    if (month < 1 || month > 12) return false
    if (day < 1 || day > iaMonthDays[month - 1]) return false
    return true
}


