import React from 'react';
import { useHistory } from 'react-router-dom';

const HomePage = () => {

    const history = useHistory();

    const goToames = () => {
        history.push('/games');
    }

    const goToCharacters = () => {
        history.push('/characters');
    }

    return (
       <div>
         <div className='homepage-background-image text-center pt-4'>

            <div className='mb-4'>
            <span className='title-style'>Electric Game</span>

            </div>

            <div>
              
              <span className='span1' onClick={goToames} style={{cursor: 'pointer'}}><a></a></span>
  
              <span className='span2' onClick={goToCharacters} style={{cursor: 'pointer'}}><a></a></span>
  
               
  
  
              </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div>
                <span className='title-style'>Welcome To Electric Game</span>
            </div>
           

       
          
             


            </div>

            
            
        </div>

        

      
    );
};

export default HomePage;