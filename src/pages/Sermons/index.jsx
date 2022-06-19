import React from "react"
import AOS from 'aos';
import { Card } from 'primereact/card'
import {styleCard} from 'components/funcConst';
import { preaching } from "./ArrayPreaching";
import { useNavigate } from "react-router-dom";

export default React.memo(() => {
        AOS.init({
                duration: 700,
                once: true,
                offset: -30,
        });
        const navigate = useNavigate();
        const header = (
                <div style={{width: '100%', height:'0px', padding: 0, marginBottom: 0, display:'none' }}></div>
        );
        document.title = 'Проповеди';
        return(
                <div data-aos="zoom-in">
                        {
                                preaching.map(item => (
                                        <Card
                                                key={item.title}
                                                onClick={()=>{navigate(item?.navigate)}}
                                                header={header} 
                                                title={<h4 style={{paddingLeft: 15, fontWeight: 'revert'}}>{item?.title}</h4>}
                                                style={styleCard(item?.photo)}
                                                subTitle={item?.subTitle}
                                                className='cursor-pointer'
                                        ></Card>
                                ))
                        }
                        
                </div>
        )
})