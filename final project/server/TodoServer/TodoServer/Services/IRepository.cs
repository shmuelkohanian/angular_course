using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoServer.Model.Entities;

namespace TodoServer.Services
{
    public interface IRepository
    {
        # region gets
        Task<List<TodoList>> GetAllLists();
        Task<List<TodoItem>> GetAllItems();

        Task<TodoList> GetList(int listId);
        Task<List<TodoItem>> GetItemsByListId(int listId);

        Task<List<TodoItem>> GetActiveItems();
        #endregion

        #region Add - post
        Task<TodoList> AddList(TodoList list);
        Task<TodoItem> AddItem(TodoItem item);

        #endregion

        # region update - put

        Task<TodoList> UpdateList(TodoList list);
        Task<TodoItem> UpdateItem(TodoItem item);

        #endregion

        #region delete

        Task DeleteList(int listId);
        Task DeleteItems(int listId);
        #endregion

    


    }
}
