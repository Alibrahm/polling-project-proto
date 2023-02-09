import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange, green,blue } from '@mui/material/colors';
import {AssignmentIcon,DocumentScannerRounded,DocumentScannerSharp} from '@mui/icons-material';
const Hero = () => {
  return (

    <div className="content" style={{ marginLeft: '80px' }}>
      <h1 className='text-center flex space-evenly' style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Ubuntu', fontSize: 30, fontWeight: 600 }}>Documents</h1>
      <h4>Documents available</h4>
      <div class="flex justify-center mt-8 mx-8">
        <div class="rounded-lg shadow-xl bg-gray-50 mx-10 w-full my-auto">
          <div className='ml-12  grid grid-cols-3'>
            <div className='mt-6 flex flex-row'>
              <Avatar src="/assets/pdf.pngg" sx={{ bgcolor: deepOrange[500] }} variant="square" />
              <div className='mt-4 hover:text-slate-400'>Document 1</div>
              </div>
            <div className='mt-6 flex flex-row'>
              <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                <DocumentScannerRounded />
              </Avatar>
              <div className='mt-4 hover:text-slate-400'>Document 2</div>
            </div>
            <div className='mt-6 flex flex-row'>
              <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
                <DocumentScannerSharp />
              </Avatar>
              <div className='mt-4 hover:text-slate-400'>Document 3</div>
            </div>
            <div className='mt-6 flex flex-row'>
              <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                <DocumentScannerRounded />
              </Avatar>
              <div className='mt-4 hover:text-slate-400'>Document 4</div>
            </div>
            <div className='mt-6 flex flex-row'>
              <Avatar sx={{ bgcolor: green[800] }} variant="rounded">
                <DocumentScannerRounded />
              </Avatar>
              <div className='mt-4 hover:text-slate-400'>Document 5</div>
            </div>
            <div className='mt-6 flex flex-row'>
              <Avatar sx={{ bgcolor: green[200] }} variant="rounded">
                <DocumentScannerRounded />
              </Avatar>
              <div className='mt-4 hover:text-slate-400'>Document 6</div>
            </div>
            <div className='mt-6 flex flex-row'>
              <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                <DocumentScannerRounded />
              </Avatar>
              <div className='mt-4 hover:text-slate-400'>Document 7</div>
            </div>
            <div className='mt-6 flex flex-row'>
              <Avatar sx={{ bgcolor: blue[700] }} variant="rounded">
                <DocumentScannerRounded />
              </Avatar>
              <div className='mt-4 hover:text-slate-400'>Document 8</div>
            </div>
            <div className='mt-6 flex flex-row'>
              <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                <DocumentScannerRounded />
              </Avatar>
              <div className='mt-4 hover:text-slate-400'>Document 9</div>
            </div>
      </div>
      <div class="flex justify-center p-2">
        <button class="w-32 px-4 py-2 text-white bg-blue-500 rounded shadow-xl">Download</button>
          </div>
        </div>
        </div>
    </div>

  );
}

export default Hero;
