import React, { useState } from 'react'
import ScrollBlock from './ScrollBlock'
import ImageCover from './ImageCover'

function StudyingPage() {
   console.log('wholw app rerender')

   return (
      <ScrollBlock>
         <ImageCover />
      </ScrollBlock>
   )
}

export default StudyingPage
