import React from 'react'
import PropTypes from 'prop-types';

const BootstrapContext = React.createContext();

export class BootstrapProvider extends React.Component {
    static defaultProps = {
        children: null
    };

    render() {
        const { children } = this.props;

        return (
            <BootstrapContext.Provider value={{}}>
                {children}
            </BootstrapContext.Provider>
        );
    }
}

export function useBootstrap(Component) {
    return class extends React.Component {
        render() {
            const { props } = this;
            return (
                <BootstrapContext.Consumer>
                    {theme => (
                        <Component
                            {...props}
                        />
                    )}
                </BootstrapContext.Consumer>
            );
        }
    };
}

BootstrapProvider.propTypes = {
    children: PropTypes.any
};