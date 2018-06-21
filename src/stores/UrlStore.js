var {EventEmitter} = require('fbemitter');
var UrlStore = new EventEmitter();
var clone = function(obj) {
    return (JSON.parse(JSON.stringify(obj)));
};

UrlStore._collection = {
    'items': []
};
// map of input names to the validation function for that value
// most of these are running regex tests false means there's no
// error, if true, or string, there's an error with message
UrlStore._model = {
    'original': null,
    'generated_code': null,
    'generated_url': null,
};

UrlStore.error = {};
UrlStore.isLoading = false;
UrlStore.status = 'ready';

////////////////////////////////////
// Emitters ////////////////////////
////////////////////////////////////

UrlStore.addChangeListener = function(callback) {
    UrlStore.on(UrlConstants.CHANGE, callback);
};

UrlStore.removeChangeListener = function(callback) {
    UrlStore.removeListener(UrlConstants.CHANGE, callback);
};

UrlStore.emitChange = function() {
    UrlStore.emit(UrlConstants.CHANGE);
};

////////////////////////////////////
// Getters /////////////////////////
////////////////////////////////////

// `id` is optional. If the id is anything other than a number, send
// the whole thing. If id is passed and there's a match in the array,
// send that. Else, return false
UrlStore.get = function(id) {
    var result = UrlStore.getModel();

    if ( isNaN(id) ) {
        result = UrlStore._collection;
    }
    else {
        // id can still be a string even after passing isNaN :|
        id = parseInt(id);
        var collection = UrlStore._collection.items;
        for (var i = 0; i < collection.length; i++) {
            if (collection[i].id === id) {
                result = collection[i];
                break;
            }
        }
    }
    return result;
};

UrlStore.getModel = function() {
    return clone(this._model);
};

UrlStore.updateCollection = function(data) {
    if (data.items instanceof Array) {
        UrlStore._collection = data;
    }
    else {
        UrlStore.addThis(data);
    }
};

////////////////////////////////////
// Dispatch Flags //////////////////
////////////////////////////////////

UrlStore.dispatchToken = Dispatcher.register(function (action) {
    switch(action.type) {
        case UrlConstants.FETCH:
            UrlStore.isLoading = true;
            UrlStore.status = 'working';
            UrlStore.emit(UrlConstants.CHANGE);
            break;

        case UrlConstants.RECEIVE:
            UrlStore.isLoading = false;
            UrlStore.status = 'success';
            UrlStore.updateCollection(action.data);
            UrlStore.emit(UrlConstants.CHANGE);
            break;

        case UrlConstants.RECEIVE_FAIL:
            UrlStore.isLoading = false;
            UrlStore.status = 'fail';
            UrlStore.emit(UrlConstants.CHANGE);
            break;

        default:
        // do nothing
    }
});