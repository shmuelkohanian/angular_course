using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using TodoServer.Model.Entities;
using TodoServer.Utilities;

namespace TodoServer.Services
{
    public class DataReader : IDataReader
    {

        private const string _basePath = "Data";
        private const string _itemsFile = "TodoItems.csv";
        private const string _listsFile = "TodoLists.csv";


        public Task<IEnumerable<TodoItem>> GetAllItems()
        {
            return Task.FromResult(File
                .ReadAllLines($"{_basePath}/{_itemsFile}")
                .Skip(1)
                .Where(str => !string.IsNullOrWhiteSpace(str))
                .Select(str => str.ToItem()));
        } 
        public Task<IEnumerable<TodoList>> GetAllLists()
        {
            return Task.FromResult(File
                .ReadAllLines($"{_basePath}/{_listsFile}")
                .Skip(1)
                .Where(str => !string.IsNullOrWhiteSpace(str))
                .Select(str => str.ToList()));
        }


    }
}
