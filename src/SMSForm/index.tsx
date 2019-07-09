import React, { useState, useContext } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"

import { loginContext } from "../_contexts/LoginContext"
import { Header } from "../_styles"

type FormProps = {
    id: number,
    email: string
}

export const SMSForm = ({ id, email }: FormProps) => {
    const [to, setUserPhone] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const auth = useContext(loginContext)

    const onSubmit = () => {
        setLoading(true);
        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ to })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setUserPhone('')
                    auth.login({ id, email })
                    setError(false)
                } else {
                    setLoading(false)
                    setError(true)
                }
            });
    }

    return (
        <Form
            onSubmit={e => {
                e.preventDefault()
                onSubmit()
            }}
        >
            <Header> Veuillez saisir votre numéro de téléphone</Header>
            <br />
            <FormGroup>
                <Input
                    type="tel"
                    name="to"
                    id="to"
                    value={to}
                    placeholder="+2126xxxxxxxx"
                    onChange={e => setUserPhone(e.target.value)}
                />
            </FormGroup>
            <Button type="submit" disabled={loading} block={true}>
                {loading ? "Loading..." : "Envoyer"}
            </Button>
            <br />
            {error ? <p>Erreur d'envoi SMS...</p> : null}
        </Form>
    );
}

export default SMSForm
