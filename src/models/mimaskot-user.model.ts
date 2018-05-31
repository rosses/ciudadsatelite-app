import { OptUser, OptEntity } from '@option/core';

export class MimaskotUser extends OptUser {
  avatar: string;

  protected decode(jsonObject: object): void {
    super.decode(jsonObject);

    this.avatar = jsonObject['avatar'];
  }
}
