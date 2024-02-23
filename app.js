import React from "react";
import ReactDOM from "react-dom/client";
import restuarants from "./restaurants.json";
import { Link, Outlet, RouterProvider, createBrowserRouter, useRouteError } from 'react-router-dom';
import About from "./about";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.creativefabrica.com/wp-content/uploads/2018/10/Delivery-food-logo-by-DEEMKA-STUDIO-580x406.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const { info = {} } = props.resData;
    const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } = info;
    return (
        <div className="res-card">
            <img alt="res-img" className="res-image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{(cuisines ?? []).join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} mins ETA</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {restuarants.map((e) => <RestaurantCard key={e.info.id} resData={e} />)}
            </div>
        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}
class User extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render() {
        return <h1>{this.props.name}</h1>
    }
}
// const About = () => {
//     return <> <h1>About1</h1>
//         <div>Div</div><User name="myName" /></>

// }
const ErrorRoute = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <h1>OOPS!</h1>
            <h2>{error.status} {error.statusText}</h2>
        </>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            }
        ],
        errorElement: <ErrorRoute />
    },

])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);