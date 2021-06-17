using TodoServer.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoServer.Utilities
{
    public static class StringExtensions
    {
        public static string[] ToColumns(this string source)
        {
            return source
                .Split(',')
                .Select(s => s.Trim())
                .ToArray();
        }

        public static TodoList ToList(this string source)
        {
            var cols = source.ToColumns();
            Console.WriteLine(int.Parse(cols[0]));
            return new TodoList(
                Id:int.Parse(cols[0]),
                Caption: cols[1],
                Description: cols[2],
                Image: cols[3],
                Color: cols[4]
            );
        }

        public static TodoItem ToItem(this string source)
        {
            var cols = source
                .Split(',')
                .Select(s => s.Trim())
                .ToArray();

            return new TodoItem(
                Id :int.Parse(cols[0]),
                Caption: cols[1],
                ListId: int.Parse(cols[2]),
                IsCompleted :bool.Parse(cols[3])

            );
        }


        public static string ItemToLine(this TodoItem item )
        {
            var line = $"{item.Id},{item.Caption},{item.ListId},{item.IsCompleted}";
            return line;

        }

        public static string ListToLine(this TodoList list)
        {
            var line = $"{list.Id},{list.Caption},{list.Description},{list.Image},{list.Color}";
            return line;

        }
    }
}
