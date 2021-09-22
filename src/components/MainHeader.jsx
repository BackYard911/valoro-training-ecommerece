import '../styles/MainHeaderStyles.css'
import { HeaderTitle } from './HeaderTitle'
import { UtilBox } from './UtilBox'
import menuIcon from '../images/burger.png'
import searchIcon from '../images/search.png'


function MainHeader(props){


    return(
        <header className="main-header">
            <HeaderTitle/>
            <div className="header-options">
                <UtilBox img={searchIcon}/>
                <UtilBox onClick text="cart"/>
                <UtilBox img={menuIcon}/>
            </div>
        </header>
    )
}

export {MainHeader}