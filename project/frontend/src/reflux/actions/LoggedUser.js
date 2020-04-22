import Reflux from 'reflux';

const LoggedUserActions = Reflux.createActions([
    'login',
    'tokenAuthenticate',
    'logout'
])

export default LoggedUserActions;
