import {listPostAbout} from './list'
import {PostAbout} from './PostAbout'


export default ()=>{
        return(
                                listPostAbout.map(item => (
                                        <PostAbout
                                                title={item.title}
                                                description={item.description}
                                                photo={item.photo}
                                                link={item.link} 
                                        />
                                ))
        )
}