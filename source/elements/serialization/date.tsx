import * as Prxmpt from "../../index.js";

// Base Date Components

export type DateTimeFormat = "long" | "medium" | "short" | "full";

export interface DateValuePropsProps {
  /**
   * @default Date.now()
   */
  value?: Date | string | number;
}

export interface DateProps extends DateValuePropsProps {
  /**
   * @default "long"
   */
  format?: DateTimeFormat;
}

export const date: Prxmpt.FC<DateProps> = (props) => {
  const value = new Date(props.value ?? Date.now());
  const dateStyle = props.format ?? "long";
  return value.toLocaleString("default", { dateStyle });
};

export interface TimeProps extends DateValuePropsProps {
  /**
   * @default "short"
   */
  format?: DateTimeFormat;
}

export const time: Prxmpt.FC<TimeProps> = (props) => {
  const value = new Date(props.value ?? Date.now());
  const timeStyle = props.format ?? "short";
  return value.toLocaleString("default", { timeStyle });
};

export interface DateTimeProps extends DateValuePropsProps {
  /**
   * @default "long"
   */
  dateFormat?: DateTimeFormat;
  /**
   * @default "short"
   */
  timeFormat?: DateTimeFormat;
}

export const datetime: Prxmpt.FC<DateTimeProps> = (props) => {
  const value = new Date(props.value ?? Date.now());
  const dateStyle = props.dateFormat ?? "long";
  const timeStyle = props.timeFormat ?? "short";
  return value.toLocaleString("default", { dateStyle, timeStyle });
};

export const year: Prxmpt.FC<DateValuePropsProps> = (props) => {
  const value = new Date(props.value ?? Date.now());
  return value.getFullYear().toString();
};

export interface MonthProps extends DateValuePropsProps {
  /**
   * @default "number"
   */
  format?: "number" | "long" | "short" | "narrow";
}

export const month: Prxmpt.FC<MonthProps> = (props) => {
  const value = new Date(props.value ?? Date.now());
  if(props.format === undefined || props.format === "number") {
    return value.getMonth().toString();
  } else {
    return value.toLocaleString("default", { month: props.format });
  }
};

export interface DayProps extends DateValuePropsProps {
  /**
   * @default "number"
   */
  format?: "number" | "long" | "short" | "narrow";
}

export const day: Prxmpt.FC<DayProps> = (props) => {
  const value = new Date(props.value ?? Date.now());
  if(props.format === undefined || props.format === "number") {
    return value.getDate().toString();
  } else {
    return value.toLocaleString("default", { weekday: props.format });
  }
};

export interface HoursProps extends DateValuePropsProps {
  /**
   * @default "12"
   */
  cycle?: "12" | "24";
}

export const hour: Prxmpt.FC<HoursProps> = (props) => {
  const value = new Date(props.value ?? Date.now());
  const hours = value.getHours();
  return props.cycle !== "24" && hours > 12
    ? (hours - 12).toString()
    : hours.toString();
};

export const minute: Prxmpt.FC<DateValuePropsProps> = (props) => {
  const value = new Date(props.value ?? Date.now());
  return value.getMinutes().toString();
};

export const second: Prxmpt.FC<DateValuePropsProps> = (props) => {
  const value = new Date(props.value ?? Date.now());
  return value.getSeconds().toString();
};

export const millisecond: Prxmpt.FC<DateValuePropsProps> = (props) => {
  const value = new Date(props.value ?? Date.now());
  return value.getMilliseconds().toString();
};

// Relative Date Components

export interface DurationProps extends Prxmpt.TextProps {
  since: Date | string | number;
}

export const duration: Prxmpt.FC<DurationProps> = (props) => {
  const since = new Date(props.since);
  const now = Date.now();
  const elapsed = now - since.getTime();
  const seconds = elapsed / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const years = days / 365;
  const months = years * 12;
  if(years >= 1) {
    const rounded = Math.round(years);
    return <text {...props}>{rounded} year<text hide={rounded === 1}>s</text></text>;
  } else if(months >= 1) {
    const rounded = Math.round(months);
    return <text {...props}>{rounded} month<text hide={rounded === 1}>s</text></text>;
  } else if(days >= 1) {
    const rounded = Math.round(days);
    return <text {...props}>{rounded} day<text hide={rounded === 1}>s</text></text>;
  } else if(hours >= 1) {
    const rounded = Math.round(hours);
    return <text {...props}>{rounded} hour<text hide={rounded === 1}>s</text></text>;
  } else if(minutes >= 1) {
    const rounded = Math.round(minutes);
    return <text {...props}>{rounded} minute<text hide={rounded === 1}>s</text></text>;
  } else if(seconds >= 1) {
    const rounded = Math.round(seconds);
    return <text {...props}>{rounded} second<text hide={rounded === 1}>s</text></text>;
  } else {
    const rounded = Math.round(elapsed);
    return <text {...props}>{rounded} millisecond<text hide={rounded === 1}>s</text></text>;
  }
};
