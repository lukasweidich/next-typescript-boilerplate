import React from 'react'
import { UserInterface } from '../db/types/User';
import { protectRoute } from '../utils/pageAuth';

export const getServerSideProps = protectRoute(
    async (user: UserInterface, token: string) => {
        return {
            props: { user: JSON.stringify(user), token },
        };
    },
    /**
     * [async (user) => user.isAdmin]
     * check for admin status for example
     */
    [] // otherwise, user just needs to be logged in
);

const secret = ({ user: userString, token }) => {
    const user: UserInterface = JSON.parse(userString)
    return (
        <div>
            {user.firstName} this is a protected path that can only be accessed when logged in
        </div>
    )
}

export default secret
