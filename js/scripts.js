let harryPotterCharacters = [
    {name: 'Harry Potter', height: 5.7, types: ['Gryffindor', 'Wizard'], blood_status: 'Half-blood'},
    {name: 'Hermione Jean Granger', height: 5.5, types: ['Gryffindor', 'Witch'], blood_status: 'Muggle-born'},
    {name: 'Ron Weasley', height: 5.9, types: ['Gryffindor', 'Wizard'], blood_status: 'Pure blood'},
    {name: 'Luna Lovegood', height: 5.5, types: ['Ravenclaw', 'Witch'], blood_status: 'Pure blood'}
];

let specialMessage = "Amazing, you're mighty tall! Well done, now you can reach the top cupboards just fine without magic!";

for (let i = 0; i <harryPotterCharacters.length; i++) {
    if (harryPotterCharacters[i].height <= 5.7) {
        document.write(`${harryPotterCharacters[i].name} | Height: ${harryPotterCharacters[i].height} | Blood-Status: ${harryPotterCharacters[i].blood_status} <br> <br> `);
        // Prints the name of each Harry Potter character from the array and their heights. Adds a break after each print.
    }else if (harryPotterCharacters[i].height > 5.7) {
        document.write(`${harryPotterCharacters[i].name} | Height: ${harryPotterCharacters[i].height} - ${specialMessage} | Blood-Status: ${harryPotterCharacters[i].blood_status} <br> <br>`)
        // Prints out the statement if the character is taller than 5.7. Adds a break after each print.
    }
}