import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EditRoadIcon from '@mui/icons-material/EditRoad';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import NumbersIcon from '@mui/icons-material/Numbers';
import {
  Box, Checkbox, Grid, Typography
} from '@mui/material';
import { useRef } from 'react';
import CountrySelect from '../Common/CountrySelect';
import StateSelect from '../Common/StateSelect';
import InputField from '../User/Common/InputField';

export default function ShippingDetail({ errors, handleChange }) {
  const fullNameRef = useRef();
  const emailRef = useRef();

  return (

    <Box>
      <Typography variant="h5">
        Shipping Detail
      </Typography>
      <Box height="1rem" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12}>
          <InputField
            inputRef={fullNameRef}
            name="firstname"
            label="Company/Personal Name"
            icon={<DriveFileRenameOutlineIcon />}
            placeholder="First Name"
            handleChange={handleChange}
            errorMsg={errors?.fullName}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <InputField
            inputRef={fullNameRef}
            name="lastName"
            label="Street Address"
            icon={<EditRoadIcon />}
            placeholder="15205 North Kierland Blvd. Suite 100"
            handleChange={handleChange}
            errorMsg={errors?.fullName}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputField
            inputRef={emailRef}
            name="email"
            label="City"
            icon={<LocationCityIcon />}
            placeholder="Scottsdale"
            handleChange={handleChange}
            errorMsg={errors?.email}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputField
            inputRef={emailRef}
            name="85254"
            label="Zip/Postal Code"
            icon={<NumbersIcon />}
            placeholder="+45 00 00 00 00"
            handleChange={handleChange}
            errorMsg={errors?.email}
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <CountrySelect />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <StateSelect />
        </Grid>

      </Grid>
      <Box display="flex" alignItems="center" py="0.5rem">
        <Checkbox defaultChecked />
        <Typography>Ship to a different address?</Typography>
      </Box>
    </Box>

  );
}
