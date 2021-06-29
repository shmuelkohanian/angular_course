using Model;
using System;
using System.Collections.Generic;
using TodoServer.Data;
using System.Linq;
using System.Threading.Tasks;

namespace TodoServer.Services
{
	public class ItemsRepository : IItemsRepository
	{
		private readonly TodoDbContext _todoDbContext;

		public ItemsRepository(TodoDbContext todoDbContext)
		{
			_todoDbContext = todoDbContext;
		}

		public Item AddItem(Item item)
		{
			//using (var transaction = _todoDbContext.Database.BeginTransaction())
			//{
			//	await _todoDbContext.Items.AddAsync(item);
			//	await _todoDbContext.SaveChangesAsync();
			//}

			_todoDbContext.Items.Add(item);
			_todoDbContext.SaveChanges();

			return item;
		}

		public List<Item> GetAllItems()
		{
			List<Item> Items = _todoDbContext.Items.ToList();
			return Items;
		}

		public List<Item> GetAllActiveItems()
		{
			List<Item> Items = _todoDbContext.Items
								.Where(item => !item.IsCompleted)
								.ToList();

			return Items;
		}

		public List<Item> GetItemsByListId(long listId)
		{
			List<Item> items = _todoDbContext.Items
									.Where(item => item.ListId == listId)
									.ToList();

			return items;
		}

		public Item UpdateItem(Item item)
		{
			_todoDbContext.Items.Update(item);
			_todoDbContext.SaveChanges();

			return item;
		}

		public void DeleteItems(long itemId)
		{
			List<Item> items = GetItemsByListId(itemId);

			_todoDbContext.Items.RemoveRange(items);
			_todoDbContext.SaveChanges();
		}


	}
}
