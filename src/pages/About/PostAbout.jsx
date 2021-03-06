import { useNavigate } from 'react-router-dom';
import {memo} from 'react'
import { Card } from 'primereact/card'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';



export const PostAbout = memo(({title, description, photo, link}) =>{
        const styleCard = {
        width: '100%',
        backgroundImage: `url(${photo})`, 
        backgroundSize: 'cover', 
        borderRadius: 20,
        padding: 15,
        margin: 10,
        }
        const navigate = useNavigate()
        const header = (
                <div style={{width: '100%', height:200, }}></div>
        );
        return(
                <>
                        <Card title={title} style={styleCard} header={header} onClick={()=> navigate(link)} className="cursor-pointer">
                                <p className="m-0" style={{lineHeight: '1.5'}}>{description}</p>
                        </Card>
                </>
        )
})