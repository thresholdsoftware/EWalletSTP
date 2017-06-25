import * as Http from './http.util';

export const login = (loginPayload) =>
Http.post('LOGIN', loginPayload,
  {additional: ['FTXID']});

export const register = (registerPayload) =>
  Http.post('REGISTER', registerPayload,
    {additional: ['FTXID']});

export const logout = () => Http.get('LOGOUT');

export const user = () => Http.get('USER');

export const getTransactions = () => Http.get('TRANSACTIONHISTORY');

export const confirmTransfer = (payload) =>
  Http.post('CONFIRMTRANSFER', payload, {additional: ['FTXID']});

export const transfer = (payload) =>
Http.post('TRANSACT', payload, {additional: ['FTXID']});


export const creditRequest = (payload) =>
Http.post('CREDITREQUEST', payload, {additional: ['FTXID']});


export const sendVerificationMessage = (payload) =>
Http.post('SENDVERIFICATIONMESSAGE', payload, {additional: ['FTXID']});

export const verifyPhone = (payload) =>
Http.post('VERIFYPHONE', payload, {additional: ['FTXID']});

export const changePassword = (payload) =>
Http.post('CHANGEPASSWORD', payload, {additional: ['FTXID']});

export const updateProfile = (payload) =>
Http.post('UPDATEPROFILE', payload, {additional: ['FTXID']});
