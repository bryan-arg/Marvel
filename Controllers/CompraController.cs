using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Marvle_API.Entities;
using Marvle_API.Context;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Marvle_API.Controllers
{
    [Route("api/[controller]")]
    public class CompraController : ControllerBase
    {
        private readonly ApplicationDbContext context;

        public CompraController(ApplicationDbContext context)
        {
            this.context = context;
        }

        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<Compra> Get()
        {
            return context.Compras.ToList();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public ActionResult Post([FromBody]Compra compra)
        {

            try
            {
                context.Compras.Add(compra);
                context.SaveChanges();
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
