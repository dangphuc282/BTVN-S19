let courses = JSON.parse(localStorage.getItem("courses")) || [
    {
      id: 1,
      content: "Learn Javascript Session 01",
      dueDate: "2023-04-17",
      status: "Pending",
      assignedTo: "Anh Bách",
    },
    {
      id: 2,
      content: "Learn Javascript Session 2",
      dueDate: "2023-04-17",
      status: "Pending",
      assignedTo: "Lâm",
    },
    {
      id: 3,
      content: "Learn CSS Session 1",
      dueDate: "2023-04-17",
      status: "Pending",
      assignedTo: "Hiếu Ci ớt ớt",
    },
  ];
  
  const form = document.getElementById("task-form");
  const list = document.getElementById("task-list");
  let editId = null;
  
  function render() {
    list.innerHTML = "";
    courses.forEach((course, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${course.content}</td>
        <td>${course.dueDate}</td>
        <td>${course.status}</td>
        <td>${course.assignedTo}</td>
        <td>
          <button class="action-btn" onclick="editTask(${course.id})">Sửa</button>
          <button class="action-btn" onclick="deleteTask(${course.id})">Xóa</button>
        </td>
      `;
      list.appendChild(row);
    });
    localStorage.setItem("courses", JSON.stringify(courses));
  }
  
  form.onsubmit = function (e) {
    e.preventDefault();
    const newTask = {
      id: editId || new Date().getTime(),
      content: form.content.value,
      dueDate: form.dueDate.value,
      status: form.status.value,
      assignedTo: form.assignedTo.value,
    };
  
    if (editId) {
      courses = courses.map((t) => (t.id === editId ? newTask : t));
      editId = null;
    } else {
      courses.push(newTask);
    }
  
    form.reset();
    render();
  };
  
  function deleteTask(id) {
    courses = courses.filter((t) => t.id !== id);
    render();
  }
  
  function editTask(id) {
    const task = courses.find((t) => t.id === id);
    form.content.value = task.content;
    form.dueDate.value = task.dueDate;
    form.status.value = task.status;
    form.assignedTo.value = task.assignedTo;
    editId = id;
  }
  
  render();
  