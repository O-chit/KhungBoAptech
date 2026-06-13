import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Row from './../../components/Row'
import sharedData from './../../configs/SharedData'

export default function BadgesPage() {
    const navigate = useNavigate()

    const badges = sharedData.badges
    return (
        <div className='badges-div'>
            <h1>Badges</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Icon</th>
                        <th>Badge type</th>
                        <th>Created at</th>
                        <th>Updated at</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {badges.map(badge => (<Row key={badge.id} badge={badge} />))}
                </tbody>
            </table>
            <button onClick={() => navigate('/add')}>Add new badge</button>
        </div>
    )
}