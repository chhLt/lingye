import React, { useEffect } from 'react'
import { RootState } from 'store/index'
import { useAppSelector, useAppDispatch } from 'hooks/hooks'
import { decrement, increment,incrementByAmount,incrementAnyc } from 'store/module/counterSlice'
import {Button} from 'antd'
interface Props{
  menuList:Array<any>
}

const Home: React.FC<Props> = (props: any) => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const moveList = useAppSelector(state=>state.move.list)
  const dispatch = useAppDispatch()
  console.log(moveList);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(2))}
        >
          自定义
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementAnyc(Math.random()*10))}
        >
          异步更新  1
        </button>
        <Button type='primary' >延迟触发 </Button>
    
      </div>
    </div>
  )
}

export default Home;