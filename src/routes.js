var Route = ReactRouter.Route,
    Router = ReactRouter.Router,
    DefaultRoute = ReactRouter.DefaultRoute,
    IndexRoute = ReactRouter.IndexRoute,
    IndexRedirect = ReactRouter.IndexRedirect;

var myRoutes = (
    <Router history={ ReactRouter.browserHistory }>
        <Route path="/" component={App}>
            {/* <DefaultRoute component={Home} /> */}
            <IndexRoute component={App}/>

        </Route>
    </Router>
);