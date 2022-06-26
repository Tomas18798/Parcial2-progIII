namespace Api.Models;

public class UserCreateModel
{
    public string? email { get; set; }
    public string? password { get; set; }
    public bool? activo { get; set; }
}