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

var thisYear = 2020;
//第1天
var firstDay = new Date(thisYear, 0, 01);
var days = [];
//节假日
var holidays = [
    // 元旦，每年一样
    20200101,
    // 春节
    20200124, 20200125, 20200126, 20200127, 20200128, 20200129, 20200130,
    // 清明
    20200404, 20200405, 20200406,
    // 五一
    20200501, 20200502, 20200503, 20200504, 20200505,
    // 端午
    20200625, 20200626, 20200627,
    // 中秋
    // 国庆，每年一样
    20201001, 20201002, 20201003, 20201004, 20201005, 20201006, 20201007, 20201008,
];
//周末调休上班日期
var workDays2020 = [20200119, 20200201, 20200426, 20200509, 20200628, 20200927, 20201010];

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
            //假期
            type = '2';
        }
        if (workdays.indexOf(Number(thatDay.toFormatDate())) > -1) {
            //工作日
            type = '0';
        }
        days.push({dayStr: thatDay.toFormatDate(), type: type});
    }
}

console.log(JSON.stringify(days))

