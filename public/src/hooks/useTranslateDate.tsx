
export const useTranslateDate = () => {
  // Day of the week with translation
  const dayMap = new Map()
    .set(0, 'Sunday')
    .set(1, 'Monday')
    .set(2, 'Tuesday')
    .set(3, 'Wednesday')
    .set(4, 'Thursday')
    .set(5, 'Friday')
    .set(6, 'Saturday')

  const translate = (dayOfTheWeek: number) => {
    return dayMap.get(dayOfTheWeek);
  };

  return { translate };
}