var DateParts = (function () {
    function DateParts(date) {
        this.y = date.getFullYear();
        this.m = date.getMonth();
        this.d = date.getDate();
        this.w = date.getDay();
        this.h = date.getHours();
        this.mm = date.getMinutes();
        this.a = "AM";
        if (this.h > 11) {
            this.a = "PM";
            if (this.h > 12) {
                this.h -= 12;
            }
        }
    }
    return DateParts;
}());
exports.DateParts = DateParts;