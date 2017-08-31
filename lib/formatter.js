"use strict";
exports.__esModule = true;
var dateparts_1 = require("./dateparts");
var monthNames = [
    ["January", "Jan"],
    ["February", "Feb"],
    ["March", "Mar"],
    ["April", "Apr"],
    ["May", "May"],
    ["June", "Jun"],
    ["July", "Jul"],
    ["August", "Aug"],
    ["September", "Sep"],
    ["October", "Oct"],
    ["November", "Nov"],
    ["December", "Dec"],
];
var dayNames = [
    ["Sunday", "Sun"],
    ["Monday", "Mon"],
    ["Tuesday", "Tue"],
    ["Wednesday", "Wed"],
    ["Thursday", "Thu"],
    ["Friday", "Fri"],
    ["Saturday", "Sat"],
];
var DateFormatter = (function () {
    function DateFormatter(locale) {
        if (locale === void 0) { locale = "en-US"; }
        this.locale = locale;
        if (locale !== "en-US") {
            throw new RangeError("Only en-US is supported.");
        }
    }
    DateFormatter.prependZero = function (num, cnt) {
        return DateFormatter.zeros.concat(num.toString(10)).slice(-cnt);
    };
    DateFormatter.prototype.format = function (date, fmt) {
        if (!date) {
            throw new RangeError("Date is required.");
        }
        return this.doFormat(new dateparts_1.DateParts(date), fmt);
    };
    DateFormatter.prototype.doFormat = function (parts, fmt) {
        switch (fmt) {
            case "d": {
                return parts.d.toFixed(0);
            }
            case "dd": {
                return DateFormatter.prependZero(parts.d, 2);
            }
            case "EEE": {
                return dayNames[parts.w][0];
            }
            case "EEE MMM d, y h:mm a": {
                var ps = [
                    "" + this.doFormat(parts, "EEE"),
                    "" + this.doFormat(parts, "MMM"),
                    parts.d + ", " + parts.y,
                    parts.h + ":" + DateFormatter.prependZero(parts.mm, 2),
                    "" + parts.a,
                ];
                return ps.join(" ");
            }
            case "M": {
                var m = parts.m + 1;
                return m.toFixed(0);
            }
            case "MM": {
                return DateFormatter.prependZero(parts.m + 1, 2);
            }
            case "M/d/yy": {
                var ps = [
                    this.doFormat(parts, "M"),
                    this.doFormat(parts, "d"),
                    this.doFormat(parts, "yy"),
                ];
                return ps.join("/");
            }
            case "MM/dd/yy": {
                var ps = [
                    this.doFormat(parts, "MM"),
                    this.doFormat(parts, "dd"),
                    this.doFormat(parts, "yy"),
                ];
                return ps.join("/");
            }
            case "MMM": {
                return monthNames[parts.m][1];
            }
            case "MMMM": {
                return monthNames[parts.m][0];
            }
            case "MMMM y": {
                var ps = [
                    this.doFormat(parts, "MMMM"),
                    this.doFormat(parts, "y"),
                ];
                return ps.join(" ");
            }
            case "y": {
                return parts.y.toFixed(0);
            }
            case "yy": {
                return parts.y.toFixed(0).substr(2);
            }
            default: {
                throw new Error("The fmt value '" + fmt + "' is not supported.");
            }
        }
    };
    return DateFormatter;
}());
DateFormatter.zeros = Array(5).join("0");
exports.DateFormatter = DateFormatter;
