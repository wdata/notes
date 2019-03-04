/*
 jquery添加元素
 append() - 在被选元素的结尾插入内容
 prepend() - 在被选元素的开头插入内容
 after() - 在被选元素之后插入内容
 before() - 在被选元素之前插入内容
* */

//  多图片上传
var file = [];
function uploadPicture(_this){
    var html = '';
    var shoot = $("#shoot");
    $.each($(_this)[0].files,function(index,val){
        var img_ext = val.name.substring(val.name.length-3,val.name.length);
        var img_size = Math.floor((val.size)/1024);   //单位为KB
        if(img_ext !== "jpg" && img_ext !== "png"&& img_ext !== "gif"){
            console.log("已过滤不符合格式图片");
        }else if(img_size >  2048){
            console.log("已过滤不符合大小");
        }else{
            file.push(val);
            html += '<li><img src="'+ getObjectURL(_this.files[index]) +'" alt=""><i class="delete-icon"></i></li>';
        }
    });
    shoot.before(html);
}
//  删除
$(document).on("click",".delete-icon",function(){
    var ind = $(this).parent().index();
    $(this).parent().remove();
    file.splice(ind, 1);//修改fileLists
    console.log(file);
});

//  下一步
function sumber(){
    //新增，调用新增ajax
    var form = new FormData($("#newForm")[0]);       //需要是JS对象
    $.each(file,function(index,val){
        form.append("file",val);
    });
    $.ajax({
        type:'post',
        url: '/party-server-core/web/api/menus.json',
        data: form,
        contentType: false,
        processData: false,
        success:function(data){

        },
        error:function(data){
            //报错提醒框
        }
    });
}
// 将图片名转化，作为可以预览的
function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL !== undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.URL !== undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL !== undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}
// swiper的使用；//  通知轮播
var noticeWord = new Swiper('.notice-word', {
    autoplay: 1000,//可选选项，自动滑动
    loop:true,                                // 是否形成闭合
    direction:'vertical',                     //    修改滑动方向；
    autoplayDisableOnInteraction:false        // 必须加上，否则滑动后不轮播；
});
noticeWord.reLoop();   //   这个函数是重新计算swiper个数，可在获取数据后使用