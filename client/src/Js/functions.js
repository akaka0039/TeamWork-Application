// get date
const date = new Date();
const month = date.getMonth() === 0 ? 1 : date.getMonth() + 1;
const year = date.getFullYear();
const day = date.getDate();
export const dateToStr = year + "-" + month + "-" + day;
