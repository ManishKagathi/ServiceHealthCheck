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
    if (failedRequestCount === -1) {
        return `${componentType}-gray-600`
    }
    if (failedRequestCount === 0) {
        return `${componentType}-green-600`
    }
    if (failedRequestCount <= ((serviceUrls.length) / 2)) {
        return `${componentType}-orange-600`
    }
    if (failedRequestCount > ((serviceUrls.length) / 2)) {
        return `${componentType}-red-400`
    }
}

export function getApiCardColor(ServiceStatus, componentType) {
    if (ServiceStatus === 'up') {
        return `${componentType}-green-600`
    } else {
        return `${componentType}-red-600`
    }
}
