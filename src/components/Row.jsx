import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Row({ badge }) {
    const navigate = useNavigate()

    return (
        <tr>
            <td>{badge.id}</td>
            <td>{badge.name}</td>
            <td>{badge.description}</td>
            <td>{badge.icon_url}</td>
            <td>{badge.badge_type}</td>
            <td>{badge.created_at}</td>
            <td>{badge.updated_at}</td>
            <td><button onClick={() => navigate(`/edit/${badge.id}`)}>Edit</button></td>
            <td><button onClick={() => navigate(`/delete/${badge.id}`)}>Delete</button></td>
        </tr>
    )
}