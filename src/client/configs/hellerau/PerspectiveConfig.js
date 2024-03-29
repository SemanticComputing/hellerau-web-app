import React from 'react'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
// import TripOriginIcon from '@material-ui/icons/TripOrigin'
// import LocationOnIcon from '@material-ui/icons/LocationOn'
// import AddLocationIcon from '@material-ui/icons/AddLocation'
// import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness'
// import StarIcon from '@material-ui/icons/Star'
import RedoIcon from '@material-ui/icons/Redo'
// import PieChartIcon from '@material-ui/icons/PieChart'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
// import BubbleChartIcon from '@material-ui/icons/BubbleChart'
// import LineChartIcon from '@material-ui/icons/ShowChart'
import hellerauImage from '../../img/main_page/hellerau-452x262.png'

export const perspectiveConfig = [
  {
    id: 'hellerau',
    frontPageImage: hellerauImage,
    perspectiveDescHeight: 160,
    defaultActiveFacets: new Set(['']),
    tabs: [
      {
        id: 'migrations',
        value: 0,
        icon: <RedoIcon />
      },
      {
        id: 'table',
        value: 1,
        icon: <CalendarViewDayIcon />
      }
      // {
      //   id: 'export',
      //   value: 2,
      //   icon: <CloudDownloadIcon />
      // }
    ],
    instancePageTabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'export',
        value: 1,
        icon: <CloudDownloadIcon />
      }
    ]
  }
]
