import { requestHTTPGetUsersAdmin } from './requests';
import React, { useEffect, useState } from "react";
import { ModalCreateUser, ModalDeleteUser, ModalEditUser} from './Modals';
import Table from 'react-bootstrap/Table';
const tokenAccess = localStorage.getItem('loginToken');

export const TableUsers = () => {

    const [users, setUsers] = useState([]);
    const [updateListUsers, setUpdateListUsers] = useState(false);
    const [dataEditUser, setDataEditUser] = useState({});

    useEffect(() => {
        requestHTTPGetUsersAdmin(tokenAccess).then((res) => {
            setUsers(res)
        })
    }, [updateListUsers])

    return (
        <div>
            <Table className="tableAdmin">
                <tbody>
                    <tr>
                        <th>Role</th>
                        <th>Email</th>
                    </tr>
                    {users.map((user, index) =>
                        <tr key={index}>
                            <td>{user.role}</td>
                            <td>{user.email}</td>
                            <td><ModalEditUser user={user} setUpdateListUsers={setUpdateListUsers}
               updateListUsers={updateListUsers} setDataEditUser={setDataEditUser} dataEditUser={dataEditUser} /></td>
                            <td><ModalDeleteUser user={user} setUpdateListUsers={setUpdateListUsers}
               updateListUsers={updateListUsers} /></td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <ModalCreateUser setUpdateListUsers={setUpdateListUsers}
               updateListUsers={updateListUsers} />
        </div>
    )
}
