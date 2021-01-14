import {Dimensions} from 'react-native'
import {styleBootstrap} from "./bootstrap";

export function generateStyle(className,customClass={}) {
    let classList = normalizeData(className);
    let styles = {};
    const width = Dimensions.get('screen').width;

    classList.forEach(item => {
        if (width >= 576) {
            if (item.includes('sm')) {
                item = item.replace('sm-', '');
            }
        }
        if (width >= 768) {
            if (item.includes('md')) {
                item = item.replace('md-', '');
            }
        }
        if (width >= 992) {
            if (item.includes('lg')) {
                item = item.replace('lg-', '');
            }
        }
        if (width >= 1200) {
            if (item.includes('xl')) {
                item = item.replace('xl-', '');
            }
        }
        styles = {...styles, ...styleBootstrap[item]};
        if(customClass.hasOwnProperty(item)) {
            console.log({...customClass[item]})
            styles = {...styles, ...styleBootstrap[item], ...customClass[item]};
        }
    });
    return styles;
}

export const hexToRgb = (hex, opacity) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let rgb = result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
    if(rgb && opacity){
        return 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + opacity + ')'
    } else if (rgb) {
        return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')'
    }
    return hex;
};

function normalizeData(data) {
    let dataBase = data.split(' ');
    let dataWhenSplit = {};
    dataBase.forEach((item, i) => {
        let index = item.substr(0, item.indexOf('-'));
        if(!item.includes('-')) {
            index = item;
        }
        if(item.includes(index)) {
            if(index !== "") {
                let priority = getPriority(item, i);
                dataWhenSplit[index] = {...dataWhenSplit[index]};
                dataWhenSplit[index][priority] = item
            } else {
                dataWhenSplit[item] = {...dataWhenSplit[item]};
                dataWhenSplit[item][Date.now()] = item;
            }
        }
    });
    let dataNormalize = [];
    Object.keys(dataWhenSplit).forEach(key => {
        if(typeof dataWhenSplit[key] === "object" || typeof dataWhenSplit[key] === 'function') {
            Object.keys(dataWhenSplit[key]).sort((a,b) => {
                return a-b
            }).forEach(miniKey => {
                dataNormalize.push(dataWhenSplit[key][miniKey])
            })
        }
    });
    return dataNormalize
}

function getPriority(className, i) {
    if (className.includes('md')) {
        return 1;
    } else if (className.includes('lg')) {
        return 2;
    }
    let index = Date.now();
    return (index + i) * -1
}
