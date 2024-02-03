import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import DeleteIcon from '@mui/icons-material/Delete'
import HomeIcon from '@mui/icons-material/Home'

import '@fontsource/roboto/400.css'
import './App.css'
import { pink } from '@mui/material/colors'

function App() {

  return (
    <>
      <p>Hello!!!</p>
      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />
      <DeleteIcon />

      <br />
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />

    </>
  )
}

export default App
