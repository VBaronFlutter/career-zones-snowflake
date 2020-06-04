// @flow
import React from 'react'

class Wordmark extends React.Component<Props> {
  render() {
      return (
          <React.Fragment>
            <style jsx>{`
              span {
                display: flex;
                align-items: flex-end;
                z-index: 9;
                position: relative;
                background: white;
            }
            h1 {
                font-weight: 100;
                margin: 0 0 0 8px;
            }
            
            svg {
                display: block;
                fill: transparent;
                stroke: #333;
                stroke-miterlimit: 10;
                stroke-width: 40;
                min-width: 32px;
            }

            .init {
                opacity: 0;
                stroke: #f38c2f;
                stroke-dasharray: 1000;
                animation: init 800ms linear forwards;
                animation-delay: 1000ms;
            }

            path {
                opacity: 0;
                animation: bg 600ms linear forwards;
                animation-delay: 1200ms;
            }

            .bg {
                stroke: #f38c2f;
                stroke-dasharray: 134 6 50 6 30 6 100 6 3000;
            }

            .seg-one {
                stroke: #5c5aa5;
                stroke-dasharray:  0 232 100 2000;
            }

            .seg-two {
                stroke: #cecfd0;
                stroke-dasharray:  0 196 30 2000;
            }

            .seg-three {
                stroke: #6ec4b3;
                stroke-dasharray:  0 140 50 2000;
            }

            @keyframes init {
                0% { stroke-dashoffset: 800; opacity: 1; }
                50% { stroke-dashoffset: 0; }
                99% { opacity: 1;}
                100% { opacity: 0; }
            }

            @keyframes bg {
                from { stroke-dashoffset: 800; opacity: 0; }
                to { stroke-dashoffset: 0; opacity: 1; }
            }
            `}</style>

              <span>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="data-shed"
                      viewBox="0 0 200 280"
                  >
                      <path d="M178 175.4c-2.1-41.6-36.5-74.8-78.7-74.8-43.5 0-78.8 35.3-78.8 78.8s35.3 78.8 78.8 78.8 78.8-35.3 78.8-78.8l1.3-158.1" className="init" />
                      <path d="M178 175.4c-2.1-41.6-36.5-74.8-78.7-74.8-43.5 0-78.8 35.3-78.8 78.8s35.3 78.8 78.8 78.8 78.8-35.3 78.8-78.8l1.3-158.1" className="bg" />
                      <path d="M178 175.4c-2.1-41.6-36.5-74.8-78.7-74.8-43.5 0-78.8 35.3-78.8 78.8s35.3 78.8 78.8 78.8 78.8-35.3 78.8-78.8l1.3-158.1" className="seg-one" />
                      <path d="M178 175.4c-2.1-41.6-36.5-74.8-78.7-74.8-43.5 0-78.8 35.3-78.8 78.8s35.3 78.8 78.8 78.8 78.8-35.3 78.8-78.8l1.3-158.1" className="seg-two" />
                      <path d="M178 175.4c-2.1-41.6-36.5-74.8-78.7-74.8-43.5 0-78.8 35.3-78.8 78.8s35.3 78.8 78.8 78.8 78.8-35.3 78.8-78.8l1.3-158.1" className="seg-three" />
                  </svg>
                  <h1>TheDataShed</h1>
              </span>

          </React.Fragment>
      );
  }
}

export default Wordmark