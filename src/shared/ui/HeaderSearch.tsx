import { useState } from 'react'
import Logo from './header-search.svg'
import cl from './HeaderSearch.module.scss'

export const HeaderSearch = ({typeInput}: {typeInput: string}) => {
    const [inputValue, setInputValue] = useState<string>('')

    

    return (
        <div className={cl.root}>
            <img
                className={cl.root__logo}
                src={Logo}
                alt='header-search' />
            <input
                className={cl.root__input}
                type={typeInput}
                placeholder='Search course'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}/>
          </div>
          
  )
}
