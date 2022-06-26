namespace Api.Models;

public class UserModel
{
    public int id { get; set; }
    public string? email { get; set; }
    public string? password { get; set; }
    public bool? activo { get; set; }
}