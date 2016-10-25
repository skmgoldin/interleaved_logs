var lookup = {};
var longestNameLength = 0;

var chunkForDisplay = function(chunk, delimiter) {
    return chunk.split(delimiter);
}

var prependPad = function(humanReadableName) {
    var pad = ' ';
    var padLength = longestNameLength - humanReadableName.length;    

    var paddedName = humanReadableName;
    for(var i=0; i < padLength; i++) {
        paddedName = pad.concat(paddedName);    
    }
    return paddedName;
}

var log = function(humanReadableName, chunk) {
    if(!(humanReadableName in lookup)) {
        lookup.humanReadableName = humanReadableName;
        if(humanReadableName.length > longestNameLength) {
            longestNameLength = humanReadableName.length;
        }
    }
    write(humanReadableName, chunk);
}

var write = function(humanReadableName, chunk) {
    var displayName = prependPad(humanReadableName);
    var displayChunks = chunkForDisplay(chunk, '\n');

    for(var i=0; i < displayChunks.length; i++) {
        if(displayChunks[i].length > 0) {
            process.stdout.write(displayName + ': ' + displayChunks[i] + '\n');
        }
    }
}

exports.log = log;
