import Button from '@material-ui/core/Button'
import styles from './header.module.scss'
import { WidthLimiter } from '../WidthLimiter/WidthLimiter'
import React from 'react'
import { Link } from 'react-router-dom'

interface IHeader {
  isLogin: boolean
  setIsLogin: any
}

export const Header: React.FC<IHeader> = ({ isLogin, setIsLogin }) => {
  return (
    <div className={styles.headerWrapper}>
      <WidthLimiter>
        <div className={styles.headerContentWrapper}>
          <div className={styles.headerTitle}>Students Book</div>
          <Link to={isLogin ? '/auth' : '/'}>
            <Button
              onClick={() => {
                setIsLogin((isLogin: boolean) => !isLogin)
              }}
              variant="contained"
              color="primary"
            >
              {isLogin ? ' Log out' : 'Sing in'}
            </Button>
          </Link>
        </div>
      </WidthLimiter>
    </div>
  )
}
