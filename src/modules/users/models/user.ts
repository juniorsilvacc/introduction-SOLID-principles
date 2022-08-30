import { v4 as uuidV4 } from 'uuid';

class User {
  public id: string;
  public name: string;
  public username: string;
  public email: string;
  public registry: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
