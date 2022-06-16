import sch1 from '../../../pictures/SundaySchool/1.jpg'
import sch2 from '../../../pictures/SundaySchool/2.jpg'
import sch3 from '../../../pictures/SundaySchool/3.jpg'
import sch4 from '../../../pictures/SundaySchool/4.jpg'
import { Galleria } from 'primereact/galleria';
import { Transition } from 'react-transition-group';

const defaultStyle = {
        transition: `opacity 300ms ease-in-out`,
        opacity: 0,
}

const transitionStyles = {
entering: { opacity: 1 },
entered:  { opacity: 1 },
exiting:  { opacity: 0 },
exited:  { opacity: 0 },
};
const Images = [
        sch1,
        sch2,
        sch3,
        sch4,
]

const SliderStyle = {
        width: '100%',
        height: 600,
        objectFit: 'cover',
        margin: 0,
        padding: 0,
        borderRadius: 20,
}

const itemTemplate = (item) => {
        return <img src={item} style={SliderStyle}/>
    }
const itemTemplateTr = (item) => {
        return <img src={item} style={{height: 40,objectFit: 'cover', width:60}}/>
    }
export const Slider = () => {

        return(
                <>
                        <div className="card">
                        <Galleria 
                                transitionInterval={4000}
                                transitionOptions={{...defaultStyle, ...transitionStyles}}
                                value={Images} 
                                numVisible={4} 
                                showThumbnails={false}
                                thumbnail={itemTemplateTr}
                                item={itemTemplate}
                                // autoPlay={3500}
                                circular
                        />
                    </div>
                </>
        )
}