
//  convert time in seconds to minute and second
 export const convertSecond = (secSpan) => {
    const min = Math.floor(secSpan / 60);
    const sec = secSpan % 60;
    return [min, sec];
  }

// pad with 0 if the number is less than 10
  export const handleZero = (num) => {
    return num < 10 ? "0" + num : num
    }
