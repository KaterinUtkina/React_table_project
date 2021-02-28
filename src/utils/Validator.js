export let letters = (value) => {
    if (value && /^[a-zA-Z]+$/.test(value)) {
        return undefined;
    }
    return "Field is required"
}

export let number = (value) => {
    if (value && /^[ 0-9]+$/.test(value)) {
        return undefined
    }
    return "Field is required"
}

export let phone = (value) => {
    if (value && /[\(]\d{3}[\)]\d{3}[\-]\d{4}/.test(value)) {
        return undefined
    }
    return "Field is required"
}

export let email = (value) => {

    if (value && /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(value)) {
        return undefined
    }
    return "Field is required"
}
