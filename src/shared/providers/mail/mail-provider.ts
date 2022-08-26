interface IAddress {
  name: string;
  email: string;
}

interface IMessage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}

interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}

export { IMailProvider, IMessage };
