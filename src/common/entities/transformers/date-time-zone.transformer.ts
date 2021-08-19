import * as momentTimeZone from 'moment-timezone';
import * as moment from 'moment';

export class DateTimeZoneTransformer {
  to(date: Date): Date {
    return momentTimeZone.tz(momentTimeZone(date), 'America/Cancun').toDate();
  }

  from(date: Date | string) {
    const localDate = momentTimeZone(date).tz('America/Cancun');
    return localDate.format('YYYY-MM-DD HH:mm:ss');
  }
}
