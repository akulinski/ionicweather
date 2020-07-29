import React, {useEffect, useState} from "react";
import {Forecast} from "../entites/Forecast";
import {IonCard, IonCardContent, IonFabButton, IonIcon, IonItem, IonItemGroup, IonLabel} from "@ionic/react";
import {analytics, pin} from "ionicons/icons";
import ForecastComponent from "./ForecastComponent";
import "./ForecastCard.css"
import getCurrentWeather from "../utils/api";
import ChartComponent from "./ChartComponent";
import moment from "moment";

interface Props {
    city: string
}

const ForecastCard: React.FC<Props> = ({city}) => {
    const [forecast, setForecast] = useState<Forecast>();
    const [chartVisible, setChartVisible] = useState(false);

    useEffect(() => {
        getCurrentWeather(city).then(resp => setForecast(resp.data)).catch(err => console.error(err))
    }, [city])

    return (
        <div className="card-container">
            <IonCard className="weather-content">
                <IonItem>
                    <IonIcon icon={pin} slot="start"/>
                    <IonLabel>{city}</IonLabel>
                    <IonFabButton size="small" onClick={() => setChartVisible(prevState => !prevState)}><IonIcon
                        size="small"
                        icon={analytics}/></IonFabButton>
                </IonItem>
                <IonCardContent>
                    <IonItemGroup>

                        {
                            forecast?.list?.slice(0, 5).map((el) => (
                                <ForecastComponent key={el.dt} dt={el.dt}
                                                   description={el.weather[0]?.description}
                                                   temp={el.main.temp}
                                                   icon={el.weather[0]?.icon}/>

                            ))
                        }
                    </IonItemGroup>

                    {
                        chartVisible && <ChartComponent
                            dates={forecast?.list.slice(0, 5).map(f => moment.unix(f.dt).format("MM/DD/YYYY"))}
                            temps={forecast?.list.slice(0, 5).map(f => Math.ceil(f.main.temp - 274))}/>
                    }
                </IonCardContent>

            </IonCard>
        </div>
    );
}

export default ForecastCard;
