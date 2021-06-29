using Model;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TodoServer.Services
{
	public interface IListsRepository
	{
		List AddList(List list);
		void DeleteList(long listId);
		List<List> GetAllLists();
		List GetList(long listId);
		List UpdateList(List list);
	}
}