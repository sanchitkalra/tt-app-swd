import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import {
  FormControl,
  Select,
  MenuItem,
  Button,
  TextField,
} from '@material-ui/core'

const columnsPrefil = [
  {
    field: 'id',
    headerName: 'id',
    width: 120,
  },
  {
    field: 'day',
    headerName: 'day',
    width: 120,
  },
  {
    field: 'hour1',
    headerName: 'Hour 1',
    width: 120,
    sortable: false,
  },
  {
    field: 'hour2',
    headerName: 'Hour 2',
    width: 120,
    sortable: false,
  },
  {
    field: 'hour3',
    headerName: 'Hour 3',
    width: 120,
    sortable: false,
  },
  {
    field: 'hour4',
    headerName: 'Hour 4',
    width: 120,
    sortable: false,
  },
  {
    field: 'hour5',
    headerName: 'Hour 5',
    width: 120,
    sortable: false,
  },
]

const rowsPrefil = [
  {
    id: 0,
    day: 'Monday',
    hour1: 'npx1',
    hour2: 'npx2',
    hour3: 'npx3',
    hour4: 'npx4',
    hour5: 'npx5',
  },
  {
    id: 1,
    day: 'Tuesday',
    hour1: 'npx1',
    hour2: 'npx2',
    hour3: 'npx3',
    hour4: 'npx4',
    hour5: 'npx5',
  },
  {
    id: 2,
    day: 'Wednesday',
    hour1: 'npx1',
    hour2: 'npx2',
    hour3: 'npx3',
    hour4: 'npx4',
    hour5: 'npx5',
  },
  {
    id: 3,
    day: 'Thursday',
    hour1: 'npx1',
    hour2: 'npx2',
    hour3: 'npx3',
    hour4: 'npx4',
    hour5: 'npx5',
  },
  {
    id: 4,
    day: 'Friday',
    hour1: 'npx1',
    hour2: 'npx2',
    hour3: 'npx3',
    hour4: 'npx4',
    hour5: 'npx5',
  },
  {
    id: 5,
    day: 'Saturday',
    hour1: 'npx1',
    hour2: 'npx2',
    hour3: 'npx3',
    hour4: 'npx4',
    hour5: 'npx5',
  },
]

export default function App() {
  const [rows, setRows] = React.useState(rowsPrefil)
  const [columns, setColumns] = React.useState(columnsPrefil)
  const [currDay, setCurrDay] = React.useState(0)
  const [currHour, setCurrHour] = React.useState('hour1')
  const [meetLink, setMeetLink] = React.useState('')

  function handleCellClick(row, col, event) {}

  function handleCurrDay(event) {
    setCurrDay(event.target.value)
  }

  function handleCurrHour(event) {
    setCurrHour(event.target.value)
  }

  function handleMeetLinkChange(event) {
    setMeetLink(event.target.value)
  }

  function addMeetLink(event) {
    event.preventDefault()
    let r = [...rows]
    console.log(currDay, currHour, meetLink)
    r[currDay][currHour] = meetLink
    console.log(r)
    setRows(r)
    // setCurrHour(null)
    // setCurrDay(null)
    // setMeetLink(null)
  }

  console.log('x', rows)

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          onCellClick={handleCellClick}
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
        />
      </div>
      <div>
        <FormControl style={{ height: 400, width: '10%' }}>
          <Select
            label="Day"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currDay}
            onChange={handleCurrDay}
          >
            <MenuItem value={0}>Monday</MenuItem>
            <MenuItem value={1}>Tuesday</MenuItem>
            <MenuItem value={2}>Wednesday</MenuItem>
            <MenuItem value={3}>Thursday</MenuItem>
            <MenuItem value={4}>Friday</MenuItem>
            <MenuItem value={5}>Saturday</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ height: 400, width: '10%' }}>
          <Select
            label="Hour"
            labelId="demo-simple-select-label"
            id="demo-simple-select-2"
            value={currHour}
            onChange={handleCurrHour}
          >
            <MenuItem value={'hour1'}>1</MenuItem>
            <MenuItem value={'hour2'}>2</MenuItem>
            <MenuItem value={'hour3'}>3</MenuItem>
            <MenuItem value={'hour4'}>4</MenuItem>
            <MenuItem value={'hour5'}>5</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ height: 400, width: '10%' }}>
          <TextField
            id="outlined-basic"
            label="Meet link"
            value={meetLink}
            onChange={handleMeetLinkChange}
          />
        </FormControl>
        <FormControl style={{ height: 400, width: '10%' }}>
          <Button onClick={addMeetLink}>Add</Button>
        </FormControl>
      </div>
    </>
  )
}
