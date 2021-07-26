import { Route, withRouter } from 'react-router-dom'
// interface routeArgs {
//     path: string,
//     component: React.LazyExoticComponent<any>,
//     exact?: boolean,
//     strict?: boolean,
//     replace?: boolean,
// }
function PrivateRoute(props: any) {
    const {
        path = "/",
        exact = false,
        component: Component,
        strict = false

    } = props;
    return <Route path={path} exact={exact} strict={strict} render={
        (props) => {
            return <Component {...props} />
        }
    }></Route>

}
export default withRouter(PrivateRoute)