import { View, KeyboardTypeOptions, Button } from 'react-native'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { loginStyle } from '../../styles'
import { customDarkInputStackStyle, customInputStackStyle, PASSWORD, USERID } from '../../constants/constants';
import { InputWLabel } from '../../utilComponents';
import { baseUrl } from '../../../cfg';

interface ILogin {
    setLoggedIn: Dispatch<SetStateAction<boolean>>;
    darkMode?: boolean
    userId: string
    setUserId: Dispatch<SetStateAction<string>>;
}

export default function Login(props: ILogin) {
    const { setLoggedIn, darkMode = false, userId, setUserId } = props
    const [password, setPassword] = useState<string>('')

    const inputFields = [
        {
            id: 0,
            label: "ID",
            onChangeText: (e: any) => onChangeHandler(e, USERID),
            placeholder: "Israel123",
            keyboardType: "default" as KeyboardTypeOptions,
            customStylesInputStack: darkMode
                ? customDarkInputStackStyle
                : customInputStackStyle,
            darkMode
        },
        {
            id: 1,
            label: "Pass",
            onChangeText: (e: any) => onChangeHandler(e, PASSWORD),
            placeholder: "1234",
            keyboardType: "default" as KeyboardTypeOptions,
            customStylesInputStack: darkMode
                ? customDarkInputStackStyle
                : customInputStackStyle,
            darkMode
        }
    ]


    const onChangeHandler = (e: any, field: string) => {
        switch (field) {
            case USERID:
                setUserId(e)
                break

            case PASSWORD:
                setPassword(e)
                break
        }
    }

    const handleLogin = async () => {
        try {
            const res = await fetch(`${baseUrl}/users/id`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId: userId })
            })
            type User = {
                _id: string
                id: string
                isAdmin: boolean
                withPermissions: boolean
                name: string
                password: string
            }

            const json: { value: User[] } = (await res.json())
            const user = json.value[0];

            if (userId.toLowerCase() === user.id.toLowerCase())
                if (password === user.password) {
                    console.log(`LOGIN:: ${userId.toLowerCase()} Logged in successfully`)
                    setLoggedIn(true)
                }
                else {
                    console.log(`LOGIN:: Wrong Password userId: ${userId}`)
                }

        } catch (err) { console.error(err) }
        finally {
            console.log('ended')
        }

    }

    return (
        <View style={loginStyle.loginContainer}>
            {inputFields.map((inputData) => (
                <InputWLabel {...inputData} key={inputData.id} />
            ))}
            <View style={{ position: 'absolute', bottom: '5%', left: '43.5%' }}>
                <Button title='LOGIN' onPress={handleLogin} />
            </View>
        </View>
    )
}