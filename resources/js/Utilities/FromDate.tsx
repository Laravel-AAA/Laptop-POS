import moment from 'moment'
import React from 'react'

export default function FromDate({date}:{date:string}) {
  return (
    <strong>{moment(date).fromNow()}</strong>
  )
}
