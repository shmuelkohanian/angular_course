using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoServer.Services;
using TodoServer.Model.Entities;

namespace TodoServer.Controllers
{
    [Route("api/items")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IRepository _repo;

        public ItemsController(IRepository repo)
        {
            _repo = repo;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoItem>>> GetAllItems()
        {
            IEnumerable<TodoItem> result = await _repo.GetAllItems();
            return Ok(result);
        }


        [HttpPost]
        public async Task<ActionResult<TodoItem>> AddItem(TodoItem item)
        {
            try
            {
                var res = await _repo.AddItem(item);
                return Ok(res);
            }
            catch
            {
                return BadRequest();
            }
        }



        [HttpPut("{id}")]
        public async Task<ActionResult<TodoItem>> UpdateItem(TodoItem item)
        {
            try
            {
                var res = await _repo.UpdateItem(item);
                return Ok(res);
            }
            catch
            {
                return BadRequest();
            }
        }
        //[HttpDelete("{listId}")]
        //public async Task<ActionResult<TodoItem>> DeleteItem(int listId)
        //{
        //    try
        //    {
        //        await _repo.DeleteItems(listId);
        //        return Ok();
        //    }
        //    catch
        //    {
        //        return BadRequest();
        //    }
        //}

    }


}
