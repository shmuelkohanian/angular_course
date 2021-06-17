using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoServer.Model.Entities
{
    public record TodoList(

        int Id,
        string Caption,
        string Description,
        string Image,
        string Color
     );

}
