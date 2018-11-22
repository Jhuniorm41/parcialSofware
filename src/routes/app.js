import Login from '../views/Login'
import Signup from "../views/Signup";
import Profile from '../views/Profile'
import Colaborations from '../views/Colaborations'
import MyDiagrams from '../views/MyDiagrams'
import Trash from '../views/Trash'
import Tools from '../views/Tools'
import NewDiagram from '../views/NewDiagram'
import RealTime from '../views/RealTime'
import {Face, Share, FormatShapes, DeleteSweep, Settings} from '@material-ui/icons'
const appRoutes = [
    {
        path: '/login',
        sidebarName: 'Login',
        icon: Face,
        ignore:true,
        component: Login
    },
    {
      path: "/signup",
      sidebarName: "Signup",
      icon: Face,
      ignore:true,
      component: Signup
    },
    {
        path: '/profile',
        sidebarName: 'Perfil',
        icon: Face,
        component: Profile
    },
    {
        path: '/collaborations',
        sidebarName: 'Colaboraciones',
        icon: Share,
        component: Colaborations
    },
    {
        path: '/diagrams',
        sidebarName: 'Mis Diagramas',
        icon: FormatShapes,
        component: MyDiagrams
    },
    {
        path: '/trash',
        sidebarName: 'Reciclaje',
        icon: DeleteSweep,
        component: Trash
    },
   // {
   //     path: '/tools',
   //     sidebarName: 'Herramientas',
   //     icon: Settings,
   //     component: Tools
   // },
    {
        path: '/newdiagram',
        sidebarName: 'new',
        icon: Settings,
        ignore:true,
        component: NewDiagram
    },
    {
        path: '/realtime',
        sidebarName: 'real',
        icon: Settings,
        ignore:true,
        component: RealTime
    }
]

export default appRoutes;
