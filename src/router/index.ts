import express from 'express';
import users from './users';
//A router in Express is a middleware that allows you to group related
//routes together and manage their behavior separately from the main application.
const router = express.Router();

export default(): express.Router => {
    users(router);
    return router;
};