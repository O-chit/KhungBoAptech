import { useParams } from 'react-router-dom'
import BadgeForm from './../../components/BadgeForm'

export default function EditPage() {
    const badgeId = Number(useParams().badgeId)

    return (
        <div className='edit-div'>
            <h1>Edit badge</h1>
            <BadgeForm badgeId={badgeId} />
        </div>
    )
}