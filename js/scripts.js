let harryPotterRepository = (function () {
    let harryPotterCharacters = [];
    let apiUrl = 'https://www.potterapi.com/v1/characters/?key=$2a$10$vQ/irCHphbHxnrgkhcfr8O4J/zM3mkvxwFkZ25Upq5RyrYZfzNz2i';
    let modalContainer = document.querySelector('#modal-container');

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
            showHpModal(`${character.name}`, `${character.house}`, `${character.role}`, `${character.school}` );
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

    function showHpModal(name, house, role, school) {
        let modal = document.createElement('div');
        modal.classList.add('modal');

        let closeButton = document.createElement('button');
        closeButton.classList.add('modal-close');
        closeButton.innerText = 'Close';
        closeButton.addEventListener('click', hideHpModal);

        let nameElement = document.createElement('h1');
        nameElement.innerText = name;

        let detailElement = document.createElement('h2');
        detailElement.innerText = house;

        let otherDetailElement = document.createElement('h3');
        otherDetailElement.innerText = role;

        let moreDetailElement = document.createElement('h4');
        moreDetailElement.innerText = school;

        modal.appendChild(closeButton);
        modal.appendChild(nameElement);
        modal.appendChild(detailElement);
        modal.appendChild(otherDetailElement);
        modal.appendChild(moreDetailElement);
        modalContainer.appendChild(modal);

        modalContainer.classList.add('is-visible');
    }

    function hideHpModal() {
        modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideHpModal();  
        }
      });

    modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if (target === modalContainer) {
          hideHpModal();
        }
      });

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        showHpModal: showHpModal,
        hideHpModal: hideHpModal
    };
}) ();

harryPotterRepository.loadList().then(function() {
    harryPotterRepository.getAll().forEach(function(character){
        harryPotterRepository.addListItem(character);
    });
});