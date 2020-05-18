using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Marvle_API.Context;
    using Marvle_API.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Marvle_API.Controllers
{
    [Route("api/[controller]")]
    public class CompradorController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public CompradorController(ApplicationDbContext context)
        {
            this.context = context;
        }
        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Comprador> Get()
        {
            return context.Compradores.ToList();
        }

        // GET api/<controller>/5
        [HttpGet("{id}", Name = "ObtenerComprador")]
        public ActionResult<Comprador> Get(int id)
        {
            var comprador= context.Compradores.FirstOrDefault(x => x.id == id);
            if ( comprador== null)
            {
                return BadRequest();
                    }
            return comprador;
        }

        // POST api/<controller>
        [HttpPost]
        public ActionResult Post([FromBody]Comprador comprador)
        {
            try
            {
                context.Compradores.Add(comprador);
                context.SaveChanges();
                return Ok();
            }
            catch(Exception  e)
            {
                return BadRequest();
            }
           
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
       // public ActionResult Put(int id, [FromBody]Comprador comprador)
        //{
       // }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
