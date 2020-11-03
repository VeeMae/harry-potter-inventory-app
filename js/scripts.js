/* eslint-disable require-jsdoc */
const harryPotterRepository = (function() {
  const harryPotterCharacters = [];
  const apiUrl = 'https://www.potterapi.com/v1/characters/?key=$2a$10$vQ/irCHphbHxnrgkhcfr8O4J/zM3mkvxwFkZ25Upq5RyrYZfzNz2i';

  function add(hpCharacter) {
    if ( (hpCharacter !== null) && (typeof hpCharacter === 'object') ) {
      harryPotterCharacters.push(hpCharacter);
    } else {
      return 'Not a valid Character. Please try again.';
    }
  }

  function getAll() {
    return harryPotterCharacters;
  }

  function addListItem(character) {
    const characterList = document.querySelector('.harrypotter-list');
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    const button = document.createElement('button');
    button.innerText = character.name;
    button.setAttribute('data-target', '#hpModal');
    button.setAttribute('data-toggle', 'modal');
    button.classList.add('char-button');
    button.classList.add('btn');

    listItem.appendChild(button);
    characterList.appendChild(listItem);

    button.addEventListener('click', function(event) {
      showDetails(character);
    });
  }

  function showDetails(character) {
    loadList(character).then(function() {
      showHpModal(character);
    });
  }

  function loadList() {
    showLoadingMessage();
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      setTimeout(hideLoadingMessage, 350);
      json.forEach(function(item) {
        const character = {
          name: item.name,
          house: item.house,
          role: item.role,
          school: item.school,
        };
        if (item.house !== undefined) {
          add(character);
        };
      });
    }).catch(function(e) {
      console.error(e);
    });
  }

  function showLoadingMessage() {
    const showMessage = document.querySelector('h3');
    showMessage.classList.add('showMessage');
  }

  function hideLoadingMessage() {
    const hideMessage = document.querySelector('h3');
    hideMessage.classList.add('hideMessage');
  }

  function showHpModal(item) {
    const modalBody = $('.modal-body');
    const modalTitle = $('.modal-title');
    const modalHeader = $('.modal-header');

    // Clears out modal content each render
    modalTitle.empty();
    modalBody.empty();

    const hpName = $('<h1>' + item.name + '</h1>');
    const hpHouse = $('<h2>' + item.house + '</h2>');
    const hpRole = $('<h3>' + item.role + '</h3>');
    const hpSchool = $('<h4>' + item.school + '</h4>');

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
    showHpModal: showHpModal,
  };
})();

harryPotterRepository.loadList().then(function() {
  harryPotterRepository.getAll().forEach(function(character) {
    harryPotterRepository.addListItem(character);
  });
});
