import {Play} from './PlayListOne'
import {ListLink} from './ListLink'

export const List = () => {
        return(
                ListLink.map(item => (
                        <Play 
                                title={item.title}
                                link={item.link}
                                description={item.description}
                        />
                ))
        )
}