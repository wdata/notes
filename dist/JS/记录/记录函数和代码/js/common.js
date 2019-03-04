//将时间戳转化为格式时间
Date.prototype.toLocaleString = function() {
    return this.getFullYear() + "." + (this.getMonth() + 1) + "." + this.getDate() + " " + this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds(); };
//生成一个32位的uuid
function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;

    if (len) {
        // Compact form
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
        // rfc4122, version 4 form
        var r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random()*16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
}
//获取网址ID，key是参数名
var urlParams = function (key) {
    var ret = location.search.match(new RegExp('(\\?|&)' + key + '=(.*?)(&|$)'))
    return ret && decodeURIComponent(ret[2])
};
//输入时间戳，获取最近分钟，最近天，最近年月
function many(data){
    var time = (new Date().getTime()) - data;
    console.log(time);
    var abc,def;
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var month = day * 30;
    var year = day * 365;
    if(time > year){
        //当时间大于365天，显示多少年前
        abc = new Date(time).getFullYear();
        def = abc+"年前";
    }else if(time >= month && time < year){
        //当时间大于30天，显示多少个月前
        abc = (new Date(time).getMonth()) + 1;
        def = abc+"月前";
    }else if( time >= hour && time < month){
        //当时间大于24小时，显示天数
        abc = (new Date(time).getUTCDate())-1;
        def = abc+"天前";
    }else if(time >= minute && time < hour){
        //当时间大于60分钟，显示小时数
        abc = new Date(time).getHours();
        def = abc+"小时前";
    }else if(time >= 0 && time < minute){
        //当时间分钟数
        abc = new Date(time).getMinutes();
        def = abc+"分钟前";
    }
    return def;
}
// 列表全选，则全选显示；列表不全选，则全选不显示；
function checkDown(_this){
    var all = $(_this).parents("tbody").siblings("thead").find("input[type=checkbox]");  //将全选的按钮赋值给all
    if(_this.checked){
        var bur = true;
        $.each($(_this).parents("tr").siblings().find("input[type=checkbox]"),function(index,val){
            //  看列表是否全选
            if(!val.checked){
                bur = false;
            }
        });
        if(bur){
            all.prop("checked", true);
        }
    }else{
        all.prop("checked", false);
    }
}
/*上传图片预览*/
function imgPreview(_this){
    if(_this.value==='')return false;
    var $file = $(_this);
    var fileObj = $file[0];
    var windowURL = window.URL || window.webkitURL;
    var dataURL;
    var $img = $(_this).parent().siblings().find('img');

    if(fileObj && fileObj.files && fileObj.files[0]) {
        dataURL = windowURL.createObjectURL(fileObj.files[0]);
        $img.attr('src', dataURL);
    } else {
        dataURL = $file.val();
        var imgObj =$img.get(0);
        imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
        imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
    }
    return true;
}

/*上传图片大小格式验证*/
function imgSizeCheck(_this){
    var fileSize = 0;
    var isIE = /msie/i.test(navigator.userAgent) && !window.opera;
    var name=_this.value;
    var postfix=name.substring(name.lastIndexOf(".") + 1).toLowerCase();
    if(isIE && !_this.files) {
        var filePath = _this.value;
        var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
        var file = fileSystem.GetFile(filePath);
        fileSize = file.Size;
    } else {
        fileSize = _this.files[0].size;
    }
    var size = fileSize / 1024;
    if(size > 2000) {
        returnMessage(2,'附件不能大于2M！');
        _this.value==' ';
        $(_this).attr('src','');
        console.info($(_this).attr('src') )
        return false;
    }else{
        if(postfix!='jpg' && postfix!='jpeg'&& postfix!='png'&& postfix!='bmp'){
            returnMessage(2,'请选择jpg，jpeg，png，bmp的格式文件上传！');
            _this.value==' ';
            $(_this).attr('src',' ');
            return false;
        }else{
            imgPreview(_this);
        }
    }
}
//日期格式
Date.prototype.toLocaleString = function() {
    var YYYY = this.getFullYear();
    var MM = (this.getMonth() + 1)<10?'0'+(this.getMonth() + 1):(this.getMonth() + 1);
    var DD = this.getDate()<10?'0'+this.getDate():this.getDate();
    var hh = this.getHours()<10?'0'+this.getHours():this.getHours();
    var mm = this.getMinutes()<10?'0'+this.getMinutes():this.getMinutes();
    var ss = this.getSeconds()<10?'0'+this.getSeconds():this.getSeconds();
    return  YYYY+ "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss ;
};
//日期格式
Date.prototype.toDateString = function() {
    var YYYY = this.getFullYear();
    var MM = (this.getMonth() + 1)<10?'0'+(this.getMonth() + 1):(this.getMonth() + 1);
    var DD = this.getDate()<10?'0'+this.getDate():this.getDate();
    return  YYYY+ "-" + MM + "-" + DD  ;
};
//去掉字符串首空格
String.prototype.ltrim=function(){
    return this.replace(/(^\s*)/g,"");
};
//去掉字符串首尾空格
String.prototype.trim=function(){
    return this.replace(/(^\s*)|(\s*$)/g,"");
};
//分页初始化
function initPagination(id,total,vpage,curpage,callback) {
    $.jqPaginator(id, {
        totalPages: total,
        visiblePages: vpage,
        currentPage: curpage,
        onPageChange: callback,
        prev: '<li class="prev"><a href="javascript:;"><i class="fa fa-chevron-left"></i></a></li>',
        next: '<li class="next"><a href="javascript:;"><i class="fa fa-chevron-right"></i></a></li>',
        page: '<li class="page"><a href="javascript:;">{{page}}</a></li>'
    });
}
//切换页面
function target_page(id){
    $(".content").hide();
    $("."+id).removeClass("hide");
}
//全选函数
function checkAll(id,_this){
    if(_this.checked){
        $("#"+id+" .list :checkbox").prop("checked", true);
    }else{
        $("#"+id+" .list :checkbox").prop("checked", false);
    }
}
/*导入excel表格验证*/
function excelCheck(_this){
    var name=_this.value;
    var postfix=name.substring(name.lastIndexOf(".") + 1).toLowerCase();
    if(postfix!='xls' && postfix!='xlsx'){
        returnMessage(2,'请选择xlsx，xls的格式文件上传！');
        _this.value==' ';
        $(_this).attr('src',' ');
        return false;
    }else{
        return true
    }
}
/*日期非空判断*/
function dateCheck(date){
    if(date){
        return (new Date(date)).toLocaleString();
    }else{
        return '-'
    }
}
*数组去重*/
Array.prototype.unique = function(){
    this.sort(); //先排序
    var res = [this[0]];
    for(var i = 1; i < this.length; i++){
        if(this[i] !== res[res.length - 1]){
            res.push(this[i]);
        }
    }
    return res;
}

/*清空表单*/
function clearForm(id){
    $(id).find('input[type=text]').each(function(){
        if(!$(this).attr('readonly')){
            $(this).val(' ');
        }
    })
    $(id).find('input[type=password]').val(' ');
    $(id).find('textarea').val(' ');
    $(id).find('select').each(function(){
        if(!$(this).hasClass('immort')){
            $(this).find('option').first().prop('selected',true);
        }
    })

}

/*表单数据为空显示*/
function noData(id){
    $(id).find('.list').html('');
    if(!$(id).next().hasClass('no-data')){
        $('<p class="no-data tc">当前条件下无数据展示！</p>').insertAfter(id);
    }
}

/*表格内容非空判断*/
function noTd(elem){
    return elem?elem:'-'
}
/*表单内容非空判断*/
function noVal(elem){
    if(elem=="-"){return " "}
    return elem?elem:' '
}