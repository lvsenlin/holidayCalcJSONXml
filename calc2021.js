// 日期加1天
var addDays = function (date, n) {
    var t = new Date(date);
    t.setDate(t.getDate() + n);
    return t;
}
// yyyyMMdd
Date.prototype.toFormatDate = function () {
    var d = this;
    return d.getFullYear() + '' + (d.getMonth() + 1 < 10 ? '0' : '') + (d.getMonth() + 1) + '' + (d.getDate() < 10 ? '0' : '') + (d.getDate());
};

var thisYear = 2021;
//第1天
var firstDay = new Date(thisYear, 0, 01);
var days = [];
//节假日
var holidays = [
    // 元旦，每年一样
    20210101, 20210102, 20210103,
    // 春节
    20210211, 20210212, 20210213, 20210214, 20210215, 20210216, 20210217,
    // 清明
    20210403, 20210404, 20210405,
    // 五一，每年一样
    20210501, 20210502, 20210503, 20210504, 20210505,
    // 端午
    20210612, 20210613, 20210614,
    // 中秋
    20210913, 20210914, 20210915,
    // 国庆，每年一样
    20211001, 20211002, 20211003, 20211004, 20211005, 20211006, 20211007,
];
//周末调休上班日期
var workdays = [
    // 春节
    20210207, 20210220,
    // 五一
    20210425, 20210508,
    // 中秋
    20210918,
    // 国庆
    20210926, 20211009
];

for (var i = 0; i < 366; i++) {
    //加i天
    var thatDay = addDays(firstDay, i);
    //在本年内的
    if (thatDay.getFullYear() == thisYear) {
        //工作日
        var type = '0';
        if (thatDay.getDay() == 6 || thatDay.getDay() == 0) {
            //周末
            type = '1';
        }
        if (holidays.indexOf(Number(thatDay.toFormatDate())) > -1) {
            type = '2';
        }
        if (workdays.indexOf(Number(thatDay.toFormatDate())) > -1) {
            type = '0';
        }
        days.push({dayStr: thatDay.toFormatDate(), type: type});
    }
}

console.log(JSON.stringify(days))

