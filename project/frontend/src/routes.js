// Route Views
import HomePage from "./views/HomePage";
import FormExample from "./views/FormExample";
import LoginForm from "./views/LoginForm";
import SignupForm from "./views/SignupForm";
import LogoutPage from "./views/LogoutPage";
import ListsView from "./views/ListsView";

// Layouts
import BaseLayout from "./layouts/BaseLayout";
import AuthLayout from "./layouts/AuthLayout";
import PageLayout from "./layouts/PageLayout";

export default [
    {
        path: "/",
        exact: true,
        layout: AuthLayout,
        component: HomePage
    },
    {
        path: "/login",
        exact: true,
        layout: AuthLayout,
        component: LoginForm 
    },
    {
        path: "/logout",
        exact: true,
        layout: AuthLayout,
        component: LogoutPage
    },
    {
        path: "/signup",
        exact: true,
        layout: AuthLayout,
        component: SignupForm
    },
    {
        path: "/lists",
        exact: true,
        layout: PageLayout,
        component: ListsView
    },
    {
        path: "/example",
        exact: true,
        layout: AuthLayout,
        component: FormExample
    },
    /*{
        path: "",
        exact: false,
        component: NotFound
    }*/
];
