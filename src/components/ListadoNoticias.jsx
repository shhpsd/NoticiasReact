import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useNoticias from '../hooks/useNoticias'
import { Noticia } from './Noticia'
import { Pagination, Stack } from '@mui/material'
const ListadoNoticias = () => {
  const {noticias, totalNoticias, handleChangePagina, pagina} = useNoticias()

  const totalPaginas = Math.ceil(totalNoticias / 20)

    return (
    <>
    
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h2'
            component={'h2'}
            fontWeight={'bold'}
            sx={2}
        >
            ULTIMAS NOTICIAS
        </Typography>

        <Grid
            container
            spacing={2}
        >
            {noticias.map(noticia =>(
                <Noticia
                    key={noticia.url}
                    noticia={noticia}
                ></Noticia>
            ))}
        </Grid>
        <Stack marginY={2} spacing={2} justifyContent={'center'} direction={'row'}> 
            <Pagination 
                count={totalPaginas} 
                onChange={handleChangePagina}
                color='primary'
                page={pagina}
                ></Pagination>
            
        </Stack>
    </>
  )
}

export default ListadoNoticias