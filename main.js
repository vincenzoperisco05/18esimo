function searchNames() {
  var input = document.getElementById('search-input').value.toLowerCase();
  var names = [
    'Agostino Puce',
    'Alessandra Puce',
    'Alessio Chiffi',
    'Andrea Oreste',
    'Angelo Oreste',
    'Anna Chiara Persico',
    'Anna Greco',
    'Anna Maria Samueli',
    'Anna Spedicato',
    'Annalisa De Lorenzis',
    'Antonio De Simone',
    'Antonio Mauro',
    'Antonio Samueli',
    'Aurora Natolo',
    'Carlotta Gentile',
    'Caterina Persico',
    'Diego Spano',
    'Emanuela Distante',
    'Federica De Simone',
    'Federico Giannotta',
    'Filippo Maffei',
    'Franca Persico',
    'Francesca Sbrò',
    'Francesca Vantaggiato',
    'Francesco Langella',
    'Franco Gustapane',
    'Giada Morelli',
    'Giada Sbrilli',
    'Giada Tamarindo',
    'Ginevra Licignano',
    'Giulia Malorgio',
    'Giusy Campa',
    'Leonardo Misciali',
    'Luca Ottaviano',
    'Ludovica Resta',
    'Luigi Puce',
    'Luigi Samueli',
    'Mamma',
    'Margherita Campa',
    'Maria Luce Persico',
    'Maria Rosaria Serra',
    'Marialucia Persico',
    'Martina Perrone',
    'Massimo Gustapane',
    'Michele Maiorano',
    'Nicolò Carcagní',
    'Papà',
    'Rosalinda Persico',
    'Samantha Tá',
    'Samuele Greco',
    'Sara Sedile',
    'Sofia Chiriví',
    'Sofia Congedo',
    'Sofia Pezzulla',
    'Stefano De Lorenzis',
    'Vincenzo De Simone',
    'Vincenzo Persico']; // Nomi
  var tableNumbers = [
    'Gigi Proietti',
    'Gigi Proietti',
    'Bruce Springsteen',
    'Raffaella Carrà',
    'Raffaella Carrà',
    'Bruce Springsteen',
    'Gigi Proietti',
    'Gigi Proietti',
    'Gloria Gaynor',
    'Teresa Mannino',
    'Loredana Bertè',
    'Lady Gaga',
    'Gigi Proietti',
    'Le Kardashian',
    'Lady Gaga',
    'Loredana Bertè',
    'Gloria Gaynor',
    'Raffaella Carrà',
    'Loredana Bertè',
    'Gloria Gaynor',
    'Lady Gaga',
    'Raffaella Carrà',
    'Teresa Mannino',
    'Le Kardashian',
    'Bruce Springsteen',
    'Loredana Bertè',
    'Teresa Mannino',
    'Le Kardashian',
    'Gloria Gaynor',
    'Lady Gaga',
    'Lady Gaga',
    'Loredana Bertè',
    'Le Kardashian',
    'Teresa Mannino',
    'Le Kardashian',
    'Gigi Proietti',
    'Gigi Proietti',
    'Bruce Springsteen',
    'Le Kardashian',
    'Raffaella Carrà',
    'Bruce Springsteen',
    'Bruce Springsteen',
    'Teresa Mannino',
    'Loredana Bertè',
    'Bruce Springsteen',
    'Gloria Gaynor',
    'Bruce Springsteen',
    'Gigi Proietti',
    'Gloria Gaynor',
    'Le Kardashian',
    'Le Kardashian',
    'Teresa Mannino',
    'Teresa Mannino',
    'Lady Gaga',
    'Gloria Gaynor',
    'Loredana Bertè',
    'Gloria Gaynor']; // Numeri di tavolo corrispondenti
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