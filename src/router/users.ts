import express from 'express';

import { getAllUsers, createUser } from '../controllers/users';
export default (router: express.Router) => {
    router.get('/users', getAllUsers);
    router.post('/users', createUser);
};