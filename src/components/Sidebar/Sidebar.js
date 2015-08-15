import React from 'react';
import $ from 'jquery';
import Icon from 'react-fa';

import './Sidebar.less';

var Sidebar = React.createClass({
    openSidebar: function(){
        $('body').addClass('sidebar-visible');
        $('.page-sidebar').attr('style', 'transform: translate3d(210px, 0px, 0px)');
    },
    closeSidebar: function(){
        $('body').removeClass('sidebar-visible');
        $('.page-sidebar').removeAttr('style');
    },
    render: function() {
        return (
            <div className='page-sidebar' data-pages='sidebar' onMouseEnter={this.openSidebar} onMouseLeave={this.closeSidebar}>
                <div className="sidebar-header">
                    <img alt="logo" className="brand" width="78" height="22"/>
                    <div className="sidebar-header-controls">
                        <button data-pages-toggle="#appMenu" className="btn btn-xs sidebar-slide-toggle btn-link m-l-20" type="button">
                            <Icon name="16 fa-angle-down"/>
                        </button>
                        <button data-toggle-pin="sidebar" className="btn btn-link visible-lg-inline" type="button">
                            <i className="fa fs-12"></i>
                        </button>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu-items">
                        <li className="m-t-30">
                            <a href="#" className="detailed">
                              <span className="title">Page 1</span>
                              <span className="details">234 notifications</span>
                            </a>
                            <span className="icon-thumbnail "><i className="pg-mail"></i></span>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
});

export default Sidebar;
