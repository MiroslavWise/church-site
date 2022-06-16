import { Slider } from "./Slider"
import { Panel } from 'primereact/panel';
import { Divider } from 'primereact/divider';
export default () => {


        return(
                <>
                <Slider />
                <Panel style={{padding: '0 40px' }}>
                        <p>Библия говорит Пс.77:3-5 что слышали мы и говорили, и отцы наши рассказали нам, не скроем от детей их, возвещая грядущую славу 
                                Господа, и силу Его, и чудеса Его, которые Он сотворил чтобы знал грядущий род, дети, которые родятся, и что бы они в свое время 
                                возвещали своим детям.</p>
                        <br />
                        <p>Мк.10:14-16 Слова Иисуса Христа "...пустите детей приходить ко Мне и не препятствуйте им, ибо таковых есть Царствие Божие...."</p>
                        <Divider />
                        <h6>КТО МОЖЕТ ПОСЕЩАТЬ ВОСКРЕСНУЮ ШКОЛУ?</h6>
                        <p>Двери воскресной школы открыты для всех детей в возрасте от 3-х до 12 лет, а также подростков от 13 лет до 15 лет.</p>
                        <br />
                        <p>В настоящее время в нашей церкви действует три возрастные группы:</p>
                        <br/>
                        <p style={{paddingLeft: 10}}>Две средние:</p>
                        <ul>
                                <li style={{paddingLeft: 2}}>Дети от 6-ти до 8 лет с 11-00 до 12-00</li>
                                <li style={{paddingLeft: 2}}>Дети от 9-ти до 12 лет с 09-00 до 10-00</li>
                        </ul>
                        
                        
                        <p style={{paddingLeft: 10}}>Младшая группа:</p>
                        <ul>
                        <li style={{paddingLeft: 2}}>Дети от 3-х до 5 лет с 12-00 до 13-00</li>
                        </ul>
                        <br/>
                        <p>Дети любят воскресную школу. И не потому , что там не ставят двоек , не потому что там нет дневников, где можно сделать запись о плохом поведении, и не потому, что никто не будет ругать из-за 
                                невыполненного домашнего задания... Они идут туда с радостью, потому что там их всегда ждут и там они занимаются своими самыми любимыми делами. А это: делают поделки, оригами, 
                                лепят из пластилина, рисуют карандашами, 
                                мелками, играют в игры, поют, участвуют в театральных постановках, отмечают праздники, читают и исследуют Библию...</p>
                        <br />
                        <p>Но в каждом своем деле, в каждом занятии, преподаватели учат их видеть Бога, учат понимать и применять 
                                Библейские принципы в своей жизни, открывая и реализовывая индивидуальные способности каждого ребенка.</p>
                        <Divider />
                        <h6>ЧЕМУ УЧАТ В ВОСКРЕСНОЙ ШКОЛЕ?</h6>
                        <br />
                        <p>Понимая разный уровень восприятия детей в разном возрасте, в воскресной школе разработана отдельная программа обучения для каждой группы.</p>
                        <br />
                        <p>Все программы обучения разработаны для занятий, рассчитаны на то, чтобы развивать у детей способности думать самостоятельно, самостоятельно принимать решение, проявлять инициативу, подходить творчески к разным вопросам, не смущаться и не отчаиваться в момент затруднений и неудач.</p>
                </Panel>
                </>
        )
}