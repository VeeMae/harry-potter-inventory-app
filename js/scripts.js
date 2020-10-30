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
        let characterList = document.querySelector('.harrypotter-list');
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        let button = document.createElement('button');
        button.innerText = character.name;
        button.setAttribute('data-target', '#hpModal');
        button.setAttribute('data-toggle', 'modal');
        button.classList.add('char-button');
        button.classList.add('btn');

        listItem.appendChild(button);
        characterList.appendChild(listItem);

        button.addEventListener('click', function (event) {
            showDetails(character);
        });
    }

    function showDetails(character) {
        loadList(character).then(function () {
            showHpModal(character);
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

    function showHpModal(item) {
        let modalBody = $('.modal-body');
        let modalTitle = $('.modal-title');
        let modalHeader = $('.modal-header');

        // Clears out modal content each render
        modalTitle.empty();
        modalBody.empty();

        let hpName = $("<h1>" + item.name + "</h1>");
        let hpHouse = $("<h2>" + item.house + "</h2>");
        let hpRole = $("<h3>" + item.role + "</h3>");
        let hpSchool = $("<h4>" + item.school + "</h4>"); 

        modalTitle.append(hpName);
        modalBody.append(hpHouse);
        modalBody.append(hpRole);
        modalBody.append(hpSchool);
        modalHeader.append(modalTitle);
        modalHeader.append(modalBody);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        loadList: loadList,
        showLoadingMessage: showLoadingMessage,
        hideLoadingMessage: hideLoadingMessage,
        showHpModal: showHpModal
    };
}) ();

harryPotterRepository.loadList().then(function() {
    harryPotterRepository.getAll().forEach(function(character){
        harryPotterRepository.addListItem(character);
    });
});