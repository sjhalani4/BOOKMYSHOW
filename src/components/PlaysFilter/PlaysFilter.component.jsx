import { Disclosure } from '@headlessui/react'
import {BiChevronUp,BiChevronDown} from "react-icons/bi"

const PlaysFilter = (props)=> {
    return (
      <Disclosure>
        {
            ({open}) => (
                <>
                
                <Disclosure.Button className="py-2 flex items-center gap-3">
        {open?<BiChevronUp/>:<BiChevronDown/>}
        <div className={ open ? "text-red-600" : "text-gray-700"}  >{props.title}</div>
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500">
        <div className="flex items-center flex-wrap gap-3">
        {props.tags.map((tag) => (
            <>
           < div className="border-2  px-3 py-2 border-gray-200">
              <span className="text-red-600">{tag}</span>
        </div>
            </>
        ))}
        
        
        </div>
      </Disclosure.Panel>
    
          </>  )
        }
      </Disclosure>
    )
  }
  export default PlaysFilter;