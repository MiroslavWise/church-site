import Home from '../pages/Home';
import About from '../pages/About';
import News from '../pages/News';
import Photo from '../pages/Photo';
import Sermons from '../pages/Sermons';
import Contacts from '../pages/Contacts';

const path = [
        {path: '/',element: <Home />},
        {path: '/about',element: <About />},
        {path: '/news',element: <News />},
        {path: '/photo',element: <Photo />},
        {path: '/sermons',element: <Sermons />},
        {path: '/contacts',element: <Contacts />},
]

export default path;





