import {IonImg, IonItemDivider, IonThumbnail} from "@ionic/react";
import moment from "moment";
import React from "react";

interface Props {
    icon: string,
    dt: number,
    temp: number,
    description: string,
}

const ForecastComponent: React.FC<Props> = ({icon, dt, temp, description}) => {
    return <div className="day">
        <IonItemDivider>
            <IonThumbnail slot="start">
                <IonImg
                    src={`http://openweathermap.org/img/wn/${icon}.png`}/>
            </IonThumbnail>
            {moment.unix(dt).format("MM/DD/YYYY")}<br/>

            {Math.ceil(temp - 274)} °C<br/>
            {description}


        </IonItemDivider>
    </div>;
}

export default ForecastComponent;
