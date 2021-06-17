using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using TodoServer.Model.Entities;
using TodoServer.Utilities;

namespace TodoServer.Services
{
    public class DataWriter:IDataWriter
    {
        private const string _basePath = "Data";
        private const string _itemsFile = "TodoItems.csv";
        private const string _listsFile = "TodoLists.csv";
        async public void SaveList(Dictionary<int, TodoList> dic)
        {
            var tableListHeader = "id,caption,description,image,color";
            string docPath = $"{_basePath}/{_listsFile}";
            var lines = dic.Values.Select(list => list.ListToLine());
            using (StreamWriter outputFile = new StreamWriter(docPath))
            {
                await outputFile.WriteLineAsync(tableListHeader);
                foreach (string line in lines)
                    await outputFile.WriteLineAsync(line);
            }
        }


        async public void AppendList(TodoList list)
        {
            string docPath = $"{_basePath}/{_listsFile}";

            var line = list.ListToLine();

            using (StreamWriter outputFile = new StreamWriter(docPath, true))
            {
                await outputFile.WriteLineAsync(line);
            }
        }



        async public void SaveItem(Dictionary<int, TodoItem> dic)
        {
            var tableItemHeader = "id,caption,listId,isComleted";
            string docPath = $"{_basePath}/{_itemsFile}";

            var lines = dic.Values.Select(item => item.ItemToLine());

            using (StreamWriter outputFile = new StreamWriter(docPath))
            {
                await outputFile.WriteLineAsync(tableItemHeader);
                foreach (string line in lines)
                    await outputFile.WriteLineAsync(line);
            }
        }


        async public void AppendItem(TodoItem item)
        {
            string docPath = $"{_basePath}/{_itemsFile}";
            var line = item.ItemToLine();

            using (StreamWriter outputFile = new StreamWriter(docPath, true))
            {
                await outputFile.WriteLineAsync(line);
            }
        }
    }
}
