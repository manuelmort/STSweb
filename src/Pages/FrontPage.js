import React from 'react';
import { Container } from 'react-bootstrap'


import './FrontPage.css';

class FrontPage extends React.Component {




    render() {
        return (

            <div>

                <Container>
                    <h1 class="text-center display-1 mt-5 p-5">
                                STS</h1>
                    <Container className="d-flex align-items-center justify-content-center"
                    style ={{minHeight: "25vh"}}>
                        
                        
                        

                        

                        <div className = "typewriter">
                            <h1>Your friendly neighborhood IT department</h1>
                        </div>
                            

                    
                    

                    </Container>
                
                </Container>
            </div>
        )
    }
}

export default FrontPage;