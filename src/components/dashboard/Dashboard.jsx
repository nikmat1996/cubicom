import React from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import Navbar from './Navbar';
import CardDeck from './CardDeck';

export const Dashboard = props => {
    return (
        <div>
            <Navbar />
            <CardDeck  data={props.cardData}/>
            <Table data={props.tableData} />
        </div>
    )
}

const mapStateToProps = state => ({
    tableData : state.tableData,
    cardData: state.cardData
})

// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, null)(Dashboard)
