import { AppError } from '../../../../config/errors/app-error';
import { InMemoryUsersRepository } from '../../repositories/in-memory/in-memory-users-repository';
import { UpdateUserUseCase } from './update-user-usecase';

let inMemoryUsersRepository: InMemoryUsersRepository;
let updateUserUseCase: UpdateUserUseCase;

describe('Update User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    updateUserUseCase = new UpdateUserUseCase(inMemoryUsersRepository);
  });

  it('should not be able to update a user does not exists', async () => {
    expect(
      updateUserUseCase.execute({
        id: 'non-existent',
        name: 'Name Test',
        username: 'usernametest',
        email: 'test@example.com',
        registry: '12312312332',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
