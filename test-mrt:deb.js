if(Meteor.isClient){
    Tinytest.add('deb.js should exist', function(test){
        test.isNotNull(deb, 'deb should exist');
        test.isNotNull(debc, 'deb should exist');
        var a = function(){};
        test.isTrue(typeof(a.deb) === "function", 'function should have a deb function');
        test.isTrue(typeof(a.debc) === "function", 'function should have a debc function');
    })
}
