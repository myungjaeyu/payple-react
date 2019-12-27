import React, { FC, cloneElement, useState } from 'react'

import authenticate from './authenticate'
import renderHTMLForm from './renderHTMLForm'

import Layer from './Layer'

const features = `
    width:450px,
    height:100%,
    toolbars=no,
    menubars=no,
    status=no,
    resizable=no,
    location=no
`

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

    const [flag, setFlag] = useState(false)

    const popup = (formElement: HTMLFormElement) : void => {

        const callback = ({ data: { type, data }}) => (
            onCallback(type === 'pay_result' ? data : null), 
            setFlag(false)
        )

        if (null == window.open('', formElement.target, features)) return alert(' 팝업이 차단되어 결제를 진행할 수 없습니다. \r\n 폰 설정에서 팝업차단을 풀어주세요.')

        window.document.body.appendChild(formElement)

        formElement.submit()

        setFlag(true)

        window.removeEventListener('message', callback)
        window.addEventListener('message', callback)

    }

    const run = () : void => {

        const { PCD_AUTH_URL, PCD_CST_ID, PCD_CUST_KEY } = data

        authenticate(PCD_AUTH_URL, PCD_CST_ID, PCD_CUST_KEY)
            .then(({ result, cst_id, custKey, AuthKey, return_url, result_msg }) => {

                if (result !== 'success') return alert(result_msg)

                const formElement : HTMLFormElement = renderHTMLForm(Object.assign({}, data, {
                    PCD_CST_ID: cst_id,
                    PCD_CUST_KEY: custKey,
                    PCD_AUTH_KEY: AuthKey,
                    PCD_RST_URL: '',
                    PCD_HTTP_REFERER: window.location.href
                }), return_url)

                popup(formElement)

            })

    }

    return (
        <div>

            { flag && <Layer /> }

            { cloneElement(children, { onClick: run })}

        </div>
    )

}

export default Payple