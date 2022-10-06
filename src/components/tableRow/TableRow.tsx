import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { ITableRow } from '../../Interfaces/Interfaces'
import styles from './TableRow.module.scss'



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
  

export const TableRow: React.FC<ITableRow> = ({course, i}) => {
    const date = new Date(Date.parse(course.date))
              const stylesForTableRow =
                i % 2 === 0
                  ? `${styles.tableRow} ${styles.tableRowWithBg}`
                  : styles.tableRow
              return (
                <div className={stylesForTableRow} key={i}>
                  <div className={styles.cell}>
                    {course.name.length > 18
                      ? course.name.substring(0, 17) + '...'
                      : course.name}
                  </div>
                  <div
                    style={{
                      color: course.isComplete === true ? '#509e0f' : '#1a71b3',
                    }}
                    className={styles.cell}
                  >
                    {course.isComplete ? 'Finished' : 'Upcoming'}
                  </div>
                  <div className={styles.cell}>
                    {date.getDate()} {month[date.getMonth()]}{' '}
                    {date.getFullYear()}
                  </div>
                  <div className={styles.cellWithDescription}>
                    {course.description.length > 110
                      ? course.description.substring(0, 107) + '...'
                      : course.description}
                  </div>
                  <div className={styles.cell}>
                    <Link
                      to={`/course/${course.name}?courseId=${course.courseId}`}
                      className={styles.courseLink}
                    >
                      <Button variant="outlined" size="medium" color="primary">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              )
}