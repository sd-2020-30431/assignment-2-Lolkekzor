import React from 'react';

import './AuthLayout.css';

import BaseLayout from './BaseLayout';

class AuthLayout extends React.Component {
    render() {
        return (
            <BaseLayout>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        {this.props.children}
                    </div>
                </div>
            </BaseLayout>
        )
    }
}

export default AuthLayout;
