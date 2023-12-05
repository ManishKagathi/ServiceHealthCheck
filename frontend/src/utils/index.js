import { services } from "./ConfigParams";

export function getServiceUrls(key) {
    const subValues = Object.values(services[key]);
    let values = [];
    subValues.forEach(item => {
        Object.values(item).forEach((val) => {
            values.push(val)
        })
    });
    return values;
}

export function getServiceCardColor(failedRequestCount, serviceUrls, componentType) {
    if (failedRequestCount === 0) {
        return `${componentType}-green-600`
    }
    if (failedRequestCount < JSON.parse(serviceUrls).length) {
        return `${componentType}-orange-400`
    }
    return `${componentType}-red-600`
}
