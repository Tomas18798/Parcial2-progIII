using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("[controller]")]
public class DeporteController : ControllerBase
{
    private readonly prog3Context _context;
    public DeporteController(prog3Context context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<DeporteModel>>> Get()
    {
        var deportes = await _context.Deportes.Select(x => new DeporteModel
        {
            id = x.Id,
            nombre = x.Nombre

        }).ToListAsync();
        return Ok(deportes);
    }

}