export declare type FormatString = "d" | "dd" | "EEE" | "EEE MMM d, y h:mm a" | "M" | "MM" | "M/d/yy" | "MM/dd/yy" | "MMM" | "MMMM" | "MMMM y" | "y" | "yy";
export declare class DateFormatter {
    private locale;
    private static zeros;
    private static prependZero(num, cnt);
    constructor(locale?: string);
    format(date: Date | undefined, fmt: FormatString): string;
    private doFormat(parts, fmt);
}
