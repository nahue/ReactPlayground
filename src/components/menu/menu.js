import React from 'react';
import Router from 'react-router';
import './style.less';
import 'material-design-lite/src/menu/_menu.scss';

var Link = Router.Link;

class NavigationLink extends React.Component {
    render() {
        let text = this.props.text;
        let link = this.props.link;
        return <Link className="mdl-navigation__link" to={link}>{text}</Link>;
    }
}

class Menu extends React.Component {
    render() {
        let items = this.props.items.map(function (item) {
            return (
                <NavigationLink key={item.key} text={item.text} link={item.link}/>
            );
        });

        return (
            <nav className='mdl-navigation mdl-layout--large-screen-only'>
                {items}
            </nav>
        );
    }
}

export default Menu;
