using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Marvle_API.Context;
using Microsoft.AspNetCore.Mvc;
using Marvle_API.Entities;
using Microsoft.EntityFrameworkCore;
using DocumentFormat.OpenXml.Office2010.Excel;
using Nest;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Marvle_API.Controllers
{
    [Route("api/[controller]")]
    public class DetallesController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public DetallesController(ApplicationDbContext context)
        {
            this.context = context;

        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Detalles_Compras> Get()
        {

            return context.Detalles_Compras.Include(x =>x.compras).Include(w=>w.comprador).ToList();
        }

        //GET api/<controller>/5
       /* [HttpGet("{id}", Name = "ObtenerComprador")]
        public ActionResult<Detalles_Compras> Get(int id)
        {
            var detalle = context.Detalles_Compras.Include(x => x.compras).Include(w => w.comprador).FirstOrDefault(x => x.compraID == id);
            if (detalle == null)
            {
                return BadRequest();
            }
            return detalle;
        }
        */
        // POST api/<controller>
        [HttpPost]
        public ActionResult Post([FromBody]Detalles_Compras detalle)
        {
            try
            {
                context.Detalles_Compras.Add(detalle);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest();
            }

        }

    }
}
