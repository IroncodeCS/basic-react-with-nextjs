import React from 'react'
import Link from 'next/link'

export default () => (
    <div>
        <h1>Hello !! </h1>
        <h2> Hi!! </h2>
        <Link href='/page2' > <a>Page 2</a> </Link>
        <Link href='/page3' > <a>Page 3</a> </Link>
    </div>
)