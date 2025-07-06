import React from 'react'
import DashboardStates from './DashboardStates'
import EarningChart from './EarningChart'
import TotalQuotes from './TotalQuotesChart'
import SoldFertiliser from './SoldFertiliserChart'

const dashboard = () => {
  return (
    <div>
        <DashboardStates />
        <EarningChart />
        <div className="flex md:flex-row flex-col items-center gap-5 mt-5">          
          <TotalQuotes />
          <SoldFertiliser />
        </div>
    </div>
  )
}

export default dashboard