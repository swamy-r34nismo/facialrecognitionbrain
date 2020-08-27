import React from 'react';
import './ImageLInkForm.css'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
  return (
    <div>
      <p className='f3'>
        {'The Magic Brain will detect faces in your pictures. Give it a try!'}    
      </p>
      <div className='center'>
        <div className='center form pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70 center' placeholder='Paste Your Image URL Here' type='text' onChange={onInputChange}/>
          <button className='w-30 grow f4 link ph3 pv2 dib black bg-light-blue' onClick={onSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;