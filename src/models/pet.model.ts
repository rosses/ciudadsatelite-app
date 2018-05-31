import { OptEntity } from '@option/core';

export class Pet extends OptEntity {
  name: string;
  color: string;
  size: string;
  qr: string;
  identifier: string;
  extraInfo: string;
  birthday: any;
  media: string[];
  principalMedia: string;
  type: string;
  sex: string;
  missing: number;
  available: number;
  breed: string;
  additionalImages: string;
  avatar: string;
  code: string;

  protected decode(jsonObject: object): void {
    this.id = jsonObject['id'];
    this.name = jsonObject['name'];
    this.color = jsonObject['color'];
    this.size = jsonObject['size'];
    this.qr = jsonObject['qr'];
    this.identifier = jsonObject['identifier'];
    this.extraInfo = jsonObject['extraInfo'];
    this.principalMedia = jsonObject['principalMedia'];
    this.additionalImages = jsonObject['additionalImages'];
    this.code = jsonObject['code'];
    this.avatar = jsonObject['avatar'];
    this.media = jsonObject['media'];
    this.missing = jsonObject['missing'];
    this.available = jsonObject['available'];
    this.type = jsonObject['type'];
    this.sex = jsonObject['sex'];
    this.breed = jsonObject['breed'];
    /*
    if (jsonObject['birthday']) {
      this.birthday = new Date(jsonObject['created']);
      this.normalizeDateToUsersLocale(this.birthday);
    }
    */
  }

  getFormEntityName(): string {
    return 'pet';
  }

  private normalizeDateToUsersLocale(date: Date){
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  }
}
