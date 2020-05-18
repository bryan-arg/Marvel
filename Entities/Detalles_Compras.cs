using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Marvle_API.Entities
{
    public class Detalles_Compras
    {

        public String Nombre_Comic  { get; set; }
       
        public int Cantidad { get; set; }
        public int Valor { get; set; }

       public int compraID { get; set; }

        public int compradorID { get; set; }

        public int id { get; set; }

        public Compra compras { get; set; }
        public Comprador comprador { get; set; }

    }
}
