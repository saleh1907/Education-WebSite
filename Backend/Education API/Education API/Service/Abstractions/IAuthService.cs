using Education_API.Dtos.Auth;

namespace Education_API.Service.Abstractions;

public interface IAuthService
{
    Task<string> RegisterAsync(RegisterDto dto);
    Task<AuthResponseDto> LoginAsync(LoginDto dto);
}
