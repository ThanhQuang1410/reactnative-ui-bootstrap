import React, { Component }  from 'react'
import {View} from 'react-native'
import {useBootstrap} from "./theme/index";
import PropTypes from 'prop-types';

class ViewBootstrap extends Component {
    render() {
        const {
            style,
            className,
            children,
            ...props
        } = this.props;

        const styleBlock = generateStyle(className);

        return (
            <View {...props} style={[style, styleBlock]}>
                {children}
            </View>
        );
    }
}
function generateStyle(className) {
    if(typeof className === 'string') {
        return styleBootstrap[className];
    } else if (Array.isArray(className)) {
        let styles = {};
        className.forEach(item => {
            styles = {...styles, ...styleBootstrap[item]}
        });
        console.log(styles)
        return styles;
    }
}
const styleBootstrap = {
    'row' : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflow: 'visible',
        padding: 5
    },
    'align-items-center' : {
      justifyContent: 'center',
      alignItems: 'center'
    },
    'col' : {
        flexGrow: 1
    },
    'col-2' : {
        width: (100/6) + "%"
    },
    'col-3' : {
        width: (100/4) + "%"
    },
    'col-4' : {
        width: (100/3) + "%"
    },
    'col-6' : {
        width: (100/2) + "%"
    },
    'col-8' : {
        width: (100*2/3) + "%"
    },
    'col-9' : {
        width: (100*3/4) + "%"
    },
    'offset-1' : {
        marginLeft: "8.333333%"
    },
    'offset-2' : {
        marginLeft: "16.666667%"
    },
    'offset-3' : {
        marginLeft: "25%"
    },
    'offset-4' : {
        marginLeft: "33.333333%"
    },
    'offset-5' : {
        marginLeft: "41.666667%"
    },
    'offset-6' : {
        marginLeft: "41.666667%"
    },
    'offset-7' : {
        marginLeft: "58.333333%"
    },
    'offset-8' : {
        marginLeft: "66.666667%"
    },
    'offset-9' : {
        marginLeft: "75%"
    },
    'offset-10' : {
        marginLeft: "83.333333%"
    },
    'offset-11' : {
        marginLeft: "91.666667%"
    }
};
ViewBootstrap.defaultProps ={
    className: null
};
ViewBootstrap.propTypes = {
    className: PropTypes.string
};
export default useBootstrap(ViewBootstrap, {asdas: 'asdas'});