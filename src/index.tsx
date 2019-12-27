import React, { FC } from 'react'

type Props = {
    text: string
}

const Payple: FC<Props> = ({ text }) => (
    <div>
        { text }
    </div>
)

export default Payple