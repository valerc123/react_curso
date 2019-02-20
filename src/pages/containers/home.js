import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related';
import PortalContainer from '../../widgets/containers/portal';
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handleError";
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component{
    state = {
        modalVisible: false
    }
    handleOpenModal=(event) =>{
        this.setState({
            modalVisible: true
        })
    }
    
    handleCloseModal =(event) =>{
        this.setState({
            modalVisible: false
        })
    }
 render()
    {
        return(
            <HandleError>
                <HomeLayout>
                    <Related />
                    <VideoPlayer 
                    autoplay />
                    <Categories categories={this.props.data.categories} 
                    handleOpenModal ={this.handleOpenModal} />
                    {
                    this.state.modalVisible &&
                    <PortalContainer>
                        <Modal handleClick={this.handleCloseModal}>
                            <h1>Esto es un portal </h1>
                        </Modal>
                    </PortalContainer>
                    } 
                </HomeLayout>
            </HandleError>
        )       
    }
}  

export default Home