let harryPotterRepository = (function () {
    let harryPotterCharacters = [
    {name: 'Harry Potter', height: 5.7, types: ['Gryffindor', 'Wizard'], blood_status: 'Half-blood'},
    {name: 'Hermione Jean Granger', height: 5.5, types: ['Gryffindor', 'Witch'], blood_status: 'Muggle-born'},
    {name: 'Ron Weasley', height: 5.9, types: ['Gryffindor', 'Wizard'], blood_status: 'Pure blood'},
    {name: 'Luna Lovegood', height: 5.5, types: ['Ravenclaw', 'Witch'], blood_status: 'Pure blood'}
];
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
        console.log(character.name);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
}) ();

harryPotterRepository.getAll().forEach( function (character) {
    harryPotterRepository.addListItem(character);
})