import React, { useEffect, useState } from 'react'
import './style.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
const Home = () => {
  const [data, setData] = useState();
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
     axios.get('https://fakestoreapi.com/products').then((response)=>{
        setData(response.data);
        setLoading(false)
     })
  },[])
  // console.log("saal",data.image);
  return (
    <div className='home_body'>

     <div className='home_container'>
        <div className='cards'>
        {
          loading?(<div className='loading_body'>
          <span class="loader">LOADING...</span>

          </div>):(
           data.map((item)=>{
            return(
               <div>
               <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={item.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add Basket</Button>
      </CardActions>
    </Card>
               </div>
            )
           })
          )
        }
         
        </div>
     </div>
    </div>
    
  )
}

export default Home