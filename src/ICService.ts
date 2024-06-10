import {Dayjs} from 'dayjs';

type TimeLineEntry = {
  date: Dayjs;
  value: number;
};

export class ICService {
  private static instance: ICService;
  public static getInstance() {
    if (!ICService.instance) {
      ICService.instance = new ICService();
    }
    return ICService.instance;
  }

  calculateIC(precentCapital: number, time: number, rate: number): number {
    return precentCapital * (1 + rate / 100) ** time;
  }
  calculateICFuture(futureCapital: number, time: number, rate: number): number {
    return futureCapital / (1 + rate / 100) ** time;
  }
  calculateICtime(
    precentCapital: number,
    futureCapital: number,
    rate: number,
  ): number {
    return Math.log(futureCapital / precentCapital) / Math.log(1 + rate / 100);
  }
  calculateICRate(precentCapital: number, time: number, futureCapital: number) {
    return ((futureCapital / precentCapital) ** (1 / time) - 1) * 100;
  }

  calculateFromTimeLine(
    timeLine: Array<TimeLineEntry>,
    focalDate: Dayjs,
    rate: number,
    unit: 'day' | 'week' | 'month' | 'year',
  ) {
    let result = 0;
    for (let entry of timeLine) {
      if (entry.date.isBefore(focalDate)) {
        const time = entry.date.diff(focalDate, unit);
        result += this.calculateIC(entry.value, time, rate);
      } else if (entry.date.isAfter(focalDate)) {
        const time = focalDate.diff(entry.date, unit);
        result += this.calculateICFuture(entry.value, time, rate);
      } else {
        result += entry.value;
      }
    }
    return result;
  }
}
