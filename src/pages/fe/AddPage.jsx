import BadgeForm from './../../components/BadgeForm'

export default function AddPage() {
    return (
        <div className='add-div'>
            <h1>Add new badge</h1>
            <BadgeForm badgeId={-1} />
        </div>
    )
}