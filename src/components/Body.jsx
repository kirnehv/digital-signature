import React, {useState, useEffect, useRef} from 'react'
import '../index.css'
import Circles from './Circles'
import { Dropdown, Form, Button, Alert } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import SignaturePad from "react-signature-canvas";

export default function Body(props) {

  const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url
  const [value, setValue] = useState('');

  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();
  const save = async (e) => {
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  }

  return (
    <div className='body'>
      <div className='overlay'></div>
      <div className='title'>Digital Signature Generator</div>
      <div className='header'>Sign and save your transparent signature</div>
      <svg className='wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path backgroundImage='' fill="#5D3FD3" fill-opacity="1" d="M0,192L48,170.7C96,149,192,107,288,101.3C384,96,480,128,576,160C672,192,768,224,864,197.3C960,171,1056,85,1152,74.7C1248,64,1344,128,1392,160L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <form className='form'>
        <div className='userInput'>
            <Popup
              modal
              trigger={<button className='signaturePad' type="button">Signature Here</button>}
              closeOnDocumentClick={false}
            >
              {close => (
                <>
                  <SignaturePad
                    ref={sigCanvas}
                    canvasProps={{
                      className: "signatureCanvas"
                    }}
                    dotSize={1}
                    velocityFilterWeight={0.5}
                    minWidth={0.7}
                    maxWidth={2}
                  />
                  {/* Button to trigger save canvas image */}
                  <button onClick={() => { save(); close(); }}>Save</button>
                  <button onClick={clear}>Clear</button>
                  <button onClick={close}>Close</button>
                </>
              )}
            </Popup>

            {imageURL ? (
              <img
                src={imageURL}
                alt="my signature"
                style={{
                  display: "block",
                  margin: "0 auto",
                  borderBottom: "1px dotted grey",
                  gridColumn: "1 / 3",
                  margin: "auto",
                  marginTop: "50px",
                  maxWidth: "270px",
                  maxHeight: "100px"
                }}
                className='img'
              />
            ) : null}
          </div>
      </form>
    </div>
  );
}
