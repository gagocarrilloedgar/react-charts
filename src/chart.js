import { Container } from '@nivo/core';
import { ResponsiveRadar } from '@nivo/radar'


const MyResponsiveRadar = ({ data /* see data tab */ }) => {
    return (
        <div style={{ width: "600px", height: "600px" }}>
            <ResponsiveRadar
                data={data}
                keys={['Guillem Moreno','Edgar Gago','Carlos Ibañez Cuadal']}
                indexBy="Nombre"
                maxValue="auto"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                curve="linearClosed"
                borderWidth={2}
                borderColor={{ from: 'color' }}
                gridLevels={5}
                gridShape="circular"
                gridLabelOffset={36}
                enableDots={true}
                dotSize={10}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                dotBorderColor={{ from: 'color' }}
                enableDotLabel={true}
                dotLabel="value"
                dotLabelYOffset={-12}
                colors={{ scheme: 'nivo' }}
                fillOpacity={0.25}
                blendMode="multiply"
                animate={true}
                motionConfig="wobbly"
                isInteractive={true}
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: '#999',
                        symbolSize: 12,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )
}

export default MyResponsiveRadar;