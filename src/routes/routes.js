import path from './path'
import { Route, Routes } from 'react-router-dom'

const genRouteList = () => path.map(({path, element, children}) => {
        if(children?.length > 0){
                return (
                                <Route  path={path} element={element} >
                                        {children?.map(({path:p, element:e}) => <Route key={p} path={p} element={e} />)}
                                </Route>
                )
        }
        return <Route key={path} path={path} element={element} />
})

export default genRouteList