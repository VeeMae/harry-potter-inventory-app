let harryPotterCharacters = [
    {name: 'Harry Potter', height: 5.7, types: ['Gryffindor', 'Wizard'], blood_status: 'Half-blood'},
    {name: 'Hermione Jean Granger', height: 5.5, types: ['Gryffindor', 'Witch'], blood_status: 'Muggle-born'},
    {name: 'Ron Weasley', height: 5.9, types: ['Gryffindor', 'Wizard'], blood_status: 'Pure blood'},
    {name: 'Luna Lovegood', height: 5.5, types: ['Ravenclaw', 'Witch'], blood_status: 'Pure blood'}
];

harryPotterCharacters.forEach(function (character) {
    document.write("<p>" + character.name + " is " + character.height + " feet tall," + " of the " + character.blood_status + " type, " + "and resides in the " + character.types[0] + " house." + "</p>")
})