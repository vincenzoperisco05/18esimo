function searchNames() {
  var input = document.getElementById('search-input').value.toLowerCase();
  var names = ['Nicolò Carcagnì', 'Vincenzo Persico', 'Anna Spedicato']; //Nomi
  var results = document.getElementById('search-results');
  results.innerHTML = '';

  for (var i = 0; i < names.length; i++) {
    var name = names[i].toLowerCase();
    if (name.includes(input)) {
      var listItem = document.createElement('li');
      listItem.textContent = names[i];
      listItem.className = 'suggestion';
      listItem.addEventListener('click', function() {
        document.getElementById('search-input').value = this.textContent;
        results.innerHTML = '';
      });
      results.appendChild(listItem);
    }
  }
}