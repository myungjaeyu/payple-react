export default (values: any, returnURL: string ) : HTMLFormElement => {

    const formElement : HTMLFormElement = window.document.createElement('form')

    Object.assign(formElement, { id: 'CpayFrom', method: 'POST', action: returnURL })

    Object.keys(values).reduce((acc, cur) => {

        const inputElement = window.document.createElement('input')

        Object.assign(inputElement, { type: 'hidden', name: cur, value: values[cur] })

        acc.appendChild(inputElement)

        return acc

    }, formElement)

    return formElement

}
