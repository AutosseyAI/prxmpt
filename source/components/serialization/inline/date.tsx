import * as Prxmpt from "../../../index.js";

// Base Date Components

export type DateTimeFormat = "long" | "medium" | "short" | "full";

export interface DateValuePropsProps {
  value?: Date | string | number;
}

export interface DateProps extends DateValuePropsProps {
  /**
   * @default "long"
   */
  format?: DateTimeFormat;
}

export const date: Prxmpt.FC<DateProps> = (props) => {
  const date = new Date(props.value ?? Date.now());
  const dateStyle = props.format ?? "long";
  return date.toLocaleString("default", { dateStyle });
}

export interface TimeProps extends DateValuePropsProps {
  /**
   * @default "short"
   */
  format?: DateTimeFormat;
}

export const time: Prxmpt.FC<TimeProps> = (props) => {
  const date = new Date(props.value ?? Date.now());
  const timeStyle = props.format ?? "short";
  return date.toLocaleString("default", { timeStyle });
}

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
  const date = new Date(props.value ?? Date.now());
  const dateStyle = props.dateFormat ?? "long";
  const timeStyle = props.timeFormat ?? "short";
  return date.toLocaleString("default", { dateStyle, timeStyle });
}

export const year: Prxmpt.FC<DateValuePropsProps> = (props) => {
  const date = new Date(props.value ?? Date.now());
  return date.getFullYear().toString();
}

export interface MonthProps extends DateValuePropsProps {
  /**
   * @default "number"
   */
  format?: "number" | "long" | "short" | "narrow";
}

export const month: Prxmpt.FC<MonthProps> = (props) => {
  const date = new Date(props.value ?? Date.now());
  if(props.format ?? "number" === "number") {
    return date.getMonth().toString();
  } else {
    return date.toLocaleString("default", { month: props.format });
  }
}

export interface DayProps extends DateValuePropsProps {
  /**
   * @default "number"
   */
  format?: "number" | "long" | "short" | "narrow";
}

export const day: Prxmpt.FC<DayProps> = (props) => {
  const date = new Date(props.value ?? Date.now());
  if(props.format ?? "number" === "number") {
    return date.getDate().toString();
  } else {
    return date.toLocaleString("default", { weekday: props.format });
  }
}

export interface HoursProps extends DateValuePropsProps {
  /**
   * @default "12"
   */
  cycle?: "12" | "24";
}

export const hour: Prxmpt.FC<HoursProps> = (props) => {
  const date = new Date(props.value ?? Date.now());
  const hours = date.getHours();
  return props.cycle !== "24" && hours > 12
    ? (hours - 12).toString()
    : hours.toString();
}

export const minute: Prxmpt.FC<DateValuePropsProps> = (props) => {
  const date = new Date(props.value ?? Date.now());
  return date.getMinutes().toString();
}

export const second: Prxmpt.FC<DateValuePropsProps> = (props) => {
  const date = new Date(props.value ?? Date.now());
  return date.getSeconds().toString();
}

export const millisecond: Prxmpt.FC<DateValuePropsProps> = (props) => {
  const date = new Date(props.value ?? Date.now());
  return date.getMilliseconds().toString();
}

// Relative Date Components

export interface ElapsedProps {
  since: Date | string | number;
}

export const elapsed: Prxmpt.FC<ElapsedProps> = (props) => {
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
    return <noun singular={rounded === 1}>{rounded} years</noun>;
  } else if(months >= 1) {
    const rounded = Math.round(months);
    return <noun singular={rounded === 1}>{rounded} months</noun>;
  } else if(days >= 1) {
    const rounded = Math.round(days);
    return <noun singular={rounded === 1}>{rounded} days</noun>;
  } else if(hours >= 1) {
    const rounded = Math.round(hours);
    return <noun singular={rounded === 1}>{rounded} hours</noun>;
  } else if(minutes >= 1) {
    const rounded = Math.round(minutes);
    return <noun singular={rounded === 1}>{rounded} minutes</noun>;
  } else if(seconds >= 1) {
    const rounded = Math.round(seconds);
    return <noun singular={rounded === 1}>{rounded} seconds</noun>;
  } else {
    const rounded = Math.round(elapsed);
    return <noun singular={rounded === 1}>{rounded} milliseconds</noun>;
  }
}
