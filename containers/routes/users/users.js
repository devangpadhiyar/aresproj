/**
 * Copyright 2015-present, Lights in the Sky (3273741 NS Ltd.)
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree. 
 * 
 * @providesModule Profile
 */

import React, {Component} from 'react';
import {Link} from 'react-router';
import * as actions from '../../../actions';
import { connect } from "react-redux";
import {Table} from '../../../components/ui';
import ItemSelect from '../../../components/ui/itemSelect'
import {Button} from '../../../components/ui'
import UserTable from './userTable'
				// 
class Users extends Component {

	state={countryId:''}

	componentWillMount() {
		console.log("mounted")
		// this.props.userAccess==1&&this.props.dispatch(actions.getCountries(this.props.token, this.props.id))
		this.props.dispatch(actions.getUsers(this.props.token, this.props.id))
		
	}
	render() {
		console.log("users", this.props.users)
		const {users} = this.props.users;
		// let cities = [];
		return (
			<div>
			{<UserTable dispatch={this.props.dispatch} users={users}/>}
			
			</div>


		);
	}
}
function mapStateToProps(state) {
  return {
    token:state.app.token,
    id:state.app.id,
    userAccess: state.app.userAccess,
    userCountry:state.app.country,
    phone:state.country.phone,
    users:state.users
  };
}
export default connect(mapStateToProps)(Users);