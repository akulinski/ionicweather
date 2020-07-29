import React, {useState} from 'react';
import {
    IonAlert,
    IonContent,
    IonFab,
    IonFabButton,
    IonHeader,
    IonIcon,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Tab1.css';
import ForecastCard from "../components/ForecastCard";
import {add} from 'ionicons/icons';


const Tab1: React.FC = () => {
    const [cities, setCities] = useState<string[]>(["Krakow"]);

    const [popupVisible, setPopupVisible] = useState(false);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Weather</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {cities.map((v) => (<ForecastCard city={v}/>))}

                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton onClick={() => setPopupVisible(prevState => !prevState)}><IonIcon
                        icon={add}/></IonFabButton>

                </IonFab>

                <IonAlert
                    isOpen={popupVisible}
                    onDidDismiss={() => setPopupVisible(false)}
                    header={'Add new city'}
                    inputs={[
                        {
                            name: 'city',
                            type: 'text',
                            placeholder: 'City Name'
                        },
                    ]}
                    buttons={[
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                console.log('Confirm Cancel');
                            }
                        },
                        {
                            text: 'Ok',
                            handler: (alertData) => {
                                setCities(prevState => [...prevState, alertData.city])
                            }
                        }
                    ]}
                />

            </IonContent>
        </IonPage>
    );
};

export default Tab1;
