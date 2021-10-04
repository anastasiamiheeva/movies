import React from 'react';
import cl from './ContentModal.module.css'

const ContentModal = ({children, visible, setVisible}) => {

  const rootClasses = [cl.page_modal]
  if(visible) {
    rootClasses.push(cl.active)
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.page_modal_content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ContentModal;