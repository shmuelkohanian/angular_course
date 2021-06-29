using Microsoft.AspNetCore.Mvc;
using Model;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TodoServer.Services;

namespace TodoServer.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ListsController : ControllerBase
	{
		private readonly IListsRepository _listRepo;
		private readonly IItemsRepository _itemRepo;

		public ListsController(IListsRepository listRepo, IItemsRepository itemRepo)
		{
			_listRepo = listRepo;
			_itemRepo = itemRepo;
		}


		[HttpGet]
		public ActionResult<List<List>> GetAllLists()
		{
			try
			{
				List<List> result = _listRepo.GetAllLists();
				return Ok(result);
			}
			catch
			{
				return NotFound();
			}
		}

		[HttpGet("{id}")]
		public ActionResult<List> GetList(long id)
		{
			List result = _listRepo.GetList(id);

			if (result != null)  // check if exist
			{
				return Ok(result);
			}
			else
			{
				return NotFound();
			}
		}

		[HttpPost]
		public ActionResult<List> AddList(List list)
		{
			try
			{
				List result = _listRepo.AddList(list);
				return CreatedAtAction(nameof(GetList), new { id = result.Id }, result);
			}
			catch
			{
				return BadRequest();
			}
		}

		[HttpPut("{id}")]
		public ActionResult<List> UpdateList([FromRoute] long id, List list)
		{
			List result = _listRepo.GetList(id);

			if (result != null) // check if exist
			{
				list.Id = result.Id; // avoid bugs
				result = _listRepo.UpdateList(list);
				return Ok(result);
			}
			else
			{
				return NotFound();
			}
		}

		[HttpDelete("{listId}")]
		public ActionResult<List> DeleteList(long listId)
		{
			List result = _listRepo.GetList(listId);

			if (result != null) // check if exist
			{
				_listRepo.DeleteList(listId);
				//_itemRepo.DeleteItems(listId);
				return Ok();
			}
			else
			{
				return NotFound();
			}
		}

	}
}
