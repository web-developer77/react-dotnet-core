using System;
using System.Collections.Generic;

namespace todo_list_with_mssql.Models
{
    public interface ITaskRepository
    {
        IEnumerable<TaskModel> GetAll();
        
        TaskModel Add(TaskModel task);
    }
}