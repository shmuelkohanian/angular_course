using Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TodoServer.Services
{
	public interface IItemsRepository
	{
		Item AddItem(Item item);
		void DeleteItems(long itemId);
		List<Item> GetAllItems();
		List<Item> GetAllActiveItems();
		List<Item> GetItemsByListId(long listId);
		Item UpdateItem(Item item);
	}
}