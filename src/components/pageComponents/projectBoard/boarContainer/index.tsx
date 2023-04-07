import { useState, useRef, useEffect } from "react";
import Board from "./boardCard";
import Header from "./header";
import { GrFormClose } from "react-icons/gr";
import { HiPlusSm } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { getCards, selectAllCard } from "features/card/cardSlide";

interface CardProps {
  title?: string;
  BoardId?: string;
}

const Card = ({ title, BoardId }: CardProps) => {
  const [showCardForm, setShowCardForm] = useState<boolean>(false);
  const [tasks, setTasks] = useState<string[]>([]);
  const formRef = useRef<HTMLDivElement>(null);
  const [activeTaskIndex, setActiveTaskIndex] = useState<number>(-1);
  const CarddRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (showCardForm) {
      formRef.current!.querySelector("input")!.focus();
    }
  }, [showCardForm]);
  const task = useAppSelector(selectAllCard);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCards());
    // console.log(getCar);
    
  }, [dispatch]);

  return (
    <div className="w-taskboard overflow-x-auto">
      <Header />
      <div className="flex ">
        <div className="flex mr-1">
          {task.map((cards) => (
            <div className="ml-3">
              <div className="mr-1 bg-card rounded-sm">
                <Board idCard={cards._id} title={cards.name} />
              </div>
            </div>
          ))}
        </div>

        <div>
          {showCardForm ? (
            <div className="bg-card w-card rounded-sm" ref={formRef}>
              <form className="p-1" action="">
                <input
                  className="placeholder:text-sm focus:outline-none w-full bg-white rounded-sm py-1 border-2 border-gray-100 focus:border-blue-500 shadow-inputsd"
                  type="text"
                />
                <div className="flex items-center w-full mt-3">
                  <button
                    className=" text-white rounded-sm bg-submitadd p-1"
                    type="submit"
                  >
                    <p>Thêm danh sách</p>
                  </button>
                  <button
                    className="text-2xl ml-2"
                    onClick={() => setShowCardForm(false)}
                  >
                    <GrFormClose />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <button
                className="flex item-center text-xl text-white p-1.5 rounded-sm bg-sidebarhover hover:bg-buttonnavhover ml-2 cursor-pointer"
                onClick={() => setShowCardForm(true)}
              >
                <div className="mr-1">
                  <HiPlusSm />
                </div>
                <p className="text-sm">Thêm các danh sách khác </p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
