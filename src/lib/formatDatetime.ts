const formatDatetime = (date: string): string => {
  return new Intl.DateTimeFormat('ko').format(new Date(date));
};

export default formatDatetime;
