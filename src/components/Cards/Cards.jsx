import React, { Component } from 'react';
import { Card, CardContent, Typography, Grid, TextField } from '@material-ui/core';
import { fetchData } from '../../api'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cname from 'classnames'
import COVID from '../../img/COVID.png'

class Cards extends Component {
    state = {
        data: {},
        loading: false,
        dig: ''
    }
    async componentDidMount() {
        const dataFetched = await fetchData();
        console.log("response", dataFetched)
        this.setState({
            data: dataFetched,
            loading: true,
            dig: ''
        })
    }
    Val = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        this.props.changedVal(e.target.value)
    }
    render() {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = this.state
        console.log("confirm", deaths)
        return (

            <div className={styles.container}>
                <img src={COVID} className={styles.logo} alt="logo" />
                <TextField label="Country" name="dig" value={this.state.dig} variant="filled" onChange={this.Val}
                />
                {this.state.loading ?
                    <Grid container justify="center">
                        <Grid component={Card} md={3} className={cname(styles.card, styles.infected)}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Infected :</Typography>
                                <Typography variant="h6">
                                    <CountUp
                                        start={0}
                                        end={confirmed.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                </Typography>
                                <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                                <Typography variant="body2">No. of active cases of COVID:</Typography>
                            </CardContent>
                        </Grid>
                        <Grid component={Card} component={Card} md={3} className={cname(styles.card, styles.recovered)}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Recoveries: </Typography>
                                <Typography variant="h6">
                                    <CountUp
                                        start={0}
                                        end={recovered.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                </Typography>
                                <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                                <Typography variant="body2">No. of recovered cases of COVID:</Typography>
                            </CardContent>
                        </Grid>
                        <Grid component={Card} component={Card} md={3} className={cname(styles.card, styles.deaths)}>
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>Deaths :</Typography>
                                <Typography variant="h6">
                                    <CountUp
                                        start={0}
                                        end={deaths.value}
                                        duration={2.5}
                                        separator=","
                                    />
                                </Typography>
                                <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                                <Typography variant="body2">No. of Deaths of COVID: </Typography>
                            </CardContent>
                        </Grid>
                    </Grid> : <p>data loading....</p>}
            </div>
        )
    }
}

export default Cards;