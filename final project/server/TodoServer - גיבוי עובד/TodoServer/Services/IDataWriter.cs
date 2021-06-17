using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoServer.Model.Entities;

namespace TodoServer.Services
{
    public interface IDataWriter
    {
        void SaveList(Dictionary<int, TodoList> dic);
        void AppendList(TodoList list);
        void SaveItem(Dictionary<int, TodoItem> dic);

        void AppendItem(TodoItem item);
    }
}
