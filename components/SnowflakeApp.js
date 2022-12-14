// @flow

import TrackSelector from '../components/TrackSelector'
import NightingaleChart from '../components/NightingaleChart'
import KeyboardListener from '../components/KeyboardListener'
import Track from '../components/Track'
import { trackIds } from '../constants'
import { Milestone, MilestoneMap, TrackId } from '../constants'
import React from 'react'

type SnowflakeAppState = {
  milestoneByTrack: MilestoneMap,
  title: string,
  focusedTrackId: TrackId,
}

const hashToState = (hash: String): ?SnowflakeAppState => {
  if (!hash) return null
  const result = defaultState()
  const hashValues = hash.split('#')[1].split(',')
  if (!hashValues) return null
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]))
  })
  if (hashValues[16]) result.name = decodeURI(hashValues[16])
  if (hashValues[17]) result.title = decodeURI(hashValues[17])
  return result
}

const coerceMilestone = (value: number): Milestone => {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch(value) {
    case 0: return 0
    case 1: return 1
    case 2: return 2
    case 3: return 3
    case 4: return 4
    case 5: return 5
    default: return 0
  }
}

const emptyState = (): SnowflakeAppState => {
  return {
    name: '',
    title: '',
    milestoneByTrack: {
      'PEOPLE': 1,
      'CULTURE': 1,
      'GAMECHANGER': 1,
      'RESULTS': 1,
      'DIRECTION': 1,
      'STRATEGICAWARENESS': 1,
      'ENGINEERING': 1,
      'PROCESS': 1
    },
    focusedTrackId: 'PEOPLE'
  }
}

const defaultState = (): SnowflakeAppState => {
  return {
    title: '',
    milestoneByTrack: {
      'PEOPLE': 1,
      'CULTURE': 1,
      'GAMECHANGER': 1,
      'RESULTS': 1,
      'DIRECTION': 1,
      'STRATEGICAWARENESS': 1,
      'ENGINEERING': 1,
      'PROCESS': 1
    },
    focusedTrackId: 'PEOPLE'
  }
}

const stateToHash = (state: SnowflakeAppState) => {
  if (!state || !state.milestoneByTrack) return null
  const values = trackIds.map(trackId => state.milestoneByTrack[trackId]).concat(encodeURI(state.title))
  return values.join(',')
}

type Props = {}

class SnowflakeApp extends React.Component<Props, SnowflakeAppState> {
  constructor(props: Props) {
    super(props)
    this.state = emptyState()
  }

  componentDidUpdate() {
    const hash = stateToHash(this.state)
    if (hash) window.location.replace(`#${hash}`)
  }

  componentDidMount() {
    const state = hashToState(window.location.hash)
    if (state) {
      this.setState(state)
    } else {
      this.setState(defaultState())
    }
  }

  render() {
    return (
      <main>
        <style jsx global>{`
          :global(body) {
            margin: 0;
            padding: 0;
            font-size: 16px;
            line-height: 24px;
            font-family: 'Catamaran', sans-serif;
            font-weight: 100;
            overflow-x: hidden;
            overflow-y: auto;
            background: $color-dark;
          }
          main {
            width: 960px;
            margin: 0 auto;
          }
          a {
            color: #888;
            text-decoration: none;
          }
          figure {
            text-align: center;
          }
          header {
            color: #888;
            display: felx;
            align-content: center;
            justify-content: space-between;
          }
          section {
            border-bottom: 2px solid #ccc;
            margin-bottom: 40px;
          }

          h3 {
            font-size: 2rem;
            line-height: 1.6;
            margin: 0;
          }

          select {
            padding: 4px 16px;
            font-size: 18px;
            margin: -10px 8px 0 8px;
            line-height: 2;
          }
        `}</style>

        <header style={{margin: '19px auto 20px'}}>
          <h1>Career Zones</h1>
        </header>

          <h3>I am an 
            <select name="role" id="pet-select">
              <option value="engineer">Engineer</option>
              <option value="po">Product Owner</option>
              <option value="scrum">Scrum Master</option>
              <option value="seit">Test Engineer</option>
          </select>
          <br />
            interested in the
            <select name="pets" id="pet-select">
              <option value="ic">Individual Contributor</option>
              <option value="people">People Manger</option>
          </select>
          <br />
           career track.
          </h3>
        <section style={{display: 'flex',alignItems: 'center'}}>
          <div>
          <TrackSelector
            milestoneByTrack={this.state.milestoneByTrack}
            focusedTrackId={this.state.focusedTrackId}
            setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)} />
        <KeyboardListener
            selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
            selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
            increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
            decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)} />
          </div>
          <div style={{flex: 0}}>
            <NightingaleChart
                milestoneByTrack={this.state.milestoneByTrack}
                focusedTrackId={this.state.focusedTrackId}
                handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
          </div>
        </section>
        <Track
            milestoneByTrack={this.state.milestoneByTrack}
            trackId={this.state.focusedTrackId}
            handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
      </main>
    )
  }

  handleTrackMilestoneChange(trackId: TrackId, milestone: Milestone) {
    //click on chart
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack[trackId] = milestone
    this.setState({ milestoneByTrack, focusedTrackId: trackId })
  }

  shiftFocusedTrack(delta: number) {
    
    let index = trackIds.indexOf(this.state.focusedTrackId)
    index = (index + delta + trackIds.length) % trackIds.length
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  setFocusedTrackId(trackId: TrackId) {
    // click on row
    let index = trackIds.indexOf(trackId)
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    console.log('sd')
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
    let milestone = prevMilestone + delta
    if (milestone < 1) milestone = 1
    if (milestone > 5) milestone = 5
    this.handleTrackMilestoneChange(this.state.focusedTrackId, ((milestone: any): Milestone))
  }
}

export default SnowflakeApp
