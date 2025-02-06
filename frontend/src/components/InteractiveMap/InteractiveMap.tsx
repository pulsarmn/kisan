import {FC} from "react";
import classes from "./InteractiveMap.module.css"
import chair from "../../assets/schemes/elements/chair.svg"
import utilityRoom from "../../assets/schemes/elements/utilityRoom.svg"

type InteractiveMapProps = {
    valueSelect: string;
}

const status = "DEFECTIVE";

const InteractiveMap: FC<InteractiveMapProps> = ({valueSelect}: InteractiveMapProps) => {
    return (
        <>
            <h6>Interactive map for classroom: {valueSelect}</h6>
            <div className={classes.body}>
                <div className={classes.container}>
                    <div className={`${classes.tv} ${classes.state_OK}`}>Телевизор</div>
                    <div className={classes.computersGrid}>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                        <div className={classes.computersGridItem}>
                            <img className={classes.chair} src={chair} alt="chair"/>
                            <div className={classes.table}>
                                <button className={`${classes.button} ${classes[`state_${status}`]}`}>comp</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.utilityRoom}>
                        <img src={utilityRoom} alt="Подсобное помешение"/>
                    </div>
                    <div className={classes.quit}></div>
                </div>
            </div>
        </>
    );
};

export default InteractiveMap;