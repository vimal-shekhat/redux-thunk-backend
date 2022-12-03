import { Button, Grid, Paper, TextField } from '@mui/material'
import React, { useState } from 'react';


export default function Login() {
    const [form, setName] = useState({});


    const handleChange = (event) => {
        console.log("abbabbab", event.target.value)
        setName({ [event.target.name]: event.target.value })
    }
    console.log(form)
    return (

        <div style={{ padding: 200 }}>
            <Paper  >
                <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <Grid item xs={12}>
                        <input type="email" placeholder="Email Address" name="email" value={form.email}
                            onChange={e => handleChange(e)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Password" type={'password'} onChange={(e) => handleChange(e)} />
                    </Grid>

                    <Grid item xs={12}>
                        <Button fullWidth color="secondary"> Login </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>

    )
}
