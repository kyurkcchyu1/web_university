import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import './LogIn.css'
interface User {
    username: string;
    password: string;
}

const initialUsers: User[] = [
    { username: 'admin', password: 'admin' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
];

const LogIn: React.FC = ({close}:any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const [alertType, setAlertType] = useState<'success' | 'danger'>('success');

    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (!storedUsers) {
            localStorage.setItem('users', JSON.stringify(initialUsers));
        }
    }, []);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            const parsedUsers: User[] = JSON.parse(storedUsers);
            const matchingUser = parsedUsers.find((user) => user.username === username && user.password === password);
            if (matchingUser) {
                setMessage('Login successful');
                setAlertType('success');
                localStorage.setItem('currentUser',JSON.stringify(username))
                setTimeout(close,500)
            } else {
                setMessage('Invalid username or password');
                setAlertType('danger');
            }
        }
    };
    return (
        <MDBContainer className="login">
            <MDBRow>
                <MDBCol md="6">
                    <MDBCard className="login--form">
                        <MDBCardBody>
                            <form onSubmit={handleSubmit}>
                                LogIN
                                <p className={`h4 text-center mb-4 text-${alertType}`}>{message}</p>
                                <div className="grey-text d-flex flex-column gap-4">
                                    <MDBInput
                                        label="Username"
                                        type="text"
                                        value={username}
                                        onChange={handleUsernameChange}
                                    />
                                    <MDBInput
                                        label="Password"
                                        type="password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                </div>
                                <div className="text-center mt-3 d-flex gap-5 justify-content-center">
                                    <MDBBtn type="submit">Login</MDBBtn>
                                    <MDBBtn color="danger" outline onClick={close}>Close</MDBBtn>
                                </div>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default LogIn;
