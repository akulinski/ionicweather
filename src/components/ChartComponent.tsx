import React, {useEffect, useRef, useState} from "react";
import Chartjs from "chart.js";

interface Props {
    dates?: string[],
    temps?: number[]
}

const ChartComponent: React.FC<Props> = ({dates, temps}) => {
    const chartContainer = useRef(null);

    // eslint-disable-next-line
    const [chartInstance, setChartInstance] = useState(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            // @ts-ignore
            const newChartInstance = new Chartjs(chartContainer.current, {
                type: "line",
                data: {
                    //Bring in data
                    labels: dates,
                    datasets: [
                        {
                            label: "Temperatures",
                            data: temps,
                        }
                    ]
                },
                options: {
                    //Customize chart options
                }
            });
            setChartInstance(newChartInstance);
        }
    }, [chartContainer,dates, temps]);

    return (
        <div
            style={{
                width: '400px',
                height: '200px'
            }}
        >
            <canvas
                id="chart"
                ref={chartContainer}
            />
        </div>
    )
}

export default ChartComponent;
