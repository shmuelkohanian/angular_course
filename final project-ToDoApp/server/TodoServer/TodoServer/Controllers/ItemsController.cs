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
	public class ItemsController : ControllerBase
	{
		private readonly IItemsRepository _itemRepo;

		public ItemsController(IItemsRepository itemRepo)
		{
			_itemRepo = itemRepo;
		}


		[HttpGet]
		public ActionResult<List<Item>> GetAllItems()
		{
			List<Item> result = _itemRepo.GetAllItems();
			return Ok(result);
		}

		[HttpGet("{id}")]
		public ActionResult<List<Item>> GetItemsByListId(long id)
		{
			List<Item> result = _itemRepo.GetItemsByListId(id);

			if (result != null) // check if exist
			{
				return Ok(result);
			}
			else
			{
				return NotFound();
			}
		}

		[HttpPost]
		public ActionResult<Item> AddItem(Item item)
		{
			try
			{
				Item result = _itemRepo.AddItem(item);
				return Ok(result);
			}
			catch
			{
				return BadRequest();
			}
		}

		[HttpPut("{id}")]
		public ActionResult<Item> UpdateItem(Item item)
		{
			Item result = _itemRepo.UpdateItem(item);

			if (result != null) // check if exist
			{
				return Ok(result);
			}
			else
			{
				return NotFound();
			}
		}

		//[HttpGet]
		//public ActionResult<List<Item>> GetAllActiveItems()
		//{
		//	List<Item> result = _itemRepo.GetAllActiveItems();
		//	return Ok(result);
		//}

	}
}

