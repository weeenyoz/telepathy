import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginRight: theme.spacing(2),
        },
        actions: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
    }),
);

interface PostTweetFormProps {
    formHandler: (submitted: boolean) => void;
}

const PostTweetForm: React.FC<PostTweetFormProps> = (props: PostTweetFormProps) => {
    const classes = useStyles();

    const { formHandler } = props;

    const [status, setStatus] = useState('');
    const [isSubmitted, toggleIsSubmitted] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setStatus(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        try {
            const result = await axios.post('/api/tweeter/', { status });

            if (result && result.status === 204) {
                toggleIsSubmitted(true);
                formHandler && formHandler(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (isSubmitted) {
            setStatus('');
        }
    }, [isSubmitted]);

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        variant="standard"
                        fullWidth
                        placeholder="What's happening?"
                        multiline
                        onChange={handleChange}
                        name="status"
                        value={status}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Box className={classes.actions}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={status ? false : true}
                        >
                            Tweet
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </form>
    );
};

export default PostTweetForm;
