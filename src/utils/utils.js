export function formatDate(str) {
    var date = new Date(str);
    var time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return '';
    } else if (time / 1000 < 60) {
        return '刚刚';
    } else if ((time / 60000) < 60) {
        return window.parseInt((time / 60000)) + '分钟前';
    } else if ((time / 3600000) < 24) {
        return window.parseInt(time / 3600000) + '小时前';
    } else if ((time / 86400000) < 31) {
        return window.parseInt(time / 86400000) + '天前';
    } else if ((time / 2592000000) < 12) {
        return window.parseInt(time / 2592000000) + '月前';
    } else {
        return window.parseInt(time / 31536000000) + '年前';
    }
}

export function isBottom(){
    const { scrollTop } = document.documentElement || document.body
    const { clientHeight, scrollHeight } = document.documentElement;

    return (scrollTop + clientHeight + 40) >= scrollHeight
}