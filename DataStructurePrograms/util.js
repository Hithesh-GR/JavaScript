/**
* exports:if a object that get exposed to a module and it is by default in every js file.
**/
module.exports={
    writeFile(fileName,data){
        const fs = require('fs');
        fs.writeFile(fileName, data, function(err) {
            if(err) {
                return console.log(err);
            }
        }); 
    }
}