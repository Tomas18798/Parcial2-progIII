using System.ComponentModel;
using Api.Data;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("[controller]")]
public class PersonController : ControllerBase
{
    private readonly prog3Context _context;
    public PersonController(prog3Context context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Persona>>> Get()
    {
        var personas = await _context.Personas.Select(x => new PersonaModel
        {
            id = x.Id,
            nombre = x.Nombre,
            apellido = x.Apellido,
            dni = x.Dni,
            direccion = x.Direccion
        }).ToListAsync();
        return Ok(personas);
    }


    [HttpPost]
    public async Task<ActionResult<PersonaModel>> Create(PersonaCreateModel persona)
    {
        var newPersona = new Persona
        {
            Nombre = persona.nombre,
            Apellido = persona.apellido,
            Dni = persona.dni,
            Direccion = persona.direccion

        };
        _context.Personas.Add(newPersona);
        await _context.SaveChangesAsync();

        var personaModel = new PersonaModel
        {
            id = newPersona.Id,
            nombre = newPersona.Nombre,
            apellido = newPersona.Apellido,
            dni = newPersona.Dni,
            direccion = newPersona.Direccion

        };
        return Ok(personaModel);
    }


}