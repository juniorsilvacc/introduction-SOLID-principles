import { InMemoryMailProvider } from '../../../../shared/providers/mail/in-memory/in-memory-mail-provider';
import { InMemoryUsersRepository } from '../../repositories/in-memory/in-memory-users-repository';
import { CreateUserUseCase } from './create-user-usecase';

let inMemoryUsersRepository: InMemoryUsersRepository;
let inMemoryMailProvider: InMemoryMailProvider;
let createUserUseCase: CreateUserUseCase;

describe('Create User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    inMemoryMailProvider = new InMemoryMailProvider();
    createUserUseCase = new CreateUserUseCase(
      inMemoryUsersRepository,
      inMemoryMailProvider,
    );
  });

  test('should create a new user', async () => {
    const sendMail = jest.spyOn(inMemoryMailProvider, 'sendMail');

    const user = await createUserUseCase.execute({
      name: 'Name Test',
      username: 'usernametest',
      email: 'test@example.com',
      registry: '12312312332',
    });

    expect(user).toHaveProperty('id');
    expect(sendMail).toHaveBeenCalled();
  });
});
