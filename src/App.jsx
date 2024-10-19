import { useState, useEffect } from 'react'
const App = ({ appinfo }) => {
  let application = [
    {
      id: 1,
      projectName: 'linguamura Web app',
      description: 'A job listing platform'
    },

    {
      id: 2,
      projectName: 'adnerx',
      description: 'An advertisement website'
    },

    {
      id: 3,
      projectName: 'vois',
      description: 'virtual assistance'
    },

    {
      id: 4,
      projectName: 'fetchJS',
      description: 'A javascript library to handle cors error'
    }
  ]
  const [appData, updateAppData] = useState(application)

  const clearProject = x => {
    let update = appData.filter(data => data.id !== x)
    updateAppData(update)
  }

  const refresh = () => {
    window.location.reload(true)
  }

  const edit = appdata => {
    let update = prompt('enter new app description', '')
    updateAppData(
      appData.filter(y => y.id == appdata)
        ? { ...appData, description: update }
        : { ...appData }
    )

    fade()
  }

  const fade = () => {
    setTimeout(() => {
      document.querySelector('.para').style.color = 'black'
    }, 2000)
  }

  return (
    <div className='code'>
      <div className='header'>
        <p className='name'>{appinfo.name}</p>
        <span>
          count: {appData.length ? appData.length + ' list' : 'no list'}
        </span>
      </div>
      {appData.length ? (
        appData.map(content => (
          <div className='content' key={content.id}>
            <p className='para' id={content.id}>
              {content.projectName}
            </p>
            <small>{content.description}</small>
            <br />
            <button onClick={() => clearProject(content.id)}>Delete</button>
            <p onClick={() => edit(content.id)}>Edit</p>
          </div>
        ))
      ) : (
        <div className='flex'>
          <p>empty codebase</p>
          <p onClick={refresh}>refresh</p>
        </div>
      )}
    </div>
  )
}

export default App
