import React from 'react'
import TestComp4 from './TestComp4'

export default function TestComp3(props: any) {
  return <TestComp4 name={props.user.name}></TestComp4>
}
