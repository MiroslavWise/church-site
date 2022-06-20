import childrens from 'pictures/preaching/childrens_s.jpg'
import cristmas from 'pictures/preaching/cristmas.png' 
import farisey from 'pictures/preaching/farisey.jpeg'

const preaching = [
        {
                photo: childrens, 
                title: 'Пять принципов дисциплинирования детей', 
                subTitle: 'Еще до того, как у меня появились свои дети, я много лет работала вожатой в лагере и учительницей в крупной государственной школе. Опыт работы в этих местах показал мне важность дисциплины в воспитании детей.',
                navigate: '/sermons/childrens',
                positionBG: {backgroundPositionY: '15%'}
        },
        {
                photo: cristmas, 
                title: 'Джон Пайпер: Гармония Рождества', 
                subTitle: 'Иисус Христос существовал и до зачатия во чреве Марии. Мы с вами до своего зачатия не существовали.',
                navigate: '/sermons/payper-christmas',
                positionBG: {backgroundPositionY: '52%'}
        },
        {
                photo: farisey, 
                title: 'Не фарисей ли ты?', 
                subTitle: 'Ты можешь оказаться фарисеем, даже не осознавая этого.',
                navigate: '/sermons/farisey',
                positionBG: {backgroundPositionY: '72%'}
        },
]

export {preaching}