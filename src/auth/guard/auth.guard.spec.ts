import { AuthGuard } from './auth.guard';

const authServiceMock = {
  tokenMatchesUser: jest.fn(),
};

const contextMock = {
  switchToHttp: jest.fn(),
};

describe('AuthGuard', () => {
  it('should throw "Header authorization está vazio" error if Header authorization field is empty', async () => {
    // Arrange
    contextMock.switchToHttp.mockReturnValue({
      getRequest: () => ({
        headers: {
          authorization: '',
        },
      }),
    });

    // Act
    const authGuard = new AuthGuard(authServiceMock as any);

    let errorMsg;
    try {
      await authGuard.canActivate(contextMock as any);
    } catch (error: any) {
      errorMsg = error.message;
    }

    // Assert
    expect(errorMsg).toBe('Header authorization está vazio');
  });

  it('should throw "Basic token não fornecido" error if "Basic" token was not sent in the Header', async () => {
    // Arrange
    contextMock.switchToHttp.mockReturnValue({
      getRequest: () => ({
        headers: {
          authorization: 'Basic ',
        },
      }),
    });

    // Act
    const authGuard = new AuthGuard(authServiceMock as any);

    let errorMsg;
    try {
      const response = await authGuard.canActivate(contextMock as any);
    } catch (error: any) {
      errorMsg = error.message;
    }

    // Assert
    expect(errorMsg).toBe('Basic token não fornecido');
  });

  it('should throw "Basic token inválido" error if token sent in the authorization field is invalid', async () => {
    // Arrange
    authServiceMock.tokenMatchesUser.mockResolvedValue(false);
    contextMock.switchToHttp.mockReturnValue({
      getRequest: () => ({
        headers: {
          authorization: 'Basic TOKEN_INVALIDO',
        },
      }),
    });

    // Act
    const authGuard = new AuthGuard(authServiceMock as any);

    let errorMsg;
    try {
      const response = await authGuard.canActivate(contextMock as any);
    } catch (error: any) {
      errorMsg = error.message;
    }

    // Assert
    expect(errorMsg).toBe('Basic token inválido');
  });

  it('should return true if token was sent and it is valid', async () => {
    // Arrange
    authServiceMock.tokenMatchesUser.mockResolvedValue(true);
    contextMock.switchToHttp.mockReturnValue({
      getRequest: () => ({
        headers: {
          authorization: 'Basic TOKEN_VÁLIDO',
        },
      }),
    });

    // Act
    const authGuard = new AuthGuard(authServiceMock as any);

    const response = await authGuard.canActivate(contextMock as any);

    // Assert
    expect(response).toBe(true);
  });
});
