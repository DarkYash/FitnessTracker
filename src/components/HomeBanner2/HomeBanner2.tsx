import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './HomeBanner2.css'

// import required modules
import { Pagination } from 'swiper/modules';


const HomeBanner2 = () => {
    const [workouts, setWorkouts] = React.useState<any[] | null>(null)

    const getWorkouts = async () => {
        let data: any = [
            {
                type:'Chest',
                imageUrl:'https://media.istockphoto.com/id/180200014/photo/a-man-lifting-weights-on-a-bench-press.webp?a=1&b=1&s=612x612&w=0&k=20&c=UdPRVKvyzkm0jm_433_2X9gmUBw4LoKiYkBF0UepMaA=',
                durationInMin:30
            },
            {
                type:'Back',
                imageUrl:'https://media.istockphoto.com/id/610576810/photo/athlete-muscular-fitness-male-model-pulling-up-on-horizontal-bar.webp?a=1&b=1&s=612x612&w=0&k=20&c=94rkMeGkEjzDfl-uA4uf9eR4GyIYmCOYzmefiN0_djE=',
                durationInMin:30
            },
            {
                type:'Legs',
                imageUrl:'https://plus.unsplash.com/premium_photo-1667516670875-716f671a2e6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGVncyUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D',
                durationInMin:30
            },
            {
                type:'Forearms',
                imageUrl:'https://images.unsplash.com/photo-1585820114364-e6d77b1a3ca4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJtcyUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D ',
                durationInMin:30
            },
            {
                type:'Shoulders',
                imageUrl:'https://media.istockphoto.com/id/1265193456/photo/young-handsome-man-doing-exercises-in-gym-shoulder-workout-with-dumbbell-fitness-health-club.webp?a=1&b=1&s=612x612&w=0&k=20&c=S-o5uFyVQKXyw5qnNEXhHSaEd-kBETd2f2fN8PKhrJE=',
                durationInMin:30
            },
            {
                type:'Abs',
                imageUrl:'https://media.istockphoto.com/id/667467128/photo/swiss-ball-crunch.webp?a=1&b=1&s=612x612&w=0&k=20&c=6tg04X4tO7CdzDXu1TW9hh3KTlRSVqMpsddCGj4XApw=',
                durationInMin:30
            },
            {
                type:'Cardio',
                imageUrl:'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyZGlvfGVufDB8fDB8fHwwfA%3D%3D',
                durationInMin:30
            },
            {
                type:'Biceps',
                imageUrl:'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmljZXB8ZW58MHx8MHx8fDA%3D',
                durationInMin:30
            },
            {
                type:'Triceps',
                imageUrl:'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJpY2Vwc3xlbnwwfHwwfHx8MA%3D%3D',
                durationInMin:30
            }
        ]
        setWorkouts(data)
    }

    React.useEffect(() => {
        getWorkouts()
    }, [])



  return (
    <div>
        <h1 className='mainhead1'>Workouts</h1>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {
        workouts && workouts.map((item,index) =>{
            return(
                <SwiperSlide key={index} >
                    <div className='swiper-slide'
                    style={{
                        backgroundImage: `url(${item.imageUrl})`,
                    }}
                    onClick={() => {
                        window.location.href = `/workout/${item.type}`
                    }}
                    >
                        <div className='swiper-slide-content'>
                            <h2>{item.type}</h2>
                            <p>{item.durationInMin}min</p>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })
       }

      </Swiper>

    </div>
  )
}

export default HomeBanner2