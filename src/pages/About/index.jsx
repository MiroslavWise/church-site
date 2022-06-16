import { useNavigate } from 'react-router-dom';
import { Card } from 'primereact/card'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';

import PostsAbout from './ListAbout'

import photo from '../../pictures/photoAbout/pesochnye-chasy-kamni-nebo.jpg'

import style from './style.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default () => {


        return(
                <div className = {style.body}>
                        <PostsAbout />
                </div>
        )
}