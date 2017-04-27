export class DateParts {
  public readonly m: number;
  public readonly d: number;
  public readonly y: number;
  public readonly w: number;
  public readonly mm: number;
  public readonly h: number;
  public readonly a: string;
  constructor(date: Date) {

    if (!date.getFullYear || isNaN(date.getFullYear())) {
      throw new RangeError("Invalid Date");
    }

    this.y = date.getFullYear();
    this.m = date.getMonth();
    this.d = date.getDate();
    this.w = date.getDay();
    this.h = date.getHours();
    this.mm = date.getMinutes();
    this.a = "AM";

    if (this.h === 0) {
      this.h = 12;
    } else
      if (this.h > 11) {
        this.a = "PM";
        if (this.h > 12) {
          this.h -= 12;
        }
      }
  }
}
