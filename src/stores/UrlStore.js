var {EventEmitter} = require('fbemitter');
var UrlStore = new EventEmitter();
var urls = []

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
UrlStore.getAll = function() {
    return urls;
};

UrlStore.updateCollection = function(data) {
    if (data.urls instanceof Array) {
        UrlStore.urls = data
    }
    else {
        UrlStore.urls.add(data)
    }
};

////////////////////////////////////
// Dispatch Flags //////////////////
////////////////////////////////////

UrlStore.dispatchToken = Dispatcher.register(function (action) {
    switch(action.type) {
        case UrlConstants.FETCH:
            UrlStore.emit(UrlConstants.CHANGE);
            break;

        case UrlConstants.RECEIVE:
            UrlStore.updateCollection(action.data);
            UrlStore.emit(UrlConstants.CHANGE);
            break;

        case UrlConstants.RECEIVE_FAIL:
            UrlStore.emit(UrlConstants.CHANGE);
            break;

        default:
        // do nothing
    }
});