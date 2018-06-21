var UrlActions = {
    fetch: function(opts) {
        var route = '/urls';

        Dispatcher.dispatch({
            type: UrlConstants.FETCH
        });

        _Ajax.get(_Ajax.api(route)).then(
            // Success
            function(data) {
                Dispatcher.dispatch({
                    type: UrlConstants.RECEIVE,
                    data: data
                });
            },
            // Fail
            function(err) {
                Dispatcher.dispatch({
                    type: UrlConstants.RECEIVE_FAIL
                });
            });
    },
}
