namespace todo_list_with_mssql.Models
{
    public class TaskModel
    {
        public int Id { get; set; }
        
        public string taskName { get; set; }

        public string taskDesc { get; set; }

        public string isCompleted { get; set; }
    }
}