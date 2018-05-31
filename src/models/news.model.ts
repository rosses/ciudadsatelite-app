import { OptEntity } from '@option/core';

export class News extends OptEntity {
  id: number;
  title: any;
  date: Date;
  image: string;
  pretext: string;
  content: string;

  protected decode(jsonObject: object): void {
    console.log('decode', jsonObject);
    this.image = jsonObject['image'];
    this.title = jsonObject['title'];
    this.content = jsonObject['content'];
    this.pretext = jsonObject['pretext'];
    this.id = jsonObject['id'];

    if (jsonObject['date']) {
      this.date = new Date(jsonObject['date']);
      this.normalizeDateToUsersLocale(this.date);
    }
  }

  getFormEntityName(): string {
    return 'news';
  }

  private normalizeDateToUsersLocale(date: Date){
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  }
}
