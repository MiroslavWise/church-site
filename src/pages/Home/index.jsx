import React from 'react';
import { Card } from 'primereact/card'
import styled from 'styled-components';
import { Divider } from 'primereact/divider';

import {styleCard, StrongLink} from '../../components/funcConst';
import photo from '../../pictures/homeScreen/church_build.jpg'

export default React.memo(() => {
        React.useEffect(()=>{
                document.title = `Церковь "Слово Жизни" г. Столин`;
        }, [])
        const header = (
                <div style={{width: '100%', height:100 }}></div>
        );
        const PLH6 = styled.h6`
                padding-left: 10px;
                font-weight: bold;
        `
        const DividerP3M3 = {
                padding: 3,
                margin: 3
        }
        const PLP = styled.strong`
                padding: 0 0 0 15px ;
                font-weight: bold;
                text-decoration: none;
                background-color: inherit;
        `
        const subTitle = (
                <>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                        <div style={{width: '48%', padding: 0}}>
                                <p>Придите ко Мне все труждающиеся и обремененные, и Я успокою вас <StrongLink href='https://bibleonline.ru/bible/rst66/mat-11.28/' target='_blank'>(Мф.11:28)</StrongLink></p>
                                <h6>Приходите на наши богослужения, мы будем рады видеть вас</h6>
                                <br/>
                                <PLH6>Воскресенье:</PLH6>
                                <PLP>10:00</PLP> – Богослужение <br/>
                                <PLP>09:00</PLP> – Старшая воскресная школа (Козел Алла)<br/>
                                <PLP>11:00</PLP> – Средняя и младшая воскресные школы
                                <Divider style={DividerP3M3} />
                                <PLH6>Пятница:</PLH6>
                                <PLP>19:00</PLP> – Домашняя группа (Сергей Кутына)<br/>
                                <PLP>19:00</PLP> – Домашняя группа (Козел Василий, Мещеряков Денис)
                                <Divider style={DividerP3M3} />
                                <PLH6>Суббота:</PLH6>
                                <PLP>19:00</PLP> – Молодежное служение (Лукша Павел)
                        </div>
                        <div><Divider layout='vertical' style={{height: '100%'}}/></div>
                        
                        <div style={{width: '48%', padding: 0}}>
                        <PLH6>А что у вас есть для моих детей?</PLH6>
                        Мы рады, что Бог благословил Вас детьми. В нашей церкви есть подростковый и молодежный клубы, а так-же воскресные школы для детей от 3 до 12 леты
                        <Divider style={DividerP3M3} />
                        <PLH6>Я решил прийти к вам, но как мне одеться?</PLH6>
                        Мы собираемся на богослужения, чтобы поклоняться Богу. Это серьезное собрание. Какой моде Вы следуете — ваше дело, но вызывающая, «пляжная» 
                        или «дискотечная» одежда конечно не подойдет.
                        <Divider style={DividerP3M3} />
                        <PLH6>Как много людей посещают церковь «Слово Жизни»?</PLH6>
                        На утренних служениях у нас бывает около 80 человек.
                        <Divider style={DividerP3M3} />
                        <PLH6>Где вы находитесь?</PLH6>
                        <StrongLink target='_blank' href='https://goo.gl/maps/B9zsEnQTYKfYzEZa6'>Наш адрес: 225510, Брестская область,<br /> г.Столин, ул.Советская, д. 94 б</StrongLink>
                        </div>
                </div>
                </>
                
        )
        return(
                <>      
                        <Card 
                                header={header} 
                                title='Друзья, сердечно приглашаем Вас на богослужения!' 
                                style={styleCard(photo)} 
                                subTitle={subTitle}
                        ></Card>
                </>
        )
})