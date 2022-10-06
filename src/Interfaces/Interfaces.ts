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
    setCourse: any //React.Dispatch<ICourse | undefined>
  }
export interface IAuthPage{
    setIsLogin: React.Dispatch<boolean>
    isLogin: boolean
}
export interface IPage{
    setIsLogin: any,
    isLogin: boolean
}    