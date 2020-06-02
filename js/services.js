'use strict'
// Handling html and events 

function _createProj(projId, projName) {

    return {
        "id": projId,
        "name": projName,
        "title": makeLorem(8),
        "desc": makeLorem(8),
        "url": `projs/${projName}`,
        "publishedAt": 'May 2020',
        "labels": [makeLorem(2), makeLorem(2)],
    }
}

function createProjs() {
    var projs = [];
    for (var i = 0; i < gProjNames.length; i++) {
        var id = gProjNames[i].toLocaleLowerCase();
        var name = gProjNames[i];
        projs.push(_createProj(id, name))
    }
    gProjs = projs;
}
