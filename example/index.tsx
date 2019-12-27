import React from 'react'
import ReactDOM from 'react-dom'
import Payple from '../src/index'

const key = {
    cst_id: 'test',
    cust_key: 'abcd1234567890',
    auth_url: 'https://testcpay.payple.kr/php/auth.php'
}

const form = {
    name: '하얀눈',
    amount: 11000,
    buyer_no: `payple_${ new Date().getMilliseconds() }`,
    buyer_email: 'example@example.com',
    buyer_name : '김테스트',
    buyer_tel: '01012345678'
}

const data = {
    PCD_CST_ID: key.cst_id,
    PCD_CUST_KEY: key.cust_key,
    PCD_AUTH_URL: key.auth_url,
    PCD_CPAY_VER: '1.0.1',
    PCD_PAY_TYPE: 'transfer',
    PCD_PAY_WORK: 'PAY',
    PCD_PAY_GOODS: form.name,
    PCD_PAY_TOTAL: form.amount,
    PCD_PAYER_NO: form.buyer_no,
    PCD_PAY_ISTAX: 'N',
    PCD_PAYER_EMAIL: form.buyer_email,
    PCD_PAYER_NAME: form.buyer_name,
    PCD_PAYER_HP: form.buyer_tel
}

const root = document.createElement('div')

document.body.append(root)

ReactDOM.render(<Payple data={ data } onCallback= { (e) => console.log(e) }>
    <button>
        test
    </button>
</Payple>, root)