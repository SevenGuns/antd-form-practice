import { useEffect, useRef } from 'react'
import ReactDom from 'react-dom'

// portals最好自己管理自己的外层，包裹起来
const TestComp = (props: any) => {
  const el = useRef(document.createElement('div'))
  const { domNode } = props
  useEffect(() => {
    const { current } = el
    console.log('current2')
    if (domNode) domNode.appendChild(current)
    console.log(domNode)
    return () => {
      if (domNode) domNode.removeChild(current)
    }
  }, [domNode])
  // createPortal 会挂载node 卸载的时候也会卸载 但是el不会被销毁
  return ReactDom.createPortal(props.children, el.current)
}

export default TestComp
