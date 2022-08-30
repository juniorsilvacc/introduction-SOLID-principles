import { InMemoryUsersRepository } from '../../repositories/in-memory/in-memory-users-repository';
import { ListAllUsersUseCase } from './list-all-users-usecase';

let inMemoryUsersRepository: InMemoryUsersRepository;
let listAllUsersCase: ListAllUsersUseCase;

describe('List User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    listAllUsersCase = new ListAllUsersUseCase(inMemoryUsersRepository);
  });

  it('should be able to list all users', async () => {
    const userOne = await inMemoryUsersRepository.create({
      name: 'Name Test',
      username: 'usernametest',
      email: 'test@example.com',
      registry: '12312312332',
    });

    const userTwo = await inMemoryUsersRepository.create({
      name: 'Name Test 2',
      username: 'usernametest 2',
      email: 'test2@example.com',
      registry: '12312312332',
    });

    const userTree = await inMemoryUsersRepository.create({
      name: 'Name Test 3',
      username: 'usernametest 3',
      email: 'test3@example.com',
      registry: '12312312332',
    });

    const users = await listAllUsersCase.execute();

    expect(users).toEqual([userOne, userTwo, userTree]);
  });
});
