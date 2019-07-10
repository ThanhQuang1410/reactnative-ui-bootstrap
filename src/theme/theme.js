import {Dimensions} from 'react-native'
import {styleBootstrap} from "./bootstrap";
const width = Dimensions.get('screen').width;

export function generateStyle(className) {
    let classList = normalizeData(className);
    let styles = {};
    classList.forEach(item => {
        if(width > 576 && width <= 768 ) {
            if(item.includes('md')) {
                item = item.replace('md-','');
            }
        }
        if(width > 768) {
            if(item.includes('lg')) {
                item = item.replace('lg-','');
            }
        }
        styles = {...styles, ...styleBootstrap[item]};
    });
    return styles;
}

function normalizeData(data) {
    let dataBase = data.split(' ');
    let dataWhenSplit = {};
    dataBase.forEach(item => {
        let index = item.substr(0, item.indexOf('-'));
        if(item.includes(index)) {
            if(index !== "") {
                let priority = getPriority(item);
                dataWhenSplit[index] = {...dataWhenSplit[index]};
                dataWhenSplit[index][priority] = item
            } else {
                dataWhenSplit[item] = item
            }
        }
    });
    let dataNormalize = [];
    Object.keys(dataWhenSplit).forEach(key => {
        if(typeof dataWhenSplit[key] === "object" || typeof dataWhenSplit[key] === 'function') {
            Object.keys(dataWhenSplit[key]).forEach(miniKey => {
                dataNormalize.push(dataWhenSplit[key][miniKey])
            })
        } else {
            dataNormalize.push(dataWhenSplit[key])
        }
    });
    return dataNormalize
}

function getPriority(className) {
    if (className.includes('md')) {
        return 1;
    } else if (className.includes('lg')) {
        return 2;
    }
    return 0
}