const BASE_API_URL = 'http://localhost:3000/tasks';
const tableElement = /** @type {HTMLElement} */ (document.querySelector('#tbody-tasks'));

export function getTasks() {
    let tableRows = '';

    fetch(BASE_API_URL)
        .then(response => response.json())
        .then(tasks => {
            tasks.forEach((/** @type {{ title: string; }} */ task) => {
                const element = `<h1>${task.title}</h1>`;

                tableRows += element;
            });
            tableElement.innerHTML = tableRows;
        });
}

/**
 * 
 * @param {number} id 
 */
export function deleteTask(id) {
    const confirmation = confirm('Are you sure you want to delete the task?');
    if (confirmation) {
        fetch(BASE_API_URL + '/' + id, {
            method: 'DELETE',
        }).then(response => {
            if (response.ok) {
                alert('Task deleted');
            }
        });
    }
}