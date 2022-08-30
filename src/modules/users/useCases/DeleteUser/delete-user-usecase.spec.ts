import { AppError } from '../../../../config/errors/app-error';
import { InMemoryUsersRepository } from '../../repositories/in-memory/in-memory-users-repository';
import { DeleteUserUseCase } from './delete-user-usecase';

let inMemoryUsersRepository: InMemoryUsersRepository;
let deleteUserUseCase: DeleteUserUseCase;

describe('Delete User', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    deleteUserUseCase = new DeleteUserUseCase(inMemoryUsersRepository);
  });

  test('should not be able to delete a user does not exist', async () => {
    expect(
      deleteUserUseCase.execute({
        id: 'non-exists',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  test('shold delete a user', async () => {
    const user = await inMemoryUsersRepository.create({
      name: 'Name Test',
      username: 'usernametest',
      email: 'test@example.com',
      registry: '12312312332',
    });

    const deleteUser = await deleteUserUseCase.execute({ id: user.id });

    expect(deleteUser).toBeUndefined();
  });
});
