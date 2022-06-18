import { useEffect } from 'react';
import AOS from 'aos';

import PostsAbout from './ListAbout'

import style from './style.module.scss';

export default () => {
        AOS.init({
                duration: 700,
                once: true,
                offset: -30,
        });
        useEffect(()=>{
                document.title = "О церкви"
        }, [])
        

        return(
                <div className = {style.body} data-aos="fade-right">
                        <PostsAbout/>
                </div>
        )
}