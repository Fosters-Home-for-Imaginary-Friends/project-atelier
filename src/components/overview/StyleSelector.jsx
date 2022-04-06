import React, { useContext} from "react";
import Style from "./Style.jsx";
import {OverviewContext} from "./Overview.jsx";

const StyleSelector = () => {

    const { styles, currentStyle, loading } = useContext(OverviewContext);

    if (loading) {
        return <div className="style-selector loading"></div>;
    }

    return (
        <div>
            <div className="style-name">{currentStyle.name}</div>
            <div className="style-selector">
                {styles.map(style =>
                    <Style key={style.style_id} style={style}/>
                )}
            </div>
        </div>
    )
}

export default StyleSelector;