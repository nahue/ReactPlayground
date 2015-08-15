import React from 'react';
import { RouteHandler } from 'react-router';
import Menu from '../menu/menu';
//import Sidebar from '../Sidebar/Sidebar';
import mui from 'material-ui';
import MenuIcon from 'material-ui/lib/svg-icons/navigation/menu';

import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';

let LeftNav = mui.LeftNav;
let AppBar = mui.AppBar;
let IconMenu = mui.IconMenu;

let MenuItem = mui.MenuItem;
let IconButton = mui.IconButton;
let ThemeManager = new mui.Styles.ThemeManager();

import './Main.scss';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'React',
            leftNavOpen: false,
            nav_data : [
                {key: '1', text: 'Home', link: 'home'},
                {key: '2', text: 'Images', link: 'images'}
            ],
            drawer_data : [
                { route: 'get-started', text: 'Get Started' },
                { route: 'customization', text: 'Customization' },
                { route: 'components', text: 'Components' },
                { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
                {
                    type: MenuItem.Types.LINK,
                    payload: 'https://github.com/callemall/material-ui',
                    text: 'GitHub'
                },
                {
                    text: 'Disabled',
                    disabled: true
                },
                {
                    type: MenuItem.Types.LINK,
                    payload: 'https://www.google.com',
                    text: 'Disabled Link',
                    disabled: true
                }
            ]
        };
        this._toggleLeftNav = this._toggleLeftNav.bind(this);
        this._onHeaderClick = this._onHeaderClick.bind(this);

    }



    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    _toggleLeftNav(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        this.refs.leftNav.toggle();
        this.state.leftNavOpen = true;
    }
    _onHeaderClick(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        if (this.state.leftNavOpen == true)
            this.refs.leftNav.close();
    }

    render() {
        let iconButtonElement = <IconButton><MoreVertIcon /></IconButton>;
        let leftNavButton = <IconButton onClick={this._toggleLeftNav}><MenuIcon /></IconButton>;

        let menu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem primaryText="Refresh" />
                <MenuItem index={2} primaryText="Send feedback" />
                <MenuItem index={3} primaryText="Settings" />
                <MenuItem index={4} primaryText="Help" />
                <MenuItem index={5} primaryText="Sign out" />
            </IconMenu>
        );

        return(
            <div className="mdl-layout__container" onClick={this._onHeaderClick}>
              <div className="mdl-layout">
                <AppBar title="React Playground" iconElementLeft={leftNavButton} iconElementRight={menu} />
                <LeftNav ref="leftNav" docked={false} menuItems={this.state.drawer_data} />
                  <main className="mdl-layout__content">
                      <div className="page-content">
                        <RouteHandler />
                      </div>
                  </main>
              </div>
          </div>
        );
    }
}

Main.childContextTypes = {
    muiTheme: React.PropTypes.object
};
