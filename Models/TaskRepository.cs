using System;
using System.Collections.Generic;

namespace todo_list_with_mssql.Models
{
    public class TaskRepository: ITaskRepository
    {
        private List<TaskModel> tasks = new List<TaskModel>();
        private int _nextId = 1;

        public TaskRepository()
        {
            Add(new TaskModel { taskName= "first task", taskDesc="this is the first tast", isCompleted="true"});
        }

        public IEnumerable<TaskModel> GetAll()
        {
            return tasks;
        }

        public TaskModel Add(TaskModel item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            item.Id = _nextId++;
            tasks.Add(item);
            return item;
        }
    }
}