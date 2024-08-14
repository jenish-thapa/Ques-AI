import React from 'react'
import "./Upload.css"
import { UploadNav } from '../../components/UploadNav'
import { AddPodcast } from '../../components/AddPodcast'

const Upload = () => {
  return (
    <div className='upload'>
        <UploadNav />
        <AddPodcast />
    </div>
  )
}

export default Upload