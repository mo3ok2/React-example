import React, {Component} from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import en from '../../../static/images/en.png';
import fr from '../../../static/images/fr.png';
import pl from '../../../static/images/pl.png';
import ru from '../../../static/images/ru.png';
import {connect} from "react-redux";
import {setLanguage} from "redux-i18n";
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

class LanguagesSwitcher extends Component {

    state = {
        open: false,
        languages: [
            {
                abr: 'EN',
                icon: en,
                name: 'English'
            },
            {
                abr: 'RU',
                icon: ru,
                name: 'Russian'
            },
            {
                abr: 'PL',
                icon: pl,
                name: 'Polish'
            },
            {
                abr: 'FR',
                icon: fr,
                name: 'French'
            },
        ]
    };

    componentDidMount() {
        setInterval(() => this.changeLanguage('en'), 3600000)
    }

    changeLanguage = (lang) => {
        const {setLanguage} = this.props;
        setLanguage(lang);
        this.setState({open: false});
        Cookies.set('language', lang);
    };

    render() {
        const {open, languages} = this.state;

        return (
            <div className='lang-wrapper'>
                <Button
                    onClick={() => this.setState({open: !open})}
                    variant="contained"
                    color="primary"
                >
                    {this.context.t("Languages")}
                </Button>
                {open && (
                    <div className='languages-block'>
                        {languages.map((item, index) =>
                            <div onClick={() => this.changeLanguage(item.abr.toLocaleLowerCase())} key={index}
                                 className='lang-item'>
                                <div><span className='lang-item-abr'>{item.abr}</span></div>
                                <div><img className='lang-item-icon' alt='flags' src={item.icon}/></div>
                                <div><span className='lang-item-name'>{item.name}</span></div>
                            </div>)}
                    </div>
                )}
            </div>
        );
    }
}

LanguagesSwitcher.contextTypes = {
    t: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    const {i18nState} = state;
    return {lang: i18nState.lang}
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLanguage: (lang) => {
            dispatch(setLanguage(lang))
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LanguagesSwitcher);
