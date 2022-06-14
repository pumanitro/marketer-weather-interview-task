import Day from 'assets/day.svg';
import CloudyDay1 from 'assets/cloudy-day-1.svg';
import CloudyDay3 from 'assets/cloudy-day-3.svg';
import Cloudy from 'assets/cloudy.svg';
import Rainy6 from 'assets/rainy-6.svg';
import Rainy7 from 'assets/rainy-7.svg';
import Rainy3 from 'assets/rainy-3.svg';
import Thunder from 'assets/thunder.svg';
import Snowy6 from 'assets/snowy-6.svg';

export const mapIconIdToSvg = (iconId: string) => {
  // ids based on API
  switch (iconId) {
    case '01d':
      return Day;
    case '02d':
      return CloudyDay1;
    case '03d':
      return CloudyDay3;
    case '04d':
      return Cloudy;
    case '09d':
      return Rainy6;
    case '10d':
      return Rainy3;
    case '11d':
      return Thunder;
    case '13d':
      return Snowy6;
    case '50d':
      return Rainy7;
  }
  return null;
};
