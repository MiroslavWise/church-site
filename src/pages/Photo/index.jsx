import React from 'react';
import { Messages } from 'primereact/messages';
import AOS from 'aos'



export default () => {
        AOS.init({
                duration: 500,
                once: true,
                easing: 'ease-in-out'
        });
        const msgs1 = React.useRef(null);
        React.useEffect(() => {
                document.title = 'Фото';
                msgs1.current.show([
                    { severity: 'info', summary: 'Фото', detail: 'Данный раздел временно находится в разработке', closable: false, sticky: true },
                ])}, []);
        return(
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>      
                        <Messages ref={msgs1} data-aos="fade-right"/>
                </div>
        )
}