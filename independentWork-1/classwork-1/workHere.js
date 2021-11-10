export const dataProcessingAboutSalary = (f, s) => {};

export const calculateCashback = (isCashback, sum, cb) => {};

export const getHolidaysNotifications = (f, s) => {};

export const getHolidayPrizes = (f, s, t) => {
  let name = f;
  let dateBrth = new Date(s);
  let cach = Math.round(t);
  let newdate = new Date();

  let totalcach = (cach * 10) / 100 + dateBrth.getMonth() * dateBrth.getDate();

  if (
    dateBrth.getMonth() + 1 === newdate.getMonth() &&
    dateBrth.getDate() === newdate.getDate()
  ) {
    return `У ${name} сегодня праздник, его премия составляет ${
      Math.round(totalcach / 10) * 10
    }`;
  }
};
