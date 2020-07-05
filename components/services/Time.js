export default {
  timestampToTime(timeCode) {
    const date = new Date(timeCode * 1000);

    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();

    return hours + ":" + minutes.substr(-2);
  },

  timestampToDate(timeCode) {
    const date = new Date(timeCode * 1000);

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    return year + "/" + month + "/" + day;
  },
};
