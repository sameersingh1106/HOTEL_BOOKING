import { assets } from '@/assets/assets'
import { rating } from '@/assets/assets'


const starRating = () => {
  return (
    <>
    {Array(5).fill(0).map((_, index) => (
        <img src={rating > index ? assets.starIconFilled : assets.starIconOutlined} alt={`star-icon`} className='w-4.5 h-4.5' />
    ))}
      
    </>
  )
}

export default starRating
