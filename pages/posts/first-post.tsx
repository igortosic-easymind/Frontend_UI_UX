import React from 'react'
import Link from 'next/link';

function firstPost() {
    return (
        <div>
            <h1>Welcome hello from my</h1>
            <h4><Link href="/"><a>Back to home page</a></Link></h4>
        </div>
    )
}

export default firstPost
