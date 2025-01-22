import React from 'react';

type DialogBoxProps = {
    setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  };

const DialogBox: React.FC<DialogBoxProps> = ({ setShowDialog }) => (
    <div className="dialog-overlay">
      <div className="dialog-box">
        <p>Please provide an answer before proceeding.</p>
        <button className="dialog-btn" onClick={() => setShowDialog(false)}>
          OK
        </button>
      </div>
    </div>
  );

  export default DialogBox;