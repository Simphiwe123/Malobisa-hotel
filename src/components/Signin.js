import React from 'react';
//import en from "../utils/i18n";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            
            <h1>SignIn</h1>
            
          </div>
          <div className='maincont'>
          

        

          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>SignIn</span>
            </button>

          </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;