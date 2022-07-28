import React, { useState } from 'react';
import {
  Button, ButtonGroup, Checkbox, Radio, Slider, Select, MenuItem, TextField, Switch, Box, Container, List, ListItem,
  ListItemText, Divider, Icon, ListItemIcon, ListItemAvatar, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,
  styled, Tooltip, Typography
} from '@mui/material';
import { Delete, Favorite, VolumeMute, VolumeUp, Send } from "@mui/icons-material";
// import { makeStyles } from '@mui/style';


// const useStyles = makeStyles({
//   homePage: {
//     color: "red",
//   }
// })

export default function Inputfiled() {

  // const classes = useStyles();
  let color = "primary";
  // const [color, setColor] = useState("primary");
  // const [disableBtn,setdisableBtn] = useState(false);

  const [radio, setRadio] = useState("male");

  const radiobtn = (e) => {
    // alert("working")
    // console.log(e.target.value);
    setRadio(e.target.value)
  }

  // slider
  const mark = [
    { value: 0, label: "0" },
    { value: 20, label: "20" },
    { value: 40, label: "40" },
    { value: 60, label: "60" },
    { value: 80, label: "80" },
    { value: 100, label: "100" },
  ]
  const volume = [
    { value: 0, label: <VolumeMute /> },
    { value: 100, label: <VolumeUp /> }
  ]
  const prices = [
    { value: 100, label: [`₹100`] },
    { value: 300, label: ["₹300"] },
    { value: 600, label: ["₹600"] },
    { value: 900, label: ["₹900"] },

  ]

  const [price, setPrice] = useState([100, 300]);
  const updateprice = (e, item) => {
    setPrice(item);
  }


  //select value
  const [selectValue, setselectValue] = useState(0)
  const updateValue = (e) => {
    setselectValue(e.target.value);
    // console.log(e.target.value);
  }

  //list
  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };


  //Table
  function createData(name, price, fat, cal) {
    return { name, price, fat, cal }
  }

  const rows = [
    createData("Panner", "₹50", "5g", 0.2),
    createData('Ice cream sandwich', "₹237", 9.0, 37, 4.3),
    createData('Eclair', "₹262", 16.0, 24, 6.0),
    createData('Cupcake', "₹305", 3.7, 67, 4.3),
    createData('Gingerbread', "₹356", 16.0, 49, 3.9),
  ]
  return (
    <>

      {/* <Button color={color} size="small" startIcon={<Delete />} variant="outlined" onClick={() => setColor("secondary")}>Click Here</Button> */}
      <Button color={color} size="small" startIcon={<Delete />} variant="outlined" onClick={() => {color = "secondary"}}>Click Here</Button>

      <ButtonGroup size="small" variant="contained" orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>


      <Checkbox onClick={() => { console.log("working") }} value="a" onChange={(e) => { console.log((e.target.value)) }} />
      <Checkbox onClick={() => { console.log("working") }} value="b" onChange={(e) => { console.log((e.target.value)) }} />
      <Checkbox onClick={() => { console.log("working") }} value="c" onChange={(e) => { console.log((e.target.value)) }} />


      <Checkbox icon={<Favorite />} color='secondary' checkedIcon={<Favorite />}></Checkbox>

      <p>Radio Button</p>
      <p>Male
        <Radio value={"Male"} onChange={radiobtn} checked={radio === "Male"} />
      </p>

      <p>Female
        <Radio value={"Female"} onChange={radiobtn} checked={radio === "Female"} />
      </p>

      <p>Other
        <Radio value={"other"} onChange={radiobtn} checked={radio === "other"} />
      </p>

      <p>Slider</p>
      {/*Slider */}
      <div style={{ width: "100px", height: "100px", margin: "55px" }}>
        <Slider color='secondary'
          defaultValue={30}
          // step={35}
          marks={mark}
          valueLabelDisplay="auto"
          orientation='vertical'
        />
      </div>

      <p>Volume Slider</p>
      <div style={{ width: "100px" }}>
        <Slider
          valueLabelDisplay='auto'
          marks={volume}
          defaultValue={30}
          size="small"
        />
        {/* <VolumeMute/> */}
      </div>

      <p>Range Slider</p>
      <p>Select Price</p>
      <div style={{ width: "200px", margin: "25px" }}>
        <Slider
          valueLabelDisplay="auto"
          min={100}
          max={900}
          value={price}
          marks={prices}
          onChange={updateprice}
          size="small"
        />
      </div>
      <p>Select</p>
      <div>
        <Select size='small' value={selectValue} onChange={updateValue}  >
          <MenuItem value={0}>Select</MenuItem>
          <MenuItem value={1}>React</MenuItem>
          <MenuItem value={2}>Node</MenuItem>
          <MenuItem value={3}>MongoDb</MenuItem>
          <MenuItem value={4}>Expres</MenuItem>
          <MenuItem value={5}>Java</MenuItem>
          <MenuItem value={6}>Php</MenuItem>
        </Select>
      </div>

      <div style={{ margin: "25px" }}>
        <TextField
          color='secondary'
          size='small'
          label="Enter Your Name"
          variant="standard"
          type="text"
        />
      </div>



      <Switch
        color='secondary'
        size='small'
      />

      <Box>
        <h1>Hello World</h1>
      </Box>

      <Container maxWidth="md" style={{ color: "red", backgroundColor: "blue" }}>
        <h1>Hello World</h1>
      </Container>




      <p>Make a List</p>
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemAvatar>
            <Send />
          </ListItemAvatar>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button >
          <ListItemText primary="Drafts" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>

      <p>Table</p>

      <TableContainer>
        <Table sx={{ width: "350px", bgcolor: "#aaa" }}>
          <TableHead>
            <TableRow >
              <TableCell sx={{ color: "#fff" }}>Item</TableCell>
              <TableCell sx={{ color: "#fff" }} align='right'>Price</TableCell>
              <TableCell sx={{ color: "#fff" }} align='right'>Fat</TableCell>
              <TableCell sx={{ color: "#fff" }} align='right'>Cal</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.cal}</TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>

      <p>Tool-Tip</p>
      <Tooltip title="Delete" placement="top-end">
        <Button>
          <Delete />
        </Button>
      </Tooltip>

      <p>Typography</p>

      {/* <Typography variant='body1' className={classes.homePage}>This Is Material Ui</Typography> */}

    </>
  )
} 