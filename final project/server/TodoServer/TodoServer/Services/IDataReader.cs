using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoServer.Model.Entities;

namespace TodoServer.Services
{
    public interface IDataReader
    {
        Task<IEnumerable<TodoList>> GetAllLists();
        Task<IEnumerable<TodoItem>> GetAllItems();




    }
}
