import { TextField } from '@mui/material';
import * as React from 'react'

var timeStart: number = 0;
var timeEnd: number = 0;

function check(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, textToType: string) {
  var date: Date = new Date;
  if (e.target.value.length == 1) {
    console.log("ran");
    timeStart = date.getTime();
  }
  if (e.target.value == textToType) {
    console.log('Change sentence and end timer');
    // write your functionality here
    timeEnd = date.getTime();
    console.log((timeEnd - timeStart)/1000);
  }
}

export default function TypeArea({ textToType }: { textToType: string}) {
    return (<TextField 
                id="download-text-field" 
                label="Outlined" 
                variant="outlined"
                onChange= {(e) => check(e, textToType)}/>);
}