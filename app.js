var fs = require('fs');
var path = require('path');


var directoryPath = process.argv[2];
var videosFilesNames = [];
var subsFilesNames =[];

var files = fs.readdirSync(directoryPath);
for (var i=0;i<files.length;i++){
    if (path.extname(files[i])==='.mkv'||path.extname(files[i])==='.mp4'){
                
        var fileName='';
        if (path.extname(files[i])==='.mkv')
            fileName = files[i].substr(0,files[i].indexOf('.mkv'))
        else if (path.extname(files[i])==='.mp4')    
            fileName = files[i].substr(0,files[i].indexOf('.mp4'))
        
        videosFilesNames.push(fileName);
                        
                        
    }
    if (path.extname(files[i])==='.srt'){
        var fileName= files[i].substr(0,files[i].indexOf('.srt'));       
        subsFilesNames.push(fileName);
    }
}

var subsFiles = files.filter(function(file) {
    return path.extname(file).toLowerCase() === '.srt';
});

for (var i = 0; i<subsFiles.length;i++){
    fs.renameSync(directoryPath+'/'+subsFiles[i],directoryPath+'/'+videosFilesNames[i]+'.srt');
}




