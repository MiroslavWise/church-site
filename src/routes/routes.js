import path from './path'
import { Route } from 'react-router-dom'

const genRouteList = () => path.map((item) => {
        return(
                <Route key={item.path} path={item.path} element={item.element} />
        )
})

export default genRouteList