import { Card } from 'primereact/card'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';

import schedule from '../../../pictures/photoAbout/schedule.jpg'


export default () => {
        const styleCard = {
                width: '100%',
                backgroundImage: `url(${schedule})`, 
                backgroundSize: 'cover', 
                borderRadius: 20,
                padding: 15,
                margin: 10,
        }

        const header = (
                <div style={{width: '100%', height:200, }}></div>
        );

        return(
                <div>
                        <Card header={header} title='РАСПИСАНИЕ СЛУЖЕНИЙ' style={styleCard} ></Card>
                        <Panel style={{padding:0, }}>
                                <h4>ПОНЕДЕЛЬНИК:</h4>
                                <strong>19:00</strong> – Братская группа (Козел Василий) <br/>
                                <strong>19:00</strong> – Сестринская группа (Козел Лилия)
                                <Divider />
                                <h4>ВТОРНИК:</h4>
                                <strong>19:00</strong> – Сестринская группа (Кутына Татьяна, Козел Карина)
                                <Divider />
                                <h4>СРЕДА:</h4>
                                <strong>19:00</strong> – Молитвенное богослужение 
                                <Divider />
                                <h4>ЧЕТВЕРГ:</h4>
                                <strong>19:00</strong> – Сестринская группа (Лукша Юлия, Козел Алла)
                                <Divider />
                                <h4>ПЯТНИЦА:</h4>
                                <strong>19:00</strong> – Домашняя группа (Сергей Кутына)<br />
                                <strong>19:00</strong> – Домашняя группа (Козел Василий, Мещеряков Денис)
                                <Divider />
                                <h4>СУББОТА:</h4>
                                <strong>19:00</strong> – Молодежное служение (Лукша Павел)
                                <Divider />
                                <h4>ВОСКРЕСЕНЬЕ:</h4>
                                <strong>10:00</strong> – Богослужение<br/>
                                <strong>09:00</strong> – Старшая воскресная школа (Козел Алла)<br/>
                                <strong>11:00</strong> – Средняя и младшая воскресные школы
                        </Panel>
                </div>
        )
}