import { Container, IconButton, Typography } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Link from 'next/link';
const result = ({ result }) => {


    return (
        <>
            <Link href='/'>
                <IconButton
                    size="large"
                    edge="start"
                    color="secondary"
                    aria-label="menu"
                    sx={{ m: 3 }}

                >
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </IconButton>
            </Link>
            <Container>
                <Typography variant='h3' color='secondary'>
                    Board Exam & Result
            </Typography>
                <TableContainer >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell align="right">Year</TableCell>
                                <TableCell align="right">Total</TableCell>
                                <TableCell align="right">Pass</TableCell>
                                <TableCell align="right">GPA 5</TableCell>
                                <TableCell align="right">Percent</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                result.map(item =>
                                    <TableRow

                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >

                                        <TableCell align="right">{item.year}</TableCell>
                                        <TableCell align="right">{item.total}</TableCell>
                                        <TableCell align="right">{item.pass}</TableCell>
                                        <TableCell align="right">{item.gpa5}</TableCell>
                                        <TableCell align="right">{item.percent}</TableCell>
                                    </TableRow>
                                )
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default result;

export async function getStaticProps() {
    const res = await fetch(`https://gmhsclone.herokuapp.com/result`)
    const resultData = await res.json()

    return {
        props: { result: resultData }
    }
}





