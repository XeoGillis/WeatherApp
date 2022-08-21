import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group';
// Fontawsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faTriangleExclamation, faCircleExclamation, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
// Scss
import './notification.scss';


export default function Notification(payload: { active: boolean, message: string, notificationType: number, cancelable: boolean, closeNotification: CallableFunction }) {
  // Types 0 = red, 1 = yellow, 2 = green
  const ref = useRef(null);

  const typeMap = new Map()
    .set(0, ['-error', faTriangleExclamation])
    .set(1, ['-warning', faCircleExclamation])
    .set(2, ['-success', faCircleCheck]);

  return (
    <CSSTransition in={payload.active} timeout={200} classNames="note" nodeRef={ref} unmountOnExit>
      <div className={`notification ${typeMap.get(payload.notificationType)[0]} ${payload.cancelable ? '-cancelable' : ''}`} ref={ref}>
        <div className="content">
          {!payload.cancelable && <div className='timer'></div>}
          {payload.cancelable &&
            <div className="exit-container">
              <div className='exit-button' onClick={() => payload.closeNotification()}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </div>
            </div>
          }
          <div className="icon-section"><FontAwesomeIcon icon={typeMap.get(payload.notificationType)[1]} /></div>
          <div className={`message ${payload.cancelable ? '-no-timer' : ''}`}> {payload.message}</div>
        </div>
      </div>
    </CSSTransition >
  )
}