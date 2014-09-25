define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Surface = require('famous/core/Surface');
    var ListView  = require('app/ListView');


    // create the main context
    var mainContext = Engine.createContext();


    var listView = new ListView({listData: recentPosts});

    mainContext.add(listView);
});
