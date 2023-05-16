function searchNames() {
  var input = document.getElementById('search-input').value.toLowerCase();
  var names = ['Nicolò Carcagnì', 'Vincenzo Persico', 'Anna Spedicato']; // Nomi
  var tableNumbers = ['~ Gloria Gaynor ~', '~ Gloria Gaynor ~', '~ Gloria Gaynor ~']; // Numeri di tavolo corrispondenti
  var results = document.getElementById('search-results');
  results.innerHTML = '';

  for (var i = 0; i < names.length; i++) {
    var name = names[i].toLowerCase();
    if (input==''){
      document.getElementById('tavolo').innerHTML ="";
      document.getElementById("iltuo").style.visibility = 'hidden';
    }
    else if (name.includes(input)) {
      var listItem = document.createElement('li');
      listItem.textContent = names[i];
      listItem.className = 'suggestion';
      listItem.addEventListener('click', function() {
        document.getElementById('search-input').value = this.textContent;
        let invitato = this.textContent;
        var nameAndTable = '';
        for (var i = 0; i < names.length; i++) {
        if (invitato==names[i]){
          nameAndTable = tableNumbers[i];
        }
        }
        document.getElementById('tavolo').innerHTML = nameAndTable;
        document.getElementById("iltuo").style.visibility = 'visible';
      });
      results.appendChild(listItem);
    }
  }
}