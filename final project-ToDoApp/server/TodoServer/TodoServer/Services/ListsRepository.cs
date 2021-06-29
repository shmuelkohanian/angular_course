using Model;
using System;
using System.Collections.Generic;
using TodoServer.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace TodoServer.Services
{
	public class ListsRepository : IListsRepository
	{
		private readonly TodoDbContext _todoDbContext;

		public ListsRepository(TodoDbContext todoDbContext)
		{
			_todoDbContext = todoDbContext;
		}

		public List AddList(List list)
		{
			//using (var transaction = _todoDbContext.Database.BeginTransaction())
			//{
			//	await _todoDbContext.Lists.AddAsync(list);
			//	await _todoDbContext.SaveChangesAsync();
			//}
			_todoDbContext.Lists.Add(list);
			_todoDbContext.SaveChanges();

			return list;
		}

		public List GetList(long listId)
		{
			//List list = await _todoDbContext.Lists.FindAsync(listId);
			List list = _todoDbContext.Lists.FirstOrDefault(x => x.Id.Equals(listId));
			_todoDbContext.Entry(list).State = EntityState.Detached;
			return list;
		}


		public List<List> GetAllLists()
		{
			List<List> lists = _todoDbContext.Lists.ToList();

			return lists;
		}
		public List UpdateList(List list)
		{
			_todoDbContext.Lists.Update(list);
			_todoDbContext.SaveChanges();

			return list;
		}

		public void DeleteList(long listId) // change to DeleteList(List list)
		{
			List list =  GetList(listId);
			_todoDbContext.Entry(list).State = EntityState.Detached;  

			_todoDbContext.Lists.Remove(list);
			_todoDbContext.SaveChanges();
		}
	}
}
