import { format } from "date-fns";

export function infoNotAvailable(value) {
  return `No ${value} listed`;
}

export function organicFormat(value) {
  return value.toLowerCase() === "n" ? "No" : "Yes";
}

export function yearFormat(date) {
  return format(date, "YYYY");
}
