fetch('tietue.JSON')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('json-list');
    data.sisalto.forEach(item => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = item;
      list.appendChild(li);
    });
  })
  .catch(error => console.error('Virhe JSON:n haussa:', error));