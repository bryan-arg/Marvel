using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Marvle_API.Entities
{
    public class Compra
    {
        public int id { get; set; }
        public int No_Orden { get; set; }
        public DateTime Fecha { get; set; }

        public int Total { get; set; }
         
    }
}
