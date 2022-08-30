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

  it('should not be able to switch to another user email if it already exists', async () => {
    await inMemoryUsersRepository.create({
      name: 'Name Test',
      username: 'usernametest',
      email: 'test@example.com',
      registry: '12312312332',
    });

    expect(
      updateUserUseCase.execute({
        id: '1410291283912831',
        name: 'Name Test',
        username: 'usernametest',
        email: 'test@example.com',
        registry: '12312312332',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update', async () => {
    const user = await inMemoryUsersRepository.create({
      name: 'Name Test',
      username: 'usernametest',
      email: 'test@example.com',
      registry: '12312312332',
    });

    await updateUserUseCase.execute({
      id: user.id,
      name: 'Name Test Update',
      username: 'usernametest Update',
      email: 'update@example.com',
      registry: '12312312332',
    });

    expect(user.name).toBe('Name Test Update');
    expect(user.username).toBe('usernametest Update');
    expect(user.email).toBe('update@example.com');
    expect(user.registry).toBe('12312312332');
  });
});
