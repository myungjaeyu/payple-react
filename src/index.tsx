import React, { FC, cloneElement } from 'react'

import authenticate from './authenticate'

type Data = {
    PCD_CST_ID: string,
    PCD_CUST_KEY: string,
    PCD_AUTH_URL: string,
    PCD_CPAY_VER: string,
    PCD_PAY_TYPE: string,
    PCD_PAY_WORK: string,
    PCD_PAYER_NO: string,
    PCD_AUTH_KEY?: string,
    PCD_CARD_VER?: string,
    PCD_PAYER_ID?: string,
    PCD_PAY_GOODS: string,
    PCD_RST_URL?: string,
    PCD_PAYER_NAME?: string,
    PCD_PAYER_HP?: string,
    PCD_PAYER_EMAIL?: string,
    PCD_PAY_TOTAL?: number,
    PCD_PAY_OID?: string,
    PCD_REGULER_FLAG?: string,
    PCD_PAY_YEAR?: string,
    PCD_PAY_MONTH?: string,
    PCD_TAXSAVE_FLAG?: string,
    PCD_SIMPLE_FLAG?: string,
    PCD_PAYER_AUTHTYPE?: string,
    PCD_HTTP_REFERER?: string
}

type OnCallback = (e: any) => void

type Props = {
    data: Data,
    onCallback: OnCallback,
    children: any
}

const Payple: FC<Props> = ({ data, onCallback, children }) => {

    const run = () : void => {

        const { PCD_AUTH_URL, PCD_CST_ID, PCD_CUST_KEY } = data

        authenticate(PCD_AUTH_URL, PCD_CST_ID, PCD_CUST_KEY)
            .then(({ result, cst_id, custKey, AuthKey, return_url, result_msg }) => {

                console.log(result, cst_id, custKey, AuthKey, return_url)

            })

    }

    return (
        <div>

            { cloneElement(children, { onClick: run })}

        </div>
    )

}

export default Payple