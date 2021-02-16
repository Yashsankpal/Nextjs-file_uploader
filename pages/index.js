import { useState , useEffect} from 'react';
import Head from '../components/head'
import fetch from 'isomorphic-fetch'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import moment from 'moment'

export default function Home() {

  const [File,setFile] = useState(null);
  const [isSelected , setisSelected] = useState(true)
  const onSubmit = async() =>{
    if(File){
      if(!(File.size > 1024000)){
        let formData = new FormData()
        formData.append('File',File)
        const res = await fetch('api/fileUpload',{
          method:'POST',
          headers:{
            'auth-token':`${moment().format('DD-MM-YYYY')}${File.name.slice(0,3)}`
          },
          body:formData
        })
        console.log(res);
      }
    }
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Validate File Content in NextJs {':)'}
        </h1>
      </main>
      <div className={styles.grid}>
        <input type='file' onChange={(e)=>setFile(e.target.files[0])} accept='image/*' className={styles.card}/>
      </div>
          {isSelected}
      <input type='button' onClick={onSubmit} />
      <footer className={styles.footer}>
          Powered by Yash 
      </footer>
    </div>
  )
}


/**
      if(!File.name.match(/\.(jpg|png)$/)){
        console.log('Please select valid image.');
        setisSelected(isSelected)
        console.log(File);
        return false;
      }
      if(File.size > 1024000){
        console.log('File size too large!');
 */