using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("[controller]")]
public class UsuarioController : ControllerBase
{
    private readonly prog3Context _context;
    public UsuarioController(prog3Context context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<UserModel>>> Get()
    {
        var users = await _context.Usuarios.Select(x => new UserModel
        {
            id = x.Id,
            email = x.Email,
            password = x.Password,
            activo = x.Activo
        }).ToListAsync();
        return Ok(users);
    }


    [HttpPost]
    public async Task<ActionResult<UserModel>> Create(UserCreateModel user)
    {
        var newUser = new Api.Data.Usuario
        {
            Email = user.email,
            Password = user.password,
            Activo = user.activo

        };
        _context.Usuarios.Add(newUser);
        await _context.SaveChangesAsync();

        var userModel = new UserModel
        {
            id = newUser.Id,
            email = newUser.Email,
            password = newUser.Password,
            activo = newUser.Activo

        };
        return Ok(userModel);
    }


}



