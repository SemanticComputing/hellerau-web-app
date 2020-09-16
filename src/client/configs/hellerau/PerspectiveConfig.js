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
import manuscriptsImage from '../../img/main_page/manuscripts-452x262.jpg'
// import worksImage from '../../img/main_page/works-452x262.jpg'
// import eventsImage from '../../img/main_page/events-452x262.jpg'
// import placesImage from '../../img/main_page/places-452x262.jpg'

export const perspectiveConfig = [
  {
    id: 'hellerau',
    frontPageImage: manuscriptsImage,
    perspectiveDescHeight: 160,
    defaultActiveFacets: new Set(['prefLabel']),
    tabs: [
      {
        id: 'table',
        value: 0,
        icon: <CalendarViewDayIcon />
      },
      {
        id: 'migrations',
        value: 1,
        icon: <RedoIcon />
      },
      {
        id: 'export',
        value: 2,
        icon: <CloudDownloadIcon />
      }
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
