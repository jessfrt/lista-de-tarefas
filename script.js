document.addEventListener('DOMContentLoaded', () => {
    // Saudação baseada na hora
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    const saudacoes = ['Bom dia!', 'Boa tarde!', 'Boa noite!'];
    greeting.textContent = saudacoes[Math.floor(hour / 8)];
  
    // Data
    const currentDate = document.getElementById('currentDate');
    const data = new Date();
    const dias = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sábado'];
    const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
    currentDate.textContent = `${dias[data.getDay()]}, ${data.getDate()} de ${meses[data.getMonth()]} de ${data.getFullYear()}`;
  
    // Emojis
    const emojis = document.querySelectorAll('.emoji-options span');
    const emocaoMensagem = document.getElementById('emocaoMensagem');
  
    emojis.forEach(emoji => {
      emoji.addEventListener('click', () => {
        emocaoMensagem.textContent = `Você escolheu: ${emoji.textContent}`;
      });
    });
  
    // Lista
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const emptyMessage = document.getElementById('emptyMessage');
  
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${taskText}</span>
          <button class="delete-btn">🗑️</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        emptyMessage.style.display = 'none';
  
        li.querySelector('.delete-btn').addEventListener('click', () => {
          li.remove();
          if (!taskList.children.length) {
            emptyMessage.style.display = 'block';
          }
        });
      }
    });
  });
  