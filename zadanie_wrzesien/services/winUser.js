const winUser = (request, response)=> {
    response.send('Użytkownicy Windows<br/>Aby uruchomić server node js na własnym porcie potrzebujesz zmienną ENV<br/>Trzeba zrobić wpis: <code>$env:PORT=4444; node app.js</code>');
};

module.exports = winUser;