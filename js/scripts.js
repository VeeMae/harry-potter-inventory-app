let harryPotterCharacters = [
    {name: 'Harry Potter', height: 5.7, types: ['Gryffindor', 'Wizard'], blood_status: 'Half-blood'},
    {name: 'Hermione Jean Granger', height: 5.5, types: ['Gryffindor', 'Witch'], blood_status: 'Muggle-born'},
    {name: 'Ron Weasley', height: 5.9, types: ['Gryffindor', 'Wizard'], blood_status: 'Pure blood'},
    {name: 'Luna Lovegood', height: 5.5, types: ['Ravenclaw', 'Witch'], blood_status: 'Pure blood'}
];

for (let i = 0; i <harryPotterCharacters.length; i++) {
     // Prints the name, blood status, and height of each Harry Potter character from the array. Adds a break after each print.
    document.write(`${harryPotterCharacters[i].name} | Blood-Status: ${harryPotterCharacters[i].blood_status} | Height: ${harryPotterCharacters[i].height} <br>`);
    if (harryPotterCharacters[i].height <= 5.7) {
        // Adds another break after each character if less than 5.7. This allows me to group together the characters who are taller than 5.7 with their special message. 
        document.write(`<br>`);
    }else if (harryPotterCharacters[i].height > 5.7) {
        let specialMessage = `Amazing ${harryPotterCharacters[i].name}, you're mighty tall! Well done, now you can reach the top cupboards just fine without magic!`;
         // Adds a special message to character if taller 5.7. Also adds a break after each print
        document.write(`- ${specialMessage} - <br> <br>`)
    }
}