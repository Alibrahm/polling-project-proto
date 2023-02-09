import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import background from "../assets/10.jpg";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { bgcolor } from '@mui/system';
const isWeekend = (date) => {
    const day = date.day();

    return day === 0 || day === 6;
};

const getMuiTheme = () =>
    createTheme({
        components: {
            '.&MuiPickerStaticWrapper': {
                styleOverrides: {
                    content: {
                       bgcolor:'transparent'

                    }
                }
            },
            '.&MuiPickerStaticWrapper-content': {
                styleOverrides: {
                    backgroundColor: 'transparent'
                }
            }

        }
    });
function Datepicker() {
    const [value, setValue] = React.useState(dayjs());
    console.log("Selected date", dayjs(value).format("YYYY-MM-DD h:mm:ss"))
    return (
        <div className="" style={{   backgroundImage: "url(/10.jpg)", backgroundRepeat:'no-repeat', minHeight: '90vh' }}>
          
            <div className="grid grid-cols-2" >
                <div className="" style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', backgroundRepeat: 'no-repeat', backgroundImage: "url(/meeting.png)" }}></div>
                {/* <div style={{ '.&css-xelq0e-MuiPickerStaticWrapper-content': { bgcolor:'blue' } }}> */}
                <ThemeProvider theme={getMuiTheme()}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StaticDatePicker
                            sx={{'.&css-xelq0e-MuiPickerStaticWrapper-content':{bgcolor:'transparent'}}}
                        label=' Select Meeting schedule'
                orientation="portrait"
                openTo="day"
                value={value}
                shouldDisableDate={isWeekend}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                            renderInput={(params) => <TextField {...params} sx={{ width: '100%', bgcolor: 'yellow'  }} />}
            />
                    </LocalizationProvider> </ThemeProvider></div>
            {/* </div> */}
            </div>
    );
}
export default Datepicker;