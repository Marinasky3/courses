import React, { useEffect, useState } from 'react'
import { ICourse, IPage } from '../../Interfaces/Interfaces'
import { WidthLimiter } from '../../components/WidthLimiter/WidthLimiter'
import styles from './HomePage.module.scss'
import { apiGetCourses } from '../../api/api'
import { Loader } from '../../components/loader/loader'
import { TableRow } from '../../components/tableRow/TableRow'
import { Header } from '../../components/header/header'
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';


export const HomePage: React.FC<IPage> = ({setIsLogin, isLogin}) => {
  const [coursesList, setCoursesList] = useState<ICourse[]>([
    {
      name: '',
      courseId: 0,
      date: '',
      description: '',
      isComplete: true,
      image: '',
      topics: null,
    },
  ])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [sortNameDirection, setSortNameDirection] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)
    apiGetCourses.then(courses => {
      setCoursesList(courses)
      setIsLoading(false)
    })
  }, [])

  const sortByName = () => {
    setCoursesList(state => {
      state.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase()

        if (fa < fb) {
          return sortNameDirection === true ? -1 : 1
        }
        if (fa > fb) {
          return sortNameDirection === true ? 1 : -1
        }
        return 0
      })
      return [...state]
    })
    setSortNameDirection(state => !state)
  }

  const sortByDate = () => {
    setCoursesList(state => {
      state.sort((a, b) => {
        let fa = new Date(Date.parse(a.date)),
          fb = new Date(Date.parse(b.date))

        if (fa < fb) {
          return sortNameDirection === true ? -1 : 1
        }
        if (fa > fb) {
          return sortNameDirection === true ? 1 : -1
        }
        return 0
      })
      return [...state]
    })
    setSortNameDirection(state => !state)
  }

  return (
    <WidthLimiter>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <Header setIsLogin={setIsLogin} isLogin={isLogin}></Header>
          <div className="">
            <div className={styles.pageHeader}>Your Courses</div>
          </div>
          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <div onClick={sortByName} className={styles.button}>
                Name
               < SortByAlphaIcon fontSize="small" />
              </div>
              <div className="">Status</div>
              <div onClick={sortByDate} className={styles.button}>
                Date of completion
                < SortByAlphaIcon fontSize="small"  />
              </div>
              <div className="">Description</div>
            </div>
            {coursesList?.map((course, i) => ( <TableRow course={course} i={i}/>)
            )}
          </div>
        </>
      )}
    </WidthLimiter>
  )
}
