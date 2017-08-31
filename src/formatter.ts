// https://docs.angularjs.org/api/ng/filter/date

import { DateParts } from "./dateparts";

export type FormatString =
  "d" |
  "dd" |
  "EEE" |
  "EEE MMM d, y h:mm a" |
  "M" |
  "MM" |
  "M/d/yy" |
  "MM/dd/yy" |
  "MMM" |
  "MMMM" |
  "MMMM y" |
  "y" |
  "yy";

type LongShort = [string, string];

const monthNames: LongShort[] = [
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

const dayNames: LongShort[] = [
  ["Sunday", "Sun"],
  ["Monday", "Mon"],
  ["Tuesday", "Tue"],
  ["Wednesday", "Wed"],
  ["Thursday", "Thu"],
  ["Friday", "Fri"],
  ["Saturday", "Sat"],
];

export class DateFormatter {
  private static zeros: string = Array(5).join("0");

  private static prependZero(num: number, cnt: number): string {
    return DateFormatter.zeros.concat(num.toString(10)).slice(-cnt);
  }

  constructor(private locale: string = "en-US") {
    if (locale !== "en-US") {
      throw new RangeError("Only en-US is supported.");
    }
  }

  public format(date: Date | undefined, fmt: FormatString): string {
    if (!date) {
      throw new RangeError("Date is required.");
    }
    return this.doFormat(new DateParts(date), fmt);
  }

  private doFormat(parts: DateParts, fmt: FormatString): string {
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
        const ps = [
          `${this.doFormat(parts, "EEE")}`,
          `${this.doFormat(parts, "MMM")}`,
          `${parts.d}, ${parts.y}`,
          `${parts.h}:${DateFormatter.prependZero(parts.mm, 2)}`,
          `${parts.a}`,
        ];
        return ps.join(" ");
      }
      case "M": {
        const m = parts.m + 1;
        return m.toFixed(0);
      }
      case "MM": {
        return DateFormatter.prependZero(parts.m + 1, 2);
      }
      case "M/d/yy": {
        const ps = [
          this.doFormat(parts, "M"),
          this.doFormat(parts, "d"),
          this.doFormat(parts, "yy"),
        ];
        return ps.join("/");
      }
      case "MM/dd/yy": {
        const ps = [
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
        const ps = [
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
        throw new Error(`The fmt value '${fmt}' is not supported.`);
      }

    }
  }

}
