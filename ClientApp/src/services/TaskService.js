export async function getAllTasks() {

    const response = await fetch('/api/tasks');
    return await response.json();
}

export async function createTask(data) {
    const response = await fetch(`/api/task`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}