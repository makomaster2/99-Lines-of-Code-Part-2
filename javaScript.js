let button = document.getElementById('sing');

button.addEventListener('click', function() {

    let friends = ['Branwin', 'Jessie', 'Karlie', 'Ashley', 'Austin'];

    for (i = 0; i < friends.length; i++) {
        //NEW CODE!!!
        let friendDiv = document.createElement('div');
        friendDiv.classList.add('friend');
        document.body.appendChild(friendDiv);

        let friendHead = document.createElement('h3');
        let headText = document.createTextNode(friends[i]);
        friendHead.appendChild(headText);
        friendDiv.appendChild(friendHead);
        
        for (num = 99; num > 1; num--) {
            var lyric = (num + ' lines of code in the file, ' + num + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (num - 1) + ' lines of code in the file!');
            let pTag = document.createElement('p');
            let paraText = document.createTextNode(lyric);
            pTag.appendChild(paraText);
            friendDiv.appendChild(pTag);
        }
        
        if (num == 1) {
            var lyric = (num + ' line of code in the file, ' + num + ' line of code; ' + friends[i] + ' strikes one out, clears it all out, ' + (num - 1) + ' lines of code in the file!');
            let pTag = document.createElement('p');
            let paraText = document.createTextNode(lyric);
            pTag.appendChild(paraText);
            friendDiv.appendChild(pTag);
        }
        
    }
});
