let harryPotterRepository = (function () {
    let harryPotterCharacters = [];
    let apiUrl = 'https://www.potterapi.com/v1/characters/?key=$2a$10$vQ/irCHphbHxnrgkhcfr8O4J/zM3mkvxwFkZ25Upq5RyrYZfzNz2i';

    function add(hpCharacter) {
        if ( (hpCharacter !== null) && (typeof hpCharacter === 'object') ) {
            harryPotterCharacters.push(hpCharacter);
        } else {
            return 'Not a valid Character. Please try again.'
        }
    }
    
    function getAll() {
        return harryPotterCharacters;
    }

    function addListItem(character){
        let characterList = document.querySelector('ul');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = character.name;
        button.classList.add('char-button');
        listItem.appendChild(button);
        characterList.appendChild(listItem);

        button.addEventListener('click', function (event) {
            showDetails(character);
        });
    }

    function showDetails(character) {
        loadDetails(character).then(function () {
            console.log(character);
        });
    }

    function loadList(){
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
          json.forEach(function (item) {
              let character = {
                  name: item.name,
                  house: item.house
              };
              add(character);
          });
        }).catch(function (e) {
            console.error(e);
        });
    }
    
    function loadDetails(item) {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.bloodStatus = details.bloodStatus;
            item.role = details.role;
            item.school = details.school;
        }).catch(function(e){
            console.error(e);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };
}) ();

harryPotterRepository.loadList().then(function() {
    harryPotterRepository.getAll().forEach(function(character){
        harryPotterRepository.addListItem(character);
    });
});