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
        loadList(character).then(function () {
            console.log(character);
        });
    }

    function loadList(){
        showLoadingMessage();
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            setTimeout(hideLoadingMessage, 350);
          json.forEach(function (item) {
              let character = {
                  name: item.name,
                  house: item.house,
                  role: item.role,
                  school: item.school
              };
              add(character);
          });
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showLoadingMessage() {
        let showMessage = document.querySelector('h3');
        showMessage.classList.add('showMessage');
    }

    function hideLoadingMessage(){
        let hideMessage = document.querySelector('h3');
        hideMessage.classList.add('hideMessage');
    }
    
    // function loadDetails(item) {
    //     return fetch(apiUrl).then(function (response) {
    //         return response.json();
    //     }).then(function (details) {
    //         item.bloodStatus = details.bloodStatus;
    //         item.role = details.role;
    //         item.school = details.school;
    //     }).catch(function(e){
    //         console.error(e);
    //     });
    // }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList
    };
}) ();

harryPotterRepository.loadList().then(function() {
    harryPotterRepository.getAll().forEach(function(character){
        harryPotterRepository.addListItem(character);
    });
});