//公共方法
export default {
    //时间戳转时间格式yyyy-mm-dd
    crtTimeFtt(val) {
        if (val != null) {
            var date = new Date(val);
            var yy = date.getFullYear(); //年
            var mm = date.getMonth() + 1; //月
            var dd = date.getDate(); //日
            var clock = yy + "-";
            if (mm < 10) clock += "0";
            clock += mm + "-";
            if (dd < 10) clock += "0";
            clock += dd;
            return clock;
        }
    },

    //时间戳转时间格式YYYY-MM-DD HH:mm:ss
    crtTimeFtts(val) {
        if (val != null) {
            var date = new Date(val);
            var YY = date.getFullYear(); //年
            var MM = date.getMonth() + 1; //月
            var DD = date.getDate(); //日
            var HH = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var clock = YY + "-";
            if (MM < 10) clock += "0";
            clock += MM + "-";
            if (DD < 10) clock += "0";
            clock += DD + " ";
            if (HH < 10) clock += "0";
            clock += HH + ":";
            if (mm < 10) clock += "0";
            clock += mm + ":";
            if (ss < 10) clock += "0";
            clock += ss;
            return clock;
        }
    }
}