import React from 'react';

export interface ITopic{
    name: string,
    date: string,
    isComplete: boolean,
    description: string,
    note: string,
}
export interface ICourse{
    name: string,
    courseId: number,
    date: string,
    description: string,
    isComplete: boolean,
    image?: any,
    topics: Array<ITopic> | null

}  

export interface ITableRow{
    course: ICourse,
    i: number
}
export interface ITableRowForTopics{
    topic: ITopic,
    i: number,
    setCourse: any 
  }
export interface IAuthPage{
    setIsLogin: any
    isLogin: boolean
}
export interface IPage{
    setIsLogin: any,
    isLogin: boolean
}    