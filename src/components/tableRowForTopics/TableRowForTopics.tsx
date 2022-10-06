import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'
import { ITableRowForTopics } from '../../Interfaces/Interfaces'
import TextField from '@mui/material/TextField'
import styles from './TableRowForTopics.module.scss'
import { ICourse, ITopic } from '../../Interfaces/Interfaces'

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const TableRowForTopics: React.FC<ITableRowForTopics> = ({
  topic,
  i,
  setCourse,
}) => {
  const [open, setOpen] = useState<boolean>(false)
  const [topicNote, setTopicNote] = useState<string>(topic.note)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const saveNote = () => {
    setCourse((state: ICourse) => {
      const newState = state.topics?.map((topic: ITopic, index) => {
        if (index === i) topic.note = topicNote
        return topic
      })
      return { ...state, topics: newState }
    })
    handleClose()
  }

  const showNotes = () => {
    if (topic.note.length === 0) {
      return (
        <>
          <div className={styles.cell}>Add a note</div>
          <div className={styles.cell}>
            <Button
              onClick={handleOpen}
              variant="outlined"
              size="medium"
              color="primary"
            >
              Add
            </Button>
          </div>
        </>
      )
    }
    if (topic.note.length > 0) {
      return (
        <>
          <div className={styles.cell}>{topic.note.length>40 ? topic.note.substring(0, 38)+'...':  topic.note}</div>
          <div className={styles.cell}>
            <Button
              onClick={handleOpen}
              variant="outlined"
              size="medium"
              color="primary"
            >
              Edit
            </Button>
          </div>
        </>
      )
    }
  }

  const date = new Date(Date.parse(topic.date))
  const stylesForTableRow =
    i % 2 === 0
      ? `${styles.tableRow} ${styles.tableRowWithBg}`
      : styles.tableRow

  return (
    <div className={styles.tableRow} key={i}>
      <div className={styles.cell}>
        {topic.name.length > 18
          ? topic.name.substring(0, 17) + '...'
          : topic.name}
      </div>

      <div
        style={{
          color: topic.isComplete === true ? '#509e0f' : '#1a71b3',
        }}
        className={styles.cell}
      >
        {topic.isComplete ? 'Finished' : 'Upcoming'}
      </div>
      <div className={styles.cell}>
        {date.getDate()} {month[date.getMonth()]} {date.getFullYear()}
      </div>
      <div className={styles.cell}>{topic.description}</div>
      {showNotes()}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <div className={styles.modalContent}>
            <div className="">Add some notes</div>
            <TextField
              id="outlined-basic"
              label="Note"
              variant="outlined"
              value={topicNote}
              onChange={e => setTopicNote(e.target.value)}
              sx={{ m: 1, width: '25ch' }}
            />
            <div className={styles.buttonWrapper}>
              <Button
                onClick={handleClose}
                variant="outlined"
                size="medium"
                color="primary"
              >
                Exit
              </Button>
              <Button
                onClick={saveNote}
                variant="outlined"
                size="medium"
                color="primary"
              >
                Save
              </Button>
            </div>
            <></>
          </div>
        </Typography>
      </Modal>
    </div>
  )
}
