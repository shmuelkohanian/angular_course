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
    [Route("api/lists")]
    [ApiController]
    public class ListsController : ControllerBase
    {
        private readonly IRepository _repo;
        public ListsController(IRepository repo)
        {
            _repo = repo;
        }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TodoList>>> GetAllLists()
        {
            IEnumerable<TodoList> result = await _repo.GetAllLists();
            return Ok(result);
        }
    [HttpGet("{id}")]
    public async Task<ActionResult<TodoList>> GetListById(int id)
        {
            TodoList result = await _repo.GetList(id);
            return Ok(result);
        }
    [HttpPost]
        public async Task<ActionResult<TodoList>> AddList(TodoList list)
        {
            try
            {
                var res = await _repo.AddList(list);
                return Ok(res);
            }
            catch
            {
                return BadRequest();
            }
        }

     [HttpPut("{id}")]
        public async Task<ActionResult<TodoList>> UpdateList(TodoList list)
        {
            try
            {
                var res = await _repo.UpdateList(list);
                return Ok(res);
            }
            catch
            {
                return BadRequest();
            }
        }
     [HttpDelete("{listId}")]
        public async Task<ActionResult<TodoList>> DeleteList(int listId)
        {
            try
            {
                await _repo.DeleteList(listId);
                await _repo.DeleteItems(listId);
                return Ok();
            }
            catch
            {
                return BadRequest();
            }
        }






    }
}
