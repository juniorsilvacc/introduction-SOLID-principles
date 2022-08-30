import { AppError } from '../../../../config/errors/app-error';
import { InMemoryUsersRepository } from '../../repositories/in-memory/in-memory-users-repository';
import { ShowUserUseCase } from './show-user-usecase';

let inMemoryUsersRepository: InMemoryUsersRepository;
let showUserUseCase: ShowUserUseCase;

describe('Show User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    showUserUseCase = new ShowUserUseCase(inMemoryUsersRepository);
  });

  it('should be able to show a user', async () => {
    const user = await inMemoryUsersRepository.create({
      name: 'Name Test',
      username: 'usernametest',
      email: 'test@example.com',
      registry: '12312312332',
    });

    const show = await showUserUseCase.execute({ id: user.id });

    expect(show).toBe(user);
  });

  it('should not be able to show a user does not exists', async () => {
    await expect(
      showUserUseCase.execute({
        id: 'non-existent',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
