import React from 'react';
import { Link } from 'react-router-dom'
import AuthService from '../services/auth.service';
import EventBus from '../common/EventBus';
import { FiLogIn } from "react-icons/fi";

class Navbar extends React.Component {
  
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    }
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
        this.logOut();
    });
  
  }
  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
        <nav class="navbar navbar-expand-lg bg-transperant navbar-light">
      <div class="container-fluid">
            <h2><Link class ="nav-link text-dark" to ="/home">Welcome</Link></h2>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
            
            
          
          </ul>
          {currentUser ? (
                    
                    <div>
                        <ul class ="navbar-nav  mb-2 mb-lg-9">
                            <li className = "nav-item text-white">
                                <Link to = {"/userhome"} className="nav-link text-white p-3">{currentUser.name}</Link>

                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link text-white p-3" onClick={this.logOut}>
                                        LogOut
                                </a>
                            </li>
                        </ul>
                    </div>
                ): (
                    <ul>
                      
                </ul>
                )}
          <form class="border-none">
            
            <Link  to = "/stslogin"  class="nav-link"><h1 class="text-dark"><FiLogIn/></h1></Link>

            
          </form>
        </div>
      </div>
    </nav>
    );
  }
}     
export default Navbar;
