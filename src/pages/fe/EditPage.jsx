import { useParams } from 'react-router-dom'
import Form from './../../components/Form'

export default function EditPage() {
    const badgeId = Number(useParams().badgeId)

    return (
        <div className='edit-div'>
            <h1>Edit badge</h1>
            <Form badgeId={badgeId} />
        </div>
    )
}