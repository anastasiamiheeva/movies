import React from 'react';
import cl from './ContentModal.module.css'

const ContentModal = ({children, visible, setVisible}) => {

  const rootClasses = [cl.page_modal]
  if(visible) {
    rootClasses.push(cl.active)
  }
  return (
    <div className={rootClasses.join(' ')}>
      <div className={cl.page_modal_content}>
        {children}
      </div>
    </div>
  );
};

export default ContentModal;