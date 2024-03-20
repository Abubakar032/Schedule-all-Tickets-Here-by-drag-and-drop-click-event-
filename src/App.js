import React from 'react'
import ParentCom from './ParentCom'
import Context from './Context'




const App = () => {
  return (
<div>

{/* ##################context component k under parent copnent ko include kia he , ta k parent k under jo childeren he , us me hum context ki state or function ko kisi bi jga use kar skty he ############## */}

<Context>
  <ParentCom />
</Context>
    </div>
  )
}

export default App
