import React from 'react'
import Table from '../Components/Table'

function Dashboard() {
    return (
        <div className = "dashboard">
            <div style = {{width: '350px'}}>
            </div>
            <div className = "dashboard-meetings">
            <h1>My Meetings</h1>
            <Table/>
            </div>
            
        </div>
    )
}

export default Dashboard
