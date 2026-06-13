import Form from './../../components/Form'

export default function AddPage() {
    return (
        <div className='add-div'>
            <h1>Add new badge</h1>
            <Form badgeId={-1} />
        </div>
    )
}