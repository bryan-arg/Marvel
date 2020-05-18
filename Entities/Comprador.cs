using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Marvle_API.Entities
{
    public class Comprador
    {
        public int id { get; set; }

        public String Nombre { get; set; }
        public int Documento { get; set; }

        public int Telefono { get; set; }

        public String Direccion { get; set; }
    }
}
