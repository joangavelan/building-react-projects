import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard' 
import './Color-Pallete.css'

const colors = [
  {id: 1, hex: '#9253a1', rgb: '(146,83,161)'},
  {id: 2, hex: '#f063a4', rgb: '(240,99,164)'},
  {id: 3, hex: '#2dc5f4', rgb: '(45,197,244)'},
  {id: 4, hex: '#fcee21', rgb: '(252,238,33)'},
  {id: 5, hex: '#f16164', rgb: '(241,97,100)'},
  {id: 6, hex: '#70327e', rgb: '(112,50,126)'},
  {id: 7, hex: '#a42963', rgb: '(164,41,99)'},
  {id: 8, hex: '#0b6a88', rgb: '(11,106,136)'},
  {id: 9, hex: '#f89e4f', rgb: '(248,158,79)'},
  {id: 10, hex: '#ec015a', rgb: '(236,1,90)'},
];

const Color = ({color, selectedColor, setColor, handleCopy}) => {
  const styles = {
    sqr: {
      background: color.hex,
      border: color === selectedColor ? '4px solid #56085e' : ''
    },
    text: {
      color: color === selectedColor ? 'white' : color.hex
    }
  }

  return (
    <div className='color'>
      <div style={styles.sqr} onClick={() => setColor(color)}></div>
      
      <CopyToClipboard text={color.hex} onCopy={() => handleCopy(color.hex)}>
        <p style={styles.text}>{color.hex}</p>
      </CopyToClipboard>

      <CopyToClipboard text={color.rgb} onCopy={() => handleCopy(color.rgb)}>
        <p style={styles.text}>{color.rgb}</p>
      </CopyToClipboard>    

    </div>
  );
}

const ColorPallete = () => {
  const [selectedColor, setColor] = useState({hex: '#061414'});
  const [copiedText, setCopied] = useState(null);

  const handleCopy = (text) => setCopied(text);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setCopied(null)
    }, 2500);

    return () => clearTimeout(timeOutId);
  }, [copiedText])

  return (
    <div className="container" style={{backgroundColor: selectedColor.hex}}>
      <div className="color-pallete">
        {copiedText && <p className="notification">Copied: {copiedText}</p>}
        {colors.map(color => (
          <Color 
            key={color.id}
            color={color}
            selectedColor={selectedColor}
            setColor={setColor}
            handleCopy={handleCopy}/>
        ))}
      </div>
    </div>
  )
}

export default ColorPallete