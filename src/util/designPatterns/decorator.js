function myComponentFactory() {
    let value = ''

    return {
        setValue(val) {
            value = val
        },
        printValue(pval) {
            console.log(`value is ${pval + value}`)
        }
    }
}

function toLowerDecorator(inner) {
    return {
        setValue: inner.setValue,
        printValue: pval => inner.printValue(pval.toLowerCase())
    }
}

// test code
// const component = toLowerDecorator(myComponentFactory())
// component.setValue('222')
// component.printValue('SSSSuu')


