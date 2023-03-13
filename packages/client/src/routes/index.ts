import Dashboard from "../pages/Dashboard/index";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import PDFView from "../pages/PDFView/index";
import Register from "../pages/Register/index";
import Resume from "../pages/Resume/index";

export const router = [
  {
    path: "/",
    component: Dashboard,
    public: false,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    public: false,
  },
  {
    path: "/login",
    component: Login,
    public: true,
  },
  {
    path: "/register",
    component: Register,
    public: true,
  },
  {
    path: "/resume",
    component: Resume,
    public: true,
  },
  {
    path: "/resume/pdf",
    component: PDFView,
    public: true,
  },
  {
    path: "*",
    component: NotFound,
    public: false,
  },
];
