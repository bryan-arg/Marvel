using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Marvle_API.Entities;


namespace Marvle_API.Context
{
        public class ApplicationDbContext : DbContext
        {
            public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
            {

            }

            public DbSet<Compra> Compras { get; set; }

            public DbSet<Comprador> Compradores { get; set; }

            public DbSet<Detalles_Compras> Detalles_Compras { get; set; }


    }
    
}
