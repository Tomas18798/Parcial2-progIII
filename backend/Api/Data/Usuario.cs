﻿using System;
using System.Collections.Generic;

namespace Api.Data
{
    public partial class Usuario
    {
        public int Id { get; set; }
        public string Email { get; set; } = null!;
        public string Password { get; set; } = null!;
        public bool? Activo { get; set; }
    }
}
