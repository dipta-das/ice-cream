import React from 'react';
import classes from './Footer.module.css';

// eslint-disable-next-line import/prefer-default-export
export const Footer = () => (
    <footer>
        <div className={['container', classes.container].join(' ')}>
            <div>Copyright &copy;2021.</div>
            <div className="textRight">
                Built with <span className="red">&hearts;</span> by
                <a href="https://reactjs.org/docs/create-a-new-react-app.html">Create React App</a>
            </div>
        </div>
    </footer>
);

export default Footer;
