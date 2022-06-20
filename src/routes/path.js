import Home from '../pages/Home';
import About from '../pages/About';
        import Schedule from '../pages/About/Schedule';
        import School from '../pages/About/School';
        import History from '../pages/About/History';
        import Confession from '../pages/About/Confession';
        import Beliefs from '../pages/About/Beliefs';
import News from '../pages/News';
import Photo from '../pages/Photo';
import Sermons from '../pages/Sermons';
        import Childrens from '../pages/Sermons/Preaching/Childrens';
        import Christmas from '../pages/Sermons/Preaching/Christmas';
        import Farisey from '../pages/Sermons/Preaching/Farisey';
import Contacts from '../pages/Contacts';

const path = [
        {path: '/',element: <Home />, children:[]},
        {path: 'about',element: <About />},
                {path: 'about/schedule',element: <Schedule />},
                {path: 'about/school',element: <School />},
                {path: 'about/history',element: <History />},
                {path: 'about/confession',element: <Confession />},
                {path: 'about/beliefs',element: <Beliefs />},
        {path: 'news',element: <News />, children:[]},
        {path: 'photo',element: <Photo />, children:[]},
        {path: 'sermons',element: <Sermons />},
                {path: 'sermons/childrens',element: <Childrens />},
                {path: 'sermons/payper-christmas',element: <Christmas />},
                {path: 'sermons/farisey',element: <Farisey />},
        {path: 'contacts',element: <Contacts />, children:[]},

        
]

export default path;





