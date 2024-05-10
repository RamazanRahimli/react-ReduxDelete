import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { deletePostt, getSliceThunk,deleteSliceThunk } from '../../Store/Reducer/getSlice';

const Products = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.getSlice.products);
    useEffect(() => {
        dispatch(getSliceThunk());
    },[]);
    const deletePost = (id) => {
      dispatch(deleteSliceThunk(id))
      dispatch(deletePostt(id))
    }
  return (
    <div>
    {data &&
      data.map((item) => (
        <div>
          <p>{item.title}</p>
          <button onClick={() => deletePost(item.id)}>Sil</button>
        </div>
      ))}
  </div>
  )
}

export default Products