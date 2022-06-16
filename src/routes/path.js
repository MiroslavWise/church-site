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
import Contacts from '../pages/Contacts';

const path = [
        {path: '/',element: <Home />},
        {path: '/about',element: <About />},
                {path: '/about/schedule',element: <Schedule />},
                {path: '/about/school',element: <School />},
                {path: '/about/history',element: <History />},
                {path: '/about/confession',element: <Confession />},
                {path: '/about/beliefs',element: <Beliefs />},
        {path: '/news',element: <News />},
        {path: '/photo',element: <Photo />},
        {path: '/sermons',element: <Sermons />},
        {path: '/contacts',element: <Contacts />},

        
]

export default path;





