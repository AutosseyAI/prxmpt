import { beforeAll, describe, expect, setSystemTime, test } from "bun:test";
import Prxmpt from "../../source/index.js";

beforeAll(() => {
  setSystemTime(new Date("2020-01-01T00:00:00.000Z"));
});

describe("date", () => {
  test("default", () => {
    const string = (
      <date />
    );
    expect(string).toEqual("January 1, 2020");
  });
  test("full", () => {
    const string = (
      <date format="full" />
    );
    expect(string).toEqual("Wednesday, January 1, 2020");
  });
  test("long", () => {
    const string = (
      <date format="long" />
    );
    expect(string).toEqual("January 1, 2020");
  });
  test("medium", () => {
    const string = (
      <date format="medium" />
    );
    expect(string).toEqual("Jan 1, 2020");
  });
  test("short", () => {
    const string = (
      <date format="short" />
    );
    expect(string).toEqual("1/1/20");
  });
});

describe("time", () => {
  test("default", () => {
    const string = (
      <time />
    );
    expect(string).toEqual("12:00 AM");
  });
  test("full", () => {
    const string = (
      <time format="full" />
    );
    expect(string).toEqual("12:00:00 AM Coordinated Universal Time");
  });
  test("long", () => {
    const string = (
      <time format="long" />
    );
    expect(string).toEqual("12:00:00 AM UTC");
  });
  test("medium", () => {
    const string = (
      <time format="medium" />
    );
    expect(string).toEqual("12:00:00 AM");
  });
  test("short", () => {
    const string = (
      <time format="short" />
    );
    expect(string).toEqual("12:00 AM");
  });
});

describe("datetime", () => {
  test("default", () => {
    const string = <datetime />;
    expect(string).toEqual("January 1, 2020 at 12:00 AM");
  });
  test("full", () => {
    const string = <datetime dateFormat="full" timeFormat="full" />;
    expect(string).toEqual("Wednesday, January 1, 2020 at 12:00:00 AM Coordinated Universal Time");
  });
  test("long", () => {
    const string = <datetime dateFormat="long" timeFormat="long" />;
    expect(string).toEqual("January 1, 2020 at 12:00:00 AM UTC");
  });
  test("medium", () => {
    const string = <datetime dateFormat="medium" timeFormat="medium" />;
    expect(string).toEqual("Jan 1, 2020 at 12:00:00 AM");
  });
  test("short", () => {
    const string = <datetime dateFormat="short" timeFormat="short" />;
    expect(string).toEqual("1/1/20, 12:00 AM");
  });
});


describe("year", () => {
  test("default", () => {
    const string = <year />;
    expect(string).toEqual("2020");
  });
});

describe("month", () => {
  test("default", () => {
    const string = <month />;
    expect(string).toEqual("0");
  });
  test("long", () => {
    const string = <month format="long" />;
    expect(string).toEqual("January");
  });
  test("short", () => {
    const string = <month format="short" />;
    expect(string).toEqual("Jan");
  });
  test("narrow", () => {
    const string = <month format="narrow" />;
    expect(string).toEqual("J");
  });
});

describe("day", () => {
  test("default", () => {
    const string = <day />;
    expect(string).toEqual("1");
  });
  test("long", () => {
    const string = <day format="long" />;
    expect(string).toEqual("Wednesday");
  });
  test("short", () => {
    const string = <day format="short" />;
    expect(string).toEqual("Wed");
  });
  test("narrow", () => {
    const string = <day format="narrow" />;
    expect(string).toEqual("W");
  });
});

describe("hour", () => {
  test("default", () => {
    const string = <hour />;
    expect(string).toEqual("0");
  });
  test("custom", () => {
    const string = <hour value={new Date("Jan 1, 2020 5:00 PM")} />;
    expect(string).toEqual("5");
  });
  test("cycle 24", () => {
    const string = <hour cycle="24" value={new Date("Jan 1, 2020 5:00 PM")} />;
    expect(string).toEqual("17");
  });
});

describe("minute", () => {
  test("default", () => {
    const string = <minute />;
    expect(string).toEqual("0");
  });
});

describe("second", () => {
  test("default", () => {
    const string = <second />;
    expect(string).toEqual("0");
  });
});

describe("millisecond", () => {
  test("default", () => {
    const string = <millisecond />;
    expect(string).toEqual("0");
  });
});

describe("duration", () => {
  test("1 year", () => {
    const string = <duration since={new Date("2019-01-01T00:00:00.000Z")} />;
    expect(string).toEqual("1 year");
  });
  test("2 years", () => {
    const string = <duration since={new Date("2018-01-01T00:00:00.000Z")} />;
    expect(string).toEqual("2 years");
  });
  test("1 month", () => {
    const string = <duration since={new Date("2019-12-01T00:00:00.000Z")} />;
    expect(string).toEqual("1 month");
  });
  test("2 months", () => {
    const string = <duration since={new Date("2019-11-01T00:00:00.000Z")} />;
    expect(string).toEqual("2 months");
  });
  test("1 day", () => {
    const string = <duration since={new Date("2019-12-31T00:00:00.000Z")} />;
    expect(string).toEqual("1 day");
  });
  test("2 days", () => {
    const string = <duration since={new Date("2019-12-30T00:00:00.000Z")} />;
    expect(string).toEqual("2 days");
  });
  test("1 hour", () => {
    const string = <duration since={new Date("2019-12-31T23:00:00.000Z")} />;
    expect(string).toEqual("1 hour");
  });
  test("2 hours", () => {
    const string = <duration since={new Date("2019-12-31T22:00:00.000Z")} />;
    expect(string).toEqual("2 hours");
  });
  test("1 minute", () => {
    const string = <duration since={new Date("2019-12-31T23:59:00.000Z")} />;
    expect(string).toEqual("1 minute");
  });
  test("2 minutes", () => {
    const string = <duration since={new Date("2019-12-31T23:58:00.000Z")} />;
    expect(string).toEqual("2 minutes");
  });
  test("1 second", () => {
    const string = <duration since={new Date("2019-12-31T23:59:59.000Z")} />;
    expect(string).toEqual("1 second");
  });
  test("2 seconds", () => {
    const string = <duration since={new Date("2019-12-31T23:59:58.000Z")} />;
    expect(string).toEqual("2 seconds");
  });
  test("1 millisecond", () => {
    const string = <duration since={new Date("2019-12-31T23:59:59.999Z")} />;
    expect(string).toEqual("1 millisecond");
  });
  test("2 milliseconds", () => {
    const string = <duration since={new Date("2019-12-31T23:59:59.998Z")} />;
    expect(string).toEqual("2 milliseconds");
  });
});
