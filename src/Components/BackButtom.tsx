
import { Link } from 'react-router-dom'

function BackButtom() {
  return (
    <Link to={'/'} className='back-button'><img alt='backButtom' className='w-8' src='/src/assets/images/backButtom.png'></img></Link>
  )
}

export default BackButtom