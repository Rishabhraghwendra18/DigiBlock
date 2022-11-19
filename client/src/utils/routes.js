import About from "../pages/About";
import Student from "../pages/Student";
import MintStudent from "../pages/MintStudent";
import Home from "../pages/Home";

export const APPS = [
    {
        subdomain: 'www',
        app: About,
        main: true
    },
    {
        subdomain: 'student',
        app: Student,
        main: false
    },
    {
        subdomain: 'mint',
        app: MintStudent,
        main: false
    },
    {
        subdomain: 'app',
        app: Home,
        main: false
    },
]