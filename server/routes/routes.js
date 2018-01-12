var url = require('url')
var tools = require('../tools/tools')
var fs = require('fs')

function sendData(req, res, filename, needcity) {
  let query = url.parse(req.url, true).query,
    name = query.name || '',
    city = query.city,
    readFileName = '',
    sendData = {
      errno: 0,
      city: city,
      msg: 'ok',
      data: {}
    };
  if (needcity) {
    readFileName = city + filename;
  } else {
    readFileName = filename;
  }
  tools.readFileData(name + readFileName).then((data) => {
    sendData.data = data;
    res.send(sendData);
  }, (msg) => {
    sendData.errno = -1;
    sendData.msg = '暂时没有数据';
    res.send(sendData);
  })
}

function sendDetail(req, res, path, it) {
  var it = it + '_info.json';
  var sendData = {
    errno: 0,
    msg: 'ok',
    data: {}
  };
  var dirList = fs.readdirSync(path);

  for (var i = 0; i < dirList.length; i++) {
    var item = dirList[i];
    if (fs.statSync(path + '/' + item).isDirectory()) {
      if (item == it) {
        tools.readFileData(item).then((data) => {
          sendData.data = data;
          res.send(sendData);
        }, (msg) => {
          sendData.errno = -1;
          sendData.msg = '暂时没有数据';
          res.send(sendData);
        })
      } else {
        sendDetail(path + '/' + item, it);
      }
    } else if (fs.statSync(path + '/' + item).isFile()) {
      if (item == it) {
        tools.readFileData(item).then((data) => {
          sendData.data = data;
          res.send(sendData);
        }, (msg) => {
          sendData.errno = -1;
          sendData.msg = '暂时没有数据';
          res.send(sendData);
        })
      }
    }
  }
}

exports.hot = (req, res) => {
  sendData(req, res, 'bj_hot.json', false)
}

exports.swiper = (req, res) => {
  sendData(req, res, 'swiper.json', false)
}

exports.detail = (req, res) => {
  sendDetail(req, res, './database', req.params.id)
}
