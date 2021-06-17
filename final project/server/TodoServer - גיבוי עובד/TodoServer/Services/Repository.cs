using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoServer.Model.Entities;

namespace TodoServer.Services
{
	public class Repository : IRepository
	{


		private Dictionary<int, TodoList> _lists = new();
		private Dictionary<int, TodoItem> _items = new();
		private IDataReader _dataReader;
		private IDataWriter _dataWriter;
		private bool _isAllListsLoaded = false;
		private bool _isAllItemsLoaded = false;
		private int _maxListId=0;
		private int _maxItemId=0;




		public Repository(IDataReader dataReader, IDataWriter dataWriter )
        {
            _dataReader = dataReader;
			_dataWriter = dataWriter;

		}

        #region Gets
        public async Task<List<TodoList>> GetAllLists()
		{
			await _ensureAllListsLoaded();
			return _lists.Values.ToList();
		}
		public async Task<TodoList> GetList(int listId)
		{
			await _ensureAllListsLoaded();
			return _lists[listId];
		}

		public async Task<List<TodoItem>> GetAllItems()
		{
			await _ensureAllItemsLoaded();
			return _items.Values.ToList();

		}

		public async Task<List<TodoItem>> GetItemsByListId(int listId)
		{
			await _ensureAllItemsLoaded();
			return _items.Values
				.Where(item=>item.ListId==listId)
				.ToList();
		}

		public async Task<List<TodoItem>> GetActiveItems()
		{
			await _ensureAllItemsLoaded();
			return _items.Values
				.Where(item => !item.IsCompleted)
				.ToList();
		}
		#endregion

		#region Add
		public Task<TodoItem> AddItem(TodoItem item)
		{
			_maxItemId++;
			var _item = item with { Id = _maxItemId };
			_items.Add(_item.Id, _item );
			_dataWriter.AppendItem(_item);
			return Task.FromResult(_item);
		}

		public Task<TodoList> AddList(TodoList list)
		{
			_maxListId++;
			var _list = list with { Id = _maxListId  };
			_lists.Add(_list.Id, _list);
			_dataWriter.AppendList(_list);
			return Task.FromResult(_list);
		}
		#endregion

		#region Updatets
		public Task<TodoItem> UpdateItem(TodoItem item)
		{
			_items[item.Id] = item;
			_dataWriter.SaveItem(_items);
			return Task.FromResult(item);
		}

		public Task<TodoList> UpdateList(TodoList list)
		{
			_lists[list.Id] = list;
			_dataWriter.SaveList(_lists);
			return Task.FromResult(list);
		}
		#endregion

		#region Delete
		public Task DeleteItems(int listId)
		{


			var remainsItems = _items.Values.Where(item => item.ListId != listId).ToDictionary(D => D.Id);
			_items = remainsItems;
			_dataWriter.SaveItem(_items);
			return Task.CompletedTask;
		}

		public Task DeleteList(int listId)
		{
			_lists.Remove(listId);
			_dataWriter.SaveList(_lists);
			return Task.CompletedTask;
		}


		#endregion

		#region LoadedData?  (ensureAllListsLoaded , ensureAllItemsLoaded)

		private async Task _ensureAllListsLoaded()
		{
			if (_isAllListsLoaded) return;

			_isAllListsLoaded = true;
			_lists = (await _dataReader.GetAllLists()).ToDictionary(c => c.Id);
            if (_lists.Count > 0)
            {
				_maxListId = _lists.Values.Max(m => m.Id);
			}
		}


		private async Task _ensureAllItemsLoaded()
		{
			if (_isAllItemsLoaded) return;

			_isAllItemsLoaded = true;
			_items = (await _dataReader.GetAllItems()).ToDictionary(c => c.Id);
			if (_items.Count > 0)
			{
				_maxItemId = _items.Values.Max(m => m.Id);
			}

		}


		#endregion
	}
}
