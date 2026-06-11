import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import sharedData from './../configs/SharedData'

export default function BadgeForm({ badgeId }) {
    const navigate = useNavigate()
    const badges = sharedData.badges
    const [badge, setBadge] = useState({
        name: '',
        description: '',
        icon_url: '',
        badge_type: '',
        created_at: new Date().toLocaleString(),
        updated_at: new Date().toLocaleString()
    })

    useEffect(() => {
        if (badgeId !== -1) {
            const badge = badges.find(b => b.id === badgeId)
            setBadge(badge)
        }
    }, [badgeId])

    const submitBtn = (e) => {
        e.preventDefault()
        if (badgeId === -1) {
            const newBadges = [...badges, {...badge, id: badges.length > 0 ? badges[badges.length - 1].id + 1 : 1 }]
            sharedData.badges = newBadges
        } else {
            const newBadges = badges.map(b => b.id === badgeId ? {...badge, updated_at: new Date().toLocaleString()} : b)
            sharedData.badges = newBadges
        }
        navigate('/')
    }

    return (
        <form onSubmit={submitBtn}>
            <label>Name</label><br />
            <input type="text" value={badge.name} onChange={e => setBadge({ ...badge, name: e.target.value })} required /><br />
            <label>Description</label><br />
            <input type="text" value={badge.description} onChange={e => setBadge({ ...badge, description: e.target.value })} required /><br />
            <label>Icon</label><br />
            <input type="text" value={badge.icon_url} onChange={e => setBadge({ ...badge, icon_url: e.target.value })} required /><br />
            <label>Badge type</label><br />
            <input type="text" value={badge.badge_type} onChange={e => setBadge({ ...badge, badge_type: e.target.value })} required /><br />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </form>
    )
}