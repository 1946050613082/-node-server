document.getElementById('taskForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const indicator = document.getElementById('indicator').value;
  const description = document.getElementById('description').value;
  const state = document.getElementById('state').value;

  if (indicator.trim() === '' || description.trim() === '') {
    alert('Por favor, complete tanto el indicador como la descripción de la tarea.');
    return;
  }

  addTask(indicator, description, state);
  displayTasks();

  document.getElementById('indicator').value = '';
  document.getElementById('description').value = '';
});

function addTask(indicator, description, estado) {
  tasks.push({ indicador: indicator, descripcion: description, estado: estado });
}

function removeTask(indicador) {
  tasks = tasks.filter(task => task.indicador !== indicador);
}

function completeTask(indicador) {
  tasks = tasks.map(task => {
      if (task.indicador === indicador) {
          task.estado = 'completada';
      }
      return task;
  });
}

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach(task => {
      let estado;
      if (task.estado === 'completada') {
          estado = 'ESTADO COMPLETADO';
      } else {
          estado = task.estado;
      }
      const li = document.createElement('li');
      li.textContent = `Indicador: ${task.indicador}, Descripción: ${task.descripcion}, Estado: ${estado}`;
      taskList.appendChild(li);
  });
}
