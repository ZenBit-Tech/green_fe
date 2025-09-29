import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { increment } from "../../store/slices/counterSlice";

export const useButtonHooks = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.value);

  const handleClick = () => {
    dispatch(increment());
  };

  return { count, handleClick };
};
