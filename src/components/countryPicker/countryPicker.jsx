import React, { Component } from 'react';
import { countries } from '../../api';
import { Line, Bar } from 'react-chartjs-2'
import styles from './countryPicker.module.css'
import { red } from '@material-ui/core/colors';

class CountryPicker extends Component {
    state = {
        country: [],
        loading: false
    }
    async componentDidMount() {
        const dataFetched = await countries();
        const country = dataFetched.countries.map(data => {
            return data.name
        })
        console.log("okkkkkkkkkk", dataFetched)
        this.setState({
            country: country,
            loading: true
        })
    }
    render() {


        const { country, loading } = this.state;
        const state = {
            labels: country,
            datasets: [
                {
                    label: 'Corona Infected',
                    fill: false,
                    lineTension: 0.5,
                    backgroundColor: 'red',
                    borderColor: 'rgba(0,0,0,1)',
                    // borderWidth: 2,
                    data: [65000, 59000, 80000, 81000, 56000, 65000, 59000, 80000, 81000, 56000, 65000,
                        59000, 80000, 81000, 56000, 65000, 59000, 80000, 81000, 56000, 65000, 59000, 80000, 81000, 56000]
                }
            ]
        }
        return (
            <div className={styles.bar}>
                <Bar
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: 'Countrywise Data',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}

export default CountryPicker;