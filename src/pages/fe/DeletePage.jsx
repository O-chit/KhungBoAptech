import { useNavigate, useParams } from 'react-router-dom'
import sharedData from './../../configs/SharedData'

export default function DeletePage() {
    const badgeId = Number(useParams().badgeId)
    const navigate = useNavigate()
    const badges = sharedData.badges
    const badge = badges.find(b => b.id === badgeId)

    const deleteBtn = () => {
        const newBadges = sharedData.badges.filter(b => b.id !== badgeId)
        sharedData.badges = newBadges
        navigate('/')
    }

    return (
        <div className='delete-div'>
            <h1>Delete badge</h1>
            <p><b>ID:</b> {badgeId}</p>
            <p><b>Name:</b> {badge.name}</p>
            <p><b>Description:</b> {badge.description}</p>
            <p><b>Icon: </b>{badge.icon_url}</p>
            <p><b>Badge type: </b>{badge.badge_type}</p>
            <button onClick={deleteBtn}>Delete</button>
            <button onClick={() => navigate('/')}>Cancel</button>
        </div>
    )
}