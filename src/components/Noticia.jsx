import { CardMedia,Card, Grid, CardContent, Link, Typography, CardActions } from "@mui/material"


export const Noticia = ({noticia}) => {
    const {image,url,title,description,source} = noticia
  return (
    <Grid item md={6} lg={4}>
        <Card>
            {image && (
                <CardMedia
                    component="img"
                    alt={`Imagen de la noticia ${title}`}
                    image={image}
                    height={'250'}
                ></CardMedia>
                )}
                <CardContent>
                    <Typography variant='body1' color='error'  textAlign='left'>
                        {source.name}
                    </Typography>
                    <Typography variant='h5' component='div' textAlign='left'>
                        {title}
                    </Typography>
                    <Typography variant='body2' component='div' textAlign='left' marginTop={1}>
                        {description}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Link
                        href={url}
                        target="_blank"
                        variant="button"
                        width={"100%"}
                        textAlign={'center'}
                        sx={{
                            textDecoration: 'none'
                        }}
                    >
                        Leer Noticia
                    </Link>
                </CardActions>
        </Card>
    </Grid>
  )
}
