var fs = require('fs')

exports.readFileData = (file) => {
  let promise = new Promise((resolve, reject) => {
    fs.readFile("./database/" + file, "utf-8", (err, data) => {
      if(err) {
        console.log(err);
        reject("read filedata error!");
      }else {
        data = JSON.parse(data);
        resolve(data);
      }
    })
  });
  return promise;
}



