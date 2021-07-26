import { Suspense, lazy } from 'react'
import PrivateRoute from "components/privateRoute";

const Home = lazy(() => import("pages/home"))
function RoutesComp(props: any) {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <PrivateRoute exact={true} path="/layout/home" component={Home}></PrivateRoute>
        </Suspense>
    )
}
export default RoutesComp


