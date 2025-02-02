import { FC, ChangeEvent} from "react";

import classes from "./Header.module.css"

type HeaderProps = {
    valueSelect: string;
    setValueSelect: (prevState: string) => void;
}

const Header: FC<HeaderProps> = ({ valueSelect, setValueSelect }: HeaderProps) => {

    function handleSelect(event: ChangeEvent<HTMLSelectElement>): void {
        setValueSelect(event.target.value);
    }

    return (
        <div className={classes.container}>
            <nav className={classes.navbar}>
                <div className={classes.logo}>
                    <h3>Учёт поломок компьютеров</h3>
                </div>
                <div className={classes.list}>
                    <form>
                        <div className={classes.selectWrapper}>
                            <select name="city" id="city-select"  value={valueSelect} onChange={handleSelect}>
                                <option defaultValue="DEFAULT">-- Выберите аудиторию --</option>
                                <option value="121а">121а</option>
                                <option value="122б">122б</option>
                                <option value="123в">123в</option>
                                <option value="124г">124г</option>
                                <option value="125д">125д</option>
                                <option value="126е">126е</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className={classes.userMenu}>
                    <h6></h6>
                    <h3>Преподаватель</h3>
                    <button>Выйти</button>
                </div>
            </nav>
        </div>
    );
}

export default Header;