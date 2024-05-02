
import React, { useContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from "react-bootstrap";
import { TypingDataContext } from "./TypeFeedAreaDisplay";
import { getColouredSpan } from "../functions/HelperFunction";

const ToTypeDisplay = () => {

  const typingData = useContext(TypingDataContext);

  var spanElementOnlyArray: any[] = [];

  const getToTypeDisplay = () => {

    for (let i = 0; i < typingData.typedSoFar.length; i++) {
      if (typingData.typedSoFar.charAt(i) === typingData.toType.charAt(i)) {
        spanElementOnlyArray.push(getColouredSpan(typingData.toType.charAt(i), 'green', i));
      } else {
        spanElementOnlyArray.push(getColouredSpan(typingData.toType.charAt(i), 'red', i));
      }
    }
    spanElementOnlyArray.push(getColouredSpan(typingData.toType.substring(typingData.typedSoFar.length, typingData.toType.length), 'black', 'myUniqueKey'));

    return (
      <div className="scrollCss" key='scrollPane' style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
      {spanElementOnlyArray}
    </div>
    );
  }

  ///<div className="anyClass" style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
 // <p>Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there Hello there <span>Bell</span><span>ello there</span> </p>
//</div>

//<>
//{<Form.Control as="textarea" placeholder="Leave a comment here" value={typingData.toType.toString()} disabled/>}
//</>

  return (
    <>
        {getToTypeDisplay()}
    </>
  );
}

export default ToTypeDisplay