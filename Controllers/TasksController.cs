using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace todo_list_with_mssql.Controllers
{
    [ApiController]
    public class TasksController : ControllerBase
    {

        private readonly ILogger<TasksController> _logger;

        static readonly Models.ITaskRepository repository = new Models.TaskRepository();

        public TasksController(ILogger<TasksController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("api/tasks")]
        public IEnumerable<Models.TaskModel> GetAllTasks()
        {
            return repository.GetAll();
        }

        [HttpPost]
        [Route("api/task")]
        [Consumes("application/json")]
        public Models.TaskModel PostUser(Models.TaskModel item)
        {
            return repository.Add(item);
        }
        

    }
}
