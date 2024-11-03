interface CalendarOptions {
  activeDate: Date;
}

const getDefaultOptions: () => CalendarOptions = () => ({
  activeDate: new Date(),
});

const cloneDate = (date: Date) => new Date(date.toISOString());

const createCalendar: (options?: Partial<CalendarOptions>) => void = (
  options
) => {
  const { activeDate } = { ...getDefaultOptions(), ...options };
  const month = activeDate.getMonth();
  const year = activeDate.getFullYear();

  const dateAtFirstDay = cloneDate(activeDate);
  dateAtFirstDay.setDate(1);
  const monthFirstWeekday = dateAtFirstDay.getDay();

  const monthDaysCount = (
    month < 11 ? new Date(year, month + 1, 0) : new Date(year + 1, 0, 0)
  ).getDate();

  const previousMonthDaysCount = new Date(year, month, 0).getDate();

  const days = [
    ...new Array(
      monthFirstWeekday +
        monthDaysCount +
        7 -
        ((monthFirstWeekday + monthDaysCount + 7) % 7)
    ),
  ].map((_, index) => {
    const dayNumber = index - monthFirstWeekday + 1;

    if (dayNumber <= 0) {
      return previousMonthDaysCount + dayNumber;
    }

    if (dayNumber > monthDaysCount) {
      return dayNumber - monthDaysCount;
    }

    return dayNumber;
  });

  return days;
};

export default createCalendar;
