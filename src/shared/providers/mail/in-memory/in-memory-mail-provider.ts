import { IMailProvider, IMessage } from '../mail-provider';

class InMemoryMailProvider implements IMailProvider {
  private messages: IMessage[] = [];

  async sendMail(message: IMessage): Promise<void> {
    this.messages.push(message);
  }
}

export { InMemoryMailProvider };
