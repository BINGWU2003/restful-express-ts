import express from 'express';
import { getUsers, createUsers } from '../db/users';

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();
        return res.status(200).json(users) as any
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

export const createUser = async (req: express.Request, res: express.Response) => {
    try {
        const { username, password } = req.body;
        const user = await createUsers(username, password);
        return res.status(201).json(user) as any;
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}