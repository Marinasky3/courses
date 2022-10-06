import React, { useEffect } from 'react'
import { Header } from '../../components/header/header'
import { IAuthPage } from '../../Interfaces/Interfaces'
import styles from './AuthPage.module.scss'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import programming from '../../images/programming.webp'
import { Link } from 'react-router-dom'

export const AuthPage: React.FC<IAuthPage> = ({ isLogin, setIsLogin }) => {
    useEffect(()=>{
        setIsLogin(false)
    }, [])
  return (
    <>
      <div className="">
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
      <div className={styles.authWrapper}>
          
      

      <Card sx={{ maxWidth: 545 }}>
        <CardMedia
          component="img"
          height="240"
          image={programming}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Login to see the courses you are assigned to
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Our wed-service provide you an ability to add, manage and analize your courses
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">OK, Thanks</Button>
          <Link to={'/'}>
            <Button onClick={()=>setIsLogin(true)} variant="contained" color="primary">Login</Button>
          </Link>
        </CardActions>
      </Card>
      </div>
    </>
  )
}
