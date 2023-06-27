import moment from "moment";

export function formatDate(arg, format = "MMMM D, YYYY h:mm:ss A") {
    return moment(arg).format(format)
    // return DateTime.fromISO(date.toISOString()).toFormat(format)
}
