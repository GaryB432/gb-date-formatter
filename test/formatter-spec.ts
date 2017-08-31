/// <reference path="../node_modules/@types/mocha/index.d.ts" />

import { DateFormatter } from "../src/formatter";
import * as chai from "chai";

const expect = chai.expect;

type ExpectedResult = string;

type Setup = [Date, ExpectedResult];

describe("Format: Formatter", () => {
  let formatter: DateFormatter;

  beforeEach(() => {
    formatter = new DateFormatter("en-US");
  });

  describe("Format: Invalid Date handling", () => {
    it("should throw on invalid date", () => {
      const nonDate = {} as Date;
      expect(() => formatter.format(nonDate, "MMM")).to.throw("Invalid Date");
    });

    it("should throw on undefined date", () => {
      const nonDate = undefined;
      expect(() => formatter.format(nonDate, "MMM")).to.throw("Date is required.");
    });

  });

  describe("Format: d", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 5, 20, 0, 0), "5"],
      [new Date(2024, 1, 5, 23, 0, 0), "5"],
      [new Date(2024, 2, 5, 20, 0, 0), "5"],
      [new Date(2024, 3, 5, 20, 0, 0), "5"],
      [new Date(2024, 4, 20, 8, 9, 0), "20"],
      [new Date(2024, 5, 5, 20, 0, 0), "5"],
      [new Date(2024, 6, 5, 0, 2, 0), "5"],
      [new Date(2024, 7, 5, 20, 59, 0), "5"],
      [new Date(2024, 8, 5, 20, 0, 0), "5"],
      [new Date(2024, 9, 5, 20, 0, 0), "5"],
      [new Date(2024, 10, 5, 20, 0, 0), "5"],
      [new Date(2024, 11, 5, 20, 0, 0), "5"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "d")).to.equal(s[1]);
      });
    })
  });

  describe("Format: dd", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 5, 20, 0, 0), "05"],
      [new Date(2024, 3, 5, 20, 0, 0), "05"],
      [new Date(2024, 4, 20, 8, 9, 0), "20"],
      [new Date(2024, 5, 5, 20, 0, 0), "05"],
      [new Date(2024, 9, 31, 20, 0, 0), "31"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "dd")).to.equal(s[1]);
      });
    })
  });

  describe("Format: EEE", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 5, 20, 0, 0), "Friday"],
      [new Date(2024, 1, 5, 23, 0, 0), "Monday"],
      [new Date(2024, 2, 5, 20, 0, 0), "Tuesday"],
      [new Date(2024, 3, 5, 20, 0, 0), "Friday"],
      [new Date(2024, 4, 20, 8, 9, 0), "Monday"],
      [new Date(2024, 5, 5, 20, 0, 0), "Wednesday"],
      [new Date(2024, 6, 5, 0, 2, 0), "Friday"],
      [new Date(2024, 7, 5, 20, 59, 0), "Monday"],
      [new Date(2024, 8, 5, 20, 0, 0), "Thursday"],
      [new Date(2024, 9, 5, 20, 0, 0), "Saturday"],
      [new Date(2024, 10, 5, 20, 0, 0), "Tuesday"],
      [new Date(2024, 11, 5, 20, 0, 0), "Thursday"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "EEE")).to.equal(s[1]);
      });
    })
  });

  describe("Format: EEE MMM d, y h:mm a", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 5, 20, 0, 0), "Friday Jan 5, 2024 8:00 PM"],
      [new Date(2024, 1, 5, 23, 0, 0), "Monday Feb 5, 2024 11:00 PM"],
      [new Date(2024, 2, 5, 20, 0, 0), "Tuesday Mar 5, 2024 8:00 PM"],
      [new Date(2024, 3, 5, 20, 0, 0), "Friday Apr 5, 2024 8:00 PM"],
      [new Date(2024, 4, 20, 8, 9, 0), "Monday May 20, 2024 8:09 AM"],
      [new Date(2024, 5, 5, 20, 0, 0), "Wednesday Jun 5, 2024 8:00 PM"],
      [new Date(2024, 6, 5, 0, 2, 0), "Friday Jul 5, 2024 12:02 AM"],
      [new Date(2024, 7, 5, 20, 59, 0), "Monday Aug 5, 2024 8:59 PM"],
      [new Date(2024, 8, 5, 20, 0, 0), "Thursday Sep 5, 2024 8:00 PM"],
      [new Date(2024, 9, 5, 20, 0, 0), "Saturday Oct 5, 2024 8:00 PM"],
      [new Date(2024, 10, 5, 20, 0, 0), "Tuesday Nov 5, 2024 8:00 PM"],
      [new Date(2024, 11, 5, 20, 0, 0), "Thursday Dec 5, 2024 8:00 PM"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "EEE MMM d, y h:mm a")).to.equal(s[1]);
      });
    })
  });

  describe("Format: M", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 15), "1"],
      [new Date(2024, 1, 15), "2"],
      [new Date(2024, 2, 15), "3"],
      [new Date(2024, 3, 15), "4"],
      [new Date(2024, 4, 15), "5"],
      [new Date(2024, 5, 15), "6"],
      [new Date(2024, 6, 15), "7"],
      [new Date(2024, 7, 15), "8"],
      [new Date(2024, 8, 15), "9"],
      [new Date(2024, 9, 15), "10"],
      [new Date(2024, 10, 15), "11"],
      [new Date(2024, 11, 15), "12"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "M")).to.equal(s[1]);
      });
    })
  });

  describe("Format: M/d/yy", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 5, 20, 0, 0), "1/5/24"],
      [new Date(2024, 2, 25, 20, 0, 0), "3/25/24"],
      [new Date(2024, 11, 5, 20, 0, 0), "12/5/24"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "M/d/yy")).to.equal(s[1]);
      });
    })
  });

  describe("Format: MM", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 5, 20, 0, 0), "01"],
      [new Date(2024, 2, 25, 20, 0, 0), "03"],
      [new Date(2024, 11, 5, 20, 0, 0), "12"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "MM")).to.equal(s[1]);
      });
    })
  });

  describe("Format: MM/dd/yy", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 5, 20, 0, 0), "01/05/24"],
      [new Date(2024, 1, 5, 23, 0, 0), "02/05/24"],
      [new Date(2024, 2, 25, 20, 0, 0), "03/25/24"],
      [new Date(2024, 11, 5, 20, 0, 0), "12/05/24"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "MM/dd/yy")).to.equal(s[1]);
      });
    })
  });

  describe("Format: MMM", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 15), "Jan"],
      [new Date(2024, 1, 15), "Feb"],
      [new Date(2024, 2, 15), "Mar"],
      [new Date(2024, 3, 15), "Apr"],
      [new Date(2024, 4, 15), "May"],
      [new Date(2024, 5, 15), "Jun"],
      [new Date(2024, 6, 15), "Jul"],
      [new Date(2024, 7, 15), "Aug"],
      [new Date(2024, 8, 15), "Sep"],
      [new Date(2024, 9, 15), "Oct"],
      [new Date(2024, 10, 15), "Nov"],
      [new Date(2024, 11, 15), "Dec"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "MMM")).to.equal(s[1]);
      });
    })
  });

  describe("Format: MMMM", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 15), "January"],
      [new Date(2024, 1, 15), "February"],
      [new Date(2024, 2, 15), "March"],
      [new Date(2024, 3, 15), "April"],
      [new Date(2024, 4, 15), "May"],
      [new Date(2024, 5, 15), "June"],
      [new Date(2024, 6, 15), "July"],
      [new Date(2024, 7, 15), "August"],
      [new Date(2024, 8, 15), "September"],
      [new Date(2024, 9, 15), "October"],
      [new Date(2024, 10, 15), "November"],
      [new Date(2024, 11, 15), "December"]
    ]
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "MMMM")).to.equal(s[1]);
      });
    })
  });

  describe("Format: MMMM y", () => {
    const setups: Setup[] = [
      [new Date(2024, 0, 15), "January 2024"],
      [new Date(2024, 1, 15), "February 2024"],
      [new Date(2024, 2, 15), "March 2024"],
      [new Date(2024, 3, 15), "April 2024"],
      [new Date(2024, 4, 15), "May 2024"],
      [new Date(2024, 5, 15), "June 2024"],
      [new Date(2024, 6, 15), "July 2024"],
      [new Date(2024, 7, 15), "August 2024"],
      [new Date(2024, 8, 15), "September 2024"],
      [new Date(2024, 9, 15), "October 2024"],
      [new Date(2024, 10, 15), "November 2024"],
      [new Date(2024, 11, 15), "December 2024"]
    ];
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "MMMM y")).to.equal(s[1]);
      });
    })
  });

  describe("Format: y", () => {
    const setups: Setup[] = [
      [new Date(20, 0, 15), "1920"],
      [new Date(206, 0, 15), "206"],
      [new Date(9431, 11, 15), "9431"]
    ];
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "y")).to.equal(s[1]);
      });
    })
  });

  describe("Format: yy", () => {
    const setups: Setup[] = [
      [new Date(2020, 0, 15), "20"],
      [new Date(2021, 1, 15), "21"],
      [new Date(2022, 2, 15), "22"],
      [new Date(2023, 3, 15), "23"],
      [new Date(2024, 4, 15), "24"],
      [new Date(2025, 5, 15), "25"],
      [new Date(2026, 6, 15), "26"],
      [new Date(2027, 7, 15), "27"],
      [new Date(2028, 8, 15), "28"],
      [new Date(2029, 9, 15), "29"],
      [new Date(2030, 10, 15), "30"],
      [new Date(2031, 11, 15), "31"]
    ];
    setups.forEach(s => {
      it(s[0].toISOString(), () => {
        expect(formatter.format(s[0], "yy")).to.equal(s[1]);
      });
    })
  });

});
