import shcool from '../../pictures/photoAbout/shcool.jpg'
import beliefs from '../../pictures/photoAbout/beliefs.jpg'
import schedule from '../../pictures/photoAbout/schedule.jpg'
import history from '../../pictures/photoAbout/history.jpg'
import confession from '../../pictures/photoAbout/confession.jpg'



const listPostAbout = [
        {title: 'Расписание служений', description: 'Жизнь церкви не только по воскресеньям, но и в будние дни', photo: schedule, link: '/about/schedule'},
        {title: 'Воскресная школа', description: 'Мк.10:14-16 Слова Иисуса Христа "...пустите детей приходить ко Мне и не препятствуйте им, ибо таковых есть Царствие Божие...."', photo: shcool, link: '/about/school'},
        {title: 'История церкви', description: 'История нашей церкви', photo: history, link: '/about/history'},
        {title: 'Вероучение церкви', description: 'Составлено на основе «Исповедания веры христиан баптистов» под редакцией И. В. Одинцова 1928 г.', photo: beliefs, link: '/about/belief'},
        {title: 'Исповедание веры', description: 'Краткое, тезисное исповедание веры', photo: confession, link: '/about/confession'}
]

export {listPostAbout}