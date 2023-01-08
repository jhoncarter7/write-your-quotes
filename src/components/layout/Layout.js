import { Fragment } from "react"
import classes from "../layout/Layout.module.css"
import MainNavigation from "../layout/MainNavigation"


const Layout = (props) => {

    return <Fragment >
        <MainNavigation/>
        <main className={classes.main}>{props.children}</main>
    </Fragment>
}

export default Layout