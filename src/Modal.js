import React, { Fragment } from 'react'
import classNames from 'classnames'

import './style.css'

const ModalComponent = ({ modalTheme, modalId, modalTitle, modalBody, modalCloseText, modalClose, modalConfirmText, handleModalConfirm }) => {

  let modalClass = classNames({
    'modal fade': modalTheme == 'light' || modalTheme == null,
    'modal modal-dark fade': modalTheme == 'dark'
  })

  return (
    <div id={!modalId ? "modalId" : modalId} className={modalClass} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">{!modalTitle ? "Modal title" : modalTitle}</h3>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>{!modalBody ? "Modal body" : modalBody}</p>
          </div>
          <div className="modal-footer">
            <button
              id={!modalClose ? "closeModal" : modalClose}
              type="button"
              className="btn btn-default"
              data-dismiss="modal">
                {!modalCloseText ? "Close" : modalCloseText}
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={!handleModalConfirm ? null  : (event) => handleModalConfirm(event, modalId)}>
                {!modalConfirmText ? "Confirm" : modalConfirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent