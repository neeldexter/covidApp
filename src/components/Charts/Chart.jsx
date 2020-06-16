import React, { Component } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2'
import styles from './Chart.module.css'
class Chart extends Component {
    state = {
        dailyData: [],
        loading: false
    }

    async componentDidMount() {
        const dataFetched = await fetchDailyData();
        console.log("heloo", dataFetched)
        this.setState({
            dailyData: dataFetched,
            loading: true
        })
    }
    render() {
        const { dailyData, loading } = this.state
        console.log("state", this.state.loading)

        return (
            <div className={styles.container}>
                <div className={styles.barchart}>
                    {loading ? <Line
                        data={{
                            labels: dailyData.map((data, i) => {
                                return data.reportDate
                            }),
                            datasets: [{
                                data: dailyData.map((data, i) => {
                                    return data.confirmed.total
                                }),
                                label: 'Infected Worldwide',
                                borderColor: '#3333ff',
                                fill: true
                            }, {
                                data: dailyData.map((data, i) => {
                                    return data.confirmed.china
                                }),
                                label: 'Infected in China',
                                borderColor: 'red',
                                fill: true
                            },
                            {
                                data: dailyData.map((data, i) => {
                                    return data.confirmed.outsideChina
                                }),
                                label: 'Infected outside China',
                                borderColor: 'green',
                                fill: true
                            }]
                        }} /> : null}
                </div>
            </div>
        );
    }
}

export default Chart;