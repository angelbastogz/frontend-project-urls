var UrlActions = {
    fetch: function() {

        Dispatcher.dispatch({
            type: UrlConstants.FETCH
        });

        fetch("http://localhost:3001/api/v1/urls")
            .then(res => res.json())
            .then(
                (result) => {
                    Dispatcher.dispatch({
                        type: UrlConstants.RECEIVE,
                        data: result.urls
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    Dispatcher.dispatch({
                        type: UrlConstants.RECEIVE_FAIL
                    });
                }
            )
    },
}
