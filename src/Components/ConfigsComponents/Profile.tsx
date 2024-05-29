
import BackButtom from '../BackButtom'
import { Link } from 'react-router-dom'

function Profile() {

  return (
    <section id='profile' className='h-full flex flex-col justify-between ' style={{position:'relative'}}>
        <BackButtom></BackButtom>
        <div id='profile-info' className='h-5/6 mt-4 px-4 flex flex-col items-center justify-end gap-8'>
            <div id='profile-info-img' className='w-full h-2/6 flex justify-center items-center'>
                <img className="profile-image py-1 w-1/3" alt="profilepic" src='/src/assets/images/profile.png'></img>
            </div>
            <div id='profile-info-text' className='profile-status h-4/6 w-full p-2 flex flex-col justify-evenly text-2xl'>
                <h2>Pontos atuais:</h2>
                <h2>Tarefas completas</h2>
                <h2>Recompensas resgatadas</h2>
            </div>
        </div>
        <Link className="button-alike w-8/12 mx-auto text-2xl mb-4 h-16 flex items-center justify-center" to={'/customizar'}>Customizar </Link>
        
    </section>
  )
}

export default Profile