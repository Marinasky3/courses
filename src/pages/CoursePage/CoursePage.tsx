import React, { useState, useEffect } from 'react'
import styles from './CoursePage.module.scss'
import { apiGetCourse } from '../../api/api'
import { ICourse, IPage } from '../../Interfaces/Interfaces'
import { Loader } from '../../components/loader/loader'
import { WidthLimiter } from '../../components/WidthLimiter/WidthLimiter'
import { TableRowForTopics } from '../../components/tableRowForTopics/TableRowForTopics'
import TextField from '@mui/material/TextField'
import { Header } from '../../components/header/header'
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha'

export const CoursePage: React.FC<IPage> = ({ setIsLogin, isLogin }) => {
  const [course, setCourse] = useState<ICourse | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [sortDirection, setSortDirection] = useState<boolean>(true)
  const [filterValue, setFilterValue] = useState<string>('')

  const queryParams: URLSearchParams = new URLSearchParams(
    window.location.search
  )
  const courseId: string | null = queryParams.get('courseId')

  useEffect(() => {
    setIsLoading(true)
    if (courseId) {
      apiGetCourse(+courseId).then(course => {
        setCourse(course)
        setIsLoading(false)
      })
    }
  }, [])

  const filterByName = (value: string) => {
    setFilterValue(value)
  }

  const sortByName = () => {
    setCourse(state => {
      state?.topics?.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase()

        if (fa < fb) {
          return sortDirection === true ? -1 : 1
        }
        if (fa > fb) {
          return sortDirection === true ? 1 : -1
        }
        return 0
      })
      return state
    })
    setSortDirection(state => !state)
  }

  const sortByDate = () => {
    setCourse(state => {
      state?.topics?.sort((a, b) => {
        let fa = new Date(Date.parse(a.date)),
          fb = new Date(Date.parse(b.date))

        if (fa < fb) {
          return sortDirection === true ? -1 : 1
        }
        if (fa > fb) {
          return sortDirection === true ? 1 : -1
        }
        return 0
      })
      return state
    })
    setSortDirection(state => !state)
  }

  return (
    <WidthLimiter>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header setIsLogin={setIsLogin} isLogin={isLogin} />
          <div className={styles.contentWrapper}>
            <div className={styles.header}>Course: {course?.name}</div>
            <div className={styles.generalInfoWrapper}>
              <div
                style={{ background: `url(${course?.image}) 50% no-repeat` }}
                className={styles.imageWrapper}
              />
              <div className={styles.generalInfo}>
                {course?.description} <br />
                <div className={styles.topics}>Topics: </div>
                {course?.topics?.map(topic => (
                  <span> {topic.name}; </span>
                ))}
              </div>
            </div>

            <div className={styles.courseInfoWrapper}>
              <div className={styles.filterWrapper}>
                <span>Filter By Topic Name</span>
                <TextField
                  id="outlined-basic"
                  label="Add to filter"
                  variant="outlined"
                  value={filterValue}
                  onChange={e => filterByName(e.target.value)}
                  sx={{ m: 1, width: '45ch' }}
                />
              </div>

              <div className={styles.tableHeader}>
                <div onClick={sortByName} className={styles.button}>
                  Name
                  <SortByAlphaIcon fontSize="small" />
                </div>
                <div className="">Status</div>
                <div onClick={sortByDate} className={styles.button}>
                  Date
                  <SortByAlphaIcon fontSize="small" />
                </div>
                <div className="">Description</div>
                <div className="">Your Notes</div>
                <div className=""></div>
              </div>

              {course?.topics
                ?.filter(topic =>
                  topic.name.toLowerCase().includes(filterValue.toLowerCase())
                )
                .map((topic, i) => (
                  <TableRowForTopics
                    topic={topic}
                    i={i}
                    setCourse={setCourse}
                  />
                ))}
            </div>
          </div>
        </>
      )}
    </WidthLimiter>
  )
}
