'use client'
import { duration } from '@mui/material'
import React from 'react'
import'./workoutPage.css'

const page = () => {

    const [workouts, setWorkouts] = React.useState<any>(null)

    const getworkout= async() => {
        let data: any={
            type:'Chest',
            imageUrl:'https://media.istockphoto.com/id/180200014/photo/a-man-lifting-weights-on-a-bench-press.webp?a=1&b=1&s=612x612&w=0&k=20&c=UdPRVKvyzkm0jm_433_2X9gmUBw4LoKiYkBF0UepMaA=',
            durationInMin:30,
            exercises:[
                {
                    exercise:'Flat Bench Press',
                    videoUrl:'https://gymvisual.com/img/p/1/7/5/5/2/17552.gif',
                    sets:3,
                    reps:12,
                    rest:60,
                    description:'A compound exercise that targets the chest, shoulders, and triceps.'
                },
                
                {
                    exercise:'Incline Bench Press',
                    videoUrl:'https://gymvisual.com/img/p/4/7/7/8/4778.gif',
                    sets:3,
                    reps:12,
                    rest:60,
                    description:'A compound exercise that targets the Upper chest, shoulders.'
                },
                
                {
                    exercise:'Incline Dumbell Press',
                    videoUrl:'https://gymvisual.com/img/p/2/0/8/2/3/20823.gif',
                    sets:3,
                    reps:12,
                    rest:60,
                    description:'A compound exercise that targets the Upper chest, shoulders.'
                },
                
                {
                    exercise:'Cable Cross/Fly',
                    videoUrl:'https://gymvisual.com/img/p/2/5/6/3/0/25630.gif',
                    sets:3,
                    reps:12,
                    rest:60,
                    description:'An exercise that targets the lower chest fibers.'
                }
                
            ]
        }

        setWorkouts(data)
    }

    React.useEffect(() => {
        getworkout()
    },[])

  return (
    <div className='workout'>
        <h1 className='mainhead1'>{workouts?.type} Day</h1>
        <div className='workout_exercises'>
            {
                workouts?.exercises.map((item:any,index:number) => {
                    return(
                        <div className={
                            index % 2 === 0 ? 'workout_exercise' : 'workout_exercise workout_exercise--reverse'
                        }>
                            <h3>{index+1}</h3>
                            <div className='workout_exercise_image'>
                                <img src={item.videoUrl} alt=""/>
                            </div>
                            <div className='workout_exercise_content'>
                                <h2>{item.exercise}</h2>
                                <span>{item.sets} sets X {item.reps} reps</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default page