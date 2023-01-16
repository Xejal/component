import React, { Component } from 'react'
import Contacts from '../Contacts/Contacts '
import Experience from '../Experience/Experience'
import PersonalInfo from '../Personalinfo/Personalinfo'

export default class UserCV extends Component {
  render() {
    return (
      <div>
        <PersonalInfo/>
        <Experience/>
        <Contacts/>
      </div>
    )
  }
}
