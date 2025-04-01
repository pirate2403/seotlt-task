export class DateFormatter {
  static formatToRu(date: string | Date): string {
    return new Intl.DateTimeFormat('ru-RU').format(new Date(date));
  }
}
