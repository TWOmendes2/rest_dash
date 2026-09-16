import ReactECharts from 'echarts-for-react'
import * as echarts from 'echarts'
const StatisticsChart = () => {

    const option = {
        color: ['var(--orange)'],

        toolbox: {
            feature: {
                saveAsImage: {},
            }
        },

        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross"
            },
            backgroundColor: "rgba(0, 0, 0, 0.59)",
            borderWidth: 0,
        },
        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
            show: false,
        },

        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]
            }
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false,
                }
            }
        ],
        series: [
            {
                type: "line",
                smooth: true,
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: "rgba(12, 161, 19, 0.99)",
                        },
                        {
                            offset: 1,
                            color: "rgba(72, 255, 0, 0.99)"
                        }
                    ]),
                    width: 4
                },
                areaStyle: {
                    opacity: .5,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 0.8, [
                        {
                            offset: 0,
                            color: "#055f02"
                        },
                        {
                            offset: 1,
                            color: "#055f02"
                        }
                    ])
                },
                emphasis: {
                    focus: "series",
                },
                showSymbol: false,
                data: [28000, 19000, 32000, 18000, 41000, 30000, 26000]
            }
        ]
    }

    return (
        <ReactECharts option={option}
        />
    )
}

export default StatisticsChart
