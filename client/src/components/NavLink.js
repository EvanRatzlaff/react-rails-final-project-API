import React, { Component } from 'react'
import {Link} from 'react-router-dom'

    export class NavLink extends Component {
         render() {
             return (
                 <nav className="yellow darken-2">
                     <div className="container">
                         <Link to="/new" className="center hide-on-med-and-down">Design A Dream Car</Link>
                         <Link to="/cars" className="left hide-on-med-and-down">View Other Masterpieces</Link>
                          {/* <Link to="/cars/:id" className="right hide-on-med-and-down">Helpful Tips for Your Car</Link>  */}
                         {/* <Route exact path="/cars/:id" render={(routerprops) => <CarTips {...routerprops} />  } /> */}
                     </div>
                 </nav>
             )
         }
    }

export default NavLink

