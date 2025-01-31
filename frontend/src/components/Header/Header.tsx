import classes from "./Header.module.css"

import React from "react";

const Header: React.FC = () => {
    return (
        <div className={classes.container}>
            <nav className={classes.navbar}>
                <div className={classes.logo}>
                    <h3>Учёт поломок компьютеров</h3>
                </div>
                <div className={classes.list}>
                    <h3>тут будет выпадающий список</h3>
                </div>
                <div className={classes.userMenu}>
                    <h3>Преподаватель</h3>
                    <button>Выйти</button>
                </div>
            </nav>
        </div>
    );
}

export default Header;