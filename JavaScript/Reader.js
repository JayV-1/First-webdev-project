const fs = require('fs');

function read(){
    fs.readFile('../Text/Story of Slash', 'utf8', (err, data) => {
        if (err){
            console.error(err);
            return;
        }
        console.log(data);
        return(data)
    });
};