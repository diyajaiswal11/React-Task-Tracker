import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Add' />
            
        </header>
    )
}

// Header.defaultProps = {
//     title: 'My Default Prop for title'
// }

Header.propTypes = {
    title: PropTypes.string.isRequired,
}



// CSS IN JS
// const headingStyle = {
//     color:'red',
//     backgroundColor:'black'
// }

export default Header
