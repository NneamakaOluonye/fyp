import dayjs from "dayjs";

export default function useHelper() {
    const formatNumber = (number) => {
        let dollarUSLocale = Intl.NumberFormat('en-US');
        return "₦" + dollarUSLocale.format(number);
    }

    const formatDate = (dateString, format = "YYYY-MM-DD") => {
        const date = dayjs(dateString)
        return date.format(format)
    }

    return {
        formatDate,
        formatNumber
    }
}