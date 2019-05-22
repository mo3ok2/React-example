import React, {Component} from 'react';
import './style.css'
import LanguagesSwitcher from './LanguagesSwitcher'
import PropTypes from "prop-types";

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar-wrapper'>
                <h2>{this.context.t("TODO")}</h2>
                <LanguagesSwitcher className='lang-component'/>
            </div>
        );
    }
}

Sidebar.contextTypes = {
    t: PropTypes.func.isRequired
};

export default Sidebar;
