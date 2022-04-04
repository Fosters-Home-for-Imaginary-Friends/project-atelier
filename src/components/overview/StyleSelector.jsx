import React, { useContext} from "react";
import Style from "./Style.jsx";
import {OverviewContext} from "./Overview.jsx";

const StyleSelector = () => {

    const { styles, loading } = useContext(OverviewContext);

    if (loading) {
        return <div className="style-selector loading"></div>;
    }

    return (
        <div className="style-selector">
            {styles.map(style =>
                <Style key={style.style_id} style={style}/>
            )}
        </div>
    )
}

export default StyleSelector;