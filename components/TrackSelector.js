// @flow

import React from 'react'
import { trackIds, tracks, categoryColorScale } from '../constants'
import type { MilestoneMap, TrackId } from '../constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void
}

class TrackSelector extends React.Component<Props> {
  render() {
    return (
      <React.Fragment>
        <style jsx>{`
          .track-selector-value {
            line-height: 50px;
            width: 100%;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }

          p {
            font-size: 12px;
            padding: 0 0 0 4px;
            margin: 0;
          }

          article {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 4px;
            text-align: center;
          }

          div {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            cursor: pointer;
          }

          div:hover span {
            border: 4px solid red;
          }
        `}</style>

        <article>
            {trackIds.map(trackId => (
              <div key={trackId} onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                <span key={trackId} className="track-selector-value"
                      style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': categoryColorScale(tracks[trackId].category)), background: categoryColorScale(tracks[trackId].category)}}
                      onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                    {this.props.milestoneByTrack[trackId]}
                </span>
                <p className="track-selector-label">{tracks[trackId].displayName}</p>
              </div>
            ))}

        </article>

      </React.Fragment>
    )
  }
}

export default TrackSelector